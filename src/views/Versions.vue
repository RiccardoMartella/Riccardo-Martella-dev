<template>
  <div class="versions-page">
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="text-center mb-5">
            <h1 class="display-4 fw-bold text-accent mb-4">{{ $t('versions.title') }}</h1>
            <p class="lead">
              {{ $t('versions.lead') }}
            </p>
          </div>

          <div class="versions-table-container">
            <table class="versions-table table table-hover">
              <thead>
                <tr>
                  <th>{{ $t('versions.thVersion') }}</th>
                  <th>{{ $t('versions.thDate') }}</th>
                  <th>{{ $t('versions.thStatus') }}</th>
                  <th>{{ $t('versions.thActions') }}</th>
                </tr>
              </thead>
              <tbody>
                <tr @click="showDetails(0)" class="version-row">
                  <td><strong>1.5.5</strong></td>
                  <td>{{ $t('versions.v155date') }}</td>
                  <td><span class="badge bg-primary">{{ $t('versions.latest') }}</span></td>
                  <td>
                    <button class="btn btn-sm btn-info" @click.stop="showDetails(0)">
                      <i class="bi bi-info-circle"></i> {{ $t('versions.details') }}
                    </button>
                  </td>
                </tr>
                <tr @click="showDetails(1)" class="version-row">
                  <td><strong>1.5.4</strong></td>
                  <td>{{ $t('versions.v154date') }}</td>
                  <td></td>
                  <td>
                    <button class="btn btn-sm btn-info" @click.stop="showDetails(1)">
                      <i class="bi bi-info-circle"></i> {{ $t('versions.details') }}
                    </button>
                  </td>
                </tr>
                <tr @click="showDetails(2)" class="version-row">
                  <td><strong>1.4.3</strong></td>
                  <td>{{ $t('versions.v143date') }}</td>
                  <td></td>
                  <td>
                    <button class="btn btn-sm btn-info" @click.stop="showDetails(2)">
                      <i class="bi bi-info-circle"></i> {{ $t('versions.details') }}
                    </button>
                  </td>
                </tr>
                <tr @click="showDetails(3)" class="version-row">
                  <td><strong>1.3.3</strong></td>
                  <td>{{ $t('versions.v133date') }}</td>
                  <td></td>
                  <td>
                    <button class="btn btn-sm btn-info" @click.stop="showDetails(3)">
                      <i class="bi bi-info-circle"></i> {{ $t('versions.details') }}
                    </button>
                  </td>
                </tr>
                <tr @click="showDetails(4)" class="version-row">
                  <td><strong>1.2.3</strong></td>
                  <td>{{ $t('versions.v123date') }}</td>
                  <td></td>
                  <td>
                    <button class="btn btn-sm btn-info" @click.stop="showDetails(4)">
                      <i class="bi bi-info-circle"></i> {{ $t('versions.details') }}
                    </button>
                  </td>
                </tr>
                <tr @click="showDetails(5)" class="version-row">
                  <td><strong>1.2.2</strong></td>
                  <td>{{ $t('versions.v122date') }}</td>
                  <td></td>
                  <td>
                    <button class="btn btn-sm btn-info" @click.stop="showDetails(5)">
                      <i class="bi bi-info-circle"></i> {{ $t('versions.details') }}
                    </button>
                  </td>
                </tr>
                <tr @click="showDetails(6)" class="version-row">
                  <td><strong>1.2.1</strong></td>
                  <td>{{ $t('versions.v121date') }}</td>
                  <td></td>
                  <td>
                    <button class="btn btn-sm btn-info" @click.stop="showDetails(6)">
                      <i class="bi bi-info-circle"></i> {{ $t('versions.details') }}
                    </button>
                  </td>
                </tr>
                <tr @click="showDetails(7)" class="version-row">
                  <td><strong>1.1.1</strong></td>
                  <td>{{ $t('versions.v111date') }}</td>
                  <td></td>
                  <td>
                    <button class="btn btn-sm btn-info" @click.stop="showDetails(7)">
                      <i class="bi bi-info-circle"></i> {{ $t('versions.details') }}
                    </button>
                  </td>
                </tr>
                <tr @click="showDetails(8)" class="version-row">
                  <td><strong>1.0.1</strong></td>
                  <td>{{ $t('versions.v101date') }}</td>
                  <td></td>
                  <td>
                    <button class="btn btn-sm btn-info" @click.stop="showDetails(8)">
                      <i class="bi bi-info-circle"></i> {{ $t('versions.details') }}
                    </button>
                  </td>
                </tr>
                <tr @click="showDetails(9)" class="version-row">
                  <td><strong>1.0.0</strong></td>
                  <td>{{ $t('versions.v100date') }}</td>
                  <td></td>
                  <td>
                    <button class="btn btn-sm btn-info" @click.stop="showDetails(9)">
                      <i class="bi bi-info-circle"></i> {{ $t('versions.details') }}
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="text-center mt-5">
            <RouterLink :to="localePath('/')" class="btn btn-outline-secondary me-3">
              <i class="bi bi-arrow-left me-2"></i>{{ $t('versions.returnHome') }}
            </RouterLink>
            <a href="https://prf.hn/click/camref:1110l4PAz/destination:https%3A%2F%2Fassetstore.unity.com%2Fpackages%2Fslug%2F313569" target="_blank" class="btn btn-primary">
              <i class="bi bi-cart-fill me-2"></i>{{ $t('versions.purchase') }}
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
              <span v-if="selectedVersion?.isLatest" class="badge bg-primary ms-2">{{ $t('versions.latest') }}</span>
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ref="closeModalButton"></button>
          </div>
          <div class="modal-body">
            <div v-if="selectedVersion">
              <h4>{{ $t('versions.whatsNew') }}</h4>
              <ul class="changelog-list">
                <li v-for="(item, index) in selectedVersion.changes" :key="index">
                  {{ item }}
                </li>
              </ul>

              <div class="version-requirements mt-4">
                <h4>{{ $t('versions.requirements') }}</h4>
                <p><strong>{{ $t('versions.unityVersion') }}</strong> {{ selectedVersion.requirements.unity }}</p>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{{ $t('versions.close') }}</button>
            <a :href="selectedVersion?.downloadUrl" target="_blank" class="btn btn-primary">
              <i class="bi bi-download me-2"></i>{{ $t('versions.downloadAssetStore') }}
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
import { useLocalePath } from '@/composables/useLocalePath.js'
import { useI18n } from 'vue-i18n'

export default {
  name: 'Versions',
  setup() {
    const { locale, t } = useI18n()
    const { localePath } = useLocalePath()
    useSEO({
      title: t('versions.seoTitle'),
      description: t('versions.seoDescription'),
      keywords: t('versions.seoKeywords'),
      url: t('versions.seoUrl'),
      locale: locale.value === 'it' ? 'it_IT' : undefined
    })
    return { localePath, locale, t }
  },
  data() {
    return {
      versionModal: null,
      selectedVersion: null,
      lastFocusedElement: null,
    }
  },
  computed: {
    versions() {
      const t = this.t
      const downloadUrl = "https://prf.hn/click/camref:1110l4PAz/destination:https%3A%2F%2Fassetstore.unity.com%2Fpackages%2Fslug%2F313569"
      return [
        {
          version: t('versions.v155version'),
          date: t('versions.v155date'),
          isLatest: true,
          changes: [
            t('versions.v155c1'),
            t('versions.v155c2'),
            t('versions.v155c3')
          ],
          requirements: {
            unity: t('versions.unityReq'),
            platforms: "Windows, macOS, Linux, iOS, Android"
          },
          downloadUrl
        },
        {
          version: t('versions.v154version'),
          date: t('versions.v154date'),
          isLatest: false,
          changes: [
            t('versions.v154c1'),
            t('versions.v154c2'),
            t('versions.v154c3'),
            t('versions.v154c4'),
            t('versions.v154c5'),
            t('versions.v154c6'),
            t('versions.v154c7'),
            t('versions.v154c8'),
            t('versions.v154c9'),
            t('versions.v154c10'),
            t('versions.v154c11'),
            t('versions.v154c12')
          ],
          requirements: {
            unity: t('versions.unityReq'),
            platforms: "Windows, macOS, Linux, iOS, Android"
          },
          downloadUrl
        },
        {
          version: t('versions.v143version'),
          date: t('versions.v143date'),
          isLatest: false,
          changes: [
            t('versions.v143c1'),
            t('versions.v143c2'),
            t('versions.v143c3'),
            t('versions.v143c4'),
            t('versions.v143c5'),
            t('versions.v143c6'),
            t('versions.v143c7'),
            t('versions.v143c8'),
            t('versions.v143c9')
          ],
          requirements: {
            unity: t('versions.unityReq'),
            platforms: "Windows, macOS, Linux, iOS, Android"
          },
          downloadUrl
        },
        {
          version: t('versions.v133version'),
          date: t('versions.v133date'),
          isLatest: false,
          changes: [
            t('versions.v133c1'),
            t('versions.v133c2'),
            t('versions.v133c3'),
            t('versions.v133c4')
          ],
          requirements: {
            unity: t('versions.unityReq'),
            platforms: "Windows, macOS, Linux, iOS, Android"
          },
          downloadUrl
        },
        {
          version: t('versions.v123version'),
          date: t('versions.v123date'),
          isLatest: false,
          changes: [
            t('versions.v123c1')
          ],
          requirements: {
            unity: t('versions.unityReq'),
            platforms: "Windows, macOS, Linux, iOS, Android"
          },
          downloadUrl
        },
        {
          version: t('versions.v122version'),
          date: t('versions.v122date'),
          isLatest: false,
          changes: [
            t('versions.v122c1'),
            t('versions.v122c2')
          ],
          requirements: {
            unity: t('versions.unityReq'),
            platforms: "Windows, macOS, Linux, iOS, Android"
          },
          downloadUrl
        },
        {
          version: t('versions.v121version'),
          date: t('versions.v121date'),
          isLatest: false,
          changes: [
            t('versions.v121c1'),
            t('versions.v121c2'),
            t('versions.v121c3'),
            t('versions.v121c4')
          ],
          requirements: {
            unity: t('versions.unityReq'),
            platforms: "Windows, macOS, Linux, iOS, Android"
          },
          downloadUrl
        },
        {
          version: t('versions.v111version'),
          date: t('versions.v111date'),
          isLatest: false,
          changes: [
            t('versions.v111c1'),
            t('versions.v111c2'),
            t('versions.v111c3'),
            t('versions.v111c4')
          ],
          requirements: {
            unity: t('versions.unityReq'),
            platforms: "Windows, macOS, Linux, iOS, Android"
          },
          downloadUrl
        },
        {
          version: t('versions.v101version'),
          date: t('versions.v101date'),
          isLatest: false,
          changes: [
            t('versions.v101c1'),
            t('versions.v101c2')
          ],
          requirements: {
            unity: t('versions.unityReq'),
            platforms: "Windows, macOS, Linux, iOS, Android"
          },
          downloadUrl
        },
        {
          version: t('versions.v100version'),
          date: t('versions.v100date'),
          isLatest: false,
          changes: [
            t('versions.v100c1')
          ],
          requirements: {
            unity: t('versions.unityReq'),
            platforms: "Windows, macOS, Linux, iOS, Android"
          },
          downloadUrl
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
