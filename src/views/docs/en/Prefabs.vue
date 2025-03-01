<template>
  <div>
    <ContentSection>
      <h1>3. PLACE PREFABS</h1>
      
      <div class="content">
        <div>
          <p>
            Once the materials are separated, go to the Prefab Clone folder: <code>Assets > AssemblyStation > Prefab Clone</code>.
          </p>
        </div>
        <div>
          <ImageZoomable src="/src/assets/images/prefabclone.png" alt="Prefab Clone Folder" />
        </div>
      </div>

      <div class="content mt-4">
        <div>
          <p>
            The Assembly Station places the prefab at a specific point called <strong>Assembly Point</strong>.
          </p>
        </div>
        <div>
          <ImageZoomable src="/src/assets/images/pivot3.png" alt="Assembly Point" />
        </div>
      </div>

      <div class="content mt-4">
        <div>
          <p>
            That point refers to the pivot of the prefab's parent, which contains all the "pieces" that make up the gameobject.
          </p>
        </div>
        <div>
          <ImageZoomable src="/src/assets/images/pivot2.png" alt="Parent Pivot" />
        </div>
      </div>

      <div class="content mt-4">
        <div>
          <p>
            When we place the prefab, the pivot point corresponds to the Assembly Point. To ensure that the prefab does not float or intersect with the ground, you need to move the parent's pivot. (Starting from the FBX)
          </p>
        </div>
        <div>
          <ImageZoomable src="/src/assets/images/pivot.png" alt="Moving the Pivot" />
        </div>
      </div>

      <div class="content mt-4">
        <div>
          <p>
            In this case, as you can see, the pivot is slightly shifted upwards. So we press <em>Unpack Completely</em>.
          </p>
        </div>
        <div>
          <ImageZoomable src="/src/assets/images/unpack.png" alt="Unpack Completely" />
        </div>
      </div>

      <div class="content mt-4">
        <div>
          <p>
            Select everything except the parent (in this case <strong>Mech Rework</strong>) and move everything out of the parent.
          </p>
          <hr>
          <p>Select the parent (Mech Rework) and move the pivot.</p>
          <hr>
          <p>
            To move the pivot, just click on the green arrow and move it downwards. I recommend activating the 2D view for a better view.
          </p>
          <hr>
          <p>As you can see, the model will not move in space but only the pivot.</p>
        </div>
        <div>
          <div>
            <ImageZoomable src="/src/assets/images/prefabguide2.png" alt="Moving out of parent" class="mb-3" />
          </div>
          <div>
            <ImageZoomable src="/src/assets/images/prefabguide.png" alt="Creating the Prefab" />
          </div>
        </div>
      </div>

      <div class="content mt-4">
        <div>
          <p>
            In this case, the Mecha is aligned at the bottom to make it appear resting on the ground. So I moved the pivot slightly downwards. This depends on you based on how you want to display the model.
          </p>
        </div>
        <div>
          <ImageZoomable src="/src/assets/images/lowpivot.png" alt="Prefab aligned at the bottom" />
        </div>
      </div>

      <div class="content mt-4">
        <div>
          <p>
            You can also position the model in the air (for example, if it is a weapon). In this case, the pivot is very low, so the model remains suspended.
          </p>
        </div>
        <div>
          <ImageZoomable src="/src/assets/images/ak.png" alt="Prefab positioned in the air" />
        </div>
      </div>

      <div class="content mt-4">
        <div>
          <h3>Creating the Prefab</h3>
          <p>
            Once done, select all the children and put them back inside the parent as before. Then, drag the parent into the (Prefab clone) folder and a Prefab will be created automatically.
          </p>
          <ImageZoomable src="/src/assets/images/prefabimg.png" alt="Prefab image" class="img-fit-content" />
        </div>
        <div>
          <ImageZoomable src="/src/assets/images/replaceprefab.png" alt="Creating the Prefab" />
        </div>
      </div>

      <div class="content mt-4">
        <div>
          <h3>Camera</h3>
          <p>
            Once in game, the camera that rotates around the placed prefab will have as a reference point the Orbit Camera Point that will always be added automatically with Add Name and Descriptions To Prefab.
          </p>
          <hr>
          <p>
            In Editor mode, you can move the pivot point of ObitalCameraPoint to make the camera lower or higher as needed.
          </p>
        </div>
        <div>
          <ImageZoomable src="/src/assets/images/orbitpoint.png" alt="Orbital Camera Point" />
        </div>
      </div>
    </ContentSection>
  </div>
</template>

<script>
import ContentSection from '@/components/ContentSection.vue'
import ImageZoomable from '@/components/ImageZoomable.vue'

export default {
  name: 'Prefabs',
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

.img-fit-content {
  width: fit-content !important;
}

@media (max-width: 768px) {
  .content {
    flex-direction: column;
  }
}
</style>
