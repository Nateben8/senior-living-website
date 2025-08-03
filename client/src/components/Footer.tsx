import React from 'react'
import { Link } from 'wouter'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src="/logo.png?v=4" 
                alt="Senior Living Placement Logo" 
                className="h-20 w-auto object-contain mb-6" 
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Helping families find the perfect senior care solution for over 10 years. 
              Our free service has helped 50,000+ families nationwide.
            </p>
            <div className="flex space-x-5">
              <svg className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              <svg className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
              <svg className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/caregiver-resources" className="text-gray-300 hover:text-white transition-colors">
                  Caregiver Resources
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-gray-300 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/care-types" className="text-gray-300 hover:text-white transition-colors">
                  Care Types
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-gray-300 hover:text-white transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Care Types */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Care Types</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/care-types/independent-living" className="text-gray-300 hover:text-white transition-colors">
                  Independent Living
                </Link>
              </li>
              <li>
                <Link href="/care-types/assisted-living" className="text-gray-300 hover:text-white transition-colors">
                  Assisted Living
                </Link>
              </li>
              <li>
                <Link href="/care-types/memory-care" className="text-gray-300 hover:text-white transition-colors">
                  Memory Care
                </Link>
              </li>
              <li>
                <Link href="/care-types/nursing-homes" className="text-gray-300 hover:text-white transition-colors">
                  Nursing Care
                </Link>
              </li>
              <li>
                <Link href="/care-types/home-care" className="text-gray-300 hover:text-white transition-colors">
                  Home Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <div>
                  <p className="font-semibold">(818) 422-5232</p>
                  <p className="text-gray-300 text-sm">Available 24/7 for emergencies</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <div>
                  <p className="font-semibold">larryb@slphomes.org</p>
                  <p className="text-gray-300 text-sm">We respond within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <div>
                  <p className="font-semibold">Los Angeles, CA</p>
                  <p className="text-gray-300 text-sm">Serving families nationwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">© 2025 Senior Living Placement. All rights reserved.</p>
              <div className="flex space-x-4 text-sm">
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link href="/accessibility" className="text-gray-400 hover:text-white transition-colors">
                  Accessibility
                </Link>
              </div>
            </div>
            <div className="text-sm text-gray-400">
              <p>Licensed • Bonded • Insured</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 