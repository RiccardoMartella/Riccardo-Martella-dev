<template>
  <footer class="footer mt-4">
    <div class="footer-main py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-3 mb-4 mb-md-0 d-flex">
            <div class="d-flex align-items-center mb-2">
              <img src="/images/logo.png" alt="Assembly Station Logo" class="footer-logo me-2">
              <h5 class="mb-0 text-white">Assembly Station</h5>
            </div>
          </div>
          
          <div class="col-md-3 mb-4 mb-md-0">
            <h5 class="mb-3 title-color"><u>{{ isItalian ? 'Informazioni' : 'Info' }}</u></h5>
            <ul class="list-unstyled">
              <li class="mb-2"><a href="https://github.com/RiccardoMartella" class="footer-link">{{ isItalian ? 'Chi Sono' : 'About Me' }}</a></li>
              <li class="mb-2"><RouterLink :to="contactPath" class="footer-link">{{ isItalian ? 'Contatti' : 'Contact' }}</RouterLink></li>
              <li class="mb-2"><a :href="donateLink" target="_blank" class="footer-link donate-link">
                <i class="bi bi-heart-fill me-1"></i>{{ isItalian ? 'Supportami' : 'Donate' }}
              </a></li>
            </ul>
          </div>
          
          <div class="col-md-3 mb-4 mb-md-0">
            <h5 class="mb-3 title-color"><u>{{ isItalian ? 'Inizia' : 'Get Started' }}</u></h5>
            <ul class="list-unstyled">
              <li class="mb-2"><RouterLink :to="docPath" class="footer-link">{{ isItalian ? 'Documentazione' : 'Documentation' }}</RouterLink></li>
              <li class="mb-2"><RouterLink :to="supportPath" class="footer-link">{{ isItalian ? 'Supporto' : 'Support' }}</RouterLink></li>
            </ul>
          </div>
          
          <div class="col-md-3">
            <h5 class="mb-3 title-color"><u>{{ isItalian ? 'Legale' : 'Legal' }}</u></h5>
            <ul class="list-unstyled">
              <li class="mb-2"><RouterLink :to="privacyPath" class="footer-link">{{ isItalian ? 'Politica sulla Privacy' : 'Privacy Policy' }}</RouterLink></li>
              <li class="mb-2"><RouterLink :to="licensesPath" class="footer-link">{{ isItalian ? 'Licenze' : 'Licenses' }}</RouterLink></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom py-3">
      <div class="container">
        <div class="d-flex justify-content-center align-items-center flex-column">
          <p class="mb-0 text-powered">Copyright © 2025 Assembly Station</p>
          <p style="font-size: 12px;" class="mb-0 text-dark">
            {{ isItalian ? 'Creato da ' : 'Powered by ' }}
           <a class="text-dark" href="https://www.linkedin.com/in/riccardo-martella-b91854252/">Riccardo Martella</a> 
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
  computed: {
    isItalian() {
      return this.$route.path.includes('/it');
    },
    featuresPath() {
      return this.isItalian ? '/it/features' : '/features';
    },
    casesPath() {
      return this.isItalian ? '/it/case-studies' : '/case-studies';
    },
    contactPath() {
      return this.isItalian ? '/it/contacts' : '/contacts';
    },
    docPath() {
      return this.isItalian ? '/it/docs/installation' : '/docs/installation';
    },
    tutorialsPath() {
      return this.isItalian ? '/it/tutorials' : '/tutorials';
    },
    resourcesPath() {
      return this.isItalian ? '/it/resources' : '/resources';
    },
    supportPath() {
      return this.isItalian ? '/it/report-bug#bug' : '/report-bug#bug';
    },
    termsPath() {
      return this.isItalian ? '/it/terms' : '/terms';
    },
    privacyPath() {
      return this.isItalian ? '/it/privacy' : '/privacy';
    },
    licensesPath() {
      return this.isItalian ? '/it/licenses' : '/licenses';
    },
    developerPath() {
      return this.isItalian ? '/it/about-developer' : '/about-developer';
    },
    donateLink() {
      
      return "https://paypal.me/riccardomartella";
    }
  }
}
</script>

<style scoped>
.title-color {
  color: #ffffff;
}

.footer {
  border-top: 1px solid #ffffff;
}

.footer-main {
  background-color: #4dbeff;
}

.footer-bottom {
  background-color: #b3e4ff;
}

.text-accent {
  color: #00A3FF;
}

.text-dark {
  color: #333333;
}

.footer-link {
  color: #ededed;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #00A3FF;
  text-decoration: none;
}

.donate-link {
  color: #fff2cc;
  font-weight: 500;
}

.donate-link:hover {
  color: #ffdd57;
}

.donate-link i {
  color: #ff6b6b;
}

h5 {
  color: #333333;
  font-weight: 600;
}

.footer-logo {
  height: 80px;
  width: auto;
  padding: 10px;
  border-radius: 20px;
  background-color: #ffffffad;
}
</style>