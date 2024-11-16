import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import { Poppins } from 'next/font/google'

const inter = Poppins(
  { subsets: ['latin'], 
    weight: ['400', '500', '600']})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Hello! my name is Matheus",
  description: "Matheus Reinaldo is a developer front-end...",
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
        {children}
      </body>
    </html>
  );
}
