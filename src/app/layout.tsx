import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/commons/Header";
import Footer from "@/components/commons/Footer";

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
    default: "Amine Azizi - The Code Craftsman",
    template: "%s | Amine Azizi",
  },
  description: "I'm a senior software engineer with a passion for building scalable and efficient systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="container-fluid">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
