<template>
  <div class="contacts-page">
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="text-center mb-5">
            <h1 class="display-4 fw-bold text-accent mb-4" id="contIt">Contattami</h1>
            <p class="lead">
                Sono qui per aiutarti! Mettiti in contatto con me.
            </p>
          </div>

          <div class="card shadow-sm mb-5">
            <div class="card-body p-4">
              <div class="row">
                <div class="col-lg-6 mb-4 mb-lg-0">
                  <h4>Informazioni di contatto</h4>
                  <p class="text-muted mb-4">
                    Non esitare a contattarmi per qualsiasi domanda, feedback o richiesta di assistenza.
                  </p>
                  
                  <div class="d-flex align-items-center mb-3">
                    <div class="contact-icon-wrapper">
                      <a href="mailto:riccardomartella77@gmail.com"><i class="bi bi-envelope-fill text-accent"></i></a>
                    </div>
                    <div>
                      <p class="mb-0 fw-bold">Email</p>
                      <p class="mb-0">riccardomartella77@gmail.com</p>
                    </div>
                  </div>
                  
                  <div class="d-flex align-items-center mb-3">
                    <div class="contact-icon-wrapper">
                      <a href="https://discord.gg/dZ2Veb4eM5"><i class="bi bi-discord text-accent"></i></a>
                    </div>
                    <div>
                      <p class="mb-0 fw-bold">Discord</p>
                      <p class="mb-0">Unisciti al server Discord</p>
                    </div>
                  </div>
                  
                  <div class="d-flex align-items-center mb-3">
                    <div class="contact-icon-wrapper">
                      <a href="https://www.linkedin.com/in/riccardo-martella-b91854252/"><i class="bi bi-linkedin text-accent"></i></a>
                    </div>
                    <div>
                      <p class="mb-0 fw-bold">Linkedin</p>
                      <p class="mb-0">Visita il mio profilo LinkedIn</p>
                    </div>
                  </div>
                  
                  <div class="d-flex align-items-center">
                    <div class="contact-icon-wrapper">
                      <a href="https://github.com/RiccardoMartella/Assembly-Station-Documentation/issues"><i class="bi bi-github text-accent"></i></a>
                    </div>
                    <div>
                      <p class="mb-0 fw-bold">GitHub</p>
                      <p class="mb-0">Segnala problemi sul mio GitHub</p>
                    </div>
                  </div>
                  
                  <div class="alert alert-info mt-4">
                    <i class="bi bi-info-circle-fill me-2"></i>
                    <strong>Verifica su Discord:</strong> Una volta acquistato l'asset, inviami su Discord in privato il numero d'ordine e verrai verificato.
                  </div>
                  
                  <!-- Support Developer Card -->
                  <div class="support-card mt-4">
                    <div class="d-flex align-items-center mb-2">
                      <i class="bi bi-heart-fill text-danger me-2"></i>
                      <h5 class="mb-0">Sostieni il mio lavoro</h5>
                    </div>
                    <p class="small text-muted mb-2">
                      Se trovi utile il mio lavoro, considera di sostenermi per aiutarmi a mantenere e sviluppare nuove funzionalità.
                    </p>
                    <a href="https://paypal.me/riccardomartella" target="_blank" class="btn btn-outline-primary btn-sm">
                      <i class="bi bi-paypal me-1"></i> Dona via PayPal
                    </a>
                  </div>
                </div>
                
                <div class="col-lg-6">
                  <h4>Inviami un messaggio</h4>
                  <form name="contactit" method="POST" data-netlify="true" netlify-honeypot="bot-field">
                    <input type="hidden" name="form-name" value="contactit" />
                    <p class="d-none">
                      <label>Non compilare questo campo se sei umano: <input name="bot-field" /></label>
                    </p>
                    
                    <div class="mb-3">
                      <label for="name" class="form-label">Nome</label>
                      <input type="text" class="form-control" id="name" name="name" placeholder="Il tuo nome" required>
                    </div>
                    
                    <div class="mb-3">
                      <label for="email" class="form-label">Email</label>
                      <input type="email" class="form-control" id="email" name="email" placeholder="La tua email" required>
                    </div>
                    <div><p class="form-text">"I dati inseriti saranno utilizzati esclusivamente per rispondere alla tua richiesta. Non saranno condivisi con terze parti."</p></div>

                    
                    <div class="mb-3">
                      <label for="message" class="form-label">Messaggio</label>
                      <textarea class="form-control" id="message" name="message" rows="5" placeholder="Il tuo messaggio" required></textarea>
                    </div>
                    
                    <button type="submit" class="btn btn-primary w-100">Invia Messaggio</button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div class="contact-links my-4">
            <a href="https://prf.hn/click/camref:1110l4PAz/destination:https%3A%2F%2Fassetstore.unity.com%2Fpackages%2Fslug%2F313569" class="btn btn-primary btn-lg me-3 mb-3">
              <i class="bi bi-cart-fill me-2"></i>Ottieni Assembly Station
            </a>
            <a href="https://discord.gg/dZ2Veb4eM5" target="_blank" class="btn btn-outline-primary btn-lg mb-3">
              <i class="bi bi-discord me-2"></i>Entra su Discord
            </a>
          </div>

          <div class="text-center mt-5">
            <h5>Seguimi sui social media</h5>
            <div class="d-flex justify-content-center gap-4 mt-3">
              <a href="https://github.com/RiccardoMartella/Assembly-Station-Documentation/issues" class="social-icon">
                <i class="bi bi-github fs-3 text-accent"></i>
              </a>
              <a href="https://discord.gg/dZ2Veb4eM5" class="social-icon">
                <i class="bi bi-discord fs-3 text-accent"></i>
              </a>
              <a href="https://assetstore.unity.com/packages/slug/313569" class="social-icon">
                <i class="bi bi-unity fs-3 text-accent"></i>
              </a>
              <a href="https://www.linkedin.com/in/riccardo-martella-b91854252/" class="social-icon">
                <i class="bi bi-linkedin fs-3 text-accent"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactsIT',
  mounted() {
    // Gestione dello scrolling all'ID nella URL dopo che il componente è montato
    this.$nextTick(() => {
      if (window.location.hash) {
        const id = window.location.hash.slice(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
}
</script>

<style scoped>
.contacts-page {
  padding-top: 20px;
  padding-bottom: 50px;
}

.text-accent {
  color: #00A3FF;
}

.contact-icon-wrapper {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: #E6F7FF;
  margin-right: 15px;
}

.contact-icon-wrapper i {
  font-size: 20px;
}

.social-icon {
  text-decoration: none;
  transition: transform 0.3s ease;
}

.social-icon:hover {
  transform: translateY(-3px);
}

.form-control:focus {
  border-color: #00A3FF;
  box-shadow: 0 0 0 0.25rem rgba(0, 163, 255, 0.25);
}

.btn-primary {
  background-color: #00A3FF;
  border-color: #00A3FF;
}

.btn-primary:hover {
  background-color: #0082CC;
  border-color: #0082CC;
}

.support-card {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 15px;
  border-left: 3px solid #00A3FF;
}

.text-danger {
  color: #ff6b6b !important;
}
</style>
