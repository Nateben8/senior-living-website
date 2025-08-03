import React from 'react'
import { Link } from 'wouter'

export function ReviewsPage() {
  const reviews = [
    {
      id: 1,
      name: 'Sarah M.',
      location: 'Los Angeles, CA',
      rating: 5,
      review: 'Senior Living Placement helped us find the perfect assisted living community for my mother. The advisor was incredibly knowledgeable and patient throughout the entire process.',
      date: '2024-01-15'
    },
    {
      id: 2,
      name: 'Michael R.',
      location: 'Orange County, CA',
      rating: 5,
      review: 'I was overwhelmed trying to find memory care for my father. The team at Senior Living Placement made it so much easier. They found us exactly what we needed.',
      date: '2024-01-10'
    },
    {
      id: 3,
      name: 'Jennifer L.',
      location: 'San Diego, CA',
      rating: 5,
      review: 'Free service that actually delivered! Our advisor was professional, caring, and helped us find a community that fits our budget and needs perfectly.',
      date: '2024-01-05'
    },
    {
      id: 4,
      name: 'David K.',
      location: 'Los Angeles, CA',
      rating: 5,
      review: 'The assessment was quick and easy. Within days, we had personalized recommendations that matched our requirements. Highly recommend!',
      date: '2023-12-28'
    },
    {
      id: 5,
      name: 'Patricia H.',
      location: 'Orange County, CA',
      rating: 5,
      review: 'They really understand the senior living landscape. Our advisor knew all the communities personally and gave us honest, helpful advice.',
      date: '2023-12-20'
    },
    {
      id: 6,
      name: 'Robert T.',
      location: 'San Diego, CA',
      rating: 5,
      review: 'From the initial call to the final decision, everything was handled professionally. They truly care about finding the right fit for families.',
      date: '2023-12-15'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Families Say About <span className="text-primary">Senior Living Placement</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Read real reviews from families who have used our free service to find the perfect senior living community.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{review.review}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.location}</p>
                  </div>
                  <p className="text-sm text-gray-400">{new Date(review.date).toLocaleDateString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Our Service?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of families who have found their perfect senior living community with our help.
          </p>
          <Link
            href="/assessment"
            className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Your Free Assessment
          </Link>
        </div>
      </section>
    </div>
  )
} 