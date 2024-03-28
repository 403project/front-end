import type { Metadata } from "next";
import { Suspense } from "react";

import "./globals.css";
import RQProvider from "./_component/RQProvider";
import Navigation from "./_component/Navigation";

export const metadata: Metadata = {
  title: "별별 투표",
  description: "별별",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <RQProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <div className={"root_container"}>{children}</div>
          </Suspense>
        </RQProvider>
      </body>
    </html>
  );
}
