<template>
  <div class="beta-page">
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="text-center mb-5">
            <div class="beta-tag mb-3">
              <span class="badge bg-primary">BETA</span>
            </div>
            <h1 class="display-4 fw-bold text-accent mb-3">Funzionalità in Arrivo</h1>
            <p class="lead mb-0">
              Scopri in anteprima le funzionalità che sto sviluppando per Assembly Station.
            </p>
          </div>

          <div class="feature-card card shadow-sm mb-5">
            <div class="card-body p-4">
              <div class="feature-header">
                <h2 class="text-accent">Posizionamento Dinamico dei Componenti</h2>
                <span class="feature-status">Prossimamente</span>
              </div>
              
              <p class="feature-description my-4">
                Il mio nuovo sistema di posizionamento ti offre il controllo completo su ogni elemento del prefab prima dell'assemblaggio.
                Puoi posizionare con precisione i componenti per creare istruzioni di assemblaggio più realistiche e intuitive.
              </p>
              
              <div class="video-container">
                <iframe 
                  src="https://drive.google.com/file/d/1YF29J93wM3DmPy-914aPn-398EcA3ARS/preview" 
                  class="feature-video"
                  allowfullscreen
                  allow="autoplay; encrypted-media"
                  loading="lazy"
                  frameborder="0">
                </iframe>
              </div>
              
              <div class="feature-details mt-4">
                <h3>Come Utilizzare Questa Funzionalità:</h3>
                <ol class="feature-steps">
                  <li>Seleziona il componente prefab che desideri riposizionare</li>
                  <li>Entra nella modalità di posizionamento tramite l'inspector del componente</li>
                  <li>Utilizza i controlli di trasformazione per regolare posizione e rotazione</li>
                  <li>Salva il tuo posizionamento personalizzato per futuri assemblaggi</li>
                </ol>
                
                <div class="key-benefits mt-4">
                  <h3>Vantaggi Principali:</h3>
                  <ul>
                    <li>Controllo preciso sulla posizione di ogni componente nei tuoi assemblaggi</li>
                    <li>Feedback visivo in tempo reale durante il posizionamento</li>
                    <li>Crea sequenze di assemblaggio più intuitive con relazioni spaziali corrette</li>
                    <li>Semplifica il flusso di lavoro per assemblaggi complessi multi-componente</li>
                    <li>Si integra perfettamente con le strutture prefab esistenti</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div class="feature-card card shadow-sm mb-5">
            <div class="card-body p-4">
              <div class="feature-header">
                <h2 class="text-accent">Sistema di assemblaggio avanzato</h2>
                <span class="feature-status">In sviluppo</span>
              </div>
              
             
              
              <div class="video-container">
                <iframe 
                  src="https://drive.google.com/file/d/1haI-m_cCx8AtOvMH-DARPRD6jkPmz588/preview" 
                  class="feature-video"
                  allowfullscreen
                  allow="autoplay; encrypted-media"
                  loading="lazy"
                  frameborder="0">
                </iframe>
              </div>
            </div>
          </div>
          
          <div class="feedback-section text-center mt-5">
            <h3><i class="bi bi-chat-left-text me-2"></i>Il tuo feedback modella queste funzionalità</h3>
            <p class="mb-4">Hai suggerimenti su cosa vorresti vedere in Assembly Station?</p>
            <div class="d-flex justify-content-center gap-3">
              <a href="https://discord.gg/9wJSxtUX2W" target="_blank" class="btn btn-primary">
                <i class="bi bi-discord me-2"></i>Unisciti alla Comunità Discord
              </a>
              <RouterLink to="/it/report-bug#bug" class="btn btn-outline-primary">
                <i class="bi bi-bug me-2"></i>Invia Richiesta di Funzionalità
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
  name: 'BetaIT'
}
</script>

<style scoped>
.beta-page {
  padding-top: 80px;
  padding-bottom: 60px;
}

.text-accent {
  color: #00A3FF;
}

.beta-tag .badge {
  font-size: 1rem;
  padding: 8px 16px;
  border-radius: 20px;
  letter-spacing: 1px;
  background-color: #00A3FF !important;
  box-shadow: 0 5px 15px rgba(0, 163, 255, 0.3);
}

.feature-card {
  border-radius: 12px;
  overflow: hidden;
  border: none;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08) !important;
  margin-bottom: 30px;
}

.feature-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.feature-status {
  background-color: #fff3cd;
  color: #856404;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.feature-description {
  font-size: 1.1rem;
  color: #495057;
  line-height: 1.6;
}

.video-container {
  margin: 2rem 0;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.feature-video {
  width: 100%;
  height: 500px;
  display: block;
}

.feature-details {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
}

.feature-details h3 {
  color: #00A3FF;
  font-size: 1.25rem;
  margin-bottom: 15px;
  font-weight: 600;
}

.feature-steps li, .key-benefits li {
  margin-bottom: 10px;
}

.feedback-section h3 {
  color: #333;
  font-weight: 600;
}

@media (max-width: 767px) {
  .feature-video {
    height: 300px;
  }
  
  .feature-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
}
</style>
