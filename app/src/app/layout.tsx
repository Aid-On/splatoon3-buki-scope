import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans_JP } from "next/font/google";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "SP3 ブキスコープ",
  description: "スプラトゥーン3 ブキ比較ツール",
};

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"], display: "swap", weight: ["400", "500"], preload: true });

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.className} bg-white`}
        style={{
          maxWidth: "100dvw",
          height: "100dvh",
          margin: "auto",
        }}
      >
        {children}
      </body>
    </html>
  );
}
