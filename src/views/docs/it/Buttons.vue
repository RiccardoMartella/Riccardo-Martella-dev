<template>
  <div>
    <ContentSection>
      <h1>5. PULSANTI E CATEGORIE PER I PREFABS</h1>
      
      <div class="d-flex justify-content-center mt-5">
        <ImageZoomable src="/src/assets/images/buttonimmage.png" style="width: 30%;" alt="Immagine Pulsante" />
      </div>
      <hr>
      <p class="text-center mt-4 mb-4">
        Per inserire i pulsanti, basta andare alla Hierarchy e selezionare Content UI
      </p>

      <div class="content mt-5">
        <div>
          <p>
            Content UI
          </p>
        </div>
        <div>
          <ImageZoomable src="/src/assets/images/contentUi.png" alt="Content UI" />
        </div>
      </div>

      <div class="content mt-5">
        <div>
          <p>
            Nell'inspector apparirà una sezione dove puoi inserire i pulsanti e le categorie per i prefab.
            Questa meccanica serve ad aggiungere varie categorie in modo che nel gioco l'utente possa selezionare i vari modelli più facilmente.
            <br><br>
            Questa funzione aggiunge i pulsanti in modalità Editor, spaziandoli automaticamente tra loro.
          </p>
        </div>
        <div>
          <ImageZoomable src="/src/assets/images/categoryprefab.png" alt="Categoria Prefab" />
        </div>
      </div>

      <h3 class="text-center mt-2">ATTENZIONE</h3>
      <div class="content mt-5">
        <div>
          <div class="mb-5">
            <p>
              Per comprendere meglio la funzionalità, ti aiuterò con un video.
            </p>
            <hr>
            <strong><u class="text-danger">PRESTA MOLTA ATTENZIONE A QUESTA PARTE</u></strong>
            <hr>
            <p>Inizialmente, le categorie saranno 3: Veicoli, Armeria, Strumenti</p>
            <hr>
            <p>Come vedrai nel video, è <u>Fondamentale</u> seguire l'ordine delle varie liste</p>
            <hr>
            <p>I nuovi pulsanti che inserirai saranno numerati nella lista, quindi i modelli corrispondenti ai pulsanti devono essere nella stessa posizione nella lista dei Pulsanti</p>
          </div>
          <div class="pt-5">
            <hr>
            <p><u>Aggiungi un pulsante a una categoria precedentemente creata:</u></p>
            <p>Come nel video:</p>
            <hr>
            <p>Elemento 0 - Auto -> Elemento 0 - Auto Sportiva<br>
              (nella tua versione non tutti i prefab sono presenti come nel video, ma serve a farti capire che dovrai utilizzare la stessa procedura con i tuoi prefab)
            </p>
            <hr>
            <p class="text-danger"><strong>ASSEGNA PRECISAMENTE TUTTE LE CATEGORIE, I PULSANTI E I PREFAB COME NEL VIDEO ALTRIMENTI NON FUNZIONERÀ</strong></p>
            <hr>
            <p><strong>Se vuoi aggiungere un pulsante a una categoria precedentemente creata, basta seguire il video ---></strong></p>
          </div>
        </div>
        <div>
          <video controls class="w-100 mb-5" src="/src/assets/video/CategoryPrefab.mp4" type="video/mp4"></video>
          <video controls class="w-100" src="/src/assets/video/newCategory.mp4" type="video/mp4"></video>
        </div>
      </div>

      <div class="content mt-5">
        <div>
          <hr>
          <p>Se vuoi aggiungere una nuova categoria oltre alle prime 3, segui il video ---></p>
          <hr>
          <p>Per aggiungere una 4a categoria, come vedrai nel video, ho dovuto prima aggiungere e assegnare la categoria Strumenti che nei precedenti video non era inserita nella lista perché non c'erano pulsanti assegnati a un prefab.</p>
          <hr>
          <p>Questo perché, come ti ho detto, è fondamentale mantenere le liste numerate altrimenti il sistema dà un errore, ovviamente, non ha senso lasciare una categoria vuota ma ho voluto mostrarti anche questo esempio</p>
          <hr>
          <p>Come vedrai nel video, ho duplicato il pulsante per poi cambiare il testo, questo perché ogni pulsante ha uno script e un numero assegnato <u>fondamentale</u> per la funzionalità, quindi quando aggiungi una nuova categoria basta duplicare, cambiare il testo e non dimenticarti di cambiare il numero che progredirà con l'aggiunta di categorie.</p>
        </div>
        <div>
          <video controls class="w-100" src="/src/assets/video/newCAtegory2.mp4" type="video/mp4"></video>
        </div>
      </div>

      <p class="text-center">
        <u><strong>Ogni volta che viene aggiunta una categoria, deve essere disabilitata<br>Solo la prima deve essere lasciata attiva</strong></u>
      </p>

      <div class="d-flex justify-content-center">
        <ImageZoomable src="/src/assets/images/active.png" alt="Attivo" />
        <ImageZoomable src="/src/assets/images/noactive.png" alt="Non Attivo" class="w-50" />
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

video {
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

@media (max-width: 768px) {
  .content {
    flex-direction: column;
  }
}
</style>
