<template>
  <div class="introduction">
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="text-center mb-5">
            <img src="/images/logo.png" alt="Assembly Station Logo" class="intro-logo mb-4" />
            <h1 class="display-4 fw-bold text-accent mb-4">Assembly Station</h1>
            <p class="lead">
              Welcome to the official documentation for Assembly Station, a comprehensive tool for Unity that streamlines assembly and crafting mechanics in your games.
            </p>
          </div>

          <div class="card shadow-sm mb-5">
            <div class="card-body p-4">
              <div class="d-flex align-items-center mb-4">
                <img src="/images/logo.png" alt="Assembly Station Logo" class="me-3" style="height: 40px; width: auto;" />
                <h2>About Assembly Station</h2>
              </div>
              <p>Assembly Station is a crafting and assembly system designed to optimize production processes in Unity projects. Whether you are building complex machinery, creating unique items, or improving workflows, Assembly Station offers intuitive tools to assemble components efficiently and precisely.</p>
              <p>This documentation site provides comprehensive guides and resources to help you get started with Assembly Station and make the most out of its features.</p>
            </div>
          </div>

          <div class="row g-4 mb-5">
            <div class="col-md-6">
              <div class="card h-100 shadow-sm hover-card">
                <div class="card-body p-4">
                  <div class="d-flex align-items-center mb-3">
                    <i class="bi bi-book fs-2 text-accent me-2"></i>
                    <h3 class="h5 mb-0">Documentation</h3>
                  </div>
                  <p>Detailed guides and tutorials on how to use Assembly Station in your Unity projects.</p>
                  <RouterLink to="/homeEn" class="btn btn-primary mt-3">Go to Documentation</RouterLink>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card h-100 shadow-sm hover-card">
                <div class="card-body p-4">
                  <div class="d-flex align-items-center mb-3">
                    <i class="bi bi-play-circle fs-2 text-accent me-2"></i>
                    <h3 class="h5 mb-0">Video Tutorials</h3>
                  </div>
                  <p>Step-by-step video tutorials to help you get started quickly and master advanced features.</p>
                  <a href="#" class="btn btn-outline-primary mt-3">Watch Tutorials</a>
                </div>
              </div>
            </div>
          </div>

          <div class="text-center">
            <h3 class="mb-4">Get Started Now</h3>
            <RouterLink to="/homeEn" class="btn btn-lg btn-primary px-4 py-2">
              Start Using Assembly Station
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Introduction'
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

.intro-logo {
  max-width: 180px;
  height: auto;
  margin: 0 auto 30px;
}
</style>