import React, { useState } from 'react'
import { SEOHead } from '@/components/SEOHead'

type Region = 'los-angeles' | 'orange-county' | 'san-diego'

interface Facility {
  name: string
  address: string
  careLevels: string[]
  monthlyCost: string
  amenities: string[]
  rating: number
  reviewCount: number
  description: string
}

export function FacilitiesPage() {
  const [activeRegion, setActiveRegion] = useState<Region>('los-angeles')
  const [visibleCount, setVisibleCount] = useState(15)

  const facilities: Record<Region, Facility[]> = {
    'los-angeles': [
      {
        name: 'Belmont Village Hollywood Heights',
        address: '2051 N Highland Ave, Los Angeles, CA 90068',
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
        careLevels: ['Assisted Living', 'Memory Care'],
        monthlyCost: '$4,800 - $7,500',
        amenities: ['Personalized care plans', 'Specialized memory care', 'Family involvement programs', '24/7 nursing'],
        rating: 4.7,
        reviewCount: 156,
        description: 'Specialized memory care and assisted living with compassionate, personalized care services.'
      },
      {
        name: 'Belmont Village Westwood',
        address: '10475 Wilshire Blvd, Los Angeles, CA 90024',
        careLevels: ['Assisted Living', 'Memory Care'],
        monthlyCost: '$4,600 - $7,400',
        amenities: ['University area location', 'Cultural programs', 'Fitness center', 'Library', 'Transportation'],
        rating: 4.8,
        reviewCount: 112,
        description: 'Elegant senior living in the heart of Westwood, near UCLA and cultural attractions.'
      },
      {
        name: 'The Variel Woodland Hills',
        address: '6233 Variel Ave, Woodland Hills, CA 91367',
        careLevels: ['Independent Living', 'Assisted Living'],
        monthlyCost: '$4,200 - $6,800',
        amenities: ['Valley location', 'Garden areas', 'Fitness programs', 'Social activities', 'Transportation'],
        rating: 4.6,
        reviewCount: 95,
        description: 'Comfortable senior living in the San Fernando Valley with beautiful gardens and active lifestyle.'
      },
      {
        name: 'Melrose Gardens',
        address: '960 N Martel Ave, Los Angeles, CA 90046',
        careLevels: ['Assisted Living', 'Memory Care'],
        monthlyCost: '$4,400 - $7,000',
        amenities: ['Hollywood area', 'Personalized care', 'Activity programs', 'Family support', '24/7 nursing'],
        rating: 4.7,
        reviewCount: 134,
        description: 'Personalized care in the heart of Hollywood with comprehensive support services.'
      },
      {
        name: 'Ivy Park at Culver City',
        address: '4061 Grandview Blvd, Los Angeles, CA 90066',
        careLevels: ['Independent Living', 'Assisted Living'],
        monthlyCost: '$4,300 - $6,900',
        amenities: ['Culver City location', 'Modern amenities', 'Fitness center', 'Dining options', 'Transportation'],
        rating: 4.5,
        reviewCount: 87,
        description: 'Modern senior living in Culver City with contemporary amenities and active lifestyle.'
      },
      {
        name: 'Terraza of Cheviot Hills',
        address: '3101 Castle Heights Ave, Los Angeles, CA 90034',
        careLevels: ['Assisted Living', 'Memory Care'],
        monthlyCost: '$4,500 - $7,100',
        amenities: ['West LA location', 'Specialized care', 'Family programs', 'Wellness center', '24/7 support'],
        rating: 4.8,
        reviewCount: 103,
        description: 'Specialized senior care in West Los Angeles with comprehensive family support programs.'
      },
      {
        name: 'Park Ventura Retirement',
        address: '21200 Ventura Blvd, Woodland Hills, CA 91364',
        careLevels: ['Independent Living', 'Assisted Living'],
        monthlyCost: '$4,100 - $6,600',
        amenities: ['Valley location', 'Retirement community', 'Activity programs', 'Dining services', 'Transportation'],
        rating: 4.4,
        reviewCount: 76,
        description: 'Active retirement community in the San Fernando Valley with comprehensive lifestyle programs.'
      },
      {
        name: 'CityView',
        address: '515 N La Brea Ave, Los Angeles, CA 90036',
        careLevels: ['Assisted Living', 'Memory Care'],
        monthlyCost: '$4,600 - $7,300',
        amenities: ['Mid-Wilshire location', 'Urban setting', 'Cultural access', 'Fitness programs', '24/7 care'],
        rating: 4.7,
        reviewCount: 98,
        description: 'Urban senior living in Mid-Wilshire with easy access to cultural attractions and city amenities.'
      },
      {
        name: 'Raya\'s Paradise, Inc.',
        address: '1533 N Stanley Ave, Los Angeles, CA 90046',
        careLevels: ['Assisted Living', 'Memory Care'],
        monthlyCost: '$4,400 - $7,000',
        amenities: ['Hollywood Hills location', 'Personalized care', 'Family involvement', 'Wellness programs', '24/7 support'],
        rating: 4.6,
        reviewCount: 82,
        description: 'Personalized senior care in Hollywood Hills with strong family involvement and support.'
      },
      {
        name: 'Pacific Gardens',
        address: '1410 Brett Pl, San Pedro, CA 90732',
        careLevels: ['Independent Living', 'Assisted Living'],
        monthlyCost: '$3,900 - $6,400',
        amenities: ['Harbor area location', 'Ocean views', 'Activity programs', 'Dining services', 'Transportation'],
        rating: 4.5,
        reviewCount: 91,
        description: 'Harbor area senior living with ocean views and comprehensive activity programs.'
      },
      {
        name: 'The Pinnacles at Burton',
        address: '8757 Burton Way, Los Angeles, CA 90048',
        careLevels: ['Assisted Living', 'Memory Care'],
        monthlyCost: '$4,700 - $7,400',
        amenities: ['Beverly Hills adjacent', 'Luxury amenities', 'Personalized care', 'Wellness center', '24/7 nursing'],
        rating: 4.9,
        reviewCount: 145,
        description: 'Luxury senior living adjacent to Beverly Hills with personalized care and premium amenities.'
      },
      {
        name: 'Melrose Villas',
        address: '823 N Poinsettia Pl, Los Angeles, CA 90046',
        careLevels: ['Independent Living', 'Assisted Living'],
        monthlyCost: '$4,300 - $6,800',
        amenities: ['Hollywood area', 'Villa-style living', 'Private spaces', 'Activity programs', 'Transportation'],
        rating: 4.6,
        reviewCount: 78,
        description: 'Villa-style senior living in Hollywood with private spaces and comprehensive activity programs.'
      },
      {
        name: 'Sakura Gardens of Los Angeles',
        address: '325 S Boyle Ave, Los Angeles, CA 90033',
        careLevels: ['Assisted Living', 'Memory Care'],
        monthlyCost: '$4,200 - $6,700',
        amenities: ['Downtown LA location', 'Cultural programs', 'Personalized care', 'Family support', '24/7 nursing'],
        rating: 4.5,
        reviewCount: 67,
        description: 'Cultural senior living in Downtown LA with personalized care and family support programs.'
      }
    ],
    'orange-county': [
      {
        name: 'Belmont Village Rancho Palos Verdes',
        address: '5150 Golden Cove Dr, Rancho Palos Verdes, CA 90275',
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
        careLevels: ['Independent Living', 'Assisted Living'],
        monthlyCost: '$3,500 - $5,800',
        amenities: ['Large community', 'Multiple dining options', 'Extensive activity calendar', 'Golf courses', 'Swimming pools'],
        rating: 4.5,
        reviewCount: 203,
        description: 'Large, vibrant community with extensive amenities and active lifestyle opportunities.'
      },
      {
        name: 'Belmont Village Cardiff by the Sea',
        address: '3033 Manchester Ave, Cardiff by the Sea, CA 92007',
        careLevels: ['Assisted Living', 'Memory Care'],
        monthlyCost: '$4,400 - $7,000',
        amenities: ['Coastal location', 'Ocean views', 'Wellness programs', 'Cultural activities', 'Transportation'],
        rating: 4.7,
        reviewCount: 89,
        description: 'Coastal senior living with ocean views and comprehensive wellness programs.'
      },
      {
        name: 'Brookdale San Juan Capistrano',
        address: '31641 Via las Flores, San Juan Capistrano, CA 92675',
        careLevels: ['Independent Living', 'Assisted Living'],
        monthlyCost: '$3,900 - $6,300',
        amenities: ['Mission area', 'Garden settings', 'Activity programs', 'Dining services', 'Transportation'],
        rating: 4.6,
        reviewCount: 72,
        description: 'Mission area senior living with beautiful gardens and comprehensive activity programs.'
      },
      {
        name: 'Buena Vida Estates',
        address: '23442 El Toro Rd, Lake Forest, CA 92630',
        careLevels: ['Independent Living', 'Assisted Living'],
        monthlyCost: '$3,700 - $6,000',
        amenities: ['Lake Forest location', 'Active lifestyle', 'Fitness center', 'Social activities', 'Transportation'],
        rating: 4.4,
        reviewCount: 65,
        description: 'Active senior living in Lake Forest with comprehensive lifestyle and fitness programs.'
      },
      {
        name: 'The Groves Tustin',
        address: '12665 Montecito Rd, Tustin, CA 92782',
        careLevels: ['Independent Living', 'Assisted Living'],
        monthlyCost: '$3,800 - $6,100',
        amenities: ['Tustin location', 'Modern amenities', 'Activity programs', 'Dining services', 'Transportation'],
        rating: 4.5,
        reviewCount: 58,
        description: 'Modern senior living in Tustin with contemporary amenities and active lifestyle programs.'
      },
      {
        name: 'Lincoln Meadows Senior Living',
        address: '23962 Aliso Creek Rd, Laguna Niguel, CA 92677',
        careLevels: ['Assisted Living', 'Memory Care'],
        monthlyCost: '$4,300 - $6,900',
        amenities: ['Laguna Niguel location', 'Personalized care', 'Family support', 'Wellness programs', '24/7 nursing'],
        rating: 4.7,
        reviewCount: 83,
        description: 'Personalized senior care in Laguna Niguel with comprehensive family support programs.'
      },
      {
        name: 'Merrill Gardens at Huntington Beach',
        address: '5752 Corporate Ave, Cypress, CA 90630',
        careLevels: ['Independent Living', 'Assisted Living'],
        monthlyCost: '$3,900 - $6,200',
        amenities: ['Huntington Beach area', 'Coastal lifestyle', 'Activity programs', 'Dining services', 'Transportation'],
        rating: 4.6,
        reviewCount: 71,
        description: 'Coastal senior living near Huntington Beach with active lifestyle and comprehensive programs.'
      },
      {
        name: 'Pacifica Senior Living Escondido',
        address: '815 E Grand Ave, Escondido, CA 92025',
        careLevels: ['Assisted Living', 'Memory Care'],
        monthlyCost: '$4,100 - $6,600',
        amenities: ['Escondido location', 'Personalized care', 'Family involvement', 'Wellness center', '24/7 support'],
        rating: 4.5,
        reviewCount: 69,
        description: 'Personalized senior care in Escondido with strong family involvement and comprehensive support.'
      },
      {
        name: 'Royalwood Care Center',
        address: '19100 Magnolia St, Huntington Beach, CA 92646',
        careLevels: ['Assisted Living', 'Memory Care'],
        monthlyCost: '$4,200 - $6,700',
        amenities: ['Huntington Beach location', 'Specialized care', 'Family programs', 'Wellness center', '24/7 nursing'],
        rating: 4.6,
        reviewCount: 77,
        description: 'Specialized senior care in Huntington Beach with comprehensive family support programs.'
      },
      {
        name: 'Sunrise of Huntington Beach',
        address: '19582 Beach Blvd, Huntington Beach, CA 92648',
        careLevels: ['Assisted Living', 'Memory Care'],
        monthlyCost: '$4,400 - $7,000',
        amenities: ['Beach area location', 'Personalized care', 'Family involvement', 'Wellness programs', '24/7 support'],
        rating: 4.7,
        reviewCount: 91,
        description: 'Personalized senior care near the beach with strong family involvement and comprehensive support.'
      },
      {
        name: 'Sunny View Retirement Community',
        address: '22445 Olympiad Dr, Aliso Viejo, CA 92656',
        careLevels: ['Independent Living', 'Assisted Living'],
        monthlyCost: '$3,800 - $6,100',
        amenities: ['Aliso Viejo location', 'Active lifestyle', 'Fitness programs', 'Social activities', 'Transportation'],
        rating: 4.5,
        reviewCount: 64,
        description: 'Active senior living in Aliso Viejo with comprehensive fitness and social activity programs.'
      },
      {
        name: 'The Watermark at 3030 Park',
        address: '3030 Old Ranch Pkwy, Seal Beach, CA 90740',
        careLevels: ['Independent Living', 'Assisted Living'],
        monthlyCost: '$4,500 - $7,200',
        amenities: ['Seal Beach location', 'Luxury amenities', 'Resort-style living', 'Fine dining', 'Wellness programs'],
        rating: 4.8,
        reviewCount: 102,
        description: 'Luxury resort-style senior living in Seal Beach with premium amenities and comprehensive wellness programs.'
      },
      {
        name: 'Atria Woodbridge',
        address: '17 Executive Cir, Irvine, CA 92614',
        careLevels: ['Independent Living', 'Assisted Living'],
        monthlyCost: '$4,200 - $6,800',
        amenities: ['Irvine location', 'Executive area', 'Modern amenities', 'Activity programs', 'Transportation'],
        rating: 4.6,
        reviewCount: 85,
        description: 'Modern senior living in Irvine\'s executive area with contemporary amenities and active lifestyle programs.'
      }
    ],
    'san-diego': [
      {
        name: 'Vi at La Jolla Village',
        address: '8450 Genesee Ave, San Diego, CA 92122',
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
        careLevels: ['Independent Living', 'Assisted Living'],
        monthlyCost: '$3,800 - $6,200',
        amenities: ['Modern amenities', 'Social activities', 'Transportation services', 'Fitness center'],
        rating: 4.6,
        reviewCount: 67,
        description: 'Modern senior living community with contemporary amenities and active lifestyle programs.'
      },
      {
        name: 'The Pearl of La Jolla',
        address: '11588 Via Rancho San Diego, El Cajon, CA 92019',
        careLevels: ['Assisted Living', 'Memory Care'],
        monthlyCost: '$4,100 - $6,600',
        amenities: ['East County location', 'Personalized care', 'Family support', 'Wellness programs', '24/7 nursing'],
        rating: 4.5,
        reviewCount: 73,
        description: 'Personalized senior care in East County with comprehensive family support and wellness programs.'
      },
      {
        name: 'Atria Encinitas',
        address: '1450 Encinitas Blvd, Encinitas, CA 92024',
        careLevels: ['Independent Living', 'Assisted Living'],
        monthlyCost: '$4,300 - $6,900',
        amenities: ['Coastal location', 'Encinitas area', 'Activity programs', 'Dining services', 'Transportation'],
        rating: 4.7,
        reviewCount: 81,
        description: 'Coastal senior living in Encinitas with comprehensive activity programs and dining services.'
      },
      {
        name: 'Watermark La Jolla Beach',
        address: '1088 Silverado St, La Jolla, CA 92037',
        careLevels: ['Independent Living', 'Assisted Living'],
        monthlyCost: '$4,600 - $7,300',
        amenities: ['La Jolla Beach location', 'Ocean views', 'Luxury amenities', 'Fine dining', 'Wellness programs'],
        rating: 4.8,
        reviewCount: 95,
        description: 'Luxury senior living at La Jolla Beach with ocean views and premium amenities.'
      },
      {
        name: 'Paradise Village',
        address: '8885 Rio San Diego Dr, San Diego, CA 92108',
        careLevels: ['Independent Living', 'Assisted Living'],
        monthlyCost: '$4,000 - $6,500',
        amenities: ['Mission Valley location', 'Active lifestyle', 'Fitness programs', 'Social activities', 'Transportation'],
        rating: 4.6,
        reviewCount: 78,
        description: 'Active senior living in Mission Valley with comprehensive fitness and social activity programs.'
      },
      {
        name: 'Brookdale Clairemont',
        address: '5404 Balboa Ave, San Diego, CA 92111',
        careLevels: ['Assisted Living', 'Memory Care'],
        monthlyCost: '$4,200 - $6,700',
        amenities: ['Clairemont location', 'Personalized care', 'Family support', 'Wellness center', '24/7 nursing'],
        rating: 4.5,
        reviewCount: 69,
        description: 'Personalized senior care in Clairemont with comprehensive family support and wellness programs.'
      },
      {
        name: 'Lantern Crest Senior Living Santee',
        address: '8855 Magnolia Ave, Santee, CA 92071',
        careLevels: ['Independent Living', 'Assisted Living'],
        monthlyCost: '$3,900 - $6,300',
        amenities: ['Santee location', 'East County area', 'Activity programs', 'Dining services', 'Transportation'],
        rating: 4.4,
        reviewCount: 62,
        description: 'East County senior living in Santee with comprehensive activity programs and dining services.'
      },
      {
        name: 'The Remington Club',
        address: '16916 Hierba Dr, Rancho Bernardo, CA 92128',
        careLevels: ['Independent Living', 'Assisted Living'],
        monthlyCost: '$4,400 - $7,000',
        amenities: ['Rancho Bernardo location', 'Golf course area', 'Luxury amenities', 'Activity programs', 'Transportation'],
        rating: 4.7,
        reviewCount: 87,
        description: 'Luxury senior living in Rancho Bernardo with golf course access and comprehensive activity programs.'
      },
      {
        name: 'Pacifica Senior Living San Leandro',
        address: '1550 Bancroft Ave, San Leandro, CA 94577',
        careLevels: ['Assisted Living', 'Memory Care'],
        monthlyCost: '$4,100 - $6,600',
        amenities: ['San Leandro location', 'Personalized care', 'Family involvement', 'Wellness center', '24/7 support'],
        rating: 4.5,
        reviewCount: 71,
        description: 'Personalized senior care in San Leandro with strong family involvement and comprehensive support.'
      },
      {
        name: 'Atria Hillcrest',
        address: '4080 Centre St, San Diego, CA 92103',
        careLevels: ['Independent Living', 'Assisted Living'],
        monthlyCost: '$4,300 - $6,900',
        amenities: ['Hillcrest location', 'Urban setting', 'Cultural access', 'Activity programs', 'Transportation'],
        rating: 4.6,
        reviewCount: 75,
        description: 'Urban senior living in Hillcrest with easy access to cultural attractions and comprehensive activity programs.'
      },
      {
        name: 'Sunrise of Hillcrest',
        address: '3900 8th Ave, San Diego, CA 92103',
        careLevels: ['Assisted Living', 'Memory Care'],
        monthlyCost: '$4,200 - $6,700',
        amenities: ['Hillcrest location', 'Personalized care', 'Family support', 'Wellness programs', '24/7 nursing'],
        rating: 4.6,
        reviewCount: 68,
        description: 'Personalized senior care in Hillcrest with comprehensive family support and wellness programs.'
      },
      {
        name: 'The Cypress of Hilltop',
        address: '4284 44th St, San Diego, CA 92115',
        careLevels: ['Independent Living', 'Assisted Living'],
        monthlyCost: '$4,000 - $6,500',
        amenities: ['Hilltop location', 'Active lifestyle', 'Fitness programs', 'Social activities', 'Transportation'],
        rating: 4.5,
        reviewCount: 64,
        description: 'Active senior living in Hilltop with comprehensive fitness and social activity programs.'
      },
      {
        name: 'Belmont Village Cardiff by the Sea',
        address: '3033 Manchester Ave, Cardiff by the Sea, CA 92007',
        careLevels: ['Assisted Living', 'Memory Care'],
        monthlyCost: '$4,400 - $7,000',
        amenities: ['Coastal location', 'Ocean views', 'Wellness programs', 'Cultural activities', 'Transportation'],
        rating: 4.7,
        reviewCount: 89,
        description: 'Coastal senior living with ocean views and comprehensive wellness programs.'
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

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 10)
  }

  const visibleFacilities = facilities[activeRegion].slice(0, visibleCount)
  const hasMore = visibleFacilities.length < facilities[activeRegion].length

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
                onClick={() => {
                  setActiveRegion(key as Region)
                  setVisibleCount(15)
                }}
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
            {visibleFacilities.map((facility, index) => (
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
          
          {/* Load More Button */}
          {hasMore && (
            <div className="text-center mt-12">
              <button
                onClick={handleLoadMore}
                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Load More Facilities
              </button>
            </div>
          )}
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