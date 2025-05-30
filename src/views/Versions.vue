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
                  <td><strong>1.3.3</strong></td>
                  <td>June 29, 2025</td>
                  <td><span class="badge bg-primary">Latest</span></td>
                  <td>
                    <button class="btn btn-sm btn-info" @click.stop="showDetails(0)">
                      <i class="bi bi-info-circle"></i> Details
                    </button>
                  </td>
                </tr>
                <tr @click="showDetails(1)" class="version-row">
                  <td><strong>1.2.3</strong></td>
                  <td>May 15, 2025</td>
                  <td></td>
                  <td>
                    <button class="btn btn-sm btn-info" @click.stop="showDetails(1)">
                      <i class="bi bi-info-circle"></i> Details
                    </button>
                  </td>
                </tr>
                <tr @click="showDetails(2)" class="version-row">
                  <td><strong>1.2.2</strong></td>
                  <td>May 8, 2025</td>
                  <td></td>
                  <td>
                    <button class="btn btn-sm btn-info" @click.stop="showDetails(2)">
                      <i class="bi bi-info-circle"></i> Details
                    </button>
                  </td>
                </tr>
                <tr @click="showDetails(3)" class="version-row">
                  <td><strong>1.2.1</strong></td>
                  <td>April 28, 2025</td>
                  <td></td>
                  <td>
                    <button class="btn btn-sm btn-info" @click.stop="showDetails(3)">
                      <i class="bi bi-info-circle"></i> Details
                    </button>
                  </td>
                </tr>
                <tr @click="showDetails(4)" class="version-row">
                  <td><strong>1.1.1</strong></td>
                  <td>April 14, 2025</td>
                  <td></td>
                  <td>
                    <button class="btn btn-sm btn-info" @click.stop="showDetails(4)">
                      <i class="bi bi-info-circle"></i> Details
                    </button>
                  </td>
                </tr>
                <tr @click="showDetails(5)" class="version-row">
                  <td><strong>1.0.1</strong></td>
                  <td>April 3, 2025</td>
                  <td></td>
                  <td>
                    <button class="btn btn-sm btn-info" @click.stop="showDetails(5)">
                      <i class="bi bi-info-circle"></i> Details
                    </button>
                  </td>
                </tr>
                <tr @click="showDetails(6)" class="version-row">
                  <td><strong>1.0.0</strong></td>
                  <td>April 1, 2025</td>
                  <td></td>
                  <td>
                    <button class="btn btn-sm btn-info" @click.stop="showDetails(6)">
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
            <a href="https://prf.hn/click/camref:1110l4PAz/destination:https%3A%2F%2Fassetstore.unity.com%2Fpackages%2Fslug%2F313569" target="_blank" class="btn btn-primary">
              <i class="bi bi-cart-fill me-2"></i>Purchase
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
              <span v-if="selectedVersion?.isLatest" class="badge bg-primary ms-2">Latest</span>
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ref="closeModalButton"></button>
          </div>
          <div class="modal-body">
            <div v-if="selectedVersion">
              <h4>What's New</h4>
              <ul class="changelog-list">
                <li v-for="(item, index) in selectedVersion.changes" :key="index">
                  {{ item }}
                </li>
              </ul>
              
              <div class="version-requirements mt-4">
                <h4>Requirements</h4>
                <p><strong>Unity Version:</strong> {{ selectedVersion.requirements.unity }}</p>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <a :href="selectedVersion?.downloadUrl" target="_blank" class="btn btn-primary">
              <i class="bi bi-download me-2"></i>Download from Asset Store
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
  name: 'Versions',
  data() {
    return {
      versionModal: null,
      selectedVersion: null,
      lastFocusedElement: null,
      versions: [
        {
          version: "Version 1.3.3",
          date: "June 29 2025",
          isLatest: true,
          changes: [
            "Update Highlights",
            "You can now lock pieces during the building process! To unlock them, you'll need to build a required number first — introducing a new progression system that adds strategic depth and planning to construction.",
            "Fixed an issue where the squares in the left panel (representing each piece) didn't wrap correctly.",
            "Fixed a bug where long descriptions would not wrap properly, causing layout and UI issues."
          ],
          requirements: {
            unity: "2022.3.23f1 or newer",
            platforms: "Windows, macOS, Linux, iOS, Android"
          },
          downloadUrl: "https://prf.hn/click/camref:1110l4PAz/destination:https%3A%2F%2Fassetstore.unity.com%2Fpackages%2Fslug%2F313569"
        },
        {
          version: "Version 1.2.3",
          date: "May 15, 2025",
          isLatest: false,
          changes: [
            "It is now possible to safely move the assembly point without manually realigning it to the boundaries or the grid"
          ],
          requirements: {
            unity: "2022.3.23f1 or newer",
            platforms: "Windows, macOS, Linux, iOS, Android"
          },
          downloadUrl: "https://prf.hn/click/camref:1110l4PAz/destination:https%3A%2F%2Fassetstore.unity.com%2Fpackages%2Fslug%2F313569"
        },
        {
          version: "Version 1.2.2",
          date: "May 8, 2025",
          isLatest: false,
          changes: [
            "Small improvements to the category panel for better usability",
            "Refined click behavior on piece buttons for a smoother and more consistent interaction experience"
          ],
          requirements: {
            unity: "2022.3.23f1 or newer",
            platforms: "Windows, macOS, Linux, iOS, Android"
          },
          downloadUrl: "https://prf.hn/click/camref:1110l4PAz/destination:https%3A%2F%2Fassetstore.unity.com%2Fpackages%2Fslug%2F313569"
        },
        {
          version: "Version 1.2.1",
          date: "April 28, 2025",
          isLatest: false,
          changes: [
            "Object placement grid added for easier and more precise positioning",
            "Improved camera control: each piece can now have a custom zoom distance and angle when focusing",
            "Added custom orbit angles per prefab for more tailored camera behavior",
            "Fixed UI behavior issues related to piece selection and confirmation"
          ],
          requirements: {
            unity: "2022.3.23f1 or newer",
            platforms: "Windows, macOS, Linux, iOS, Android"
          },
          downloadUrl: "https://prf.hn/click/camref:1110l4PAz/destination:https%3A%2F%2Fassetstore.unity.com%2Fpackages%2Fslug%2F313569"
        },
        {
          version: "Version 1.1.1",
          date: "April 14, 2025",
          isLatest: false,
          changes: [
            "Full support for models with LOD (Level of Detail)",
            "Ability to load more complex and detailed models",
            "Improved camera control: each piece can now have a custom zoom distance and angle when focusing on it",
            "Fixed an issue where the button associated with a piece would not behave correctly after confirmation"
          ],
          requirements: {
            unity: "2022.3.23f1 or newer",
            platforms: "Windows, macOS, Linux, iOS, Android"
          },
          downloadUrl: "https://prf.hn/click/camref:1110l4PAz/destination:https%3A%2F%2Fassetstore.unity.com%2Fpackages%2Fslug%2F313569"
        },
        {
          version: "Version 1.0.1",
          date: "April 3, 2025",
          isLatest: false,
          changes: [
            "Fixed: visual effects bugs",
            "Bug fixes and performance improvements"
          ],
          requirements: {
            unity: "2022.3.23f1 or newer",
            platforms: "Windows, macOS, Linux, iOS, Android"
          },
          downloadUrl: "https://prf.hn/click/camref:1110l4PAz/destination:https%3A%2F%2Fassetstore.unity.com%2Fpackages%2Fslug%2F313569"
        },
        {
          version: "Version 1.0.0",
          date: "April 1, 2025",
          isLatest: false,
          changes: [
            "Initial release of Assembly Station"
          ],
          requirements: {
            unity: "2022.3.23f1 or newer",
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
