import React, { useState } from 'react'
import { Link } from 'wouter'

export function FAQPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      id: 1,
      question: "How much does senior living cost in California?",
      answer: "Senior living costs in California vary by care type and location. Assisted living typically costs $3,000-$6,000/month, memory care $4,000-$8,000/month, independent living $2,500-$5,000/month, and nursing homes $8,000-$12,000/month. Our free service helps you find options within your budget.",
      keywords: ["senior living costs California", "assisted living prices", "memory care costs", "nursing home costs"]
    },
    {
      id: 2,
      question: "What's the difference between assisted living and memory care?",
      answer: "Assisted living provides help with daily activities while maintaining independence. Memory care offers specialized care for seniors with Alzheimer's and dementia, including secure environments, trained staff, and cognitive stimulation programs. Our advisors can help you determine which is right for your loved one.",
      keywords: ["assisted living vs memory care", "dementia care", "Alzheimer's care", "senior care types"]
    },
    {
      id: 3,
      question: "Is your senior living placement service really free?",
      answer: "Yes, our senior living placement service is completely free for families. We're paid by the senior living communities, not by you. This allows us to provide unbiased recommendations and help you find the best options without any cost to your family.",
      keywords: ["free senior living placement", "senior living advisor", "no cost placement service"]
    },
    {
      id: 4,
      question: "How do I know if my loved one needs senior living?",
      answer: "Signs include difficulty with daily activities, safety concerns, isolation, poor nutrition, medication management issues, or caregiver burnout. Our assessment helps evaluate your loved one's needs and recommend appropriate care options.",
      keywords: ["signs need senior living", "elderly care assessment", "senior care evaluation"]
    },
    {
      id: 5,
      question: "What payment options are available for senior living?",
      answer: "Payment options include private pay, long-term care insurance, VA benefits, Medicare (for skilled nursing), and Medicaid (for qualifying individuals). Our advisors can help you understand your payment options and find communities that accept your preferred payment method.",
      keywords: ["senior living payment options", "long-term care insurance", "VA benefits", "Medicare Medicaid"]
    },
    {
      id: 6,
      question: "How long does it take to find a senior living community?",
      answer: "The timeline varies based on urgency and specific needs. Some families find a community within a week, while others take 2-4 weeks to make a decision. Our advisors work at your pace and can help with urgent placements when needed.",
      keywords: ["senior living timeline", "urgent placement", "senior living search process"]
    },
    {
      id: 7,
      question: "Can I tour senior living communities before deciding?",
      answer: "Absolutely! We encourage touring multiple communities to find the right fit. Our advisors can arrange tours and accompany you to help evaluate each community. Virtual tours are also available for initial screening.",
      keywords: ["senior living tours", "community visits", "virtual tours", "senior living evaluation"]
    },
    {
      id: 8,
      question: "What services are included in senior living communities?",
      answer: "Services vary by care type. Assisted living includes meals, housekeeping, medication management, and social activities. Memory care adds specialized dementia care and secure environments. Independent living offers maintenance-free living with amenities. Nursing homes provide 24/7 medical care.",
      keywords: ["senior living services", "assisted living amenities", "memory care services", "nursing home care"]
    },
    {
      id: 9,
      question: "How do I choose between different senior living options?",
      answer: "Consider your loved one's care needs, budget, location preferences, and lifestyle. Our assessment evaluates these factors and matches you with appropriate communities. We provide detailed comparisons and help you weigh the pros and cons of each option.",
      keywords: ["choosing senior living", "senior living comparison", "care needs assessment"]
    },
    {
      id: 10,
      question: "What happens if my loved one's needs change after moving in?",
      answer: "Many communities offer different levels of care and can accommodate changing needs. If more specialized care is needed, we can help you transition to a more appropriate community. Our ongoing support ensures your loved one receives the right care.",
      keywords: ["changing care needs", "senior living transitions", "care level changes"]
    },
    {
      id: 11,
      question: "Do you help with the moving process?",
      answer: "Yes, we provide guidance throughout the entire process, including moving logistics, downsizing assistance, and emotional support for families. We can connect you with resources to make the transition as smooth as possible.",
      keywords: ["senior moving assistance", "downsizing help", "transition support"]
    },
    {
      id: 12,
      question: "What if I'm not satisfied with the recommended community?",
      answer: "We're committed to your satisfaction. If a community doesn't meet your expectations, we'll help you find alternatives. Our goal is to ensure your loved one is happy and well-cared for in their new home.",
      keywords: ["senior living satisfaction", "community alternatives", "placement guarantee"]
    }
  ]

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-purple-600 to-blue-600 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl sm:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Get answers to common questions about senior living placement, costs, care types, and our free service. Find everything you need to make informed decisions for your loved one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/quiz-intro" 
                className="bg-white text-primary px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Start Your Assessment
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

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Questions About Senior Living
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get expert answers to help you navigate the senior living decision process with confidence.
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-8 py-6 text-left focus:outline-none focus:ring-0"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <svg
                      className={`w-6 h-6 text-primary transition-transform duration-300 ${
                        openFaq === faq.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${
                  openFaq === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                  <div className="px-8 pb-6">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Need More Information?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive resources to help you make the best senior living decisions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Care Types Guide</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Learn about the differences between assisted living, memory care, independent living, and nursing homes.
              </p>
              <Link 
                href="/care-types" 
                className="inline-flex items-center text-primary font-semibold hover:text-purple-700 transition-colors"
              >
                Explore Care Types
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Payment Options</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Understand your payment options including insurance, VA benefits, Medicare, and Medicaid.
              </p>
              <Link 
                href="/payment-options" 
                className="inline-flex items-center text-primary font-semibold hover:text-purple-700 transition-colors"
              >
                Learn About Payment
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Family Reviews</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Read real reviews from families who have used our service to find senior living communities.
              </p>
              <Link 
                href="/reviews" 
                className="inline-flex items-center text-primary font-semibold hover:text-purple-700 transition-colors"
              >
                Read Reviews
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Our expert advisors are here to answer all your questions and help you find the perfect senior living community for your loved one. Start your free assessment today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/quiz-intro" 
              className="bg-white text-primary px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Start Free Assessment
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