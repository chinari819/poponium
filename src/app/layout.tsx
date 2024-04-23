import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ポポニウム",
  description: "ポポニウム",
  twitter: {
    card: "summary_large_image",
    site: "@chinari819",
    title: "ポポニウム",
    description: "ポポニウム",
    images: "https://raw.githubusercontent.com/chinari819/poponium/main/public/img/ieiri.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
