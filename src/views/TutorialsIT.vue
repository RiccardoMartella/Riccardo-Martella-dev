<template>
  <div class="tutorials-page">
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="text-center mb-5">
            <h1 class="display-4 fw-bold text-accent mb-4" id="#tutorials">Video Tutorial</h1>
            <p class="lead">
              Impara a utilizzare Assembly Station con questi video tutorial passo-passo che coprono tutto, dalla creazione di prefab alla gestione delle risorse.
            </p>
          </div>
          
          <div class="tutorial-list">
            <!-- Tutorial 1 -->
            <div class="tutorial-card card shadow-sm mb-5">
              <div class="card-body p-4">
                <h3 class="tutorial-title">Creazione Prefab</h3>
                <p class="tutorial-description">
                  In questo video vedremo come realizzare un prefab, impostare il pivot correttamente, aggiungere i materiali, le descrizioni, i nomi e altre proprietà essenziali.
                </p>
                <div class="video-container">
                  <iframe 
                    src="https://drive.google.com/file/d/1t0yPtYlvrkfJlOYvIYyehjkBX8YPr8RT/preview" 
                    class="tutorial-video"
                    allowfullscreen
                    allow="autoplay; encrypted-media"
                    loading="lazy"
                    frameborder="0">
                  </iframe>
                  <p class="video-caption">Tutorial: Creazione e configurazione dei Prefab</p>
                </div>
              </div>
            </div>
            
            <!-- Tutorial 2 -->
            <div class="tutorial-card card shadow-sm mb-5">
              <div class="card-body p-4">
                <h3 class="tutorial-title">Pulsanti e Categorie</h3>
                <p class="tutorial-description">
                  In questo video gestiremo la creazione dei pulsanti categorie per ogni prefab per organizzare il tuo sistema di assemblaggio.
                </p>
                <div class="video-container">
                  <iframe 
                    src="https://drive.google.com/file/d/1Vb5NODQTgTIJHTVWuC0YTX9VCRuIWRns/preview" 
                    class="tutorial-video"
                    allowfullscreen
                    allow="autoplay; encrypted-media"
                    loading="lazy"
                    frameborder="0">
                  </iframe>
                  <p class="video-caption">Tutorial: Creazione di pulsanti di categoria per i Prefab</p>
                </div>
              </div>
            </div>
            
            <!-- Tutorial 3 -->
            <div class="tutorial-card card shadow-sm mb-5">
              <div class="card-body p-4">
                <h3 class="tutorial-title">Gestione Tag</h3>
                <p class="tutorial-description">
                  In questo video gestiremo la creazione dei tag per ogni pezzo per migliorare l'organizzazione e il filtraggio.
                </p>
                <div class="video-container">
                  <iframe 
                    src="https://drive.google.com/file/d/1D--fIEBwIC--DzzeFx3Uy_N6_38EZ2Zr/preview" 
                    class="tutorial-video"
                    allowfullscreen
                    allow="autoplay; encrypted-media"
                    loading="lazy"
                    frameborder="0">
                  </iframe>
                  <p class="video-caption">Tutorial: Creazione e gestione dei tag per i componenti</p>
                </div>
              </div>
            </div>
            
            <!-- Tutorial 4 -->
            <div class="tutorial-card card shadow-sm mb-5">
              <div class="card-body p-4">
                <h3 class="tutorial-title">Panoramica del Sistema</h3>
                <p class="tutorial-description">
                  In questo video mostrerò il funzionamento di Assembly Station e come gli utenti possono interagire con esso per costruire i loro modelli.
                </p>
                <div class="video-container">
                  <iframe 
                    src="https://drive.google.com/file/d/1AFBJwb4sd8jelOKJVN0Jp9z2i-WFm5OU/preview" 
                    class="tutorial-video"
                    allowfullscreen
                    allow="autoplay; encrypted-media"
                    loading="lazy"
                    frameborder="0">
                  </iframe>
                  <p class="video-caption">Tutorial: Utilizzo del sistema di assemblaggio</p>
                </div>
              </div>
            </div>
            
            <!-- Tutorial 5 -->
            <div class="tutorial-card card shadow-sm mb-5">
              <div class="card-body p-4">
                <h3 class="tutorial-title">Gruppi di Componenti</h3>
                <p class="tutorial-description">
                  In questo video gestiremo i gruppi per ogni pezzo, consentendo una migliore organizzazione e strutture più complesse.
                </p>
                <div class="video-container">
                  <iframe 
                    src="https://drive.google.com/file/d/19XYVbMKDHW4XBbSPeDh2MwLr7VV-oXxR/preview" 
                    class="tutorial-video"
                    allowfullscreen
                    allow="autoplay; encrypted-media"
                    loading="lazy"
                    frameborder="0">
                  </iframe>
                  <p class="video-caption">Tutorial: Gestione dei gruppi di componenti</p>
                </div>
              </div>
            </div>
            
            <!-- Tutorial 6 -->
            <div class="tutorial-card card shadow-sm mb-5">
              <div class="card-body p-4">
                <h3 class="tutorial-title">Gestione Risorse</h3>
                <p class="tutorial-description">
                  In questo video gestiremo le risorse di ogni pezzo nel tuo progetto Assembly Station.
                </p>
                <div class="video-container">
                  <iframe 
                    src="https://drive.google.com/file/d/1LSGC7qj9QBW04vayXZTv0j-pfxTfinXM/preview" 
                    class="tutorial-video"
                    allowfullscreen
                    allow="autoplay; encrypted-media"
                    loading="lazy"
                    frameborder="0">
                  </iframe>
                  <p class="video-caption">Tutorial: Gestione delle risorse per i componenti</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="card bg-light shadow-sm mb-5">
            <div class="card-body p-4">
              <h4 class="mb-3"><i class="bi bi-lightbulb-fill text-warning me-2"></i>Risorse Aggiuntive</h4>
              <p>Hai bisogno di più aiuto? Consulta queste risorse:</p>
              <div class="row">
                <div class="col-md-4 mb-2">
                  <RouterLink to="/it/docs/installation" class="btn btn-outline-primary w-100">
                    <i class="bi bi-book me-2"></i>Documentazione
                  </RouterLink>
                </div>
                <div class="col-md-4 mb-2">
                  <RouterLink to="/it/report-bug#bug" class="btn btn-outline-primary w-100">
                    <i class="bi bi-bug me-2"></i>Segnala Problemi
                  </RouterLink>
                </div>
                <div class="col-md-4 mb-2">
                  <a href="https://discord.gg/9wJSxtUX2W" target="_blank" class="btn btn-outline-primary w-100">
                    <i class="bi bi-discord me-2"></i>Unisciti a Discord
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TutorialsIT'
}
</script>

<style scoped>
.tutorials-page {
  padding-top: 80px;
  padding-bottom: 50px;
}

.text-accent {
  color: #00A3FF;
}

.tutorial-card {
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.tutorial-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
}

.tutorial-title {
  color: #333;
  font-weight: 600;
  margin-bottom: 15px;
  position: relative;
  padding-bottom: 10px;
}

.tutorial-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background-color: #00A3FF;
}

.tutorial-description {
  color: #555;
  margin-bottom: 20px;
  font-size: 1.1rem;
}

.btn-outline-primary {
  color: #00A3FF;
  border-color: #00A3FF;
}

.btn-outline-primary:hover {
  background-color: #00A3FF;
  color: white;
}

.video-container {
  width: 100%;
  margin: 1.5rem 0;
}

.tutorial-video {
  width: 100%;
  height: 600px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  background: #000;
}

.video-caption {
  text-align: center;
  font-style: italic;
  color: #666;
  margin-top: 10px;
  font-size: 0.9rem;
}
</style>
