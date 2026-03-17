<template>
  <div class="doc-page">
    <ContentSection>
      <h1 class="doc-title">12. PIECE LOCKING SYSTEM</h1>
      
      <p class="text-lead">
        The piece locking system allows you to create a progression mechanic in your assembly process, requiring users to build a certain number of pieces before unlocking others.
      </p>

      <div class="doc-section">
        <h2 class="doc-section-title">LOCKED PIECES IN ACTION</h2>
        
        <div class="content-block">
          <div class="content-text">
            <p>
              When a piece is locked, it will appear with a lock icon in the interface. The user must build the required number of other pieces before being able to place the locked piece. This creates a strategic progression system for your assembly projects.
            </p>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/Lockpieces.jpg" 
              alt="Locked piece in the interface"
              caption="Example of a locked piece in the assembly interface" 
            />
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">HOW TO LOCK A PIECE</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <p>
              To lock a piece, follow these steps:
            </p>
            <ol class="numbered-list">
              <li>Navigate to the Piece Descriptor of the piece you want to lock</li>
              <li>Check the <strong>Lock Piece</strong> checkbox to activate the locking system</li>
              <li>Set the <strong>Lock Level</strong> value, which determines how many pieces must be built before this piece becomes available</li>
            </ol>
            <p>
              The lock level represents the number of pieces that must be constructed before this piece becomes available to the user. For example, if you set the lock level to 5, the user must build at least 5 other pieces before this one becomes unlocked.
            </p>
            <div class="alert alert-info mt-3">
              <i class="bi bi-info-circle-fill me-2"></i>
              <strong>Tip:</strong> Use this feature to guide users through a logical building sequence or to create a challenge progression in your assembly instructions.
            </div>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/LockSettings.jpg" 
              alt="Lock Settings"
              caption="Lock piece settings in the Piece Descriptor" 
            />
          </div>
        </div>
      </div>

      <div class="doc-section alert-section">
        <h2 class="doc-section-title text-center text-danger">IMPORTANT NOTE FOR GROUPS</h2>
        
        <div class="alert-box alert-warning">
          <h4 class="alert-box-title text-danger text-center">
            Locking pieces in groups
          </h4>
          <p>
            When working with grouped pieces, remember to apply the lock settings to the <strong>main piece</strong> of the group (the one checked in GroupPieces). As explained in the <RouterLink to="/docs/categories#first" class="alert-link">Groups section</RouterLink>, the first piece in a group controls all settings for the entire group.
          </p>
          <p>
            If you apply lock settings to secondary pieces in a group, they will be ignored since the group is controlled by its main piece.
          </p>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">STRATEGIC IMPLEMENTATION</h2>
        
        <div class="content-block">
          <div class="content-text">
            <p>
              The piece locking system adds a new dimension to your assembly instructions:
            </p>
            <ul class="feature-list">
              <li><strong>Guided progression:</strong> Lead users through a logical building sequence</li>
              <li><strong>Challenge escalation:</strong> Create increasing difficulty as the build progresses</li>
              <li><strong>Achievement system:</strong> Reward users with new pieces as they make progress</li>
              <li><strong>Educational pacing:</strong> Ensure complex parts are only accessible after users have learned the basics</li>
            </ul>
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
  name: 'BlockPiece',
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

.feature-list {
  list-style-type: disc;
  padding-left: 20px;
  margin-bottom: 20px;
}

.feature-list li {
  margin-bottom: 8px;
}
</style>
