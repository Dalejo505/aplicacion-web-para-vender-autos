'use client';
import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight, Search, Shield, TrendingUp, Clock, Star, CheckCircle,
  ChevronDown, ChevronUp, Users, BarChart3, Zap, Globe, Lock, HeadphonesIcon
} from 'lucide-react';
import { carListings, testimonials, pricingTiers, faqs, stats, carCategories } from '../lib/data';
import CarCard from '../components/CarCard';
import PricingCard from '../components/PricingCard';

const features = [
  {
    icon: Shield,
    title: 'Verified Listings Only',
    description: 'Every vehicle and seller is manually reviewed. Buyers get title verification, VIN checks, and fraud protection built into every transaction.',
    color: 'text-orange-500',
    bg: 'bg-orange-50',
  },
  {
    icon: TrendingUp,
    title: 'AI-Powered Pricing',
    description: 'Our market intelligence engine analyzes 50,000+ recent transactions to recommend the ideal listing price, maximizing your profit while accelerating your sale.',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
  },
  {
    icon: Clock,
    title: 'Sell in 11 Days Average',
    description: 'Optimized listing templates, premium photo requirements, and targeted buyer matching cut your time-to-sale from 47 industry-average days to just 11.',
    color: 'text-green-500',
    bg: 'bg-green-50',
  },
  {
    icon: Users,
    title: 'Qualified Buyer Network',
    description: 'Access 180,000+ active buyers with pre-qualified financing