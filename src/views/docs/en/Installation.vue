<template>
  <div class="doc-page">
    <ContentSection>
      <h1 class="doc-title">1. INSTALLATION</h1>
      
      <p class="text-lead">
        The project internally uses <strong>Text Mesh Pro</strong> and <strong>Input System</strong>.
        Please follow the steps below for proper installation and setup.
      </p>
      
      <div class="doc-section">
        <h2 class="doc-section-title">TEXTMESH PRO IN THE PROJECT</h2>
        
        <div class="content-block">
          <div class="content-text">
            <p>
              The TextMesh Pro package is included in Unity Editor. It is not necessary to install it separately. 
              You can follow the simple guide at the link to insert it into your project
              <a href="https://docs.unity3d.com/Packages/com.unity.ugui@2.0/manual/TextMeshPro/index.html" 
                 target="_blank">TextMesh Pro Documentation</a>.
            </p>
            
            <div class="alert-box alert-warning">
              <h4 class="alert-box-title">Important Note:</h4>
              <p>There may be an issue where you do not see text on buttons or 
              other UI elements. This occurs because the text components don't have an assigned font. 
              Simply select the text component and assign a base or custom font to resolve this issue.</p>
            </div>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/text.png" 
              alt="TextMesh Pro Font Assignment Example"
              caption="TextMesh Pro Font Settings Panel"
              class="standard-image"
            />
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">INPUT SYSTEM</h2>
        
        <div class="content-block">
          <div class="content-text">
            <p>
              At the beginning of the project, there is a basic player that can move freely and access
              the Assembly Station via a button. The player movement is controlled by the 
              <a href="https://docs.unity3d.com/Packages/com.unity.inputsystem@1.13/manual/index.html" 
                 target="_blank">Unity Input System</a>, and it contains a script that manages the
              Assembly Station resources.
            </p>
            
            <div class="alert-box alert-info">
              <h4 class="alert-box-title">Project Integration Options:</h4>
              <ul class="step-list">
                <li>
                  If your project already has a player, you can use your own Input System and add the 
                  <code>RESOURCES COMPONENT PLAYER</code> script to your player components.
                </li>
                <li>
                  If you want to use the included player, you'll need to install the <code>INPUT SYSTEM</code>
                  package from the Unity Package Manager.
                </li>
                <li>
                  If your project already has an Input System implementation, simply modify the 
                  <code>PLAYER CONTROLLER</code> script to integrate with your existing system.
                </li>
              </ul>
            </div>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/input.png" 
              alt="Input System Configuration Example"
              caption="Unity Input System Configuration"
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

export default {
  name: 'Installation',
  components: {
    ContentSection,
    ImageZoomable
  }
}
</script>

<style>
@import '@/assets/styles/documentation.css';

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

.step-list {
  list-style-type: disc;
  padding-left: 20px;
  margin-bottom: 20px;
}

.step-list li {
  margin-bottom: 8px;
}

@media (max-width: 768px) {
  .content-block {
    flex-direction: column;
  }
  
  .content-media {
    align-items: center;
    margin-top: 20px;
  }
}
</style>
