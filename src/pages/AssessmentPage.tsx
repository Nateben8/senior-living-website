import React, { useState, useEffect } from 'react'

export function AssessmentPage() {
  const [step, setStep] = useState(1)
  const [answers, setAnswers] = useState({
    careType: '',
    urgency: '',
    location: '',
    budget: '',
    needs: [],
    contactInfo: {
      name: '',
      email: '',
      phone: ''
    }
  })

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const handleAnswer = (field: string, value: any) => {
    setAnswers(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const nextStep = () => {
    setStep(prev => prev + 1)
    // Scroll to top when moving to next step
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const prevStep = () => {
    setStep(prev => prev - 1)
    // Scroll to top when going back
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="text-center">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What type of care are you looking for?</h2>
              <p className="text-lg text-gray-600">Select the type of care that best matches your loved one's needs</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button 
                onClick={() => { handleAnswer('careType', 'assisted-living'); nextStep() }}
                className="group p-8 border-2 border-gray-200 rounded-2xl hover:border-primary hover:bg-gradient-to-br hover:from-purple-50 hover:to-blue-50 transition-all duration-300 text-left transform hover:scale-105 hover:shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl text-gray-900">Assisted Living</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">Help with daily activities like bathing, dressing, and medication management. Perfect for seniors who need some support but want to maintain independence.</p>
              </button>
              <button 
                onClick={() => { handleAnswer('careType', 'memory-care'); nextStep() }}
                className="group p-8 border-2 border-gray-200 rounded-2xl hover:border-primary hover:bg-gradient-to-br hover:from-purple-50 hover:to-blue-50 transition-all duration-300 text-left transform hover:scale-105 hover:shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl text-gray-900">Memory Care</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">Specialized care for Alzheimer's and other forms of dementia. Secure environments with trained staff and cognitive stimulation programs.</p>
              </button>
              <button 
                onClick={() => { handleAnswer('careType', 'independent-living'); nextStep() }}
                className="group p-8 border-2 border-gray-200 rounded-2xl hover:border-primary hover:bg-gradient-to-br hover:from-purple-50 hover:to-blue-50 transition-all duration-300 text-left transform hover:scale-105 hover:shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7l9-4 9 4M4 10v8a2 2 0 002 2h12a2 2 0 002-2v-8M4 10h16"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl text-gray-900">Independent Living</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">Active senior communities with amenities and social opportunities. Perfect for seniors who are independent but want maintenance-free living.</p>
              </button>
              <button 
                onClick={() => { handleAnswer('careType', 'nursing-home'); nextStep() }}
                className="group p-8 border-2 border-gray-200 rounded-2xl hover:border-primary hover:bg-gradient-to-br hover:from-purple-50 hover:to-blue-50 transition-all duration-300 text-left transform hover:scale-105 hover:shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl text-gray-900">Nursing Home</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">24/7 medical care and supervision for complex health needs. Skilled nursing care for seniors with serious medical conditions.</p>
              </button>
            </div>
          </div>
        )
      
      case 2:
        return (
          <div className="text-center">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How urgent is your need for care?</h2>
              <p className="text-lg text-gray-600">This helps us prioritize your search and provide appropriate recommendations</p>
            </div>
            <div className="space-y-4 max-w-2xl mx-auto">
              <button 
                onClick={() => { handleAnswer('urgency', 'immediate'); nextStep() }}
                className="group w-full p-6 border-2 border-gray-200 rounded-2xl hover:border-red-500 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 transition-all duration-300 text-left transform hover:scale-105"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">Immediate (within 30 days)</h3>
                    <p className="text-gray-600">Need to move quickly due to health or safety concerns</p>
                  </div>
                </div>
              </button>
              <button 
                onClick={() => { handleAnswer('urgency', 'soon'); nextStep() }}
                className="group w-full p-6 border-2 border-gray-200 rounded-2xl hover:border-orange-500 hover:bg-gradient-to-r hover:from-orange-50 hover:to-yellow-50 transition-all duration-300 text-left transform hover:scale-105"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">Soon (1-3 months)</h3>
                    <p className="text-gray-600">Planning ahead but need to move relatively quickly</p>
                  </div>
                </div>
              </button>
              <button 
                onClick={() => { handleAnswer('urgency', 'planning'); nextStep() }}
                className="group w-full p-6 border-2 border-gray-200 rounded-2xl hover:border-green-500 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 transition-all duration-300 text-left transform hover:scale-105"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">Planning (3+ months)</h3>
                    <p className="text-gray-600">Researching options and planning for the future</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        )
      
      case 3:
        return (
          <div className="text-center">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Where are you looking for care?</h2>
              <p className="text-lg text-gray-600">Enter your preferred location to find nearby communities</p>
            </div>
            <div className="max-w-md mx-auto">
              <div className="relative">
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <input 
                  type="text" 
                  placeholder="Enter city or zip code"
                  className="w-full p-4 pl-12 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-lg text-gray-900 placeholder-gray-500"
                  value={answers.location}
                  onChange={(e) => handleAnswer('location', e.target.value)}
                />
              </div>
              <button 
                onClick={nextStep}
                disabled={!answers.location.trim()}
                className="w-full mt-6 bg-gradient-to-r from-primary to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                Continue
              </button>
            </div>
          </div>
        )
      
      case 4:
        return (
          <div className="text-center">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What's your monthly budget range?</h2>
              <p className="text-lg text-gray-600">This helps us recommend communities within your budget</p>
            </div>
            <div className="space-y-4 max-w-2xl mx-auto">
              <button 
                onClick={() => { handleAnswer('budget', '2000-4000'); nextStep() }}
                className="group w-full p-6 border-2 border-gray-200 rounded-2xl hover:border-primary hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-2xl text-gray-900">$2,000 - $4,000</span>
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </button>
              <button 
                onClick={() => { handleAnswer('budget', '4000-6000'); nextStep() }}
                className="group w-full p-6 border-2 border-gray-200 rounded-2xl hover:border-primary hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-2xl text-gray-900">$4,000 - $6,000</span>
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </button>
              <button 
                onClick={() => { handleAnswer('budget', '6000-8000'); nextStep() }}
                className="group w-full p-6 border-2 border-gray-200 rounded-2xl hover:border-primary hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-2xl text-gray-900">$6,000 - $8,000</span>
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </button>
              <button 
                onClick={() => { handleAnswer('budget', '8000+'); nextStep() }}
                className="group w-full p-6 border-2 border-gray-200 rounded-2xl hover:border-primary hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-2xl text-gray-900">$8,000+</span>
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        )
      
      case 5:
        return (
          <div className="text-center">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get your personalized recommendations</h2>
              <p className="text-lg text-gray-600 mb-6">We'll connect you with a local expert who can help you find the perfect senior living community.</p>
            </div>
            <div className="max-w-md mx-auto space-y-4">
              <div className="relative">
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
                <input 
                  type="text" 
                  placeholder="Your name"
                  className="w-full p-4 pl-12 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-lg text-gray-900 placeholder-gray-500"
                  value={answers.contactInfo.name}
                  onChange={(e) => handleAnswer('contactInfo', {...answers.contactInfo, name: e.target.value})}
                />
              </div>
              <div className="relative">
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 4v7a2 2 0 002 2h14a2 2 0 002-2v-7m-18 0h18"></path>
                </svg>
                <input 
                  type="email" 
                  placeholder="Email address"
                  className="w-full p-4 pl-12 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-lg text-gray-900 placeholder-gray-500"
                  value={answers.contactInfo.email}
                  onChange={(e) => handleAnswer('contactInfo', {...answers.contactInfo, email: e.target.value})}
                />
              </div>
              <div className="relative">
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <input 
                  type="tel" 
                  placeholder="Phone number"
                  className="w-full p-4 pl-12 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-lg text-gray-900 placeholder-gray-500"
                  value={answers.contactInfo.phone}
                  onChange={(e) => handleAnswer('contactInfo', {...answers.contactInfo, phone: e.target.value})}
                />
              </div>
              <button 
                onClick={() => alert('Thank you! A senior living advisor will contact you soon.')}
                disabled={!answers.contactInfo.name.trim() || !answers.contactInfo.email.trim() || !answers.contactInfo.phone.trim()}
                className="w-full bg-gradient-to-r from-primary to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                Get My Free Recommendations
              </button>
            </div>
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Free Senior Living Assessment</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Answer a few quick questions to get personalized senior living recommendations from our expert advisors
          </p>
          
          {/* Progress Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="flex justify-between items-center mb-4">
              {[1, 2, 3, 4, 5].map((s) => (
                <div key={s} className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                    s < step ? 'bg-green-500 text-white' : 
                    s === step ? 'bg-primary text-white' : 
                    'bg-gray-200 text-gray-500'
                  }`}>
                    {s < step ? '✓' : s}
                  </div>
                  <span className="text-xs text-gray-500 mt-2 hidden sm:block">
                    {s === 1 ? 'Care Type' : 
                     s === 2 ? 'Urgency' : 
                     s === 3 ? 'Location' : 
                     s === 4 ? 'Budget' : 'Contact'}
                  </span>
                </div>
              ))}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-primary to-purple-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${(step / 5) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          {renderStep()}
          
          {step > 1 && step < 5 && (
            <div className="mt-8 flex justify-between">
              <button 
                onClick={prevStep}
                className="flex items-center px-6 py-3 border-2 border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-300 text-gray-700 font-semibold"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                Back
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 