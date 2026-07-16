import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ashish — AI/ML Engineer & IoT Developer",
    template: "%s | Ashish",
  },
  description:
    "Building intelligent systems at the intersection of AI, IoT, and Cloud. 31+ open-source projects spanning ML, embedded systems, and full-stack development.",
  keywords: [
    "AI engineer",
    "machine learning",
    "IoT developer",
    "embedded systems",
    "Python",
    "TensorFlow",
    "ESP32",
    "deep learning",
    "computer vision",
    "NLP",
    "FPGA",
    "DRDO",
  ],
  authors: [{ name: "Ashish Sharma" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/Ashish-Sharma54",
    siteName: "Ashish — Portfolio",
    title: "Ashish — AI/ML Engineer & IoT Developer",
    description:
      "Building intelligent systems at the intersection of AI, IoT, and Cloud. 31+ open-source projects spanning ML, embedded systems, and full-stack development.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashish — AI/ML Engineer & IoT Developer",
    description:
      "Building intelligent systems at the intersection of AI, IoT, and Cloud.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
