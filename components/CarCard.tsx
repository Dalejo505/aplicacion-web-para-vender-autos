import Link from 'next/link';
import { MapPin, Fuel, Gauge, Star, ShieldCheck, Eye } from 'lucide-react';
import { Car } from '../types';

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  const formatPrice = (price: number): string =>
    price === 0 ? 'Call for Price' : `$${price.toLocaleString()}`;

  const formatMileage = (miles: number): string =>
    miles === 0 ? 'Brand New' : `${miles.toLocaleString()} mi`;

  const conditionColors: Record<string, string> = {
    'New': 'bg-emerald-100 text-emerald-700',
    'Used': 'bg-blue-100 text-blue-700',
    'Certified Pre-Owned': 'bg-purple-100 text-purple-700'
  };

  const colorGradients: Record<string, string> = {
    'SUV': 'from-blue-400 to-blue-600',
    'Coupe': 'from-orange-400 to-red-500',
    'Truck': 'from-slate-400 to-slate-600',
    'Sedan': 'from-teal-400 to-cyan-600',
    'Convertible': 'from-pink-400 to-rose-600',
    'Van': 'from-amber-400 to-orange-500'
  };

  return (
    <Link href={`/inventory/${car.id}`} className="block">
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden card-hover shadow-sm hover:border-orange-200 group">
        {/* Image Placeholder */}
        <div className={`relative h-52 bg-gradient-to-br ${colorGradients[car.category] || 'from-gray-300 to-gray-500'} overflow-hidden`}>
          {car.isFeatured && (
            <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide z-10">
              Featured
            </span>
          )}
          <span className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full z-10 ${conditionColors[car.condition]}`}>
            {car.condition}
          </span>
          {/* Car silhouette SVG */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <svg viewBox="0 0 200 80" className="w-48 h-24 fill-white">
              <path d="M170,45 L155,30 C150,25 140,22 128,22 L80,22 C70,22 62,26 56,32 L40,45 L25,45 C18,45 15,48 15,52 L15,60 C15,63 18,65 22,65 L35,65 C36,72 42,78 50,78 C58,78 64,72 65,65 L135,65 C136,72 142,78 150,78 C158,78 164,72 165,65 L178,65 C182,65 185,63 185,60 L185,52 C185,48 182,45 178,45 Z" />
            </svg>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-white font-bold text-2xl drop-shadow-lg">{car.year}</span>
            <span className="text-white/90 font-semibold text-lg drop-shadow">{car.make} {car.model}</span>
          </div>
          <div className="absolute bottom-2 right-3 flex items-center gap-1 text-white/80 text-xs">
            <Eye className="w-3 h-3" /> {car.views.toLocaleString()}
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-bold text-gray-900 text-lg leading-tight group-hover:text-orange-500 transition-colors">
                {car.year} {car.make} {car.model}
              </h3>
              <p className="text-sm text-gray-500 flex items-center gap-1 mt-0.5">
                <MapPin className="w-3 h-3" /> {car.location}
              </p>
            </div>
            <div className="text-right">
              <p className="text-xl font-black text-orange-500">{formatPrice(car.price)}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-3 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <Gauge className="w-3.5 h-3.5" /> {formatMileage(car.mileage)}
            </span>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <span className="flex items-center gap-1">
              <Fuel className="w-3.5 h-3.5" /> {car.fuelType}
            </span>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <span>{car.transmission}</span>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white text-xs font-bold">
                {car.seller.avatar}
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-800">{car.seller.dealershipName || car.seller.name}</p>
                <div className="flex items-center gap-1">
                  {car.seller.verified && <ShieldCheck className="w-3 h-3 text-emerald-500" />}
                  <span className="text-xs text-gray-400">{car.seller.verified ? 'Verified' : 'Private'}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="text-xs font-semibold text-gray-700">{car.seller.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
