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

          <!-- WebGL Demo in posizione principale -->
          <div class="card shadow-sm mb-5">
            <div class="card-body p-0">
              <div class="webgl-container primary-demo">
                <div v-if="!demoLaunched" class="webgl-placeholder">
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
                <div v-else class="webgl-demo-container">
                  <iframe 
                    ref="demoFrame"
                    class="webgl-demo" 
                    :src="demoUrl" 
                    title="Assembly Station WebGL Demo" 
                    allowfullscreen
                    allow="fullscreen">
                  </iframe>
                </div>
              </div>
              <div class="text-center py-2">
                <small class="text-muted">Note: WebGL demo requires a modern browser with WebGL support</small>
              </div>
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
                  <p>Easily combine and arrange parts to create complex assemblies with intuitive drag-and-drop functionality.</p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="feature-card">
                  <div class="feature-icon">
                    <i class="bi bi-palette"></i>
                  </div>
                  <h3 class="h5">Custom Materials</h3>
                  <p>Apply and customize materials to your components with a comprehensive library of textures and settings.</p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="feature-card">
                  <div class="feature-icon">
                    <i class="bi bi-arrows-move"></i>
                  </div>
                  <h3 class="h5">Animation System</h3>
                  <p>Create smooth animations for your assemblies with our powerful yet easy-to-use animation tools.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="testimonials-section mb-5">
            <h2 class="text-center mb-4">What Users Are Saying</h2>
            <div class="row g-4">
              <div class="col-lg-4">
                <div class="testimonial-card">
                  <div class="testimonial-rating">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                  </div>
                  <p class="testimonial-text">"Assembly Station has completely transformed how I build and showcase interactive 3D models in my Unity projects. Worth every penny!"</p>
                  <div class="testimonial-author">
                    <div class="author-name">Michael R.</div>
                    <div class="author-title">Game Developer</div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="testimonial-card">
                  <div class="testimonial-rating">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-half"></i>
                  </div>
                  <p class="testimonial-text">"The intuitive interface made it easy to create complex assembly instructions for our product manual. Customer support is excellent!"</p>
                  <div class="testimonial-author">
                    <div class="author-name">Sarah J.</div>
                    <div class="author-title">Product Designer</div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="testimonial-card">
                  <div class="testimonial-rating">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                  </div>
                  <p class="testimonial-text">"As an educational tool, Assembly Station has been invaluable for creating interactive learning experiences for our engineering students."</p>
                  <div class="testimonial-author">
                    <div class="author-name">Prof. David L.</div>
                    <div class="author-title">University Educator</div>
                  </div>
                </div>
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
      demoUrl: 'https://assembly-station.example.com/webgl-demo'
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

.webgl-container {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.webgl-placeholder {
  background-color: #f5f5f5;
  min-height: 500px; /* Placeholder più grande per la demo principale */
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555;
}

.placeholder-content {
  text-align: center;
  padding: 20px;
}

.webgl-demo-container {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  overflow: hidden;
}

.webgl-demo {
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

/* Custom spinner for loading button */
.spinner-border {
  width: 1rem;
  height: 1rem;
  border-width: 0.15em;
}
</style>
