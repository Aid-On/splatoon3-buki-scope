This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Firebase 環境変数設定スクリプト

このスクリプトは、Firebase プロジェクトの設定を取得し、それらを環境変数として `.env.local` ファイルに書き込むことができます。これにより、ローカル開発環境で Firebase の設定を利用できるようになります。

### 使い方

1. このリポジトリをクローンするか、`create-env-local.js` ファイルをプロジェクトに追加します。

2. Firebase CLI をインストールし、プロジェクトを設定しておきます。

3. パッケージマネージャー (`npm` または `yarn`) を使用して、以下のスクリプトを実行します。

```bash
npm run create-env-local
# または
yarn create-env-local
```

4. スクリプトの実行時に `NEXT_PUBLIC_GCP_PROJECT_ID` の入力を求められるので、対象の GCP プロジェクト ID を入力します。

5. スクリプトが完了すると、プロジェクトルートに `.env.local` ファイルが作成されます。このファイルには以下の環境変数が設定されています。

```
NEXT_PUBLIC_FIREBASE_CONFIG={"projectId":"your-project-id","appId":"your-app-id","storageBucket":"your-storage-bucket","apiKey":"your-api-key","authDomain":"your-auth-domain","messagingSenderId":"your-sender-id"}
NEXT_PUBLIC_GCP_PROJECT_ID=your-project-id
NEXT_PUBLIC_GCP_REGION=asia-northeast1
```

6. `.env.local` ファイルはソースコード管理システム (Git) から自動的に除外されるため、機密情報が漏れる心配はありません。

7. アプリケーションのコードでは、`process.env` オブジェクトからこれらの環境変数にアクセスできます。

```javascript
const firebaseConfig = JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_CONFIG);
const gcpProjectId = process.env.NEXT_PUBLIC_GCP_PROJECT_ID;
const gcpRegion = process.env.NEXT_PUBLIC_GCP_REGION;
```

これで、ローカル開発環境で Firebase の設定を利用できるようになりました。

## 注意事項

- `.env.local` ファイルには機密情報が含まれているため、適切に管理し、公開しないでください。
- CI/CD 環境では、このスクリプトは使用せず、代わりに GitHub Actions などのワークフローで環境変数を設定してください。
