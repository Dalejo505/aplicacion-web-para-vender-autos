import Link from 'next/link';
import { MapPin, Fuel, Gauge, Settings, Star, Heart } from 'lucide-react';
import type { CarListing } from '../types';

interface CarCardProps {
  car: CarListing;
}

const badgeStyles: Record<string, string> = {
  'Featured': 'bg-orange-100 text-orange-700',
  'Hot Deal': 'bg-red-100 text-red-700',
  'New Arrival': 'bg-green-100 text-green-700',
  'Certified': 'bg-blue-100 text-blue-700',
};

export default function CarCard({ car }: CarCardProps) {
  return (
    <Link href={`/listings`} className="card group block">
      {/* Image Placeholder */}
      <div className={`relative h-48 bg-gradient-to-br ${car.imageColor} overflow-hidden`}>
        {car.badge && (
          <span className={`absolute top-3 left-3 badge ${badgeStyles[car.badge] ?? 'bg-gray-100 text-gray-700'}`}>
            {car.badge}
          </span>
        )}
        <button className="absolute top-3 right-3 w-8 h-8 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center transition-all" aria-label="Save listing">
          <Heart className="w-4 h-4 text-white" />
        </button>
        {/* Car silhouette illustration */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white/20 text-8xl font-black font-display group-hover:scale-110 transition-transform duration-500 select-none">
            {car.brand.charAt(0)}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-3 left-3">
          <span className="text-white/80 text-xs font-medium">{car.condition}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-bold text-gray-900 text-sm leading-tight line-clamp-2 group-hover:text-orange-500 transition-colors">
            {car.title}
          </h3>
        </div>

        <div className="flex items-center gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(car.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-200 fill-gray-200'}`} />
          ))}
          <span className="text-xs text-gray-500 ml-1">{car.rating} ({car.reviewCount})</span>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="flex flex-col items-center bg-gray-50 rounded-lg py-1.5 px-1">
            <Gauge className="w-3.5 h-3.5 text-gray-400 mb-0.5" />
            <span className="text-xs text-gray-600 font-medium">{car.mileage.toLocaleString()}mi</span>
          </div>
          <div className="flex flex-col items-center bg-gray-50 rounded-lg py-1.5 px-1">
            <Fuel className="w-3.5 h-3.5 text-gray-400 mb-0.5" />
            <span className="text-xs text-gray-600 font-medium">{car.fuelType}</span>
          </div>
          <div className="flex flex-col items-center bg-gray-50 rounded-lg py-1.5 px-1">
            <Settings className="w-3.5 h-3.5 text-gray-400 mb-0.5" />
            <span className="text-xs text-gray-600 font-medium">{car.transmission === 'Automatic' ? 'Auto' : 'Manual'}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-xl font-black text-gray-900">${car.price.toLocaleString()}</p>
          </div>
          <div className="flex items-center gap-1 text-gray-400">
            <MapPin className="w-3.5 h-3.5" />
            <span className="text-xs">{car.location}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}