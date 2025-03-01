<template>
  <div class="doc-page">
    <ContentSection>
      <h1 class="doc-title">7. RISORSE</h1>
      
      <p class="text-lead text-center">
        La sezione Risorse è più complessa e richiede conoscenze di programmazione.
        Per ovvi motivi, non posso sapere quali e come vengono gestite le risorse nel tuo gioco, quindi ne ho aggiunte alcune casuali:
        Ferro, Plastica, Gomma.
      </p>
      
      <div class="info-box">
        <p class="text-center mb-0">
          Per impostazione predefinita, l'Assembly Station utilizza un sistema di risorse, 
          dove ogni pezzo ha un costo che viene detratto dall'inventario del giocatore.
        </p>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">RISORSE DEL GIOCATORE</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <p>
              Le risorse del giocatore si trovano nella cartella 
              <code>Assets > AssemblyStation > ScriptableObject > Resources Player</code>.
              Questo è assegnato al Player di test attraverso lo <u>script (ResourcesComponentPLayer) che puoi trovare
              in <strong>PLayer Test</strong> nella Hierarchy</u>
            </p>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/ResourcesPlayer.png" 
              alt="Resources Player"
              caption="Configurazione delle risorse del giocatore" 
            />
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">GESTIONE DELLE RISORSE</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <p>
              Qui assegnerai la quantità di risorse, mentre nello script (PlayerResources) puoi gestire la logica.
              Puoi facilmente modificare il tipo e la quantità di risorse disponibili per i test.
            </p>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/scriptresources.png" 
              alt="Script Resources"
              caption="Script per la gestione delle risorse" 
            />
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">COSTI DEI PEZZI</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <p>
              Come visto nel capitolo <a href="#PieceDescriptionR">4</a> questa è la sezione dove puoi
              aggiungere i vari testi, immagini, ecc. nel singolo pezzo.
              Come puoi vedere, ci sono 2 sezioni che non abbiamo ancora discusso: <u>RESOURCES VISIBLE</u> e
              <u>RESOURCES.</u>
            </p>
            <p>
              Qui puoi inserire i costi per ogni pezzo e decidere se rendere le risorse visibili o meno nell'interfaccia.
            </p>
          </div>
          
          <div class="content-media">
            <h4 class="sub-heading">Esempi di configurazione delle risorse:</h4>
            
            <div class="image-grid">
              <div class="image-row">
                <div class="image-card">
                  <ImageZoomable 
                    src="/images/pieceResources.png" 
                    alt="Piece Resources"
                    caption="Configurazione risorse del pezzo" 
                  />
                </div>
                <div class="image-card">
                  <ImageZoomable 
                    src="/images/cost.png" 
                    alt="Cost"
                    caption="Visualizzazione dei costi nel gioco" 
                  />
                </div>
              </div>
              <div class="image-row mt-4">
                <div class="image-card">
                  <ImageZoomable 
                    src="/images/hidden.png" 
                    alt="Hidden"
                    caption="Configurazione con risorse nascoste" 
                  />
                </div>
                <div class="image-card">
                  <ImageZoomable 
                    src="/images/hiddengame.png" 
                    alt="Hidden Game"
                    caption="Visualizzazione in gioco senza mostare le risorse" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="doc-section alert-section">
        <h2 class="doc-section-title text-center text-danger">ATTENZIONE!</h2>
        
        <div class="alert-box alert-warning">
          <h4 class="alert-box-title text-danger text-center">
            Gestione delle risorse nei gruppi
          </h4>
          <p>
            Per i pezzi che hanno un Gruppo, vale sempre la stessa regola: viene preso il <a href="#first"><u>primo nella lista</u></a>. 
            Quindi le risorse dovranno essere modificate in quel pezzo specifico.
          </p>
          <p>
            Nel caso di pezzi con un Gruppo, ricorda che le risorse devono sempre essere modificate nel
            primo pezzo del Gruppo, poiché i dati relativi a immagine, descrizione e costo
            vengono presi da lì.
          </p>
        </div>
      </div>
    </ContentSection>
  </div>
</template>

<script>
import ContentSection from '@/components/ContentSection.vue'
import ImageZoomable from '@/components/ImageZoomable.vue'

export default {
  name: 'ResourcesIT',
  components: {
    ContentSection,
    ImageZoomable
  }
}
</script>

<style>
@import '@/assets/styles/documentation.css';

/* Stili specifici della pagina */
.vertical {
  flex-direction: column !important;
}

.vertical .content-text {
  margin-bottom: 20px;
}

.vertical .content-media {
  width: 100%;
}

.image-grid {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.image-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.image-card {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.info-box {
  background-color: #e8f4f8;
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0 30px;
  border-left: 4px solid #17a2b8;
}

.sub-heading {
  font-size: 1.1rem;
  margin-bottom: 15px;
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 8px;
}

.alert-section {
  background-color: #fff9f9;
  border-radius: 8px;
  padding: 20px;
  margin: 30px 0;
  border-left: 4px solid #dc3545;
}

@media (max-width: 768px) {
  .image-row {
    grid-template-columns: 1fr;
  }
}
</style>
