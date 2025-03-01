<template>
  <div>
    <ContentSection>
      <h1>8. SAVES</h1>
      
      <div class="content mt-5">
        <div>
          <p class="text-center mt-4 mb-4">
            Once a piece has been assembled, the <strong>Save Build</strong> button will become active.  
            Clicking it will save the model's progress.
          </p>
        </div>
        <div>
          <ImageZoomable src="/src/assets/images/save.png" alt="Save Button" class="mb-2" />
        </div>
      </div>
      
      <div class="content mt-5">
        <div>
          <p class="mt-5">
            Model saves are located in the folder  
            <code>Assets > AssemblyStation > Saves</code>.
          </p>
          <hr>
          <p>
            The save files are divided into two parts:  
            <ul>
              <li>A JSON file that contains the model with a unique ID.</li>
              <li>A file for saving each individual assembled piece.</li>
            </ul>
          </p>
          <p>
            To reset a model, you can either delete both files or open them  
            and manually remove the specific pieces you want to restore.
          </p>
        </div>
        <div>
          <ImageZoomable src="/src/assets/images/savej.png" alt="Save JSON Files" class="mb-2" />
        </div>
      </div>

      <div class="content mt-5">
        <div>
          <h3>How Saves Work</h3>
          <p>
            When you click the Save Build button, the system records the following information:
          </p>
          <ul>
            <li>Which model is being assembled</li>
            <li>Which specific pieces have been placed</li>
            <li>The current completion percentage</li>
          </ul>
          <p>
            The next time the player opens the Assembly Station and selects the same model, all previously assembled pieces will be automatically displayed as completed.
          </p>
        </div>
        <div>
          <div class="d-flex justify-content-center">
            <ImageZoomable src="/src/assets/images/save.png" alt="Save Button Example" />
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
  name: 'Saves',
  components: {
    ContentSection,
    ImageZoomable
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

@media (max-width: 768px) {
  .content {
    flex-direction: column;
  }
}
</style>
