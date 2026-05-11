'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Car, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <Car className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-xl text-gray-900">
              AutoMarket<span className="text-orange-500">Pro</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/inventory" className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm">
              Browse Cars
            </Link>
            <Link href="/sellers" className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm">
              Top Sellers
            </Link>
            <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm">
              Dashboard
            </Link>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm">
              Pricing
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/dashboard" className="text-gray-700 hover:text-orange-500 font-semibold text-sm transition-colors">
              Sign In
            </Link>
            <Link
              href="/inventory"
              className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-orange-200 hover:scale-105 transition-all duration-200"
            >
              List Your Car
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-4 py-6 space-y-4">
            <Link href="/inventory" className="block text-gray-700 font-medium py-2 hover:text-orange-500" onClick={() => setIsOpen(false)}>Browse Cars</Link>
            <Link href="/sellers" className="block text-gray-700 font-medium py-2 hover:text-orange-500" onClick={() => setIsOpen(false)}>Top Sellers</Link>
            <Link href="/dashboard" className="block text-gray-700 font-medium py-2 hover:text-orange-500" onClick={() => setIsOpen(false)}>Dashboard</Link>
            <a href="#pricing" className="block text-gray-700 font-medium py-2 hover:text-orange-500" onClick={() => setIsOpen(false)}>Pricing</a>
            <div className="pt-4 border-t border-gray-100 space-y-3">
              <Link href="/dashboard" className="block text-center text-gray-700 font-semibold py-2 border border-gray-200 rounded-xl hover:border-orange-300" onClick={() => setIsOpen(false)}>Sign In</Link>
              <Link href="/inventory" className="block text-center bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold py-3 rounded-xl" onClick={() => setIsOpen(false)}>List Your Car</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
