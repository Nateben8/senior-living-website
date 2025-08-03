import React from 'react'
import { Link } from 'wouter'

export function ReviewsPage() {
  const reviews = [
    {
      id: 1,
      name: 'Sarah M.',
      location: 'Los Angeles, CA',
      rating: 5,
      review: 'Senior Living Placement helped us find the perfect assisted living community for my mother. The advisor was incredibly knowledgeable and patient throughout the entire process. They truly understand what families go through.',
      date: '2024-01-15'
    },
    {
      id: 2,
      name: 'Michael R.',
      location: 'Orange County, CA',
      rating: 5,
      review: 'I was overwhelmed trying to find memory care for my father. The team at Senior Living Placement made it so much easier. They found us exactly what we needed and the community is perfect for him.',
      date: '2024-01-10'
    },
    {
      id: 3,
      name: 'Jennifer L.',
      location: 'San Diego, CA',
      rating: 5,
      review: 'Free service that actually delivered! Our advisor was professional, caring, and helped us find a community that fits our budget and needs perfectly. Couldn\'t be happier.',
      date: '2024-01-05'
    },
    {
      id: 4,
      name: 'David K.',
      location: 'Los Angeles, CA',
      rating: 5,
      review: 'The assessment was quick and easy. Within days, we had personalized recommendations that matched our requirements. The follow-up support was exceptional. Highly recommend!',
      date: '2023-12-28'
    },
    {
      id: 5,
      name: 'Patricia H.',
      location: 'Orange County, CA',
      rating: 5,
      review: 'They really understand the senior living landscape. Our advisor knew all the communities personally and gave us honest, helpful advice. Made a difficult decision much easier.',
      date: '2023-12-20'
    },
    {
      id: 6,
      name: 'Robert T.',
      location: 'San Diego, CA',
      rating: 5,
      review: 'From the initial call to the final decision, everything was handled professionally. They truly care about finding the right fit for families. Excellent service!',
      date: '2023-12-15'
    },
    {
      id: 7,
      name: 'Maria G.',
      location: 'Riverside, CA',
      rating: 5,
      review: 'The team went above and beyond to help us find the right community for my grandmother. They were patient, understanding, and found us options we never knew existed.',
      date: '2023-12-10'
    },
    {
      id: 8,
      name: 'James W.',
      location: 'Ventura, CA',
      rating: 5,
      review: 'Outstanding service! They helped us navigate the complex world of senior living options. Our advisor was knowledgeable about every community and gave us honest recommendations.',
      date: '2023-12-05'
    },
    {
      id: 9,
      name: 'Lisa P.',
      location: 'Los Angeles, CA',
      rating: 5,
      review: 'I was skeptical about a free service, but Senior Living Placement exceeded all expectations. They found us a beautiful community that was within our budget. Amazing experience!',
      date: '2023-11-30'
    },
    {
      id: 10,
      name: 'Thomas B.',
      location: 'Orange County, CA',
      rating: 5,
      review: 'The level of care and attention to detail was impressive. They took the time to understand our specific needs and found communities that were perfect matches. Highly recommend!',
      date: '2023-11-25'
    },
    {
      id: 11,
      name: 'Amanda S.',
      location: 'San Diego, CA',
      rating: 5,
      review: 'Finding senior care for my parents was overwhelming until I found Senior Living Placement. Their expertise and compassion made all the difference. Thank you!',
      date: '2023-11-20'
    },
    {
      id: 12,
      name: 'Richard M.',
      location: 'Los Angeles, CA',
      rating: 5,
      review: 'Professional, caring, and efficient. They helped us find a memory care facility that was perfect for my wife. The staff there is wonderful and she\'s thriving.',
      date: '2023-11-15'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center mb-6">
              <div className="flex text-yellow-400 mr-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-900">5.0 Star Rating</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Trusted by <span className="text-primary bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Thousands</span> of Families
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Read real reviews from families who have used our free service to find the perfect senior living community for their loved ones.
            </p>
            
            {/* Google Business Link */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="https://share.google/P9G14v2TpozANA5xY"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-gray-900 px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-gray-200"
              >
                <svg className="w-6 h-6 mr-3 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="font-semibold">View Our Google Reviews</span>
              </a>
              <div className="text-sm text-gray-600">
                <span className="font-semibold text-green-600">✓ Verified Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Families Helped</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">5.0</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-600">Free Service</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Stories from Real Families
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover why families across California trust Senior Living Placement to help them find the perfect senior living community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 p-8">
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  "{review.review}"
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.location}</p>
                  </div>
                  <p className="text-sm text-gray-400">{new Date(review.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric' 
                  })}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12">
            <div className="flex justify-center items-center mb-6">
              <div className="flex text-yellow-400 mr-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-900">5.0 Stars on Google</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              See What Others Are Saying
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied families who have found their perfect senior living community through our service. Read our verified Google reviews and see why we're the trusted choice.
            </p>
            <a
              href="https://share.google/P9G14v2TpozANA5xY"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Read Our Google Reviews
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Experience Our 5-Star Service?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of families who have found their perfect senior living community with our help. Start your free assessment today and see why we're the trusted choice.
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