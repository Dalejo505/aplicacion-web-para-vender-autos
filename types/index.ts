export interface CarListing {
  id: string;
  title: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: 'Gasoline' | 'Diesel' | 'Electric' | 'Hybrid';
  transmission: 'Automatic' | 'Manual';
  condition: 'New' | 'Used' | 'Certified Pre-Owned';
  color: string;
  location: string;
  category: string;
  imageColor: string;
  badge?: 'Featured' | 'Hot Deal' | 'New Arrival' | 'Certified';
  rating: number;
  reviewCount: number;
  sellerId: string;
  description: string;
  features: string[];
  daysOnMarket: number;
}

export interface Seller {
  id: string;
  name: string;
  type: 'Dealership' | 'Private Seller';
  location: string;
  rating: number;
  reviewCount: number;
  totalSales: number;
  memberSince: string;
  verified: boolean;
  avatarInitials: string;
  avatarColor: string;
  speciality: string;
  phone: string;
  email: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  avatarColor: string;
  rating: number;
  quote: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  featured: boolean;
  cta: string;
  features: { text: string; included: boolean }[];
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
  description: string;
}

export interface CarCategory {
  name: string;
  count: number;
  icon: string;
  color: string;
}

export interface DashboardStat {
  label: string;
  value: string;
  change: string;
  positive: boolean;
  icon: string;
}

export interface Transaction {
  id: string;
  car: string;
  buyer: string;
  amount: number;
  date: string;
  status: 'Completed' | 'Pending' | 'Processing';
}