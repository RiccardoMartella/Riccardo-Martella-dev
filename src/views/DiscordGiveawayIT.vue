<template>
  <div class="giveaway-page">
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="text-center mb-5">
            <h1 class="display-4 fw-bold text-accent mb-4">Chiavi Gratuite per Unity Asset</h1>
            <p class="lead">
              Unisciti al nostro server Discord e ricevi una chiave gratuita per il nostro asset Unity!
            </p>
          </div>

          <div class="card shadow-lg mb-5 border-primary">
            <div class="card-header bg-primary text-white">
              <h2 class="h4 mb-0">Offerta a Tempo Limitato</h2>
            </div>
            <div class="card-body p-4">
              <div class="text-center mb-4">
                <img src="/images/discord-logo.png" alt="Logo Discord" class="discord-logo mb-4" />
                <h3 class="h3 mb-3">Come Ottenere la Tua Chiave Gratuita</h3>
              </div>

              <div class="steps-container">
                <div class="step-item">
                  <div class="step-number">1</div>
                  <div class="step-content">
                    <h4 class="h5">Unisciti al Nostro Server Discord</h4>
                    <p>Clicca sul pulsante qui sotto per unirti al nostro server Discord.</p>
                    <a href="https://discord.gg/your-invite-link" target="_blank" rel="noopener noreferrer" class="btn btn-discord mb-3">
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

              <div class="alert alert-warning mt-4">
                <strong><i class="bi bi-exclamation-triangle me-2"></i> Disponibilità limitata:</strong> 
                Solo 5 chiavi gratuite rimanenti! Ottieni la tua prima che finiscano.
              </div>
              
              <div class="text-center mt-4">
                <h4 class="h4 mb-3">Informazioni sull'Asset</h4>
                <p>Assembly Station è un potente strumento Unity che aiuta gli sviluppatori a creare meccaniche di montaggio e smontaggio per i loro giochi con facilità. Perfetto per giochi di simulazione, applicazioni educative e molto altro.</p>
                <div class="asset-features mt-4">
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

.asset-features {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #f8f9fa;
  padding: 8px 15px;
  border-radius: 20px;
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
}
</style>