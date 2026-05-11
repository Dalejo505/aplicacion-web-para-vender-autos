import Link from 'next/link';
import { Car, Twitter, Instagram, Linkedin, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 py-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-orange-500 to-amber-400 rounded-xl flex items-center justify-center">
                <Car className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-display text-xl font-bold text-white">AutoMarket</span>
                <span className="font-display text-xl font-bold text-orange-500">Pro</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-xs">
              The professional platform for car dealers and private sellers to list, manage, and close vehicle sales — faster and smarter than ever before.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-white/5 hover:bg-orange-500/20 hover:text-orange-400 rounded-lg flex items-center justify-center transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/5 hover:bg-orange-500/20 hover:text-orange-400 rounded-lg flex items-center justify-center transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/5 hover:bg-orange-500/20 hover:text-orange-400 rounded-lg flex items-center justify-center transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/5 hover:bg-orange-500/20 hover:text-orange-400 rounded-lg flex items-center justify-center transition-all">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Platform</h3>
            <ul className="space-y-3">
              {['Browse Listings', 'List a Vehicle', 'Seller Dashboard', 'Vehicle History', 'Price Guide'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-gray-400 hover:text-orange-400 transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              {['About Us', 'Careers', 'Press Kit', 'Blog', 'Partner Program'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-gray-400 hover:text-orange-400 transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <span>support@automarketpro.com</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <span>+1 (800) 555-AUTO</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                <span>350 Fifth Avenue, New York, NY 10118</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">© 2024 AutoMarket Pro, Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Terms of Service</Link>
            <Link href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}