<template>
  <div class="not-found-page">
    <div class="container">
      <div class="row justify-content-center align-items-center min-vh-100">
        <div class="col-lg-6 text-center">
          <div class="error-content">
            <div class="error-number">404</div>
            <h1 class="error-title">Page Not Found</h1>
            <p class="error-description">
              Sorry, the page you are looking for does not exist or has been moved.
            </p>
            <div class="error-actions">
              <router-link to="/" class="btn btn-primary btn-lg me-3">
                <i class="bi bi-house-door me-2"></i>
                Go to Homepage
              </router-link>
              <router-link to="/docs" class="btn btn-outline-primary btn-lg">
                <i class="bi bi-book me-2"></i>
                Documentation
              </router-link>
            </div>
            
            <div class="helpful-links mt-5">
              <h5>You might be looking for:</h5>
              <div class="quick-links">
                <router-link to="/tutorials" class="quick-link">
                  <i class="bi bi-play-circle"></i>
                  Tutorials
                </router-link>
                <router-link to="/pricing" class="quick-link">
                  <i class="bi bi-tag"></i>
                  Pricing
                </router-link>
                <router-link to="/contacts" class="quick-link">
                  <i class="bi bi-envelope"></i>
                  Contact
                </router-link>
                <router-link to="/docs" class="quick-link">
                  <i class="bi bi-book"></i>
                  Documentation
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Animated background -->
    <div class="animated-bg">
      <div class="bg-shape shape-1"></div>
      <div class="bg-shape shape-2"></div>
      <div class="bg-shape shape-3"></div>
    </div>
  </div>
</template>

<script>
import { useSEO } from '@/composables/useSEO.js'

export default {
  name: 'NotFound',
  setup() {
    // SEO configuration for 404 page
    useSEO({
      title: '404 - Page Not Found | Assembly Station',
      description: 'The page you are looking for does not exist. Return to Assembly Station homepage or explore our documentation.',
      url: typeof window !== 'undefined' ? window.location.href : 'https://www.assembly-station.com/',
      robots: 'noindex, nofollow'
    })
  }
}
</script>

<style scoped>
.not-found-page {
  position: relative;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  overflow: hidden;
}

.container {
  position: relative;
  z-index: 2;
}

.error-content {
  color: white;
  padding: 2rem;
}

.error-number {
  font-size: 10rem;
  font-weight: 900;
  line-height: 1;
  color: rgba(255, 255, 255, 0.2);
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  margin-bottom: 1rem;
  animation: pulse 2s ease-in-out infinite;
}

.error-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: white;
}

.error-description {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.error-actions {
  margin-bottom: 3rem;
}

.btn-primary {
  background: white;
  color: #667eea;
  border: none;
  padding: 0.75rem 2rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  background: #f8f9fa;
  color: #667eea;
}

.btn-outline-primary {
  border: 2px solid white;
  color: white;
  padding: 0.75rem 2rem;
  font-weight: 600;
  background: transparent;
  transition: all 0.3s ease;
}

.btn-outline-primary:hover {
  background: white;
  color: #667eea;
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.helpful-links {
  margin-top: 3rem;
}

.helpful-links h5 {
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.quick-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.quick-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.quick-link:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
  color: white;
}

.quick-link i {
  font-size: 1.25rem;
}

/* Animated background */
.animated-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
}

.bg-shape {
  position: absolute;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  animation: float 20s ease-in-out infinite;
}

.shape-1 {
  width: 300px;
  height: 300px;
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 200px;
  height: 200px;
  top: 60%;
  right: 10%;
  animation-delay: 5s;
}

.shape-3 {
  width: 250px;
  height: 250px;
  bottom: 10%;
  left: 50%;
  animation-delay: 10s;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .error-number {
    font-size: 6rem;
  }

  .error-title {
    font-size: 2rem;
  }

  .error-description {
    font-size: 1rem;
  }

  .error-actions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .error-actions .btn {
    width: 100%;
    margin: 0 !important;
  }

  .quick-links {
    flex-direction: column;
  }

  .quick-link {
    width: 100%;
    justify-content: center;
  }
}
</style>
