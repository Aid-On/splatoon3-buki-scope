"use client";

// カラーパレット

// デザイナー
// 1: 色(Primary)を決める
// 2: 50-900のパレットを作る
// 3: パレットの中のどれがキーカラーに該当するか書いておく
// 4: コンポーネントの各ステータス（Default/Hover/Active/Disabled）で使う色を明示する
// 5: 4をFigmaのコンポーネントにしておく
// 6: パレットで定義した色以外の色を使うときは、別途名前をつけて追加する

// Color Palette Generator
// https://m2.material.io/inline-tools/color/
// https://smart-swatch.netlify.app/
// https://themera.vercel.app/

// 【参考】
// 500: Solid Default
// 600: Solid Hover
// 700: Solid Active
// 500 40%: Solid Disabled

// エンジニア
// 1.パレットのカラーコードを移植する

export const colors = {
  // 黒基調のprimary
  primary: {
    50: "#f2f2f2",
    100: "#d9d9d9",
    200: "#bfbfbf",
    300: "#a6a6a6",
    400: "#8c8c8c",
    500: "#737373",
    600: "#595959",
    700: "#404040",
    800: "#262626",
    900: "#0d0d0d",
  },
  // primary: {
  //   50: "#DBC1E0",
  //   100: "#c0c2e2",
  //   200: "#979bce",
  //   300: "#6f75bb",
  //   400: "#5257ad",
  //   500: "#7E3C92",
  //   600: "#6D3588",
  //   700: "#5F307E",
  //   800: "#1e207e",
  //   900: "#000000",
  //   // 900: "#0E0D6A",
  // },

  secondary: {
    50: "#e1f5fd",
    100: "#B3E5F9",
    200: "#81d4f5",
    300: "#51c3f1",
    400: "#2cb6ef",
    500: "#05a9ed",
    600: "#009CDE", // key
    700: "#0089ca",
    800: "#0078b7",
    900: "#005895",
  },
};
