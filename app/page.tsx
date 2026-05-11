'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight, CheckCircle, X, ChevronDown, ChevronUp,
  Zap, Shield, BarChart3, Camera, Search, MessageCircle,
  Star, TrendingUp, Clock, DollarSign, Users
} from 'lucide-react';
import { testimonials, pricingPlans, faqs, siteStats, cars } from '../lib/data';
import CarCard from '../components/CarCard';

export default function HomePage() {
  const [billingAnnual, setBillingAnnual] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const featuredCars = cars.filter(c => c.isFeatured).slice(0, 3);

  return (
    <div className="overflow-hidden">
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="hero-bg min-h-screen flex items-center relative overflow-hidden">
        {/* Gradient blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-red-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — Copy */}
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-6">
                <Zap className="w-4 h-4 text-orange-400" />
                <span className="text-orange-300 text-sm font-semibold">The #1 Auto Marketplace for Sellers</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight text-white mb-6">
                Sell Your Car
                <br />
                <span className="gradient-text">Faster. Smarter.</span>
                <br />
                <span className="text-white">Better.</span>
              </h1>

              <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
                List any vehicle in under 5 minutes. Reach thousands of verified buyers. Close deals at the best market price — with zero commissions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link
                  href="/inventory"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/30 hover:scale-105 transition-all duration-200 animate-pulse-glow"
                >
                  List Your Car Free <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/inventory"
                  className="flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-200"
                >
                  Browse Inventory
                </Link>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {['MR','SC','DT','AK','JW'].map((init) => (
                    <div key={init} className="w-9 h-9 rounded-full border-2 border-gray-800 bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white text-xs font-bold">{init}</div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
                    <span className="text-white font-bold ml-1">4.9</span>
                  </div>
                  <p className="text-gray-400 text-sm">Trusted by 12,000+ sellers</p>
                </div>
              </div>
            </div>

            {/* Right — Dashboard Preview */}
            <div className="animate-float relative">
              <div className="bg-gray-900 rounded-3xl border border-white/10 shadow-2xl p-6 relative overflow-hidden">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="ml-2 text-gray-500 text-xs font-mono">automarketpro.com/dashboard</span