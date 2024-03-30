import type { Metadata } from "next";
import { Suspense } from "react";

import "./globals.css";
import RQProvider from "./_component/RQProvider";
import Navigation from "./_component/Navigation";
import { themeClass } from "@/styles/variants/variants.css";
import Loading from "./loading";
import { siteConfig } from "../../config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
  twitter: {
    card: "summary_large_image", // 카드 유형을 설정합니다.
    title: siteConfig.name, // 사이트 이름을 트위터 카드 제목으로 사용합니다.
    description: siteConfig.description, // 사이트 설명을 트위터 카드 설명으로 사용합니다.
    images: "https://kr.object.ncloudstorage.com/byulbyul-images/logo_star.svg", // 트위터 카드 이미지 URL을 입력합니다.
  },
  openGraph: {
    type: "website", // 사이트 유형을 설정합니다.
    url: "https://byulbyul.store", // 사이트 URL을 입력합니다.
    title: siteConfig.name, // 사이트 이름을 Open Graph 제목으로 사용합니다.
    description: siteConfig.description, // 사이트 설명을 Open Graph 설명으로 사용합니다.
    images: "https://kr.object.ncloudstorage.com/byulbyul-images/logo_star.svg", // Open Graph 이미지 URL을 입력합니다.
    siteName: siteConfig.name, // 사이트 이름을 Open Graph 사이트 이름으로 사용합니다.
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" style={{ width: "100%", height: "100%" }}>
      <body style={{ width: "100%", height: "100%" }}>
        <RQProvider>
          <Suspense fallback={<Loading />}>
            <div className={themeClass} style={{ width: "100%", height: "100%" }}>
              {children}
            </div>
          </Suspense>
        </RQProvider>
        <div id="portal" />
      </body>
    </html>
  );
}
