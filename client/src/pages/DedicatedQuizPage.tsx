import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'wouter'

// California cities and zip codes for autocomplete
const CALIFORNIA_LOCATIONS = [
  { name: 'Los Angeles, CA', zip: '90001' },
  { name: 'San Diego, CA', zip: '92101' },
  { name: 'San Francisco, CA', zip: '94102' },
  { name: 'Sacramento, CA', zip: '95814' },
  { name: 'Fresno, CA', zip: '93701' },
  { name: 'Long Beach, CA', zip: '90802' },
  { name: 'Oakland, CA', zip: '94601' },
  { name: 'Bakersfield, CA', zip: '93301' },
  { name: 'Anaheim, CA', zip: '92801' },
  { name: 'Santa Ana, CA', zip: '92701' },
  { name: 'Riverside, CA', zip: '92501' },
  { name: 'Stockton, CA', zip: '95201' },
  { name: 'Irvine, CA', zip: '92602' },
  { name: 'Fremont, CA', zip: '94536' },
  { name: 'San Bernardino, CA', zip: '92401' },
  { name: 'Modesto, CA', zip: '95350' },
  { name: 'Fontana, CA', zip: '92335' },
  { name: 'Oxnard, CA', zip: '93030' },
  { name: 'Moreno Valley, CA', zip: '92553' },
  { name: 'Huntington Beach, CA', zip: '92648' },
  { name: 'Glendale, CA', zip: '91201' },
  { name: 'Santa Clarita, CA', zip: '91321' },
  { name: 'Garden Grove, CA', zip: '92840' },
  { name: 'Oceanside, CA', zip: '92054' },
  { name: 'Rancho Cucamonga, CA', zip: '91701' },
  { name: 'Santa Rosa, CA', zip: '95401' },
  { name: 'Ontario, CA', zip: '91761' },
  { name: 'Elk Grove, CA', zip: '95624' },
  { name: 'Corona, CA', zip: '92879' },
  { name: 'Lancaster, CA', zip: '93534' },
  { name: 'Palmdale, CA', zip: '93550' },
  { name: 'Salinas, CA', zip: '93901' },
  { name: 'Hayward, CA', zip: '94541' },
  { name: 'Pomona, CA', zip: '91766' },
  { name: 'Escondido, CA', zip: '92025' },
  { name: 'Sunnyvale, CA', zip: '94086' },
  { name: 'Torrance, CA', zip: '90501' },
  { name: 'Pasadena, CA', zip: '91101' },
  { name: 'Orange, CA', zip: '92862' },
  { name: 'Fullerton, CA', zip: '92831' },
  { name: 'Thousand Oaks, CA', zip: '91360' },
  { name: 'Visalia, CA', zip: '93277' },
  { name: 'Simi Valley, CA', zip: '93065' },
  { name: 'Concord, CA', zip: '94520' },
  { name: 'Roseville, CA', zip: '95661' },
  { name: 'Santa Clara, CA', zip: '95050' },
  { name: 'Vallejo, CA', zip: '94590' },
  { name: 'Victorville, CA', zip: '92392' },
  { name: 'El Monte, CA', zip: '91731' },
  { name: 'Berkeley, CA', zip: '94704' },
  { name: 'Downey, CA', zip: '90240' },
  { name: 'Costa Mesa, CA', zip: '92626' },
  { name: 'Inglewood, CA', zip: '90301' },
  { name: 'Fairfield, CA', zip: '94533' },
  { name: 'Ventura, CA', zip: '93001' },
  { name: 'West Covina, CA', zip: '91790' },
  { name: 'Norwalk, CA', zip: '90650' },
  { name: 'Carlsbad, CA', zip: '92008' },
  { name: 'Richmond, CA', zip: '94801' },
  { name: 'Murrieta, CA', zip: '92562' },
  { name: 'Burbank, CA', zip: '91501' },
  { name: 'Antioch, CA', zip: '94509' },
  { name: 'Daly City, CA', zip: '94014' },
  { name: 'Temecula, CA', zip: '92590' },
  { name: 'Santa Maria, CA', zip: '93454' },
  { name: 'El Cajon, CA', zip: '92020' },
  { name: 'Rialto, CA', zip: '92376' },
  { name: 'San Mateo, CA', zip: '94401' },
  { name: 'Compton, CA', zip: '90220' },
  { name: 'Clovis, CA', zip: '93611' },
  { name: 'South Gate, CA', zip: '90280' },
  { name: 'Vista, CA', zip: '92083' },
  { name: 'Mission Viejo, CA', zip: '92691' },
  { name: 'Vacaville, CA', zip: '95687' },
  { name: 'Carson, CA', zip: '90745' },
  { name: 'Hesperia, CA', zip: '92345' },
  { name: 'Santa Monica, CA', zip: '90401' },
  { name: 'Westminster, CA', zip: '92683' },
  { name: 'Redding, CA', zip: '96001' },
  { name: 'Santa Barbara, CA', zip: '93101' },
  { name: 'Chico, CA', zip: '95926' },
  { name: 'Newport Beach, CA', zip: '92660' },
  { name: 'San Leandro, CA', zip: '94577' },
  { name: 'Indio, CA', zip: '92201' },
  { name: 'Whittier, CA', zip: '90601' },
  { name: 'Citrus Heights, CA', zip: '95610' },
  { name: 'Livermore, CA', zip: '94550' },
  { name: 'Tracy, CA', zip: '95376' },
  { name: 'Alhambra, CA', zip: '91801' },
  { name: 'Lakewood, CA', zip: '90712' },
  { name: 'Merced, CA', zip: '95340' },
  { name: 'Buena Park, CA', zip: '90620' },
  { name: 'Menifee, CA', zip: '92584' },
  { name: 'Lake Forest, CA', zip: '92630' },
  { name: 'Napa, CA', zip: '94558' },
  { name: 'Redwood City, CA', zip: '94061' },
  { name: 'Bellflower, CA', zip: '90706' },
  { name: 'Upland, CA', zip: '91786' },
  { name: 'Turlock, CA', zip: '95380' },
  { name: 'Manteca, CA', zip: '95336' },
  { name: 'La Habra, CA', zip: '90631' },
  { name: 'Rancho Cordova, CA', zip: '95670' },
  { name: 'Madera, CA', zip: '93637' },
  { name: 'Rocklin, CA', zip: '95765' },
  { name: 'Hemet, CA', zip: '92543' },
  { name: 'Folsom, CA', zip: '95630' },
  { name: 'La Mesa, CA', zip: '91941' },
  { name: 'Chino Hills, CA', zip: '91709' },
  { name: 'San Ramon, CA', zip: '94583' },
  { name: 'Baldwin Park, CA', zip: '91706' },
  { name: 'Alameda, CA', zip: '94501' },
  { name: 'Arden-Arcade, CA', zip: '95821' },
  { name: 'Tulare, CA', zip: '93274' },
  { name: 'Mountain View, CA', zip: '94040' },
  { name: 'Pleasanton, CA', zip: '94566' },
  { name: 'Davis, CA', zip: '95616' },
  { name: 'Camarillo, CA', zip: '93010' },
  { name: 'Walnut Creek, CA', zip: '94596' },
  { name: 'Palm Desert, CA', zip: '92211' },
  { name: 'San Luis Obispo, CA', zip: '93401' },
  { name: 'Union City, CA', zip: '94587' },
  { name: 'Temple City, CA', zip: '91780' },
  { name: 'Palo Alto, CA', zip: '94301' },
  { name: 'Yorba Linda, CA', zip: '92886' },
  { name: 'San Clemente, CA', zip: '92672' },
  { name: 'Lodi, CA', zip: '95240' },
  { name: 'Monterey Park, CA', zip: '91754' },
  { name: 'Cupertino, CA', zip: '95014' },
  { name: 'Tustin, CA', zip: '92780' },
  { name: 'Encinitas, CA', zip: '92024' },
  { name: 'Dublin, CA', zip: '94568' },
  { name: 'National City, CA', zip: '91950' },
  { name: 'La Mirada, CA', zip: '90638' },
  { name: 'Chino, CA', zip: '91710' },
  { name: 'Poway, CA', zip: '92064' },
  { name: 'Rancho Santa Margarita, CA', zip: '92688' },
  { name: 'Cypress, CA', zip: '90630' },
  { name: 'La Quinta, CA', zip: '92253' },
  { name: 'San Rafael, CA', zip: '94901' },
  { name: 'Fountain Valley, CA', zip: '92708' },
  { name: 'Hanford, CA', zip: '93230' },
  { name: 'Novato, CA', zip: '94945' },
  { name: 'Cathedral City, CA', zip: '92234' },
  { name: 'San Marcos, CA', zip: '92069' },
  { name: 'Alameda, CA', zip: '94501' },
  { name: 'Rocklin, CA', zip: '95765' },
  { name: 'La Habra, CA', zip: '90631' },
  { name: 'San Ramon, CA', zip: '94583' },
  { name: 'Baldwin Park, CA', zip: '91706' },
  { name: 'Arden-Arcade, CA', zip: '95821' },
  { name: 'Tulare, CA', zip: '93274' },
  { name: 'Mountain View, CA', zip: '94040' },
  { name: 'Pleasanton, CA', zip: '94566' },
  { name: 'Davis, CA', zip: '95616' },
  { name: 'Camarillo, CA', zip: '93010' },
  { name: 'Walnut Creek, CA', zip: '94596' },
  { name: 'Palm Desert, CA', zip: '92211' },
  { name: 'San Luis Obispo, CA', zip: '93401' },
  { name: 'Union City, CA', zip: '94587' },
  { name: 'Temple City, CA', zip: '91780' },
  { name: 'Palo Alto, CA', zip: '94301' },
  { name: 'Yorba Linda, CA', zip: '92886' },
  { name: 'San Clemente, CA', zip: '92672' },
  { name: 'Lodi, CA', zip: '95240' },
  { name: 'Monterey Park, CA', zip: '91754' },
  { name: 'Cupertino, CA', zip: '95014' },
  { name: 'Tustin, CA', zip: '92780' },
  { name: 'Encinitas, CA', zip: '92024' },
  { name: 'Dublin, CA', zip: '94568' },
  { name: 'National City, CA', zip: '91950' },
  { name: 'La Mirada, CA', zip: '90638' },
  { name: 'Chino, CA', zip: '91710' },
  { name: 'Poway, CA', zip: '92064' },
  { name: 'Rancho Santa Margarita, CA', zip: '92688' },
  { name: 'Cypress, CA', zip: '90630' },
  { name: 'La Quinta, CA', zip: '92253' },
  { name: 'San Rafael, CA', zip: '94901' },
  { name: 'Fountain Valley, CA', zip: '92708' },
  { name: 'Hanford, CA', zip: '93230' },
  { name: 'Novato, CA', zip: '94945' },
  { name: 'Cathedral City, CA', zip: '92234' },
  { name: 'San Marcos, CA', zip: '92069' }
]

export function DedicatedQuizPage() {
  const [, setLocation] = useLocation()
  const [step, setStep] = useState(1)
  const [answers, setAnswers] = useState({
    careType: '',
    urgency: '',
    location: '',
    relationship: '',
    age: '',
    distance: '',
    currentLiving: '',
    mobility: '',
    careNeeds: [] as string[],
    memoryBehaviors: [] as string[],
    veteran: '',
    budget: '',
    paymentMethods: [] as string[],
    needs: [],
    contactInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    }
  })

  // Location autocomplete state
  const [locationInput, setLocationInput] = useState('')
  const [showLocationDropdown, setShowLocationDropdown] = useState(false)
  const [filteredLocations, setFilteredLocations] = useState<typeof CALIFORNIA_LOCATIONS>([])

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
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const prevStep = () => {
    setStep(prev => prev - 1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubmit = async () => {
    try {
      console.log('Submitting quiz with data:', {
        name: `${answers.contactInfo.firstName} ${answers.contactInfo.lastName}`.trim(),
        email: answers.contactInfo.email,
        phone: answers.contactInfo.phone,
        location: answers.location,
        careType: answers.careType,
        budget: answers.budget,
        timeline: answers.urgency,
        urgency: answers.urgency,
        source: 'quiz'
      });

      const response = await fetch('/api/simple-quiz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${answers.contactInfo.firstName} ${answers.contactInfo.lastName}`.trim(),
          email: answers.contactInfo.email,
          phone: answers.contactInfo.phone,
          location: answers.location,
          careType: answers.careType,
          budget: answers.budget,
          timeline: answers.urgency,
          urgency: answers.urgency,
          source: 'quiz',
          questions: JSON.stringify(answers, null, 2)
        }),
      })

      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);

      if (response.ok) {
        console.log('Quiz submitted successfully!');
        // Redirect to thank you page
        setLocation('/thank-you')
      } else {
        const errorText = await response.text();
        console.error('Server response error:', errorText);
        throw new Error(`Server responded with ${response.status}: ${errorText}`)
      }
    } catch (error) {
      console.error('Quiz submission error:', error)
      
      // More specific error message for debugging
      if (error.message.includes('404')) {
        if (confirm('The quiz submission service is not available. Would you like to contact us directly instead?')) {
          setLocation('/contact');
        }
      } else if (error.message.includes('500')) {
        alert('There was a server error submitting your quiz. Please try again or contact us directly at (818) 422-5232.')
      } else {
        if (confirm('There was an error submitting your quiz. Would you like to contact us directly instead?')) {
          setLocation('/contact');
        }
      }
    }
  }

  // Location autocomplete handlers
  const handleLocationInput = (value: string) => {
    setLocationInput(value)
    setAnswers(prev => ({ ...prev, location: value }))
    
    if (value.length > 0) {
      const filtered = CALIFORNIA_LOCATIONS.filter(location =>
        location.name.toLowerCase().includes(value.toLowerCase()) ||
        location.zip.includes(value)
      ).slice(0, 10)
      setFilteredLocations(filtered)
      setShowLocationDropdown(true)
    } else {
      setShowLocationDropdown(false)
    }
  }

  const selectLocation = (location: typeof CALIFORNIA_LOCATIONS[0]) => {
    setLocationInput(location.name)
    setAnswers(prev => ({ ...prev, location: location.name }))
    setShowLocationDropdown(false)
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

              {/* I'm Not Sure Option */}
              <button 
                onClick={() => { handleAnswer('careType', 'not-sure'); nextStep() }}
                className="group p-8 border-2 border-gray-200 rounded-2xl hover:border-primary hover:bg-gradient-to-br hover:from-purple-50 hover:to-blue-50 transition-all duration-300 text-left transform hover:scale-105 hover:shadow-lg md:col-span-2"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl text-gray-900">I'm Not Sure</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">Don't worry! Our senior living advisors can help you determine the best type of care based on your loved one's specific needs and situation.</p>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Who is in need of senior care?</h2>
              <p className="text-lg text-gray-600">This helps us understand your relationship to the person needing care</p>
            </div>
            <div className="space-y-4 max-w-2xl mx-auto">
              <button 
                onClick={() => { handleAnswer('relationship', 'spouse'); nextStep() }}
                className="group w-full p-6 border-2 border-gray-200 rounded-2xl hover:border-primary hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300 text-left transform hover:scale-105"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">Spouse</h3>
                    <p className="text-gray-600">My husband or wife</p>
                  </div>
                </div>
              </button>
              <button 
                onClick={() => { handleAnswer('relationship', 'parent'); nextStep() }}
                className="group w-full p-6 border-2 border-gray-200 rounded-2xl hover:border-primary hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300 text-left transform hover:scale-105"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">Parent</h3>
                    <p className="text-gray-600">My mother or father</p>
                  </div>
                </div>
              </button>
              <button 
                onClick={() => { handleAnswer('relationship', 'myself'); nextStep() }}
                className="group w-full p-6 border-2 border-gray-200 rounded-2xl hover:border-primary hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300 text-left transform hover:scale-105"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">Myself</h3>
                    <p className="text-gray-600">I am looking for care for myself</p>
                  </div>
                </div>
              </button>
              <button 
                onClick={() => { handleAnswer('relationship', 'someone-else'); nextStep() }}
                className="group w-full p-6 border-2 border-gray-200 rounded-2xl hover:border-primary hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300 text-left transform hover:scale-105"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">Someone else</h3>
                    <p className="text-gray-600">Another family member or friend</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        )
      
      case 4:
        return (
          <div className="text-center">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What is your loved one's age?</h2>
              <p className="text-lg text-gray-600">Enter age (55 years or older*)</p>
              <p className="text-sm text-gray-500 mt-2">*Due to senior living community requirements, we are only able to assist those 55 years and older</p>
            </div>
            <div className="max-w-md mx-auto">
              <div className="relative">
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
                <input 
                  type="number" 
                  placeholder="Enter age"
                  min="55"
                  max="120"
                  className="w-full p-4 pl-12 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-lg text-gray-900 placeholder-gray-500"
                  value={answers.age}
                  onChange={(e) => handleAnswer('age', e.target.value)}
                />
              </div>
              <button 
                onClick={nextStep}
                disabled={!answers.age || parseInt(answers.age) < 55}
                className="w-full mt-6 bg-gradient-to-r from-primary to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                Continue
              </button>
            </div>
          </div>
        )
      
      case 5:
        return (
          <div className="text-center">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What is the maximum distance you are willing to travel from preferred location?</h2>
              <p className="text-lg text-gray-600">This helps us find communities within your preferred range</p>
            </div>
            <div className="space-y-4 max-w-2xl mx-auto">
              <button 
                onClick={() => { handleAnswer('distance', 'under-5-miles'); nextStep() }}
                className="group w-full p-6 border-2 border-gray-200 rounded-2xl hover:border-primary hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300 text-left transform hover:scale-105"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">Under 5 miles</h3>
                    <p className="text-gray-600">Very close to preferred location</p>
                  </div>
                </div>
              </button>
              <button 
                onClick={() => { handleAnswer('distance', '10-miles'); nextStep() }}
                className="group w-full p-6 border-2 border-gray-200 rounded-2xl hover:border-primary hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300 text-left transform hover:scale-105"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">10 miles</h3>
                    <p className="text-gray-600">Close to preferred location</p>
                  </div>
                </div>
              </button>
              <button 
                onClick={() => { handleAnswer('distance', '15-miles'); nextStep() }}
                className="group w-full p-6 border-2 border-gray-200 rounded-2xl hover:border-primary hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300 text-left transform hover:scale-105"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">15 miles</h3>
                    <p className="text-gray-600">Moderate distance from preferred location</p>
                  </div>
                </div>
              </button>
              <button 
                onClick={() => { handleAnswer('distance', '20-miles'); nextStep() }}
                className="group w-full p-6 border-2 border-gray-200 rounded-2xl hover:border-primary hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300 text-left transform hover:scale-105"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">20 miles</h3>
                    <p className="text-gray-600">Further from preferred location</p>
                  </div>
                </div>
              </button>
              <button 
                onClick={() => { handleAnswer('distance', '25-miles'); nextStep() }}
                className="group w-full p-6 border-2 border-gray-200 rounded-2xl hover:border-primary hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300 text-left transform hover:scale-105"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">25 miles</h3>
                    <p className="text-gray-600">Much further from preferred location</p>
                  </div>
                </div>
              </button>
              <button 
                onClick={() => { handleAnswer('distance', '30-miles'); nextStep() }}
                className="group w-full p-6 border-2 border-gray-200 rounded-2xl hover:border-primary hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300 text-left transform hover:scale-105"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">30 miles</h3>
                    <p className="text-gray-600">Very far from preferred location</p>
                  </div>
                </div>
              </button>
              <button 
                onClick={() => { handleAnswer('distance', '50-miles-and-over'); nextStep() }}
                className="group w-full p-6 border-2 border-gray-200 rounded-2xl hover:border-primary hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300 text-left transform hover:scale-105"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">50 miles and over</h3>
                    <p className="text-gray-600">Maximum distance, willing to travel far</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        )
      
      case 6:
        return (
          <div className="text-center">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Where is your loved one living now?</h2>
              <p className="text-lg text-gray-600">This helps us understand their current living situation</p>
              <p className="text-sm text-gray-500 mt-2">Why we ask: There is a natural desire to stay independent for as long as possible. Environments that provide easy access to assistance if needed can provide a balance of independence and safety.</p>
            </div>
            <div className="space-y-4 max-w-2xl mx-auto">
              <button 
                onClick={() => { handleAnswer('currentLiving', 'home-alone'); nextStep() }}
                className="group w-full p-6 border-2 border-gray-200 rounded-2xl hover:border-primary hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300 text-left transform hover:scale-105"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">Home (lives alone)</h3>
                    <p className="text-gray-600">Currently living independently at home</p>
                  </div>
                </div>
              </button>
              <button 
                onClick={() => { handleAnswer('currentLiving', 'home-with-others'); nextStep() }}
                className="group w-full p-6 border-2 border-gray-200 rounded-2xl hover:border-primary hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300 text-left transform hover:scale-105"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">Home (lives with someone)</h3>
                    <p className="text-gray-600">Living at home with family or others</p>
                  </div>
                </div>
              </button>
              <button 
                onClick={() => { handleAnswer('currentLiving', 'assisted-living'); nextStep() }}
                className="group w-full p-6 border-2 border-gray-200 rounded-2xl hover:border-primary hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300 text-left transform hover:scale-105"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">Assisted Living</h3>
                    <p className="text-gray-600">Currently in an assisted living community</p>
                  </div>
                </div>
              </button>
              <button 
                onClick={() => { handleAnswer('currentLiving', 'hospital'); nextStep() }}
                className="group w-full p-6 border-2 border-gray-200 rounded-2xl hover:border-primary hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300 text-left transform hover:scale-105"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">Hospital</h3>
                    <p className="text-gray-600">Currently hospitalized</p>
                  </div>
                </div>
              </button>
              <button 
                onClick={() => { handleAnswer('currentLiving', 'nursing-home'); nextStep() }}
                className="group w-full p-6 border-2 border-gray-200 rounded-2xl hover:border-primary hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300 text-left transform hover:scale-105"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">Nursing Home / Rehab Facility</h3>
                    <p className="text-gray-600">Currently in a nursing home or rehabilitation facility</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        )
      
      case 7:
        return (
          <div className="text-center">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How is your loved one's mobility?</h2>
              <p className="text-lg text-gray-600">This helps us understand their physical capabilities</p>
            </div>
            <div className="space-y-4 max-w-2xl mx-auto">
              <button 
                onClick={() => { handleAnswer('mobility', 'independent'); nextStep() }}
                className="group w-full p-6 border-2 border-gray-200 rounded-2xl hover:border-primary hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300 text-left transform hover:scale-105"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">Independent</h3>
                    <p className="text-gray-600">Can walk and move around without assistance</p>
                  </div>
                </div>
              </button>
              <button 
                onClick={() => { handleAnswer('mobility', 'walker'); nextStep() }}
                className="group w-full p-6 border-2 border-gray-200 rounded-2xl hover:border-primary hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300 text-left transform hover:scale-105"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">Walker</h3>
                    <p className="text-gray-600">Uses a walker for mobility assistance</p>
                  </div>
                </div>
              </button>
              <button 
                onClick={() => { handleAnswer('mobility', 'cane'); nextStep() }}
                className="group w-full p-6 border-2 border-gray-200 rounded-2xl hover:border-primary hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300 text-left transform hover:scale-105"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">Cane</h3>
                    <p className="text-gray-600">Uses a cane for walking assistance</p>
                  </div>
                </div>
              </button>
              <button 
                onClick={() => { handleAnswer('mobility', 'wheelchair'); nextStep() }}
                className="group w-full p-6 border-2 border-gray-200 rounded-2xl hover:border-primary hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300 text-left transform hover:scale-105"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">Wheelchair</h3>
                    <p className="text-gray-600">Uses a wheelchair for mobility</p>
                  </div>
                </div>
              </button>
              <button 
                onClick={() => { handleAnswer('mobility', 'immobile'); nextStep() }}
                className="group w-full p-6 border-2 border-gray-200 rounded-2xl hover:border-primary hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300 text-left transform hover:scale-105"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">Immobile</h3>
                    <p className="text-gray-600">Cannot move independently</p>
                  </div>
                </div>
              </button>
              <button 
                onClick={() => { handleAnswer('mobility', 'bedridden'); nextStep() }}
                className="group w-full p-6 border-2 border-gray-200 rounded-2xl hover:border-primary hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300 text-left transform hover:scale-105"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">Bedridden</h3>
                    <p className="text-gray-600">Confined to bed</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        )
      
      case 8:
        return (
          <div className="text-center">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Do they need assistance with any of the following?</h2>
              <p className="text-lg text-gray-600">Select all that apply</p>
              <p className="text-sm text-gray-500 mt-2">Care and lifestyle needs are important inputs into matching you to the right community.</p>
            </div>
            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {[
                  { id: 'medication', label: 'Medication', icon: '💊' },
                  { id: 'toileting', label: 'Toileting', icon: '🚽' },
                  { id: 'bathing', label: 'Bathing', icon: '🛁' },
                  { id: 'diabetic-care', label: 'Diabetic care', icon: '🩸' },
                  { id: 'special-diet', label: 'Special diet', icon: '🍽️' },
                  { id: 'housekeeping', label: 'Housekeeping', icon: '🧹' },
                  { id: 'social-activities', label: 'Social activities', icon: '👥' },
                  { id: 'none', label: 'None', icon: '✅' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      if (item.id === 'none') {
                        handleAnswer('careNeeds', [])
                      } else {
                        const currentNeeds = answers.careNeeds || []
                        const updatedNeeds = currentNeeds.includes(item.id)
                          ? currentNeeds.filter(need => need !== item.id)
                          : [...currentNeeds, item.id]
                        handleAnswer('careNeeds', updatedNeeds)
                      }
                    }}
                    className={`p-4 border-2 rounded-xl text-left transition-all duration-300 ${
                      (answers.careNeeds || []).includes(item.id)
                        ? 'border-primary bg-gradient-to-r from-purple-50 to-blue-50'
                        : 'border-gray-200 hover:border-primary hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50'
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{item.icon}</span>
                      <span className="font-medium text-gray-900">{item.label}</span>
                    </div>
                  </button>
                ))}
              </div>
              <button 
                onClick={nextStep}
                className="w-full bg-gradient-to-r from-primary to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300 transform hover:scale-105"
              >
                Continue
              </button>
            </div>
          </div>
        )
      
      case 9:
        return (
          <div className="text-center">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Have they experienced any of these behaviors related to memory loss?</h2>
              <p className="text-lg text-gray-600">Select all that apply</p>
              <p className="text-sm text-gray-500 mt-2">Understanding the current behaviors your loved one is exhibiting will help us identify the right type of community.</p>
            </div>
            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {[
                  { id: 'wandering', label: 'Wandering', icon: '🚶' },
                  { id: 'aggressiveness', label: 'Aggressiveness', icon: '😠' },
                  { id: 'hallucinations', label: 'Hallucinations', icon: '👁️' },
                  { id: 'withdrawal', label: 'Withdrawal', icon: '😔' },
                  { id: 'sundowning', label: 'Sundowning', icon: '🌅' },
                  { id: 'judgement-loss', label: 'Judgement loss', icon: '🤔' },
                  { id: 'inappropriateness', label: 'Inappropriateness', icon: '😳' },
                  { id: '24-hour-care', label: '24-hour care', icon: '⏰' },
                  { id: 'exit-seeking', label: 'Exit-seeking', icon: '🚪' },
                  { id: 'none', label: 'None', icon: '✅' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      if (item.id === 'none') {
                        handleAnswer('memoryBehaviors', [])
                      } else {
                        const currentBehaviors = answers.memoryBehaviors || []
                        const updatedBehaviors = currentBehaviors.includes(item.id)
                          ? currentBehaviors.filter(behavior => behavior !== item.id)
                          : [...currentBehaviors, item.id]
                        handleAnswer('memoryBehaviors', updatedBehaviors)
                      }
                    }}
                    className={`p-4 border-2 rounded-xl text-left transition-all duration-300 ${
                      (answers.memoryBehaviors || []).includes(item.id)
                        ? 'border-primary bg-gradient-to-r from-purple-50 to-blue-50'
                        : 'border-gray-200 hover:border-primary hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50'
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{item.icon}</span>
                      <span className="font-medium text-gray-900">{item.label}</span>
                    </div>
                  </button>
                ))}
              </div>
              <button 
                onClick={nextStep}
                className="w-full bg-gradient-to-r from-primary to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300 transform hover:scale-105"
              >
                Continue
              </button>
            </div>
          </div>
        )
      
      case 10:
        return (
          <div className="text-center">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Is your loved one a Veteran or the spouse of a wartime Veteran?</h2>
              <p className="text-lg text-gray-600">The Veterans Administration has an Aid and Attendance benefit for wartime Veterans and their spouses (including widows/widowers), who are US residents and financially qualify. The benefit may contribute to a portion of the cost of care services.</p>
            </div>
            <div className="space-y-4 max-w-2xl mx-auto">
              <button 
                onClick={() => { handleAnswer('veteran', 'yes'); nextStep() }}
                className="group w-full p-6 border-2 border-gray-200 rounded-2xl hover:border-primary hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300 text-left transform hover:scale-105"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">Yes</h3>
                    <p className="text-gray-600">My loved one is a Veteran or spouse of a wartime Veteran</p>
                  </div>
                </div>
              </button>
              <button 
                onClick={() => { handleAnswer('veteran', 'no'); nextStep() }}
                className="group w-full p-6 border-2 border-gray-200 rounded-2xl hover:border-primary hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300 text-left transform hover:scale-105"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">No</h3>
                    <p className="text-gray-600">My loved one is not a Veteran or spouse of a wartime Veteran</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        )

      case 11:
        return (
          <div className="text-center">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What is the total cost of care you believe your loved one/your family can afford for senior living?</h2>
              <p className="text-lg text-gray-600">Senior living costs vary depending on location and services provided. Total costs of care typically include the cost of accommodations and food plus the cost of services such as personal care, social and recreational, health and wellness, transportation, and acute care needs. Our advisor team can help with any questions you may have on maximizing your budget.</p>
            </div>
            <div className="space-y-4 max-w-2xl mx-auto">
              <button 
                onClick={() => { handleAnswer('budget', 'Less than $2,000'); nextStep() }}
                className="group w-full p-6 border-2 border-gray-200 rounded-2xl hover:border-primary hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300 text-left transform hover:scale-105"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">Less than $2,000</h3>
                    <p className="text-gray-600">Monthly budget under $2,000</p>
                  </div>
                </div>
              </button>
              <button 
                onClick={() => { handleAnswer('budget', '$2,000 - $2,499'); nextStep() }}
                className="group w-full p-6 border-2 border-gray-200 rounded-2xl hover:border-primary hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300 text-left transform hover:scale-105"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">$2,000 - $2,499</h3>
                    <p className="text-gray-600">Monthly budget $2,000 to $2,499</p>
                  </div>
                </div>
              </button>
              <button 
                onClick={() => { handleAnswer('budget', '$2,500 - $2,999'); nextStep() }}
                className="group w-full p-6 border-2 border-gray-200 rounded-2xl hover:border-primary hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300 text-left transform hover:scale-105"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">$2,500 - $2,999</h3>
                    <p className="text-gray-600">Monthly budget $2,500 to $2,999</p>
                  </div>
                </div>
              </button>
              <button 
                onClick={() => { handleAnswer('budget', '$3,000 - $3,999'); nextStep() }}
                className="group w-full p-6 border-2 border-gray-200 rounded-2xl hover:border-primary hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300 text-left transform hover:scale-105"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">$3,000 - $3,999</h3>
                    <p className="text-gray-600">Monthly budget $3,000 to $3,999</p>
                  </div>
                </div>
              </button>
              <button 
                onClick={() => { handleAnswer('budget', '$4,000 - $4,999'); nextStep() }}
                className="group w-full p-6 border-2 border-gray-200 rounded-2xl hover:border-primary hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300 text-left transform hover:scale-105"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">$4,000 - $4,999</h3>
                    <p className="text-gray-600">Monthly budget $4,000 to $4,999</p>
                  </div>
                </div>
              </button>
              <button 
                onClick={() => { handleAnswer('budget', '$5,000 - $5,999'); nextStep() }}
                className="group w-full p-6 border-2 border-gray-200 rounded-2xl hover:border-primary hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300 text-left transform hover:scale-105"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">$5,000 - $5,999</h3>
                    <p className="text-gray-600">Monthly budget $5,000 to $5,999</p>
                  </div>
                </div>
              </button>
              <button 
                onClick={() => { handleAnswer('budget', '$6,000 - $6,999'); nextStep() }}
                className="group w-full p-6 border-2 border-gray-200 rounded-2xl hover:border-primary hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300 text-left transform hover:scale-105"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">$6,000 - $6,999</h3>
                    <p className="text-gray-600">Monthly budget $6,000 to $6,999</p>
                  </div>
                </div>
              </button>
              <button 
                onClick={() => { handleAnswer('budget', 'Over $7,000'); nextStep() }}
                className="group w-full p-6 border-2 border-gray-200 rounded-2xl hover:border-primary hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300 text-left transform hover:scale-105"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">Over $7,000</h3>
                    <p className="text-gray-600">Monthly budget over $7,000</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        )

      case 12:
        return (
          <div className="text-center">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How do you or your loved one plan to pay for care?</h2>
              <p className="text-lg text-gray-600">Select all that apply. Our expert Senior Living Advisors can discuss pricing for various levels of service, as well as the means of paying for care. They also have access to communities' price flexibility and special promotions.</p>
            </div>
            <div className="space-y-4 max-w-2xl mx-auto">
              <button 
                onClick={() => {
                  const current = answers.paymentMethods;
                  const updated = current.includes('retirement') 
                    ? current.filter(m => m !== 'retirement')
                    : [...current, 'retirement'];
                  handleAnswer('paymentMethods', updated);
                }}
                className={`group w-full p-6 border-2 rounded-2xl transition-all duration-300 text-left transform hover:scale-105 ${
                  answers.paymentMethods.includes('retirement') 
                    ? 'border-primary bg-gradient-to-r from-purple-50 to-blue-50' 
                    : 'border-gray-200 hover:border-primary hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50'
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                    answers.paymentMethods.includes('retirement') ? 'bg-green-100' : 'bg-gray-100'
                  }`}>
                    <svg className={`w-6 h-6 ${answers.paymentMethods.includes('retirement') ? 'text-green-600' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">Retirement</h3>
                    <p className="text-gray-600">Retirement savings or pension</p>
                  </div>
                  {answers.paymentMethods.includes('retirement') && (
                    <div className="ml-auto">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </button>
              
              <button 
                onClick={() => {
                  const current = answers.paymentMethods;
                  const updated = current.includes('family-support') 
                    ? current.filter(m => m !== 'family-support')
                    : [...current, 'family-support'];
                  handleAnswer('paymentMethods', updated);
                }}
                className={`group w-full p-6 border-2 rounded-2xl transition-all duration-300 text-left transform hover:scale-105 ${
                  answers.paymentMethods.includes('family-support') 
                    ? 'border-primary bg-gradient-to-r from-purple-50 to-blue-50' 
                    : 'border-gray-200 hover:border-primary hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50'
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                    answers.paymentMethods.includes('family-support') ? 'bg-blue-100' : 'bg-gray-100'
                  }`}>
                    <svg className={`w-6 h-6 ${answers.paymentMethods.includes('family-support') ? 'text-blue-600' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">Family support</h3>
                    <p className="text-gray-600">Financial support from family members</p>
                  </div>
                  {answers.paymentMethods.includes('family-support') && (
                    <div className="ml-auto">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </button>
              
              <button 
                onClick={() => {
                  const current = answers.paymentMethods;
                  const updated = current.includes('home-to-sell') 
                    ? current.filter(m => m !== 'home-to-sell')
                    : [...current, 'home-to-sell'];
                  handleAnswer('paymentMethods', updated);
                }}
                className={`group w-full p-6 border-2 rounded-2xl transition-all duration-300 text-left transform hover:scale-105 ${
                  answers.paymentMethods.includes('home-to-sell') 
                    ? 'border-primary bg-gradient-to-r from-purple-50 to-blue-50' 
                    : 'border-gray-200 hover:border-primary hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50'
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                    answers.paymentMethods.includes('home-to-sell') ? 'bg-purple-100' : 'bg-gray-100'
                  }`}>
                    <svg className={`w-6 h-6 ${answers.paymentMethods.includes('home-to-sell') ? 'text-purple-600' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">Home to sell</h3>
                    <p className="text-gray-600">Selling current home or property</p>
                  </div>
                  {answers.paymentMethods.includes('home-to-sell') && (
                    <div className="ml-auto">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </button>
              
              <button 
                onClick={() => {
                  const current = answers.paymentMethods;
                  const updated = current.includes('insurance') 
                    ? current.filter(m => m !== 'insurance')
                    : [...current, 'insurance'];
                  handleAnswer('paymentMethods', updated);
                }}
                className={`group w-full p-6 border-2 rounded-2xl transition-all duration-300 text-left transform hover:scale-105 ${
                  answers.paymentMethods.includes('insurance') 
                    ? 'border-primary bg-gradient-to-r from-purple-50 to-blue-50' 
                    : 'border-gray-200 hover:border-primary hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50'
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                    answers.paymentMethods.includes('insurance') ? 'bg-yellow-100' : 'bg-gray-100'
                  }`}>
                    <svg className={`w-6 h-6 ${answers.paymentMethods.includes('insurance') ? 'text-yellow-600' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">Insurance</h3>
                    <p className="text-gray-600">Long-term care insurance or other insurance</p>
                  </div>
                  {answers.paymentMethods.includes('insurance') && (
                    <div className="ml-auto">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </button>
              
              <button 
                onClick={() => {
                  const current = answers.paymentMethods;
                  const updated = current.includes('va-benefits') 
                    ? current.filter(m => m !== 'va-benefits')
                    : [...current, 'va-benefits'];
                  handleAnswer('paymentMethods', updated);
                }}
                className={`group w-full p-6 border-2 rounded-2xl transition-all duration-300 text-left transform hover:scale-105 ${
                  answers.paymentMethods.includes('va-benefits') 
                    ? 'border-primary bg-gradient-to-r from-purple-50 to-blue-50' 
                    : 'border-gray-200 hover:border-primary hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50'
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                    answers.paymentMethods.includes('va-benefits') ? 'bg-red-100' : 'bg-gray-100'
                  }`}>
                    <svg className={`w-6 h-6 ${answers.paymentMethods.includes('va-benefits') ? 'text-red-600' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">VA benefits</h3>
                    <p className="text-gray-600">Veterans Administration benefits</p>
                  </div>
                  {answers.paymentMethods.includes('va-benefits') && (
                    <div className="ml-auto">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </button>
              
              <button 
                onClick={() => {
                  const current = answers.paymentMethods;
                  const updated = current.includes('other') 
                    ? current.filter(m => m !== 'other')
                    : [...current, 'other'];
                  handleAnswer('paymentMethods', updated);
                }}
                className={`group w-full p-6 border-2 rounded-2xl transition-all duration-300 text-left transform hover:scale-105 ${
                  answers.paymentMethods.includes('other') 
                    ? 'border-primary bg-gradient-to-r from-purple-50 to-blue-50' 
                    : 'border-gray-200 hover:border-primary hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50'
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                    answers.paymentMethods.includes('other') ? 'bg-indigo-100' : 'bg-gray-100'
                  }`}>
                    <svg className={`w-6 h-6 ${answers.paymentMethods.includes('other') ? 'text-indigo-600' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">Other</h3>
                    <p className="text-gray-600">Other payment methods or sources</p>
                  </div>
                  {answers.paymentMethods.includes('other') && (
                    <div className="ml-auto">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </button>
            </div>
            
            <div className="mt-8">
              <button 
                onClick={nextStep}
                className="w-full max-w-md bg-gradient-to-r from-primary to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300 transform hover:scale-105"
              >
                Continue
              </button>
            </div>
          </div>
        )

      case 13:
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
                  value={locationInput}
                  onChange={(e) => handleLocationInput(e.target.value)}
                  onFocus={() => setShowLocationDropdown(true)}
                  onBlur={() => setTimeout(() => setShowLocationDropdown(false), 200)}
                />
                {showLocationDropdown && filteredLocations.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl z-50 max-h-64 overflow-y-auto">
                    {filteredLocations.map((location, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => selectLocation(location)}
                        className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                      >
                        <div className="font-medium text-gray-900">{location.name}</div>
                        <div className="text-sm text-gray-500">ZIP: {location.zip}</div>
                      </button>
                    ))}
                  </div>
                )}
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
      
      case 14:
        return (
          <div className="text-center">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Your Free Recommendations</h2>
              <p className="text-lg text-gray-600">We'll use your answers to provide personalized senior living recommendations</p>
            </div>
            <div className="max-w-2xl mx-auto">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Your Assessment Summary</h3>
                <div className="space-y-4 text-left">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Care Type:</span>
                    <span className="text-gray-900">{answers.careType === 'not-sure' ? 'Need guidance' : answers.careType}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Timeline:</span>
                    <span className="text-gray-900">{answers.urgency}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Relationship:</span>
                    <span className="text-gray-900">{answers.relationship}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Age:</span>
                    <span className="text-gray-900">{answers.age} years old</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Distance:</span>
                    <span className="text-gray-900">{answers.distance}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Current Living:</span>
                    <span className="text-gray-900">{answers.currentLiving}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Mobility:</span>
                    <span className="text-gray-900">{answers.mobility}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Care Needs:</span>
                    <span className="text-gray-900">{answers.careNeeds.length > 0 ? answers.careNeeds.join(', ') : 'None'}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Memory Behaviors:</span>
                    <span className="text-gray-900">{answers.memoryBehaviors.length > 0 ? answers.memoryBehaviors.join(', ') : 'None'}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Veteran Status:</span>
                    <span className="text-gray-900">{answers.veteran === 'yes' ? 'Yes' : 'No'}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Budget:</span>
                    <span className="text-gray-900">{answers.budget}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Payment Methods:</span>
                    <span className="text-gray-900">{answers.paymentMethods.length > 0 ? answers.paymentMethods.join(', ') : 'None'}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Location:</span>
                    <span className="text-gray-900">{answers.location}</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">We need three final pieces of information from you</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Your first name</label>
                      <input 
                        type="text" 
                        placeholder="Your First Name (e.g. John)"
                        className="w-full p-4 pl-12 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-lg text-gray-900 placeholder-gray-500"
                        value={answers.contactInfo.firstName}
                        onChange={(e) => handleAnswer('contactInfo', {...answers.contactInfo, firstName: e.target.value})}
                      />
                      {!answers.contactInfo.firstName.trim() && (
                        <p className="text-red-500 text-sm mt-1">Please enter a valid first name.</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Your last name</label>
                      <input 
                        type="text" 
                        placeholder="Your Last Name (e.g. Smith)"
                        className="w-full p-4 pl-12 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-lg text-gray-900 placeholder-gray-500"
                        value={answers.contactInfo.lastName}
                        onChange={(e) => handleAnswer('contactInfo', {...answers.contactInfo, lastName: e.target.value})}
                      />
                      {!answers.contactInfo.lastName.trim() && (
                        <p className="text-red-500 text-sm mt-1">Please enter a valid last name.</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Your email</label>
                      <input 
                        type="email" 
                        placeholder="Your Email (e.g. john.smith@gmail.com)"
                        className="w-full p-4 pl-12 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-lg text-gray-900 placeholder-gray-500"
                        value={answers.contactInfo.email}
                        onChange={(e) => handleAnswer('contactInfo', {...answers.contactInfo, email: e.target.value})}
                      />
                      {!answers.contactInfo.email.trim() && (
                        <p className="text-red-500 text-sm mt-1">Please enter a valid email address.</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Your phone number</label>
                      <input 
                        type="tel" 
                        placeholder="Your Phone Number (917-251-3387)"
                        className="w-full p-4 pl-12 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-lg text-gray-900 placeholder-gray-500"
                        value={answers.contactInfo.phone}
                        onChange={(e) => handleAnswer('contactInfo', {...answers.contactInfo, phone: e.target.value})}
                      />
                      {!answers.contactInfo.phone.trim() && (
                        <p className="text-red-500 text-sm mt-1">Please enter a valid phone number.</p>
                      )}
                    </div>
                  </div>
                  
                  <button 
                    onClick={handleSubmit}
                    disabled={!answers.contactInfo.firstName.trim() || !answers.contactInfo.lastName.trim() || !answers.contactInfo.email.trim() || !answers.contactInfo.phone.trim()}
                    className="w-full mt-6 bg-gradient-to-r from-primary to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    Get my results
                  </button>
                  
                  <p className="text-xs text-gray-500 mt-4 text-center">
                    By sharing your contact information, you agree to our Terms of Use and Privacy Policy. You also consent to receive texts and calls from us and our community customers; however, your consent is not a condition to using our service, but we cannot refer you without your contact information. Msg and Data Rates may apply. Msg frequency varies. Text HELP for Help. Text STOP for Stop.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header with logo */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/" className="inline-block">
            <img 
              src="/logo.png" 
              alt="Senior Living Placement Logo" 
              className="h-10 w-auto"
            />
          </Link>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-2">
                          <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                  <span>Step {step} of 14</span>
                  <span>{Math.round((step / 14) * 100)}% Complete</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-primary to-purple-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(step / 14) * 100}%` }}
                  ></div>
                </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        {renderStep()}
        
        {/* Navigation */}
        {step > 1 && (
          <div className="mt-8 text-center">
            <button 
              onClick={prevStep}
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Back
            </button>
          </div>
        )}
      </main>
    </div>
  )
} 