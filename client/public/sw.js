const CACHE_NAME = 'senior-living-placement-v1'
const urlsToCache = [
  '/',
  '/about',
  '/contact',
  '/care-types',
  '/how-it-works',
  '/payment-options',
  '/reviews',
  '/faq',
  '/facilities',
  '/caregiver-resources',
  '/care-decisions',
  '/caregiver-tips',
  '/quiz-intro',
  '/quiz',
  '/blog',
  '/blog/signs-elderly-parent-needs-help',
  '/blog/assisted-living-vs-memory-care-california',
  '/blog/senior-living-costs-california-2024',
  '/blog/memory-care-specialists-california',
  '/blog/senior-living-transition-guide',
  '/blog/california-senior-living-facilities-guide',
  '/blog/caregiver-burnout-prevention',
  '/assets/index-DorcbkHK.css',
  '/assets/index-DxaJV987.js',
  '/favicon.svg'
]

// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache')
        return cache.addAll(urlsToCache)
      })
  )
})

// Fetch event
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        return response || fetch(event.request)
      }
    )
  )
})

// Activate event
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName)
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
}) 