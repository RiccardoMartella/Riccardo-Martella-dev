<template>
  <div class="doc-page">
    <ContentSection>
      <h1 class="doc-title">6. TAG/CATEGORIE/GRUPPI DI PEZZI</h1>
      
      <p class="text-lead">
        Una volta inseriti tutti i testi e le immagini, puoi procedere con la creazione dei TAG e dei GRUPPI.
      </p>

      <div class="doc-section">
        <h2 class="doc-section-title">PEZZI SENZA CATEGORIE</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <p>
              Inizialmente, ogni pezzo del prefab non avrà un tag e sarà quindi visibile nel pannello in un'unica lista.
            </p>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/src/assets/images/nocategory.png" 
              alt="Nessuna Categoria"
              caption="Visualizzazione dei pezzi senza categorie" 
            />
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">ASSEGNAZIONE DEI TAG</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <p>
              Se vuoi dividere i pezzi per categoria, basta creare un tag e assegnarlo a ciascun pezzo per ogni categoria.
              Puoi selezionare più tag contemporaneamente tenendo premuto il tasto CTRL e selezionando i vari Pezzi, altrimenti premendo il tasto CTRL+SHIFT.
            </p>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/src/assets/images/Tag.png" 
              alt="Tag"
              caption="Assegnazione di tag ai pezzi" 
            />
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">RISULTATO DELLE CATEGORIE</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <p>
              Facendo così, i pezzi saranno divisi in base al tag che hai assegnato. Il pannello mostrerà i pezzi organizzati per categorie.
            </p>
          </div>
          
          <div class="content-media centered">
            <ImageZoomable 
              src="/src/assets/images/multicat.png" 
              alt="Categorie Multiple" 
              style="max-width: 350px;"
              caption="Visualizzazione di pezzi divisi per categorie" 
            />
          </div>
        </div>
      </div>

      <div class="doc-section alert-section">
        <h2 class="doc-section-title text-center text-danger">ATTENZIONE!!!</h2>
        <h4 class="text-center mb-3 text-danger">Presta attenzione a questa parte</h4>
        <h3 class="text-center mb-4">GRUPPI</h3>
        
        <div class="alert-box alert-warning">
          <p class="text-center">
            Ogni pezzo che contiene uno <u>SkinnedMeshRenderer o un MeshRenderer</u> verrà visualizzato nel
            pannello. Questo significa che, in presenza di modelli con centinaia di pezzi, la lista risultante sarà
            molto lunga, rendendo difficile per l'utente trovare rapidamente il pezzo desiderato.
            <br><br>
            Per risolvere questo problema, ho introdotto i Gruppi, che consentono di organizzare i pezzi in
            categorie specifiche, semplificando la ricerca e la gestione. Per chiarire meglio il concetto, ecco un esempio:
          </p>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">CONFRONTO: PEZZI CON E SENZA GRUPPI</h2>
        
        <div class="content-block two-columns">
          <div class="column">
            <h4 class="sub-title">Senza Gruppi</h4>
            <p>
              In questo caso, i pezzi non hanno un gruppo assegnato e saranno quindi visualizzati in 6 pulsanti separati.
            </p>
            <ImageZoomable 
              src="/src/assets/images/testgruppi.png" 
              alt="Gruppi di test"
              caption="Visualizzazione di pezzi senza raggruppamento" 
            />
          </div>
          
          <div class="column">
            <h4 class="sub-title">Con Gruppi</h4>
            <p>
              Una volta assegnato il gruppo, ecco il risultato:
              1 pulsante per 6 pezzi.
              <br><br>
              <u>Qualsiasi numero di pezzi può essere combinato in un gruppo.</u>
            </p>
            <ImageZoomable 
              src="/src/assets/images/fix.png" 
              alt="Correzione"
              caption="Visualizzazione di pezzi raggruppati" 
            />
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">VIDEO GUIDA ALL'ASSEGNAZIONE DEI GRUPPI</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <p>
              Per assegnare il gruppo, segui il video tutorial qui sotto che mostra il processo completo.
            </p>
          </div>
          
          <div class="content-media">
            <video controls class="demo-video" src="/src/assets/video/AssemblyStation-GuidaallInstallazione.mp4" type="video/mp4"></video>
            <p class="caption">Video tutorial per l'assegnazione dei gruppi</p>
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">IMPORTANTE: SELEZIONE AUTOMATICA</h2>
        
        <div class="info-box" id="first">
          <p class="text-center">
            Quando si utilizzano i Gruppi, l'immagine viene automaticamente selezionata dal <strong>primo pezzo del gruppo</strong>, così come la descrizione e il nome.
          </p>
        </div>

        <div class="content-block vertical mt-4">
          <div class="content-text">
            <p>
              Per i pezzi che hanno un Gruppo, vale sempre la stessa regola: viene preso il primo della lista. Quindi le risorse dovranno essere cambiate lì.
            </p>
            <p>
              <strong class="text-danger">Questa funzione è ancora in fase di sviluppo per facilitare l'inserimento dell'immagine nei Gruppi</strong>
            </p>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/src/assets/images/piceGroupFix.png" 
              alt="Correzione Gruppo Pezzi"
              caption="Configurazione delle risorse nel primo pezzo del gruppo" 
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
  name: 'CategoriesIT',
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

.centered {
  display: flex;
  justify-content: center;
}

.two-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.column {
  display: flex;
  flex-direction: column;
}

.sub-title {
  font-size: 1.1rem;
  margin-bottom: 12px;
  color: #2c3e50;
  font-weight: 600;
}

.info-box {
  background-color: #e8f4f8;
  border-radius: 8px;
  padding: 20px;
  margin-top: 20px;
  border-left: 4px solid #17a2b8;
}

.demo-video {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.caption {
  text-align: center;
  font-style: italic;
  color: #666;
  margin-top: 10px;
}

.alert-section {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  margin: 30px 0;
  border-left: 4px solid #dc3545;
}

@media (max-width: 768px) {
  .two-columns {
    grid-template-columns: 1fr;
  }
}
</style>
