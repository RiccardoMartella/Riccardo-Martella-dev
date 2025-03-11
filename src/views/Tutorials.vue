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
                <VideoPlayer 
                  src="/src/assets/video/Video1.mp4" 
                  poster="/images/tutorial-thumb-1.jpg"
                  customControls="true"
                  caption="Tutorial: Creating and Setting Up Prefabs"
                />
              </div>
            </div>
            
            <!-- Tutorial 2 -->
            <div class="tutorial-card card shadow-sm mb-5">
              <div class="card-body p-4">
                <h3 class="tutorial-title">Buttons & Categories</h3>
                <p class="tutorial-description">
                  This video demonstrates how to create and manage category buttons for each prefab to organize your assembly system.
                </p>
                <VideoPlayer 
                  src="/src/assets/video/Video2.mp4" 
                  poster="/images/tutorial-thumb-2.jpg"
                  customControls="true"
                  caption="Tutorial: Creating Category Buttons for Prefabs"
                />
              </div>
            </div>
            
            <!-- Tutorial 3 -->
            <div class="tutorial-card card shadow-sm mb-5">
              <div class="card-body p-4">
                <h3 class="tutorial-title">Tags Management</h3>
                <p class="tutorial-description">
                  In this tutorial, we'll cover how to create and manage tags for each component to enhance organization and filtering.
                </p>
                <VideoPlayer 
                  src="/src/assets/video/Video3.mp4" 
                  poster="/images/tutorial-thumb-3.jpg"
                  customControls="true"
                  caption="Tutorial: Creating and Managing Tags for Components"
                />
              </div>
            </div>
            
            <!-- Tutorial 4 -->
            <div class="tutorial-card card shadow-sm mb-5">
              <div class="card-body p-4">
                <h3 class="tutorial-title">Assembly System Overview</h3>
                <p class="tutorial-description">
                  This video demonstrates how the Assembly Station system works and how users can interact with it to build their models.
                </p>
                <VideoPlayer 
                  src="/src/assets/video/Video4.mp4" 
                  poster="/images/tutorial-thumb-4.jpg"
                  customControls="true"
                  caption="Tutorial: Using the Assembly System"
                />
              </div>
            </div>
            
            <!-- Tutorial 5 -->
            <div class="tutorial-card card shadow-sm mb-5">
              <div class="card-body p-4">
                <h3 class="tutorial-title">Component Groups</h3>
                <p class="tutorial-description">
                  Learn how to manage and create groups for components, allowing for better organization and more complex structures.
                </p>
                <VideoPlayer 
                  src="/src/assets/video/Video5.mp4" 
                  poster="/images/tutorial-thumb-5.jpg"
                  customControls="true"
                  caption="Tutorial: Managing Component Groups"
                />
              </div>
            </div>
            
            <!-- Tutorial 6 -->
            <div class="tutorial-card card shadow-sm mb-5">
              <div class="card-body p-4">
                <h3 class="tutorial-title">Resource Management</h3>
                <p class="tutorial-description">
                  In this final tutorial, we'll cover how to manage resources for each component in your Assembly Station project.
                </p>
                <VideoPlayer 
                  src="/src/assets/video/Video6.mp4" 
                  poster="/images/tutorial-thumb-6.jpg"
                  customControls="true"
                  caption="Tutorial: Managing Resources for Components"
                />
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
import VideoPlayer from '@/components/VideoPlayer.vue'

export default {
  name: 'Tutorials',
  components: {
    VideoPlayer
  }
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
</style>
