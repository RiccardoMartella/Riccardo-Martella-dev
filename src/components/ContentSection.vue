<template>
  <div class="warning-box mb-3">
    <div class="warning-icon"><i class="bi bi-exclamation-triangle-fill"></i></div>
    <div class="warning-content">
      <h4>{{ isItalian ? 'ATTENZIONE!' : 'CAUTION!' }}</h4>
      <p>{{ isItalian ? 'Prima di effettuare qualsiasi modifica è altamente consigliato fare un backup del tuo progetto. Utilizza prima la scena demo di Assembly Station per verificare il corretto funzionamento delle tue modifiche e non creare errori nel tuo progetto principale.' : 'Before making any modifications, it is highly recommended to back up your project. Use the Assembly Station demo scene first to verify the correct functioning of your modifications and to avoid creating errors in your main project.' }}</p>
    </div>
  </div>
  <div class="disclaimer-box mb-3">
    <div class="disclaimer-icon"><i class="bi bi-info-circle-fill"></i></div>
    <div class="disclaimer-content">
      <h4>{{ isItalian ? 'Nota Importante' : 'Important Note' }}</h4>
      <p>{{ isItalian ? 'Le immagini e i video presenti nella documentazione potrebbero non riflettere esattamente l\'aspetto attuale dell\'asset, poiché Assembly Station è in costante evoluzione e aggiornamento. Mi impegno ad aggiornare regolarmente questa documentazione e ho evitato di utilizzare un linguaggio troppo tecnico per rendere la documentazione facilmente comprensibile a tutti.' : 'The images and videos in this documentation might not exactly match the current appearance of the asset, as Assembly Station is constantly evolving and being updated. I am committed to regularly updating this documentation and have avoided using overly technical language to make this documentation more accessible and easier to understand for everyone.' }}</p>
    </div>
  </div>
  <div class="content-section">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ContentSection',
  computed: {
    isItalian() {
      return this.$route.path.includes('/it');
    }
  }
}
</script>

<style scoped>
.content-section {
  background-color: #fff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  margin-bottom: 2rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.content-section:hover {
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.12);
}

.warning-box {
  display: flex;
  background-color: #ffebeb;
  border-left: 4px solid #dc3545;
  padding: 12px 16px;
  border-radius: 8px;
  margin: 0 0 15px 0;
}

.warning-icon {
  font-size: 22px;
  color: #dc3545;
  margin-right: 12px;
  margin-top: 0;
}

.warning-content h4 {
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 6px;
  color: #dc3545;
  font-weight: bold;
}

.warning-content p {
  margin-bottom: 0;
  line-height: 1.4;
  color: #333;
  font-size: 0.95rem;
}

.disclaimer-box {
  display: flex;
  background-color: #e6f7ff;
  border-left: 4px solid #00A3FF;
  padding: 12px 16px;
  border-radius: 8px;
  margin: 0 0 15px 0;
}

.disclaimer-icon {
  font-size: 22px;
  color: #00A3FF;
  margin-right: 12px;
  margin-top: 0;
}

.disclaimer-content h4 {
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 6px;
  color: #00A3FF;
  font-weight: bold;
}

.disclaimer-content p {
  margin-bottom: 0;
  line-height: 1.4;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .content-section {
    padding: 1.5rem;
  }
  
  .warning-box, .disclaimer-box {
    flex-direction: column;
  }
  
  .warning-icon, .disclaimer-icon {
    margin-bottom: 8px;
  }
}
</style>
