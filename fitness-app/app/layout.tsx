import { Inter } from "next/font/google";
import "@/app/ui/globals.css";
import type { Viewport, Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';
 
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff"
};

export const metadata: Metadata = {
  metadataBase: new URL("https://thehealthapp.vercel.app/"),
  openGraph: {
    siteName: "The Health App | Landing Page",
    type: "website",
    locale: "en_US"
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow"
  },
  alternates: {
    types: {
      "application/rss+xml": "https://thehealthapp.vercel.app/sitemap.xml"
    }
  },
  applicationName: "The Healht App | Landing Page",
  appleWebApp: {
    title: "The Healht App | Landing Page",
    statusBarStyle: "default",
    capable: true
  },
  verification: {
    google: "YOUR_DATA",
    yandex: ["YOUR_DATA"],
    other: {
      "msvalidate.01": ["YOUR_DATA"],
      "facebook-domain-verification": ["YOUR_DATA"]
    }
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon"
      },
    ]
  }
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <main>
        {children}
        <Analytics />
        </main>
        </body>
    </html>
  );
}
