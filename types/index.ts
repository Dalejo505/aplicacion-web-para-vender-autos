export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: 'Gasoline' | 'Diesel' | 'Electric' | 'Hybrid';
  transmission: 'Automatic' | 'Manual';
  color: string;
  condition: 'New' | 'Used' | 'Certified Pre-Owned';
  category: 'Sedan' | 'SUV' | 'Truck' | 'Coupe' | 'Convertible' | 'Van';
  images: string[];
  description: string;
  features: string[];
  seller: Seller;
  location: string;
  listedAt: string;
  isFeatured: boolean;
  views: number;
  inquiries: number;
}

export interface Seller {
  id: string;
  name: string;
  type: 'Dealer' | 'Private';
  dealershipName?: string;
  rating: number;
  totalSales: number;
  memberSince: string;
  verified: boolean;
  phone: string;
  email: string;
  location: string;
  avatar: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatar: string;
  carSold: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  billingPeriod: string;
  description: string;
  features: string[];
  notIncluded: string[];
  isPopular: boolean;
  cta: string;
  color: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface DashboardStat {
  id: string;
  label: string;
  value: string;
  change: string;
  changeType: 'up' | 'down' | 'neutral';
  icon: string;
}

export interface Transaction {
  id: string;
  car: string;
  buyer: string;
  seller: string;
  amount: number;
  status: 'Completed' | 'Pending' | 'Cancelled';
  date: string;
  type: 'Sale' | 'Listing Fee' | 'Promotion';
}
