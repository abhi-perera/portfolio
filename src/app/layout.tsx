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
  title: "H.M.U. Abhimani Perera — Portfolio",
  description:
    "Computer Engineering Undergraduate | Full-Stack SaaS & AI for Biomedical Applications",
  keywords: [
    "Computer Engineering",
    "Full-Stack Developer",
    "Machine Learning",
    "Biomedical Engineering",
    "Next.js",
    "React",
    "Django",
    "TensorFlow",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased biomedical-grid`}
      >
        {children}
      </body>
    </html>
  );
}
