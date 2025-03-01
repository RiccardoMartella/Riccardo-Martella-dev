<template>
  <div>
    <ContentSection>
      <h1>2. FBX AND MATERIALS GUIDE</h1>
      <p>
        Pay attention to this part, it is essential for using the asset. Assembly Station works
        through <strong>SKINNED MESH RENDER</strong> and <strong>MESH RENDER</strong>.
      </p>

      <div class="content">
        <div>
          <h3>Model FBX</h3>
          <p>
            If you have an FBX model, you need to extract all the materials and put them in the
            <strong>Resources</strong> folder within the path
            <code>Assets > AssemblyStation > Resources</code>.
          </p>
        </div>
        <div>
          <img src="/src/assets/images/resources.png" alt="Resources Path" class="img-fluid" @click="zoomImage">
        </div>
      </div>

      <div class="content mt-4">
        <div>
          <p>
            To extract the materials, go here:
          </p>
        </div>
        <div>
          <div class="image-group">
            <img src="/src/assets/images/Fbx2.png" alt="Example Fbx2" class="img-fluid" @click="zoomImage">
            <img src="/src/assets/images/Fbx3.png" alt="Example Fbx3" class="img-fluid" @click="zoomImage">
          </div>
          <p>
            And select the Resources folder.
          </p>
        </div>
      </div>

      <div class="content mt-4">
        <div>
          <p>
            Once done, go back to the FBX model and select the options indicated by the arrows in the image below.
            <br>
            <br>Automatically the model will recognize the
            materials present in the folder.
          </p>
        </div>
        <div>
          <img src="/src/assets/images/FBX.png" alt="Example FBX" class="img-fluid" @click="zoomImage">
        </div>
      </div>
    </ContentSection>
  </div>
</template>

<script>
import ContentSection from '@/components/ContentSection.vue'

export default {
  name: 'FBXGuide',
  components: {
    ContentSection
  },
  methods: {
    zoomImage(event) {
      const img = event.target;
      const src = img.getAttribute('src');
      
      window.open(src, '_blank');
    }
  }
}
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 20px;
  margin-top: 20px;
}

.content > div:first-child {
  flex: 1;
}

.content > div:last-child {
  flex: 1;
}

.image-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.img-fluid {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.img-fluid:hover {
  transform: scale(1.01);
}

@media (max-width: 768px) {
  .content {
    flex-direction: column;
  }
}
</style>
