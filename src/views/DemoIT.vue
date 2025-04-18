<template>
  <div class="demo-page">
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="text-center mb-4">
            <h1 class="display-4 fw-bold text-accent mb-3">Demo Interattiva</h1>
            <p class="lead">
              Scopri Assembly Station in azione con la nostra demo interattiva. Esplora le funzionalità prima dell'acquisto.
            </p>
            <div class="alert alert-info">
              <i class="bi bi-info-circle me-2"></i>
              <strong>Nota:</strong> Assembly Station è in continua evoluzione. La versione demo potrebbe non rappresentare completamente le ultime funzionalità e miglioramenti disponibili nella release attuale.
            </div>
          </div>

          <div class="demo-container mb-5">
            <div v-if="!demoLaunched" class="demo-placeholder">
              <div class="placeholder-content">
                <i class="bi bi-joystick fs-1 mb-3"></i>
                <h3 class="h4">Demo WebGL</h3>
                <p class="mb-4">Prova Assembly Station direttamente nel tuo browser</p>
                <button @click="launchDemo" class="btn btn-primary btn-lg">
                  <span v-if="!isLoading">Avvia Demo</span>
                  <div v-else class="spinner-border spinner-border-sm me-2" role="status">
                    <span class="visually-hidden">Caricamento...</span>
                  </div>
                  <span v-if="isLoading">Caricamento....</span>
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
              <small class="text-muted">Nota: La demo WebGL richiede un browser moderno con supporto WebGL</small>
            </div>
          </div>

          <div class="feature-highlights mb-5">
            <h2 class="text-center mb-4">Caratteristiche Principali</h2>
            <div class="row g-4">
              <div class="col-md-4">
                <div class="feature-card">
                  <div class="feature-icon">
                    <i class="bi bi-collection"></i>
                  </div>
                  <h3 class="h5">Assemblaggio Componenti</h3>
                  <p>Combina e disponi facilmente le parti per creare assemblaggi complessi con funzionalità intuitiva.</p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="feature-card">
                  <div class="feature-icon">
                    <i class="bi bi-palette"></i>
                  </div>
                  <h3 class="h5">Sistema di Risorse</h3>
                  <p>Sistema completo per gestire e organizzare le risorse di assemblaggio in modo efficiente.</p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="feature-card">
                  <div class="feature-icon">
                    <i class="bi bi-arrows-move"></i>
                  </div>
                  <h3 class="h5">Sistema di Posizionamento del Modello</h3>
                  <p>Posiziona e allinea i tuoi modelli con precisione grazie ai nostri strumenti di posizionamento.</p>
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
            <h3 class="text-accent">Cosa Dicono gli Utenti</h3>
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
                        <p class="testimonial-text">"Facile da integrare e perfetto per gestire interazioni modulari, esattamente quello che cercavo."</p>
                        <div class="testimonial-author">
                          <div class="author-name">unity_D6D2A98ECA85AFBEA9CF</div>
                          <div class="author-title">5 giorni fa</div>
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
                        <p class="testimonial-text">"Strumento molto utile, la documentazione è completa e ben strutturata. Basta seguirla passo dopo passo..."</p>
                        <div class="testimonial-author">
                          <div class="author-name">chiaramazzone67</div>
                          <div class="author-title">9 giorni fa</div>
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
                        <p class="testimonial-text">"Un ottimo plugin! L'installazione e l'integrazione sono state molto semplici. La documentazione dell'autore è chiara e logica, perfetta per progetti di costruzione simulata."</p>
                        <div class="testimonial-author">
                          <div class="author-name">moonNightElf</div>
                          <div class="author-title">5 giorni fa</div>
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
                        <p class="testimonial-text">"Sembra ottimo."</p>
                        <div class="testimonial-author">
                          <div class="author-name">Axel_Vorte3x</div>
                          <div class="author-title">un giorno fa</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Precedente</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Successivo</span>
              </button>
              <div class="carousel-indicators position-relative mt-3">
                <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
              </div>
            </div>
          </div>

          <div class="cta-section text-center">
            <h2 class="mb-4">Pronto per Iniziare?</h2>
            <div class="d-flex flex-column flex-md-row justify-content-center gap-3">
              <a href="https://assetstore.unity.com/packages/slug/313569" target="_blank" class="btn btn-primary btn-lg">
                <i class="bi bi-cart-fill me-2"></i>Acquista sull'Asset Store
              </a>
              <RouterLink to="/it/pricing" class="btn btn-outline-primary btn-lg">
                <i class="bi bi-tag-fill me-2"></i>Vedi Prezzi
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
  name: 'DemoIT',
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
  padding-top: 66.25%;
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

.webgl-container {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.primary-demo {
  margin-bottom: 0;
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

</style>
