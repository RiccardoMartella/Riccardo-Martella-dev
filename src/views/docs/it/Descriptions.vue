<template>
  <div>
    <ContentSection>
      <h1>4. AGGIUNGERE DESCRIZIONI E IMMAGINI AI PREFABS</h1>
      <p class="text-center mt-4 mb-4">
        Una volta aggiunti tutti i prefab desiderati e spostati i pivot, è necessario aggiungere una descrizione e un'immagine a ogni figlio
        che contiene MeshRenderer o SkinnedMeshRenderer, mentre al genitore deve essere assegnato un titolo.
      </p>
      <p class="text-center mt-4 mb-4">
        Tutto questo viene fatto <u>automaticamente</u> dall'asset (a seconda del numero di prefab nella
        cartella, ci vorrà più o meno tempo).
      </p>

      <div class="content mt-5">
        <div>
          <p>
            Basta cliccare sul pulsante (in alto) <strong>Tools > Add Name and Descriptions To Prefab</strong>, 
            selezionare la cartella <u>prefab clone</u>, e una descrizione, un nome e un'immagine verranno automaticamente
            assegnati a ogni figlio e un titolo al genitore.
          </p>
        </div>
        <div>
          <div>
            <ImageZoomable src="/src/assets/images/Addname.png" alt="Aggiungi Nome e Descrizione" class="mb-3" />
          </div>
          <div>
            <ImageZoomable src="/src/assets/images/prefabcloneadd.png" alt="Aggiungi Prefab Clone" />
          </div>
        </div>
      </div>

      <div class="content mt-4">
        <div>
          <p>
            <strong class="text-danger">Non inserire nulla all'interno del campo</strong>
          </p>
          <ul>
            <li>1a immagine: figlio</li>
            <li>2a immagine: genitore</li>
          </ul>
        </div>
        <div>
          <ImageZoomable src="/src/assets/images/scriptabledescription.png" alt="Descrizione Scriptable" class="mb-3" />
          <ImageZoomable src="/src/assets/images/scriptabletitle.png" alt="Titolo Scriptable" />
        </div>
      </div>

      <h3 class="text-center mt-5 mb-5">INSERIMENTO MANUALE DEL TESTO</h3>

      <div class="content mt-4">
        <div>
          <p>
            Fai doppio clic con il mouse su Piece Description o Preview Description per andare direttamente al pezzo 
            corrispondente nella cartella <code>Assets > AssemblyStation > ScriptableObjects</code>
          </p>
          <p>Se selezioni Preview Description:</p>
        </div>
        <div>
          Figlio
          <ImageZoomable src="/src/assets/images/piecedescription.png" alt="Descrizione Pezzo" class="mb-3" />
          Genitore
          <ImageZoomable src="/src/assets/images/prewdescription.png" alt="Descrizione Anteprima" />
        </div>
      </div>

      <div class="content mt-4">
        <div>
          <p>
            Si aprirà una finestra con tutti gli scriptable objects creati per ogni Prefab, qui potrai inserire il nome del prefab e la descrizione.
          </p>
        </div>
        <div>
          <ImageZoomable src="/src/assets/images/titlePrefab.png" alt="Titolo Prefab" class="mb-3" />
          <ImageZoomable src="/src/assets/images/previewasset.png" alt="Anteprima Asset" />
        </div>
      </div>

      <div class="content mt-4">
        <div>
          <p id="PieceDescriptionR">
            Mentre se selezioni Piece Description, si aprirà una finestra con tutti gli scriptable objects
            creati per ogni figlio del prefab, qui puoi inserire il nome, la descrizione, l'immagine e
            altre cose che vedremo più avanti.
          </p>
        </div>
        <div>
          <ImageZoomable src="/src/assets/images/pieces.png" alt="Pezzi" class="mb-3" />
          <ImageZoomable src="/src/assets/images/pieceslist.png" alt="Lista Pezzi" />
        </div>
      </div>

      <div class="content mt-4">
        <div>
          <p>
            Questo è ciò che verrà visualizzato nel gioco per l'Anteprima del modello.
          </p>
        </div>
        <div>
          <ImageZoomable src="/src/assets/images/panelpreview.png" alt="Pannello Anteprima" />
        </div>
      </div>

      <div class="content mt-4">
        <div>
          <p>
            Questo è ciò che verrà visualizzato nel gioco per l'Anteprima del pezzo.
          </p>
        </div>
        <div>
          <ImageZoomable src="/src/assets/images/piecespanel.png" alt="Pannello Pezzi" />
        </div>
      </div>

      <h3 class="text-center mt-5 mb-5">IMMAGINI</h3>

      <div class="content mt-4">
        <div>
          <p>
            Ogni "pezzo" avrà un'immagine associata che verrà visualizzata nell'anteprima.
          </p>
          <hr>
          <p>
            L'immagine viene generata automaticamente quando premiamo il pulsante <strong>Tools > Add Name and Descriptions To Prefab</strong>
          </p>
          <hr>
          <p>
            Se vuoi inserire un'immagine personale, basta andare alla Piece Description e
            selezionare l'immagine desiderata, sostituendo quella generata dal sistema.
          </p>
          <hr>
          <p>
            Funzionalità (Modalità Editor): quando si clicca su Add Name and Descriptions To Prefab, viene
            generata una camera di fronte al pezzo e viene scattata una foto, questa foto viene salvata nella
            cartella <code>Assets > AssemblyStation > Screenshot > </code> e viene associata al figlio. Per ovvie
            ragioni, l'immagine potrebbe essere compromessa dalle dimensioni del pezzo e da un angolo non corretto. Per questo
            motivo, si consiglia di inserire un'immagine personale se si verifica questo problema.
          </p>
        </div>
        <div>
          <ImageZoomable src="/src/assets/images/imagepiece.png" alt="Immagine Pezzo" class="mb-3" />
          <ImageZoomable src="/src/assets/images/imagepiecePanel.png" alt="Pannello Immagine Pezzo" />
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

<style scoped>
.content {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 20px;
  margin-top: 20px;
}

.content > div:first-child {
  flex: 1;
}

.content > div:last-child {
  flex: 1;
}

@media (max-width: 768px) {
  .content {
    flex-direction: column;
  }
}
</style>
