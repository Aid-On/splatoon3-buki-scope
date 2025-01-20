#!/bin/bash

set -e

# プロジェクトID
PROJECT_ID=rody-splatoon3-buki-scope

# 関数: ユーザーに確認を求める
confirm() {
    read -p "$1 (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
}

echo "Firebase and Google Cloud Setup Script"
echo "This script will set up Firebase and Google Cloud CLI for the project: $PROJECT_ID"
confirm "Do you want to continue?"

# Google Cloud ログイン
echo "Logging in to Google Cloud..."
gcloud auth login

# Google Cloud プロジェクトの設定
echo "Setting Google Cloud project..."
gcloud config set project $PROJECT_ID

# Firebase ログイン
echo "Logging in to Firebase..."
firebase login --reauth

# Firebase プロジェクトの設定
echo "Setting Firebase project..."
firebase use $PROJECT_ID

echo "Setup completed successfully!"
echo "Google Cloud project set to: $PROJECT_ID"
echo "Firebase project set to: $PROJECT_ID"

# 現在の設定を表示
echo "Current configuration:"
echo "Google Cloud:"
gcloud config list project
echo "Firebase:"
firebase projects:list

echo "You're now ready to deploy your Firebase functions!"

echo "All done! You can now deploy your Firebase functions."
