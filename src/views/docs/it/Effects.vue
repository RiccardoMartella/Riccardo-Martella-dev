<template>
  <div class="doc-page">
    <ContentSection>
    
      <h1 class="doc-title">8. EFFETTI SONORI & VISIVI</h1>
      
      <p class="text-lead">
        Durante la costruzione di un componente in Assembly Station, vengono riprodotti effetti sonori personalizzati e particelle visive per migliorare l'esperienza utente. Ogni modello può avere il proprio suono ed effetto visivo caratteristico.
      </p>
      
      <div class="doc-section">
        <h2 class="doc-section-title">COME FUNZIONANO GLI EFFETTI</h2>
        
        <div class="content-block">
          <div class="content-text">
            <p>
              Ogni volta che viene costruito un pezzo, verrà riprodotto un suono insieme a un effetto visivo. Per garantire che ogni modello abbia il proprio suono ed effetto caratteristico, il sistema utilizza due liste separate:
            </p>
            
            <ul class="feature-list">
              <li><strong>Lista Effetti Sonori</strong>: Contiene tutte le clip audio che vengono riprodotte durante la costruzione dei modelli</li>
              <li><strong>Lista Effetti Visivi</strong>: Contiene tutti gli effetti particellari che vengono visualizzati durante la costruzione dei modelli</li>
            </ul>
            
            <div class="alert-box alert-warning">
              <h4 class="alert-box-title">Nota Importante:</h4>
              <p>L'ordine degli effetti in entrambe le liste deve corrispondere all'ordine dei prefab nell'interfaccia di costruzione. Questo garantisce che vengano riprodotti il suono e l'effetto corretti per ciascun modello.</p>
            </div>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/effects.png" 
              alt="Configurazione degli effetti in Assembly Station"
              caption="Liste di Effetti Sonori e Visivi nell'Inspector"
            />
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">ABBINAMENTO PREFAB ED EFFETTI</h2>
        
        <div class="content-block">
          <div class="content-text">
            <p>
              Per una corretta configurazione, devi assicurarti che l'ordine degli elementi nelle liste degli effetti corrisponda all'ordine nella lista dei prefab dell'interfaccia di costruzione. Ad esempio:
            </p>
            
            <div class="example-box">
              <p><strong>Ordine nell'interfaccia di costruzione:</strong></p>
              <ul class="mb-3">
                <li>Elemento 0 = SportCar1</li>
                <li>Elemento 1 = AKM</li>
                <li>Elemento 2 = Mecha</li>
              </ul>
              
              <p><strong>L'equivalente assegnazione degli effetti sarebbe:</strong></p>
              <ul>
                <li>Per SportCar1 = buildSound e SmokeEffect</li>
                <li>Per AKM = buildSound1 e SmokeEffect1</li>
                <li>Per Mecha = buildSound2 e SmokeEffect2</li>
              </ul>
            </div>
            
            <p class="mt-3">
              Questa mappatura uno a uno garantisce che quando un utente seleziona e costruisce un modello specifico, vengano attivati il suono e l'effetto particellare corretti, migliorando l'esperienza immersiva.
            </p>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/uieffects.png" 
              alt="Ordine dei prefab nell'interfaccia di costruzione"
              caption="Abbinamento tra prefab dell'interfaccia e gli effetti"
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
import VideoPlayer from '@/components/VideoPlayer.vue'

export default {
  name: 'EffectsIT',
  components: {
    ContentSection,
    ImageZoomable,
    VideoPlayer
  }
}
</script>

<style>
@import '@/assets/styles/documentation.css';

.disclaimer-box {
  display: flex;
  background-color: #e6f7ff;
  border-left: 4px solid #00A3FF;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.disclaimer-icon {
  font-size: 24px;
  color: #00A3FF;
  margin-right: 15px;
  margin-top: 0;
}

.disclaimer-content h4 {
  font-size: 18px;
  margin-top: 0;
  margin-bottom: 10px;
  color: #00A3FF;
}

.disclaimer-content p {
  margin-bottom: 0;
  line-height: 1.5;
}

.feature-list {
  list-style-type: disc;
  padding-left: 20px;
  margin-bottom: 20px;
}

.feature-list li {
  margin-bottom: 8px;
}

.example-box {
  background-color: #f8f9fa;
  border-radius: 6px;
  padding: 15px;
  border-left: 4px solid #6c757d;
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
  align-items: flex-end;
}

@media (max-width: 768px) {
  .disclaimer-box {
    flex-direction: column;
  }
  
  .disclaimer-icon {
    margin-bottom: 10px;
  }
  
  .content-block {
    flex-direction: column;
  }
  
  .content-media {
    align-items: center;
    margin-top: 20px;
  }
}
</style>
