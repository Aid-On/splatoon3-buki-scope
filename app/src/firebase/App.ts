// Firebase の初期化に必要なモジュールをインポート
import { initializeApp, getApp, getApps } from "firebase/app";

const rawConfig = process.env.NEXT_PUBLIC_FIREBASE_CONFIG;
if (rawConfig === undefined) {
  throw new Error("NEXT_PUBLIC_FIREBASE_CONFIG is not defined");
}
// Firebase 設定
const firebaseConfig = JSON.parse(rawConfig);

// Firebase アプリのシングルトンインスタンスを取得する関数
export function getFirebaseApp() {
  if (!getApps().length) {
    // アプリが初期化されていない場合、新たに初期化
    return initializeApp(firebaseConfig);
  } else {
    return getApp();
  }
}
