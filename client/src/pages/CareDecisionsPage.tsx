import React from 'react'
import { Link } from 'wouter'

export function CareDecisionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Making <span className="text-primary bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Care Decisions</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Navigate the complex process of making senior care decisions with your family. Learn how to handle disagreements, involve all stakeholders, and make the best choices for your loved one.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge of Family Care Decisions</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                One of the biggest challenges caregivers face is ensuring an aging loved one's health and safety while respecting their wishes. When family members aren't on the same page, the chances for complications only increase. Making care decisions involves balancing multiple perspectives, needs, and emotions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This guide will help you navigate the complex dynamics of family decision-making and create a plan that works for everyone involved.
              </p>
            </div>

            {/* Key Challenges */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Common Challenges in Care Decision-Making</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Differing Opinions</h4>
                  <p className="text-gray-700">
                    Family members often have different views on what's best for their loved one. Some may prioritize safety while others focus on independence.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Financial Concerns</h4>
                  <p className="text-gray-700">
                    The cost of care can create tension among family members, especially when resources are limited or unevenly distributed.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Geographic Distance</h4>
                  <p className="text-gray-700">
                    When family members live far apart, it can be difficult to coordinate care decisions and ensure everyone feels involved.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Emotional Dynamics</h4>
                  <p className="text-gray-700">
                    Past family relationships, guilt, and fear can complicate decision-making and create additional stress for everyone involved.
                  </p>
                </div>
              </div>
            </div>

            {/* Decision-Making Process */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">A Structured Approach to Decision-Making</h3>
              
              <div className="space-y-8">
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Step 1: Gather Information</h4>
                  <p className="text-gray-700 mb-4">
                    Start by collecting all the facts about your loved one's situation. This includes:
                  </p>
                  <ul className="text-gray-700 space-y-2 ml-6">
                    <li>• Current health status and medical needs</li>
                    <li>• Available care options and their costs</li>
                    <li>• Legal and financial considerations</li>
                    <li>• Your loved one's preferences and values</li>
                  </ul>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Step 2: Involve All Stakeholders</h4>
                  <p className="text-gray-700 mb-4">
                    Make sure everyone who should be involved has a voice in the decision:
                  </p>
                  <ul className="text-gray-700 space-y-2 ml-6">
                    <li>• Your aging loved one (when possible)</li>
                    <li>• All adult children and close family members</li>
                    <li>• Healthcare providers and care professionals</li>
                    <li>• Financial advisors or legal representatives</li>
                  </ul>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Step 3: Establish Decision-Making Criteria</h4>
                  <p className="text-gray-700 mb-4">
                    Create a framework for evaluating options based on:
                  </p>
                  <ul className="text-gray-700 space-y-2 ml-6">
                    <li>• Safety and medical needs</li>
                    <li>• Quality of life and personal preferences</li>
                    <li>• Financial feasibility</li>
                    <li>• Family capacity and resources</li>
                  </ul>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Step 4: Explore Options Together</h4>
                  <p className="text-gray-700 mb-4">
                    Research and visit different care options as a family when possible:
                  </p>
                  <ul className="text-gray-700 space-y-2 ml-6">
                    <li>• Tour senior living communities together</li>
                    <li>• Meet with in-home care providers</li>
                    <li>• Consult with healthcare professionals</li>
                    <li>• Discuss financial planning options</li>
                  </ul>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Step 5: Make a Decision and Plan Implementation</h4>
                  <p className="text-gray-700 mb-4">
                    Once you've reached consensus, create a detailed implementation plan:
                  </p>
                  <ul className="text-gray-700 space-y-2 ml-6">
                    <li>• Set clear timelines and responsibilities</li>
                    <li>• Establish communication protocols</li>
                    <li>• Plan for ongoing evaluation and adjustment</li>
                    <li>• Prepare for potential challenges</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Handling Disagreements */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Managing Family Disagreements</h3>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl mb-6">
                <h4 className="text-lg font-semibold text-yellow-800 mb-3">When Family Members Disagree</h4>
                <p className="text-yellow-700">
                  Disagreements are common and often stem from different perspectives, experiences, and concerns. The key is to address conflicts constructively rather than letting them derail the decision-making process.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Strategies for Resolution</h4>
                  <ul className="text-gray-700 space-y-3">
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      <span>Focus on shared goals and values</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      <span>Use a neutral mediator if needed</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      <span>Separate facts from emotions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      <span>Consider professional guidance</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Communication Tips</h4>
                  <ul className="text-gray-700 space-y-3">
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      <span>Listen actively to all perspectives</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      <span>Avoid blaming or criticizing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      <span>Use "I" statements instead of "you"</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      <span>Take breaks when emotions run high</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Legal and Financial Considerations */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Legal and Financial Planning</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Legal Documents</h4>
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Power of Attorney</h5>
                      <p className="text-gray-700 text-sm">
                        Designates who can make financial and healthcare decisions on behalf of your loved one.
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Healthcare Directive</h5>
                      <p className="text-gray-700 text-sm">
                        Outlines medical treatment preferences and end-of-life care wishes.
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Living Will</h5>
                      <p className="text-gray-700 text-sm">
                        Specifies what medical treatments should or shouldn't be provided.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Financial Planning</h4>
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Long-term Care Insurance</h5>
                      <p className="text-gray-700 text-sm">
                        Review existing policies and understand coverage limitations and benefits.
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Medicare and Medicaid</h5>
                      <p className="text-gray-700 text-sm">
                        Understand what's covered and eligibility requirements for different programs.
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Asset Protection</h5>
                      <p className="text-gray-700 text-sm">
                        Work with financial advisors to protect assets while qualifying for assistance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Getting Professional Help */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">When to Seek Professional Help</h3>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-xl mb-6">
                <h4 className="text-lg font-semibold text-blue-800 mb-3">Signs You Need Professional Guidance</h4>
                <ul className="text-blue-700 space-y-2">
                  <li>• Family conflicts that can't be resolved through discussion</li>
                  <li>• Complex legal or financial situations</li>
                  <li>• Disagreements about medical treatment decisions</li>
                  <li>• When your loved one's safety is at risk</li>
                  <li>• When family members are geographically dispersed</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                  </div>
                  <h5 className="font-semibold text-gray-900 mb-2">Senior Living Advisors</h5>
                  <p className="text-gray-700 text-sm">
                    Our experts can help you navigate care options and family dynamics.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                  </div>
                  <h5 className="font-semibold text-gray-900 mb-2">Family Mediators</h5>
                  <p className="text-gray-700 text-sm">
                    Neutral professionals who can help resolve family conflicts constructively.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <h5 className="font-semibold text-gray-900 mb-2">Legal Counsel</h5>
                  <p className="text-gray-700 text-sm">
                    Elder law attorneys can help with legal documents and asset protection.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary to-purple-600 rounded-xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Need Help Making Care Decisions?</h3>
              <p className="text-purple-100 mb-6">
                Our senior living advisors can help you navigate family dynamics and find the right care solution for your loved one.
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