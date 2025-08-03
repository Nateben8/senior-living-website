import React, { useState, useEffect } from 'react'
import { Link } from 'wouter'

type Region = 'los-angeles' | 'orange-county' | 'san-diego'

interface Facility {
  name: string
  address: string
}

export function HomePage() {
  const [activeRegion, setActiveRegion] = useState<Region>('los-angeles')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      })
    }
  }

  const facilities: Record<Region, Facility[]> = {
    'los-angeles': [
      { name: 'Belmont Village Hollywood Heights', address: '2051 N Highland Ave, Los Angeles, CA 90068' },
      { name: 'Sakura Gardens of Los Angeles', address: '325 S Boyle Ave, Los Angeles, CA 90033' },
      { name: 'Melrose Villas', address: '823 N Poinsettia Pl, Los Angeles, CA 90046' },
      { name: 'Park Ventura Retirement', address: '21200 Ventura Blvd, Woodland Hills, CA 91364' },
      { name: 'CityView', address: '515 N La Brea Ave, Los Angeles, CA 90036' },
      { name: 'The Watermark at Beverly Hills', address: '220 N Clark Dr, Beverly Hills, CA 90211' },
      { name: 'Belmont Village Westwood', address: '10475 Wilshire Blvd, Los Angeles, CA 90024' },
      { name: 'The Variel Woodland Hills', address: '6233 Variel Ave, Woodland Hills, CA 91367' },
      { name: 'Raya\'s Paradise, Inc.', address: '1533 N Stanley Ave, Los Angeles, CA 90046' },
      { name: 'Pacific Gardens', address: '1410 Brett Pl, San Pedro, CA 90732' },
      { name: 'Sunrise of Beverly Hills', address: '201 N Crescent Dr, Beverly Hills, CA 90210' },
      { name: 'The Pinnacles at Burton', address: '8757 Burton Way, Los Angeles, CA 90048' },
      { name: 'Melrose Gardens', address: '960 N Martel Ave, Los Angeles, CA 90046' },
      { name: 'Ivy Park at Culver City', address: '4061 Grandview Blvd, Los Angeles, CA 90066' },
      { name: 'Terraza of Cheviot Hills', address: '3101 Castle Heights Ave, Los Angeles, CA 90034' }
    ],
    'orange-county': [
      { name: 'Belmont Village Rancho Palos Verdes', address: '5150 Golden Cove Dr, Rancho Palos Verdes, CA 90275' },
      { name: 'Belmont Village Cardiff by the Sea', address: '3033 Manchester Ave, Cardiff by the Sea, CA 92007' },
      { name: 'Atria San Juan', address: '26911 Avenida Las Palmas, San Juan Capistrano, CA 92675' },
      { name: 'Brookdale San Juan Capistrano', address: '31641 Via las Flores, San Juan Capistrano, CA 92675' },
      { name: 'Buena Vida Estates', address: '23442 El Toro Rd, Lake Forest, CA 92630' },
      { name: 'The Groves Tustin', address: '12665 Montecito Rd, Tustin, CA 92782' },
      { name: 'Laguna Woods Village', address: '24351 El Toro Rd, Laguna Woods, CA 92637' },
      { name: 'Lincoln Meadows Senior Living', address: '23962 Aliso Creek Rd, Laguna Niguel, CA 92677' },
      { name: 'Merrill Gardens at Huntington Beach', address: '5752 Corporate Ave, Cypress, CA 90630' },
      { name: 'Pacifica Senior Living Escondido', address: '815 E Grand Ave, Escondido, CA 92025' },
      { name: 'Royalwood Care Center', address: '19100 Magnolia St, Huntington Beach, CA 92646' },
      { name: 'Sunrise of Huntington Beach', address: '19582 Beach Blvd, Huntington Beach, CA 92648' },
      { name: 'Sunny View Retirement Community', address: '22445 Olympiad Dr, Aliso Viejo, CA 92656' },
      { name: 'The Watermark at 3030 Park', address: '3030 Old Ranch Pkwy, Seal Beach, CA 90740' },
      { name: 'Atria Woodbridge', address: '17 Executive Cir, Irvine, CA 92614' }
    ],
    'san-diego': [
      { name: 'Belmont Village Cardiff by the Sea', address: '3033 Manchester Ave, Cardiff by the Sea, CA 92007' },
      { name: 'The Cypress of Hilltop', address: '4284 44th St, San Diego, CA 92115' },
      { name: 'Vi at La Jolla Village', address: '8450 Genesee Ave, San Diego, CA 92122' },
      { name: 'Sunrise of La Jolla', address: '8565 Rio San Diego Dr, San Diego, CA 92108' },
      { name: 'The Pearl of La Jolla', address: '11588 Via Rancho San Diego, El Cajon, CA 92019' },
      { name: 'Atria Carmel Mountain', address: '10076 Mariner Way, San Diego, CA 92121' },
      { name: 'Atria Encinitas', address: '1450 Encinitas Blvd, Encinitas, CA 92024' },
      { name: 'Watermark La Jolla Beach', address: '1088 Silverado St, La Jolla, CA 92037' },
      { name: 'Paradise Village', address: '8885 Rio San Diego Dr, San Diego, CA 92108' },
      { name: 'Brookdale Clairemont', address: '5404 Balboa Ave, San Diego, CA 92111' },
      { name: 'Lantern Crest Senior Living Santee', address: '8855 Magnolia Ave, Santee, CA 92071' },
      { name: 'The Remington Club', address: '16916 Hierba Dr, Rancho Bernardo, CA 92128' },
      { name: 'Pacifica Senior Living San Leandro', address: '1550 Bancroft Ave, San Leandro, CA 94577' },
      { name: 'Atria Hillcrest', address: '4080 Centre St, San Diego, CA 92103' },
      { name: 'Sunrise of Hillcrest', address: '3900 8th Ave, San Diego, CA 92103' }
    ]
  }

  const regionCounts: Record<Region, number> = {
    'los-angeles': 40,
    'orange-county': 40,
    'san-diego': 25
  }

  const regionNames: Record<Region, string> = {
    'los-angeles': 'Los Angeles',
    'orange-county': 'Orange County',
    'san-diego': 'San Diego'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-blue-50 py-12 sm:py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-600/5"></div>
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Senior living community" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className={`lg:pr-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6">
                Find the Perfect <span className="text-primary bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Senior Living</span> Community
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8">
                Take our quick 3-minute assessment to get personalized recommendations for assisted living, memory care, and other senior housing options that fit your family's needs and budget.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 text-sm sm:text-base text-gray-500 mb-8">
                <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                  <svg className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="font-medium">100% Free Service</span>
                </div>
                <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                  <svg className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="font-medium">Expert Guidance</span>
                </div>
                <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                  <svg className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="font-medium">Personalized Matches</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <Link
                  href="/quiz"
                  className="group inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-14 w-full sm:w-auto bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white text-lg sm:text-xl font-semibold py-4 px-8 sm:px-10 rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl touch-manipulation min-h-[56px]"
                >
                  Start Your Free Assessment
                  <svg className="inline-block ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
                <p className="text-sm sm:text-base text-gray-500 text-center sm:text-left">
                  No obligation • Takes less than 3 minutes • Expert guidance included
                </p>
              </div>
            </div>
            
            <div className={`mt-8 sm:mt-10 lg:mt-0 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
                <img 
                  src="/senior-couple.jpg" 
                  alt="Senior couple walking together holding hands in a peaceful park setting" 
                  className="relative rounded-3xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick CTA Section */}
      <section className="py-8 bg-gradient-to-r from-primary to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Need Immediate Help?</h3>
              <p className="text-sm sm:text-base text-purple-100">Call our experts now for urgent placement assistance</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a 
                href="tel:+18184225232"
                className="bg-white text-primary px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                (818) 422-5232
              </a>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Families Choose Our Service */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Families Choose Our Service
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We understand that finding the right senior living community is one of the most important decisions your family will make. 
              Our expert advisors are here to guide you every step of the way.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Guidance</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our certified senior living specialists have helped thousands of families navigate this important decision. 
                We know the communities personally and can provide honest, unbiased recommendations.
              </p>
              <img 
                src="/expert-guidance-consultation.jpg" 
                alt="Expert guidance for senior living - professional consultation between senior and advisor" 
                className="w-full h-32 object-cover rounded-lg mb-4"
                style={{ objectPosition: 'center 40%' }}
              />
              <Link
                href="/quiz"
                className="inline-block bg-gradient-to-r from-primary to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300 transform hover:scale-105"
              >
                Get Expert Help
              </Link>
            </div>
            
            <div className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Save Time & Stress</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Skip hours of research and countless phone calls. We pre-screen communities and present only the best matches 
                for your specific needs, preferences, and budget.
              </p>
              <img 
                src="/stress-overwhelm-new.png" 
                alt="Save time and stress with expert guidance - overwhelmed professional" 
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <Link
                href="/how-it-works"
                className="inline-block bg-gradient-to-r from-primary to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300 transform hover:scale-105"
              >
                Learn How It Works
              </Link>
            </div>
            
            <div className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Completely Free</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our service is 100% free to families. We're here to help, with no hidden costs or obligations. 
                Our compensation comes from the communities, never from families.
              </p>
              <img 
                src="/free-service-image.png" 
                alt="Free senior living placement service - no cost to families" 
                className="w-full h-32 object-cover rounded-lg mb-4"
                style={{ objectPosition: 'center 30%' }}
              />
              <Link
                href="/reviews"
                className="inline-block bg-gradient-to-r from-primary to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300 transform hover:scale-105"
              >
                Read Reviews
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Senior Living Communities Section */}
      <section id="senior-facilities" className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Senior Living Communities in California
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              Explore our comprehensive directory of senior living facilities across Los Angeles, Orange County, and San Diego. 
              Find the perfect community for your loved one with our detailed listings and expert guidance.
            </p>
            
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
                <input 
                  type="text" 
                  className="flex h-14 w-full bg-white px-3 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-lg pl-14 pr-6 py-4 text-lg border-2 border-gray-200 rounded-2xl shadow-lg focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-300" 
                  placeholder="Search facilities by name or address..."
                />
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10">
              {[
                { id: 'los-angeles' as Region, name: 'Los Angeles Area', count: regionCounts['los-angeles'] },
                { id: 'orange-county' as Region, name: 'Orange County Area', count: regionCounts['orange-county'] },
                { id: 'san-diego' as Region, name: 'San Diego Area', count: regionCounts['san-diego'] }
              ].map((region) => (
                <button 
                  key={region.id}
                  onClick={() => setActiveRegion(region.id)}
                  className={`px-6 sm:px-8 py-4 sm:py-5 rounded-2xl font-semibold text-base sm:text-lg transition-all duration-300 flex items-center space-x-3 ${
                    activeRegion === region.id 
                      ? 'bg-gradient-to-r from-primary to-purple-600 text-white shadow-xl transform scale-105' 
                      : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-primary hover:text-primary hover:shadow-lg'
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin">
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>{region.name}</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                    activeRegion === region.id ? 'bg-white text-primary' : 'bg-primary text-white'
                  }`}>{region.count}</span>
                </button>
              ))}
            </div>
            
            <div className="space-y-6">
              <div className="block">
                <div className="text-card-foreground border-0 shadow-2xl bg-white rounded-3xl overflow-hidden">
                  <div className="bg-gradient-to-r from-primary to-purple-600 text-white p-8 sm:p-10">
                    <h3 className="text-2xl sm:text-3xl font-bold flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center space-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin">
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span>{regionNames[activeRegion]} Senior Living Communities</span>
                      </div>
                      <span className="bg-white text-primary px-6 py-3 rounded-full text-lg font-bold">
                        {regionCounts[activeRegion]} facilities
                      </span>
                    </h3>
                  </div>
                  
                  <div className="p-0">
                    <div className="hidden lg:block overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-50 border-b-2 border-gray-200">
                          <tr>
                            <th className="text-left p-8 font-bold text-gray-700 text-lg">
                              <div className="flex items-center space-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin text-primary">
                                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                  <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                                <span>Facility Name</span>
                              </div>
                            </th>
                            <th className="text-left p-8 font-bold text-gray-700 text-lg">Address</th>
                            <th className="text-center p-8 font-bold text-gray-700 text-lg">Action</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {facilities[activeRegion].slice(0, 5).map((facility: Facility, index: number) => (
                            <tr key={index} className="hover:bg-gray-50 transition-colors">
                              <td className="p-8">
                                <div className="font-semibold text-gray-900 text-lg">{facility.name}</div>
                              </td>
                              <td className="p-8">
                                <div className="text-gray-600 leading-relaxed">{facility.address}</div>
                              </td>
                              <td className="p-8 text-center">
                                <Link
                                  href="/quiz"
                                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-12 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text mr-2">
                                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                    <path d="M10 9H8"></path>
                                    <path d="M16 13H8"></path>
                                    <path d="M16 17H8"></path>
                                  </svg>
                                  Get Quote
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    
                    {/* Mobile view for facilities */}
                    <div className="lg:hidden p-6 space-y-4">
                      {facilities[activeRegion].slice(0, 3).map((facility: Facility, index: number) => (
                        <div key={index} className="bg-gray-50 rounded-xl p-6">
                          <h4 className="font-semibold text-gray-900 text-lg mb-2">{facility.name}</h4>
                          <p className="text-gray-600 mb-4">{facility.address}</p>
                          <Link
                            href="/quiz"
                            className="inline-flex items-center justify-center w-full bg-gradient-to-r from-primary to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300 transform hover:scale-105"
                          >
                            Get Quote
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* View All Facilities CTA */}
            <div className="text-center mt-8">
              <Link
                href="/facilities"
                className="inline-flex items-center justify-center bg-white text-primary border-2 border-primary px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View All {regionCounts[activeRegion]} Facilities
                <svg className="ml-3 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Thousands of Families</h2>
            <p className="text-xl text-gray-600">Join the families who have found their perfect senior living community with our help</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">50,000+</div>
              <div className="text-gray-600">Families Helped</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-gray-600">Communities</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">5.0</div>
              <div className="text-gray-600">Star Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Get Expert Help Today
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our senior living specialists are here to help you find the perfect community. 
              Call us now or take our free assessment to get started.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone Contact */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Call Now</h3>
                <p className="text-gray-600 mb-6">Speak with our expert advisors immediately</p>
                <a
                  href="tel:+18184225232"
                  className="inline-flex items-center justify-center bg-green-500 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  (818) 422-5232
                </a>
              </div>
            </div>

            {/* Free Assessment */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Free Assessment</h3>
                <p className="text-gray-600 mb-6">Get personalized recommendations in 3 minutes</p>
                <Link
                  href="/quiz"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Start Assessment
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Send Message</h3>
                <p className="text-gray-600 mb-6">Get in touch with our team</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-blue-500 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Contact Us
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Find Your Perfect Community?
          </h2>
          <p className="text-xl sm:text-2xl text-purple-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Take our free assessment and get personalized recommendations today. 
            Our expert advisors are ready to help you find the perfect senior living solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quiz"
              className="group bg-white text-primary px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-lg sm:text-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center justify-center"
            >
              Start Your Free Assessment
              <svg className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
            <button
              onClick={() => scrollToSection('benefits')}
              className="border-2 border-white text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-lg sm:text-xl font-semibold hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  )
} 