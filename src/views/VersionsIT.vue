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
                  <td><strong>1.0.0</strong></td>
                  <td>April 1, 2025</td>
                  <td><span class="badge bg-primary">Ultima</span></td>
                  <td>
                    <button class="btn btn-sm btn-info" @click.stop="showDetails(0)">
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
            <a href="https://assetstore.unity.com/packages/slug/313569" target="_blank" class="btn btn-primary">
              <i class="bi bi-cart-fill me-2"></i>Acquista
            </a>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Version Details Modal -->
    <div class="modal fade" id="versionDetailsModal" tabindex="-1" aria-labelledby="versionDetailsModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header" :class="{ 'modal-header-latest': selectedVersion?.isLatest }">
            <h5 class="modal-title" id="versionDetailsModalLabel">
              {{ selectedVersion?.version }} - {{ selectedVersion?.date }}
              <span v-if="selectedVersion?.isLatest" class="badge bg-primary ms-2">Ultima</span>
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                <p><strong>Piattaforme:</strong> {{ selectedVersion.requirements.platforms }}</p>
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

export default {
  name: 'VersionsIT',
  data() {
    return {
      versionModal: null,
      selectedVersion: null,
      versions: [
        {
          version: "Versione 1.0.0",
          date: "April 1, 2025",
          isLatest: true,
          changes: [
            "Rilascio iniziale di Assembly Station"
          ],
          requirements: {
            unity: "6000.0.38f1 o successiva",
            platforms: "Windows, macOS, Linux, iOS, Android"
          },
          downloadUrl: "https://assetstore.unity.com/"
        }
      ]
    }
  },
  mounted() {
    this.versionModal = new Modal(document.getElementById('versionDetailsModal'));
  },
  methods: {
    showDetails(index) {
      this.selectedVersion = this.versions[index];
      this.versionModal.show();
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
