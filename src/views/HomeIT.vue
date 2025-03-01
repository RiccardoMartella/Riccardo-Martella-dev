<template>
  <div>
    <MobileSidebarToggle />
    
    <div class="container-fluid mt-4">
      <div class="row">
        <!-- Sidebar Navigation -->
        <div class="col-lg-3 col-md-4 d-none d-md-block">
          <div class="sidebar-container">
            <h4 class="sidebar-title">Documentazione</h4>
            <ul class="sidebar-list">
              <li><a href="#installazione" class="sidebar-link">1 - Installazione</a></li>
              <li><a href="#FBX" class="sidebar-link">2 - Guida FBX e Materiali</a></li>
              <li><a href="#Prefab" class="sidebar-link">3 - Posizionare i Prefab</a></li>
              <li><a href="#Descrizione" class="sidebar-link">4 - Aggiungere Descrizioni e Immagini</a></li>
              <li><a href="#Pulsanti" class="sidebar-link">5 - Pulsanti e Categorie</a></li>
              <li><a href="#Categorie" class="sidebar-link">6 - Tag/Categorie/Gruppi</a></li>
              <li><a href="#Risorse" class="sidebar-link">7 - Risorse</a></li>
              <li><a href="#Save" class="sidebar-link">8 - Salvataggi</a></li>
              <li><a href="#Bug" class="sidebar-link">9 - Problemi Noti</a></li>
            </ul>
          </div>
        </div>

        <!-- Main Content -->
        <div class="col-lg-9 col-md-8">
          <div class="content-wrapper">
            <ContentSection>
              <h1 class="mb-4">ASSEMBLY STATION</h1>
              <p class="text-center">Assembly Station è un sistema di assemblaggio progettato per ottimizzare i processi di produzione.
                Che tu stia costruendo macchinari complessi, creando oggetti unici o migliorando i flussi di lavoro, il mio
                sistema offre strumenti intuitivi per assemblare componenti in modo efficiente e preciso. Inizia a creare con facilità
                e precisione!</p>

              <div class="d-flex justify-content-center">
                <video controls class="w-75">
                  <source src="../assets/video/introduction.mp4" type="video/mp4">
                </video>
              </div>
            </ContentSection>

            <ContentSection>
              <div class="text-center">
                <h5>Ciao e benvenuto nell'asset Unity Assembly Station! Mi chiamo
                  <strong>Riccardo Martella</strong>, sono lo sviluppatore di questo asset e voglio ringraziarti per
                  averlo scelto per il tuo progetto. Spero davvero che ti sarà utile e contribuirà al
                  successo del tuo lavoro!
                </h5>
                <br>
                <h5 class="text-danger"><u>⚠️ ATTENZIONE! ⚠️</u></h5>
                <br>
                <p class="text-danger text-uppercase">
                  Segui attentamente questa guida per integrare al meglio Assembly Station nel tuo progetto.
                  <br>
                  <br>
                  Non userò un linguaggio troppo tecnico, così che anche chi ha meno esperienza possa capire senza
                  problemi.
                </p>
                <p class="">
                  Consiglio importante: Prima di apportare modifiche al tuo progetto principale, fai un <u
                    class="text-danger">backup!</u>. Inoltre, evita di lavorare direttamente sulla scena principale
                  finché non avrai verificato che tutto funzioni correttamente.
                  <br>
                  Buona fortuna e buon divertimento con Assembly Station!
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
                  <a href="https://www.linkedin.com/in/TUO-NOME-UTENTE" class="btn btn-light bg-transparent border-0"
                    target="_blank">
                    <i class="fab fa-linkedin fa-3x text-primary"></i>
                  </a>
                </div>
              </div>
              
              <!-- Action buttons -->
              <p class="text-center"><u>Se qualcosa non funziona come dovrebbe, fammelo sapere.
                  Puoi segnalare eventuali problemi utilizzando il pulsante qui sotto. Se hai bisogno di aiuto, non
                  esitare a contattarmi</u></p>
              <div class="container my-3">
                <div class="row g-3 align-items-stretch">
                  <div class="col-md-4">
                    <a href="#"
                      class="btn btn-primary d-flex align-items-center justify-content-center w-100 h-100 fs-5 text-center"
                      style="white-space: normal;">
                      Lascia una Recensione<br>
                      <small>(molto apprezzata)</small>
                    </a>
                  </div>
                  <div class="col-md-4">
                    <a href="#installazione"
                      class="btn btn-primary d-flex align-items-center justify-content-center w-100 h-100 fs-5 text-center">
                      Inizia la guida
                    </a>
                  </div>
                  <div class="col-md-4">
                    <a href="https://github.com/RiccardoMartella/Assembly-Station-Documentation?tab=readme-ov-file"
                      class="btn btn-primary d-flex align-items-center justify-content-center w-100 h-100 fs-5 text-center"
                      style="white-space: normal;">
                      Segnala un Bug
                    </a>
                  </div>
                </div>
              </div>
            </ContentSection>

            <!-- Guide Content Sections -->
            <section id="installazione" class="content-section">
              <ContentSection>
                <h2>1 - Installazione</h2>
                <p>Segui questi passaggi per installare correttamente Assembly Station nel tuo progetto Unity.</p>
                <!-- Contenuto della sezione Installazione -->
              </ContentSection>
            </section>

            <section id="FBX" class="content-section">
              <ContentSection>
                <h2>2 - Guida FBX e Materiali</h2>
                <p>Impara a gestire i modelli FBX e i materiali in Assembly Station.</p>
                <!-- Contenuto della sezione FBX -->
              </ContentSection>
            </section>

            <section id="Prefab" class="content-section">
              <ContentSection>
                <h2>3 - Posizionare i Prefab</h2>
                <p>Istruzioni per posizionare e gestire i prefab nelle tue scene.</p>
                <!-- Contenuto qui -->
              </ContentSection>
            </section>
            
            <section id="Descrizione" class="content-section">
              <ContentSection>
                <h2>4 - Aggiungere Descrizioni e Immagini ai Prefab</h2>
                <p>Impara ad aggiungere informazioni dettagliate e elementi visivi ai tuoi prefab.</p>
                <!-- Contenuto qui -->
              </ContentSection>
            </section>
            
            <!-- Continue with other sections... -->
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
  name: 'HomeIT',
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

@media (max-width: 767.98px) {
  .content-wrapper {
    padding: 0 10px;
  }
}
</style>
