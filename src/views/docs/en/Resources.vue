<template>
  <div>
    <ContentSection>
      <h1>7. RESOURCES</h1>
      <p class="text-center mt-4 mb-4">
        The Resources section is more complex and requires programming knowledge.
        For obvious reasons, I cannot know which and how the resources are managed in your game, so I have added some random ones.
        Iron, Plastic, Rubber.
        <br><br>
        By default, the assembly station uses a resource system, where each piece has a cost and is deducted from the player's inventory.
      </p>

      <div class="content mt-5">
        <div>
          <p class="mb-3">
            The player's resources are located in the folder 
            <code>Assets > AssemblyStation > ScriptableObject > Resources Player</code>.
            This is assigned to the test Player through the <u>script(ResourcesComponentPLayer) that you can find
            in <strong>PLayer Test</strong> in the Hierarchy</u>
          </p>
        </div>
        <div>
          <ImageZoomable src="/src/assets/images/ResourcesPlayer.png" alt="Resources Player" class="mb-2" />
        </div>
      </div>

      <div class="content mt-5">
        <div>
          <p class="mt-5">
            Here you will assign the quantity of resources, while in the script(PlayerResources) you can manage the logic.
          </p>
        </div>
        <div>
          <ImageZoomable src="/src/assets/images/src/assets/images/resources.png/scriptresources.png" alt="Script Resources" />
        </div>
      </div>

      <div class="content mt-5">
        <div>
          <p>
            As seen in chapter <a href="#PieceDescriptionR">4</a> this is the section where you can
            add the various texts, images, etc. in the single piece.
            As you can see, there are 2 sections we haven't talked about <u>RESOURCES VISIBLE</u> and
            <u>RESOURCES.</u>
            <br><br>
            Here you can enter the costs for each piece and make the resources visible or not.
            <br><br>
            Example:
          </p>
        </div>
        <div>
          <div class="d-flex">
            <div>
              <ImageZoomable src="/src/assets/images/pieceResources.png" alt="Piece Resources" style="width: 250px;" />
            </div>
            <div>
              <ImageZoomable src="/src/assets/images/cost.png" alt="Cost" style="width: 250px;" />
            </div>
          </div>
          <div class="d-flex mt-3">
            <div>
              <ImageZoomable src="/src/assets/images/hidden.png" alt="Hidden" style="width: 250px;" />
            </div>
            <div>
              <ImageZoomable src="/src/assets/images/hiddengame.png" alt="Hidden Game" style="width: 250px;" />
            </div>
          </div>
        </div>
      </div>

      <h4 class="text-center mt-5 text-danger">ATTENTION!!!</h4>
      <h5 class="text-center mb-3 text-danger">
        For the pieces that have a Group, the same rule always applies, the <a href="#first"><u>first in the list</u></a> is taken. So the resources will need to be changed there.
      </h5>
      <p class="text-center">
        In the case of pieces with a Group, remember that the resources must always be changed in the
        first piece of the Group, as the data related to image, description, and cost
        are taken from there.
      </p>
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
