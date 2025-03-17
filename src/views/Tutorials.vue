<template>
  <div class="tutorials-page">
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="text-center mb-5">
            <h1 class="display-4 fw-bold text-accent mb-4" id="#tutorials">Video Tutorials</h1>
            <p class="lead">
              Learn how to use Assembly Station with these step-by-step video tutorials that cover everything from creating prefabs to managing resources.
            </p>
          </div>
          
          <div class="tutorial-list">
            <!-- Tutorial 1 -->
            <div class="tutorial-card card shadow-sm mb-5">
              <div class="card-body p-4">
                <h3 class="tutorial-title">Prefab Creation</h3>
                <p class="tutorial-description">
                  In this video, you'll learn how to create a prefab, set the pivot correctly, add materials, descriptions, names, and other essential properties.
                </p>
                <div class="video-container">
                  <iframe 
                    src="https://drive.google.com/file/d/1t0yPtYlvrkfJlOYvIYyehjkBX8YPr8RT/preview" 
                    class="tutorial-video"
                    allowfullscreen
                    allow="autoplay; encrypted-media"
                    loading="lazy"
                    frameborder="0">
                  </iframe>
                  <p class="video-caption">Tutorial: Creating and Setting Up Prefabs</p>
                </div>
              </div>
            </div>
            
            <!-- Tutorial 2 -->
            <div class="tutorial-card card shadow-sm mb-5">
              <div class="card-body p-4">
                <h3 class="tutorial-title">Buttons & Categories</h3>
                <p class="tutorial-description">
                  This video demonstrates how to create and manage category buttons for each prefab to organize your assembly system.
                </p>
                <div class="video-container">
                  <iframe 
                    src="https://drive.google.com/file/d/1Vb5NODQTgTIJHTVWuC0YTX9VCRuIWRns/preview" 
                    class="tutorial-video"
                    allowfullscreen
                    allow="autoplay; encrypted-media"
                    loading="lazy"
                    frameborder="0">
                  </iframe>
                  <p class="video-caption">Tutorial: Creating Category Buttons for Prefabs</p>
                </div>
              </div>
            </div>
            
            <!-- Tutorial 3 -->
            <div class="tutorial-card card shadow-sm mb-5">
              <div class="card-body p-4">
                <h3 class="tutorial-title">Tags Management</h3>
                <p class="tutorial-description">
                  In this tutorial, we'll cover how to create and manage tags for each component to enhance organization and filtering.
                </p>
                <div class="video-container">
                  <iframe 
                    src="https://drive.google.com/file/d/1D--fIEBwIC--DzzeFx3Uy_N6_38EZ2Zr/preview" 
                    class="tutorial-video"
                    allowfullscreen
                    allow="autoplay; encrypted-media"
                    loading="lazy"
                    frameborder="0">
                  </iframe>
                  <p class="video-caption">Tutorial: Creating and Managing Tags for Components</p>
                </div>
              </div>
            </div>
            
            <!-- Tutorial 4 -->
            <div class="tutorial-card card shadow-sm mb-5">
              <div class="card-body p-4">
                <h3 class="tutorial-title">Assembly System Overview</h3>
                <p class="tutorial-description">
                  This video demonstrates how the Assembly Station system works and how users can interact with it to build their models.
                </p>
                <div class="video-container">
                  <iframe 
                    src="https://drive.google.com/file/d/1AFBJwb4sd8jelOKJVN0Jp9z2i-WFm5OU/preview" 
                    class="tutorial-video"
                    allowfullscreen
                    allow="autoplay; encrypted-media"
                    loading="lazy"
                    frameborder="0">
                  </iframe>
                  <p class="video-caption">Tutorial: Using the Assembly System</p>
                </div>
              </div>
            </div>
            
            <!-- Tutorial 5 -->
            <div class="tutorial-card card shadow-sm mb-5">
              <div class="card-body p-4">
                <h3 class="tutorial-title">Groups</h3>
                <p class="tutorial-description">
                  Learn how to manage and create groups for components, allowing for better organization and more complex structures.
                  You can enter them in 2 ways: Individually for each piece or via the group management system.
                </p>
                <div class="video-container">
                  <iframe 
                    src="https://drive.google.com/file/d/19XYVbMKDHW4XBbSPeDh2MwLr7VV-oXxR/preview" 
                    class="tutorial-video"
                    allowfullscreen
                    allow="autoplay; encrypted-media"
                    loading="lazy"
                    frameborder="0">
                  </iframe>
                  <p class="video-caption">Tutorial: Managing Component Groups</p>
                </div>
              </div>
              <div class="card-body p-4">
                <h3 class="tutorial-title">Managment Groups</h3>
                <div class="video-container">
                  <iframe 
                    src="https://drive.google.com/file/d/1KmnG_nRXCwnL5QT3hsNzS9s1uX6CbqJW/preview" 
                    class="tutorial-video"
                    allowfullscreen
                    allow="autoplay; encrypted-media"
                    loading="lazy"
                    frameborder="0">
                  </iframe>
                  <p class="video-caption">Tutorial: Managment Groups</p>
                </div>
              </div>
            </div>
            
            <!-- Tutorial 6 -->
            <div class="tutorial-card card shadow-sm mb-5">
              <div class="card-body p-4">
                <h3 class="tutorial-title">Resource Management</h3>
                <p class="tutorial-description">
                  In this final tutorial, we'll cover how to manage resources for each component in your Assembly Station project.
                </p>
                <div class="video-container">
                  <iframe 
                    src="https://drive.google.com/file/d/1LSGC7qj9QBW04vayXZTv0j-pfxTfinXM/preview" 
                    class="tutorial-video"
                    allowfullscreen
                    allow="autoplay; encrypted-media"
                    loading="lazy"
                    frameborder="0">
                  </iframe>
                  <p class="video-caption">Tutorial: Managing Resources for Components</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="card bg-light shadow-sm mb-5">
            <div class="card-body p-4">
              <h4 class="mb-3"><i class="bi bi-lightbulb-fill text-warning me-2"></i>Additional Resources</h4>
              <p>Need more help? Check out these resources:</p>
              <div class="row">
                <div class="col-md-4 mb-2">
                  <RouterLink to="/docs/installation" class="btn btn-outline-primary w-100">
                    <i class="bi bi-book me-2"></i>Documentation
                  </RouterLink>
                </div>
                <div class="col-md-4 mb-2">
                  <RouterLink to="/report-bug#bug" class="btn btn-outline-primary w-100">
                    <i class="bi bi-bug me-2"></i>Report Issues
                  </RouterLink>
                </div>
                <div class="col-md-4 mb-2">
                  <a href="https://discord.gg/9wJSxtUX2W" target="_blank" class="btn btn-outline-primary w-100">
                    <i class="bi bi-discord me-2"></i>Join Discord
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tutorials'
}
</script>

<style scoped>
.tutorials-page {
  padding-top: 80px;
  padding-bottom: 50px;
}

.text-accent {
  color: #00A3FF;
}

.tutorial-card {
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.tutorial-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
}

.tutorial-title {
  color: #333;
  font-weight: 600;
  margin-bottom: 15px;
  position: relative;
  padding-bottom: 10px;
}

.tutorial-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background-color: #00A3FF;
}

.tutorial-description {
  color: #555;
  margin-bottom: 20px;
  font-size: 1.1rem;
}

.btn-outline-primary {
  color: #00A3FF;
  border-color: #00A3FF;
}

.btn-outline-primary:hover {
  background-color: #00A3FF;
  color: white;
}

.video-container {
  width: 100%;
  margin: 1.5rem 0;
}

.tutorial-video {
  width: 100%;
  height: 600px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  background: #000;
}

.video-caption {
  text-align: center;
  font-style: italic;
  color: #666;
  margin-top: 10px;
  font-size: 0.9rem;
}
</style>
