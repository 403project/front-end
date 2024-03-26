import type { Metadata } from "next";

import "./globals.css";

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
    <html lang="en">
      <body className={"root_container"}>{children}</body>
    </html>
  );
}
