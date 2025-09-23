import type { Metadata } from "next";
import { Geist, Handlee } from "next/font/google";
import "./globals.css";

const handlee = Handlee({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-handlee",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s - Ducky Social",
    default: "",
  },
  description: "Twitter, X, Ducky Social, news",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
