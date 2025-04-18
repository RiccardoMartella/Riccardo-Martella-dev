<template>
  <div class="demo-page">
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="text-center mb-4">
            <h1 class="display-4 fw-bold text-accent mb-3">Interactive Demo</h1>
            <p class="lead">
              Experience Assembly Station in action with our interactive demo. Explore the features and functionality before making your purchase.
            </p>
          </div>

          <div class="demo-container mb-5">
            <div v-if="!demoLaunched" class="demo-placeholder">
              <div class="placeholder-content">
                <i class="bi bi-joystick fs-1 mb-3"></i>
                <h3 class="h4">WebGL Demo</h3>
                <p class="mb-4">Experience Assembly Station directly in your browser</p>
                <button @click="launchDemo" class="btn btn-primary btn-lg">
                  <span v-if="!isLoading">Launch Demo</span>
                  <div v-else class="spinner-border spinner-border-sm me-2" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  <span v-if="isLoading">Loading....</span>
                </button>
              </div>
            </div>
            <div v-else class="demo-frame-container">
              <iframe 
                ref="demoFrame"
                class="demo-frame" 
                :src="demoUrl" 
                title="Assembly Station WebGL Demo" 
                allow="fullscreen">
              </iframe>
            </div>
            <div class="text-center py-2">
              <small class="text-muted">Note: WebGL demo requires a modern browser with WebGL support</small>
            </div>
          </div>

          <div class="feature-highlights mb-5">
            <h2 class="text-center mb-4">Feature Highlights</h2>
            <div class="row g-4">
              <div class="col-md-4">
                <div class="feature-card">
                  <div class="feature-icon">
                    <i class="bi bi-collection"></i>
                  </div>
                  <h3 class="h5">Component Assembly</h3>
                  <p>Easily combine and arrange parts to create complex assemblies with intuitive functionality.</p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="feature-card">
                  <div class="feature-icon">
                    <i class="bi bi-palette"></i>
                  </div>
                  <h3 class="h5">Resource System</h3>
                  <p>Comprehensive system for managing and organizing your assembly resources efficiently.</p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="feature-card">
                  <div class="feature-icon">
                    <i class="bi bi-arrows-move"></i>
                  </div>
                  <h3 class="h5">Model Positioning System</h3>
                  <p>Position and align your models precisely with our positioning tools.</p>
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
            <h3 class="text-accent">What Users Say</h3>
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
                        <p class="testimonial-text">"Super easy to integrate and perfect for handling modular interactions exactly what I was looking for."</p>
                        <div class="testimonial-author">
                          <div class="author-name">unity_D6D2A98ECA85AFBEA9CF</div>
                          <div class="author-title">5 days ago</div>
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
                        <p class="testimonial-text">"Very useful tool, the documentation seems complete and well structured. Just follow it step by step..."</p>
                        <div class="testimonial-author">
                          <div class="author-name">chiaramazzone67</div>
                          <div class="author-title">9 days ago</div>
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
                        <p class="testimonial-text">"A great plugin! The installation and integration went very smoothly. The author's documentation is clear and logical, perfect for simulation construction projects."</p>
                        <div class="testimonial-author">
                          <div class="author-name">moonNightElf</div>
                          <div class="author-title">5 days ago</div>
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
                        <p class="testimonial-text">"Looks good."</p>
                        <div class="testimonial-author">
                          <div class="author-name">Axel_Vorte3x</div>
                          <div class="author-title">a day ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
              <div class="carousel-indicators position-relative mt-3">
                <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
              </div>
            </div>
          </div>

          <div class="cta-section text-center">
            <h2 class="mb-4">Ready to Get Started?</h2>
            <div class="d-flex flex-column flex-md-row justify-content-center gap-3">
              <a href="https://assetstore.unity.com/packages/slug/313569" target="_blank" class="btn btn-primary btn-lg">
                <i class="bi bi-cart-fill me-2"></i>Purchase on Asset Store
              </a>
              <RouterLink to="/pricing" class="btn btn-outline-primary btn-lg">
                <i class="bi bi-tag-fill me-2"></i>View Pricing
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data() {
    return {
      demoLaunched: false,
      isLoading: false,
      demoUrl: '/Build-Assembly2/index.html',
    };
  },
  methods: {
    launchDemo() {
      this.isLoading = true;
      
      // Simulate demo loading
      setTimeout(() => {
        this.demoLaunched = true;
        this.isLoading = false;
      }, 1500);
    }
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

.demo-container {
  width: 100%;
  position: relative;
}

.demo-placeholder {
  background-color: #f5f5f5;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555;
  border-radius: 8px;
}

.placeholder-content {
  text-align: center;
  padding: 20px;
}

.demo-frame-container {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* Changed from 66.25% to 56.25% for 16:9 aspect ratio */
  border-radius: 8px;
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
  filter: invert(100%);
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

.carousel-control-prev,
.carousel-control-next {
  width: 5%;
  filter: invert(60%);
}
</style>
