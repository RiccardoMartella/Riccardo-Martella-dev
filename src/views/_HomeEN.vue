<template>
  <div>
    
    <MobileSidebarToggle />
    
    <div class="container-fluid mt-4">
      <div class="row">
        <!-- Sidebar Navigation -->
        <div class="col-lg-3 col-md-4 d-none d-md-block">
          <div class="sidebar-container">
            <h4 class="sidebar-title">Documentations</h4>
            <ul class="sidebar-list">
              <li><a href="#installazione" class="sidebar-link">1 - Get Start</a></li>
              <li><a href="#FBX" class="sidebar-link">2 - FBX and Materials Guide</a></li>
              <li><a href="#Prefab" class="sidebar-link">3 - Place Prefabs</a></li>
              <li><a href="#Descrizione" class="sidebar-link">4 - Add Descriptions and Images</a></li>
              <li><a href="#Pulsanti" class="sidebar-link">5 - Buttons and Categories</a></li>
              <li><a href="#Categorie" class="sidebar-link">6 - Tags/Categories/Groups</a></li>
              <li><a href="#Risorse" class="sidebar-link">7 - Resources</a></li>
              <li><a href="#Save" class="sidebar-link">8 - Saves</a></li>
              <li><a href="#Bug" class="sidebar-link">9 - Known Issues</a></li>
            </ul>
          </div>
        </div>

        <!-- Main Content -->
        <div class="col-lg-9 col-md-8">
          <div class="content-wrapper">
            <ContentSection>
              <h1 class="mb-4">ASSEMBLY STATION</h1>
              <p class="text-center">Assembly Station is a crafting and assembly system designed to optimize production
                processes. Whether you are building complex machinery, creating unique items, or improving workflows, my
                system offers intuitive tools to assemble components efficiently and precisely. Start creating with ease
                and precision!</p>

              <div class="d-flex justify-content-center">
                <video controls class="w-75">
                  <source src="../assets/video/introduction.mp4" type="video/mp4">
                </video>
              </div>
            </ContentSection>

            <ContentSection>
              <div class="text-center">
                <h5>Hello and welcome to the Unity Assembly Station asset! My name is
                  <strong>Riccardo Martella</strong>, I am the developer of this asset, and I want to thank you for
                  choosing it for your project. I really hope it will be useful and contribute to the
                  success of your work!
                </h5>
                <br>
                <h5 class="text-danger"><u>⚠️ WARNING! ⚠️</u></h5>
                <br>
                <p class="text-danger text-uppercase">
                  Follow this guide carefully to best integrate Assembly Station into your project.
                  <br>
                  <br>
                  I will not use overly technical language, so even those with less experience can understand without
                  problems.
                </p>
                <p class="">
                  Important advice: Before making changes to your main project, make a <u
                    class="text-danger">backup!</u>. Also, avoid working directly on the main scene
                  until you have verified that everything works correctly.
                  <br>
                  Good luck and have fun with Assembly Station!
                </p>
              </div>
              
              <!-- Social links -->
              <div class="d-flex justify-content-center my-4">
                <div>
                  <a href="mailto:" class="btn btn-light bg-transparent border-0">
                    <i class="fas fa-envelope fa-3x text-primary"></i>
                  </a>
                  <a href="" class="btn btn-light bg-transparent border-0">
                    <i class="fab fa-unity fa-3x text-primary"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/riccardo-martella-b91854252/" class="btn btn-light bg-transparent border-0"
                    target="_blank">
                    <i class="fab fa-linkedin fa-3x text-primary"></i>
                  </a>
                </div>
              </div>
              
              <!-- Action buttons -->
              <p class="text-center"><u>If something doesn't work as it should, let me know.
                  You can report any issues using the button below. If you need help, don't
                  hesitate to contact me</u></p>
              <div class="container my-3">
                <div class="row g-3 align-items-stretch">
                  <div class="col-md-4">
                    <a href="#"
                      class="btn btn-primary d-flex align-items-center justify-content-center w-100 h-100 fs-5 text-center"
                      style="white-space: normal;">
                      Leave a Review<br>
                      <small>(much appreciated)</small>
                    </a>
                  </div>
                  <div class="col-md-4">
                    <a href="#Presentazione"
                      class="btn btn-primary d-flex align-items-center justify-content-center w-100 h-100 fs-5 text-center">
                      Start the guide
                    </a>
                  </div>
                  <div class="col-md-4">
                    <a href="https://github.com/RiccardoMartella/Assembly-Station-Documentation?tab=readme-ov-file"
                      class="btn btn-primary d-flex align-items-center justify-content-center w-100 h-100 fs-5 text-center"
                      style="white-space: normal;">
                      Report a Bug
                    </a>
                  </div>
                </div>
              </div>
            </ContentSection>

            <!-- Guide Content Sections -->
            <section id="Presentazione" class="content-section">
              <ContentSection>
                <h2>Presentation</h2>
                <p>This section contains details about the Assembly Station asset and its features.</p>
                <!-- Content for Presentation section -->
              </ContentSection>
            </section>

            <section id="installazione" class="content-section">
              <ContentSection>
                <h2>1 - Installation</h2>
                <p>Follow these steps to install Assembly Station correctly in your Unity project.</p>
                <!-- Content for Installation section -->
              </ContentSection>
            </section>

            <section id="FBX" class="content-section">
              <ContentSection>
                <h2>2 - FBX and Materials Guide</h2>
                <p>Learn how to handle FBX models and materials in Assembly Station.</p>
                <!-- Content for FBX section -->
              </ContentSection>
            </section>

            <section id="Prefab" class="content-section">
              <ContentSection>
                <h2>3 - Place Prefabs</h2>
                <p>Instructions for placing and managing prefabs in your scenes.</p>
                <!-- Content here -->
              </ContentSection>
            </section>
            
            <section id="Descrizione" class="content-section">
              <ContentSection>
                <h2>4 - Add Descriptions and Images to Prefabs</h2>
                <p>Learn how to add detailed information and visuals to your prefabs.</p>
                <!-- Content here -->
              </ContentSection>
            </section>
            
            <section id="Pulsanti" class="content-section">
              <ContentSection>
                <h2>5 - Buttons and Categories for Prefabs</h2>
                <p>How to organize your prefabs with buttons and categories.</p>
                <!-- Content here -->
              </ContentSection>
            </section>
            
            <section id="Categorie" class="content-section">
              <ContentSection>
                <h2>6 - Tags/Categories/Groups of Pieces</h2>
                <p>Grouping and categorization techniques for better organization.</p>
                <!-- Content here -->
              </ContentSection>
            </section>
            
            <section id="Risorse" class="content-section">
              <ContentSection>
                <h2>7 - Resources</h2>
                <p>Managing resources within the Assembly Station system.</p>
                <!-- Content here -->
              </ContentSection>
            </section>
            
            <section id="Save" class="content-section">
              <ContentSection>
                <h2>8 - Saves</h2>
                <p>How to implement and manage save functionality.</p>
                <!-- Content here -->
              </ContentSection>
            </section>
            
            <section id="Bug" class="content-section">
              <ContentSection>
                <h2>9 - Known Issues</h2>
                <p>Common problems and their solutions.</p>
                <!-- Content here -->
              </ContentSection>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import ContentSection from '@/components/ContentSection.vue'
import ImageZoomable from '@/components/ImageZoomable.vue'
import MobileSidebarToggle from '@/components/MobileSidebarToggle.vue'

export default {
  name: 'HomeEN',
  components: {
    ContentSection,
    ImageZoomable,
    MobileSidebarToggle
  },
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
.content-wrapper {
  max-width: 100%;
  padding: 0 15px;
}

.content-section {
  margin-bottom: 40px;
  scroll-margin-top: 80px;
}

.sidebar-container {
  position: sticky;
  top: 90px; 
  max-height: calc(100vh - 110px); 
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

/* Mobile sidebar toggle */
@media (max-width: 767.98px) {
  .content-wrapper {
    padding: 0 10px;
  }
}
</style>
