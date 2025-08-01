import React from 'react'

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Find Your Perfect Senior Living Solution
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100">
          Get personalized recommendations for assisted living, memory care, and senior housing in California
        </p>
        <div className="bg-white rounded-lg p-8 text-gray-900 max-w-md mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Free Assessment</h2>
          <p className="text-gray-600 mb-6">
            Take our 3-minute assessment to get personalized recommendations.
          </p>
          <button className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700">
            Start Assessment
          </button>
        </div>
      </div>
    </div>
  )
} 