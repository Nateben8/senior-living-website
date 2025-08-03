import React, { useState } from 'react'
import { SEOHead } from '@/components/SEOHead'

type Region = 'los-angeles' | 'orange-county' | 'san-diego'

interface Facility {
  name: string
  address: string
  phone: string
  careLevels: string[]
  monthlyCost: string
  amenities: string[]
  rating: number
  reviewCount: number
  description: string
}

export function FacilitiesPage() {
  const [activeRegion, setActiveRegion] = useState<Region>('los-angeles')

  const facilities: Record<Region, Facility[]> = {
    'los-angeles': [
      {
        name: 'Belmont Village Hollywood Heights',
        address: '2051 N Highland Ave, Los Angeles, CA 90068',
        phone: '(323) 464-4151',
        careLevels: ['Assisted Living', 'Memory Care'],
        monthlyCost: '$4,500 - $7,200',
        amenities: ['Luxury amenities', 'Gourmet dining', 'Fitness center', 'Movie theater', 'Transportation services'],
        rating: 4.8,
        reviewCount: 127,
        description: 'Luxury senior living community offering personalized care and exceptional amenities in the heart of Hollywood.'
      },
      {
        name: 'The Watermark at Beverly Hills',
        address: '220 N Clark Dr, Beverly Hills, CA 90211',
        phone: '(310) 285-9000',
        careLevels: ['Independent Living', 'Assisted Living'],
        monthlyCost: '$5,200 - $8,500',
        amenities: ['Rooftop garden', 'Spa services', 'Fine dining', 'Cultural outings', 'Wellness programs'],
        rating: 4.9,
        reviewCount: 89,
        description: 'Upscale senior living with resort-style amenities and personalized care in prestigious Beverly Hills.'
      },
      {
        name: 'Sunrise of Beverly Hills',
        address: '201 N Crescent Dr, Beverly Hills, CA 90210',
        phone: '(310) 285-9000',
        careLevels: ['Assisted Living', 'Memory Care'],
        monthlyCost: '$4,800 - $7,500',
        amenities: ['Personalized care plans', 'Specialized memory care', 'Family involvement programs', '24/7 nursing'],
        rating: 4.7,
        reviewCount: 156,
        description: 'Specialized memory care and assisted living with compassionate, personalized care services.'
      }
    ],
    'orange-county': [
      {
        name: 'Belmont Village Rancho Palos Verdes',
        address: '5150 Golden Cove Dr, Rancho Palos Verdes, CA 90275',
        phone: '(310) 265-8000',
        careLevels: ['Assisted Living', 'Memory Care'],
        monthlyCost: '$4,200 - $6,800',
        amenities: ['Ocean views', 'Walking trails', 'Art studio', 'Library', 'Wellness center'],
        rating: 4.8,
        reviewCount: 94,
        description: 'Beautiful ocean-view community with comprehensive care and engaging activities for active seniors.'
      },
      {
        name: 'Atria San Juan',
        address: '26911 Avenida Las Palmas, San Juan Capistrano, CA 92675',
        phone: '(949) 240-8000',
        careLevels: ['Independent Living', 'Assisted Living'],
        monthlyCost: '$3,800 - $6,200',
        amenities: ['Golf course access', 'Swimming pool', 'Fitness classes', 'Social activities', 'Transportation'],
        rating: 4.6,
        reviewCount: 78,
        description: 'Active senior community with golf course access and comprehensive wellness programs.'
      },
      {
        name: 'Laguna Woods Village',
        address: '24351 El Toro Rd, Laguna Woods, CA 92637',
        phone: '(949) 855-8000',
        careLevels: ['Independent Living', 'Assisted Living'],
        monthlyCost: '$3,500 - $5,800',
        amenities: ['Large community', 'Multiple dining options', 'Extensive activity calendar', 'Golf courses', 'Swimming pools'],
        rating: 4.5,
        reviewCount: 203,
        description: 'Large, vibrant community with extensive amenities and active lifestyle opportunities.'
      }
    ],
    'san-diego': [
      {
        name: 'Vi at La Jolla Village',
        address: '8450 Genesee Ave, San Diego, CA 92122',
        phone: '(858) 450-9000',
        careLevels: ['Independent Living', 'Assisted Living', 'Memory Care'],
        monthlyCost: '$4,500 - $7,500',
        amenities: ['Luxury resort-style living', 'Multiple restaurants', 'Fitness center', 'Pool', 'Spa services'],
        rating: 4.9,
        reviewCount: 112,
        description: 'Luxury resort-style senior living with exceptional amenities and personalized care services.'
      },
      {
        name: 'Sunrise of La Jolla',
        address: '8565 Rio San Diego Dr, San Diego, CA 92108',
        phone: '(858) 450-9000',
        careLevels: ['Assisted Living', 'Memory Care'],
        monthlyCost: '$4,200 - $6,800',
        amenities: ['Specialized memory care', 'Family support programs', 'Beautiful grounds', '24/7 nursing'],
        rating: 4.7,
        reviewCount: 89,
        description: 'Specialized memory care community with beautiful grounds and comprehensive family support.'
      },
      {
        name: 'Atria Carmel Mountain',
        address: '10076 Mariner Way, San Diego, CA 92121',
        phone: '(858) 450-9000',
        careLevels: ['Independent Living', 'Assisted Living'],
        monthlyCost: '$3,800 - $6,200',
        amenities: ['Modern amenities', 'Social activities', 'Transportation services', 'Fitness center'],
        rating: 4.6,
        reviewCount: 67,
        description: 'Modern senior living community with contemporary amenities and active lifestyle programs.'
      }
    ]
  }

  const regionNames: Record<Region, string> = {
    'los-angeles': 'Los Angeles',
    'orange-county': 'Orange County',
    'san-diego': 'San Diego'
  }

  const regionCounts: Record<Region, number> = {
    'los-angeles': 40,
    'orange-county': 40,
    'san-diego': 25
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="California Senior Living Facilities - Top Communities in Los Angeles, Orange County & San Diego"
        description="Discover the best senior living facilities in California. Comprehensive guide to top communities in Los Angeles, Orange County, and San Diego with detailed reviews, amenities, and costs."
        keywords="California senior living facilities, Los Angeles assisted living, Orange County memory care, San Diego senior communities, California senior living communities"
        pageType="service"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              California's Premier
              <span className="text-primary block">Senior Living Facilities</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover the finest senior living communities across Los Angeles, Orange County, and San Diego. 
              Each facility has been carefully selected for exceptional care, amenities, and resident satisfaction.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white rounded-lg px-6 py-4 shadow-md">
                <div className="text-2xl font-bold text-primary">105+</div>
                <div className="text-sm text-gray-600">Communities</div>
              </div>
              <div className="bg-white rounded-lg px-6 py-4 shadow-md">
                <div className="text-2xl font-bold text-primary">4.8</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
              <div className="bg-white rounded-lg px-6 py-4 shadow-md">
                <div className="text-2xl font-bold text-primary">Free</div>
                <div className="text-sm text-gray-600">Placement Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Region Selector */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(regionNames).map(([key, name]) => (
              <button
                key={key}
                onClick={() => setActiveRegion(key as Region)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  activeRegion === key
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {name} ({regionCounts[key as Region]}+ facilities)
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {facilities[activeRegion].map((facility, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{facility.name}</h3>
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-4 h-4 ${i < Math.floor(facility.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">({facility.reviewCount} reviews)</span>
                  </div>
                  <p className="text-gray-600 mb-4">{facility.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm">
                      <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {facility.address}
                    </div>
                    <div className="flex items-center text-sm">
                      <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {facility.phone}
                    </div>
                    <div className="flex items-center text-sm">
                      <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                      {facility.monthlyCost}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Care Levels:</h4>
                    <div className="flex flex-wrap gap-2">
                      {facility.careLevels.map((level, i) => (
                        <span key={i} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          {level}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Amenities:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {facility.amenities.slice(0, 3).map((amenity, i) => (
                        <li key={i} className="flex items-center">
                          <svg className="w-3 h-3 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {amenity}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex-1 bg-primary text-white py-2 px-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                      Get Details
                    </button>
                    <button className="flex-1 border border-primary text-primary py-2 px-4 rounded-lg font-semibold hover:bg-primary/10 transition-colors">
                      Schedule Tour
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Help Finding the Right Facility?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Our expert advisors can help you find the perfect senior living community for your loved one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Free Assessment
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
              Call (818) 422-5232
            </button>
          </div>
        </div>
      </section>
    </div>
  )
} 