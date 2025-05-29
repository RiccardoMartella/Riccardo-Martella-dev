<template>
  <div class="doc-page">
    <ContentSection>
      <h1 class="doc-title">12. SISTEMA DI BLOCCO DEI PEZZI</h1>
      
      <p class="text-lead">
        Il sistema di blocco dei pezzi ti permette di creare una meccanica di progressione nel processo di assemblaggio, richiedendo agli utenti di costruire un certo numero di pezzi prima di sbloccare gli altri.
      </p>

      <div class="doc-section">
        <h2 class="doc-section-title">PEZZI BLOCCATI IN AZIONE</h2>
        
        <div class="content-block">
          <div class="content-text">
            <p>
              Quando un pezzo è bloccato, apparirà con un'icona di lucchetto nell'interfaccia. L'utente dovrà costruire il numero richiesto di altri pezzi prima di poter posizionare il pezzo bloccato. Questo crea un sistema di progressione strategica per i tuoi progetti di assemblaggio.
            </p>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/Lockpieces.jpg" 
              alt="Pezzo bloccato nell'interfaccia"
              caption="Esempio di un pezzo bloccato nell'interfaccia di assemblaggio" 
            />
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">COME BLOCCARE UN PEZZO</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <p>
              Per bloccare un pezzo, segui questi passaggi:
            </p>
            <ol class="numbered-list">
              <li>Naviga fino al Piece Descriptor del pezzo che vuoi bloccare</li>
              <li>Spunta la casella <strong>Lock Piece</strong> per attivare il sistema di blocco</li>
              <li>Imposta il valore <strong>Lock Level</strong>, che determina quanti pezzi devono essere costruiti prima che questo pezzo diventi disponibile</li>
            </ol>
            <p>
              Il livello di blocco rappresenta il numero di pezzi che devono essere costruiti prima che questo pezzo diventi disponibile per l'utente. Ad esempio, se imposti il livello di blocco a 5, l'utente dovrà costruire almeno 5 altri pezzi prima che questo venga sbloccato.
            </p>
            <div class="alert alert-info mt-3">
              <i class="bi bi-info-circle-fill me-2"></i>
              <strong>Consiglio:</strong> Usa questa funzionalità per guidare gli utenti attraverso una sequenza logica di costruzione o per creare una progressione di sfide nelle tue istruzioni di assemblaggio.
            </div>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/LockSettings.jpg" 
              alt="Impostazioni di blocco"
              caption="Impostazioni di blocco del pezzo nel Piece Descriptor" 
            />
          </div>
        </div>
      </div>

      <div class="doc-section alert-section">
        <h2 class="doc-section-title text-center text-danger">NOTA IMPORTANTE PER I GRUPPI</h2>
        
        <div class="alert-box alert-warning">
          <h4 class="alert-box-title text-danger text-center">
            Blocco dei pezzi nei gruppi
          </h4>
          <p>
            Quando lavori con pezzi raggruppati, ricorda di applicare le impostazioni di blocco al <strong>pezzo principale</strong> del gruppo (quello spuntato in GroupPieces). Come spiegato nella <RouterLink to="/it/docs/categories#first" class="alert-link">sezione Gruppi</RouterLink>, il primo pezzo in un gruppo controlla tutte le impostazioni per l'intero gruppo.
          </p>
          <p>
            Se applichi le impostazioni di blocco a pezzi secondari in un gruppo, queste verranno ignorate poiché il gruppo è controllato dal suo pezzo principale.
          </p>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">IMPLEMENTAZIONE STRATEGICA</h2>
        
        <div class="content-block">
          <div class="content-text">
            <p>
              Il sistema di blocco dei pezzi aggiunge una nuova dimensione alle tue istruzioni di assemblaggio:
            </p>
            <ul class="feature-list">
              <li><strong>Progressione guidata:</strong> Conduci gli utenti attraverso una sequenza logica di costruzione</li>
              <li><strong>Escalation delle sfide:</strong> Crea una difficoltà crescente man mano che la costruzione avanza</li>
              <li><strong>Sistema di risultati:</strong> Premia gli utenti con nuovi pezzi man mano che fanno progressi</li>
              <li><strong>Ritmo educativo:</strong> Assicurati che le parti complesse siano accessibili solo dopo che gli utenti hanno appreso le basi</li>
            </ul>
          </div>
        </div>
      </div>
    </ContentSection>
  </div>
</template>

<script>
import ContentSection from '@/components/ContentSection.vue'
import ImageZoomable from '@/components/ImageZoomable.vue'

export default {
  name: 'BlockPieceIT',
  components: {
    ContentSection,
    ImageZoomable
  }
}
</script>

<style>
@import '@/assets/styles/documentation.css';

.vertical {
  flex-direction: column !important;
}

.vertical .content-text {
  margin-bottom: 20px;
}

.vertical .content-media {
  width: 100%;
}

.feature-list {
  list-style-type: disc;
  padding-left: 20px;
  margin-bottom: 20px;
}

.feature-list li {
  margin-bottom: 8px;
}
</style>
