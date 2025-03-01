<template>
  <div>
    <ContentSection>
      <h1>2. GUIDA FBX E MATERIALI</h1>
      <p>
        Presta attenzione a questa parte, è essenziale per utilizzare l'asset. Assembly Station funziona
        attraverso <strong>SKINNED MESH RENDER</strong> e <strong>MESH RENDER</strong>.
      </p>

      <div class="content">
        <div>
          <h3>Modello FBX</h3>
          <p>
            Se hai un modello FBX, devi estrarre tutti i materiali e metterli nella cartella
            <strong>Resources</strong> all'interno del percorso
            <code>Assets > AssemblyStation > Resources</code>.
          </p>
        </div>
        <div>
          <img src="/src/assets/images/resources.png" alt="Percorso Resources" class="img-fluid" @click="zoomImage">
        </div>
      </div>

      <div class="content mt-4">
        <div>
          <p>
            Per estrarre i materiali, vai qui:
          </p>
        </div>
        <div>
          <div class="image-group">
            <img src="/src/assets/images/Fbx2.png" alt="Esempio Fbx2" class="img-fluid" @click="zoomImage">
            <img src="/src/assets/images/Fbx3.png" alt="Esempio Fbx3" class="img-fluid" @click="zoomImage">
          </div>
          <p>
            E seleziona la cartella Resources.
          </p>
        </div>
      </div>

      <div class="content mt-4">
        <div>
          <p>
            Una volta fatto, torna al modello FBX e seleziona le opzioni indicate dalle frecce nell'immagine qui sotto.
            <br>
            <br>Automaticamente il modello riconoscerà i
            materiali presenti nella cartella.
          </p>
        </div>
        <div>
          <img src="/src/assets/images/FBX.png" alt="Esempio FBX" class="img-fluid" @click="zoomImage">
        </div>
      </div>
    </ContentSection>
  </div>
</template>

<script>
import ContentSection from '@/components/ContentSection.vue'

export default {
  name: 'FBXGuideIT',
  components: {
    ContentSection
  },
  methods: {
    zoomImage(event) {
      const img = event.target;
      const src = img.getAttribute('src');
      
      window.open(src, '_blank');
    }
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

.image-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.img-fluid {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.img-fluid:hover {
  transform: scale(1.01);
}

@media (max-width: 768px) {
  .content {
    flex-direction: column;
  }
}
</style>
