import React from 'react'
import { Link } from 'wouter'

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-blue-50 py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-600/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-primary bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Senior Living Placement</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We're on a mission to make finding quality senior care simple, stress-free, and accessible to every family.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Senior Living Placement was founded by Larry Benavidez, whose journey from Thoroughbred Race Horse Trainer to senior care advocate demonstrates his commitment to making a meaningful difference in people's lives. After over 25 years in horse racing, Larry experienced firsthand the challenges of finding quality senior care when his own father needed placement.
                </p>
                <p>
                  Recognizing the overwhelming complexity families face when searching for senior care, Larry took action. He completed the required coursework mandated by the State of California and passed his state examination to become a licensed RCFE (Residential Care Facility for the Elderly) Administrator with a specialty in Dementia care—a credential that sets us apart from many placement services.
                </p>
                <p>
                  What drives Larry and our organization is authenticity, honesty, and complete transparency with families. We believe every family deserves access to expert, unbiased guidance when making one of life's most important decisions, regardless of their financial situation.
                </p>
                <p>
                  Today, we've helped thousands of families across California navigate their senior care journey. Our service remains completely free because we believe that finding the right care should be about matching needs with quality—not about who can afford consultation fees.
                </p>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <img 
                src="/senior-family.jpg" 
                alt="Happy multi-generational family with grandparents and grandchild enjoying time together" 
                className="rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Licensed & Certified Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Licensed & Certified
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our founder's credentials ensure you receive professional, knowledgeable guidance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">State Licensed RCFE Administrator</h3>
              <p className="text-gray-600 leading-relaxed">
                Licensed by the State of California to oversee Residential Care Facilities for the Elderly (RCFE). This ensures professional expertise in senior care regulations and quality standards.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dementia Care Specialty</h3>
              <p className="text-gray-600 leading-relaxed">
                Specialized training in dementia and Alzheimer's care—a credential that sets us apart from many placement services. We understand the unique challenges families face with memory-related conditions.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <blockquote className="text-2xl font-semibold text-gray-900 italic">
              "I wanted to do something in my life that makes a difference in other people's lives."
            </blockquote>
            <p className="text-lg text-gray-600 mt-4">— Larry Benavidez, Founder</p>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We're committed to providing compassionate, unbiased guidance to every family we serve
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Compassionate Care</h3>
              <p className="text-gray-600">
                We understand this is an emotional journey. Our advisors provide support with empathy and genuine care for every family.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Unbiased Guidance</h3>
              <p className="text-gray-600">
                We never accept kickbacks or prioritize facilities based on commission. Our recommendations are based solely on your needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Family-Focused</h3>
              <p className="text-gray-600">
                Every family is unique. We take time to understand your specific situation, preferences, and budget constraints.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Local Expertise</h3>
              <p className="text-gray-600">
                Our advisors know their local markets intimately. They visit facilities regularly and understand quality differences.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Available When Needed</h3>
              <p className="text-gray-600">
                We're here for urgent placements and long-term planning alike. Our support continues after placement is made.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Proven Results</h3>
              <p className="text-gray-600">
                With 10+ years of experience and thousands of successful placements, we have the track record to earn your trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Meet the dedicated professionals who make our mission possible
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl text-white font-bold">
                👨‍💼
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Larry Benavidez</h3>
              <p className="text-primary font-medium mb-4">Founder & Licensed RCFE Administrator</p>
              <p className="text-gray-600 text-sm">
                Licensed RCFE Administrator with dementia specialty. Former Thoroughbred Race Horse Trainer who transitioned to senior care to make a meaningful difference in families' lives.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl text-white font-bold">
                👨‍⚕️
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Michael Chen</h3>
              <p className="text-primary font-medium mb-4">Head of Advisor Network</p>
              <p className="text-gray-600 text-sm">
                Licensed social worker specializing in geriatric care. Manages our network of local senior living advisors throughout California.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl text-white font-bold">
                👩‍💻
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lisa Rodriguez</h3>
              <p className="text-primary font-medium mb-4">Director of Family Services</p>
              <p className="text-gray-600 text-sm">
                Certified aging life care manager. Leads our family support programs and ensures every family receives personalized guidance throughout their journey.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl text-white font-bold">
                👨‍💼
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">David Park</h3>
              <p className="text-primary font-medium mb-4">Quality Assurance Specialist</p>
              <p className="text-gray-600 text-sm">
                Former nursing home administrator who ensures all partner facilities meet our high standards for quality care and regulatory compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Our Free Service Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                How Our Free Service Works
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  <strong>We're completely free for families.</strong> Senior Living Placement is compensated by senior living communities when we successfully help a family find the right care solution. This partnership model allows us to provide expert guidance at no cost to you.
                </p>
                <p>
                  Importantly, our compensation never influences our recommendations. We work with hundreds of communities nationwide, and our advisors choose recommendations based solely on your needs, preferences, and budget. We're not a marketing company for specific facilities—we're your advocate in finding the best fit.
                </p>
                <p>
                  This model has enabled us to help over 50,000 families without charging fees, making quality senior care guidance accessible regardless of financial situation. Our success is measured by your satisfaction, not our commission rates.
                </p>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="bg-gradient-to-br from-primary to-purple-600 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Why We're Free</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-300 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>No hidden costs or obligations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-300 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>Unbiased recommendations based on your needs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-300 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>Expert guidance from licensed professionals</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-300 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>Ongoing support after placement</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl sm:text-2xl text-purple-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Let our experienced team help you find the perfect senior care solution for your family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+18184225232"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-lg sm:text-xl font-semibold hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              Call Now: (818) 422-5232
            </a>
            <Link
                              href="/quiz"
              className="group bg-white text-primary px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-lg sm:text-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center justify-center"
            >
              Start Your Search
              <svg className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-lg sm:text-xl font-semibold hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 