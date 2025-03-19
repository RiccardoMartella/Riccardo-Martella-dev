<template>
  <div class="doc-page">
    <ContentSection>
      <h1 class="doc-title">10. PROBLEMI NOTI</h1>

      <div class="doc-section">
        <h2 class="doc-section-title">ERRORI COMUNI</h2>

        <div class="content-block">
          <div class="content-text">
            <p>
              Può succedere che, quando vai a costruire determinati pezzi,
              appaia questo tipo di errore:
            </p>
          </div>

          <div class="content-media">
            <ImageZoomable
              src="/images/bug.png"
              alt="Messaggio di Errore"
              caption="Esempio di messaggio di errore"
            />
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">RISOLUZIONE DEI PROBLEMI</h2>

        <div class="content-block">
          <div class="content-text">
            <p>
              Questo può accadere perché il componente potrebbe non avere
              assegnata la <strong>PieceDescription</strong>. È sufficiente
              individuare il componente e assegnargliela correttamente.
            </p>
            <p>Il video qui sotto mostra come risolvere questo problema:</p>
          </div>

          <div class="content-media">
            <video controls class="demo-video w-100">
              <source src="https://www.dropbox.com/scl/fi/d05zgntphtqp1g9zf9e43/bug.mp4?rlkey=2d0wm9880zgysrqywwjx9nru0&dl=1" type="video/mp4">
              Your browser does not support HTML5 video.
            </video>
            <p class="caption">Tutorial: How to fix naming conflicts</p>
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">
          CONSIGLI PER LA RISOLUZIONE DEI PROBLEMI
        </h2>

        <div class="content-block">
          <div class="content-text">
            <div class="alert-box alert-info">
              <h4 class="alert-box-title">
                Suggerimenti per la risoluzione dei problemi:
              </h4>
              <ul class="step-list">
                <li>
                  Assicurati che tutti i materiali siano posizionati
                  correttamente nella cartella Resources
                </li>
                <li>
                  Controlla che i prefab siano configurati correttamente con i
                  pivot appropriati
                </li>
                <li>
                  Verifica che tutti i componenti richiesti siano assegnati
                  nell'inspector
                </li>
                <li>
                  Assicurati che non ci siano nomi duplicati nei pezzi del tuo
                  progetto
                </li>
                <li>Controlla i messaggi di errore nella console Unity</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="doc-section text-center">
        <h2 class="doc-section-title">HAI BISOGNO DI AIUTO?</h2>

        <div class="content-block justify-content-center">
          <div>
            <p>
              Se stai riscontrando problemi non trattati in questa
              documentazione, non esitare a contattarmi per supporto.
            </p>
            <div class="d-flex justify-content-center gap-4 mt-3">
              <a
                href="https://github.com/RiccardoMartella/Assembly-Station-Documentation/issues"
                class="btn btn-outline-primary"
              >
                <i class="bi bi-bug me-2"></i>Segnala Bug
              </a>
              <RouterLink
                to="/it/contacts#contIt"
                class="btn btn-outline-primary"
              >
                <i class="bi bi-envelope me-2"></i>Contattami
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </ContentSection>
  </div>
</template>

<script>
import ContentSection from "@/components/ContentSection.vue";
import ImageZoomable from "@/components/ImageZoomable.vue";

export default {
  name: "KnownIssuesIT",
  components: {
    ContentSection,
    ImageZoomable,
  },
};
</script>

<style>
@import "@/assets/styles/documentation.css";

.demo-video {
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  height: 400px; 
}

.step-list {
  list-style-type: disc;
  padding-left: 20px;
  margin-bottom: 20px;
}

.step-list li {
  margin-bottom: 8px;
}
</style>
