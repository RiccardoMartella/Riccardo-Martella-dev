<template>
  <div class="doc-page">
    <ContentSection>
      <h1 class="doc-title">4. AGGIUNGERE DESCRIZIONI E IMMAGINI AI PREFAB</h1>
      
      <p class="text-lead">
        Una volta aggiunti tutti i prefab desiderati e spostati i pivot, è necessario aggiungere una descrizione e un'immagine a ogni figlio
        che contiene MeshRenderer o SkinnedMeshRenderer, mentre al genitore deve essere assegnato un titolo.
      </p>
      
      <p class="text-center mt-4 mb-4">
        Tutto questo viene fatto <u>automaticamente</u> dall'asset (a seconda del numero di prefab nella
        cartella, ci vorrà più o meno tempo).
      </p>

      <div class="doc-section">
        <h2 class="doc-section-title">AGGIUNGERE AUTOMATICAMENTE NOME E DESCRIZIONI</h2>
        
        <div class="content-block">
          <div class="content-text">
            <p>
              Basta cliccare sul pulsante (in alto) <strong>Tools > Add Name and Descriptions To Prefab</strong>, 
              selezionare la cartella <u>prefab clone</u>, e una descrizione, nome e immagine verranno automaticamente
              assegnati a ogni figlio e un titolo al genitore.
            </p>
          </div>
          
          <div class="content-media">
            <div class="image-group">
              <ImageZoomable 
                src="/images/Addname.png" 
                alt="Aggiungi Nome e Descrizione"
                caption="Menu per aggiungere nome e descrizione"
                class="standard-image"
              />
              <ImageZoomable 
                src="/images/prefabcloneadd.png" 
                alt="Prefab Clone Add"
                caption="Selezione della cartella prefab clone"
                class="standard-image"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">ATTENZIONE AI CAMPI</h2>
        
        <div class="content-block">
          <div class="content-text">
            <p>
              <strong class="text-danger">Non inserire nulla all'interno del campo</strong>
            </p>
            <ul class="step-list">
              <li>1a immagine: figlio</li>
              <li>2a immagine: genitore</li>
            </ul>
          </div>
          
          <div class="content-media">
            <div class="image-group">
              <ImageZoomable 
                src="/images/scriptabledescription.png" 
                alt="Scriptable Description"
                caption="Descrizione per il componente figlio"
                class="standard-image"
              />
              <ImageZoomable 
                src="/images/scriptabletitle.png" 
                alt="Scriptable Title"
                caption="Titolo per il componente genitore"
                class="standard-image"
              />
            </div>
          </div>
        </div>
      </div>

      <h3 class="text-center mt-5 mb-5">INSERIMENTO MANUALE DEL TESTO</h3>

      <div class="doc-section">
        <h2 class="doc-section-title">ACCESSO ALLE DESCRIZIONI</h2>
        
        <div class="content-block">
          <div class="content-text">
            <p>
              Fai doppio clic con il mouse su Piece Description o Preview Description per andare direttamente al pezzo
              corrispondente nella cartella <code>Assets > AssemblyStation > ScriptableObjects</code>
            </p>
            <p>Se selezioni Preview Description:</p>
          </div>
          
          <div class="content-media">
            <div class="image-group">
              <p>Figlio</p>
              <ImageZoomable 
                src="/images/piecedescription.png" 
                alt="Piece Description"
                caption="Descrizione del pezzo"
                class="standard-image"
              />
              <p>Genitore</p>
              <ImageZoomable 
                src="/images/prewdescription.png" 
                alt="Preview Description"
                caption="Descrizione di anteprima"
                class="standard-image"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">MODIFICA DEL TITOLO PREFAB</h2>
        
        <div class="content-block">
          <div class="content-text">
            <p>
              Si aprirà una finestra con tutti gli scriptable objects creati per ogni Prefab, qui puoi inserire il nome del prefab e la descrizione.
            </p>
          </div>
          
          <div class="content-media">
            <div class="image-group">
              <ImageZoomable 
                src="/images/titlePrefab.png" 
                alt="Title Prefab"
                caption="Titolo del prefab"
                class="standard-image"
              />
              <ImageZoomable 
                src="/images/previewasset.png" 
                alt="Preview Asset"
                caption="Anteprima dell'asset"
                class="standard-image"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title" id="PieceDescriptionR">MODIFICA DELLA DESCRIZIONE DEI PEZZI</h2>
        
        <div class="content-block">
          <div class="content-text">
            <p>
              Mentre se selezioni Piece Description, si aprirà una finestra con tutti gli scriptable objects
              creati per ogni figlio del prefab, qui puoi inserire il nome, la descrizione, l'immagine e
              altre cose che vedremo più avanti.
            </p>
          </div>
          
          <div class="content-media">
            <div class="image-group">
              <ImageZoomable 
                src="/images/pieces.png" 
                alt="Pieces"
                caption="Elenco dei pezzi"
                class="standard-image"
              />
              <ImageZoomable 
                src="/images/pieceslist.png" 
                alt="Pieces List"
                caption="Lista completa dei pezzi"
                class="standard-image"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">ANTEPRIMA DEL MODELLO</h2>
        
        <div class="content-block">
          <div class="content-text">
            <p>
              Questo è ciò che verrà visualizzato nel gioco per l'anteprima del modello.
            </p>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/panelpreview.png" 
              alt="Panel Preview"
              caption="Anteprima del pannello modello"
              class="standard-image"
            />
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">ANTEPRIMA DEL PEZZO</h2>
        
        <div class="content-block">
          <div class="content-text">
            <p>
              Questo è ciò che verrà visualizzato nel gioco per l'anteprima del pezzo.
            </p>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/piecespanel.png" 
              alt="Pieces Panel"
              caption="Pannello di anteprima dei pezzi"
              class="standard-image"
            />
          </div>
        </div>
      </div>

      <h3 class="text-center mt-5 mb-5">IMMAGINI</h3>

      <div class="doc-section">
        <h2 class="doc-section-title">GESTIONE DELLE IMMAGINI</h2>
        
        <div class="content-block">
          <div class="content-text">
            <p>
              Ogni "pezzo" avrà un'immagine associata che verrà visualizzata nell'anteprima.
            </p>
            <p>
              L'immagine viene generata automaticamente quando premiamo il pulsante <strong>Tools > Add Name and Descriptions To Prefab</strong>
            </p>
            <p>
              Se vuoi inserire un'immagine personale, basta andare alla Piece Description e
              selezionare l'immagine desiderata, sostituendo quella generata dal sistema.
            </p>
            <p>
              Funzionalità (Modalità Editor): quando si fa clic su Add Name and Descriptions To Prefab, viene
              generata una telecamera davanti al pezzo e viene scattata una foto, questa foto viene salvata nella
              cartella <code>Assets > AssemblyStation > Screenshot > </code> ed è associata al figlio. Per ovvi
              motivi, l'immagine potrebbe essere compromessa dalla dimensione del pezzo e da un angolo errato. Per questo
              motivo, si consiglia di inserire un'immagine personale se si verifica questo problema.
            </p>
          </div>
          
          <div class="content-media">
            <div class="image-group">
              <ImageZoomable 
                src="/images/imagepiece.png" 
                alt="Image Piece"
                caption="Immagine del pezzo"
                class="standard-image"
              />
              <ImageZoomable 
                src="/images/imagepiecePanel.png" 
                alt="Image Piece Panel"
                caption="Pannello immagine del pezzo"
                class="standard-image"
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
  name: 'DescriptionsIT',
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
}

.image-group {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
}
</style>
