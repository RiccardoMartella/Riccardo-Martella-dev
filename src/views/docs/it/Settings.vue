<template>
  <div class="doc-page">
    <ContentSection>
      <h1 class="doc-title">11. IMPOSTAZIONI GENERALI</h1>
      
      <p class="text-lead">
        Questa pagina descrive tutte le diverse impostazioni disponibili in Assembly Station.
      </p>
      
      <div class="doc-section">
        <h2 class="doc-section-title">IMPOSTAZIONI DI COSTRUZIONE</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <p>
              Nella Hierarchy, puoi trovare il GameObject <strong>Construction UI</strong> che contiene tutte le impostazioni per:
            </p>
            <ul>
              <li>Impostazioni dei pulsanti per ogni modello</li>
              <li>Colori da assegnare per la trasparenza del modello</li>
              <li>Impostazioni individuali per ogni pezzo di ogni modello che verranno visualizzati nella griglia di sinistra</li>
              <li>Impostazioni per il popup che appare quando si clicca su un pezzo</li>
            </ul>
            <p>
              Queste impostazioni ti permettono di personalizzare completamente l'aspetto e il comportamento dei tuoi modelli interattivi.
            </p>
          </div>
          
          <div class="content-media">
            <div class="image-group">
              <ImageZoomable 
                src="/images/construction2.jpg" 
                alt="Impostazioni di Costruzione 2"
                caption="Impostazioni di interfaccia costruzione" 
              />
              <ImageZoomable 
                src="/images/construction1.jpg" 
                alt="Impostazioni di Costruzione 1"
                caption="Dettagli configurazione costruzione" 
              />
            </div>
          </div>
        </div>
      </div>
      
      <div class="doc-section">
        <h2 class="doc-section-title">IMPOSTAZIONI CAMERA LIBERA</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <p>
              Queste impostazioni controllano la camera libera che si attiva quando premi il tasto <kbd>L</kbd>.
              Puoi regolare:
            </p>
            <ul>
              <li>Velocità di movimento</li>
              <li>Sensibilità di rotazione</li>
              <li>Impostazioni dello zoom</li>
              <li>Limiti della camera</li>
            </ul>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/freecam.jpg" 
              alt="Impostazioni Camera Libera"
              caption="Configurazione camera libera" 
            />
          </div>
        </div>
      </div>
      
      <div class="doc-section">
        <h2 class="doc-section-title">IMPOSTAZIONI CAMERA ORBITALE</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <p>
              Queste impostazioni controllano la camera orbitale che ruota attorno al modello.
              Puoi configurare:
            </p>
            <ul>
              <li>Velocità di rotazione</li>
              <li>Smorzamento e fluidità</li>
              <li>Distanza minima e massima</li>
              <li>Restrizioni dell'angolo di visuale</li>
            </ul>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/orbit.jpg" 
              alt="Impostazioni Camera Orbitale"
              caption="Configurazione camera orbitale" 
            />
          </div>
        </div>
      </div>
      
      <div class="doc-section">
        <h2 class="doc-section-title">IMPOSTAZIONI EFFETTI VISIVI E SONORI</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <p>
              Queste impostazioni riguardano gli effetti sonori e visivi associati a ogni prefab.
              Puoi regolare:
            </p>
            <ul>
              <li>Volumi e trigger degli effetti sonori</li>
              <li>Parametri degli effetti visivi</li>
              <li>Tempistiche di animazione</li>
              <li>Configurazioni dei sistemi di particelle</li>
            </ul>
            <p>
              Personalizzare queste impostazioni ti permette di creare un'esperienza più immersiva e interattiva per i tuoi utenti.
            </p>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/viewdetails2.jpg" 
              alt="Impostazioni Effetti Visivi e Sonori"
              caption="Configurazione effetti visivi e sonori" 
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
  name: 'SettingsPageIT',
  components: {
    ContentSection,
    ImageZoomable
  }
}
</script>

<style>
@import '@/assets/styles/documentation.css';

.vertical {
  flex-direction: column !important;
}

.vertical .content-text {
  margin-bottom: 20px;
}

.vertical .content-media {
  width: 100%;
}

.image-group {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.image-group > div {
  flex: 1;
  min-width: 280px;
}

kbd {
  background-color: #f7f7f7;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(0,0,0,0.2);
  color: #333;
  display: inline-block;
  font-size: .85em;
  font-weight: 700;
  line-height: 1;
  padding: 2px 4px;
  white-space: nowrap;
}

@media (max-width: 768px) {
  .image-group {
    flex-direction: column;
  }
}
</style>
