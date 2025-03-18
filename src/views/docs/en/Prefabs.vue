<template>
  <div class="doc-page">
    <ContentSection>
      <h1 class="doc-title">3. PLACE PREFABS</h1>
      
      <p class="text-lead">
        Once the materials are separated, navigate to the Prefab Clone folder: <code>Assets > AssemblyStation > Prefab Clone</code>.
      </p>
      
      <div class="doc-section">
        <h2 class="doc-section-title">PREFAB ROTATION</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <p>
              It's important to consider the rotation with which the prefab will be instantiated in the Assembly Station. This rotation determines the initial orientation of the model when it's displayed.
            </p>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/prefabRotation.png" 
              alt="Prefab Rotation"
              class="w-50"
              caption="Managing the prefab rotation during instantiation"
            />
          </div>
        </div>
      </div>
      
      <div class="doc-section">
        <h2 class="doc-section-title">ASSEMBLY POINT</h2>
        
        <div class="content-block">
          <div class="content-text">
            <p>
              The Assembly Station places the prefab at a specific point called <strong>Assembly Point</strong>.
              This is a key reference for positioning your models.
            </p>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/pivot3.png" 
              alt="Assembly Point"
              caption="The Assembly Point reference"
              class="right-aligned-image"
            />
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">PIVOT POINT</h2>
        
        <div class="content-block">
          <div class="content-text">
            <p>
              That point refers to the parent pivot, which contains all the "pieces" that make up the gameobject. Positioning this pivot correctly is critical to the correct positioning of the model.            </p>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/pivot2.png" 
              alt="Parent Pivot"
              caption="The parent object's pivot point"
              class="right-aligned-image"
            />
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">PREFAB PLACEMENT</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <p>
              When we place the prefab, the pivot point corresponds to the Assembly Point. To ensure that the prefab does not float or intersect with the ground, you need to move the parent's pivot. (Starting from the FBX)
            </p>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/pivot.png" 
              alt="Moving the Pivot"
              caption="Adjusting the pivot position" 
            />
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">UNPACKING THE PREFAB</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <p>
              In this case, as you can see, the pivot is slightly shifted upwards. To adjust it, first press <em>Unpack Completely</em> to break the prefab connection.
            </p>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/unpack.png" 
              alt="Unpack Completely"
              caption="Using the Unpack Completely option" 
            />
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">ADJUSTING THE PIVOT</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <ol class="numbered-list">
              <li>Select everything except the parent (in this case <strong>Mech Rework</strong>) and move everything out of the parent.</li>
              <li>Select the parent (Mech Rework) and move the pivot.</li>
              <li>To move the pivot, just click on the green arrow and move it downwards. I recommend activating the 2D view for a better view.</li>
              <li>As you can see, the model will not move in space but only the pivot.</li>
            </ol>
          </div>
          
          <div class="content-media">
            <div class="image-group">
              <ImageZoomable 
                src="/images/prefabguide2.png" 
                alt="Moving out of parent"
                caption="Moving child objects out of the parent" 
              />
              <ImageZoomable 
                src="/images/prefabguide.png" 
                alt="Creating the Prefab"
                caption="Final pivot adjustment" 
              />
            </div>
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">GROUND ALIGNMENT</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <p>
              In this case, the Mecha is aligned at the bottom to make it appear resting on the ground. So I moved the pivot slightly downwards. This depends on you based on how you want to display the model.
            </p>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/lowpivot.png" 
              alt="Prefab aligned at the bottom"
              caption="Prefab aligned with the ground" 
            />
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">AIR POSITIONING</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <p>
              You can also position the model in the air (for example, if it is a weapon). In this case, the pivot is very low, so the model remains suspended.
            </p>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/ak.png" 
              alt="Prefab positioned in the air"
              caption="Model positioned in the air" 
            />
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">CREATING THE PREFAB</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <p>
              Once done, select all the children and put them back inside the parent as before. Then, drag the parent into the (Prefab clone) folder and a Prefab will be created automatically.
            </p>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/prefabimg.png" 
              alt="Prefab image"
              caption="Prefab creation" 
              class="img-fit-content" 
            />
            <ImageZoomable 
              src="/images/replaceprefab.png" 
              alt="Creating the Prefab"
              caption="Final prefab creation" 
            />
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">CAMERA</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <p>
              Once in game, the camera that rotates around the placed prefab will have as a reference point the Orbit Camera Point that will always be added automatically with Add Name and Descriptions To Prefab.
            </p>
            <hr>
            <p>
              In Editor mode, you can move the pivot point of ObitalCameraPoint to make the camera lower or higher as needed.
            </p>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/orbitpoint.png" 
              alt="Orbital Camera Point"
              caption="Orbital Camera Point" 
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
  name: 'Prefabs',
  components: {
    ContentSection,
    ImageZoomable
  }
}
</script>

<style>
@import '@/assets/styles/documentation.css';

.img-fit-content {
  width: fit-content !important;
}

.image-stack {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}
</style>
