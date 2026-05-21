<template>
  <div class="hm-versions-page">
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="text-center mb-5">
            <h1 class="hm-versions-title mb-4">{{ $t('hmVersions.title') }}</h1>
            <p class="hm-versions-lead">
              {{ $t('hmVersions.lead') }}
            </p>
          </div>

          <div class="hm-versions-table-container">
            <table class="hm-versions-table table table-hover">
              <thead>
                <tr>
                  <th>{{ $t('hmVersions.thVersion') }}</th>
                  <th>{{ $t('hmVersions.thDate') }}</th>
                  <th>{{ $t('hmVersions.thStatus') }}</th>
                  <th>{{ $t('hmVersions.thActions') }}</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(version, index) in versions"
                  :key="index"
                  @click="showDetails(index)"
                  class="hm-version-row"
                >
                  <td><strong>{{ version.number }}</strong></td>
                  <td>{{ version.date }}</td>
                  <td>
                    <span v-if="version.isLatest" class="hm-badge-latest">{{ $t('hmVersions.latest') }}</span>
                  </td>
                  <td>
                    <button class="btn btn-sm hm-btn-details" @click.stop="showDetails(index)">
                      <i class="bi bi-info-circle"></i> {{ $t('hmVersions.details') }}
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="text-center mt-5">
            <RouterLink :to="localePath('/homing-missile')" class="btn hm-btn-outline me-3">
              <i class="bi bi-arrow-left me-2"></i>{{ $t('hmVersions.returnHome') }}
            </RouterLink>
            <a :href="downloadUrl" target="_blank" class="btn hm-btn-primary">
              <i class="bi bi-cart-fill me-2"></i>{{ $t('hmVersions.purchase') }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="hmVersionDetailsModal" tabindex="-1" aria-labelledby="hmVersionDetailsModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content hm-modal-content">
          <div class="modal-header hm-modal-header">
            <h5 class="modal-title" id="hmVersionDetailsModalLabel">
              {{ selectedVersion?.version }} - {{ selectedVersion?.date }}
              <span v-if="selectedVersion?.isLatest" class="hm-badge-latest ms-2">{{ $t('hmVersions.latest') }}</span>
            </h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" ref="closeModalButton"></button>
          </div>
          <div class="modal-body">
            <div v-if="selectedVersion">
              <h4 class="hm-modal-section-title">{{ $t('hmVersions.whatsNew') }}</h4>
              <ul class="hm-changelog-list">
                <li v-for="(item, index) in selectedVersion.changes" :key="index">
                  {{ item }}
                </li>
              </ul>

              <div class="hm-version-requirements mt-4">
                <h4 class="hm-modal-section-title">{{ $t('hmVersions.requirements') }}</h4>
                <p><strong>{{ $t('hmVersions.unityVersion') }}</strong> {{ selectedVersion.requirements.unity }}</p>
              </div>
            </div>
          </div>
          <div class="modal-footer hm-modal-footer">
            <button type="button" class="btn hm-btn-outline" data-bs-dismiss="modal">{{ $t('hmVersions.close') }}</button>
            <a :href="downloadUrl" target="_blank" class="btn hm-btn-primary">
              <i class="bi bi-download me-2"></i>{{ $t('hmVersions.downloadAssetStore') }}
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
  name: 'HMVersions',
  setup() {
    const { locale, t } = useI18n()
    const { localePath } = useLocalePath()
    useSEO({
      title: t('hmVersions.seoTitle'),
      description: t('hmVersions.seoDescription'),
      keywords: t('hmVersions.seoKeywords'),
      url: t('hmVersions.seoUrl'),
      locale: locale.value === 'it' ? 'it_IT' : undefined
    })
    return { localePath, locale, t }
  },
  data() {
    return {
      versionModal: null,
      selectedVersion: null,
      lastFocusedElement: null,
      downloadUrl: 'https://af.unity.com/sr/camref:1110l4PAz/destination:https%3A%2F%2Fassetstore.unity.com%2Fpackages%2Fslug%2F368542'
    }
  },
  computed: {
    versions() {
      const t = this.t
      return [
        {
          number: '1.3.1',
          version: t('hmVersions.v131version'),
          date: t('hmVersions.v131date'),
          isLatest: true,
          changes: [
            t('hmVersions.v131c1'),
            t('hmVersions.v131c2'),
            t('hmVersions.v131c3')
          ],
          requirements: {
            unity: t('hmVersions.unityReq')
          }
        },
        {
          number: '1.3.0',
          version: t('hmVersions.v130version'),
          date: t('hmVersions.v130date'),
          isLatest: false,
          changes: [
            t('hmVersions.v130c1'),
            t('hmVersions.v130c2'),
            t('hmVersions.v130c3'),
            t('hmVersions.v130c4'),
            t('hmVersions.v130c5'),
            t('hmVersions.v130c6'),
            t('hmVersions.v130c7'),
            t('hmVersions.v130c8'),
            t('hmVersions.v130c9')
          ],
          requirements: {
            unity: t('hmVersions.unityReq')
          }
        },
        {
          number: '1.2.0',
          version: t('hmVersions.v120version'),
          date: t('hmVersions.v120date'),
          isLatest: false,
          changes: [
            t('hmVersions.v120c1'),
            t('hmVersions.v120c2')
          ],
          requirements: {
            unity: t('hmVersions.unityReq')
          }
        },
        {
          number: '1.1.0',
          version: t('hmVersions.v110version'),
          date: t('hmVersions.v110date'),
          isLatest: false,
          changes: [
            t('hmVersions.v110c1'),
            t('hmVersions.v110c2'),
            t('hmVersions.v110c3'),
            t('hmVersions.v110c4'),
            t('hmVersions.v110c5'),
            t('hmVersions.v110c6'),
            t('hmVersions.v110c7')
          ],
          requirements: {
            unity: 'Unity 6 (6000.0+)'
          }
        }
      ]
    }
  },
  mounted() {
    const modalEl = document.getElementById('hmVersionDetailsModal');
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
.hm-versions-page {
  background-color: #060a10;
  min-height: 100vh;
  padding-top: 60px;
  padding-bottom: 60px;
}

.hm-versions-title {
  color: #55C3EB;
  font-weight: 700;
  font-size: 2.5rem;
}

.hm-versions-lead {
  color: rgba(225, 235, 242, 0.7);
  font-size: 1.1rem;
}

.hm-versions-table-container {
  background-color: #0d1520;
  border: 1px solid rgba(85, 195, 235, 0.15);
  border-radius: 10px;
  overflow: hidden;
}

.hm-versions-table {
  margin-bottom: 0;
  color: rgba(225, 235, 242, 0.9);
  --bs-table-bg: transparent;
  --bs-table-color: rgba(225, 235, 242, 0.9);
  --bs-table-hover-bg: rgba(85, 195, 235, 0.08);
  --bs-table-hover-color: #E1EBF2;
}

.hm-versions-table th {
  background-color: #060a10;
  border-bottom: 2px solid rgba(85, 195, 235, 0.25);
  color: #55C3EB;
  font-weight: 600;
}

.hm-versions-table td {
  border-color: rgba(85, 195, 235, 0.1);
  vertical-align: middle;
}

.hm-version-row {
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.hm-badge-latest {
  display: inline-block;
  background-color: rgba(85, 195, 235, 0.15);
  color: #55C3EB;
  border: 1px solid rgba(85, 195, 235, 0.4);
  border-radius: 4px;
  padding: 2px 10px;
  font-size: 0.8rem;
  font-weight: 600;
}

.hm-btn-details {
  background-color: rgba(85, 195, 235, 0.1);
  border: 1px solid rgba(85, 195, 235, 0.3);
  color: #55C3EB;
}

.hm-btn-details:hover {
  background-color: rgba(85, 195, 235, 0.2);
  color: #78d0ef;
}

.hm-btn-primary {
  background-color: #55C3EB;
  border: 1px solid #55C3EB;
  color: #060a10;
  font-weight: 600;
}

.hm-btn-primary:hover {
  background-color: #78d0ef;
  border-color: #78d0ef;
  color: #060a10;
}

.hm-btn-outline {
  background-color: transparent;
  border: 1px solid rgba(85, 195, 235, 0.4);
  color: rgba(225, 235, 242, 0.9);
}

.hm-btn-outline:hover {
  background-color: rgba(85, 195, 235, 0.1);
  color: #55C3EB;
}

.hm-modal-content {
  background-color: #0d1520;
  border: 1px solid rgba(85, 195, 235, 0.2);
  border-radius: 10px;
  color: rgba(225, 235, 242, 0.9);
}

.hm-modal-header {
  background-color: #060a10;
  border-bottom: 2px solid rgba(85, 195, 235, 0.25);
}

.hm-modal-header .modal-title {
  color: #E1EBF2;
  font-weight: 600;
}

.hm-modal-section-title {
  color: #55C3EB;
  margin-top: 0;
  margin-bottom: 15px;
  font-weight: 600;
  font-size: 1.15rem;
}

.hm-changelog-list li {
  margin-bottom: 8px;
}

.hm-version-requirements {
  background-color: #060a10;
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid #55C3EB;
}

.hm-modal-footer {
  border-top: 1px solid rgba(85, 195, 235, 0.15);
}

@media (max-width: 767px) {
  .hm-versions-title {
    font-size: 1.8rem;
  }
}
</style>
