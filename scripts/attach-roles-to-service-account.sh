#!/bin/bash
set -e

PROJECT_ID=rody-splatoon3-buki-scope
REGION=asia-northeast1
PROJECT_NUMBER=$(gcloud projects describe $PROJECT_ID --format='value(projectNumber)')
CLOUDBUILD_SA="${PROJECT_NUMBER}@cloudbuild.gserviceaccount.com"
COMPUTE_SA="${PROJECT_NUMBER}-compute@developer.gserviceaccount.com"

echo "Project ID: $PROJECT_ID"
echo "Project Number: $PROJECT_NUMBER"
echo "Cloud Build Service Account: $CLOUDBUILD_SA"
echo "Compute Engine Service Account: $COMPUTE_SA"

# 必要なAPIを有効化
echo "Enabling necessary APIs..."
gcloud services enable cloudbuild.googleapis.com cloudfunctions.googleapis.com run.googleapis.com iam.googleapis.com --project=$PROJECT_ID

# Cloud Build サービスアカウントに必要な権限を付与
roles=(
    "roles/cloudfunctions.developer"
    "roles/iam.serviceAccountUser"
    "roles/cloudfunctions.admin"
    "roles/run.admin"
    "roles/storage.admin"
    "roles/artifactregistry.admin"
)

for role in "${roles[@]}"; do
    echo "Adding role to Cloud Build SA: $role"
    gcloud projects add-iam-policy-binding $PROJECT_ID \
        --member=serviceAccount:$CLOUDBUILD_SA \
        --role=$role
done

# Compute Engine デフォルトサービスアカウントに権限を付与
echo "Adding editor role to Compute Engine SA"
gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member=serviceAccount:$COMPUTE_SA \
    --role=roles/editor

# Firebase関数のリストを取得
echo "Fetching Firebase functions list..."
FUNCTIONS_OUTPUT=$(firebase functions:list --project=$PROJECT_ID)
echo "Firebase functions list output:"
echo "$FUNCTIONS_OUTPUT"

# 関数名を抽出
FUNCTIONS=$(echo "$FUNCTIONS_OUTPUT" | sed -n 's/│ \([^ │]*\) *│.*/\1/p' | sed '1d;/^$/d')

echo "Extracted function names:"
echo "$FUNCTIONS"

# 各関数に対してIAMポリシーを設定
while IFS= read -r FUNC; do
    if [ -z "$FUNC" ]; then
        echo "Empty function name, skipping..."
        continue
    fi
    
    echo "Setting IAM policy for function: $FUNC"
    
    # 関数の詳細情報を取得
    FUNC_INFO=$(gcloud functions describe "$FUNC" --region=$REGION --project=$PROJECT_ID --format=json 2>/dev/null)
    
    if [ $? -ne 0 ]; then
        echo "Warning: Could not retrieve information for function $FUNC. Skipping..."
        continue
    fi
    
    # Cloud Run サービス名を取得
    RUN_SERVICE=$(echo "$FUNC_INFO" | jq -r '.serviceConfig.service // empty')
    
    if [ -n "$RUN_SERVICE" ]; then
        echo "Found associated Cloud Run service: $RUN_SERVICE"
        # Cloud Run Invoker ロールを追加
        gcloud run services add-iam-policy-binding "$RUN_SERVICE" \
            --region=$REGION \
            --member=serviceAccount:$CLOUDBUILD_SA \
            --role=roles/run.invoker \
            --project=$PROJECT_ID
    else
        echo "Warning: Could not find associated Cloud Run service for function $FUNC"
        echo "Attempting to add invoker policy binding directly to the function..."
        
        # 関数に対する呼び出し権限を追加 (2nd gen 関数用)
        if ! gcloud functions add-invoker-policy-binding "$FUNC" \
            --region=$REGION \
            --member=serviceAccount:$CLOUDBUILD_SA \
            --project=$PROJECT_ID; then
            echo "Failed to add invoker policy binding to function $FUNC"
        fi
    fi
done <<< "$FUNCTIONS"

echo "IAM policies have been set for all Firebase functions in the project."
echo "Please check the output for any warnings or errors."
echo "You may now try to redeploy your Firebase functions."
