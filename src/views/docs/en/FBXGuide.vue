<template>
  <div class="doc-page">
    <ContentSection>
      <h1 class="doc-title">2. FBX AND MATERIALS GUIDE</h1>
      
      <p class="text-lead">
        Pay attention to this part, it is essential for using the asset. Assembly Station works
        through <strong>SKINNED MESH RENDER</strong> and <strong>MESH RENDER</strong>.
      </p>

      <div class="doc-section">
        <h2 class="doc-section-title">MODEL FBX</h2>
        
        <div class="content-block">
          <div class="content-text">
            <p>
              If you have an FBX model, you need to extract all the materials and put them in the
              <strong>Resources</strong> folder within the path
              <code>Assets > AssemblyStation > Resources</code>.
            </p>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/src/assets/images/resources.png" 
              alt="Resources Path"
              caption="Resources folder for materials"
              class="standard-image"
            />
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">EXTRACTING MATERIALS</h2>
        
        <div class="content-block">
          <div class="content-text">
            <p>
              To extract the materials, navigate to the following location:
            </p>
            
            <p class="mt-4">
              And select the Resources folder as shown in the images on the right.
            </p>
          </div>
          
          <div class="content-media">
            <div class="image-stack">
              <ImageZoomable 
                src="/src/assets/images/Fbx2.png" 
                alt="Example Fbx2"
                caption="First step of material extraction"
                class="standard-image"
              />
              <ImageZoomable 
                src="/src/assets/images/Fbx3.png" 
                alt="Example Fbx3"
                caption="Selecting the Resources folder"
                class="standard-image mt-3"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">MODEL CONFIGURATION</h2>
        
        <div class="content-block">
          <div class="content-text">
            <p>
              Once done, go back to the FBX model and select the options indicated by the arrows in the image on the right.
            </p>
            <p>
              Automatically the model will recognize the materials present in the folder.
            </p>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/src/assets/images/FBX.png" 
              alt="Example FBX"
              caption="FBX options configuration"
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
  name: 'FBXGuide',
  components: {
    ContentSection,
    ImageZoomable
  }
}
</script>

<style>
@import '@/assets/styles/documentation.css';

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

.standard-image {
  max-width: 100%;
  width: auto;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.image-stack {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}

.mt-3 {
  margin-top: 15px;
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
