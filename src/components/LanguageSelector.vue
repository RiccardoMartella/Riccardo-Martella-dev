<template>
  <div class="language-selector">
    <a @click.prevent="switchLanguage('it')" class="lang-link" :class="{ active: currentLang === 'it' }">
      <img src="/src/assets/images/Ita.png" class="img-flag" alt="Italia">
      <span>IT</span>
    </a>
    <a @click.prevent="switchLanguage('en')" class="lang-link" :class="{ active: currentLang === 'en' }">
      <img src="/src/assets/images/en.png" class="img-flag" alt="English">
      <span>EN</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'LanguageSelector',
  data() {
    return {
      currentLang: 'en'
    }
  },
  created() {
    this.updateCurrentLang();
  },
  watch: {
    '$route'() {
      this.updateCurrentLang();
    }
  },
  methods: {
    updateCurrentLang() {
      this.currentLang = this.$route.path.includes('/it') ? 'it' : 'en';
    },
    switchLanguage(lang) {
      if (lang === this.currentLang) return;
      
      // Get current route
      const currentPath = this.$route.path;
      
      // More precise path matching to ensure we stay on the same page type
      if (currentPath === '/' || currentPath === '/it') {
        // Introduction page
        this.$router.push(lang === 'en' ? '/' : '/it');
      } else if (currentPath === '/homeEn' || currentPath === '/it/documentation') {
        // Documentation page
        this.$router.push(lang === 'en' ? '/homeEn' : '/it/documentation');
      } else if (currentPath === '/contacts' || currentPath === '/it/contacts') {
        // Contacts page
        this.$router.push(lang === 'en' ? '/contacts' : '/it/contacts');
      } else if (currentPath.includes('/report-bug') || currentPath.includes('/it/report-bug')) {
        // Report Bug page - using includes() for more reliable matching
        this.$router.push(lang === 'en' ? '/report-bug' : '/it/report-bug');
      } else if (currentPath.includes('/docs/') || currentPath.includes('/it/docs/')) {
        // Documentation pages
        const docPath = currentPath.split('/').pop();
        this.$router.push(lang === 'en' ? `/docs/${docPath}` : `/it/docs/${docPath}`);
      } else {
        // Default fallback
        this.$router.push(lang === 'en' ? '/' : '/it');
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

.img-flag {
  width: 16px;
  height: 12px;
  margin-right: 3px;
  object-fit: cover;
}

.lang-link.active {
  background-color: #00A3FF;
  color: white;
}

.lang-link:hover:not(.active) {
  background-color: #e6f7ff;
}

@media (max-width: 768px) {
  .language-selector {
    margin-right: 0;
  }
}
</style>
