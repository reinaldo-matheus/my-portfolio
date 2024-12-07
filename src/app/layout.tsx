import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import { Poppins } from 'next/font/google'

const inter = Poppins(
  {
    subsets: ['latin'],
    weight: ['300', '400', '500', '600']
  }
)


export const metadata: Metadata = {
  title: "Hello! my name is Matheus",
  description: "Matheus Reinaldo is a developer Full Stack and Game Dev...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        {children}

      </body>
    </html>
  );
}
