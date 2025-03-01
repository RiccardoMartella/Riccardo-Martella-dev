<template>
  <div class="doc-page">
    <ContentSection>
      <h1 class="doc-title">5. BUTTONS AND CATEGORIES FOR PREFABS</h1>
      
      <div class="hero-section">
        <ImageZoomable 
          src="/src/assets/images/buttonimmage.png" 
          style="max-width: 400px;" 
          alt="Button Image"
          caption="Example of category buttons in the interface" 
        />
        
        <p class="text-lead text-center mt-4">
          To insert the buttons, just go to the Hierarchy and select Content UI
        </p>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">ACCESSING CONTENT UI INTERFACE</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <p>
              Content UI is the component that manages the user interface of the Assembly Station.
              By selecting it, you can access the button and category settings.
            </p>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/src/assets/images/contentUi.png" 
              alt="Content UI"
              caption="Selecting Content UI in the Hierarchy" 
            />
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">CONFIGURING BUTTONS AND CATEGORIES</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <div class="feature-box">
              <p>
                In the inspector, a section will appear where you can insert the buttons and categories for the prefabs.
                This mechanic is used to add various categories so that in the game the user can select the various models more easily.
              </p>
              <p>
                <strong>Key functionality:</strong> This function adds the buttons in Editor mode, spacing them automatically between them 
                for optimal interface arrangement.
              </p>
            </div>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/src/assets/images/categoryprefab.png" 
              alt="Category Prefab"
              caption="Configuring the categories for prefabs in the inspector" 
            />
          </div>
        </div>
      </div>

      <div class="doc-section alert-section">
        <h2 class="doc-section-title text-center">ATTENTION</h2>
        
        <div class="important-notice">
          <p>
            To better understand the functionality, we will follow a detailed video tutorial.
          </p>
          <div class="warning-banner">
            <h4 class="text-danger text-center"><i class="bi bi-exclamation-triangle"></i> PAY CLOSE ATTENTION TO THIS PART <i class="bi bi-exclamation-triangle"></i></h4>
          </div>
          
          <div class="key-points mt-3">
            <div class="key-point">
              <h5>Initial categories</h5>
              <p>Initially, the categories will be 3: Vehicles, Armory, Tools</p>
            </div>
            
            <div class="key-point">
              <h5>List order</h5>
              <p>It is <u>Fundamental</u> to follow the order of the various lists as shown in the video</p>
            </div>
            
            <div class="key-point">
              <h5>Numbering and correspondence</h5>
              <p>The new buttons you will insert will be numbered in the list, so the models corresponding to the buttons must be in the same position in the Button list</p>
            </div>
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">ADDING A BUTTON TO AN EXISTING CATEGORY</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <div class="step-guide">
              <p><u>How to add a button to a previously created category:</u></p>
              <p>Example from the video:</p>
              <div class="example-code">
                <p>Element 0 - Car → Element 0 - Sport Car</p>
                <p class="note">(in your version not all prefabs are present as in the video, but it serves to make you understand that you will have to use the same procedure with your prefabs)</p>
              </div>
              
              <div class="warning-text">
                <p><strong>PRECISELY ASSIGN ALL CATEGORIES, BUTTONS, AND PREFABS AS IN THE VIDEO OTHERWISE IT WILL NOT WORK</strong></p>
              </div>
              
              <p><strong>If you want to add a button to a previously created category, just follow the video tutorial below:</strong></p>
            </div>
          </div>
          
          <div class="content-media">
            <video controls class="demo-video" src="/src/assets/video/CategoryPrefab.mp4" type="video/mp4"></video>
            <p class="caption">Tutorial: Adding a button to an existing category</p>
            
            <video controls class="demo-video mt-4" src="/src/assets/video/newCategory.mp4" type="video/mp4"></video>
            <p class="caption">Tutorial: Complete procedure for adding new buttons</p>
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">ADDING A NEW CATEGORY</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <div class="info-box">
              <p>If you want to add a new category in addition to the first 3, follow the video tutorial below.</p>
              <hr>
              <p>To add a 4th category, as you will see in the video, I had to first add and assign the Tools category that in the previous video was not inserted in the list because there were no buttons assigned to a prefab.</p>
              <hr>
              <p>This is because, as explained, it is fundamental to keep the lists correctly numbered otherwise the system gives an error. It doesn't make sense to leave an empty category, but I wanted to show you this example for completeness.</p>
              <hr>
              <p class="pro-tip"><strong>Tip:</strong> As you will see in the video, I duplicated the button to then change the text. This is because each button has a script and an assigned number <u>fundamental</u> for the functionality. When adding a new category, duplicate an existing button, change the text and update the number that will progress with the addition of categories.</p>
            </div>
          </div>
          
          <div class="content-media">
            <video controls class="demo-video" src="/src/assets/video/newCAtegory2.mp4" type="video/mp4"></video>
            <p class="caption">Tutorial: Procedure for adding a new category</p>
          </div>
        </div>
      </div>

      <div class="doc-section final-section">
        <h2 class="doc-section-title">ACTIVATION MANAGEMENT</h2>
        
        <div class="content-block vertical">
          <div class="important-rule text-center">
            <p class="mb-4">
              <u><strong>Every time a category is added, it must be disabled<br>Only the first one should be left active</strong></u>
            </p>
          </div>
          
          <div class="image-comparison">
            <div class="comparison-item">
              <h5>Active Category</h5>
              <ImageZoomable 
                src="/src/assets/images/active.png" 
                alt="Active"
                caption="Correctly active category" 
              />
            </div>
            
            <div class="comparison-item">
              <h5>Disabled Category</h5>
              <ImageZoomable 
                src="/src/assets/images/noactive.png" 
                alt="Not Active" 
                caption="Correctly disabled category" 
              />
            </div>
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
  name: 'Buttons',
  components: {
    ContentSection,
    ImageZoomable
  }
}
</script>

<style>
@import '@/assets/styles/documentation.css';

/* Page specific styles */
.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
}

.vertical {
  flex-direction: column !important;
}

.vertical .content-text {
  margin-bottom: 20px;
}

.vertical .content-media {
  width: 100%;
}

.demo-video {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.caption {
  text-align: center;
  font-style: italic;
  color: #666;
  margin-top: 10px;
}

.feature-box {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  border-left: 4px solid #00A3FF;
}

.warning-banner {
  background-color: #fff3cd;
  padding: 10px;
  border-radius: 4px;
  margin: 15px 0;
}

.key-points {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.key-point {
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid #17a2b8;
}

.key-point h5 {
  margin-bottom: 8px;
  color: #17a2b8;
}

.example-code {
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  margin: 15px 0;
  font-family: monospace;
}

.note {
  font-size: 0.9rem;
  color: #6c757d;
  font-style: italic;
}

.warning-text {
  background-color: #f8d7da;
  color: #721c24;
  padding: 15px;
  border-radius: 8px;
  margin: 15px 0;
}

.important-rule {
  background-color: #fff3cd;
  padding: 15px;
  border-radius: 8px;
  margin: 20px 0;
}

.image-comparison {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: 20px;
}

.comparison-item {
  text-align: center;
  flex: 1;
  min-width: 250px;
}

.comparison-item h5 {
  margin-bottom: 10px;
  color: #495057;
}

.pro-tip {
  background-color: #d4edda;
  color: #155724;
  padding: 10px;
  border-radius: 4px;
}

.final-section {
  margin-top: 50px;
  padding-top: 20px;
  border-top: 1px solid #e9ecef;
}
</style>
