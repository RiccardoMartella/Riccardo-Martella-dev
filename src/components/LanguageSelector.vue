<template>
  <div class="language-selector" :class="{ 'language-selector--dark': theme === 'dark' }">
    <a
      @click.prevent="switchLanguage('it')"
      class="lang-link"
      :class="{ active: locale === 'it' }"
    >
      <img src="/images/Ita.png" class="img-flag" alt="Italia" />
      <span>IT</span>
    </a>
    <a
      @click.prevent="switchLanguage('en')"
      class="lang-link"
      :class="{ active: locale === 'en' }"
    >
      <img src="/images/en.png" class="img-flag" alt="English" />
      <span>EN</span>
    </a>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: "LanguageSelector",
  props: {
    theme: {
      type: String,
      default: 'light'
    }
  },
  setup() {
    const { locale } = useI18n()
    return { locale }
  },
  methods: {
    switchLanguage(lang) {
      if (lang === this.locale) return

      const currentPath = this.$route.path

      if (lang === 'it') {
        // EN -> IT: add /it prefix
        const newPath = currentPath === '/' ? '/it' : `/it${currentPath}`
        this.$router.push(newPath + (this.$route.hash || ''))
      } else {
        // IT -> EN: remove /it prefix
        let newPath = currentPath.replace(/^\/it/, '') || '/'
        this.$router.push(newPath + (this.$route.hash || ''))
      }
    }
  }
}
</script>

<style scoped>
.language-selector {
  display: inline-flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2px 5px;
}

.language-selector--dark {
  background-color: rgba(85, 195, 235, 0.1);
}

.lang-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;
  font-size: 11px;
  font-weight: 500;
  padding: 2px 6px;
  border-radius: 15px;
  transition: all 0.2s ease;
  margin: 0 2px;
  cursor: pointer;
}

.language-selector--dark .lang-link {
  color: rgba(225, 235, 242, 0.7);
}

.img-flag {
  width: 16px;
  height: 12px;
  margin-right: 3px;
  object-fit: cover;
}

.lang-link.active {
  background-color: #00a3ff;
  color: white;
}

.language-selector--dark .lang-link.active {
  background-color: #55C3EB;
  color: #060a10;
}

.lang-link:hover:not(.active) {
  background-color: #e6f7ff;
}

.language-selector--dark .lang-link:hover:not(.active) {
  background-color: rgba(85, 195, 235, 0.15);
}

@media (max-width: 768px) {
  .language-selector {
    margin-right: 0;
  }
}
</style>
