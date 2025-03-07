<template>
  <div class="sidebar-nav">
    <h4 class="sidebar-title">Contents</h4>
    <ul class="sidebar-list">
      <li><a href="#installazione" class="sidebar-link">1 - Installation</a></li>
      <li><a href="#FBX" class="sidebar-link">2 - FBX and Materials Guide</a></li>
      <li><a href="#Prefab" class="sidebar-link">3 - Place Prefabs</a></li>
      <li><a href="#Descrizione" class="sidebar-link">4 - Add Descriptions and Images</a></li>
      <li><a href="#Pulsanti" class="sidebar-link">5 - Buttons and Categories</a></li>
      <li><a href="#Categorie" class="sidebar-link">6 - Tags/Categories/Groups</a></li>
      <li><a href="#Risorse" class="sidebar-link">7 - Resources</a></li>
      <li><a href="#Effetti" class="sidebar-link">8 - Sound & Visual Effects</a></li>
      <li><a href="#Save" class="sidebar-link">9 - Saves</a></li>
      <li><a href="#Bug" class="sidebar-link">10 - Known Issues</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SidebarNav',
  mounted() {

    window.addEventListener('scroll', this.highlightActiveSection);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.highlightActiveSection);
  },
  methods: {
    highlightActiveSection() {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          document.querySelector(`.sidebar-link[href="#${sectionId}"]`)?.classList.add('active');
        } else {
          document.querySelector(`.sidebar-link[href="#${sectionId}"]`)?.classList.remove('active');
        }
      });
    }
  }
}
</script>

<style scoped>
.sidebar-nav {
  position: sticky;
  top: 80px;
  max-height: calc(100vh - 100px);
  overflow-y: auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.sidebar-title {
  margin-bottom: 15px;
  color: #333;
  font-weight: 600;
  padding-bottom: 10px;
  border-bottom: 1px solid #e0e0e0;
}

.sidebar-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.sidebar-list li {
  margin-bottom: 10px;
}

.sidebar-link {
  display: block;
  padding: 6px 10px;
  color: #555;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.sidebar-link:hover {
  background-color: #e6f7ff;
  color: #00A3FF;
}

.sidebar-link.active {
  background-color: #00A3FF;
  color: white;
  font-weight: 500;
}
</style>
