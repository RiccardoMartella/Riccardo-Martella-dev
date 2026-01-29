<template>
  <div class="versions-page">
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="text-center mb-5">
      
            <h1 class="display-4 fw-bold text-accent mb-4">Versioni Rilasciate</h1>
            <p class="lead">
              Segui l'evoluzione di Assembly Station con la nostra cronologia delle versioni. Clicca su una versione per i dettagli o scarica direttamente dall'Unity Asset Store.
            </p>
          </div>

          <div class="versions-table-container">
            <table class="versions-table table table-hover">
              <thead>
                <tr>
                  <th>Versione</th>
                  <th>Data di rilascio</th>
                  <th>Stato</th>
                  <th>Azioni</th>
                </tr>
              </thead>
              <tbody>
                <tr @click="showDetails(0)" class="version-row">
                  <td><strong>1.5.4</strong></td>
                  <td>28 Gennaio 2026</td>
                  <td><span class="badge bg-primary">Ultima</span></td>
                  <td>
                    <button class="btn btn-sm btn-info" @click.stop="showDetails(0)">
                      <i class="bi bi-info-circle"></i> Dettagli
                    </button>
                  </td>
                </tr>
                <tr @click="showDetails(1)" class="version-row">
                  <td><strong>1.4.3</strong></td>
                  <td>9 Gennaio 2026</td>
                  <td></td>
                  <td>
                    <button class="btn btn-sm btn-info" @click.stop="showDetails(1)">
                      <i class="bi bi-info-circle"></i> Dettagli
                    </button>
                  </td>
                </tr>
                <tr @click="showDetails(2)" class="version-row">
                  <td><strong>1.3.3</strong></td>
                  <td>29 Giugno 2025</td>
                  <td></td>
                  <td>
                    <button class="btn btn-sm btn-info" @click.stop="showDetails(2)">
                      <i class="bi bi-info-circle"></i> Dettagli
                    </button>
                  </td>
                </tr>
                <tr @click="showDetails(3)" class="version-row">
                  <td><strong>1.2.3</strong></td>
                  <td>15 Maggio 2025</td>
                  <td></td>
                  <td>
                    <button class="btn btn-sm btn-info" @click.stop="showDetails(3)">
                      <i class="bi bi-info-circle"></i> Dettagli
                    </button>
                  </td>
                </tr>
                <tr @click="showDetails(4)" class="version-row">
                  <td><strong>1.2.2</strong></td>
                  <td>8 Maggio 2025</td>
                  <td></td>
                  <td>
                    <button class="btn btn-sm btn-info" @click.stop="showDetails(4)">
                      <i class="bi bi-info-circle"></i> Dettagli
                    </button>
                  </td>
                </tr>
                <tr @click="showDetails(5)" class="version-row">
                  <td><strong>1.2.1</strong></td>
                  <td>28 Aprile 2025</td>
                  <td></td>
                  <td>
                    <button class="btn btn-sm btn-info" @click.stop="showDetails(5)">
                      <i class="bi bi-info-circle"></i> Dettagli
                    </button>
                  </td>
                </tr>
                <tr @click="showDetails(6)" class="version-row">
                  <td><strong>1.1.1</strong></td>
                  <td>14 Aprile 2025</td>
                  <td></td>
                  <td>
                    <button class="btn btn-sm btn-info" @click.stop="showDetails(6)">
                      <i class="bi bi-info-circle"></i> Dettagli
                    </button>
                  </td>
                </tr>
                <tr @click="showDetails(7)" class="version-row">
                  <td><strong>1.0.1</strong></td>
                  <td>3 Aprile 2025</td>
                  <td></td>
                  <td>
                    <button class="btn btn-sm btn-info" @click.stop="showDetails(7)">
                      <i class="bi bi-info-circle"></i> Dettagli
                    </button>
                  </td>
                </tr>
                <tr @click="showDetails(8)" class="version-row">
                  <td><strong>1.0.0</strong></td>
                  <td>1 Aprile 2025</td>
                  <td></td>
                  <td>
                    <button class="btn btn-sm btn-info" @click.stop="showDetails(8)">
                      <i class="bi bi-info-circle"></i> Dettagli
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="text-center mt-5">
            <RouterLink to="/it" class="btn btn-outline-secondary me-3">
              <i class="bi bi-arrow-left me-2"></i>Torna alla Home
            </RouterLink>
            <a href="https://prf.hn/click/camref:1110l4PAz/destination:https%3A%2F%2Fassetstore.unity.com%2Fpackages%2Fslug%2F313569" target="_blank" class="btn btn-primary">
              <i class="bi bi-cart-fill me-2"></i>Acquista
            </a>
          </div>
        </div>
      </div>
    </div>
 
    <div class="modal fade" id="versionDetailsModal" tabindex="-1" aria-labelledby="versionDetailsModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header" :class="{ 'modal-header-latest': selectedVersion?.isLatest }">
            <h5 class="modal-title" id="versionDetailsModalLabel">
              {{ selectedVersion?.version }} - {{ selectedVersion?.date }}
              <span v-if="selectedVersion?.isLatest" class="badge bg-primary ms-2">Ultima</span>
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ref="closeModalButton"></button>
          </div>
          <div class="modal-body">
            <div v-if="selectedVersion">
              <h4>Novità</h4>
              <ul class="changelog-list">
                <li v-for="(item, index) in selectedVersion.changes" :key="index">
                  {{ item }}
                </li>
              </ul>
              
              <div class="version-requirements mt-4">
                <h4>Requisiti</h4>
                <p><strong>Versione Unity:</strong> {{ selectedVersion.requirements.unity }}</p>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Chiudi</button>
            <a :href="selectedVersion?.downloadUrl" target="_blank" class="btn btn-primary">
              <i class="bi bi-download me-2"></i>Scarica dall'Asset Store
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap';
import { useSEO } from '@/composables/useSEO.js'

export default {
  name: 'VersionsIT',
  setup() {
    useSEO({
      title: 'Cronologia Versioni - Assembly Station Asset Unity',
      description: 'Cronologia completa delle versioni e changelog per l\'asset Unity Assembly Station. Vedi tutti gli aggiornamenti, nuove funzionalità, correzioni di bug e miglioramenti.',
      keywords: 'Versioni Assembly Station, changelog, cronologia aggiornamenti, aggiornamenti asset Unity, cronologia versioni',
      url: 'https://www.assembly-station.com/it/versions',
      locale: 'it_IT'
    })
  },
  data() {
    return {
      versionModal: null,
      selectedVersion: null,
      lastFocusedElement: null,
      versions: [
        {
          version: "Versione 1.5.4",
          date: "28 Gennaio 2026",
          isLatest: true,
          changes: [
            "Correzioni di bug",
            "Risolto un problema per cui la modifica della sensibilità dello zoom della Orbit Camera non veniva applicata correttamente.",
            "Risolto un bug che consentiva la rotazione della camera e l'interazione con il modello 3D mentre il mouse era sopra l'interfaccia.",
            "Risolto un problema che impediva la visualizzazione corretta del nome del gruppo assegnato su un pezzo.",
            "Nuove funzionalità",
            "Aggiunto un nuovo sistema di modifica delle risorse:",
            "Gli utenti possono ora aggiungere liberamente nuove risorse.",
            "Le risorse vengono aggiornate dinamicamente nel livello visivo/interfaccia.",
            "Migliorato il flusso di assegnazione del costo delle risorse per i pezzi:",
            "Le risorse esistenti possono essere selezionate direttamente dal Layer Risorse.",
            "Nuove risorse possono essere aggiunte durante il processo di assegnazione.",
            "Il flusso complessivo è più veloce, chiaro e pratico."
          ],
          requirements: {
            unity: "2022.3.23f1 o successiva",
            platforms: "Windows, macOS, Linux, iOS, Android"
          },
          downloadUrl: "https://prf.hn/click/camref:1110l4PAz/destination:https%3A%2F%2Fassetstore.unity.com%2Fpackages%2Fslug%2F313569"
        },
        {
          version: "Versione 1.4.3",
          date: "9 Gennaio 2026",
          isLatest: false,
          changes: [
            "Novità principali",
            "Controlli della camera migliorati: La rotazione della camera è ora più fluida e non si blocca più quando il cursore passa sopra elementi dell'interfaccia.",
            "Ottimizzazioni di sistema: Velocità di caricamento significativamente migliorate e ridotto consumo di memoria durante sessioni di gioco estese.",
            "Costruzione intelligente di gruppo: Quando si costruiscono più pezzi insieme, le risorse vengono verificate e consumate solo se sufficienti per l'intero gruppo, prevenendo costruzioni parziali.",
            "Correzioni",
            "Risolto il problema del pulsante \"Salva\" che rimaneva disabilitato dopo aver smontato i pezzi.",
            "Risolti problemi visivi con i materiali su oggetti con LOD multipli.",
            "Migliorata gestione delle risorse per un comportamento più coerente.",
            "Risolti diversi bug minori che potevano causare rallentamenti o blocchi in situazioni specifiche."
          ],
          requirements: {
            unity: "2022.3.23f1 o successiva",
            platforms: "Windows, macOS, Linux, iOS, Android"
          },
          downloadUrl: "https://prf.hn/click/camref:1110l4PAz/destination:https%3A%2F%2Fassetstore.unity.com%2Fpackages%2Fslug%2F313569"
        },
        {
          version: "Versione 1.3.3",
          date: "29 Giugno 2025",
          isLatest: false,
          changes: [
            "Novità principali",
            "Ora puoi bloccare i pezzi durante il processo di costruzione! Per sbloccarli dovrai prima costruirne un certo numero — introducendo un nuovo sistema di progressione che aggiunge profondità strategica e pianificazione alla costruzione.",
            "Risolto un problema per cui i quadrati nel pannello sinistro (che rappresentano ogni pezzo) non andavano a capo correttamente.",
            "Risolto un bug per cui le descrizioni lunghe non andavano a capo correttamente, causando problemi di layout e interfaccia."
          ],
          requirements: {
            unity: "2022.3.23f1 o successiva",
            platforms: "Windows, macOS, Linux, iOS, Android"
          },
          downloadUrl: "https://prf.hn/click/camref:1110l4PAz/destination:https%3A%2F%2Fassetstore.unity.com%2Fpackages%2Fslug%2F313569"
        },
        {
          version: "Versione 1.2.3",
          date: "15 Maggio 2025",
          isLatest: false,
          changes: [
            "Ora è possibile spostare in sicurezza il punto di assemblaggio senza doverlo riallineare manualmente ai confini o alla griglia"
          ],
          requirements: {
            unity: "2022.3.23f1 o successiva",
            platforms: "Windows, macOS, Linux, iOS, Android"
          },
          downloadUrl: "https://prf.hn/click/camref:1110l4PAz/destination:https%3A%2F%2Fassetstore.unity.com%2Fpackages%2Fslug%2F313569"
        },
        {
          version: "Versione 1.2.2",
          date: "8 Maggio 2025",
          isLatest: false,
          changes: [
            "Piccoli miglioramenti al pannello delle categorie per una migliore usabilità",
            "Comportamento di clic raffinato sui pulsanti dei pezzi per un'esperienza di interazione più fluida e coerente"
          ],
          requirements: {
            unity: "2022.3.23f1 o successiva",
            platforms: "Windows, macOS, Linux, iOS, Android"
          },
          downloadUrl: "https://prf.hn/click/camref:1110l4PAz/destination:https%3A%2F%2Fassetstore.unity.com%2Fpackages%2Fslug%2F313569"
        },
        {
          version: "Versione 1.2.1",
          date: "28 Aprile 2025",
          isLatest: false,
          changes: [
            "Aggiunta griglia di posizionamento degli oggetti per un posizionamento più facile e preciso",
            "Controllo della camera migliorato: ogni pezzo può ora avere una distanza e un angolo di zoom personalizzati quando viene messo a fuoco",
            "Aggiunti angoli di orbita personalizzati per prefab per un comportamento della camera più su misura",
            "Risolti problemi di comportamento dell'interfaccia utente relativi alla selezione e alla conferma dei pezzi"
          ],
          requirements: {
            unity: "2022.3.23f1 o successiva",
            platforms: "Windows, macOS, Linux, iOS, Android"
          },
          downloadUrl: "https://prf.hn/click/camref:1110l4PAz/destination:https%3A%2F%2Fassetstore.unity.com%2Fpackages%2Fslug%2F313569"
        },
        {
          version: "Versione 1.1.1",
          date: "14 Aprile 2025",
          isLatest: false,
          changes: [
            "Supporto completo per modelli con LOD (Level of Detail)",
            "Capacità di caricare modelli più complessi e dettagliati",
            "Controllo della camera migliorato: ogni pezzo può ora avere una distanza di zoom e un angolo personalizzati quando viene messo a fuoco",
            "Risolto un problema in cui il pulsante associato a un pezzo non si comportava correttamente dopo la conferma"
          ],
          requirements: {
            unity: "2022.3.23f1 o successiva",
            platforms: "Windows, macOS, Linux, iOS, Android"
          },
          downloadUrl: "https://prf.hn/click/camref:1110l4PAz/destination:https%3A%2F%2Fassetstore.unity.com%2Fpackages%2Fslug%2F313569"
        },
        {
          version: "Versione 1.0.1",
          date: "3 Aprile 2025",
          isLatest: false,
          changes: [
            "Risolto: bug degli effetti visivi",
            "Correzioni di bug e miglioramenti delle prestazioni"
          ],
          requirements: {
            unity: "2022.3.23f1 o successiva",
            platforms: "Windows, macOS, Linux, iOS, Android"
          },
          downloadUrl: "https://prf.hn/click/camref:1110l4PAz/destination:https%3A%2F%2Fassetstore.unity.com%2Fpackages%2Fslug%2F313569"
        },
        {
          version: "Versione 1.0.0",
          date: "1 Aprile 2025",
          isLatest: false,
          changes: [
            "Rilascio iniziale di Assembly Station"
          ],
          requirements: {
            unity: "2022.3.23f1 o successiva",
            platforms: "Windows, macOS, Linux, iOS, Android"
          },
          downloadUrl: "https://prf.hn/click/camref:1110l4PAz/destination:https%3A%2F%2Fassetstore.unity.com%2Fpackages%2Fslug%2F313569"
        }
      ]
    }
  },
  mounted() {
    const modalEl = document.getElementById('versionDetailsModal');
    this.versionModal = new Modal(modalEl);
    
    modalEl.addEventListener('hidden.bs.modal', () => {
      if (this.lastFocusedElement) {
        this.lastFocusedElement.focus();
      }
    });
  },
  methods: {
    showDetails(index) {
      this.lastFocusedElement = document.activeElement;
      this.selectedVersion = this.versions[index];
      this.versionModal.show();

      this.$nextTick(() => {
        if (this.$refs.closeModalButton) {
          this.$refs.closeModalButton.focus();
        }
      });
    }
  }
}
</script>

<style scoped>
.versions-page {
  padding-top: 60px;
  padding-bottom: 50px;
}

.text-accent {
  color: #00A3FF;
}

.versions-table-container {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.versions-table {
  margin-bottom: 0;
}

.versions-table th {
  background-color: #f8f9fa;
  border-bottom: 2px solid #dee2e6;
  font-weight: 600;
}

.version-row {
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.version-row:hover {
  background-color: #e6f4ff !important;
  transform: translateY(-2px);
}

.badge.bg-primary {
  background-color: #00A3FF !important;
}

.btn-info {
  background-color: #e6f4ff;
  border-color: #cce5ff;
  color: #00A3FF;
}

.btn-info:hover {
  background-color: #cce5ff;
  border-color: #b8daff;
  color: #0088cc;
}

.btn-primary {
  background-color: #00A3FF;
  border-color: #00A3FF;
}

.btn-primary:hover {
  background-color: #0088cc;
  border-color: #0088cc;
}

.changelog-list li {
  margin-bottom: 8px;
}

.modal-header-latest {
  background-color: #e6f7ff;
  border-bottom: 2px solid #00A3FF;
}

.language-selector {
  display: inline-flex;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.language-btn {
  padding: 6px 12px;
  background-color: #f8f9fa;
  color: #495057;
  text-decoration: none;
  transition: all 0.2s ease;
  font-size: 0.9rem;
  border: none;
}

.language-btn.active {
  background-color: #00A3FF;
  color: white;
  font-weight: 500;
}

.language-btn:hover:not(.active) {
  background-color: #e9ecef;
}

.modal-content {
  border: none;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
}

.modal-title {
  color: #333;
  font-weight: 600;
}

.modal-body h4 {
  color: #00A3FF;
  margin-top: 20px;
  margin-bottom: 15px;
  font-weight: 600;
}

.version-requirements {
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid #00A3FF;
}

.version-requirements h4 {
  margin-top: 0;
}
</style>
