import type { Metadata } from "next";
import { Inter, Manrope, Mallanna } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const mallanna = Mallanna({
  variable: "--font-mallanna",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Klinexia | AI First. One Platform for Healthcare Operations.",
  description: "An AI-first platform where clinical care, billing, marketing, payments, and reporting work together seamlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${manrope.variable} ${mallanna.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
