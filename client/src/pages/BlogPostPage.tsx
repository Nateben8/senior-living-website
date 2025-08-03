import React from 'react'
import { useLocation, useRoute } from 'wouter'
import { blogPosts } from '@/data/blogPosts'

export function BlogPostPage() {
  const [, setLocation] = useLocation()
  const [, params] = useRoute('/blog/:slug')
  
  // Get the slug from the route parameters
  const slug = params?.slug
  
  // Find the blog post by slug
  const post = blogPosts.find(p => p.slug === slug)
  
  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <button 
            onClick={() => setLocation('/blog')}
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Back to Blog
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
          <button 
            onClick={() => setLocation('/blog')}
            className="flex items-center text-primary hover:text-purple-700 mb-6 transition-colors font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Caregiver Resources
          </button>
          
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-gradient-to-r from-primary to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {post.category}
            </span>
            <span className="text-gray-500 text-sm flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {post.readTime} min read
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{post.title}</h1>
          
          <div className="flex items-center justify-between text-gray-600 mb-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                {post.author.charAt(0)}
              </div>
              <span className="font-medium">By {post.author}</span>
            </div>
            <span className="text-gray-500">{new Date(post.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
          <div 
            dangerouslySetInnerHTML={{ __html: post.content }} 
            className="prose prose-lg max-w-none text-gray-900
              [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:text-gray-900 [&>h1]:mb-6 [&>h1]:mt-8
              [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-gray-900 [&>h2]:mb-4 [&>h2]:mt-8
              [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-gray-900 [&>h3]:mb-4 [&>h3]:mt-6
              [&>h4]:text-lg [&>h4]:font-semibold [&>h4]:text-gray-900 [&>h4]:mb-3 [&>h4]:mt-6
              [&>p]:text-gray-700 [&>p]:leading-relaxed [&>p]:mb-4 [&>p]:text-lg
              [&>ul]:text-gray-700 [&>ul]:mb-4 [&>ul]:pl-6
              [&>ol]:text-gray-700 [&>ol]:mb-4 [&>ol]:pl-6
              [&>li]:text-gray-700 [&>li]:mb-2 [&>li]:leading-relaxed
              [&>strong]:text-gray-900 [&>strong]:font-semibold
              [&>img]:rounded-xl [&>img]:shadow-lg [&>img]:mb-6 [&>img]:mt-6
              [&>blockquote]:border-l-4 [&>blockquote]:border-primary [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-gray-600
              [&>div]:text-gray-700"
          />
        </div>

        {/* Tags */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
          <h3 className="text-xl font-semibold mb-6 text-gray-900">Related Topics</h3>
          <div className="flex flex-wrap gap-3">
            {post.tags.map(tag => (
              <span 
                key={tag}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary to-purple-600 rounded-2xl p-8 text-center text-white shadow-lg">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-purple-100 mb-8 text-lg leading-relaxed">
              Get personalized recommendations for your loved one's senior living needs. Our expert advisors are here to help you find the perfect care solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setLocation('/quiz-intro')}
                className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Take Free Assessment
              </button>
              <button 
                onClick={() => setLocation('/contact')}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 