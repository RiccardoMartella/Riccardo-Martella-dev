<template>
  <div class="privacy-page">
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="text-center mb-5">
            <h1 class="display-4 fw-bold text-accent mb-4">Privacy Policy</h1>
            <p class="lead">
              Your privacy is important to us. This page explains our privacy practices.
            </p>
          </div>

          <div class="card shadow-sm mb-5">
            <div class="card-body p-4">
              <div class="privacy-content">
                <a href="https://www.iubenda.com/privacy-policy/82562185" class="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe " title="Privacy Policy ">Privacy Policy</a>
              </div>
              
              <div class="mt-4">
                <p>
                  This Privacy Policy outlines how we collect, use, and protect your personal information.
                  We are committed to ensuring the security and confidentiality of your data.
                </p>
                <p>
                  When you use our website or services, certain information may be collected to improve your experience
                  and help us better understand how users interact with our platform. We only collect data that is 
                  necessary and use it in ways described in this policy.
                </p>
              </div>
            </div>
          </div>
          
          <div class="text-center mt-5">
            <RouterLink to="/" class="btn btn-outline-primary">
              <i class="bi bi-arrow-left me-2"></i> Return to Home
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Privacy',
  mounted() {
    // Load iubenda script
    (function (w,d) {
      var loader = function () {
        var s = d.createElement("script"), 
        tag = d.getElementsByTagName("script")[0]; 
        s.src="https://cdn.iubenda.com/iubenda.js"; 
        tag.parentNode.insertBefore(s,tag);
      }; 
      if(w.addEventListener){
        w.addEventListener("load", loader, false);
      } else if(w.attachEvent){
        w.attachEvent("onload", loader);
      } else {
        w.onload = loader;
      }
    })(window, document);
  }
}
</script>

<style scoped>
.privacy-page {
  padding-top: 20px;
  padding-bottom: 50px;
}

.text-accent {
  color: #00A3FF;
}

.privacy-content {
 text-align: center;
}

a {
  color: #00A3FF;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
