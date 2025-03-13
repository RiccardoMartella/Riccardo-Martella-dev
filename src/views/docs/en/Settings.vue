<template>
  <div class="doc-page">
    <ContentSection>
      <h1 class="doc-title">11. GENERAL SETTINGS</h1>
      
      <p class="text-lead">
        This page describes all the different settings available in Assembly Station.
      </p>
      
      <div class="doc-section">
        <h2 class="doc-section-title">CONSTRUCTION SETTINGS</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <p>
              In the Hierarchy, you can find the <strong>Construction UI</strong> GameObject which contains all the settings for:
            </p>
            <ul>
              <li>Button settings for each model</li>
              <li>Color assignments for model transparency</li>
              <li>Individual settings for each piece of each model that will be displayed in the left grid</li>
              <li>Settings for the popup that appears when clicking on a piece</li>
            </ul>
            <p>
              These settings allow you to fully customize the appearance and behavior of your interactive models.
            </p>
          </div>
          
          <div class="content-media">
            <div class="image-group">
              <ImageZoomable 
                src="/images/construction2.jpg" 
                alt="Construction Settings 2"
                caption="Construction interface settings" 
              />
              <ImageZoomable 
                src="/images/construction1.jpg" 
                alt="Construction Settings 1"
                caption="Construction configuration details" 
              />
            </div>
          </div>
        </div>
      </div>
      
      <div class="doc-section">
        <h2 class="doc-section-title">FREE CAMERA SETTINGS</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <p>
              These settings control the free camera that activates when you press the <kbd>L</kbd> key.
              You can adjust:
            </p>
            <ul>
              <li>Movement speed</li>
              <li>Rotation sensitivity</li>
              <li>Zoom settings</li>
              <li>Camera boundaries</li>
            </ul>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/freecam.jpg" 
              alt="Free Camera Settings"
              caption="Free camera configuration" 
            />
          </div>
        </div>
      </div>
      
      <div class="doc-section">
        <h2 class="doc-section-title">ORBIT CAMERA SETTINGS</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <p>
              These settings control the orbit camera that rotates around your model.
              You can configure:
            </p>
            <ul>
              <li>Rotation speed</li>
              <li>Damping and smoothing</li>
              <li>Minimum and maximum distance</li>
              <li>View angle restrictions</li>
            </ul>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/orbit.jpg" 
              alt="Orbit Camera Settings"
              caption="Orbit camera configuration" 
            />
          </div>
        </div>
      </div>
      
      <div class="doc-section">
        <h2 class="doc-section-title">VISUAL AND SOUND EFFECTS SETTINGS</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <p>
              These settings relate to the sound and visual effects associated with each prefab.
              You can adjust:
            </p>
            <ul>
              <li>Sound effect volumes and triggers</li>
              <li>Visual effect parameters</li>
              <li>Animation timings</li>
              <li>Particle system configurations</li>
            </ul>
            <p>
              Customizing these settings allows you to create a more immersive and interactive experience for your users.
            </p>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/viewdetails2.jpg" 
              alt="Visual and Sound Effects Settings"
              caption="Visual and sound effects configuration" 
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

export default {
  name: 'SettingsPage',
  components: {
    ContentSection,
    ImageZoomable
  }
}
</script>

<style>
@import '@/assets/styles/documentation.css';

.vertical {
  flex-direction: column !important;
}

.vertical .content-text {
  margin-bottom: 20px;
}

.vertical .content-media {
  width: 100%;
}

.image-group {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.image-group > div {
  flex: 1;
  min-width: 280px;
}

kbd {
  background-color: #f7f7f7;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(0,0,0,0.2);
  color: #333;
  display: inline-block;
  font-size: .85em;
  font-weight: 700;
  line-height: 1;
  padding: 2px 4px;
  white-space: nowrap;
}

@media (max-width: 768px) {
  .image-group {
    flex-direction: column;
  }
}
</style>
