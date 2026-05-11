import { Car, Seller, Testimonial, PricingPlan, FAQ, DashboardStat, Transaction } from '../types';

export const sellers: Seller[] = [
  {
    id: 'sel-001',
    name: 'Marcus Rivera',
    type: 'Dealer',
    dealershipName: 'Rivera Premium Motors',
    rating: 4.9,
    totalSales: 347,
    memberSince: '2019-03-15',
    verified: true,
    phone: '+1 (305) 847-2910',
    email: 'marcus@riveramotors.com',
    location: 'Miami, FL',
    avatar: 'MR'
  },
  {
    id: 'sel-002',
    name: 'Sophia Chen',
    type: 'Dealer',
    dealershipName: 'Westside Auto Group',
    rating: 4.8,
    totalSales: 512,
    memberSince: '2018-07-22',
    verified: true,
    phone: '+1 (310) 555-0184',
    email: 'sophia@westsideauto.com',
    location: 'Los Angeles, CA',
    avatar: 'SC'
  },
  {
    id: 'sel-003',
    name: 'Daniel Torres',
    type: 'Private',
    rating: 4.7,
    totalSales: 12,
    memberSince: '2022-01-10',
    verified: true,
    phone: '+1 (512) 388-4521',
    email: 'daniel.t@gmail.com',
    location: 'Austin, TX',
    avatar: 'DT'
  },
  {
    id: 'sel-004',
    name: 'Amanda Kowalski',
    type: 'Dealer',
    dealershipName: 'Lakefront Auto Plaza',
    rating: 4.6,
    totalSales: 289,
    memberSince: '2020-05-18',
    verified: true,
    phone: '+1 (312) 774-9030',
    email: 'amanda@lakefrontauto.com',
    location: 'Chicago, IL',
    avatar: 'AK'
  }
];

export const cars: Car[] = [
  {
    id: 'car-001',
    make: 'BMW',
    model: 'M4 Competition',
    year: 2024,
    price: 89500,
    mileage: 2100,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    color: 'Tanzanite Blue Metallic',
    condition: 'Used',
    category: 'Coupe',
    images: [],
    description: 'Stunning 2024 BMW M4 Competition with xDrive. Full M Sport package, carbon fiber roof, and Harman Kardon audio. One previous owner, dealer maintained.',
    features: ['Carbon Fiber Roof', 'M Sport Differential', 'Harman Kardon Audio', 'Adaptive M Suspension', 'BMW Live Cockpit Pro', 'M Seats with Memory'],
    seller: sellers[0],
    location: 'Miami, FL',
    listedAt: '2024-07-01',
    isFeatured: true,
    views: 3847,
    inquiries: 42
  },
  {
    id: 'car-002',
    make: 'Tesla',
    model: 'Model X Plaid',
    year: 2024,
    price: 114990,
    mileage: 0,
    fuelType: 'Electric',
    transmission: 'Automatic',
    color: 'Pearl White Multi-Coat',
    condition: 'New',
    category: 'SUV',
    images: [],
    description: 'Brand new Tesla Model X Plaid with full self-driving capability. 1,020 hp tri-motor, 0-60 in 2.5s. Falcon wing doors, 22" wheels, premium interior.',
    features: ['Full Self-Driving', 'Tri-Motor AWD', 'Falcon Wing Doors', '17" Cinematic Display', 'HEPA Air Filter', '22" Turbine Wheels'],
    seller: sellers[1],
    location: 'Los Angeles, CA',
    listedAt: '2024-07-05',
    isFeatured: true,
    views: 5210,
    inquiries: 67
  },
  {
    id: 'car-003',
    make: 'Ford',
    model: 'F-150 Raptor R',
    year: 2023,
    price: 82000,
    mileage: 18400,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    color: 'Code Orange',
    condition: 'Certified Pre-Owned',
    category: 'Truck',
    images: [],
    description: 'Ford F-150 Raptor R with the supercharged 5.2L V8 producing 700 hp. Fox Live Valve suspension, 37" tires, Recaro seats. Still under manufacturer CPO warranty.',
    features: ['700HP Supercharged V8', 'Fox Live Valve Suspension', '37" BF Goodrich Tires', 'Recaro Sport Seats', 'Ford Pro Power Onboard', 'Trail Control'],
    seller: sellers[2],
    location: 'Austin, TX',
    listedAt: '2024-06-28',
    isFeatured: true,
    views: 2914,
    inquiries: 29
  },
  {
    id: 'car-004',
    make: 'Mercedes-Benz',
    model: 'GLE 63 S AMG',
    year: 2023,
    price: 127800,
    mileage: 9200,
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    color: 'Obsidian Black Metallic',
    condition: 'Certified Pre-Owned',
    category: 'SUV',
    images: [],
    description: 'Pre-owned GLE 63 S AMG with EQ Boost mild-hybrid. AMG Night Package, Burmester 3D surround sound, panoramic sunroof, and AMG Performance exhaust.',
    features: ['AMG Night Package', 'Burmester 3D Surround', 'Air Body Control', 'AMG Performance Exhaust', 'Panoramic Sunroof', 'Rear Entertainment'],
    seller: sellers[0],
    location: 'Miami, FL',
    listedAt: '2024-07-08',
    isFeatured: false,
    views: 1820,
    inquiries: 18
  },
  {
    id: 'car-005',
    make: 'Porsche',
    model: '911 Carrera GTS',
    year: 2024,
    price: 152000,
    mileage: 1500,
    fuelType: 'Gasoline',
    transmission: 'Manual',
    color: 'Jet Black Metallic',
    condition: 'Used',
    category: 'Coupe',
    images: [],
    description: 'Porsche 911 Carrera GTS with 7-speed manual PDK. Sport Chrono package, PCCB ceramic brakes, sport exhaust, and full leather interior in GT Silver.',
    features: ['Sport Chrono Package', 'PCCB Ceramic Brakes', 'Sport Exhaust', 'Bose Surround Sound', 'Front Axle Lift', 'Porsche Dynamic Chassis'],
    seller: sellers[1],
    location: 'Los Angeles, CA',
    listedAt: '2024-07-10',
    isFeatured: true,
    views: 4120,
    inquiries: 55
  },
  {
    id: 'car-006',
    make: 'Toyota',
    model: 'RAV4 Hybrid XSE',
    year: 2023,
    price: 38900,
    mileage: 24700,
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    color: 'Blueprint',
    condition: 'Certified Pre-Owned',
    category: 'SUV',
    images: [],
    description: 'Toyota RAV4 Hybrid XSE AWD with excellent fuel economy. One-owner vehicle with full service records. Apple CarPlay, Safety Sense 2.0, heated seats.',
    features: ['Toyota Safety Sense 2.0', 'Apple CarPlay / Android Auto', 'Heated Front Seats', 'Power Liftgate', 'Wireless Charging', 'Birds-Eye View Camera'],
    seller: sellers[3],
    location: 'Chicago, IL',
    listedAt: '2024-07-03',
    isFeatured: false,
    views: 1390,
    inquiries: 22
  },
  {
    id: 'car-007',
    make: 'Chevrolet',
    model: 'Corvette Z06',
    year: 2024,
    price: 108000,
    mileage: 500,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    color: 'Accelerate Yellow',
    condition: 'Used',
    category: 'Coupe',
    images: [],
    description: 'Nearly-new Corvette Z06 with 670HP flat-plane crank V8. Z07 Performance Package, Brembo carbon-ceramic brakes, Nürburgring-tuned suspension.',
    features: ['Z07 Performance Package', 'Carbon-Ceramic Brakes', '670HP Flat-Plane V8', 'Magnetic Ride Control', 'FE7 Track Mode', 'Carbon Fiber Aero Kit'],
    seller: sellers[0],
    location: 'Miami, FL',
    listedAt: '2024-07-12',
    isFeatured: true,
    views: 3600,
    inquiries: 38
  },
  {
    id: 'car-008',
    make: 'Honda',
    model: 'Civic Type R',
    year: 2023,
    price: 44200,
    mileage: 11200,
    fuelType: 'Gasoline',
    transmission: 'Manual',
    color: 'Sonic Gray Pearl',
    condition: 'Used',
    category: 'Sedan',
    images: [],
    description: 'Honda Civic Type R with the legendary 2.0T engine producing 315hp. Fully stock, no modifications. Clean title with full Honda service records.',
    features: ['315HP VTEC Turbo', '6-Speed Manual', 'Brembo Brakes', 'Adaptive Damper System', 'Honda Sensing', 'Wireless Apple CarPlay'],
    seller: sellers[3],
    location: 'Chicago, IL',
    listedAt: '2024-07-06',
    isFeatured: false,
    views: 2180,
    inquiries: 31
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'test-001',
    name: 'Roberto Mendez',
    role: 'Dealership Owner',
    company: 'Mendez Auto Group',
    quote: 'AutoMarket Pro transformed how we sell. Our listings went live in minutes and inquiries doubled within the first week. The verification system builds trust with buyers — we closed 18 deals in the first month alone.',
    rating: 5,
    avatar: 'RM',
    carSold: '2023 BMW 5 Series'
  },
  {
    id: 'test-002',
    name: 'Jennifer Walsh',
    role: 'Private Seller',
    company: 'Austin, TX',
    quote: 'I was nervous about selling my Porsche privately, but AutoMarket Pro made the whole process seamless. The price analysis tool told me my car was worth $8,000 more than I thought. Sold in 4 days, above asking price.',
    rating: 5,
    avatar: 'JW',
    carSold: '2022 Porsche 718 Boxster'
  },
  {
    id: 'test-003',
    name: 'Carlos Espinoza',
    role: 'Fleet Manager',
    company: 'Pacific Logistics Co.',
    quote: 'Managing 40+ vehicle listings at once used to be a nightmare. AutoMarket Pro\'s dashboard gives me real-time analytics on every listing. We\'ve reduced our average days-to-sale from 67 to just 19 days.',
    rating: 5,
    avatar: 'CE',
    carSold: 'Fleet of 12 Vehicles'
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 'plan-starter',
    name: 'Starter',
    price: 0,
    billingPeriod: 'month',
    description: 'Perfect for private sellers with 1-2 vehicles to list.',
    features: [
      '3 active listings',
      'Basic photo upload (up to 8 photos)',
      'Standard listing visibility',
      'Email inquiry forwarding',
      'Price estimate tool'
    ],
    notIncluded: [
      'Featured listing placement',
      'Analytics dashboard',
      'Priority support',
      'Bulk listing tools'
    ],
    isPopular: false,
    cta: 'Get Started Free',
    color: 'gray'
  },
  {
    id: 'plan-pro',
    name: 'Pro Seller',
    price: 49,
    billingPeriod: 'month',
    description: 'The complete toolkit for serious sellers and small dealers.',
    features: [
      '25 active listings',
      'Up to 20 photos per listing',
      'Featured homepage placement',
      'Real-time analytics dashboard',
      'Priority buyer inquiries',
      'Verified seller badge',
      'Price comparison reports'
    ],
    notIncluded: [
      'Unlimited listings',
      'Dedicated account manager'
    ],
    isPopular: true,
    cta: 'Start 14-Day Free Trial',
    color: 'orange'
  },
  {
    id: 'plan-enterprise',
    name: 'Dealership',
    price: 199,
    billingPeriod: 'month',
    description: 'Built for dealerships and high-volume sellers at scale.',
    features: [
      'Unlimited active listings',
      'Up to 40 photos + 360° tours',
      'Top-of-search premium placement',
      'Advanced analytics & reporting',
      'Bulk import/export (CSV/API)',
      'Dedicated account manager',
      'Custom dealership brand page',
      'Lead management CRM'
    ],
    notIncluded: [],
    isPopular: false,
    cta: 'Contact Sales',
    color: 'dark'
  }
];

export const faqs: FAQ[] = [
  {
    id: 'faq-001',
    question: 'How quickly can I list a vehicle for sale?',
    answer: 'You can have a live listing in under 5 minutes. Fill in the vehicle details, upload photos, set your price, and hit publish. Our AI-assisted form auto-fills many fields from the VIN number, saving you time.'
  },
  {
    id: 'faq-002',
    question: 'How does the price estimation tool work?',
    answer: 'Our pricing engine analyzes over 2 million recent transactions, current market demand, your vehicle\'s condition, mileage, and local pricing trends to recommend a competitive sale price. It updates in real time as market conditions change.'
  },
  {
    id: 'faq-003',
    question: 'Is AutoMarket Pro available only in the United States?',
    answer: 'We currently operate across the United States and Canada, with Latin American markets launching in Q4 2024. You can list in USD, CAD, or MXN with localized market data for each region.'
  },
  {
    id: 'faq-004',
    question: 'What happens when a buyer sends an inquiry?',
    answer: 'Buyer messages are routed instantly to your dashboard and via email or SMS based on your notification preferences. Pro and Dealership plans include priority inquiry routing so serious buyers always reach you first.'
  },
  {
    id: 'faq-005',
    question: 'Can I upgrade, downgrade, or cancel my plan anytime?',
    answer: 'Yes — no contracts, no cancellation fees. You can upgrade instantly and your extra features activate immediately. Downgrading or canceling takes effect at the end of your current billing period. Your listing data is always retained for 12 months.'
  },
  {
    id: 'faq-006',
    question: 'How does the seller verification process work?',
    answer: 'We verify identity via government-issued ID and, for dealers, business license documentation. Verified sellers receive a blue badge on all listings, which our data shows increases buyer inquiry rates by 73% compared to unverified listings.'
  },
  {
    id: 'faq-007',
    question: 'Do you take a commission on completed sales?',
    answer: 'No. AutoMarket Pro operates on a subscription model only — we never take a percentage of your sale. What you earn is entirely yours. Our revenue comes from subscription plans, making our success aligned with bringing buyers to your listings.'
  }
];

export const dashboardStats: DashboardStat[] = [
  {
    id: 'stat-001',
    label: 'Total Revenue',
    value: '$2,847,200',
    change: '+18.4%',
    changeType: 'up',
    icon: 'DollarSign'
  },
  {
    id: 'stat-002',
    label: 'Active Listings',
    value: '1,284',
    change: '+7.2%',
    changeType: 'up',
    icon: 'Car'
  },
  {
    id: 'stat-003',
    label: 'Avg. Days on Market',
    value: '19 days',
    change: '-31%',
    changeType: 'up',
    icon: 'Clock'
  },
  {
    id: 'stat-004',
    label: 'Buyer Inquiries',
    value: '8,430',
    change: '+24.1%',
    changeType: 'up',
    icon: 'MessageCircle'
  }
];

export const transactions: Transaction[] = [
  {
    id: 'txn-001',
    car: '2024 BMW M4 Competition',
    buyer: 'James Fletcher',
    seller: 'Rivera Premium Motors',
    amount: 89500,
    status: 'Completed',
    date: '2024-07-14',
    type: 'Sale'
  },
  {
    id: 'txn-002',
    car: '2023 Ford F-150 Raptor R',
    buyer: 'Natalia Vance',
    seller: 'Daniel Torres',
    amount: 82000,
    status: 'Completed',
    date: '2024-07-13',
    type: 'Sale'
  },
  {
    id: 'txn-003',
    car: '2023 Toyota RAV4 Hybrid',
    buyer: 'Michael Okonkwo',
    seller: 'Lakefront Auto Plaza',
    amount: 38900,
    status: 'Pending',
    date: '2024-07-15',
    type: 'Sale'
  },
  {
    id: 'txn-004',
    car: '2023 Honda Civic Type R',
    buyer: 'Priya Nair',
    seller: 'Lakefront Auto Plaza',
    amount: 44200,
    status: 'Pending',
    date: '2024-07-15',
    type: 'Sale'
  },
  {
    id: 'txn-005',
    car: 'Featured Listing Upgrade',
    buyer: 'Rivera Premium Motors',
    seller: 'AutoMarket Pro',
    amount: 199,
    status: 'Completed',
    date: '2024-07-12',
    type: 'Promotion'
  },
  {
    id: 'txn-006',
    car: '2024 Chevrolet Corvette Z06',
    buyer: 'Lena Hartmann',
    seller: 'Rivera Premium Motors',
    amount: 108000,
    status: 'Completed',
    date: '2024-07-10',
    type: 'Sale'
  },
  {
    id: 'txn-007',
    car: '2024 Porsche 911 Carrera GTS',
    buyer: 'Thomas Ritter',
    seller: 'Westside Auto Group',
    amount: 152000,
    status: 'Cancelled',
    date: '2024-07-09',
    type: 'Sale'
  }
];

export const categories = ['All', 'SUV', 'Sedan', 'Coupe', 'Truck', 'Convertible', 'Van'];

export const siteStats = [
  { value: '48,200+', label: 'Vehicles Listed' },
  { value: '$1.2B+', label: 'In Sales Facilitated' },
  { value: '19 Days', label: 'Avg. Time to Sell' },
  { value: '4.9 ★', label: 'Seller Satisfaction' }
];
