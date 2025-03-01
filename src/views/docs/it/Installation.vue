<template>
  <div class="doc-page">
    <ContentSection>
      <h1 class="doc-title">1. INSTALLAZIONE</h1>
      
      <p class="text-lead">
        Il progetto utilizza internamente <strong>Text Mesh Pro</strong> e <strong>Input System</strong>.
        Si prega di seguire i passaggi di seguito per una corretta installazione e configurazione.
      </p>
      
      <div class="doc-section">
        <h2 class="doc-section-title">TEXTMESH PRO NEL PROGETTO</h2>
        
        <div class="content-block">
          <div class="content-text">
            <p>
              Il pacchetto TextMesh Pro è incluso nell'editor Unity. Non è necessario installarlo separatamente.
              Puoi seguire la semplice guida al link per inserirlo nel tuo progetto
              <a href="https://docs.unity3d.com/Packages/com.unity.ugui@2.0/manual/TextMeshPro/index.html" 
                 target="_blank">Documentazione TextMesh Pro</a>.
            </p>
            
            <div class="alert-box alert-warning">
              <h4 class="alert-box-title">Nota Importante:</h4>
              <p>Potrebbe verificarsi un problema in cui non vedi il testo sui pulsanti o
              altri elementi dell'interfaccia utente. Ciò si verifica perché i componenti di testo non hanno un font assegnato.
              Seleziona semplicemente il componente di testo e assegna un font base o personalizzato per risolvere questo problema.</p>
            </div>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/text.png" 
              alt="Esempio di assegnazione font TextMesh Pro"
              caption="Pannello impostazioni font TextMesh Pro"
            />
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">INPUT SYSTEM</h2>
        
        <div class="content-block">
          <div class="content-text">
            <p>
              All'inizio del progetto, c'è un player base che può muoversi liberamente e accedere
              all'Assembly Station tramite un pulsante. Il movimento del player è controllato dall'
              <a href="https://docs.unity3d.com/Packages/com.unity.inputsystem@1.13/manual/index.html" 
                 target="_blank">Unity Input System</a>, e contiene uno script che gestisce le
              risorse dell'Assembly Station.
            </p>
            
            <div class="alert-box alert-info">
              <h4 class="alert-box-title">Opzioni di integrazione del progetto:</h4>
              <ul class="step-list">
                <li>
                  Se il tuo progetto ha già un player, puoi utilizzare il tuo Input System e aggiungere lo
                  script <code>RESOURCES COMPONENT PLAYER</code> ai componenti del tuo player.
                </li>
                <li>
                  Se vuoi utilizzare il player incluso, dovrai installare il pacchetto <code>INPUT SYSTEM</code>
                  dal Unity Package Manager.
                </li>
                <li>
                  Se il tuo progetto ha già un'implementazione Input System, modifica semplicemente lo
                  script <code>PLAYER CONTROLLER</code> per integrarlo con il tuo sistema esistente.
                </li>
              </ul>
            </div>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/input.png" 
              alt="Esempio di configurazione Input System"
              caption="Configurazione Unity Input System"
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
  name: 'InstallationIT',
  components: {
    ContentSection,
    ImageZoomable
  }
}
</script>

<style>
@import '@/assets/styles/documentation.css';
</style>
