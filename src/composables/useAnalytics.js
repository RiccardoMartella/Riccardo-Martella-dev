/**
 * Analytics Helper for Google Analytics 4
 * Provides utility functions to track user interactions
 */

export const useAnalytics = () => {
  /**
   * Check if gtag is available
   */
  const isGtagAvailable = () => {
    return typeof window !== 'undefined' && typeof window.gtag === 'function'
  }

  /**
   * Track a custom event
   * @param {string} eventName - Nome dell'evento
   * @param {object} params - Parametri aggiuntivi
   */
  const trackEvent = (eventName, params = {}) => {
    if (isGtagAvailable()) {
      window.gtag('event', eventName, params)
      console.log('📊 Analytics Event:', eventName, params)
    }
  }

  /**
   * Track page view manually
   * @param {string} url - URL della pagina
   * @param {string} title - Titolo della pagina
   */
  const trackPageView = (url, title) => {
    if (isGtagAvailable()) {
      window.gtag('event', 'page_view', {
        page_title: title,
        page_location: url,
        page_path: url.replace(window.location.origin, '')
      })
      console.log('📊 Analytics Page View:', { url, title })
    }
  }

  /**
   * Track button clicks
   * @param {string} buttonName - Nome del bottone
   * @param {string} location - Dove si trova il bottone
   */
  const trackButtonClick = (buttonName, location = '') => {
    trackEvent('button_click', {
      button_name: buttonName,
      location: location
    })
  }

  /**
   * Track external links
   * @param {string} url - URL esterno
   * @param {string} linkText - Testo del link
   */
  const trackOutboundLink = (url, linkText = '') => {
    trackEvent('outbound_link', {
      link_url: url,
      link_text: linkText
    })
  }

  /**
   * Track video interactions
   * @param {string} action - play, pause, complete
   * @param {string} videoName - Nome del video
   */
  const trackVideo = (action, videoName) => {
    trackEvent('video_' + action, {
      video_name: videoName
    })
  }

  /**
   * Track form submissions
   * @param {string} formName - Nome del form
   */
  const trackFormSubmit = (formName) => {
    trackEvent('form_submit', {
      form_name: formName
    })
  }

  /**
   * Track downloads
   * @param {string} fileName - Nome del file
   */
  const trackDownload = (fileName) => {
    trackEvent('file_download', {
      file_name: fileName
    })
  }

  /**
   * Track search queries
   * @param {string} query - Query di ricerca
   */
  const trackSearch = (query) => {
    trackEvent('search', {
      search_term: query
    })
  }

  /**
   * Track scroll depth
   * @param {number} percentage - Percentuale di scroll (25, 50, 75, 100)
   */
  const trackScrollDepth = (percentage) => {
    trackEvent('scroll_depth', {
      percent_scrolled: percentage
    })
  }

  /**
   * Track time on page when user leaves
   * @param {string} pagePath - Path della pagina
   * @param {number} timeInSeconds - Tempo in secondi
   */
  const trackTimeOnPage = (pagePath, timeInSeconds) => {
    trackEvent('time_on_page', {
      page_path: pagePath,
      time_seconds: timeInSeconds
    })
  }

  return {
    trackEvent,
    trackPageView,
    trackButtonClick,
    trackOutboundLink,
    trackVideo,
    trackFormSubmit,
    trackDownload,
    trackSearch,
    trackScrollDepth,
    trackTimeOnPage
  }
}

/**
 * Setup scroll depth tracking
 * Tracks when user scrolls to 25%, 50%, 75%, and 100% of the page
 */
export const setupScrollTracking = () => {
  if (typeof window === 'undefined') return

  const scrollDepths = [25, 50, 75, 100]
  const triggered = new Set()

  const { trackScrollDepth } = useAnalytics()

  const handleScroll = () => {
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight
    const scrollTop = window.scrollY
    const scrollPercentage = ((scrollTop + windowHeight) / documentHeight) * 100

    scrollDepths.forEach(depth => {
      if (scrollPercentage >= depth && !triggered.has(depth)) {
        triggered.add(depth)
        trackScrollDepth(depth)
      }
    })
  }

  window.addEventListener('scroll', handleScroll, { passive: true })

  // Cleanup function
  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
}

/**
 * Setup time on page tracking
 * Tracks how long a user stays on a page
 */
export const setupTimeTracking = (pagePath) => {
  if (typeof window === 'undefined') return

  const { trackTimeOnPage } = useAnalytics()
  const startTime = Date.now()

  const sendTimeData = () => {
    const timeInSeconds = Math.round((Date.now() - startTime) / 1000)
    if (timeInSeconds > 0) {
      trackTimeOnPage(pagePath, timeInSeconds)
    }
  }

  // Send data when user leaves the page
  window.addEventListener('beforeunload', sendTimeData)

  // Cleanup function
  return () => {
    sendTimeData()
    window.removeEventListener('beforeunload', sendTimeData)
  }
}
