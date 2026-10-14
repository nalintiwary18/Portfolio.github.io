import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { PROFILE, SITE_URL } from "./portfolio";
import "./globals.css";

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: "Kumar Nalin | Portfolio",
    description:
    "Kumar Nalin, software developer focused on AI products, full-stack engineering, and LLM systems. Experience at NimitAI and Lexley.ai; creator of Notovo, Code Sage, and Voyatri.",
    alternates: { canonical: "/", types: { "text/plain": "/llms.txt", "application/json": "/portfolio.json" } },
    authors: [{ name: PROFILE.name, url: SITE_URL }],
    robots: { index: true, follow: true },
    openGraph: {
        type: "website", url: SITE_URL, siteName: "Kumar Nalin Portfolio",
        title: "Kumar Nalin | AI & Full-Stack Developer",
        description: PROFILE.summary,
        locale: "en_IN",
        images: [{ url: "/img.png", width: 608, height: 608, alt: "Kumar Nalin" }],
    },
    twitter: { card: "summary", title: "Kumar Nalin | Portfolio", description: PROFILE.summary, images: ["/img.png"] },
    icons: {
        icon: [
            { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            { url: "/favicon/favicon.ico", type: "image/x-icon" },
        ],
        apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
        shortcut: [
            { url: "/favicon/favicon.ico" }
        ],
    },
    manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ height: "100%" }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* The shared font stylesheet also serves the static export and full profile. */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Nothing+You+Could+Do&family=Pacifico&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
