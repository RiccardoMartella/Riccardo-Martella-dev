<template>
  <div class="introduction" id="home2">
    <div class="hero-section py-5">
      <div class="animated-bg">
        <div class="bg-shape shape-1"></div>
        <div class="bg-shape shape-2"></div>
        <div class="bg-shape shape-3"></div>
        <div class="bg-shape shape-4"></div>
      </div>

      <div class="container position-relative">
        <div class="tech-line line-1"></div>
        <div class="tech-line line-2"></div>
        <div class="tech-line line-3"></div>

        <div class="row justify-content-center align-items-center">
          <div class="col-lg-6 mb-5 mb-lg-0 order-2 order-lg-1">
            <div class="position-relative z-2">
              <div class="accent-shape"></div>
              <div class="reveal-text">
                <h1 class="display-3 fw-bold text-accent mb-3 animated-heading">
                  Assembly Station
                </h1>
              </div>
              <h2 class="display-6 fw-bold text-dark mb-4 fade-in-up">Modular System to Bring Your Model to Life</h2>
              <p class="lead mt-3 mb-4 text-secondary fade-in-up delay-1">
                Assembly Station is the ultimate tool for creating interactive assembly instructions in Unity. Designed to streamline complex assembly processes with intuitive visual feedback.
              </p>
              <div class="d-flex flex-wrap gap-3 mt-4 fade-in-up delay-2">
                <a class="btn btn-primary btn-glow btn-lg shadow px-4" 
                   href="https://prf.hn/click/camref:1110l4PAz/destination:https%3A%2F%2Fassetstore.unity.com%2Fpackages%2Fslug%2F313569"
                   aria-label="Get Assembly Station from Unity Asset Store"
                   title="Purchase Assembly Station on Unity Asset Store">
                  Get Assembly Station
                </a>
                <div class="feature-badges d-flex align-items-center mt-2 mt-md-0">
                  <div class="badge-item pulse" title="Compatible with Unity and Windows" aria-label="Unity and Windows compatible">
                    <i class="bi bi-unity fs-4" aria-hidden="true"></i>
                    <i class="bi bi-windows fs-4" aria-hidden="true"></i>
                    <span class="sr-only">Compatible with Unity and Windows</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 order-1 order-lg-2 mb-5 mb-lg-0">
            <div class="featured-visual position-relative overflow-visible">
              <div class="video-container">
                <div class="video-overlay"></div>
                <div class="responsive-video-wrapper">
                  <iframe 
                    src="https://www.youtube.com/embed/E-taSzIyUxM?autoplay=1&mute=1&controls=0&disablekb=1&loop=1&modestbranding=1&playsinline=1&rel=0&showinfo=0&playlist=E-taSzIyUxM&iv_load_policy=3&fs=0&vq=hd1080&hd=1" 
                    title="Assembly Station" 
                    frameborder="0" 
                    allow="autoplay;" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen>
                  </iframe>
                </div>

                <div class="interactive-elements">
                  <div class="ui-element ui-top-right">
                    <div class="ui-dot"></div>
                    <div class="ui-line"></div>
                  </div>
                  <div class="ui-element ui-bottom-left">
                    <div class="ui-dot"></div>
                    <div class="ui-line"></div>
                  </div>
                </div>
              </div>
              <div class="credits-section">
                <p>Credits: <a href="https://assetstore.unity.com/packages/3d/environments/historic/colonial-ship-70472" 
                             aria-label="Colonial Ship 3D model on Unity Asset Store"
                             title="View Colonial Ship 3D model on Unity Asset Store">
                    3D model
                  </a></p>
              </div>

              <div class="particle-system">
                <div class="particle wandering-particle p1"></div>
                <div class="particle wandering-particle p2"></div>
                <div class="particle wandering-particle p3"></div>
                <div class="particle wandering-particle p4"></div>
                <div class="particle wandering-particle p5"></div>
                <div class="particle wandering-particle p6"></div>
              </div>

              <div class="logo-container">
                <div class="logo-spinner bottom-prominent  float-element">
                  <img src="/images/logo.png" 
                       alt="Assembly Station Logo" 
                       class="spinning-logo" 
                       width="200" 
                       height="200" 
                       loading="lazy" />
                  <div class="glow-effect"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container py-2">
      <div class="row justify-content-center">
        <div class="col-lg-10">
  
          <div class="welcome-section text-center mb-5">
            <div class="welcome-icon mb-4">
              <i class="bi bi-book-half text-accent"></i>
            </div>
            <h2 class="display-6 fw-bold mb-4">Assembly Station Documentation</h2>
            <p class="lead mx-auto" style="max-width: 800px;">
              Your complete resource for mastering Assembly Station, a powerful tool to create interactive assembly instructions in Unity.
            </p>
          </div>
          
    
          <div class="about-card mb-5">
            <div class="row g-0 align-items-center">
              <div class="col-md-5">
                <div class="about-card-image w-50 center mx-auto mb-4">
                  <img src="/images/logo.png" 
                       alt="Assembly Station Workflow" 
                       class="img-fluid rounded-start object-cover" 
                       width="300" 
                       height="300"
                       loading="lazy"
                       onerror="this.src='/images/logo.png'; this.style.padding='2rem';">
                </div>
              </div>
              <div class="col-md-7">
                <div class="p-4 p-lg-5">
                  <h3 class="mb-4">About Assembly Station</h3>
                  <p>Assembly Station is a crafting and assembly system designed to optimize production processes in Unity projects. Whether you are building complex machinery, creating unique items, or improving workflows, Assembly Station offers intuitive tools to assemble components efficiently and precisely.</p>
                  <p>This documentation site provides comprehensive guides and resources to help you get started with Assembly Station and make the most out of its features.</p>
                </div>
              </div>
            </div>
          </div>
  
          <h3 class="text-center mb-4">Getting Started Resources</h3>
          <div class="resources-grid mb-5">
            <div class="resource-card">
              <div class="resource-icon">
                <i class="bi bi-journal-code" aria-hidden="true"></i>
              </div>
              <h4>Documentation</h4>
              <p>Detailed guides and tutorials for your Unity projects</p>
              <RouterLink to="/docs/installation" 
                         class="btn btn-primary"
                         aria-label="Read Assembly Station Documentation"
                         title="Read complete documentation and installation guide">
                Read Docs
              </RouterLink>
            </div>
            
            <div class="resource-card">
              <div class="resource-icon">
                <i class="bi bi-play-btn" aria-hidden="true"></i>
              </div>
              <h4>Video Tutorials</h4>
              <p>Step-by-step videos to master advanced features</p>
              <RouterLink to="/tutorials" 
                         class="btn btn-outline-primary"
                         aria-label="Watch Assembly Station tutorials"
                         title="Watch video tutorials and learn advanced features">
                Watch Now
              </RouterLink>
            </div>
            
            <div class="resource-card">
              <div class="resource-icon">
                <i class="bi bi-git" aria-hidden="true"></i>
              </div>
              <h4>Version History</h4>
              <p>Track changes and improvements over time</p>
              <RouterLink to="/versions" 
                         class="btn btn-outline-primary"
                         aria-label="View Assembly Station version history"
                         title="See release notes and version history">
                See Releases
              </RouterLink>
            </div>
          </div>

          <div class="cta-box text-center p-5 rounded">
            <h3 class="mb-3">Ready to Start Building?</h3>
            <p class="mb-4">Get your copy of Assembly Station and start creating interactive assemblies today</p>
            <div class="d-flex flex-column flex-md-row justify-content-center gap-3">
              <a href="https://prf.hn/click/camref:1110l4PAz/destination:https%3A%2F%2Fassetstore.unity.com%2Fpackages%2Fslug%2F313569" 
                 target="_blank" 
                 class="btn btn-lg btn-primary"
                 aria-label="Purchase Assembly Station on Unity Asset Store"
                 title="Buy Assembly Station from Unity Asset Store">
                <i class="bi bi-cart-fill me-2" aria-hidden="true"></i>Purchase on Asset Store
              </a>
              <!-- <RouterLink to="/demo" class="btn btn-lg btn-outline-primary">
                <i class="bi bi-joystick me-2"></i>Try Interactive Demo
              </RouterLink> -->
            </div>
          </div>

          <div class="social-links-section text-center mt-5 pt-4">
            <h4 class="mb-4">Connect with Us</h4>
            <div class="d-flex justify-content-center gap-4 flex-wrap">
              <a href="https://github.com/RiccardoMartella" 
                 target="_blank" 
                 class="social-link"
                 aria-label="Visit Riccardo Martella's GitHub profile"
                 title="View source code and projects on GitHub">
                <i class="bi bi-github me-2" aria-hidden="true"></i>
                GitHub Profile
              </a>
              
              <a href="https://discord.gg/9wJSxtUX2W" 
                 target="_blank" 
                 class="social-link"
                 aria-label="Join Assembly Station Discord community"
                 title="Get support and connect with other developers">
                <i class="bi bi-discord me-2" aria-hidden="true"></i>
                Discord Community
              </a>
              
              <a href="https://www.linkedin.com/in/riccardo-martella-b91854252/" 
                 target="_blank" 
                 class="social-link"
                 aria-label="Connect with Riccardo Martella on LinkedIn"
                 title="Professional networking and updates">
                <i class="bi bi-linkedin me-2" aria-hidden="true"></i>
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useSEO, seoConfigs } from '@/composables/useSEO.js'

export default {
  name: 'Introduction',
  setup() {
    // Applica configurazione SEO per la home page
    useSEO(seoConfigs.home)
  }
}
</script>

<style scoped>
.introduction {
  padding-top: 20px;
  padding-bottom: 50px;
}

.text-accent {
  color: #00A3FF;
}

.hover-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
}

/* Screen reader only text */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.intro-logo {
  max-width: 180px;
  height: auto;
  margin: 0 auto 30px;
}

.hero-section {
  background: linear-gradient(135deg, #f0f8ff 0%, #f9fcff 100%);
  position: relative;
  padding: 100px 0;
  overflow: hidden;
  min-height: 80vh;
  display: flex;
  align-items: center;
}

.animated-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
}

.bg-shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.05;
  background: radial-gradient(circle, rgba(0,163,255,0.8) 0%, rgba(0,163,255,0) 70%);
  animation: float 15s infinite ease-in-out;
}

.shape-1 {
  width: 500px;
  height: 500px;
  top: -250px;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 300px;
  height: 300px;
  top: 20%;
  right: -100px;
  animation-delay: 2s;
}

.shape-3 {
  width: 400px;
  height: 400px;
  bottom: -200px;
  right: 20%;
  animation-delay: 4s;
}

.shape-4 {
  width: 200px;
  height: 200px;
  bottom: 10%;
  left: 5%;
  animation-delay: 6s;
}

.tech-line {
  position: absolute;
  background: linear-gradient(90deg, rgba(0,163,255,0) 0%, rgba(0,163,255,0.2) 50%, rgba(0,163,255,0) 100%);
  height: 1px;
  width: 100%;
  transform-origin: left center;
  animation: scan 8s infinite linear;
}

.line-1 {
  top: 20%;
  left: 0;
  animation-delay: 0s;
}

.line-2 {
  top: 50%;
  left: 0;
  animation-delay: 2.5s;
}

.line-3 {
  bottom: 30%;
  left: 0;
  animation-delay: 5s;
}

.reveal-text {
  position: relative;
  overflow: hidden;
}

.animated-heading {
  animation: reveal-text 1.2s cubic-bezier(0.77, 0, 0.175, 1);
  background: linear-gradient(90deg, #00A3FF, #66c7ff);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.logo-spinner {
  position: absolute;
  top: 60%;
  left: 65%;
  transform: translate(-50%, -50%);
  z-index: 10;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
}

.spinning-logo {
  width: 80%;
  height: auto;
}


.logo-spinner:hover .spinning-logo {
  animation-play-state: paused;
  transform: scale(1.1) rotateY(0deg);
}


.glow-effect {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,163,255,0.4) 0%, rgba(0,163,255,0) 70%);
  animation: pulse-glow 3s infinite alternate;
}

.float-element {
  animation: float 6s ease-in-out infinite;
}

.interactive-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.ui-element {
  position: absolute;
  transition: all 0.5s ease;
}

.ui-top-right {
  top: 20px;
  right: 20px;
}

.ui-bottom-left {
  bottom: 20px;
  left: 20px;
}

.ui-dot {
  width: 10px;
  height: 10px;
  background-color: rgba(0, 163, 255, 0.6);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.ui-line {
  width: 30px;
  height: 1px;
  background-color: rgba(0, 163, 255, 0.4);
  margin-top: 5px;
  animation: extend 3s infinite alternate;
}

.particle-container {
  position: absolute;
  width: 300px;
  height: 300px;
  z-index: 5;
}

.particle {
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: rgba(0, 163, 255, 0.6);
  border-radius: 50%;
  animation: orbit 12s infinite linear;
}

.p1 { animation-delay: 0s; }
.p2 { animation-delay: 2.4s; }
.p3 { animation-delay: 4.8s; }
.p4 { animation-delay: 7.2s; }
.p5 { animation-delay: 9.6s; }

.btn-glow {
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.btn-glow:after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%);
  transform: rotate(30deg);
  animation: shine 6s infinite;
}

.btn-glow:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 163, 255, 0.3);
}

.badge-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 50px;
  background-color: rgba(0, 163, 255, 0.1);
  color: #00A3FF;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.badge-item:hover {
  background-color: rgba(0, 163, 255, 0.2);
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 163, 255, 0.15);
}

.pulse {
  animation: badge-pulse 3s infinite;
}

.pulse-delay {
  animation: badge-pulse 3s infinite;
  animation-delay: 1.5s;
}

.fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1s forwards;
}

.delay-1 {
  animation-delay: 0.3s;
}

.delay-2 {
  animation-delay: 0.6s;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

@keyframes scan {
  0% { transform: scaleX(0); opacity: 0; }
  10% { transform: scaleX(1); opacity: 1; }
  90% { transform: scaleX(1); opacity: 1; }
  100% { transform: scaleX(0); opacity: 0; }
}

@keyframes reveal-text {
  0% { transform: translateY(100%); }
  100% { transform: translateY(0); }
}

@keyframes spin-horizontal {
  from { transform: rotateY(0deg); }
  to { transform: rotateY(360deg); }
}

@keyframes pulse-glow {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.1); }
}

@keyframes orbit {
  from { transform: rotate(0deg) translateX(100px) rotate(0deg); }
  to { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.3); opacity: 0.7; }
}

@keyframes extend {
  0%, 100% { width: 30px; }
  50% { width: 50px; }
}

@keyframes shine {
  0% { left: -50%; }
  100% { left: 150%; }
}

@keyframes badge-pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(0, 163, 255, 0.4); }
  50% { box-shadow: 0 0 0 8px rgba(0, 163, 255, 0); }
}

@keyframes fadeInUp {
  to { opacity: 1; transform: translateY(0); }
}

.logo-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 20;
}

.logo-spinner {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
  z-index: 30;
  pointer-events: auto;
}

.featured-visual {
  height: 359px;
  position: relative;
  margin-bottom: 80px;
}

.video-container {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  z-index: 1;
  margin: 0 auto;
  background-color: transparent;
}

.responsive-video-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.responsive-video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: none;
  pointer-events: none;
}

.featured-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.bottom-prominent {
  position: absolute;
  bottom: -80px;
  right: 10%;
  width: 250px;
  height: 250px;
  transform: rotate(0deg);
  transition: all 0.5s ease;
  z-index: 50;
}

.featured-visual:hover .bottom-prominent {
  transform: translateY(-15px) scale(1.05);
}

.particle-system {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 40;
  pointer-events: none;
  overflow: visible;
}

.particle {
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: rgba(0, 163, 255, 1);
  border-radius: 50%;
  z-index: 41;
}

.wandering-particle {
  animation: wander 15s infinite ease-in-out;
}

.p1 { top: 20%; left: 30%; animation-delay: 0s; }
.p2 { top: 70%; left: 20%; animation-delay: 3s; }
.p3 { top: 40%; left: 80%; animation-delay: 5s; width: 6px; height: 6px; }
.p4 { top: 80%; left: 60%; animation-delay: 7s; width: 5px; height: 5px; }
.p5 { top: 10%; left: 50%; animation-delay: 9s; width: 7px; height: 7px; }
.p6 { top: 60%; left: 10%; animation-delay: 11s; width: 4px; height: 4px; }

@keyframes wander {
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  10% {
    opacity: 0.35;
  }
  70% {
    opacity: 0.35;
  }
  90% {
    transform: translate(calc(var(--random-x, 1) * 120px), calc(var(--random-y, 1) * 120px));
    opacity: 0.15;
  }
  100% {
    transform: translate(calc(var(--random-x, 1) * 150px), calc(var(--random-y, 1) * 150px));
    opacity: 0;
  }
}

@media (max-width: 992px) {
  .featured-visual {
    height: 320px;
  }
  
  .bottom-prominent {
    width: 180px;
    height: 180px;
    bottom: -60px;
  }
  
  .tech-line {
    display: none;
  }
}

@media (max-width: 768px) {
  .hero-section {
    min-height: auto;
    padding: 60px 0;
  }
  
  .featured-visual {
    height: 280px;
    margin-bottom: 60px;
  }
  
  .bottom-prominent {
    width: 160px;
    height: 160px;
    bottom: -50px;
  }
  
  .bg-shape {
    opacity: 0.03;
  }
}
.credits-section {
  text-align: left;
}

.credits-section p {
  font-size: 0.65rem;
  color: #888;
  margin: 0;
}

.credits-section a {
  color: #888;
  text-decoration: underline;
  transition: color 0.3s ease;
}

.credits-section a:hover {
  color: #555;
}
iframe.featured-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: none;
}

/* Nuovi stili per la sezione di documentazione rinnovata */
.welcome-section {
  padding: 3rem 0;
}

.welcome-icon {
  font-size: 4rem;
  color: #00A3FF;
}

.about-card {
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  background-color: #F8F9FA;
}

.about-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
}

.about-card-image {
  overflow: hidden;
  background-color: #f8f9fa;
  min-height: 100%;
}

.object-cover {
  object-fit: cover;
}

.resources-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.resource-card {
  background-color: #fff;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.resource-card:hover {
  transform: translateY(-7px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.resource-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #e6f4ff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
  font-size: 2rem;
  color: #00A3FF;
}

.resource-card h4 {
  margin-bottom: 0.75rem;
  font-weight: 600;
}

.resource-card p {
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.cta-box {
  background: linear-gradient(135deg, #e6f4ff 0%, #f0f8ff 100%);
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  margin-top: 3rem;
}

.social-links-section {
  padding: 2rem 0;
  border-top: 1px solid #e9ecef;
  margin-top: 2rem;
}

.social-link {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  background-color: #f8f9fa;
  color: #495057;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  font-weight: 500;
}

.social-link:hover {
  background-color: #00A3FF;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(0, 163, 255, 0.3);
  text-decoration: none;
}

.social-link:focus {
  outline: 2px solid #00A3FF;
  outline-offset: 2px;
}

@media (max-width: 768px) {
  .resources-grid {
    grid-template-columns: 1fr;
  }
  
  .about-card-image {
    height: 250px;
  }
}
.subtitle-smaller {
  font-size: 0.7em;
  font-weight: 500;
  opacity: 0.8;
}

.seo-hidden {
  position: absolute;
  left: -10000px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}
</style>