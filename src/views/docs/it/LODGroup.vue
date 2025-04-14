<template>
  <div class="doc-page">
    <ContentSection>
      <h1 class="doc-title">11. LOD GROUP</h1>

      <div class="doc-section">
        <h2 class="doc-section-title">SUPPORTO PER LOD GROUP</h2>

        <div class="content-block">
          <div class="content-text">
            <p>
              Assembly Station supporta completamente i modelli che utilizzano
              LOD Group (Level of Detail), consentendoti di creare assemblaggi
              interattivi anche con modelli ottimizzati per diverse distanze di
              visualizzazione.
            </p>
            <p>
              Quando lavori con modelli che contengono LOD Group, ricordati che:
            </p>
            <ul>
              <li>
                Il <strong>Descriptor Component</strong> deve essere applicato
                al livello <strong>LOD0</strong> (massimo dettaglio) del prefab
                <div class="alert alert-success mt-2 mb-2">
                  <i class="bi bi-lightning-fill me-2"></i>
                  <div>
                    <strong>Suggerimento:</strong> Il Descriptor Component è
                    documentato in dettaglio nella sezione
                    <router-link to="/it/docs/descriptions" class="alert-link"
                      >4. Aggiungere Descrizioni e Immagini</router-link
                    >
                    di questa documentazione. Consultala per istruzioni complete
                    su come aggiungere e configurare questo componente.
                  </div>
                </div>
              </li>
              <li>
                Il sistema di Assembly riconoscerà automaticamente i LOD Group e
                gestirà correttamente il passaggio tra i diversi livelli di
                dettaglio
              </li>
              <li>
                Tutte le impostazioni per i gruppi LOD rimangono le stesse
                utilizzate nel resto del sistema
              </li>
            </ul>

            <div class="info-box mt-4">
              <h5>Vantaggi dell'uso dei LOD Group</h5>
              <p>
                L'utilizzo dei LOD Group con Assembly Station offre notevoli
                vantaggi di prestazioni per scene complesse:
              </p>
              <ul>
                <li>
                  Riduzione del carico sulla GPU quando gli oggetti sono
                  distanti
                </li>
                <li>
                  Possibilità di utilizzare modelli altamente dettagliati senza
                  compromettere le prestazioni
                </li>
                <li>
                  Maggiore scalabilità dell'applicazione su dispositivi con
                  diverse capacità hardware
                </li>
              </ul>
            </div>
          </div>

          <div class="content-media">
            <ImageZoomable
              src="/images/LOD0.jpg"
              alt="LOD Group con Assembly Station"
              caption="Esempio di LOD Group - Il Description Component va applicato al livello LOD0"
            />
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">CONFIGURAZIONE DEI LOD GROUP</h2>

        <div class="content-block">
          <div class="content-text">
            <p>
              Per configurare correttamente un modello con LOD Group per l'uso
              in Assembly Station:
            </p>

            <ol class="numbered-list">
              <li>
                <strong
                  >Prepara il tuo modello con i diversi livelli di
                  dettaglio</strong
                >
                <p>
                  Assicurati che il tuo modello abbia correttamente configurati
                  i diversi livelli LOD (LOD0, LOD1, LOD2, ecc.)
                </p>
              </li>
              <li>
                <strong>Aggiungi i Descriptor Component</strong>
                <p>
                  Aggiungi sempre i Descriptor Component al livello LOD0
                  (dettaglio massimo) del modello
                </p>
              </li>
              <li>
                <strong>Configura le proprietà normali</strong>
                <p>
                  Configura tutte le altre proprietà come faresti per qualsiasi
                  altro componente di Assembly Station
                </p>
              </li>
            </ol>

            <div class="alert alert-warning mt-4">
              <i class="bi bi-exclamation-triangle-fill me-2"></i>
              <div>
                <strong>Attenzione per gruppi di LOD:</strong> Se desideri
                raggruppare più modelli LOD in un unico pulsante nell'interfaccia
                utente, consulta le istruzioni nella sezione
                <router-link to="/it/docs/categories" class="alert-link"
                  >6. Tag/Categorie/Gruppi</router-link
                >
                della documentazione. Presta particolare attenzione a non
                confondere i nomi dei gruppi LOD con i tag di categorizzazione,
                poiché hanno funzioni diverse. I gruppi LOD gestiscono i livelli
                di dettaglio, mentre i tag del punto 6 controllano come i
                componenti vengono raggruppati nell'interfaccia utente.
              </div>
            </div>

            <div class="alert alert-info">
              <i class="bi bi-info-circle-fill me-2"></i>
              <strong>Nota:</strong> Assembly Station utilizzerà automaticamente
              i livelli di dettaglio appropriati in base alla distanza della
              camera dall'oggetto. Non è necessaria alcuna configurazione
              aggiuntiva specifica per i LOD Group.
            </div>
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">
          CONVENZIONI DI DENOMINAZIONE PER I LIVELLI LOD
        </h2>

        <div class="content-block">
          <div class="content-text">
            <p>
              È consigliabile utilizzare una convenzione di denominazione
              coerente per i livelli LOD per identificarli e gestirli
              facilmente:
            </p>

            <div class="code-example">
              <pre><code>GROUP BARREL
├── barrel_01_LOD0    // Versione ad alto dettaglio
├── barrel_01_LOD1    // Versione a dettaglio medio
├── barrel_01_LOD2    // Versione a basso dettaglio
│
└── GROUP BARREL_02
    ├── barrel_02_LOD0    // Alto dettaglio per il secondo barile
    ├── barrel_02_LOD1    // Dettaglio medio per il secondo barile
    └── barrel_02_LOD2    // Basso dettaglio per il secondo barile</code></pre>
            </div>

            <p class="mt-3">
              Questa struttura di denominazione offre diversi vantaggi:
            </p>

            <ul>
              <li>
                <strong>Chiarezza:</strong> Ogni livello LOD ha un nome univoco
                che include sia l'identificatore dell'oggetto che il livello LOD
              </li>
              <li>
                <strong>Organizzazione:</strong> Facilita la gestione di
                gerarchie complesse con più gruppi LOD
              </li>
              <li>
                <strong>Coerenza:</strong> Aiuta a mantenere una struttura
                uniforme tra diversi modelli e progetti
              </li>
            </ul>

            <div class="alert alert-warning mt-3">
              <i class="bi bi-exclamation-triangle-fill me-2"></i>
              <strong>Importante:</strong> Anche se puoi utilizzare qualsiasi
              convenzione di denominazione preferisci, assicurati che il
              Descriptor Component sia sempre collegato all'oggetto LOD0
              (massimo dettaglio) in ogni LOD Group.
            </div>
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">LOD GROUP IN AZIONE</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <p>
              Guarda come funzionano i LOD Group in Assembly Station con questo video dimostrativo. Nota come il sistema passa fluidamente tra i diversi livelli di dettaglio in base alla distanza della telecamera, mantenendo la qualità visiva e ottimizzando le prestazioni.
            </p>
          </div>
          
          <div class="content-media">
            <div class="video-container">
              <video controls class="w-100 rounded">
                <source src="https://www.dropbox.com/scl/fi/q7560hzsh2326ntwyfk1g/LODtest.mp4?rlkey=ziooqb272jcjtgpw7n1bgnxvw&st=m1jneh1f&dl=1" type="video/mp4">
                Il tuo browser non supporta il tag video HTML5.
              </video>
              <p class="caption">Dimostrazione LOD Group - transizioni fluide tra diversi livelli di dettaglio</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="doc-section">
        <h2 class="doc-section-title">BEST PRACTICES</h2>

        <div class="content-block">
          <div class="content-text">
            <ul class="check-list">
              <li>
                <strong>Verifica la corretta configurazione dei LOD</strong>:
                Assicurati che i LOD Group siano configurati con transizioni
                fluide tra i livelli
              </li>
              <li>
                <strong>Testa a diverse distanze</strong>: Verifica il
                comportamento del tuo assemblaggio a diverse distanze per
                assicurarti che i LOD funzionino come previsto
              </li>
              <li>
                <strong>Ottimizza progressivamente</strong>: Riduci
                significativamente il conteggio di poligoni nei livelli LOD più
                bassi per massimizzare i benefici di prestazione
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ContentSection>
  </div>
</template>

<script>
import ContentSection from "@/components/ContentSection.vue";
import ImageZoomable from "@/components/ImageZoomable.vue";

export default {
  name: "LODGroupPageIT",
  components: {
    ContentSection,
    ImageZoomable,
  },
};
</script>

<style scoped>
@import "@/assets/styles/documentation.css";

.numbered-list {
  counter-reset: item;
  padding-left: 0;
}

.numbered-list li {
  display: block;
  margin-bottom: 1.5rem;
  position: relative;
  padding-left: 2.5rem;
}

.numbered-list li::before {
  content: counter(item);
  counter-increment: item;
  background: #00a3ff;
  color: white;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  position: absolute;
  left: 0;
  top: 0;
}

.numbered-list li strong {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1.1em;
}

.check-list {
  padding-left: 0;
  list-style: none;
}

.check-list li {
  padding-left: 28px;
  position: relative;
  margin-bottom: 1rem;
}

.check-list li::before {
  content: "✓";
  color: #00a3ff;
  position: absolute;
  left: 0;
  top: 0;
  font-weight: bold;
}

.alert {
  border-radius: 8px;
  padding: 15px;
  margin-top: 20px;
  display: flex;
  align-items: center;
}

.alert-info {
  background-color: #e6f7ff;
  border-left: 4px solid #00a3ff;
  color: #0055a4;
}
.alert-success {
  background-color: #e6ffe6;
  border-left: 4px solid #00a300;
  color: #005500;
}
.alert-warning {
  background-color: #fff4e6;
  border-left: 4px solid #ffa500;
  color: #995700;
}
</style>
