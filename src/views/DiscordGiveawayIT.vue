<template>
  <div class="giveaway-page">
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="text-center mb-5">
            <h1 class="display-4 fw-bold text-accent mb-4">Chiavi Gratuite per Unity Asset</h1>
            <p class="lead">
              Unisciti al nostro server Discord e ricevi una chiave gratuita per Assembly Station!
            </p>
          </div>

          <div class="card shadow-lg mb-5 border-primary">
            <div class="card-header bg-primary text-white">
              <h2 class="h4 mb-0">Offerta a Tempo Limitato</h2>
            </div>
            <div class="card-body p-4">
              <div class="alert alert-warning mb-4">
                <strong><i class="bi bi-exclamation-triangle me-2"></i> Disponibilità limitata:</strong> 
                Solo 2 chiavi gratuite rimanenti! Ottieni la tua prima che finiscano.
              </div>
              
              <div class="text-center mb-4">
                <i class="bi bi-discord"></i>
                <h3 class="h3 mb-3">Come Ottenere la Tua Chiave Gratuita</h3>
              </div>

              <div class="steps-container">
                <div class="step-item">
                  <div class="step-number">1</div>
                  <div class="step-content">
                    <h4 class="h5">Unisciti al Nostro Server Discord</h4>
                    <p>Clicca sul pulsante qui sotto per unirti al nostro server Discord.</p>
                    <a href="https://discord.gg/9wJSxtUX2W" target="_blank" rel="noopener noreferrer" class="btn btn-discord mb-3">
                      <i class="bi bi-discord me-2"></i> Unisciti al Server Discord
                    </a>
                  </div>
                </div>

                <div class="step-item">
                  <div class="step-number">2</div>
                  <div class="step-content">
                    <h4 class="h5">Invia un Messaggio all'Admin</h4>
                    <p>Una volta entrato, invia un messaggio privato all'amministratore del server per richiedere la tua chiave gratuita.</p>
                    <div class="alert alert-info">
                      <i class="bi bi-info-circle me-2"></i> 
                      Formato del messaggio: "Ciao! Sono qui per la chiave gratuita di Assembly Station."
                    </div>
                  </div>
                </div>

                <div class="step-item">
                  <div class="step-number">3</div>
                  <div class="step-content">
                    <h4 class="h5">Ricevi la Tua Chiave</h4>
                    <p>L'amministratore ti risponderà con la tua chiave di prodotto unica che potrai utilizzare per scaricare e attivare l'asset.</p>
                  </div>
                </div>
              </div>
              
              <div class="asset-features-section mt-4">
                <div class="row">
                  <div class="col-md-6">
                    <h4 class="text-center mb-3">Caratteristiche dell'Asset</h4>
                    <div class="feature-list">
                      <div class="feature-item">
                        <i class="bi bi-check-circle-fill text-success"></i>
                        <span>Facile integrazione</span>
                      </div>
                      <div class="feature-item">
                        <i class="bi bi-check-circle-fill text-success"></i>
                        <span>Documentazione dettagliata</span>
                      </div>
                      <div class="feature-item">
                        <i class="bi bi-check-circle-fill text-success"></i>
                        <span>Aggiornamenti regolari</span>
                      </div>
                      <div class="feature-item">
                        <i class="bi bi-check-circle-fill text-success"></i>
                        <span>Supporto tecnico</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 d-flex align-items-center justify-content-center">
                    <div class="asset-preview text-center">
                      <img src="/images/asset-preview.png" alt="Anteprima dell'Asset" class="img-fluid rounded shadow-sm mb-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer bg-light">
              <p class="text-center mb-0">
                <small>Unendoti al nostro server Discord, accetti di seguire le regole del server e le linee guida della community.</small>
              </p>
            </div>
          </div>
          
          <div class="text-center mt-5">
            <RouterLink to="/it" class="btn btn-outline-primary">
              <i class="bi bi-arrow-left me-2"></i> Torna alla Home
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DiscordGiveawayIT',
}
</script>

<style scoped>
.giveaway-page {
  padding-top: 80px;
  padding-bottom: 50px;
}

.text-accent {
  color: #00A3FF;
}

.border-primary {
  border-color: #00A3FF !important;
}

.bg-primary {
  background-color: #00A3FF !important;
}

.discord-logo {
  height: 80px;
  width: auto;
}

.steps-container {
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 30px;
  margin-bottom: 30px;
}

.step-item {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.step-number {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00A3FF;
  color: white;
  font-weight: bold;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  font-size: 18px;
}

.step-content {
  flex: 1;
}

.btn-discord {
  background-color: #5865F2;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 20px;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

.btn-discord:hover {
  background-color: #4752c4;
  color: white;
}

.asset-features-section {
  border-top: 1px solid #e0e0e0;
  padding-top: 20px;
}

.feature-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 15px;
  background-color: #f8f9fa;
  border-radius: 8px;
  transition: transform 0.2s ease;
}

.feature-item:hover {
  transform: translateX(5px);
}

.asset-preview img {
  max-width: 100%;
  max-height: 200px;
  object-fit: contain;
}

@media (max-width: 768px) {
  .step-item {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .step-number {
    margin-bottom: 10px;
  }
  
  .asset-features-section .col-md-6:first-child {
    margin-bottom: 30px;
  }
}
</style>