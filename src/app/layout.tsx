import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { SplashScreen } from "@/components/SplashScreen";

const gilroy = localFont({
  variable: "--font-gilroy",
  src: [
    { path: "../../public/fonts/gilroy/gilroy-400.woff", weight: "400", style: "normal" },
    { path: "../../public/fonts/gilroy/gilroy-500.woff", weight: "500", style: "normal" },
    { path: "../../public/fonts/gilroy/gilroy-600.woff", weight: "600", style: "normal" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://usmanovafit.gymteam.ru"),
  title: "Фитнес с Катей Усмановой — похудение, фигура, зал, форма после родов",
  description:
    "Авторские фитнес-программы чемпионки: похудеть, подтянуть попу и живот, набрать форму в зале, восстановиться после родов. Без диет.",
  icons: {
    icon: "/seo/favicon.png",
  },
  openGraph: {
    title: "Фитнес с Катей Усмановой — похудение, фигура, зал, форма после родов",
    description:
      "Авторские фитнес-программы чемпионки: похудеть, подтянуть попу и живот, набрать форму в зале, восстановиться после родов. Без диет.",
    images: ["/seo/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${gilroy.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SplashScreen />
        {children}
      </body>
    </html>
  );
}
