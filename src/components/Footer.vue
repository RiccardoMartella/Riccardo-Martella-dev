<template>
  <footer class="footer mt-4">
    <div class="footer-main py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-3 mb-4 mb-md-0">
            <div class="d-flex align-items-center mb-2">
              <i class="bi bi-tools fs-2 me-2 text-white"></i>
              <h5 class="mb-0 text-white">Assembly Station</h5>
            </div>
            <p class="text-white">Your comprehensive solution for assembly line documentation and management.</p>
          </div>
          
          <div class="col-md-3 mb-4 mb-md-0">
            <h5 class="mb-3 title-color"><u>Info</u></h5>
            <ul class="list-unstyled">
              <li class="mb-2"><a href="#" class="footer-link">About Us</a></li>
              <li class="mb-2"><a href="#" class="footer-link">Features</a></li>
              <li class="mb-2"><a href="#" class="footer-link">Case Studies</a></li>
              <li class="mb-2"><a href="#" class="footer-link">Contact</a></li>
            </ul>
          </div>
          
          <div class="col-md-3 mb-4 mb-md-0">
            <h5 class="mb-3 title-color"><u>Get Started</u> </h5>
            <ul class="list-unstyled">
              <li class="mb-2"><a href="#" class="footer-link">Documentation</a></li>
              <li class="mb-2"><a href="#" class="footer-link">Tutorials</a></li>
              <li class="mb-2"><a href="#" class="footer-link">Resources</a></li>
              <li class="mb-2"><a href="#" class="footer-link">Support</a></li>
            </ul>
          </div>
          
          <div class="col-md-3">
            <h5 class="mb-3 title-color"><u>Legal</u></h5>
            <ul class="list-unstyled">
              <li class="mb-2"><a href="#" class="footer-link">Terms of Service</a></li>
              <li class="mb-2"><a href="#" class="footer-link">Privacy Policy</a></li>
              <li class="mb-2"><a href="#" class="footer-link">Cookies</a></li>
              <li class="mb-2"><a href="#" class="footer-link">Licenses</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom py-3">
      <div class="container">
        <div class="d-flex justify-content-center align-items-center flex-column" >
          <p class="mb-0 text-powered">Copyright © 2025 Assembly Station</p>
          <p style="font-size: 12px;" class="mb-0  text-dark">Powered by <a href="" class="text-dark">Riccardo Martella</a> </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter"
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

h5 {
  color: #333333;
  font-weight: 600;
}
</style>