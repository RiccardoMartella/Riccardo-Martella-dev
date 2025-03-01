<template>
  <div class="doc-page">
    <ContentSection>
      <h1 class="doc-title">4. ADD DESCRIPTIONS AND IMAGES TO PREFABS</h1>
      
      <p class="text-lead">
        Once you have added all the desired prefabs and moved the pivots, you need to add a description and an image to each child
        that contains MeshRenderer or SkinnedMeshRenderer, while the parent needs to be assigned a title.
      </p>
      
      <p class="text-center mt-4 mb-4">
        All this is done <u>automatically</u> by the asset (depending on the number of prefabs in
        the folder, it will take more or less time).
      </p>

      <div class="doc-section">
        <h2 class="doc-section-title">AUTOMATICALLY ADD NAME AND DESCRIPTIONS</h2>
        
        <div class="content-block">
          <div class="content-text">
            <p>
              Just click on the button (at the top) <strong>Tools > Add Name and Descriptions To Prefab</strong>, 
              select the <u>prefab clone</u> folder, and a description, name, and image will be automatically
              assigned to each child and a title to the parent.
            </p>
          </div>
          
          <div class="content-media">
            <div class="image-group">
              <ImageZoomable 
                src="/src/assets/images/Addname.png" 
                alt="Add Name and Description"
                caption="Menu for adding name and description"
                class="standard-image"
              />
              <ImageZoomable 
                src="/src/assets/images/prefabcloneadd.png" 
                alt="Prefab Clone Add"
                caption="Selecting the prefab clone folder"
                class="standard-image"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">WARNING ABOUT FIELDS</h2>
        
        <div class="content-block">
          <div class="content-text">
            <p>
              <strong class="text-danger">Do not insert anything inside the field</strong>
            </p>
            <ul class="step-list">
              <li>1st image: child</li>
              <li>2nd image: parent</li>
            </ul>
          </div>
          
          <div class="content-media">
            <div class="image-group">
              <ImageZoomable 
                src="/src/assets/images/scriptabledescription.png" 
                alt="Scriptable Description"
                caption="Description for child component"
                class="standard-image"
              />
              <ImageZoomable 
                src="/src/assets/images/scriptabletitle.png" 
                alt="Scriptable Title"
                caption="Title for parent component"
                class="standard-image"
              />
            </div>
          </div>
        </div>
      </div>

      <h3 class="text-center mt-5 mb-5">MANUAL TEXT INSERTION</h3>

      <div class="doc-section">
        <h2 class="doc-section-title">ACCESSING DESCRIPTIONS</h2>
        
        <div class="content-block">
          <div class="content-text">
            <p>
              Double-click with the mouse on Piece Description or Preview Description to go directly to the corresponding 
              piece in the folder <code>Assets > AssemblyStation > ScriptableObjects</code>
            </p>
            <p>If you select Preview Description:</p>
          </div>
          
          <div class="content-media">
            <div class="image-group">
              <p>Child</p>
              <ImageZoomable 
                src="/src/assets/images/piecedescription.png" 
                alt="Piece Description"
                caption="Piece description interface"
                class="standard-image"
              />
              <p>Parent</p>
              <ImageZoomable 
                src="/src/assets/images/prewdescription.png" 
                alt="Preview Description"
                caption="Preview description interface"
                class="standard-image"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">EDITING PREFAB TITLE</h2>
        
        <div class="content-block">
          <div class="content-text">
            <p>
              A window will open with all the scriptable objects created for each Prefab, here you can enter the name of the prefab and the description.
            </p>
          </div>
          
          <div class="content-media">
            <div class="image-group">
              <ImageZoomable 
                src="/src/assets/images/titlePrefab.png" 
                alt="Title Prefab"
                caption="Prefab title configuration" 
                class="standard-image"
              />
              <ImageZoomable 
                src="/src/assets/images/previewasset.png" 
                alt="Preview Asset"
                caption="Asset preview" 
                class="standard-image"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title" id="PieceDescriptionR">EDITING PIECE DESCRIPTION</h2>
        
        <div class="content-block">
          <div class="content-text">
            <p>
              While if you select Piece Description, a window will open with all the scriptable objects
              created for each child of the prefab, here you can enter the name, description, image, and
              other things that we will see later.
            </p>
          </div>
          
          <div class="content-media">
            <div class="image-group">
              <ImageZoomable 
                src="/src/assets/images/pieces.png" 
                alt="Pieces"
                caption="List of pieces" 
                class="standard-image"
              />
              <ImageZoomable 
                src="/src/assets/images/pieceslist.png" 
                alt="Pieces List"
                caption="Complete pieces list" 
                class="standard-image"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">MODEL PREVIEW</h2>
        
        <div class="content-block">
          <div class="content-text">
            <p>
              This is what will be displayed in the game for the model Preview.
            </p>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/src/assets/images/panelpreview.png" 
              alt="Panel Preview"
              caption="Model preview panel" 
              class="standard-image"
            />
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">PIECE PREVIEW</h2>
        
        <div class="content-block">
          <div class="content-text">
            <p>
              This is what will be displayed in the game for the piece Preview.
            </p>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/src/assets/images/piecespanel.png" 
              alt="Pieces Panel"
              caption="Pieces preview panel" 
              class="standard-image"
            />
          </div>
        </div>
      </div>

      <h3 class="text-center mt-5 mb-5">IMAGES</h3>

      <div class="doc-section">
        <h2 class="doc-section-title">IMAGE MANAGEMENT</h2>
        
        <div class="content-block">
          <div class="content-text">
            <p>
              Each "piece" will have an associated image that will be displayed in the preview.
            </p>
            <p>
              The image is generated automatically when we press the button <strong>Tools > Add Name and Descriptions To Prefab</strong>
            </p>
            <p>
              If you want to insert a custom image, just go to the Piece Description and
              select the desired image, replacing the one generated by the system.
            </p>
            <p>
              Functionality (Editor Mode): when clicking on Add Name and Descriptions To Prefab, a
              camera is generated in front of the piece and a photo is taken, this photo is saved in the
              folder <code>Assets > AssemblyStation > Screenshot > </code> and is associated with the child. For obvious
              reasons, the image may be compromised by the size of the piece and an incorrect angle. For this
              reason, it is recommended to insert a custom image if this problem occurs.
            </p>
          </div>
          
          <div class="content-media">
            <div class="image-group">
              <ImageZoomable 
                src="/src/assets/images/imagepiece.png" 
                alt="Image Piece"
                caption="Piece image configuration" 
                class="standard-image"
              />
              <ImageZoomable 
                src="/src/assets/images/imagepiecePanel.png" 
                alt="Image Piece Panel"
                caption="Piece image panel" 
                class="standard-image"
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
  name: 'Descriptions',
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
}

.image-group {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
}
</style>
