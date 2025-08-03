import React from 'react'

interface SEOHeadProps {
  title: string
  description: string
  keywords?: string
  canonical?: string
  ogImage?: string
  ogType?: string
  schema?: object
  pageType?: 'article' | 'faq' | 'local-business' | 'service'
}

export function SEOHead({
  title,
  description,
  keywords,
  canonical,
  ogImage = 'https://seniorlivingplacement.org/assets/SLP%20Website%20Image%202_1752736839584-DKd3ZmYq.webp',
  ogType = 'website',
  schema,
  pageType = 'local-business'
}: SEOHeadProps) {
  const baseUrl = 'https://seniorlivingplacement.org'
  const canonicalUrl = canonical || baseUrl

  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Senior Living Placement",
    "description": "Free senior living placement service helping families find assisted living, memory care, and senior communities in California",
    "url": baseUrl,
    "telephone": "+1-818-422-5232",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 34.0522,
      "longitude": -118.2437
    },
    "areaServed": [
      {
        "@type": "State",
        "name": "California"
      },
      {
        "@type": "City",
        "name": "Los Angeles"
      },
      {
        "@type": "City",
        "name": "Orange County"
      },
      {
        "@type": "City",
        "name": "San Diego"
      }
    ],
    "serviceType": [
      "Senior Living Placement",
      "Assisted Living",
      "Memory Care",
      "Independent Living",
      "Nursing Homes"
    ],
    "priceRange": "Free Service",
    "openingHours": "Mo-Su 00:00-23:59",
    "sameAs": [
      "https://www.facebook.com/seniorlivingplacement",
      "https://www.linkedin.com/company/senior-living-placement"
    ]
  }

  const getSchemaByType = () => {
    switch (pageType) {
      case 'article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": title,
          "description": description,
          "author": {
            "@type": "Organization",
            "name": "Senior Living Placement"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Senior Living Placement",
            "logo": {
              "@type": "ImageObject",
              "url": "https://seniorlivingplacement.org/logo.svg"
            }
          },
          "datePublished": new Date().toISOString(),
          "dateModified": new Date().toISOString(),
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": canonicalUrl
          }
        }
      case 'faq':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is senior living placement?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Senior living placement is a free service that helps families find the right assisted living, memory care, or independent living communities for their loved ones."
              }
            },
            {
              "@type": "Question",
              "name": "How much does senior living cost in California?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Senior living costs in California vary by location and care level, typically ranging from $2,500 to $8,000 per month depending on the type of care needed."
              }
            }
          ]
        }
      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": title,
          "description": description,
          "provider": {
            "@type": "LocalBusiness",
            "name": "Senior Living Placement"
          },
          "areaServed": {
            "@type": "State",
            "name": "California"
          },
          "serviceType": "Senior Living Placement"
        }
      default:
        return defaultSchema
    }
  }

  const finalSchema = schema || getSchemaByType()

  return (
    <>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Senior Living Placement" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="theme-color" content="#9966CC" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Senior Living Placement" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Additional SEO Meta Tags */}
      <meta name="geo.region" content="US-CA" />
      <meta name="geo.placename" content="California" />
      <meta name="geo.position" content="34.0522;-118.2437" />
      <meta name="ICBM" content="34.0522, -118.2437" />
      <meta name="DC.title" content="Senior Living Placement" />
      <meta name="DC.description" content="Free senior living placement service in California" />
      <meta name="DC.subject" content="Senior Living, Assisted Living, Memory Care" />
      <meta name="DC.creator" content="Senior Living Placement" />
      <meta name="DC.publisher" content="Senior Living Placement" />
      <meta name="DC.date" content="2024" />
      <meta name="DC.language" content="en" />
      <meta name="DC.coverage" content="California" />
      <meta name="DC.rights" content="Copyright 2024 Senior Living Placement" />

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>
    </>
  )
} 