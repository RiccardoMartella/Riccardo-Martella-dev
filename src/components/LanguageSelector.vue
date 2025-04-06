<template>
  <div class="language-selector">
    <a
      @click.prevent="switchLanguage('it')"
      class="lang-link"
      :class="{ active: currentLang === 'it' }"
    >
      <img src="/public/images/Ita.png" class="img-flag" alt="Italia" />
      <span>IT</span>
    </a>
    <a
      @click.prevent="switchLanguage('en')"
      class="lang-link"
      :class="{ active: currentLang === 'en' }"
    >
      <img src="/public/images/en.png" class="img-flag" alt="English" />
      <span>EN</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "LanguageSelector",
  data() {
    return {
      currentLang: "en",
    };
  },
  created() {
    this.updateCurrentLang();
  },
  watch: {
    $route() {
      this.updateCurrentLang();
    },
  },
  methods: {
    updateCurrentLang() {
      this.currentLang = this.$route.path.includes("/it") ? "it" : "en";
    },
    switchLanguage(lang) {
      if (lang === this.currentLang) return;

      const currentPath = this.$route.path;

      if (currentPath === "/" || currentPath === "/it") {
        this.$router.push(lang === "en" ? "/" : "/it");
      } else if (
        currentPath === "/homeEn" ||
        currentPath === "/it/documentation"
      ) {
        this.$router.push(lang === "en" ? "/homeEn" : "/it/documentation");
      } else if (
        currentPath === "/contacts" ||
        currentPath === "/it/contacts"
      ) {
        this.$router.push(lang === "en" ? "/contacts" : "/it/contacts");
      } else if (
        currentPath.includes("/report-bug") ||
        currentPath.includes("/it/report-bug")
      ) {
        this.$router.push(lang === "en" ? "/report-bug" : "/it/report-bug");
      } else if (currentPath === "/pricing" || currentPath === "/it/pricing") {
        this.$router.push(lang === "en" ? "/pricing" : "/it/pricing");
      } else if (currentPath === "/privacy" || currentPath === "/it/privacy") {
        this.$router.push(lang === "en" ? "/privacy" : "/it/privacy");
      } else if (currentPath === "/licenses" || currentPath === "/it/licenses") {
        this.$router.push(lang === "en" ? "/licenses" : "/it/licenses");
      } else if (
        currentPath.includes("/docs/") ||
        currentPath.includes("/it/docs/")
      ) {
        const docPath = currentPath.split("/").pop();
        this.$router.push(
          lang === "en" ? `/docs/${docPath}` : `/it/docs/${docPath}`
        );
      } else if (currentPath === "/tutorials" || currentPath === "/it/tutorials") {
        this.$router.push(lang === "en" ? "/tutorials" : "/it/tutorials");
      } else if (currentPath === "/versions" || currentPath === "/it/versions") {
        this.$router.push(lang === "en" ? "/versions" : "/it/versions");
      } else if (currentPath === "/beta" || currentPath === "/it/beta") {
        this.$router.push(lang === "en" ? "/beta" : "/it/beta");
      } else if (currentPath === "/settings" || currentPath === "/it/settings") {
        this.$router.push(lang === "en" ? "/settings" : "/it/settings");
      } else if (currentPath === "/cookie-policy" || currentPath === "/it/cookie-policy") {
        this.$router.push(lang === "en" ? "/cookie-policy" : "/it/cookie-policy");
      } else if (currentPath === "/discord-giveaway" || currentPath === "/it/discord-giveaway") {
        this.$router.push(lang === "en" ? "/discord-giveaway" : "/it/discord-giveaway");
      } else {
        this.$router.push(lang === "en" ? "/" : "/it");
      }
    },
  },
};
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
  background-color: #00a3ff;
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
