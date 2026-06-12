import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CursorLight from "@/components/ui/CursorLight";
import QSChatbot from "@/components/chat/QSChatbot";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QuickStudy | Your Child's Learning Profile",
  description: "A smart tutoring platform delivering personalized learning plans and expert guidance for UK students.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>
        <CursorLight />
        <Navbar />
        {children}
        <QSChatbot />
        <Footer />
      </body>
    </html>
  );
}

