<template>
  <div class="versions-page">
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="text-center mb-5">
            <h1 class="display-4 fw-bold text-accent mb-4">Released Versions</h1>
            <p class="lead">
              Track the evolution of Assembly Station with our version history. Click on a version for details or download directly from Unity Asset Store.
            </p>
          </div>

          <div class="versions-table-container">
            <table class="versions-table table table-hover">
              <thead>
                <tr>
                  <th>Version</th>
                  <th>Release Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr @click="showDetails(0)" class="version-row">
                  <td><strong>1.2.0</strong></td>
                  <td>October 15, 2023</td>
                  <td><span class="badge bg-primary">Latest</span></td>
                  <td>
                    <button class="btn btn-sm btn-info" @click.stop="showDetails(0)">
                      <i class="bi bi-info-circle"></i> Details
                    </button>
                  </td>
                </tr>
                <tr @click="showDetails(1)" class="version-row">
                  <td><strong>1.1.0</strong></td>
                  <td>August 3, 2023</td>
                  <td><span class="badge bg-secondary">Stable</span></td>
                  <td>
                    <button class="btn btn-sm btn-info" @click.stop="showDetails(1)">
                      <i class="bi bi-info-circle"></i> Details
                    </button>
                  </td>
                </tr>
                <tr @click="showDetails(2)" class="version-row">
                  <td><strong>1.0.0</strong></td>
                  <td>May 17, 2023</td>
                  <td><span class="badge bg-secondary">Initial</span></td>
                  <td>
                    <button class="btn btn-sm btn-info" @click.stop="showDetails(2)">
                      <i class="bi bi-info-circle"></i> Details
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="text-center mt-5">
            <RouterLink to="/" class="btn btn-outline-secondary me-3">
              <i class="bi bi-arrow-left me-2"></i>Return to Home
            </RouterLink>
            <a href="https://assetstore.unity.com/" target="_blank" class="btn btn-primary">
              <i class="bi bi-cart-fill me-2"></i>Purchase
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
              <span v-if="selectedVersion?.isLatest" class="badge bg-primary ms-2">Latest</span>
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div v-if="selectedVersion">
              <h4>What's New</h4>
              <ul class="changelog-list">
                <li v-for="(item, index) in selectedVersion.changes" :key="index">
                  {{ item }}
                </li>
              </ul>
              
              <div v-if="selectedVersion.improvements && selectedVersion.improvements.length > 0">
                <h4>Improvements</h4>
                <ul class="changelog-list">
                  <li v-for="(item, index) in selectedVersion.improvements" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              
              <div v-if="selectedVersion.bugfixes && selectedVersion.bugfixes.length > 0">
                <h4>Bug Fixes</h4>
                <ul class="changelog-list">
                  <li v-for="(item, index) in selectedVersion.bugfixes" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              
              <div class="version-requirements mt-4">
                <h4>Requirements</h4>
                <p><strong>Unity Version:</strong> {{ selectedVersion.requirements.unity }}</p>
                <p><strong>Platforms:</strong> {{ selectedVersion.requirements.platforms }}</p>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap';

export default {
  name: 'Versions',
  data() {
    return {
      versionModal: null,
      selectedVersion: null,
      versions: [
        {
          version: "Version 1.2.0",
          date: "October 15, 2023",
          isLatest: true,
          changes: [
            "Added support for multiple assembly sequences",
            "Improved performance for large assembly projects",
            "Enhanced UI responsiveness",
            "Fixed 5 minor bugs reported by the community"
          ],
          improvements: [
            "50% faster loading times for complex assemblies",
            "New animation system for smoother transitions",
            "Better memory management and garbage collection",
            "Enhanced compatibility with mobile platforms"
          ],
          bugfixes: [
            "Fixed issue with component rotation in certain scenarios",
            "Corrected material assignment on prefab duplication",
            "Resolved UI scaling problems on ultrawide monitors",
            "Fixed memory leak in assembly sequence playback",
            "Addressed compatibility issue with Unity 2022.2"
          ],
          requirements: {
            unity: "2020.3 LTS or newer",
            platforms: "Windows, macOS, Linux, iOS, Android"
          },
          downloadUrl: "https://assetstore.unity.com/"
        },
        {
          version: "Version 1.1.0",
          date: "August 3, 2023",
          isLatest: false,
          changes: [
            "Added resource management system",
            "New animation effects for component assembly",
            "Improved documentation and examples",
            "Bug fixes and performance improvements"
          ],
          improvements: [
            "Added new component inspector",
            "Optimized rendering for mobile devices",
            "Expanded API for custom integration"
          ],
          bugfixes: [
            "Fixed collision detection issues",
            "Resolved material shader compatibility problems",
            "Fixed prefab instantiation in runtime"
          ],
          requirements: {
            unity: "2020.3 LTS or newer",
            platforms: "Windows, macOS, Linux, iOS, Android"
          },
          downloadUrl: "https://assetstore.unity.com/"
        },
        {
          version: "Version 1.0.0",
          date: "May 17, 2023",
          isLatest: false,
          changes: [
            "Core assembly system functionality",
            "Basic UI for component selection",
            "Component categorization system",
            "Simple assembly instructions",
            "Unity 2020.3+ compatibility"
          ],
          requirements: {
            unity: "2020.3 LTS or newer",
            platforms: "Windows, macOS, Linux"
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
