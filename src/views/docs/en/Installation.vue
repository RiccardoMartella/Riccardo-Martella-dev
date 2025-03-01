<template>
  <div>
    <ContentSection>
      <h1>1. INSTALLATION</h1>
      <p class="text-center mt-4 mb-4">
        The project internally uses <strong>Text Mesh Pro</strong> and <strong>Input System</strong>.
      </p>
      
      <div class="content">
        <div>
          <h3>TEXTMESH PRO IN THE PROJECT</h3>
          <p>
            The TextMesh Pro package is included in Unity Editor. It is not necessary to install it. You can follow
            the simple guide at the link to insert it into the project
            <a href="https://docs.unity3d.com/Packages/com.unity.ugui@2.0/manual/TextMeshPro/index.html">(TextMesh Pro)</a>.
          </p>
          <p>
            There may be an issue where you do not see the text on buttons or other parts,
            due to the text not having an assigned font. Just go to the text and set a
            base or custom font.
          </p>
        </div>
        <div>
          <img src="/src/assets/images/text.png" alt="Example TextMesh Pro" class="img-fluid" @click="zoomImage">
        </div>
      </div>

      <div class="content mt-5">
        <div>
          <h3>INPUT SYSTEM</h3>
          <p>
            At the beginning of the project, there is a basic player that can move freely and access
            the Assembly Station via a button. The player is moved thanks to the 
            <a href="https://docs.unity3d.com/Packages/com.unity.inputsystem@1.13/manual/index.html">Unity Input System</a> 
            and contains a script that manages the Assembly Station resources.
          </p>
          <p>
            If your project already has a player, you can use your Input System and add the script
            <strong>RESOURCES COMPONENT PLAYER</strong> to the components. If you want to use mine, you need
            to install the <strong>INPUT SYSTEM</strong>.
          </p>
          <p>
            If an Input System is already present, just modify the script <strong>PLAYER CONTROLLER</strong>
            to integrate it.
          </p>
        </div>
        <div>
          <img src="/src/assets/images/input.png" alt="Example Input System" class="img-fluid" @click="zoomImage">
        </div>
      </div>
    </ContentSection>
  </div>
</template>

<script>
import ContentSection from '@/components/ContentSection.vue'

export default {
  name: 'Installation',
  components: {
    ContentSection
  },
  methods: {
    zoomImage(event) {
      const img = event.target;
      const src = img.getAttribute('src');
      
      // Create a modal or open in new tab
      window.open(src, '_blank');
    }
  }
}
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
}

.content > div:first-child {
  flex: 1;
}

.content > div:last-child {
  flex: 1;
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
