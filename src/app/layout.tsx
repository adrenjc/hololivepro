import type { Metadata } from "next";
import { Noto_Sans_SC, Rubik } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-body",
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hololivepro.com"),
  title: "hololive production | 中文复刻体验页",
  description:
    "以 Next.js 重制 hololive production 官网，完整移植版面、动效与多语言导航。",
  openGraph: {
    title: "hololive production | 中文复刻体验页",
    description:
      "以 Next.js 重制 hololive production 官网，完整移植版面、动效与多语言导航。",
    url: "https://hololivepro.com",
    images: [
      {
        url: "https://hololivepro.com/wp-content/themes/hololive_production/images/ogp.jpg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hans">
      <body className={`${notoSans.variable} ${rubik.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
