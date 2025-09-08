import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs';

import { ModalProvider } from "@/providers/modal-provider";

import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${inter.variable} ${robotoMono.variable} antialiased`}>
        <ModalProvider />
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
