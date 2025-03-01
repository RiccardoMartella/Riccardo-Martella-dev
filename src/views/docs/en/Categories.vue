<template>
  <div>
    <ContentSection>
      <h1>6. TAGS/CATEGORIES/GROUPS OF PIECES</h1>
      <p class="text-center mt-4 mb-4">
        Once all the texts and images have been inserted, you can proceed with creating the TAGS and GROUPS.
      </p>

      <div class="content mt-5">
        <div>
          <p>
            Initially, each piece of the prefab will not have a tag and will therefore be visible in the panel in a single list.
          </p>
        </div>
        <div>
          <ImageZoomable src="/src/assets/images/nocategory.png" alt="No Category" />
        </div>
      </div>

      <div class="content mt-5">
        <div>
          <p>
            If you want to divide the pieces by category, just create a tag and assign it to each piece for each category.
            You can select multiple tags at the same time by holding down the CTRL key and selecting the various Pieces, otherwise by pressing the CTRL+SHIFT key.
          </p>
        </div>
        <div>
          <ImageZoomable src="/src/assets/images/Tag.png" alt="Tag" />
        </div>
      </div>

      <div class="content mt-5">
        <div>
          <p>
            By doing so, the pieces will be divided based on the tag you assigned.
          </p>
        </div>
        <div>
          <ImageZoomable src="/src/assets/images/multicat.png" alt="Multiple Categories" style="width: 250px;" />
        </div>
      </div>

      <h4 class="text-center mt-5 text-danger">ATTENTION!!!</h4>
      <h4 class="text-center mb-3 text-danger">Pay attention to this part</h4>
      <h3 class="text-center mb-5">GROUPS</h3>
      <p class="text-center">
        Each piece that contains a <u>SkinnedMeshRenderer or a MeshRenderer</u> will be displayed in
        the panel. This means that, in the presence of models with hundreds of pieces, the resulting list will be
        very long, making it difficult for the user to quickly find the desired piece.
        <br>
        To solve this problem, I introduced Groups, which allow you to organize the pieces into
        specific categories, simplifying the search and management. To better clarify the concept, here is an example:
      </p>

      <div class="content mt-5 mb-3">
        <div>
          <p>
            In this case, the pieces do not have an assigned group and will therefore be displayed in 6 buttons.
          </p>
        </div>
        <div>
          <ImageZoomable src="/src/assets/images/testgruppi.png" alt="Test Groups" />
        </div>
      </div>

      <div class="content mt-5 mb-3">
        <div>
          <p>
            While once the group is assigned, here is the result:
            <br>1 button for 6 pieces
            <br><br>
            <u>Any number of pieces can be combined into a group.</u>
          </p>
        </div>
        <div>
          <ImageZoomable src="/src/assets/images/fix.png" alt="Fix" />
        </div>
      </div>

      <div class="content mt-5 mb-3">
        <div>
          <p>
            To assign the group, here is the video.
          </p>
        </div>
        <div class="d-flex justify-content-center">
          <video controls class="w-100" src="/src/assets/video/AssemblyStation-GuidaallInstallazione.mp4" type="video/mp4"></video>
        </div>
      </div>

      <p id="first" class="text-center">
        When using Groups, the image is automatically selected from the first piece of the group, as well as the description and name.
      </p>

      <div class="content mt-5 mb-3">
        <div>
          <p>
            For the pieces that have a Group, the same rule always applies, the first in the list is taken. So the resources will need to be changed there.
          </p>
          <p>
            <strong class="text-danger">This function is still under development to facilitate the insertion of the image in the Groups</strong>
          </p>
        </div>
        <div class="d-flex justify-content-center">
          <ImageZoomable src="/src/assets/images/piceGroupFix.png" alt="Piece Group Fix" />
        </div>
      </div>
    </ContentSection>
  </div>
</template>

<script>
import ContentSection from '@/components/ContentSection.vue'
import ImageZoomable from '@/components/ImageZoomable.vue'

export default {
  name: 'Categories',
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

@media (max-width: 768px) {
  .content {
    flex-direction: column;
  }
}
</style>
