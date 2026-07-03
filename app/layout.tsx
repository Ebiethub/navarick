import type { Metadata, Viewport } from "next";

import { AnalyticsScripts } from "@/components/analytics/analytics-scripts";
import { SiteFooter } from "@/components/navigation/site-footer";
import { SiteHeader } from "@/components/navigation/site-header";
import { createMetadata } from "@/lib/seo";

import "./globals.css";

export const metadata: Metadata = createMetadata();

export const viewport: Viewport = {
  colorScheme: "dark",
  initialScale: 1,
  themeColor: "#070706",
  width: "device-width",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <head>
        <AnalyticsScripts />
      </head>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
