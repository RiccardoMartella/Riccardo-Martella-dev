<template>
  <div class="doc-page">
    <ContentSection>
      <h1 class="doc-title">8. SALVATAGGI</h1>

      <div class="doc-section">
        <h2 class="doc-section-title">SALVARE IL MODELLO</h2>
        
        <div class="content-block">
          <div class="content-text">
            <p>
              Una volta assemblato un pezzo, il pulsante <strong>Save Build</strong> diventerà attivo.
              Facendo clic su di esso si salverà lo stato di avanzamento del modello.
            </p>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/save.png" 
              alt="Pulsante Salva"
              caption="Pulsante per salvare il modello" 
              class="standard-image"
            />
          </div>
        </div>
      </div>
      
      <div class="doc-section">
        <h2 class="doc-section-title">FILE DI SALVATAGGIO</h2>
        
        <div class="content-block">
          <div class="content-text">
            <p>
              I salvataggi dei modelli si trovano nella cartella
              <code>Assets > AssemblyStation > Saves</code>.
            </p>
            <hr>
            <p>
              I file di salvataggio sono divisi in due parti:
              <ul class="step-list">
                <li>Un file JSON che contiene il modello con un ID univoco.</li>
                <li>Un file per salvare ogni singolo pezzo assemblato.</li>
              </ul>
            </p>
            <p>
              Per reimpostare un modello, puoi eliminare entrambi i file o aprirli
              e rimuovere manualmente i pezzi specifici che desideri ripristinare.
            </p>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/savej.png" 
              alt="File di salvataggio JSON"
              caption="File JSON di salvataggio" 
              class="standard-image"
            />
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">COME FUNZIONANO I SALVATAGGI</h2>
        
        <div class="content-block">
          <div class="content-text">
            <p>
              Quando fai clic sul pulsante Save Build, il sistema registra le seguenti informazioni:
            </p>
            <ul class="step-list">
              <li>Quale modello viene assemblato</li>
              <li>Quali pezzi specifici sono stati posizionati</li>
              <li>La percentuale di completamento attuale</li>
            </ul>
            <p>
              La prossima volta che il giocatore apre l'Assembly Station e seleziona lo stesso modello, tutti i pezzi precedentemente assemblati verranno automaticamente visualizzati come completati.
            </p>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/save.png" 
              alt="Esempio pulsante Salva"
              caption="Il pulsante di salvataggio registra lo stato attuale dell'assemblaggio" 
              class="standard-image"
            />
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
  name: 'SavesIT',
  components: {
    ContentSection,
    ImageZoomable
  }
}
</script>

<style>
@import '@/assets/styles/documentation.css';

.standard-image {
  max-width: 100%;
  width: auto;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.content-block {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 30px;
  margin-top: 20px;
}

.content-text {
  flex: 3;
}

.content-media {
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
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
