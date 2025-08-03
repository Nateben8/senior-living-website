import React from 'react'
import { Link } from 'wouter'

export function QuizIntroPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header with logo only */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/" className="inline-block">
            <img 
              src="https://seniorlivingplacement.org/assets/SLP%20Logo%20(1)_1752736909770-A9F9-KDF.png" 
              alt="Senior Living Placement Logo" 
              className="h-12 w-auto"
            />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center">
          {/* Welcome Section */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Find the Perfect Senior Living Community
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our personalized assessment will help you find the right senior living option for your loved one. 
              Get matched with communities that fit your needs, preferences, and budget.
            </p>
          </div>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Personalized Matches</h3>
              <p className="text-gray-600">Get recommendations based on your specific needs and preferences</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Free Service</h3>
              <p className="text-gray-600">Our placement service is completely free for families</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Guidance</h3>
              <p className="text-gray-600">Get support from experienced senior living advisors</p>
            </div>
          </div>

          {/* What to Expect */}
          <div className="bg-white p-8 rounded-2xl shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What to Expect</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">📋 Quick Assessment</h3>
                <p className="text-gray-600">Answer a few simple questions about your needs and preferences</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🎯 Personalized Matches</h3>
                <p className="text-gray-600">Receive recommendations tailored to your specific situation</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">📞 Expert Consultation</h3>
                <p className="text-gray-600">Get a free consultation with our senior living specialists</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🏠 Community Tours</h3>
                <p className="text-gray-600">Schedule tours of recommended communities</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-4">
            <Link 
              to="/quiz"
              className="inline-block w-full max-w-md bg-gradient-to-r from-primary to-purple-600 text-white py-4 px-8 rounded-2xl font-bold text-xl hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Your Assessment
            </Link>
            <p className="text-sm text-gray-500">
              Takes about 2-3 minutes • Completely free
            </p>
          </div>
        </div>
      </main>
    </div>
  )
} 