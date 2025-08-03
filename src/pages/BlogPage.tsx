import React, { useState, useMemo } from 'react'
import { Link, useLocation } from 'wouter'
import { blogPosts, categories, tags } from '@/data/blogPosts'

export function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedTag, setSelectedTag] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [, setLocation] = useLocation()

  // Generate search suggestions
  const searchSuggestions = useMemo(() => {
    if (!searchTerm.trim()) return []
    
    const suggestions: Array<{
      type: 'title' | 'category' | 'tag'
      text: string
      slug: string | null
    }> = []
    const searchLower = searchTerm.toLowerCase()
    
    // Add suggestions from titles
    blogPosts.forEach(post => {
      if (post.title.toLowerCase().includes(searchLower)) {
        suggestions.push({
          type: 'title',
          text: post.title,
          slug: post.slug
        })
      }
    })
    
    // Add suggestions from categories
    categories.forEach(category => {
      if (category.toLowerCase().includes(searchLower)) {
        suggestions.push({
          type: 'category',
          text: category,
          slug: null
        })
      }
    })
    
    // Add suggestions from tags
    tags.forEach(tag => {
      if (tag.toLowerCase().includes(searchLower)) {
        suggestions.push({
          type: 'tag',
          text: tag,
          slug: null
        })
      }
    })
    
    // Remove duplicates and limit to 8 suggestions
    const uniqueSuggestions = suggestions.filter((suggestion, index, self) => 
      index === self.findIndex(s => s.text === suggestion.text)
    ).slice(0, 8)
    
    return uniqueSuggestions
  }, [searchTerm])

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    const matchesTag = selectedTag === 'all' || post.tags.includes(selectedTag)
    const matchesSearch = searchTerm === '' || 
                         post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase())
    
    return matchesCategory && matchesTag && matchesSearch
  })

  const uniqueCategories = ['all', ...Array.from(new Set(blogPosts.map(post => post.category)))]
  const uniqueTags = ['all', ...Array.from(new Set(blogPosts.flatMap(post => post.tags)))]

  const handleSuggestionClick = (suggestion: {
    type: 'title' | 'category' | 'tag'
    text: string
    slug: string | null
  }) => {
    if (suggestion.slug) {
      // Navigate to blog post using wouter
      setLocation(`/blog/${suggestion.slug}`)
    } else {
      // Set search term
      setSearchTerm(suggestion.text)
      setShowSuggestions(false)
    }
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowSuggestions(false)
    // The search will automatically filter posts based on searchTerm
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Caregiver <span className="text-primary bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Resources</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Everything you need to navigate senior care information, tips, and tools to help you make the very best decisions for your aging loved one — and yourself.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <form onSubmit={handleSearchSubmit} className="relative">
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                <input
                  type="text"
                  placeholder="Search caregiver resources..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value)
                    setShowSuggestions(true)
                  }}
                  onFocus={() => setShowSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-300 text-lg text-gray-900 placeholder-gray-500"
                />
                
                {/* Autocomplete Suggestions */}
                {showSuggestions && searchSuggestions.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl z-50 max-h-64 overflow-y-auto">
                    {searchSuggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                      >
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {suggestion.type === 'title' ? (
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                            ) : suggestion.type === 'category' ? (
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
                            ) : (
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
                            )}
                          </svg>
                          <div>
                            <div className="text-gray-900 font-medium">{suggestion.text}</div>
                            <div className="text-xs text-gray-500 capitalize">{suggestion.type}</div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Topics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to navigate senior care
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore senior care information, tips, and tools to help you make the very best decisions for your aging loved one — and yourself.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Signs it's time for senior care */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Signs it's time for senior care</h3>
              <p className="text-gray-600 text-center mb-6 leading-relaxed">
                It can be difficult to recognize when a loved one needs a higher level of care. Signs like weight loss, poor hygiene, and increasing forgetfulness can point to more serious underlying problems.
              </p>
              <div className="text-center">
                <Link href="/blog/signs-elderly-parent-needs-help" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  Learn More 
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Making care decisions */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Making care decisions</h3>
              <p className="text-gray-600 text-center mb-4">
                One of the biggest challenges caregivers face is ensuring an aging loved one's health and safety while respecting their wishes. When other relatives aren't on the same page, the chances for complications only increase.
              </p>
              <div className="text-center">
                <Link href="/care-decisions" className="text-green-600 font-semibold hover:text-green-700 transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Care costs and ways to pay */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Care costs and ways to pay</h3>
              <p className="text-gray-600 text-center mb-4">
                The cost of senior care depends on several factors, such as location and the type and frequency of services needed. Understanding payment options is crucial for planning.
              </p>
              <div className="text-center">
                <Link href="/payment-options" className="text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Finding senior care */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Finding senior care</h3>
              <p className="text-gray-600 text-center mb-4">
                Creating a list of non-negotiables can help you identify your priorities and narrow down your options. Touring communities and interviewing caregivers is essential.
              </p>
              <div className="text-center">
                <Link href="/facilities" className="text-orange-600 font-semibold hover:text-orange-700 transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Moving to senior living */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7l9-4 9 4M4 10v8a2 2 0 002 2h12a2 2 0 002-2v-8M4 10h16"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Moving to senior living</h3>
              <p className="text-gray-600 text-center mb-4">
                Helping a loved one transition to their new home can be emotionally and logistically challenging. Staying organized and asking for help when needed can keep stress to a minimum.
              </p>
              <div className="text-center">
                <Link href="/blog/senior-living-transition-guide" className="text-red-600 font-semibold hover:text-red-700 transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Tips and support for caregivers */}
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Tips and support for caregivers</h3>
              <p className="text-gray-600 text-center mb-4">
                Families often focus on providing the best possible care for their loved ones, but you should get the support you need, too. Help for caregivers comes in many different forms.
              </p>
              <div className="text-center">
                <Link href="/caregiver-tips" className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <span className="text-gray-600 font-medium mr-2">Categories:</span>
              {uniqueCategories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category === 'all' ? 'All Categories' : category}
                </button>
              ))}
            </div>
            
            {/* Tag Filter */}
            <div className="flex flex-wrap gap-2">
              <span className="text-gray-600 font-medium mr-2">Topics:</span>
              {uniqueTags.slice(0, 8).map(tag => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                    selectedTag === tag
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {tag === 'all' ? 'All Topics' : tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Results Indicator */}
          {searchTerm && (
            <div className="mb-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-blue-800">
                <strong>Search Results:</strong> Found {filteredPosts.length} result{filteredPosts.length !== 1 ? 's' : ''} for "{searchTerm}"
                {filteredPosts.length === 0 && (
                  <span className="block mt-2 text-sm">
                    Try adjusting your search terms or browse our categories below.
                  </span>
                )}
              </p>
            </div>
          )}
          
          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-8">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <span className="text-gray-600 font-medium mr-2">Categories:</span>
              {uniqueCategories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category === 'all' ? 'All Categories' : category}
                </button>
              ))}
            </div>
            
            {/* Tag Filter */}
            <div className="flex flex-wrap gap-2">
              <span className="text-gray-600 font-medium mr-2">Topics:</span>
              {uniqueTags.slice(0, 8).map(tag => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                    selectedTag === tag
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {tag === 'all' ? 'All Topics' : tag}
                </button>
              ))}
            </div>
          </div>
          
          {/* Blog Posts Grid */}
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <svg className="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search terms or filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.slug} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-56 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-primary to-purple-600 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg">
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-black/50 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                        {post.readTime} min read
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-xs mr-3">
                        {post.author.charAt(0)}
                      </div>
                      <span className="font-medium">{post.author}</span>
                      <span className="mx-2">•</span>
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 leading-tight">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-xs font-medium transition-colors cursor-pointer">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-primary font-semibold hover:text-purple-700 transition-colors group"
                    >
                      Read More
                      <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Need Personalized Senior Living Guidance?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Our expert advisors can help you find the perfect senior living community for your loved one. Get free, personalized recommendations today.
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