import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cn from "@/lib/utils";
import { DEFAULT_METADATA } from "@/constants/seo";
import Header from "@/components/common/Header";
import "./globals.css";

const InterTitle = Inter({ subsets: ["latin"], variable: "--title-font" });
const InterBody = Inter({ subsets: ["latin"], variable: "--body-font" });

export const metadata: Metadata = DEFAULT_METADATA;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          InterTitle.variable,
          InterBody.className,
          InterBody.variable,
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
