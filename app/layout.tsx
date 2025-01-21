import type { Metadata } from "next";
import { Geist, Nova_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const novaMono = Nova_Mono({
  variable: "--font-nova-mono",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Calculator",
  description: "A Calculator app made using React, TypeScript and Tailwind.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${novaMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
