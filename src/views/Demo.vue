<template>
  <div class="demo-page">
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="text-center mb-4">
            <h1 class="display-4 fw-bold text-accent mb-3">{{ $t('demo.title') }}</h1>
            <p class="lead">
              {{ $t('demo.lead') }}
            </p>
            <div class="alert alert-info">
              <i class="bi bi-info-circle me-2"></i>
              <strong>{{ $t('demo.noteLabel') }}</strong> {{ $t('demo.noteText') }}
            </div>
          </div>

          <div class="demo-container mb-5">
            <div class="demo-container-full">
            <div class="demo-click-notice alert alert-warning d-flex align-items-center mb-0" role="alert">
              <i class="bi bi-mouse-fill me-2 flex-shrink-0"></i>
              <span><strong>{{ $t('demo.clickNoticeStrong') }}</strong> {{ $t('demo.clickNoticeText') }}</span>
            </div>
            <div class="demo-frame-container">
              <div id="unity-container" class="unity-desktop">
                <canvas
                  id="unity-canvas"
                  width="1915"
                  height="825"
                  tabindex="-1"
                  class="unity-canvas">
                </canvas>
                <iframe
                  ref="demoFrame"
                  class="demo-frame unity-iframe"
                  :src="demoUrl"
                  title="Assembly Station WebGL Demo"
                  allow="pointer-lock; autoplay; fullscreen">
                </iframe>
              </div>
            </div>
            </div>
            <div class="text-center py-2">
              <small class="text-muted">{{ $t('demo.webglNote') }}</small>
            </div>
          </div>

          <div class="feature-highlights mb-5">
            <h2 class="text-center mb-4">{{ $t('demo.featureHighlights') }}</h2>
            <div class="row g-4">
              <div class="col-md-4">
                <div class="feature-card">
                  <div class="feature-icon">
                    <i class="bi bi-collection"></i>
                  </div>
                  <h3 class="h5">{{ $t('demo.feat1Title') }}</h3>
                  <p>{{ $t('demo.feat1Desc') }}</p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="feature-card">
                  <div class="feature-icon">
                    <i class="bi bi-palette"></i>
                  </div>
                  <h3 class="h5">{{ $t('demo.feat2Title') }}</h3>
                  <p>{{ $t('demo.feat2Desc') }}</p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="feature-card">
                  <div class="feature-icon">
                    <i class="bi bi-arrows-move"></i>
                  </div>
                  <h3 class="h5">{{ $t('demo.feat3Title') }}</h3>
                  <p>{{ $t('demo.feat3Desc') }}</p>
                </div>
              </div>
            </div>
          </div>

   <div class="assembly-logo-section py-5 text-center">
            <div class="d-flex align-items-center justify-content-center mb-4">
              <div class="divider-line"></div>
              <div class="logo-container mx-4">
                <img src="/images/logo.png" alt="Assembly Station Logo" class="assembly-logo" onerror="this.onerror=null; this.src='/images/assembly-icon.png'">
              </div>
              <div class="divider-line"></div>
            </div>
            <h3 class="text-accent">{{ $t('demo.whatUsersSay') }}</h3>
          </div>

          <div class="testimonials-section mb-5">
            <div id="testimonialCarousel" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="row g-4">
                    <div class="col-md-6">
                      <div class="testimonial-card h-100">
                        <div class="testimonial-rating">
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                        </div>
                        <p class="testimonial-text">{{ $t('demo.testimonial1') }}</p>
                        <div class="testimonial-author">
                          <div class="author-name">unity_D6D2A98ECA85AFBEA9CF</div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="testimonial-card h-100">
                        <div class="testimonial-rating">
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                        </div>
                        <p class="testimonial-text">{{ $t('demo.testimonial2') }}</p>
                        <div class="testimonial-author">
                          <div class="author-name">chiaramazzone67</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row g-4">
                    <div class="col-md-6">
                      <div class="testimonial-card h-100">
                        <div class="testimonial-rating">
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                        </div>
                        <p class="testimonial-text">{{ $t('demo.testimonial3') }}</p>
                        <div class="testimonial-author">
                          <div class="author-name">moonNightElf</div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="testimonial-card h-100">
                        <div class="testimonial-rating">
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                        </div>
                        <p class="testimonial-text">{{ $t('demo.testimonial4') }}</p>
                        <div class="testimonial-author">
                          <div class="author-name">Axel_Vorte3x</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">{{ $t('demo.previous') }}</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">{{ $t('demo.next') }}</span>
              </button>
              <div class="carousel-indicators position-relative mt-3">
                <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
              </div>
            </div>
          </div>

          <div class="cta-section text-center">
            <h2 class="mb-4">{{ $t('demo.ctaTitle') }}</h2>
            <div class="d-flex flex-column flex-md-row justify-content-center gap-3">
              <a href="https://assetstore.unity.com/packages/slug/313569" target="_blank" class="btn btn-primary btn-lg">
                <i class="bi bi-cart-fill me-2"></i>{{ $t('demo.purchaseBtn') }}
              </a>
              <RouterLink :to="localePath('/pricing')" class="btn btn-outline-primary btn-lg">
                <i class="bi bi-tag-fill me-2"></i>{{ $t('demo.viewPricing') }}
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useSEO } from '@/composables/useSEO.js'
import { useLocalePath } from '@/composables/useLocalePath.js'
import { useI18n } from 'vue-i18n'

export default {
  name: 'Demo',
  setup() {
    const { locale, t } = useI18n()
    const { localePath } = useLocalePath()
    useSEO({
      title: t('demo.seoTitle'),
      description: t('demo.seoDescription'),
      keywords: t('demo.seoKeywords'),
      url: t('demo.seoUrl'),
      locale: locale.value === 'it' ? 'it_IT' : undefined
    })
    return { localePath, locale }
  },
  data() {
    return {
      demoUrl: '/Build-Assembly2/index.html',
    };
  },
  mounted() {
    setTimeout(() => {
      if (typeof bootstrap !== 'undefined') {
        new bootstrap.Carousel(document.getElementById('testimonialCarousel'), {
          interval: 5000,
          touch: true
        });
      }
    }, 500);
  }
}
</script>

<style scoped>
.demo-page {
  padding-top: 60px;
  padding-bottom: 50px;
}

.text-accent {
  color: #00A3FF;
}

.primary-demo {
  margin-bottom: 0;
}

.demo-container-full {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

.demo-click-notice {
  border: 2px solid #ffc107;
  border-radius: 8px;
  font-size: 1rem;
  box-shadow: 0 2px 8px rgba(255, 193, 7, 0.25);
}

.demo-placeholder {
  background-color: #f5f5f5;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555;
  border-radius: 8px;
}

.demo-frame-container {
  position: relative;
  width: 100%;
  min-height: 70vh;
  padding-top: 56.25%; /* 16:9 */
}

.placeholder-content {
  text-align: center;
  padding: 20px;
}

#unity-container.unity-desktop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

#unity-canvas.unity-canvas {
  width: 100%;
  height: 600px;
  display: none;
  cursor: default;
}

.demo-frame.unity-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  z-index: 1;
}

.demo-frame {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

.feature-card {
  background-color: #fff;
  border-radius: 10px;
  padding: 25px 20px;
  height: 100%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #E6F7FF;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 15px;
  font-size: 24px;
  color: #00A3FF;
}

.testimonial-card {
  background-color: #fff;
  border-radius: 10px;
  padding: 25px;
  height: 100%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
}

.testimonial-rating {
  color: #FFD700;
  margin-bottom: 15px;
}

.testimonial-text {
  font-style: italic;
  margin-bottom: 15px;
  flex-grow: 1;
}

.testimonial-author {
  margin-top: auto;
}

.author-name {
  font-weight: 600;
  color: #333;
}

.author-title {
  font-size: 0.9rem;
  color: #777;
}

.cta-section {
  margin-top: 60px;
  padding: 40px;
  background-color: #f8f9fa;
  border-radius: 10px;
}

.spinner-border {
  width: 1rem;
  height: 1rem;
  border-width: 0.15em;
}

.interactive-benefits {
  background-color: #f8f9fa;
  border-radius: 12px;
  padding: 30px 0;
}

.benefit-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto;
  background-color: #E6F7FF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: #00A3FF;
}

.animated-icon {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
}

.carousel-item {
  padding: 20px 40px;
}

.carousel-control-prev,
.carousel-control-next {
  width: 5%;
  filter: invert(60%);
}

.carousel-indicators [data-bs-target] {
  background-color: #00A3FF;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 5px;
}

.testimonial-card {
  padding: 30px;
  text-align: center;
}

.assembly-logo-section {
  overflow: hidden;
}

.divider-line {
  flex-grow: 1;
  height: 2px;
  background-color: #e0e0e0;
  max-width: 200px;
}

.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.assembly-logo {
  width: 120px;
  height: auto;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}

.carousel-item .row {
  margin: 0 20px;
}
</style>
