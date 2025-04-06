<template>
  <div class="giveaway-page">
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="text-center mb-5">
            <h1 class="display-4 fw-bold text-accent mb-4">Free Unity Asset Key Giveaway</h1>
            <p class="lead">
              Join our Discord server and receive a free key for our Unity asset!
            </p>
          </div>

          <div class="card shadow-lg mb-5 border-primary">
            <div class="card-header bg-primary text-white">
              <h2 class="h4 mb-0">Limited Time Offer</h2>
            </div>
            <div class="card-body p-4">
              <div class="text-center mb-4">
                <img src="/images/discord-logo.png" alt="Discord Logo" class="discord-logo mb-4" />
                <h3 class="h3 mb-3">How to Get Your Free Key</h3>
              </div>

              <div class="steps-container">
                <div class="step-item">
                  <div class="step-number">1</div>
                  <div class="step-content">
                    <h4 class="h5">Join Our Discord Server</h4>
                    <p>Click the button below to join our community Discord server.</p>
                    <a href="https://discord.gg/your-invite-link" target="_blank" rel="noopener noreferrer" class="btn btn-discord mb-3">
                      <i class="bi bi-discord me-2"></i> Join Discord Server
                    </a>
                  </div>
                </div>

                <div class="step-item">
                  <div class="step-number">2</div>
                  <div class="step-content">
                    <h4 class="h5">Send a Message to Admin</h4>
                    <p>Once you've joined, send a private message to the server admin requesting your free key.</p>
                    <div class="alert alert-info">
                      <i class="bi bi-info-circle me-2"></i> 
                      Message format: "Hi! I'm here for the free Assembly Station asset key."
                    </div>
                  </div>
                </div>

                <div class="step-item">
                  <div class="step-number">3</div>
                  <div class="step-content">
                    <h4 class="h5">Receive Your Key</h4>
                    <p>The admin will respond with your unique product key that you can use to download and activate the asset.</p>
                  </div>
                </div>
              </div>

              <div class="alert alert-warning mt-4">
                <strong><i class="bi bi-exclamation-triangle me-2"></i> Limited availability:</strong> 
                Only 5 free keys remaining! Get yours before they're all gone.
              </div>
              
              <div class="text-center mt-4">
                <h4 class="h4 mb-3">About the Asset</h4>
                <p>Assembly Station is a powerful Unity tool that helps developers create assembly and disassembly mechanics for their games with ease. Perfect for simulation games, educational applications, and more.</p>
                <div class="asset-features mt-4">
                  <div class="feature-item">
                    <i class="bi bi-check-circle-fill text-success"></i>
                    <span>Easy integration</span>
                  </div>
                  <div class="feature-item">
                    <i class="bi bi-check-circle-fill text-success"></i>
                    <span>Detailed documentation</span>
                  </div>
                  <div class="feature-item">
                    <i class="bi bi-check-circle-fill text-success"></i>
                    <span>Regular updates</span>
                  </div>
                  <div class="feature-item">
                    <i class="bi bi-check-circle-fill text-success"></i>
                    <span>Technical support</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer bg-light">
              <p class="text-center mb-0">
                <small>By joining our Discord server, you agree to follow the server rules and community guidelines.</small>
              </p>
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
  name: 'DiscordGiveaway',
}
</script>

<style scoped>
.giveaway-page {
  padding-top: 80px;
  padding-bottom: 50px;
}

.text-accent {
  color: #00A3FF;
}

.border-primary {
  border-color: #00A3FF !important;
}

.bg-primary {
  background-color: #00A3FF !important;
}

.discord-logo {
  height: 80px;
  width: auto;
}

.steps-container {
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 30px;
  margin-bottom: 30px;
}

.step-item {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.step-number {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00A3FF;
  color: white;
  font-weight: bold;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  font-size: 18px;
}

.step-content {
  flex: 1;
}

.btn-discord {
  background-color: #5865F2;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 20px;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

.btn-discord:hover {
  background-color: #4752c4;
  color: white;
}

.asset-features {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #f8f9fa;
  padding: 8px 15px;
  border-radius: 20px;
}

@media (max-width: 768px) {
  .step-item {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .step-number {
    margin-bottom: 10px;
  }
}
</style>