<template>
  <div class="doc-page">
    <ContentSection>

      <h1 class="doc-title">8. SOUND & VISUAL EFFECTS</h1>
      
      <p class="text-lead">
        When building a component in Assembly Station, custom sound effects and visual particles play to enhance the user experience. Each model can have its own characteristic sound and visual effect.
      </p>
      
      <div class="doc-section">
        <h2 class="doc-section-title">HOW EFFECTS WORK</h2>
        
        <div class="content-block">
          <div class="content-text">
            <p>
              Every time a piece is built, a sound will play along with a visual effect. To ensure that each model has its own characteristic sound and effect, the system uses two separate lists:
            </p>
            
            <ul class="feature-list">
              <li><strong>Sound Effects List</strong>: Contains all the audio clips that play when building models</li>
              <li><strong>Visual Effects List</strong>: Contains all the particle effects that display when building models</li>
            </ul>
            
            <div class="alert-box alert-warning">
              <h4 class="alert-box-title">Important Note:</h4>
              <p>The order of effects in both lists must match the order of prefabs in the Construction UI. This ensures the correct sound and effect are played for each model.</p>
            </div>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/effects.png" 
              alt="Effects configuration in Assembly Station"
              caption="Sound and Visual Effects Lists in Inspector"
              class="standard-image"
            />
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">MATCHING PREFABS WITH EFFECTS</h2>
        
        <div class="content-block">
          <div class="content-text">
            <p>
              For proper configuration, you need to ensure that the order of elements in your effects lists matches the order in the Construction UI prefabs list. For example:
            </p>
            
            <div class="example-box">
              <p><strong>Construction UI Order:</strong></p>
              <ul class="mb-3">
                <li>Element 0 = SportCar1</li>
                <li>Element 1 = AKM</li>
                <li>Element 2 = Mecha</li>
              </ul>
              
              <p><strong>The equivalent effect assignments would be:</strong></p>
              <ul>
                <li>For SportCar1 = buildSound and SmokeEffect</li>
                <li>For AKM = buildSound1 and SmokeEffect1</li>
                <li>For Mecha = buildSound2 and SmokeEffect2</li>
              </ul>
            </div>
            
            <p class="mt-3">
              This one-to-one mapping ensures that when a user selects and builds a specific model, the correct sound and particle effect will be triggered, enhancing the immersive experience.
            </p>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/uieffects.png" 
              alt="Construction UI prefabs order"
              caption="Matching Construction UI prefabs with effects"
              class="standard-image"
            />
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">PLACEMENT SYSTEM EFFECTS</h2>
        
        <div class="content-block">
          <div class="content-text">
            <p>
              The system also includes sound effects for the final prefab placement. When a user completes the assembly process and places the final model in the environment, a dedicated sound effect plays to provide satisfying feedback.
            </p>
            <p>
              These placement effects help create a more immersive experience and provide audio confirmation that the placement action has been completed successfully.
            </p>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/placementEffects.png" 
              alt="Placement System Effects"
              caption="Sound effects configuration for the final prefab placement"
              class="standard-image"
            />
          </div>
        </div>
      </div>
    </ContentSection>
  </div>
</template>

<script>
import ContentSection from '@/components/ContentSection.vue'
import ImageZoomable from '@/components/ImageZoomable.vue'
import VideoPlayer from '@/components/VideoPlayer.vue'

export default {
  name: 'Effects',
  components: {
    ContentSection,
    ImageZoomable,
    VideoPlayer
  }
}
</script>

<style>
@import '@/assets/styles/documentation.css';

.disclaimer-box {
  display: flex;
  background-color: #e6f7ff;
  border-left: 4px solid #00A3FF;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.disclaimer-icon {
  font-size: 24px;
  color: #00A3FF;
  margin-right: 15px;
  margin-top: 0;
}

.disclaimer-content h4 {
  font-size: 18px;
  margin-top: 0;
  margin-bottom: 10px;
  color: #00A3FF;
}

.disclaimer-content p {
  margin-bottom: 0;
  line-height: 1.5;
}

.feature-list {
  list-style-type: disc;
  padding-left: 20px;
  margin-bottom: 20px;
}

.feature-list li {
  margin-bottom: 8px;
}

.example-box {
  background-color: #f8f9fa;
  border-radius: 6px;
  padding: 15px;
  border-left: 4px solid #6c757d;
}

.standard-image {
  max-width: 100%;
  width: auto;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.content-block {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 30px;
  margin-top: 20px;
}

.content-text {
  flex: 3;
}

.content-media {
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

@media (max-width: 768px) {
  .disclaimer-box {
    flex-direction: column;
  }
  
  .disclaimer-icon {
    margin-bottom: 10px;
  }
  
  .content-block {
    flex-direction: column;
  }
  
  .content-media {
    align-items: center;
    margin-top: 20px;
  }
}
</style>
