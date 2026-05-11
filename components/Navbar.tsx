'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Car, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-gradient-to-br from-orange-500 to-amber-400 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-orange-200 transition-shadow">
              <Car className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-display text-xl font-bold text-gray-900">AutoMarket</span>
              <span className="font-display text-xl font-bold text-orange-500">Pro</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            <Link href="/listings" className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all duration-200">Browse Cars</Link>
            <Link href="/sellers" className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all duration-200">Sellers</Link>
            <Link href="/dashboard" className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all duration-200">Dashboard</Link>
            <div className="relative group">
              <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all duration-200 flex items-center gap-1">
                Resources <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/dashboard" className="text-sm font-semibold text-gray-700 hover:text-orange-500 transition-colors">Log In</Link>
            <Link href="/listings" className="btn-primary text-sm animate-pulse-glow">
              List Your Car
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-orange-500 hover:bg-orange-50 transition-all"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-1 animate-fade-in">
          <Link href="/listings" onClick={() => setMenuOpen(false)} className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg">Browse Cars</Link>
          <Link href="/sellers" onClick={() => setMenuOpen(false)} className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg">Sellers</Link>
          <Link href="/dashboard" onClick={() => setMenuOpen(false)} className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg">Dashboard</Link>
          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
            <Link href="/dashboard" onClick={() => setMenuOpen(false)} className="btn-secondary text-sm justify-center">Log In</Link>
            <Link href="/listings" onClick={() => setMenuOpen(false)} className="btn-primary text-sm justify-center">List Your Car</Link>
          </div>
        </div>
      )}
    </nav>
  );
}