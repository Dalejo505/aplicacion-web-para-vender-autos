import Link from 'next/link';
import { Car, Twitter, Instagram, Linkedin, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                <Car className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-xl text-white">
                AutoMarket<span className="text-orange-500">Pro</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              The smartest way to buy and sell vehicles online. Trusted by 12,000+ sellers across the United States and Canada.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-500" />
                <span>hello@automarketpro.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-500" />
                <span>+1 (888) 427-7620</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span>Miami, FL — Los Angeles, CA</span>
              </div>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-white font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/inventory" className="hover:text-orange-400 transition-colors">Browse Inventory</Link></li>
              <li><Link href="/sellers" className="hover:text-orange-400 transition-colors">Top Sellers</Link></li>
              <li><Link href="/dashboard" className="hover:text-orange-400 transition-colors">Seller Dashboard</Link></li>
              <li><a href="#pricing" className="hover:text-orange-400 transition-colors">Pricing Plans</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Mobile App</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Seller Guide</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Pricing Calculator</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Market Reports</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">API Docs</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">&copy; 2024 AutoMarket Pro, Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
