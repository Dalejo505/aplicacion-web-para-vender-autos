import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: 'AutoMarket Pro — Sell Your Car Faster',
  description: 'The professional marketplace to list, manage, and sell vehicles online. Trusted by 12,000+ sellers across the US and Canada.',
  keywords: 'sell cars online, auto marketplace, used cars, car listings, dealership platform',
  openGraph: {
    title: 'AutoMarket Pro — Sell Your Car Faster',
    description: 'List your vehicle in minutes. Reach thousands of verified buyers.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`min-h-screen bg-white ${inter.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
