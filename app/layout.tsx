import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-noto",
});

export const metadata: Metadata = {
  title: "EXIA | CHANGE YOUR LIFE",
  description: "EXIAは海外輸出コンサルティングを通じて、あなたの人生を変える副業の実現をサポートします。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
