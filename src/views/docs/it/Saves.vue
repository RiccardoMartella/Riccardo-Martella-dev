<template>
  <div>
    <ContentSection>
      <h1>8. SALVATAGGI</h1>
      
      <div class="content mt-5">
        <div>
          <p class="text-center mt-4 mb-4">
            Una volta assemblato un pezzo, il pulsante <strong>Save Build</strong> diventerà attivo.  
            Cliccandolo salverai il progresso del modello.
          </p>
        </div>
        <div>
          <ImageZoomable src="/src/assets/images/save.png" alt="Pulsante Salvataggio" class="mb-2" />
        </div>
      </div>
      
      <div class="content mt-5">
        <div>
          <p class="mt-5">
            I salvataggi dei modelli si trovano nella cartella  
            <code>Assets > AssemblyStation > Saves</code>.
          </p>
          <hr>
          <p>
            I file di salvataggio sono divisi in due parti:  
            <ul>
              <li>Un file JSON che contiene il modello con un ID univoco.</li>
              <li>Un file per il salvataggio di ogni singolo pezzo assemblato.</li>
            </ul>
          </p>
          <p>
            Per resettare un modello, puoi eliminare entrambi i file o aprirli  
            e rimuovere manualmente i pezzi specifici che vuoi ripristinare.
          </p>
        </div>
        <div>
          <ImageZoomable src="/src/assets/images/savej.png" alt="File JSON di Salvataggio" class="mb-2" />
        </div>
      </div>

      <div class="content mt-5">
        <div>
          <h3>Come Funzionano i Salvataggi</h3>
          <p>
            Quando clicchi sul pulsante Save Build, il sistema registra le seguenti informazioni:
          </p>
          <ul>
            <li>Quale modello sta venendo assemblato</li>
            <li>Quali pezzi specifici sono stati posizionati</li>
            <li>La percentuale di completamento attuale</li>
          </ul>
          <p>
            La prossima volta che il giocatore aprirà l'Assembly Station e selezionerà lo stesso modello, tutti i pezzi precedentemente assemblati verranno automaticamente visualizzati come completati.
          </p>
        </div>
        <div>
          <div class="d-flex justify-content-center">
            <ImageZoomable src="/src/assets/images/save.png" alt="Esempio Pulsante Salvataggio" />
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
