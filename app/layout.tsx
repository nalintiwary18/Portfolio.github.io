import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Kumar Nalin | Portfolio",
    description:
    "Kumar Nalin, software developer focused on AI products, full-stack engineering, and LLM systems. Experience at NimitAI and Lexley.ai; creator of Notovo, Code Sage, and Voyatri.",
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
