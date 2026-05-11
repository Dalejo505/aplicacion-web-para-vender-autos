'use client';
import { Check, X, Zap } from 'lucide-react';
import type { PricingTier } from '../types';

interface PricingCardProps {
  tier: PricingTier;
  annual: boolean;
}

export default function PricingCard({ tier, annual }: PricingCardProps) {
  const displayPrice = annual ? Math.round(tier.price * 0.8) : tier.price;

  return (
    <div
      className={`relative rounded-2xl border-2 p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 ${
        tier.featured
          ? 'border-orange-500 bg-gradient-to-b from-orange-50 to-white shadow-xl shadow-orange-100'
          : 'border-gray-100 bg-white shadow-md hover:shadow-xl'
      }`}
    >
      {tier.featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-to-r from-orange-500 to-amber-400 text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1 whitespace-nowrap shadow-lg">
            <Zap className="w-3 h-3" /> Most Popular
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="font-display text-xl font-bold text-gray-900 mb-1">{tier.name}</h3>
        <p className="text-sm text-gray-500">{tier.description}</p>
      </div>

      <div className="mb-6">
        <div className="flex items-end gap-1">
          <span className="text-5xl font-black text-gray-900">${displayPrice}</span>
          <span className="text-gray-400 mb-2">/{tier.period}</span>
        </div>
        {annual && (
          <p className="text-xs text-green-600 font-medium mt-1">Save ${(tier.price - displayPrice) * 12}/year</p>
        )}
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {tier.features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-3">
            {feature.included ? (
              <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-orange-600" />
              </div>
            ) : (
              <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                <X className="w-3 h-3 text-gray-400" />
              </div>
            )}
            <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:-translate-y-0.5 ${
          tier.featured
            ? 'bg-gradient-to-r from-orange-500 to-amber-400 text-white hover:shadow-lg hover:shadow-orange-200'
            : tier.id === 'enterprise'
            ? 'bg-gray-900 text-white hover:bg-gray-800 hover:shadow-lg'
            : 'border-2 border-orange-500 text-orange-600 hover:bg-orange-50'
        }`}
      >
        {tier.cta}
      </button>
    </div>
  );
}