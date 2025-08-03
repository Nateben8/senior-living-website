import React from 'react'
import { Link } from 'wouter'

export function CaregiverTipsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Tips & <span className="text-primary bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Support</span> for Caregivers
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Practical advice, emotional support, and essential resources to help you navigate the challenges of caregiving while maintaining your own well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Supporting You Through Your Caregiving Journey</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Being a caregiver is one of the most rewarding yet challenging roles you can take on. Whether you're caring for a parent, spouse, or other loved one, you're not alone in this journey. Millions of Americans are family caregivers, and there are resources and strategies to help you succeed.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This comprehensive guide provides practical tips, emotional support strategies, and essential resources to help you provide the best care while maintaining your own health and well-being.
              </p>
            </div>

            {/* Essential Caregiver Tips */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Essential Caregiver Tips</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-blue-900 mb-3">1. Prioritize Self-Care</h4>
                  <p className="text-blue-800 mb-4">
                    Your health is just as important as your loved one's. You can't provide good care if you're exhausted or sick.
                  </p>
                  <ul className="text-blue-700 space-y-2 text-sm">
                    <li>• Schedule regular breaks and time off</li>
                    <li>• Maintain your own medical appointments</li>
                    <li>• Get adequate sleep and exercise</li>
                    <li>• Eat nutritious meals regularly</li>
                    <li>• Practice stress-reduction techniques</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-green-900 mb-3">2. Build a Support Network</h4>
                  <p className="text-green-800 mb-4">
                    Don't try to do everything alone. Reach out to family, friends, and community resources for help.
                  </p>
                  <ul className="text-green-700 space-y-2 text-sm">
                    <li>• Ask family members for specific help</li>
                    <li>• Join caregiver support groups</li>
                    <li>• Connect with other caregivers online</li>
                    <li>• Utilize community services</li>
                    <li>• Consider professional respite care</li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-purple-900 mb-3">3. Stay Organized</h4>
                  <p className="text-purple-800 mb-4">
                    Good organization reduces stress and ensures nothing important falls through the cracks.
                  </p>
                  <ul className="text-purple-700 space-y-2 text-sm">
                    <li>• Keep a detailed care calendar</li>
                    <li>• Maintain organized medical records</li>
                    <li>• Use medication management systems</li>
                    <li>• Create emergency contact lists</li>
                    <li>• Document important conversations</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-yellow-900 mb-3">4. Communicate Effectively</h4>
                  <p className="text-yellow-800 mb-4">
                    Clear communication with healthcare providers, family members, and your loved one is crucial.
                  </p>
                  <ul className="text-yellow-700 space-y-2 text-sm">
                    <li>• Keep a care journal</li>
                    <li>• Ask questions during medical appointments</li>
                    <li>• Share updates with family members</li>
                    <li>• Be honest about your needs</li>
                    <li>• Practice active listening</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Managing Caregiver Stress */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Managing Caregiver Stress</h3>
              
              <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-xl mb-6">
                <h4 className="text-lg font-semibold text-red-800 mb-3">Recognizing Caregiver Burnout</h4>
                <p className="text-red-700 mb-4">
                  Caregiver burnout is a real and serious condition that can affect your health and the quality of care you provide. Watch for these warning signs:
                </p>
                <ul className="text-red-700 space-y-2">
                  <li>• Feeling constantly exhausted, even after sleep</li>
                  <li>• Becoming easily irritated or angry</li>
                  <li>• Withdrawing from friends and activities</li>
                  <li>• Feeling hopeless or overwhelmed</li>
                  <li>• Changes in appetite or sleep patterns</li>
                  <li>• Getting sick more often than usual</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Stress Management Strategies</h4>
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Mindfulness and Meditation</h5>
                      <p className="text-gray-700 text-sm">
                        Practice daily meditation or mindfulness exercises to reduce stress and improve mental clarity.
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Physical Exercise</h5>
                      <p className="text-gray-700 text-sm">
                        Regular exercise releases endorphins and helps manage stress. Even short walks can make a difference.
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Hobbies and Interests</h5>
                      <p className="text-gray-700 text-sm">
                        Maintain activities you enjoy to provide balance and prevent caregiver identity from consuming your life.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Emotional Support</h4>
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Support Groups</h5>
                      <p className="text-gray-700 text-sm">
                        Connect with other caregivers who understand your challenges and can offer practical advice.
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Professional Counseling</h5>
                      <p className="text-gray-700 text-sm">
                        Consider therapy to process difficult emotions and develop healthy coping strategies.
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Respite Care</h5>
                      <p className="text-gray-700 text-sm">
                        Take regular breaks using professional respite services to recharge and prevent burnout.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Practical Caregiving Skills */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Practical Caregiving Skills</h3>
              
              <div className="space-y-8">
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Daily Care Routines</h4>
                  <p className="text-gray-700 mb-4">
                    Establishing consistent routines helps both you and your loved one feel more secure and organized.
                  </p>
                  <ul className="text-gray-700 space-y-2 ml-6">
                    <li>• Create a daily schedule that works for both of you</li>
                    <li>• Build in flexibility for unexpected situations</li>
                    <li>• Include time for activities your loved one enjoys</li>
                    <li>• Plan meals and medication times in advance</li>
                    <li>• Schedule regular medical appointments</li>
                  </ul>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Safety and Emergency Preparedness</h4>
                  <p className="text-gray-700 mb-4">
                    Being prepared for emergencies gives you peace of mind and ensures your loved one's safety.
                  </p>
                  <ul className="text-gray-700 space-y-2 ml-6">
                    <li>• Keep emergency contact numbers easily accessible</li>
                    <li>• Create a medical information file</li>
                    <li>• Install safety equipment as needed</li>
                    <li>• Learn basic first aid and CPR</li>
                    <li>• Have a backup plan for when you're unavailable</li>
                  </ul>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Communication with Healthcare Providers</h4>
                  <p className="text-gray-700 mb-4">
                    Effective communication with medical professionals ensures your loved one receives the best care possible.
                  </p>
                  <ul className="text-gray-700 space-y-2 ml-6">
                    <li>• Prepare questions before appointments</li>
                    <li>• Take notes during medical visits</li>
                    <li>• Keep a symptom diary</li>
                    <li>• Ask for clarification when needed</li>
                    <li>• Advocate for your loved one's needs</li>
                  </ul>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Managing Medications</h4>
                  <p className="text-gray-700 mb-4">
                    Proper medication management is crucial for your loved one's health and safety.
                  </p>
                  <ul className="text-gray-700 space-y-2 ml-6">
                    <li>• Use a pill organizer or medication management system</li>
                    <li>• Set up reminders for medication times</li>
                    <li>• Keep an updated medication list</li>
                    <li>• Understand potential side effects</li>
                    <li>• Coordinate with pharmacists and doctors</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Financial and Legal Considerations */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Financial and Legal Considerations</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Financial Planning</h4>
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Budgeting for Care</h5>
                      <p className="text-gray-700 text-sm">
                        Create a realistic budget that accounts for medical expenses, home modifications, and potential care services.
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Insurance Review</h5>
                      <p className="text-gray-700 text-sm">
                        Review Medicare, Medicaid, and private insurance coverage to understand what's covered and what isn't.
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Government Benefits</h5>
                      <p className="text-gray-700 text-sm">
                        Research available government programs and benefits that can help offset care costs.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Legal Documents</h4>
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Power of Attorney</h5>
                      <p className="text-gray-700 text-sm">
                        Ensure proper legal documents are in place for financial and healthcare decision-making.
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Advance Directives</h5>
                      <p className="text-gray-700 text-sm">
                        Have living wills and healthcare directives that clearly outline medical treatment preferences.
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Estate Planning</h5>
                      <p className="text-gray-700 text-sm">
                        Work with legal professionals to ensure proper estate planning and asset protection.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Resources and Support Services */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Resources and Support Services</h3>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-xl mb-6">
                <h4 className="text-lg font-semibold text-blue-800 mb-3">National and Local Resources</h4>
                <ul className="text-blue-700 space-y-2">
                  <li>• <strong>Family Caregiver Alliance:</strong> Comprehensive resources and support for family caregivers</li>
                  <li>• <strong>AARP Caregiving:</strong> Information, tools, and support for caregivers</li>
                  <li>• <strong>Alzheimer's Association:</strong> Specialized support for dementia caregivers</li>
                  <li>• <strong>Area Agencies on Aging:</strong> Local services and support programs</li>
                  <li>• <strong>Caregiver Support Groups:</strong> Both in-person and online communities</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                  </div>
                  <h5 className="font-semibold text-gray-900 mb-2">Educational Resources</h5>
                  <p className="text-gray-700 text-sm">
                    Access training programs, workshops, and educational materials to improve your caregiving skills.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <h5 className="font-semibold text-gray-900 mb-2">Support Groups</h5>
                  <p className="text-gray-700 text-sm">
                    Connect with other caregivers for emotional support, practical advice, and shared experiences.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                  </div>
                  <h5 className="font-semibold text-gray-900 mb-2">Respite Services</h5>
                  <p className="text-gray-700 text-sm">
                    Access temporary care services to give yourself much-needed breaks and prevent burnout.
                  </p>
                </div>
              </div>
            </div>

            {/* Technology and Tools */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technology and Tools for Caregivers</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Care Management Apps</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Medication reminder apps</li>
                    <li>• Care coordination platforms</li>
                    <li>• Health tracking applications</li>
                    <li>• Emergency alert systems</li>
                    <li>• Family communication tools</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Safety and Monitoring</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Medical alert systems</li>
                    <li>• Home monitoring devices</li>
                    <li>• GPS tracking for wandering</li>
                    <li>• Fall detection technology</li>
                    <li>• Smart home safety features</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary to-purple-600 rounded-xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Need Personalized Caregiver Support?</h3>
              <p className="text-purple-100 mb-6">
                Our senior living advisors understand the challenges of caregiving and can help you find the right resources and support for your unique situation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quiz"
                  className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Assessment
                </Link>
                <a
                  href="tel:+18184225232"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
                >
                  Call (818) 422-5232
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 