<template>
  <div>
    <ContentSection>
      <h1>5. BUTTONS AND CATEGORIES FOR PREFABS</h1>
      
      <div class="d-flex justify-content-center mt-5">
        <ImageZoomable src="/src/assets/images/buttonimmage.png" style="width: 30%;" alt="Button Image" />
      </div>
      <hr>
      <p class="text-center mt-4 mb-4">
        To insert the buttons, just go to the Hierarchy and select Content UI
      </p>

      <div class="content mt-5">
        <div>
          <p>
            Content UI
          </p>
        </div>
        <div>
          <ImageZoomable src="/src/assets/images/contentUi.png" alt="Content UI" />
        </div>
      </div>

      <div class="content mt-5">
        <div>
          <p>
            In the inspector, a section will appear where you can insert the buttons and categories for the prefabs.
            This mechanic is used to add various categories so that in the game the user can select the various models more easily.
            <br><br>
            This function adds the buttons in Editor mode, spacing them automatically between them.
          </p>
        </div>
        <div>
          <ImageZoomable src="/src/assets/images/categoryprefab.png" alt="Category Prefab" />
        </div>
      </div>

      <h3 class="text-center mt-2">ATTENTION</h3>
      <div class="content mt-5">
        <div>
          <div class="mb-5">
            <p>
              To better understand the functionality, I will help you with a video.
            </p>
            <hr>
            <strong><u class="text-danger">PAY CLOSE ATTENTION TO THIS PART</u></strong>
            <hr>
            <p>Initially, the categories will be 3: Vehicles, Armory, Tools</p>
            <hr>
            <p>As you will see in the video, it is <u>Fundamental</u> to follow the order of the various lists</p>
            <hr>
            <p>The new buttons you will insert will be numbered in the list, so the models corresponding to the buttons must be in the same position in the Button list</p>
          </div>
          <div class="pt-5">
            <hr>
            <p><u>Add a button to a previously created category:</u></p>
            <p>As in the video:</p>
            <hr>
            <p>Element 0 - Car -> Element 0 - Sport Car<br>
              (in your version not all prefabs are present as in the video, but it serves to make you understand that you will have to use the same procedure with your prefabs)
            </p>
            <hr>
            <p class="text-danger"><strong>PRECISELY ASSIGN ALL CATEGORIES, BUTTONS, AND PREFABS AS IN THE VIDEO OTHERWISE IT WILL NOT WORK</strong></p>
            <hr>
            <p><strong>If you want to add a button to a previously created category, just follow the video ---></strong></p>
          </div>
        </div>
        <div>
          <video controls class="w-100 mb-5" src="/src/assets/video/CategoryPrefab.mp4" type="video/mp4"></video>
          <video controls class="w-100" src="/src/assets/video/newCategory.mp4" type="video/mp4"></video>
        </div>
      </div>

      <div class="content mt-5">
        <div>
          <hr>
          <p>If you want to add a new category in addition to the first 3, follow the video ---></p>
          <hr>
          <p>To add a 4th category, as you will see in the video, I had to first add and assign the Tools category that in the previous video was not inserted in the list because there were no buttons assigned to a prefab.</p>
          <hr>
          <p>This is because, as I told you, it is fundamental to keep the lists numbered otherwise the system gives an error, obviously, it does not make sense to leave an empty category but I wanted to show you this example as well</p>
          <hr>
          <p>As you will see in the video, I duplicated the button to then change the text, this is because each button has a script and an assigned number <u>fundamental</u> for the functionality, so when adding a new category just duplicate, change the text and do not forget to change the number that will progress with the addition of categories.</p>
        </div>
        <div>
          <video controls class="w-100" src="/src/assets/video/newCAtegory2.mp4" type="video/mp4"></video>
        </div>
      </div>

      <p class="text-center">
        <u><strong>Every time a category is added, it must be disabled<br>Only the first one should be left active</strong></u>
      </p>

      <div class="d-flex justify-content-center">
        <ImageZoomable src="/src/assets/images/active.png" alt="Active" />
        <ImageZoomable src="/src/assets/images/noactive.png" alt="Not Active" class="w-50" />
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
