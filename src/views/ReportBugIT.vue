<template>
  <div class="report-bug-page">
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="text-center mb-5">
            <h1 class="display-4 fw-bold text-accent mb-4" id="bug">Segnala un Bug</h1>
            <p class="lead">
              Hai trovato un bug o hai una proposta per migliorare Assembly Station? Fammelo sapere così posso risolverlo!
            </p>
          </div>

          <div class="row mb-5">
            <div class="col-md-4">
              <div class="info-card mb-4">
                <div class="info-icon">
                  <i class="bi bi-check-circle-fill"></i>
                </div>
                <h4>Tracciamento Bug</h4>
                <p>Tutti i problemi segnalati vengono tracciati e prioritizzati in base alla gravità e all'impatto.</p>
              </div>
            </div>
            
            <div class="col-md-4">
              <div class="info-card mb-4">
                <div class="info-icon">
                  <i class="bi bi-clock-fill"></i>
                </div>
                <h4>Tempo di Risposta</h4>
                <p>Al momento sono l'unico sviluppatore, quindi farò del mio meglio per risolvere i problemi il prima possibile.</p>
              </div>
            </div>
            
            <div class="col-md-4">
              <div class="info-card mb-4">
                <div class="info-icon">
                  <i class="bi bi-shield-check"></i>
                </div>
                <h4>La Tua Privacy</h4>
                <p>Le tue informazioni sono mantenute confidenziali e utilizzate solo per risolvere il problema segnalato.</p>
              </div>
            </div>
          </div>

          <div class="card shadow-sm mb-5">
            <div class="card-body">
              <h4>Modi per Segnalare Bug</h4>
              <div class="alert alert-info mb-4">
                <i class="bi bi-info-circle-fill me-2"></i>
                <strong>Consigliato:</strong> Utilizzando GitHub potrai tenere traccia dello stato della tua segnalazione e seguire gli aggiornamenti mentre lavoro alle correzioni.
              </div>
              <div class="row mt-4">
                <div class="col-md-6 mb-3 mb-md-0">
                  <div class="d-flex align-items-center">
                    <div class="bug-report-icon">
                      <i class="bi bi-github"></i>
                    </div>
                    <div>
                      <h5>GitHub Issues</h5>
                      <p class="mb-1">Crea una issue sul mio repository GitHub (consigliato)</p>
                      <a href="https://github.com/RiccardoMartella/Assembly-Station-Documentation/issues" class="btn btn-primary" target="_blank">Apri GitHub</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="d-flex align-items-center">
                    <div class="bug-report-icon">
                      <i class="bi bi-envelope"></i>
                    </div>
                    <div>
                      <h5>Email</h5>
                      <p class="mb-1">Inviami una email con i dettagli</p>
                      <a href="mailto:riccardomartella77@gmail.com" class="btn btn-outline-primary">Email Me</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card shadow-sm mb-5">
            <div class="card-body p-4">
              <div class="mb-4">
                <div class="d-flex align-items-center mb-3">
                  <i class="bi bi-bug fs-1 text-accent me-3"></i>
                  <h2>Modulo di Segnalazione Bug</h2>
                </div>
                <p class="text-muted">
                  Se preferisci non utilizzare GitHub, puoi compilare questo modulo per segnalare un problema direttamente.
                </p>
              </div>
              
              <form name="reportbugit" method="POST" data-netlify="true" netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="reportbugit" />
                <div class="mb-3">
                  <label for="bugTitle" class="form-label">Titolo del Bug</label>
                  <input type="text" class="form-control" id="bugTitle" name="bugTitle" placeholder="Breve descrizione del bug">
                </div>
                
                <div class="row mb-3">
                  <div class="col-md-6">
                    <label for="version" class="form-label">Versione di Assembly Station</label>
                    <input type="text" class="form-control" id="version" name="version"  placeholder="es. 1.2.5">
                  </div>
                  <div class="col-md-6">
                    <label for="unityVersion" class="form-label">Versione di Unity</label>
                    <input type="text" class="form-control" id="unityVersion" name="unityVersion" placeholder="es. 2022.3.1f1">
                  </div>
                </div>
                
                <div class="mb-3">
                  <label for="severity" class="form-label">Gravità del Bug</label>
                  <select class="form-select" id="severity" name="severity">
                    <option selected>Seleziona il livello di gravità</option>
                    <option value="critical">Critico - L'app si blocca o non funziona</option>
                    <option value="major">Maggiore - Funzionalità principale non funzionante</option>
                    <option value="minor">Minore - Problema non critico o problema UI</option>
                    <option value="enhancement">Miglioramento - Richiesta di funzionalità o suggerimento</option>
                  </select>
                </div>
                
                <div class="mb-3">
                  <label for="bugDescription" class="form-label">Descrizione del Bug</label>
                  <textarea class="form-control" id="bugDescription" name="bugDescription" rows="5" placeholder="Descrizione dettagliata di cosa succede..."></textarea>
                </div>
                
                <div class="mb-3">
                  <label for="reproduction" class="form-label">Passaggi per Riprodurre</label>
                  <textarea class="form-control" id="reproduction" name="reproduction" rows="4" placeholder="1. Apri la scena... 2. Seleziona l'oggetto... 3. Clicca su..."></textarea>
                </div>
                
                <div class="mb-3">
                  <label for="expected" class="form-label">Comportamento Previsto</label>
                  <textarea class="form-control" id="expected" name="expected" rows="2" placeholder="Cosa dovrebbe succedere invece?"></textarea>
                </div>
                
                <div class="mb-3">
                  <label class="form-label">Screenshot/Video</label>
                  <div class="input-group">
                    <input type="file" class="form-control" id="attachments" name="attachments" multiple>
                    <label class="input-group-text" for="attachments">Carica</label>
                  </div>
                  <div class="form-text">Allega screenshot o video pertinenti (opzionale)</div>
                </div>
                
                <div class="mb-3">
                  <label for="email" class="form-label">La tua Email (per follow-up)</label>
                  <input type="email" class="form-control" id="email"  name="email" placeholder="tua.email@esempio.com">
                </div>
                
                <button type="submit" class="btn btn-primary w-100 py-2 mt-3">Invia Segnalazione</button>
              </form>
            </div>
          </div>

          <div class="accordion" id="faqAccordion">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                  Cosa succede dopo aver inviato una segnalazione di bug?
                </button>
              </h2>
              <div id="faq1" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  <p>Dopo aver inviato una segnalazione, esaminerò il problema e risponderò appena possibile. Ti fornirò aggiornamenti sullo stato della soluzione e potrei richiedere ulteriori informazioni se necessario. Una volta risolto, riceverai una notifica e la correzione sarà inclusa nel prossimo aggiornamento.</p>
                </div>
              </div>
            </div>
            
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                  Come posso controllare lo stato della mia segnalazione?
                </button>
              </h2>
              <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  <p>Puoi controllare lo stato della tua segnalazione tramite l'email che hai fornito nella segnalazione. Se hai segnalato il problema tramite GitHub, puoi seguire l'issue direttamente lì. Invierò aggiornamenti via email quando ci saranno progressi sul problema segnalato.</p>
                </div>
              </div>
            </div>
            
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                  Quali informazioni sono più utili nelle segnalazioni di bug?
                </button>
              </h2>
              <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  <p>Le informazioni più utili includono:</p>
                  <ul>
                    <li>Passaggi chiari e dettagliati per riprodurre il problema</li>
                    <li>Screenshot o registrazioni dello schermo che mostrano il problema</li>
                    <li>Informazioni esatte sulla versione di Assembly Station e Unity</li>
                    <li>Messaggi di errore (se presenti)</li>
                    <li>Quando il problema ha iniziato a verificarsi (dopo un aggiornamento, ecc.)</li>
                  </ul>
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
  name: 'ReportBugIT',
  mounted() {
    this.$nextTick(() => {
      if (window.location.hash) {
        const id = window.location.hash.slice(1);
        const element = document.getElementById(id);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100); 
        }
      }
    });
  }
}
</script>

<style scoped>
.report-bug-page {
  padding-top: 20px;
  padding-bottom: 50px;
}

.text-accent {
  color: #00A3FF;
}

.bug-report-icon {
  width: 50px;
  height: 50px;
  min-width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background-color: #E6F7FF;
  margin-right: 15px;
  font-size: 24px;
  color: #00A3FF;
}

.info-card {
  background-color: #fff;
  border-radius: 10px;
  padding: 25px 20px;
  height: 100%;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.info-icon {
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

.form-control:focus, .form-select:focus, .accordion-button:focus {
  border-color: #00A3FF;
  box-shadow: 0 0 0 0.25rem rgba(0, 163, 255, 0.25);
}

.accordion {
  margin-top: 2rem;
}

.accordion-button:not(.collapsed) {
  background-color: #E6F7FF;
  color: #00A3FF;
}

.accordion-button::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%2300A3FF'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}
</style>
