<template>
  <div class="doc-page">
    <ContentSection>
      <h1 class="doc-title">2. GUIDA FBX E MATERIALI</h1>
      
      <p class="text-lead">
        Presta attenzione a questa parte, è essenziale per utilizzare l'asset. Assembly Station funziona
        attraverso <strong>SKINNED MESH RENDER</strong> e <strong>MESH RENDER</strong>.
      </p>

      <div class="doc-section">
        <h2 class="doc-section-title">MODELLO FBX</h2>
        
        <div class="content-block">
          <div class="content-text">
            <p>
              Se hai un modello FBX, devi estrarre tutti i materiali e metterli nella
              cartella <strong>Resources</strong> all'interno del percorso
              <code>Assets > AssemblyStation > Resources</code>.
            </p>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/resources.png" 
              alt="Percorso Resources"
              caption="Cartella Resources per i materiali"
            />
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">ESTRAZIONE MATERIALI</h2>
        
        <div class="content-block">
          <div class="content-text">
            <p>
              Per estrarre i materiali, vai qui:
            </p>
          </div>
          
          <div class="content-media">
            <div class="image-group">
              <ImageZoomable 
                src="/images/Fbx2.png" 
                alt="Esempio Fbx2"
                caption="Primo passaggio estrazione materiali"
              />
              <ImageZoomable 
                src="/images/Fbx3.png" 
                alt="Esempio Fbx3"
                caption="Selezione cartella Resources"
              />
            </div>
            <p class="caption">
              E seleziona la cartella Resources.
            </p>
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">CONFIGURAZIONE DEL MODELLO</h2>
        
        <div class="content-block">
          <div class="content-text">
            <p>
              Una volta fatto, torna al modello FBX e seleziona le opzioni indicate dalle frecce nell'immagine qui sotto.
              <br><br>
              Automaticamente il modello riconoscerà i materiali presenti nella cartella.
            </p>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/FBX.png" 
              alt="Esempio FBX"
              caption="Configurazione delle opzioni FBX"
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
  name: 'FBXGuideIT',
  components: {
    ContentSection,
    ImageZoomable
  }
}
</script>

<style>
@import '@/assets/styles/documentation.css';
</style>
