const { execSync } = require("child_process");
const fs = require("fs");
const readline = require("readline");

// ユーザー入力を取得する関数
function getUserInput(question) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

async function createEnvFile() {
  try {
    // NEXT_PUBLIC_GCP_PROJECT_IDをユーザーから入力として取得
    const gcpProjectId = await getUserInput("Enter NEXT_PUBLIC_GCP_PROJECT_ID: ");

    // NEXT_PUBLIC_OPENAI_API_KEYをユーザーから入力として取得
    const openaiApiKey = await getUserInput("Enter NEXT_PUBLIC_OPENAI_API_KEY: ");

    // NEXT_PUBLIC_GCP_REGIONを設定（必要に応じて変更）
    const gcpRegion = "asia-northeast1";

    // Firebase プロジェクトの設定を取得
    const config = execSync(`firebase apps:sdkconfig --project ${gcpProjectId}`, { encoding: "utf-8" });

    // オブジェクト構造を抽出
    const match = config.match(/{.*}/s);
    if (match) {
      const objectStr = match[0];

      // 抽出したオブジェクト構造をJSONとしてロード
      const firebaseConfig = JSON.parse(objectStr);

      // JSONを1行の文字列として出力
      const firebaseConfigString = JSON.stringify(firebaseConfig);

      // .env.localファイルに環境変数を書き込む
      const envContent = `NEXT_PUBLIC_FIREBASE_CONFIG=${firebaseConfigString}\nNEXT_PUBLIC_GCP_PROJECT_ID=${gcpProjectId}\nNEXT_PUBLIC_GCP_REGION=${gcpRegion}\nNEXT_PUBLIC_OPENAI_API_KEY=${openaiApiKey}\n`;
      fs.writeFileSync(".env.local", envContent);

      console.log(".env.local file created successfully.");
    } else {
      console.error("Error: Firebase configuration object not found.");
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}

createEnvFile();
