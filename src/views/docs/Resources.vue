<template>
  <div class="doc-page">
    <ContentSection>
      <h1 class="doc-title">7. RESOURCES</h1>

      <div class="doc-section">
        <h2 class="doc-section-title">VIDEO TUTORIAL</h2>

        <div class="content-block vertical">
          <div class="content-text">
            <p>
              Tutorial on how to set up resources for each prefab piece: assign which resources are used,
              define the cost for every piece, and create new resources.
            </p>
          </div>

          <div class="content-media">
            <video controls class="demo-video w-100">
              <source src="https://www.dropbox.com/scl/fi/ew377fgnnfqvzouyjpcxj/Resources.mp4?rlkey=l8i8cpwiyqqeb0pew05685x0b&dl=1" type="video/mp4">
              Your browser does not support HTML5 video.
            </video>
            <p class="caption">Tutorial: how to configure resources, costs and new entries</p>
          </div>
        </div>
      </div>
      
      <div class="info-box">
        <p class="text-center mb-0">
          By default, the Assembly Station uses a resource system, 
          where each piece has a cost that is deducted from the player's inventory.
        </p>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">PLAYER RESOURCES</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <p>
              The player's resources are located in the folder: 
              <code>Assets > AssemblyStation > ScriptableObject > PlayerResources </code>.
              This is assigned to the test Player through the <u>script (ResourcesComponentPLayer) that you can find
              in <strong>PLayer Test</strong> in the Hierarchy</u>
            </p>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/ResourcesPlayer.png" 
              alt="Resources Player"
              caption="Player resources configuration" 
            />
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">RESOURCE MANAGEMENT</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <p>
              In this section you will assign the quantity of resources available to the player; if needed, you can also add new ones (if you haven’t already), as shown in the video above.
            </p>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/scriptresources.png" 
              alt="Script Resources"
              caption="Script for resource management" 
            />
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">PIECE COSTS</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <p>
              As seen in chapter <a href="#PieceDescriptionR">4</a> this is the section where you can
              add the various texts, images, etc. in the single piece.
              As you can see, there are 2 sections we haven't discussed yet: <u>RESOURCES COSTS</u> and
              <u>SHOW IN UI.</u>
            </p>
            <p>
              Here you can enter the costs for each piece and decide whether to make the resources visible or not in the interface.
            </p>
          </div>
          
          <div class="content-media">
            <h4 class="sub-heading">Resource configuration examples:</h4>
            
            <div class="image-grid">
              <div class="image-row">
                <div class="image-card">
                  <ImageZoomable 
                    src="/images/pieceResources.png" 
                    alt="Piece Resources"
                    caption="Piece resources configuration" 
                  />
                </div>
                <div class="image-card">
                  <ImageZoomable 
                    src="/images/cost.png" 
                    alt="Cost"
                    caption="Cost display in game" 
                  />
                </div>
              </div>
              <div class="image-row mt-4">
                <div class="image-card">
                  <ImageZoomable 
                    src="/images/hidden.png" 
                    alt="Hidden"
                    caption="Configuration with hidden resources" 
                  />
                </div>
                <div class="image-card">
                  <ImageZoomable 
                    src="/images/hiddengame.png" 
                    alt="Hidden Game"
                    caption="In-game display without showing resources" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">RESOURCES PANEL</h2>

        <div class="panel-preview-wrapper">
          <ImageZoomable
            src="/images/panel_resources.jpeg"
            alt="Resources panel preview"
            caption="Resources panel in the interface"
          />
        </div>

        <div class="content-block vertical">
          <div class="content-text">
            <p>
              The resources panel is automatically updated with the resources assigned to the player.
            </p>
            <p>
              In the Hierarchy, simply select <code>Panel_Resource</code> as shown in the image and, in the
              <strong>Panel Resource (Script)</strong> section, drag the resource text and assign the one you want.
            </p>
            <p>
              If you want to add a new resource, just copy the existing parent/child structure of the current resources
              and configure it following the same pattern.
            </p>
          </div>

          <div class="content-media">
            <ImageZoomable
              src="/images/PanelResources.png"
              alt="Resources panel in the UI"
              caption="Resources panel configuration in the Hierarchy and script"
            />
          </div>
        </div>
      </div>

      <div class="doc-section alert-section">
        <h2 class="doc-section-title text-center text-danger">ATTENTION!</h2>
        
        <div class="alert-box alert-warning">
          <h4 class="alert-box-title text-danger text-center">
            Group resource management
          </h4>
          <p>
            For the pieces that have a Group, the same rule always applies: the <a href="#first"><u>first in the list</u></a> is taken. 
            So the resources will need to be changed in that specific piece.
          </p>
          <p>
            In the case of pieces with a Group, remember that the resources must always be changed in the
            first piece of the Group, as the data related to image, description, and cost
            are taken from there.
          </p>
        </div>
      </div>
    </ContentSection>
  </div>
</template>

<script>
import ContentSection from '@/components/ContentSection.vue'
import ImageZoomable from '@/components/ImageZoomable.vue'

export default {
  name: 'Resources',
  components: {
    ContentSection,
    ImageZoomable
  }
}
</script>

<style>
@import '@/assets/styles/documentation.css';

/* Page specific styles */
.vertical {
  flex-direction: column !important;
}

.vertical .content-text {
  margin-bottom: 20px;
}

.vertical .content-media {
  width: 100%;
}

.image-grid {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.image-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.image-card {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.info-box {
  background-color: #e8f4f8;
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0 30px;
  border-left: 4px solid #17a2b8;
}

.sub-heading {
  font-size: 1.1rem;
  margin-bottom: 15px;
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 8px;
}

.alert-section {
  background-color: #fff9f9;
  border-radius: 8px;
  padding: 20px;
  margin: 30px 0;
  border-left: 4px solid #dc3545;
}

.panel-preview-wrapper {
  max-width: 420px;
  margin: 0 auto 20px;
}

@media (max-width: 768px) {
  .image-row {
    grid-template-columns: 1fr;
  }
}
</style>
