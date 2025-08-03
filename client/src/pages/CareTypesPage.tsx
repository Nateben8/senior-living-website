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
      longDescription: 'Assisted living communities provide personalized care and support for seniors who need help with daily activities but want to maintain their independence. These facilities offer a perfect balance of assistance and autonomy.',
      features: ['Personal care assistance', 'Medication management', 'Social activities', '24/7 staff support'],
      image: '/assisted-living-facility-new.jpg',
      keywords: ['assisted living facilities', 'senior care communities', 'daily living assistance', 'medication management', 'personal care services', 'senior living options', 'California assisted living', 'Los Angeles assisted living'],
      benefits: [
        'Personalized care plans tailored to individual needs',
        '24/7 professional staff available for assistance',
        'Medication management and health monitoring',
        'Nutritious meals and dining services',
        'Housekeeping and maintenance services',
        'Social activities and recreational programs',
        'Transportation services for appointments and outings',
        'Emergency response systems for safety'
      ],
      costs: 'Assisted living costs in California typically range from $3,000 to $6,000 per month, depending on location, level of care needed, and amenities provided.',
      ctaText: 'Find Assisted Living Near You',
      ctaSubtext: 'Get personalized recommendations for assisted living communities in your area'
    },
    {
      id: 'memory-care',
      title: 'Memory Care',
      description: 'Specialized care for seniors with Alzheimer\'s and dementia.',
      longDescription: 'Memory care facilities provide specialized care for seniors with Alzheimer\'s disease, dementia, and other memory-related conditions. These secure environments are designed to promote safety, comfort, and cognitive stimulation.',
      features: ['Secure environment', 'Specialized programming', 'Trained staff', 'Family support'],
      image: '/memory-care-facility-new.jpg',
      keywords: ['memory care facilities', 'Alzheimer\'s care', 'dementia care', 'memory care communities', 'cognitive care', 'senior memory care', 'California memory care', 'dementia treatment'],
      benefits: [
        'Secure, specially designed environments to prevent wandering',
        'Staff trained in dementia and Alzheimer\'s care',
        'Structured daily routines to reduce confusion and anxiety',
        'Cognitive stimulation activities and memory exercises',
        'Specialized nutrition programs for brain health',
        'Family support groups and education programs',
        '24/7 supervision and safety monitoring',
        'Therapeutic activities designed for cognitive engagement'
      ],
      costs: 'Memory care costs in California typically range from $4,000 to $8,000 per month, reflecting the specialized care and enhanced security features required.',
      ctaText: 'Find Memory Care Solutions',
      ctaSubtext: 'Get expert guidance for memory care facilities specializing in dementia and Alzheimer\'s care'
    },
    {
      id: 'independent-living',
      title: 'Independent Living',
      description: 'Active lifestyle for seniors who need minimal assistance.',
      longDescription: 'Independent living communities are perfect for active seniors who want maintenance-free living with access to amenities, social activities, and a supportive environment while maintaining their independence.',
      features: ['Maintenance-free living', 'Social activities', 'Transportation', 'Security'],
      image: '/independent-living-community-new.jpg',
      keywords: ['independent living communities', 'senior apartments', 'active adult communities', 'maintenance-free living', 'senior lifestyle communities', 'California independent living', 'senior housing options'],
      benefits: [
        'Maintenance-free living with no home repairs or yard work',
        'Access to fitness centers, swimming pools, and recreational facilities',
        'Social activities, clubs, and entertainment programs',
        'Restaurant-style dining with multiple meal options',
        'Transportation services for shopping and appointments',
        'Security features and emergency response systems',
        'Housekeeping and laundry services available',
        'Beautiful grounds and walking paths for outdoor activities'
      ],
      costs: 'Independent living costs in California typically range from $2,500 to $5,000 per month, depending on location, apartment size, and included amenities.',
      ctaText: 'Find Independent Living Communities',
      ctaSubtext: 'Discover active senior communities that match your lifestyle and preferences'
    },
    {
      id: 'nursing-homes',
      title: 'Nursing Homes',
      description: '24/7 medical care and supervision for seniors.',
      longDescription: 'Nursing homes provide comprehensive medical care and supervision for seniors who require round-the-clock nursing care, rehabilitation services, or long-term medical support in a clinical environment.',
      features: ['Medical care', 'Rehabilitation services', 'Skilled nursing', 'Long-term care'],
      image: '/nursing-home-facility.jpg',
      keywords: ['nursing homes', 'skilled nursing facilities', 'long-term care', 'rehabilitation services', 'medical care facilities', 'California nursing homes', 'senior medical care'],
      benefits: [
        '24/7 skilled nursing care and medical supervision',
        'Rehabilitation services including physical, occupational, and speech therapy',
        'Medical care management and medication administration',
        'Specialized care for complex medical conditions',
        'Wound care and medical treatment services',
        'Nutritional support and dietary management',
        'Social activities and mental health support',
        'Family education and support programs'
      ],
      costs: 'Nursing home costs in California typically range from $8,000 to $12,000 per month for private rooms, with semi-private rooms costing less. Medicare and Medicaid may cover some costs.',
      ctaText: 'Find Nursing Home Care',
      ctaSubtext: 'Get expert guidance for skilled nursing facilities and long-term care options'
    }
  ]

  const selectedCareType = careTypes.find(type => type.id === careType)

  if (careType && selectedCareType) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-purple-600 to-blue-600 text-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {selectedCareType.title} in California
              </h1>
              <p className="text-xl sm:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed mb-8">
                {selectedCareType.longDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/quiz-intro" 
                  className="bg-white text-primary px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  {selectedCareType.ctaText}
                </Link>
                <a
                  href="tel:+18184225232"
                  className="border-2 border-white text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105"
                >
                  Call (818) 422-5232
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What is Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={selectedCareType.image} 
                  alt={`${selectedCareType.title} facility`}
                  className="w-full h-96 object-cover rounded-2xl shadow-xl"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  What is {selectedCareType.title}?
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {selectedCareType.longDescription} Our expert advisors can help you find the perfect {selectedCareType.title.toLowerCase()} community that meets your loved one's needs and budget.
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features:</h3>
                  <ul className="space-y-3">
                    {selectedCareType.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Benefits of {selectedCareType.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover how {selectedCareType.title.toLowerCase()} can improve your loved one's quality of life and provide the support they need.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {selectedCareType.benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Costs Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {selectedCareType.title} Costs in California
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {selectedCareType.costs}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/quiz-intro" 
                  className="bg-primary text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Get Cost Estimates
                </Link>
                <Link 
                  href="/payment-options" 
                  className="border-2 border-primary text-primary px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300"
                >
                  Payment Options
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Find the Perfect {selectedCareType.title} Community?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              {selectedCareType.ctaSubtext}. Our expert advisors are here to help you make the best decision for your loved one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/quiz-intro" 
                className="bg-white text-primary px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                {selectedCareType.ctaText}
              </Link>
              <a
                href="tel:+18184225232"
                className="border-2 border-white text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105"
              >
                Call (818) 422-5232
              </a>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-purple-600 to-blue-600 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Senior Living Care Types
            </h1>
            <p className="text-xl sm:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Explore different senior living options to find the perfect care solution for your loved one. Our expert advisors can help you understand the differences and make the best choice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/quiz-intro" 
                className="bg-white text-primary px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Start Your Search
              </Link>
              <a
                href="tel:+18184225232"
                className="border-2 border-white text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105"
              >
                Call (818) 422-5232
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Care Types Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Senior Living Options
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each care type offers different levels of support and services. Learn more about each option to find the perfect fit for your loved one.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {careTypes.map((type) => (
              <Link key={type.id} href={`/care-types/${type.id}`} className="group">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={type.image} 
                      alt={type.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {type.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {type.description}
                    </p>
                    <div className="flex items-center text-primary font-semibold group-hover:text-purple-600 transition-colors">
                      Learn More
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Need Help Choosing the Right Care Type?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Our expert advisors can help you understand the differences between care types and find the perfect option for your loved one. Get personalized recommendations today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/quiz-intro" 
              className="bg-white text-primary px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Start Your Search
            </Link>
            <a
              href="tel:+18184225232"
              className="border-2 border-white text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105"
            >
              Call (818) 422-5232
            </a>
          </div>
        </div>
      </section>
    </div>
  )
} 