import React from 'react'
import { Link, useRoute } from 'wouter'

export function CareTypesPage() {
  const [, params] = useRoute('/care-types/:type')
  const careType = params?.type

  const careTypes = [
    {
      id: 'assisted-living',
      title: 'Assisted Living',
      description: 'Support with daily activities while maintaining independence.',
      features: ['Personal care assistance', 'Medication management', 'Social activities', '24/7 staff support'],
      image: 'https://seniorlivingplacement.org/assets/assisted-living.jpg'
    },
    {
      id: 'memory-care',
      title: 'Memory Care',
      description: 'Specialized care for seniors with Alzheimer\'s and dementia.',
      features: ['Secure environment', 'Specialized programming', 'Trained staff', 'Family support'],
      image: 'https://seniorlivingplacement.org/assets/memory-care.jpg'
    },
    {
      id: 'independent-living',
      title: 'Independent Living',
      description: 'Active lifestyle communities for independent seniors.',
      features: ['Maintenance-free living', 'Social activities', 'Dining options', 'Transportation'],
      image: 'https://seniorlivingplacement.org/assets/independent-living.jpg'
    },
    {
      id: 'nursing-homes',
      title: 'Nursing Homes',
      description: '24/7 medical care and supervision for complex health needs.',
      features: ['Skilled nursing care', 'Medical supervision', 'Rehabilitation services', 'Long-term care'],
      image: 'https://seniorlivingplacement.org/assets/nursing-home.jpg'
    }
  ]

  const selectedCareType = careTypes.find(type => type.id === careType) || careTypes[0]

  // Function to get the correct button text based on care type
  const getButtonText = (title: string) => {
    if (title === 'Nursing Homes') {
      return 'Find Nursing Home Facilities'
    }
    return `Find ${title} Communities`
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {selectedCareType.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {selectedCareType.description}
            </p>
          </div>
        </div>
      </section>

      {/* All Care Types - Moved to top */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">All Care Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {careTypes.map((type) => (
              <Link key={type.id} href={`/care-types/${type.id}`}>
                <div className={`bg-white rounded-xl shadow-sm border-2 p-6 text-center transition-all duration-200 hover:shadow-lg ${
                  type.id === selectedCareType.id ? 'border-primary' : 'border-gray-200 hover:border-primary'
                }`}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{type.title}</h3>
                  <p className="text-gray-600 text-sm">{type.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Care Type Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What is {selectedCareType.title}?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {selectedCareType.description} Our expert advisors can help you find the perfect 
                {selectedCareType.title.toLowerCase()} community that meets your specific needs and preferences.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features:</h3>
              <ul className="space-y-3 mb-8">
                {selectedCareType.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/assessment"
                className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                {getButtonText(selectedCareType.title)}
              </Link>
            </div>

            <div className="bg-gray-200 rounded-xl p-8">
              <div className="w-full h-64 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-600 text-lg">{selectedCareType.title} Community</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 