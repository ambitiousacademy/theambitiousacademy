import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import Script from "next/script";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Ambitious Academy",
  description: "A Project Called Ambitious Academy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang='en'>
    <Script rel="nofollow"src="https://checkout.razorpay.com/v1/checkout.js"/>
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  </ClerkProvider>
  );
}
