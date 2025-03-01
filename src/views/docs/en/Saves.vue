<template>
  <div class="doc-page">
    <ContentSection>
      <h1 class="doc-title">8. SAVES</h1>

      <div class="doc-section">
        <h2 class="doc-section-title">SAVING THE MODEL</h2>
        
        <div class="content-block">
          <div class="content-text">
            <p>
              Once a piece has been assembled, the <strong>Save Build</strong> button will become active.  
              Clicking it will save the model's progress.
            </p>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/save.png" 
              alt="Save Button"
              caption="Button for saving model progress"
              class="standard-image"
            />
          </div>
        </div>
      </div>
      
      <div class="doc-section">
        <h2 class="doc-section-title">SAVE FILES</h2>
        
        <div class="content-block">
          <div class="content-text">
            <p>
              Model saves are located in the folder:  
              <code>Assets > AssemblyStation > Saves</code>.
            </p>
            <hr>
            <p>
              The save files are divided into two parts:  
              <ul class="step-list">
                <li>A JSON file that contains the model with a unique ID.</li>
                <li>A file for saving each individual assembled piece.</li>
              </ul>
            </p>
            <p>
              To reset a model, you can either delete both files or open them  
              and manually remove the specific pieces you want to restore.
            </p>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/savej.png" 
              alt="Save JSON Files"
              caption="JSON save files location and format"
              class="standard-image"
            />
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">HOW SAVES WORK</h2>
        
        <div class="content-block">
          <div class="content-text">
            <p>
              When you click the Save Build button, the system records the following information:
            </p>
            <ul class="step-list">
              <li>Which model is being assembled</li>
              <li>Which specific pieces have been placed</li>
              <li>The current completion percentage</li>
            </ul>
            <p>
              The next time the player opens the Assembly Station and selects the same model, all previously assembled pieces will be automatically displayed as completed.
            </p>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/save.png" 
              alt="Save Button Example"
              caption="The save button records the current state of assembly"
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
  name: 'Saves',
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
  align-items: center;
}

.step-list {
  list-style-type: disc;
  padding-left: 20px;
  margin-bottom: 20px;
}

.step-list li {
  margin-bottom: 8px;
}
</style>
