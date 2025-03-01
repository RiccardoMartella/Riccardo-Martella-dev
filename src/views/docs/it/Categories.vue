<template>
  <div>
    <ContentSection>
      <h1>6. TAG/CATEGORIE/GRUPPI DI PEZZI</h1>
      <p class="text-center mt-4 mb-4">
        Una volta inseriti tutti i testi e le immagini, puoi procedere con la creazione dei TAG e dei GRUPPI.
      </p>

      <div class="content mt-5">
        <div>
          <p>
            Inizialmente, ogni pezzo del prefab non avrà un tag e sarà quindi visibile nel pannello in un'unica lista.
          </p>
        </div>
        <div>
          <ImageZoomable src="/src/assets/images/nocategory.png" alt="Nessuna Categoria" />
        </div>
      </div>

      <div class="content mt-5">
        <div>
          <p>
            Se vuoi dividere i pezzi per categoria, basta creare un tag e assegnarlo a ciascun pezzo per ogni categoria.
            Puoi selezionare più tag contemporaneamente tenendo premuto il tasto CTRL e selezionando i vari Pezzi, altrimenti premendo il tasto CTRL+SHIFT.
          </p>
        </div>
        <div>
          <ImageZoomable src="/src/assets/images/Tag.png" alt="Tag" />
        </div>
      </div>

      <div class="content mt-5">
        <div>
          <p>
            Facendo così, i pezzi saranno divisi in base al tag che hai assegnato.
          </p>
        </div>
        <div>
          <ImageZoomable src="/src/assets/images/multicat.png" alt="Categorie Multiple" style="width: 250px;" />
        </div>
      </div>

      <h4 class="text-center mt-5 text-danger">ATTENZIONE!!!</h4>
      <h4 class="text-center mb-3 text-danger">Presta attenzione a questa parte</h4>
      <h3 class="text-center mb-5">GRUPPI</h3>
      <p class="text-center">
        Ogni pezzo che contiene uno <u>SkinnedMeshRenderer o un MeshRenderer</u> verrà visualizzato nel
        pannello. Questo significa che, in presenza di modelli con centinaia di pezzi, la lista risultante sarà
        molto lunga, rendendo difficile per l'utente trovare rapidamente il pezzo desiderato.
        <br>
        Per risolvere questo problema, ho introdotto i Gruppi, che consentono di organizzare i pezzi in
        categorie specifiche, semplificando la ricerca e la gestione. Per chiarire meglio il concetto, ecco un esempio:
      </p>

      <div class="content mt-5 mb-3">
        <div>
          <p>
            In questo caso, i pezzi non hanno un gruppo assegnato e saranno quindi visualizzati in 6 pulsanti.
          </p>
        </div>
        <div>
          <ImageZoomable src="/src/assets/images/testgruppi.png" alt="Gruppi di test" />
        </div>
      </div>

      <div class="content mt-5 mb-3">
        <div>
          <p>
            Mentre una volta assegnato il gruppo, ecco il risultato:
            <br>1 pulsante per 6 pezzi
            <br><br>
            <u>Qualsiasi numero di pezzi può essere combinato in un gruppo.</u>
          </p>
        </div>
        <div>
          <ImageZoomable src="/src/assets/images/fix.png" alt="Correzione" />
        </div>
      </div>

      <div class="content mt-5 mb-3">
        <div>
          <p>
            Per assegnare il gruppo, ecco il video.
          </p>
        </div>
        <div class="d-flex justify-content-center">
          <video controls class="w-100" src="/src/assets/video/AssemblyStation-GuidaallInstallazione.mp4" type="video/mp4"></video>
        </div>
      </div>

      <p id="first" class="text-center">
        Quando si utilizzano i Gruppi, l'immagine viene automaticamente selezionata dal primo pezzo del gruppo, così come la descrizione e il nome.
      </p>

      <div class="content mt-5 mb-3">
        <div>
          <p>
            Per i pezzi che hanno un Gruppo, vale sempre la stessa regola, viene preso il primo della lista. Quindi le risorse dovranno essere cambiate lì.
          </p>
          <p>
            <strong class="text-danger">Questa funzione è ancora in fase di sviluppo per facilitare l'inserimento dell'immagine nei Gruppi</strong>
          </p>
        </div>
        <div class="d-flex justify-content-center">
          <ImageZoomable src="/src/assets/images/piceGroupFix.png" alt="Correzione Gruppo Pezzi" />
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
