import React, { useEffect } from 'react'
import { Route, Switch, useLocation } from 'wouter'
import { Toaster } from '@/components/ui/toaster'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { FloatingContactButton } from '@/components/FloatingContactButton'
import { HomePage } from '@/pages/HomePage'
import { AboutPage } from '@/pages/AboutPage'
import { ContactPage } from '@/pages/ContactPage'
import { BlogPage } from '@/pages/BlogPage'
import { BlogPostPage } from '@/pages/BlogPostPage'
import { FacilitiesPage } from '@/pages/FacilitiesPage'

import { LandingPage } from '@/pages/LandingPage'
import { HowItWorksPage } from '@/pages/HowItWorksPage'
import { PaymentOptionsPage } from '@/pages/PaymentOptionsPage'
import { CareTypesPage } from '@/pages/CareTypesPage'
import { ReviewsPage } from '@/pages/ReviewsPage'
import { CareDecisionsPage } from '@/pages/CareDecisionsPage'
import { CaregiverTipsPage } from '@/pages/CaregiverTipsPage'
import { QuizIntroPage } from '@/pages/QuizIntroPage'
import { DedicatedQuizPage } from '@/pages/DedicatedQuizPage'
import { FAQPage } from '@/pages/FAQPage'
import { AdminDashboard } from '@/pages/AdminDashboard'
import ThankYouPage from '@/pages/ThankYouPage'

// Custom hook for scroll to top on route change
function useScrollToTop() {
  const [location] = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location])
}

function App() {
  useScrollToTop()

  return (
    <div className="min-h-screen bg-white">
      <Switch>
        {/* Quiz routes - no header/footer */}
        <Route path="/quiz-intro" component={QuizIntroPage} />
        <Route path="/quiz" component={DedicatedQuizPage} />
        
        {/* Blog post routes - with header/footer */}
        <Route path="/blog/:slug">
          <Header />
          <main>
            <BlogPostPage />
          </main>
          <Footer />
          <FloatingContactButton />
          <Toaster />
        </Route>
        
        {/* Homepage */}
        <Route path="/">
          <Header />
          <main>
            <HomePage />
          </main>
          <Footer />
          <FloatingContactButton />
          <Toaster />
        </Route>
        
        {/* Caregiver Resources */}
        <Route path="/caregiver-resources">
          <Header />
          <main>
            <BlogPage />
          </main>
          <Footer />
          <FloatingContactButton />
          <Toaster />
        </Route>
        
        {/* About */}
        <Route path="/about">
          <Header />
          <main>
            <AboutPage />
          </main>
          <Footer />
          <FloatingContactButton />
          <Toaster />
        </Route>
        
        {/* Contact */}
        <Route path="/contact">
          <Header />
          <main>
            <ContactPage />
          </main>
          <Footer />
          <FloatingContactButton />
          <Toaster />
        </Route>
        
        {/* Blog */}
        <Route path="/blog">
          <Header />
          <main>
            <BlogPage />
          </main>
          <Footer />
          <FloatingContactButton />
          <Toaster />
        </Route>
        
        {/* Facilities */}
        <Route path="/facilities">
          <Header />
          <main>
            <FacilitiesPage />
          </main>
          <Footer />
          <FloatingContactButton />
          <Toaster />
        </Route>
        

        
        {/* Landing */}
        <Route path="/landing">
          <Header />
          <main>
            <LandingPage />
          </main>
          <Footer />
          <FloatingContactButton />
          <Toaster />
        </Route>
        
        {/* How It Works */}
        <Route path="/how-it-works">
          <Header />
          <main>
            <HowItWorksPage />
          </main>
          <Footer />
          <FloatingContactButton />
          <Toaster />
        </Route>
        
        {/* Payment Options */}
        <Route path="/payment-options">
          <Header />
          <main>
            <PaymentOptionsPage />
          </main>
          <Footer />
          <FloatingContactButton />
          <Toaster />
        </Route>
        
        {/* Care Types */}
        <Route path="/care-types">
          <Header />
          <main>
            <CareTypesPage />
          </main>
          <Footer />
          <FloatingContactButton />
          <Toaster />
        </Route>
        
        {/* Care Types with type parameter */}
        <Route path="/care-types/:type">
          <Header />
          <main>
            <CareTypesPage />
          </main>
          <Footer />
          <FloatingContactButton />
          <Toaster />
        </Route>
        
        {/* Reviews */}
        <Route path="/reviews">
          <Header />
          <main>
            <ReviewsPage />
          </main>
          <Footer />
          <FloatingContactButton />
          <Toaster />
        </Route>
        
        {/* Care Decisions */}
        <Route path="/care-decisions">
          <Header />
          <main>
            <CareDecisionsPage />
          </main>
          <Footer />
          <FloatingContactButton />
          <Toaster />
        </Route>
        
        {/* Caregiver Tips */}
        <Route path="/caregiver-tips">
          <Header />
          <main>
            <CaregiverTipsPage />
          </main>
          <Footer />
          <FloatingContactButton />
          <Toaster />
        </Route>
        
        {/* FAQ */}
        <Route path="/faq">
          <Header />
          <main>
            <FAQPage />
          </main>
          <Footer />
          <FloatingContactButton />
          <Toaster />
        </Route>
        
        {/* Thank You Page */}
        <Route path="/thank-you">
          <Header />
          <main>
            <ThankYouPage />
          </main>
          <Footer />
          <Toaster />
        </Route>
        
        {/* Admin Dashboard */}
        <Route path="/admin">
          <main>
            <AdminDashboard />
          </main>
        </Route>
      </Switch>
    </div>
  )
}

export default App 