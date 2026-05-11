import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: 'AutoMarket Pro — Buy & Sell Cars with Confidence',
  description: 'The #1 platform for car dealerships and private sellers to list, manage, and sell vehicles online. Browse thousands of verified listings.',
  keywords: 'buy cars online, sell cars, car dealership, used cars, new cars, auto marketplace',
  openGraph: {
    title: 'AutoMarket Pro — Buy & Sell Cars with Confidence',
    description: 'The #1 platform for car dealerships and private sellers.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-white text-gray-900 font-sans ${inter.className} antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}