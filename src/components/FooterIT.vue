<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-links">
        <div class="row">
          <div class="col-md-4">
            <h5>Risorse</h5>
            <ul class="list-unstyled">
              <li><RouterLink to="/it/docs/installation">Documentazione</RouterLink></li>
              <li><RouterLink to="/it/tutorials">Video Tutorial</RouterLink></li>
              <li><RouterLink to="/it/versions">Versioni</RouterLink></li>
              <li><RouterLink to="/it/report-bug">Segnala Problemi</RouterLink></li>
              <li><RouterLink to="/it/cookie-policy">Politica dei Cookie</RouterLink></li>
            </ul>
          </div>
          <div class="col-md-4">
            <h5>Community</h5>
            <ul class="list-unstyled">
              <li><a href="https://discord.gg/9wJSxtUX2W" target="_blank">Discord</a></li>
              <li><a href="https://github.com/assembly-station" target="_blank">GitHub</a></li>
            </ul>
          </div>
          <div class="col-md-4">
            <h5>Contatti</h5>
            <ul class="list-unstyled">
              <li><a href="mailto:support@assembly-station.com">support@assembly-station.com</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="row align-items-center">
          <div class="col-md-6">
            <p class="mb-0">&copy; {{ new Date().getFullYear() }} Assembly Station. Tutti i diritti riservati.</p>
          </div>
          <div class="col-md-6 text-md-end">
            <div class="footer-links-bottom">
              <RouterLink to="/it/privacy-policy" class="me-3">Privacy Policy</RouterLink>
              <RouterLink to="/it/cookie-policy" class="me-3">Politica dei Cookie</RouterLink>
              <RouterLink to="/it/terms-of-service">Termini di Servizio</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterIT'
}
</script>

<style scoped>
.footer {
  background-color: #f8f9fa;
  padding: 40px 0;
  border-top: 1px solid #e9ecef;
}

.footer h5 {
  font-size: 1.25rem;
  margin-bottom: 20px;
  color: #343a40;
}

.footer ul {
  padding-left: 0;
  list-style: none;
}

.footer ul li {
  margin-bottom: 10px;
}

.footer ul li a {
  color: #6c757d;
  text-decoration: none;
  transition: color 0.3s;
}

.footer ul li a:hover {
  color: #00A3FF;
}

.footer-bottom {
  border-top: 1px solid #e9ecef;
  padding-top: 20px;
  margin-top: 20px;
}

.footer-bottom p {
  margin-bottom: 0;
  color: #6c757d;
}

.footer-links-bottom a {
  color: #6c757d;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-links-bottom a:hover {
  color: #00A3FF;
}
</style>