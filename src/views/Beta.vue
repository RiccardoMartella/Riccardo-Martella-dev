<template>
  <div class="beta-page">
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="text-center mb-5">
            <div class="beta-tag mb-3">
              <span class="badge bg-primary">BETA</span>
            </div>
            <h1 class="display-4 fw-bold text-accent mb-3">Upcoming Features</h1>
            <p class="lead mb-0">
              Get a sneak peek at features I'm currently developing for Assembly Station.
            </p>
          </div>

          <div class="feature-card card shadow-sm mb-5">
            <div class="card-body p-4">
              <div class="feature-header">
                <h2 class="text-accent">Dynamic Component Positioning</h2>
                <span class="feature-status">Coming soon</span>
              </div>
              
              <p class="feature-description my-4">
                My new positioning system gives you complete control over each prefab element before assembly.
                You can precisely position components to create more realistic and intuitive assembly instructions.
              </p>
              
              <div class="video-container">
                <video controls class="demo-video w-100">
              <source src="https://www.dropbox.com/scl/fi/qyscpehd1bj31jx1wnxmq/Beta.mp4?rlkey=3f4d8r8bcackc2li12zkbhpe1&st=56dphla7&dl=1" type="video/mp4">
              Your browser does not support HTML5 video.
            </video>
              </div>
              
              <div class="feature-details mt-4">
                <h3>How to Use This Feature:</h3>
                <ol class="feature-steps">
                  <li>Select the prefab component you want to reposition</li>
                  <li>Enter positioning mode through the component inspector</li>
                  <li>Use the transformation handles to adjust position and rotation</li>
                  <li>Save your custom positioning for future assemblies</li>
                </ol>
                
                <div class="key-benefits mt-4">
                  <h3>Key Benefits:</h3>
                  <ul>
                    <li>Precise control over each component's position in your assemblies</li>
                    <li>Real-time visual feedback as you position elements</li>
                    <li>Create more intuitive assembly sequences with proper spatial relationships</li>
                    <li>Simplifies the workflow for complex multi-part assemblies</li>
                    <li>Seamlessly integrates with existing prefab structures</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div class="feature-card card shadow-sm mb-5">
            <div class="card-body p-4">
              <div class="feature-header">
                <h2 class="text-accent">Advanced assembly system</h2>
                <span class="feature-status">In development</span>
              </div>
              <div class="video-container">
                <video controls class="demo-video w-100">
              <source src="https://www.dropbox.com/scl/fi/oae5ms1tay2rhh2fjcxga/BetaSettings.mp4?rlkey=6b2c2vrhjvcwys4x7v6hv6d14&st=e3ashdn6&dl=1" type="video/mp4">
              Your browser does not support HTML5 video.
            </video>
              </div>
            </div>
          </div>
          
          <div class="feedback-section text-center mt-5">
            <h3><i class="bi bi-chat-left-text me-2"></i>Your feedback shapes these features</h3>
            <p class="mb-4">Have suggestions for what you'd like to see in Assembly Station?</p>
            <div class="d-flex justify-content-center gap-3">
              <a href="https://discord.gg/dZ2Veb4eM5" target="_blank" class="btn btn-primary">
                <i class="bi bi-discord me-2"></i>Join Discord Community
              </a>
              <RouterLink to="/report-bug#bug" class="btn btn-outline-primary">
                <i class="bi bi-bug me-2"></i>Submit Feature Request
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Beta'
}
</script>

<style scoped>
.beta-page {
  padding-top: 80px;
  padding-bottom: 60px;
}

.text-accent {
  color: #00A3FF;
}

.beta-tag .badge {
  font-size: 1rem;
  padding: 8px 16px;
  border-radius: 20px;
  letter-spacing: 1px;
  background-color: #00A3FF !important;
  box-shadow: 0 5px 15px rgba(0, 163, 255, 0.3);
}

.feature-card {
  border-radius: 12px;
  overflow: hidden;
  border: none;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08) !important;
  margin-bottom: 30px;
}

.feature-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.feature-status {
  background-color: #fff3cd;
  color: #856404;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.feature-description {
  font-size: 1.1rem;
  color: #495057;
  line-height: 1.6;
}

.video-container {
  margin: 2rem 0;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.feature-video {
  width: 100%;
  height: 500px;
  display: block;
}

.feature-details {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
}

.feature-details h3 {
  color: #00A3FF;
  font-size: 1.25rem;
  margin-bottom: 15px;
  font-weight: 600;
}

.feature-steps li, .key-benefits li {
  margin-bottom: 10px;
}

.feedback-section h3 {
  color: #333;
  font-weight: 600;
}

@media (max-width: 767px) {
  .feature-video {
    height: 300px;
  }
  
  .feature-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
}
</style>
