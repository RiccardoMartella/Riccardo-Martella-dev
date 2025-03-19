<template>
  <div class="doc-page">
    <ContentSection>
      <h1 class="doc-title">5. PULSANTI E CATEGORIE PER I PREFABS</h1>
      
      <div class="hero-section">
        <ImageZoomable 
          src="/images/buttonimmage.png" 
          style="max-width: 400px;" 
          alt="Immagine Pulsante"
          caption="Esempio di pulsanti di categoria nell'interfaccia" 
        />
        
        <p class="text-lead text-center mt-4">
          Per inserire i pulsanti, basta andare alla Hierarchy e selezionare Content UI
        </p>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">ACCESSO ALL'INTERFACCIA CONTENT UI</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <p>
              Content UI è il componente che gestisce l'interfaccia utente dell'Assembly Station.
              Selezionandolo, potrai accedere alle impostazioni dei pulsanti e delle categorie.
            </p>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/contentUi.png" 
              alt="Content UI"
              caption="Selezione di Content UI nella Hierarchy" 
            />
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">CONFIGURAZIONE DEI PULSANTI E CATEGORIE</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <div class="feature-box">
              <p>
                Nell'inspector apparirà una sezione dove puoi inserire i pulsanti e le categorie per i prefab.
                Questa meccanica serve ad aggiungere varie categorie in modo che nel gioco l'utente possa selezionare i vari modelli più facilmente.
              </p>
              <p>
                <strong>Funzionalità chiave:</strong> Questa funzione aggiunge i pulsanti in modalità Editor, spaziandoli automaticamente tra loro 
                per una disposizione ottimale dell'interfaccia.
              </p>
            </div>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/categoryprefab.png" 
              alt="Categoria Prefab"
              caption="Configurazione delle categorie per i prefab nell'inspector" 
            />
          </div>
        </div>
      </div>

      <div class="doc-section alert-section">
        <h2 class="doc-section-title text-center">ATTENZIONE</h2>
        
        <div class="important-notice">
          <p>
            Per comprendere meglio la funzionalità, seguiremo un tutorial video dettagliato.
          </p>
          <div class="warning-banner">
            <h4 class="text-danger text-center"><i class="bi bi-exclamation-triangle"></i> PRESTA MOLTA ATTENZIONE A QUESTA PARTE <i class="bi bi-exclamation-triangle"></i></h4>
          </div>
          
          <div class="key-points mt-3">
            <div class="key-point">
              <h5>Categorie iniziali</h5>
              <p>Inizialmente, le categorie saranno 3: Veicoli, Armeria, Strumenti</p>
            </div>
            
            <div class="key-point">
              <h5>Ordine delle liste</h5>
              <p>È <u>Fondamentale</u> seguire l'ordine delle varie liste come mostrato nel video</p>
            </div>
            
            <div class="key-point">
              <h5>Numerazione e corrispondenza</h5>
              <p>I nuovi pulsanti che inserirai saranno numerati nella lista, quindi i modelli corrispondenti ai pulsanti devono essere nella stessa posizione nella lista dei Pulsanti</p>
            </div>
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">AGGIUNGERE UN PULSANTE A UNA CATEGORIA ESISTENTE</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <div class="step-guide">
              <p><u>Come aggiungere un pulsante a una categoria precedentemente creata:</u></p>
              <p>Esempio dal video:</p>
              <div class="example-code">
                <p>Elemento 0 - Auto → Elemento 0 - Auto Sportiva</p>
                <p class="note">(nella tua versione non tutti i prefab sono presenti come nel video, ma serve a farti capire che dovrai utilizzare la stessa procedura con i tuoi prefab)</p>
              </div>
              
              <div class="warning-text">
                <p><strong>ASSEGNA PRECISAMENTE TUTTE LE CATEGORIE, I PULSANTI E I PREFAB COME NEL VIDEO ALTRIMENTI NON FUNZIONERÀ</strong></p>
              </div>
              
              <p><strong>Se vuoi aggiungere un pulsante a una categoria precedentemente creata, segui il video tutorial qui sotto:</strong></p>
            </div>
          </div>
          
          <div class="content-media">
            <video controls class="demo-video w-100">
              <source src="https://www.dropbox.com/scl/fi/vhe17p8hzcav8tmyube37/newCategory.mp4?rlkey=3ih1j72bf7apnzbm3n2b836hw&st=pomtlfuj&dl=1" type="video/mp4">
              Your browser does not support HTML5 video.
            </video>
            <p class="caption">Tutorial: Aggiungere un pulsante a una categoria esistente</p>
            
            <video controls class="demo-video w-100">
              <source src="https://www.dropbox.com/scl/fi/bmywyq7xkxwy40i8wrobt/CategoryPrefab.mp4?rlkey=di9ajmf2rf9m7lw4uq2ilr0ib&st=7hxi07vj&dl=1" type="video/mp4">
              Your browser does not support HTML5 video.
            </video>
            <p class="caption">Tutorial: Procedura completa per aggiungere nuovi pulsanti</p>
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">AGGIUNGERE UNA NUOVA CATEGORIA</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <div class="info-box">
              <p>Se vuoi aggiungere una nuova categoria oltre alle prime 3, segui il video tutorial qui sotto.</p>
              <hr>
              <p>Per aggiungere una 4a categoria, come vedrai nel video, ho dovuto prima aggiungere e assegnare la categoria Strumenti che nei precedenti video non era inserita nella lista perché non c'erano pulsanti assegnati a un prefab.</p>
              <hr>
              <p>Questo perché, come spiegato, è fondamentale mantenere le liste numerate correttamente altrimenti il sistema dà un errore. Non ha senso lasciare una categoria vuota, ma ho voluto mostrarti anche questo esempio per completezza.</p>
              <hr>
              <p class="pro-tip"><strong>Consiglio:</strong> Come vedrai nel video, ho duplicato il pulsante per poi cambiare il testo. Questo perché ogni pulsante ha uno script e un numero assegnato <u>fondamentale</u> per la funzionalità. Quando aggiungi una nuova categoria, duplica un pulsante esistente, cambia il testo e aggiorna il numero che progredirà con l'aggiunta di categorie.</p>
            </div>
          </div>
          
          <div class="content-media">
            <video controls class="demo-video w-100">
              <source src="https://www.dropbox.com/scl/fi/x895d3089wnmx4umtdppe/newCAtegory2.mp4?rlkey=n00a15isys34wp4y4fywwxavt&st=j4sv7o79&dl=1" type="video/mp4">
              Your browser does not support HTML5 video.
            </video>
            <p class="caption">Tutorial: Procedura per aggiungere una nuova categoria</p>
          </div>
        </div>
      </div>

      <div class="doc-section final-section">
        <h2 class="doc-section-title">GESTIONE DELL'ATTIVAZIONE</h2>
        
        <div class="content-block vertical">
          <div class="important-rule text-center">
            <p class="mb-4">
              <u><strong>Ogni volta che viene aggiunta una categoria, deve essere disabilitata<br>Solo la prima deve essere lasciata attiva</strong></u>
            </p>
          </div>
          
          <div class="image-comparison">
            <div class="comparison-item">
              <h5>Categoria Attiva</h5>
              <ImageZoomable 
                src="/images/active.png" 
                alt="Attivo"
                caption="Categoria correttamente attiva" 
              />
            </div>
            
            <div class="comparison-item">
              <h5>Categoria Disattivata</h5>
              <ImageZoomable 
                src="/images/noactive.png" 
                alt="Non Attivo" 
                caption="Categoria correttamente disattivata" 
              />
            </div>
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
  name: 'ButtonsIT',
  components: {
    ContentSection,
    ImageZoomable
  }
}
</script>

<style>
@import '@/assets/styles/documentation.css';

/* Stili specifici della pagina */
.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
}

.vertical {
  flex-direction: column !important;
}

.vertical .content-text {
  margin-bottom: 20px;
}

.vertical .content-media {
  width: 100%;
}

.demo-video {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  height: 400px; /* Add height for iframe */
}

.caption {
  text-align: center;
  font-style: italic;
  color: #666;
  margin-top: 10px;
}

.feature-box {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  border-left: 4px solid #00A3FF;
}

.warning-banner {
  background-color: #fff3cd;
  padding: 10px;
  border-radius: 4px;
  margin: 15px 0;
}

.key-points {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.key-point {
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid #17a2b8;
}

.key-point h5 {
  margin-bottom: 8px;
  color: #17a2b8;
}

.example-code {
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  margin: 15px 0;
  font-family: monospace;
}

.note {
  font-size: 0.9rem;
  color: #6c757d;
  font-style: italic;
}

.warning-text {
  background-color: #f8d7da;
  color: #721c24;
  padding: 15px;
  border-radius: 8px;
  margin: 15px 0;
}

.important-rule {
  background-color: #fff3cd;
  padding: 15px;
  border-radius: 8px;
  margin: 20px 0;
}

.image-comparison {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: 20px;
}

.comparison-item {
  text-align: center;
  flex: 1;
  min-width: 250px;
}

.comparison-item h5 {
  margin-bottom: 10px;
  color: #495057;
}

.pro-tip {
  background-color: #d4edda;
  color: #155724;
  padding: 10px;
  border-radius: 4px;
}

.final-section {
  margin-top: 50px;
  padding-top: 20px;
  border-top: 1px solid #e9ecef;
}
</style>
