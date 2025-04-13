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
          </div>

          <!-- WebGL Demo in posizione principale -->
          <div class="card shadow-sm mb-5">
            <div class="card-body p-0">
              <div class="webgl-container primary-demo">
                <div v-if="!demoLaunched" class="webgl-placeholder">
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
                <small class="text-muted">Nota: La demo WebGL richiede un browser moderno con supporto WebGL</small>
              </div>
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
                  <p>Combina e disponi facilmente le parti per creare assemblaggi complessi con funzionalità drag-and-drop intuitiva.</p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="feature-card">
                  <div class="feature-icon">
                    <i class="bi bi-palette"></i>
                  </div>
                  <h3 class="h5">Materiali Personalizzati</h3>
                  <p>Applica e personalizza materiali ai tuoi componenti con una vasta libreria di texture e impostazioni.</p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="feature-card">
                  <div class="feature-icon">
                    <i class="bi bi-arrows-move"></i>
                  </div>
                  <h3 class="h5">Sistema di Animazione</h3>
                  <p>Crea animazioni fluide per i tuoi assemblaggi con i nostri strumenti di animazione potenti ma facili da usare.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="testimonials-section mb-5">
            <h2 class="text-center mb-4">Cosa Dicono gli Utenti</h2>
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
                  <p class="testimonial-text">"Assembly Station ha completamente trasformato il modo in cui costruisco e mostro modelli 3D interattivi nei miei progetti Unity. Vale ogni centesimo!"</p>
                  <div class="testimonial-author">
                    <div class="author-name">Michele R.</div>
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
                  <p class="testimonial-text">"L'interfaccia intuitiva ha reso facile creare istruzioni di montaggio complesse per il nostro manuale di prodotto. Il supporto clienti è eccellente!"</p>
                  <div class="testimonial-author">
                    <div class="author-name">Sara G.</div>
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
                  <p class="testimonial-text">"Come strumento educativo, Assembly Station è stato prezioso per creare esperienze di apprendimento interattive per i nostri studenti di ingegneria."</p>
                  <div class="testimonial-author">
                    <div class="author-name">Prof. Davide L.</div>
                    <div class="author-title">Docente Universitario</div>
                  </div>
                </div>
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
      demoUrl: 'https://assembly-station.example.com/webgl-demo'
    };
  },
  methods: {
    launchDemo() {
      this.isLoading = true;
      
      // Simulazione caricamento demo
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

.webgl-container {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.primary-demo {
  margin-bottom: 0;
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

/* Spinner personalizzato per il pulsante di caricamento */
.spinner-border {
  width: 1rem;
  height: 1rem;
  border-width: 0.15em;
}
</style>
