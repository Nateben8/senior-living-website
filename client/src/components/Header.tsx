import { Link } from 'wouter'
import React, { useState, useEffect } from 'react'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHowItWorksOpen, setIsHowItWorksOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
    } border-b border-gray-200`}>
      {/* Top banner with phone number */}
      <div className="bg-gradient-to-r from-primary to-purple-600 text-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <a href="tel:+18184225232" className="font-semibold hover:text-gray-200 transition-colors">
                Call Now: (818) 422-5232
              </a>
            </div>
            <div className="text-xs text-gray-200">
              Helping families find senior living communities since 2014
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <img 
              src="/logo.png" 
              alt="Senior Living Placement Logo" 
              className="h-7 sm:h-8 md:h-10 lg:h-11 w-auto object-contain" 
            />
          </Link>

          {/* Primary Care Types Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 ml-auto mr-8">
            <Link href="/care-types/assisted-living">
              <span className="font-semibold text-sm xl:text-base transition-all duration-300 whitespace-nowrap hover:text-primary text-gray-800 hover:border-b-2 hover:border-primary/50 pb-1 focus:outline-none focus:ring-0 focus:ring-offset-0">
                Assisted Living
              </span>
            </Link>
            
            <Link href="/care-types/memory-care">
              <span className="font-semibold text-sm xl:text-base transition-all duration-300 whitespace-nowrap hover:text-primary text-gray-800 hover:border-b-2 hover:border-primary/50 pb-1 focus:outline-none focus:ring-0 focus:ring-offset-0">
                Memory Care
              </span>
            </Link>
            
            <Link href="/care-types/independent-living">
              <span className="font-semibold text-sm xl:text-base transition-all duration-300 whitespace-nowrap hover:text-primary text-gray-800 hover:border-b-2 hover:border-primary/50 pb-1 focus:outline-none focus:ring-0 focus:ring-offset-0">
                Independent Living
              </span>
            </Link>
            
            <Link href="/care-types/nursing-homes">
              <span className="font-semibold text-sm xl:text-base transition-all duration-300 whitespace-nowrap hover:text-primary text-gray-800 hover:border-b-2 hover:border-primary/50 pb-1 focus:outline-none focus:ring-0 focus:ring-offset-0">
                Nursing Homes
              </span>
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block flex-shrink-0 ml-8">
            <Link 
              href="/quiz-intro"
              className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white h-12 py-3 px-6 text-base shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Start Your Search
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-3 flex-shrink-0 ml-auto -mr-2 rounded-lg hover:bg-gray-100 transition-colors touch-manipulation focus:outline-none focus:ring-0 focus:ring-offset-0" 
            aria-label="Toggle menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className={`w-6 h-6 text-gray-700 transition-transform duration-300 ${
                isMobileMenuOpen ? 'rotate-90' : ''
              }`}
            >
              {isMobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Secondary Navigation Bar - Supporting Resources */}
      <div className="hidden lg:block bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-center space-x-8 py-3">
            <Link href="/caregiver-resources">
              <span className="font-medium text-sm transition-all duration-300 whitespace-nowrap hover:text-primary text-gray-600 hover:border-b-2 hover:border-primary/50 pb-1 focus:outline-none focus:ring-0 focus:ring-offset-0">
                Caregiver Resources
              </span>
            </Link>
            
            {/* How It Works Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsHowItWorksOpen(true)}
                onMouseLeave={() => setIsHowItWorksOpen(false)}
                className="font-medium text-sm transition-all duration-300 whitespace-nowrap hover:text-primary text-gray-600 hover:border-b-2 hover:border-primary/50 pb-1 flex items-center gap-1 focus:outline-none focus:ring-0 focus:ring-offset-0"
              >
                How It Works
                <svg className="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              <div
                onMouseEnter={() => setIsHowItWorksOpen(true)}
                onMouseLeave={() => setIsHowItWorksOpen(false)}
                className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 transition-all duration-200 ${
                  isHowItWorksOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <div className="p-4 space-y-2">
                  <Link href="/how-it-works" className="block px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors text-gray-700 hover:text-primary focus:outline-none focus:ring-0 focus:ring-offset-0">
                    Our Process
                  </Link>
                  <Link href="/payment-options" className="block px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors text-gray-700 hover:text-primary focus:outline-none focus:ring-0 focus:ring-offset-0">
                    Payment Options
                  </Link>
                  <Link href="/faq" className="block px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors text-gray-700 hover:text-primary focus:outline-none focus:ring-0 focus:ring-offset-0">
                    FAQ
                  </Link>
                </div>
              </div>
            </div>
            
            <Link href="/reviews">
              <span className="font-medium text-sm transition-all duration-300 whitespace-nowrap hover:text-primary text-gray-600 hover:border-b-2 hover:border-primary/50 pb-1 focus:outline-none focus:ring-0 focus:ring-offset-0">
                Reviews
              </span>
            </Link>
            
            <Link href="/about">
              <span className="font-medium text-sm transition-all duration-300 whitespace-nowrap hover:text-primary text-gray-600 hover:border-b-2 hover:border-primary/50 pb-1 focus:outline-none focus:ring-0 focus:ring-offset-0">
                About Us
              </span>
            </Link>
            
            <Link href="/contact">
              <span className="font-medium text-sm transition-all duration-300 whitespace-nowrap hover:text-primary text-gray-600 hover:border-b-2 hover:border-primary/50 pb-1 focus:outline-none focus:ring-0 focus:ring-offset-0">
                Contact
              </span>
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden`}>
        <div className="bg-white border-t border-gray-200 px-4 py-6 space-y-4">
          {/* Primary Care Types */}
          <div className="border-b border-gray-200 pb-4 mb-4">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Care Types</h3>
            <div className="space-y-2">
              <Link 
                href="/care-types/assisted-living"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="block px-4 py-3 rounded-lg font-semibold transition-colors text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-0 focus:ring-offset-0">
                  Assisted Living
                </span>
              </Link>
              
              <Link 
                href="/care-types/memory-care"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="block px-4 py-3 rounded-lg font-semibold transition-colors text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-0 focus:ring-offset-0">
                  Memory Care
                </span>
              </Link>
              
              <Link 
                href="/care-types/independent-living"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="block px-4 py-3 rounded-lg font-semibold transition-colors text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-0 focus:ring-offset-0">
                  Independent Living
                </span>
              </Link>
              
              <Link 
                href="/care-types/nursing-homes"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="block px-4 py-3 rounded-lg font-semibold transition-colors text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-0 focus:ring-offset-0">
                  Nursing Homes
                </span>
              </Link>
            </div>
          </div>

          {/* Secondary Sections */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Resources</h3>
            <div className="space-y-2">
              <Link 
                href="/caregiver-resources"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="block px-4 py-3 rounded-lg font-medium transition-colors text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-0 focus:ring-offset-0">
                  Caregiver Resources
                </span>
              </Link>
              
              <Link 
                href="/how-it-works"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="block px-4 py-3 rounded-lg font-medium transition-colors text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-0 focus:ring-offset-0">
                  How It Works - Our Process
                </span>
              </Link>
              
              <Link 
                href="/payment-options"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="block px-4 py-3 rounded-lg font-medium transition-colors text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-0 focus:ring-offset-0">
                  Payment Options
                </span>
              </Link>
              
              <Link 
                href="/reviews"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="block px-4 py-3 rounded-lg font-medium transition-colors text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-0 focus:ring-offset-0">
                  Reviews
                </span>
              </Link>
              
              <Link 
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="block px-4 py-3 rounded-lg font-medium transition-colors text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-0 focus:ring-offset-0">
                  About Us
                </span>
              </Link>
              
              <Link 
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="block px-4 py-3 rounded-lg font-medium transition-colors text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-0 focus:ring-offset-0">
                  Contact
                </span>
              </Link>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200 space-y-3">
            <Link
              href="/quiz-intro"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full bg-gradient-to-r from-primary to-purple-600 text-white px-6 py-4 rounded-xl font-semibold text-center hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-0 focus:ring-offset-0"
            >
              Start Your Search
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full bg-gray-100 text-gray-700 px-6 py-4 rounded-xl font-semibold text-center hover:bg-gray-200 transition-all duration-300 focus:outline-none focus:ring-0 focus:ring-offset-0"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
} 