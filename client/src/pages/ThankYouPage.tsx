import React from 'react';
import { Link } from 'wouter';
import { CheckCircle, Phone, Mail, Clock, ArrowRight, Heart } from 'lucide-react';

const ThankYouPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Success Icon */}
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-8">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>

          {/* Thank You Message */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Thank You for Your Submission!
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We've received your information and our senior living specialists are already working to find the perfect care solution for your loved one.
          </p>

          {/* What Happens Next */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              What Happens Next?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">We'll Call You</h3>
                <p className="text-gray-600">
                  One of our specialists will contact you within 24 hours to discuss your needs in detail.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 mb-4">
                  <Mail className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Personalized Matches</h3>
                <p className="text-gray-600">
                  We'll research and identify the best senior living options that match your specific requirements.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Turnaround</h3>
                <p className="text-gray-600">
                  You'll receive detailed information about recommended facilities within 2-3 business days.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl text-white p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Why Families Choose Our Service
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Heart className="h-6 w-6 text-red-200 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Completely Free Service</h3>
                  <p className="text-blue-100">
                    Our placement service is 100% free to families. We're paid by the facilities, not you.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-200 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Expert Guidance</h3>
                  <p className="text-blue-100">
                    Our specialists have years of experience helping families find the right care solution.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-200 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Save Time & Stress</h3>
                  <p className="text-blue-100">
                    We handle the research, tours, and paperwork so you can focus on your family.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-200 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Ongoing Support</h3>
                  <p className="text-blue-100">
                    We provide continued support throughout the transition and beyond.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Need Immediate Assistance?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us Now</h3>
                <p className="text-gray-600 mb-2">Available 24/7 for urgent situations</p>
                <a 
                  href="tel:+1-800-123-4567" 
                  className="text-blue-600 font-semibold hover:text-blue-800"
                >
                  (800) 123-4567
                </a>
              </div>

              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600 mb-2">For non-urgent questions</p>
                <a 
                  href="mailto:info@seniorlivingplacement.com" 
                  className="text-blue-600 font-semibold hover:text-blue-800"
                >
                  info@seniorlivingplacement.com
                </a>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Return to Homepage
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              Contact Us Again
            </Link>
          </div>

          {/* Additional Resources */}
          <div className="mt-12 text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              While You Wait, Explore Our Resources
            </h3>
            
            <div className="grid md:grid-cols-3 gap-4">
              <Link 
                href="/blog"
                className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h4 className="font-semibold text-gray-900 mb-2">Senior Living Blog</h4>
                <p className="text-sm text-gray-600">Expert advice and tips for families</p>
              </Link>
              
              <Link 
                href="/care-types"
                className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h4 className="font-semibold text-gray-900 mb-2">Care Types Guide</h4>
                <p className="text-sm text-gray-600">Learn about different care options</p>
              </Link>
              
              <Link 
                href="/payment-options"
                className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h4 className="font-semibold text-gray-900 mb-2">Payment Options</h4>
                <p className="text-sm text-gray-600">Understanding costs and financing</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p className="mb-2">
              Thank you for trusting us with your senior living needs.
            </p>
            <p className="text-sm">
              © 2024 Senior Living Placement. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage; 