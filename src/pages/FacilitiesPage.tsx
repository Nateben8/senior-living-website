import React, { useState } from 'react'
import { Link } from 'wouter'

// Type definitions
type Facility = {
  id: number
  name: string
  address: string
  type: string
}

type FacilitiesData = {
  'los-angeles': Facility[]
  'orange-county': Facility[]
  'san-diego': Facility[]
}

// Original facility data from seniorlivingplacement.org
const facilities: FacilitiesData = {
  'los-angeles': [
    {
      id: 1,
      name: "Belmont Village Hollywood Heights",
      address: "2051 N Highland Ave, Los Angeles, CA 90068",
      type: "Assisted Living"
    },
    {
      id: 2,
      name: "Sakura Gardens of Los Angeles",
      address: "325 S Boyle Ave, Los Angeles, CA 90033",
      type: "Assisted Living"
    },
    {
      id: 3,
      name: "Melrose Villas",
      address: "823 N Poinsettia Pl, Los Angeles, CA 90046",
      type: "Assisted Living"
    },
    {
      id: 4,
      name: "Park Ventura Retirement",
      address: "21200 Ventura Blvd, Woodland Hills, CA 91364",
      type: "Independent Living"
    },
    {
      id: 5,
      name: "CityView",
      address: "515 N La Brea Ave, Los Angeles, CA 90036",
      type: "Assisted Living"
    },
    {
      id: 6,
      name: "The Watermark at Beverly Hills",
      address: "220 N Clark Dr, Beverly Hills, CA 90211",
      type: "Assisted Living"
    },
    {
      id: 7,
      name: "Belmont Village Westwood",
      address: "10475 Wilshire Blvd, Los Angeles, CA 90024",
      type: "Assisted Living"
    },
    {
      id: 8,
      name: "The Variel Woodland Hills",
      address: "6233 Variel Ave, Woodland Hills, CA 91367",
      type: "Assisted Living"
    },
    {
      id: 9,
      name: "Raya's Paradise, Inc.",
      address: "1533 N Stanley Ave, Los Angeles, CA 90046",
      type: "Assisted Living"
    },
    {
      id: 10,
      name: "Pacific Gardens",
      address: "1410 Brett Pl, San Pedro, CA 90732",
      type: "Assisted Living"
    },
    {
      id: 11,
      name: "Sunrise of Beverly Hills",
      address: "201 N Crescent Dr, Beverly Hills, CA 90210",
      type: "Assisted Living"
    },
    {
      id: 12,
      name: "The Pinnacles at Burton",
      address: "8757 Burton Way, Los Angeles, CA 90048",
      type: "Assisted Living"
    },
    {
      id: 13,
      name: "Melrose Gardens",
      address: "960 N Martel Ave, Los Angeles, CA 90046",
      type: "Assisted Living"
    },
    {
      id: 14,
      name: "Ivy Park at Culver City (formerly Sunrise Villa)",
      address: "4061 Grandview Blvd, Los Angeles, CA 90066",
      type: "Assisted Living"
    },
    {
      id: 15,
      name: "Terraza of Cheviot Hills",
      address: "3101 Castle Heights Ave, Los Angeles, CA 90034",
      type: "Assisted Living"
    }
  ],
  'orange-county': [
    {
      id: 16,
      name: "Belmont Village Rancho Palos Verdes",
      address: "5150 Golden Cove Dr, Rancho Palos Verdes, CA 90275",
      type: "Assisted Living"
    },
    {
      id: 17,
      name: "Belmont Village Cardiff by the Sea",
      address: "3033 Manchester Ave, Cardiff by the Sea, CA 92007",
      type: "Assisted Living"
    },
    {
      id: 18,
      name: "Atria San Juan",
      address: "26911 Avenida Las Palmas, San Juan Capistrano, CA 92675",
      type: "Assisted Living"
    },
    {
      id: 19,
      name: "Brookdale San Juan Capistrano",
      address: "31641 Via las Flores, San Juan Capistrano, CA 92675",
      type: "Assisted Living"
    },
    {
      id: 20,
      name: "Buena Vida Estates",
      address: "23442 El Toro Rd, Lake Forest, CA 92630",
      type: "Independent Living"
    },
    {
      id: 21,
      name: "The Groves Tustin",
      address: "12665 Montecito Rd, Tustin, CA 92782",
      type: "Assisted Living"
    },
    {
      id: 22,
      name: "Laguna Woods Village",
      address: "24351 El Toro Rd, Laguna Woods, CA 92637",
      type: "Independent Living"
    },
    {
      id: 23,
      name: "Lincoln Meadows Senior Living",
      address: "23962 Aliso Creek Rd, Laguna Niguel, CA 92677",
      type: "Assisted Living"
    },
    {
      id: 24,
      name: "Merrill Gardens at Huntington Beach",
      address: "5752 Corporate Ave, Cypress, CA 90630",
      type: "Assisted Living"
    },
    {
      id: 25,
      name: "Pacifica Senior Living Escondido",
      address: "815 E Grand Ave, Escondido, CA 92025",
      type: "Assisted Living"
    },
    {
      id: 26,
      name: "Royalwood Care Center",
      address: "19100 Magnolia St, Huntington Beach, CA 92646",
      type: "Nursing Home"
    },
    {
      id: 27,
      name: "Sunrise of Huntington Beach",
      address: "19582 Beach Blvd, Huntington Beach, CA 92648",
      type: "Assisted Living"
    },
    {
      id: 28,
      name: "Sunny View Retirement Community",
      address: "22445 Olympiad Dr, Aliso Viejo, CA 92656",
      type: "Independent Living"
    },
    {
      id: 29,
      name: "The Watermark at 3030 Park",
      address: "3030 Old Ranch Pkwy, Seal Beach, CA 90740",
      type: "Assisted Living"
    },
    {
      id: 30,
      name: "Atria Woodbridge",
      address: "17 Executive Cir, Irvine, CA 92614",
      type: "Assisted Living"
    }
  ],
  'san-diego': [
    {
      id: 31,
      name: "Belmont Village Cardiff by the Sea",
      address: "3033 Manchester Ave, Cardiff by the Sea, CA 92007",
      type: "Assisted Living"
    },
    {
      id: 32,
      name: "The Cypress of Hilltop",
      address: "4284 44th St, San Diego, CA 92115",
      type: "Independent Living"
    },
    {
      id: 33,
      name: "Vi at La Jolla Village",
      address: "8450 Genesee Ave, San Diego, CA 92122",
      type: "Independent Living"
    },
    {
      id: 34,
      name: "Sunrise of La Jolla",
      address: "8565 Rio San Diego Dr, San Diego, CA 92108",
      type: "Assisted Living"
    },
    {
      id: 35,
      name: "The Pearl of La Jolla",
      address: "11588 Via Rancho San Diego, El Cajon, CA 92019",
      type: "Assisted Living"
    },
    {
      id: 36,
      name: "Atria Carmel Mountain",
      address: "10076 Mariner Way, San Diego, CA 92121",
      type: "Assisted Living"
    },
    {
      id: 37,
      name: "Atria Encinitas",
      address: "1450 Encinitas Blvd, Encinitas, CA 92024",
      type: "Assisted Living"
    },
    {
      id: 38,
      name: "Watermark La Jolla Beach",
      address: "1088 Silverado St, La Jolla, CA 92037",
      type: "Assisted Living"
    },
    {
      id: 39,
      name: "Paradise Village",
      address: "8885 Rio San Diego Dr, San Diego, CA 92108",
      type: "Independent Living"
    },
    {
      id: 40,
      name: "Brookdale Clairemont",
      address: "5404 Balboa Ave, San Diego, CA 92111",
      type: "Assisted Living"
    },
    {
      id: 41,
      name: "Lantern Crest Senior Living Santee",
      address: "8855 Magnolia Ave, Santee, CA 92071",
      type: "Assisted Living"
    },
    {
      id: 42,
      name: "The Remington Club",
      address: "16916 Hierba Dr, Rancho Bernardo, CA 92128",
      type: "Assisted Living"
    },
    {
      id: 43,
      name: "Pacifica Senior Living San Leandro",
      address: "1550 Bancroft Ave, San Leandro, CA 94577",
      type: "Assisted Living"
    },
    {
      id: 44,
      name: "Atria Hillcrest",
      address: "4080 Centre St, San Diego, CA 92103",
      type: "Assisted Living"
    },
    {
      id: 45,
      name: "Sunrise of Hillcrest",
      address: "3900 8th Ave, San Diego, CA 92103",
      type: "Assisted Living"
    }
  ]
}

const regions = [
  { key: 'los-angeles', name: 'Los Angeles Senior Living Communities', count: 40 },
  { key: 'orange-county', name: 'Orange County Senior Living Communities', count: 40 },
  { key: 'san-diego', name: 'San Diego Senior Living Communities', count: 25 }
]

export function FacilitiesPage() {
  const [selectedRegion, setSelectedRegion] = useState<keyof FacilitiesData>('los-angeles')
  const [currentPage, setCurrentPage] = useState(1)
  const facilitiesPerPage = 15

  const currentFacilities = facilities[selectedRegion] || []
  const totalPages = Math.ceil(currentFacilities.length / facilitiesPerPage)
  const startIndex = (currentPage - 1) * facilitiesPerPage
  const endIndex = startIndex + facilitiesPerPage
  const displayedFacilities = currentFacilities.slice(startIndex, endIndex)

  const handleRegionChange = (region: keyof FacilitiesData) => {
    setSelectedRegion(region)
    setCurrentPage(1)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Senior Living Communities in California</h1>
        <p className="text-lg text-gray-600">
          Explore our comprehensive directory of senior living facilities across Los Angeles, Orange County, and San Diego. 
          Find the perfect community for your loved one with our detailed listings and expert guidance.
        </p>
      </div>

      {/* Region Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {regions.map(region => (
          <button
            key={region.key}
            onClick={() => handleRegionChange(region.key as keyof FacilitiesData)}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              selectedRegion === region.key
                ? 'bg-primary text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {region.name} ({region.count} facilities)
          </button>
        ))}
      </div>

      {/* Facilities Table */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Facility Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Address
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {displayedFacilities.map((facility: Facility) => (
                <tr key={facility.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{facility.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{facility.address}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link
                      href={`/assessment?facility=${facility.id}`}
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-purple-600 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                      </svg>
                      Get Quote
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2 mt-8">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-2 border rounded-md text-sm font-medium ${
                currentPage === page
                  ? 'bg-primary text-white border-primary'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {page}
            </button>
          ))}
          
          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}

      {/* Results Info */}
      <div className="text-center mt-4 text-sm text-gray-600">
        Showing {startIndex + 1} to {Math.min(endIndex, currentFacilities.length)} of {currentFacilities.length} facilities
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 rounded-lg p-8 mt-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help Finding the Right Facility?</h2>
        <p className="text-lg text-gray-600 mb-6">
          Our senior living advisors can help you find the perfect community for your loved one.
          Get personalized recommendations based on your specific needs and budget.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+18184225232"
            className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
            </svg>
            Call Now: (818) 422-5232
          </a>
          <Link
            href="/assessment"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
            </svg>
            Take Free Assessment
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            Talk to an Advisor
          </Link>
        </div>
      </div>
    </div>
  )
} 