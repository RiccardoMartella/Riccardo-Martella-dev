<template>
  <div>
    <ContentSection>
      <h1>9. KNOWN ISSUES</h1>
      
      <div class="content mt-5">
        <div>
          <p class="text-center mt-4 mb-4">
            It can happen that, when you go to build certain pieces, this type of error appears:
          </p>
        </div>
        <div>
          <ImageZoomable src="/src/assets/images/bug.png" alt="Error Message" class="mb-2" />
        </div>
      </div>
      
      <div class="content mt-5">
        <div>
          <p class="mt-5">
            This can happen because the piece might have the same name as another piece already in the game.
            To solve the problem, simply rename it and assign it the corresponding Scriptable Object.
          </p>
          <p>
            The video below demonstrates how to fix this issue:
          </p>
        </div>
        <div>
          <video controls class="w-100" src="/src/assets/video/bug.mp4" type="video/mp4"></video>
        </div>
      </div>

      <div class="alert alert-info mt-5">
        <h4 class="alert-heading">Troubleshooting Tips</h4>
        <p>
          When facing issues with Assembly Station, consider the following common solutions:
        </p>
        <ul>
          <li>Ensure all materials are correctly placed in the Resources folder</li>
          <li>Check that prefabs are properly set up with appropriate pivots</li>
          <li>Verify that all required components are assigned in the inspector</li>
          <li>Make sure there are no duplicate names in your project pieces</li>
          <li>Check for error messages in the Unity console</li>
        </ul>
      </div>
      
      <div class="mt-5">
        <h3 class="text-center">Need Help?</h3>
        <p class="text-center">
          If you're experiencing issues not covered in this documentation, feel free to contact me for support.
        </p>
        <div class="d-flex justify-content-center gap-4 mt-3">
          <a href="#" class="btn btn-outline-primary">
            <i class="bi bi-github me-2"></i>Report Issue on GitHub
          </a>
          <a href="#" class="btn btn-outline-primary">
            <i class="bi bi-envelope me-2"></i>Contact via Email
          </a>
        </div>
      </div>
    </ContentSection>
  </div>
</template>

<script>
import ContentSection from '@/components/ContentSection.vue'
import ImageZoomable from '@/components/ImageZoomable.vue'

export default {
  name: 'KnownIssues',
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

video {
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.alert {
  border-left: 4px solid #00A3FF;
}

@media (max-width: 768px) {
  .content {
    flex-direction: column;
  }
}
</style>
