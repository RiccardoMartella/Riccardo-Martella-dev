<template>
  <div>
    <ContentSection>
      <h1>1. INSTALLAZIONE</h1>
      <p class="text-center mt-4 mb-4">
        Il progetto utilizza internamente <strong>Text Mesh Pro</strong> e <strong>Input System</strong>.
      </p>
      
      <div class="content">
        <div>
          <h3>TEXTMESH PRO NEL PROGETTO</h3>
          <p>
            Il pacchetto TextMesh Pro è incluso in Unity Editor. Non è necessario installarlo. Puoi seguire 
            la semplice guida al link per inserirlo nel progetto
            <a href="https://docs.unity3d.com/Packages/com.unity.ugui@2.0/manual/TextMeshPro/index.html">(TextMesh Pro)</a>.
          </p>
          <p>
            Potrebbe verificarsi un problema in cui non vedi il testo sui pulsanti o altre parti,
            a causa del testo che non ha un font assegnato. Basta andare sul testo e impostare un
            font di base o personalizzato.
          </p>
        </div>
        <div>
          <ImageZoomable src="/src/assets/images/text.png" alt="Esempio TextMesh Pro" />
        </div>
      </div>

      <div class="content mt-5">
        <div>
          <h3>INPUT SYSTEM</h3>
          <p>
            All'inizio del progetto, c'è un player base che può muoversi liberamente e accedere 
            all'Assembly Station tramite un pulsante. Il player viene mosso grazie all'
            <a href="https://docs.unity3d.com/Packages/com.unity.inputsystem@1.13/manual/index.html">Input System di Unity</a> 
            e contiene uno script che gestisce le risorse di Assembly Station.
          </p>
          <p>
            Se il tuo progetto ha già un player, puoi utilizzare il tuo Input System e aggiungere lo script
            <strong>RESOURCES COMPONENT PLAYER</strong> ai componenti. Se vuoi usare il mio, devi
            installare l'<strong>INPUT SYSTEM</strong>.
          </p>
          <p>
            Se un Input System è già presente, basta modificare lo script <strong>PLAYER CONTROLLER</strong>
            per integrarlo.
          </p>
        </div>
        <div>
          <ImageZoomable src="/src/assets/images/input.png" alt="Esempio Input System" />
        </div>
      </div>
    </ContentSection>
  </div>
</template>

<script>
import ContentSection from '@/components/ContentSection.vue'
import ImageZoomable from '@/components/ImageZoomable.vue'

export default {
  name: 'InstallationIT',
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
  align-items: center;
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
