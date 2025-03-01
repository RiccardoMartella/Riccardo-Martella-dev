<template>
  <div>
    <ContentSection>
      <h1>7. RISORSE</h1>
      <p class="text-center mt-4 mb-4">
        La sezione Risorse è più complessa e richiede conoscenze di programmazione.
        Per ovvi motivi, non posso sapere quali e come sono gestite le risorse nel tuo gioco, quindi ne ho aggiunte alcune casuali.
        Ferro, Plastica, Gomma.
        <br><br>
        Di default, la assembly station utilizza un sistema di risorse, dove ogni pezzo ha un costo e viene dedotto dall'inventario del giocatore.
      </p>

      <div class="content mt-5">
        <div>
          <p class="mb-3">
            Le risorse del giocatore si trovano nella cartella 
            <code>Assets > AssemblyStation > ScriptableObject > Resources Player</code>.
            Questa è assegnata al Player di test tramite lo <u>script (ResourcesComponentPLayer) che puoi trovare
            in <strong>PLayer Test</strong> nella Hierarchy</u>
          </p>
        </div>
        <div>
          <ImageZoomable src="/src/assets/images/ResourcesPlayer.png" alt="Risorse Giocatore" class="mb-2" />
        </div>
      </div>

      <div class="content mt-5">
        <div>
          <p class="mt-5">
            Qui assegnerai la quantità di risorse, mentre nello script (PlayerResources) puoi gestire la logica.
          </p>
        </div>
        <div>
          <ImageZoomable src="/src/assets/images/scriptresources.png" alt="Script Risorse" />
        </div>
      </div>

      <div class="content mt-5">
        <div>
          <p>
            Come visto nel capitolo <a href="#PieceDescriptionR">4</a> questa è la sezione dove puoi
            aggiungere i vari testi, immagini, ecc. nel singolo pezzo.
            Come puoi vedere, ci sono 2 sezioni di cui non abbiamo parlato <u>RESOURCES VISIBLE</u> e
            <u>RESOURCES.</u>
            <br><br>
            Qui puoi inserire i costi per ogni pezzo e rendere le risorse visibili o meno.
            <br><br>
            Esempio:
          </p>
        </div>
        <div>
          <div class="d-flex">
            <div>
              <ImageZoomable src="/src/assets/images/pieceResources.png" alt="Risorse del Pezzo" style="width: 250px;" />
            </div>
            <div>
              <ImageZoomable src="/src/assets/images/cost.png" alt="Costo" style="width: 250px;" />
            </div>
          </div>
          <div class="d-flex mt-3">
            <div>
              <ImageZoomable src="/src/assets/images/hidden.png" alt="Nascosto" style="width: 250px;" />
            </div>
            <div>
              <ImageZoomable src="/src/assets/images/hiddengame.png" alt="Nascosto in Gioco" style="width: 250px;" />
            </div>
          </div>
        </div>
      </div>

      <h4 class="text-center mt-5 text-danger">ATTENZIONE!!!</h4>
      <h5 class="text-center mb-3 text-danger">
        Per i pezzi che hanno un Gruppo, vale sempre la stessa regola, viene preso il <a href="#first"><u>primo della lista</u></a>. Quindi le risorse dovranno essere cambiate lì.
      </h5>
      <p class="text-center">
        Nel caso di pezzi con un Gruppo, ricorda che le risorse devono sempre essere cambiate nel
        primo pezzo del Gruppo, poiché i dati relativi a immagine, descrizione e costo
        sono presi da lì.
      </p>
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
