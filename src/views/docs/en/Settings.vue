<template>
  <div class="doc-page">
    <ContentSection>
      <h1 class="doc-title">11. GENERAL SETTINGS</h1>
      <div class="doc-section">
        <h2 class="fs-5">MAIN COMPONENTS REFERENCE</h2>
        
        <div class="content-block vertical">
          <div class="api-documentation">
            <div class="api-class">
              
              <h4 class="mt-1">ViewDetails Properties</h4>
              <table class="api-table">
                <thead>
                  <tr>
                    <th>Property</th>
                    <th>Type</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="3" class="section-header">Build Button Settings</td>
                  </tr>
                  <tr>
                    <td>spriteButton</td>
                    <td>Sprite</td>
                    <td>The sprite used for the build button.</td>
                  </tr>
                  <tr>
                    <td>unbuildButtonSprite</td>
                    <td>Sprite</td>
                    <td>Sprite to show when a piece can be unbuilt.</td>
                  </tr>
                  <tr>
                    <td>cellSizeH</td>
                    <td>float</td>
                    <td>Horizontal size of the cells in the UI grid.</td>
                  </tr>
                  <tr>
                    <td>cellSizeY</td>
                    <td>float</td>
                    <td>Vertical size of the cells in the UI grid.</td>
                  </tr>
                  <tr>
                    <td colspan="3" class="section-header">Build Cost Settings</td>
                  </tr>
                  <tr>
                    <td>resourceIcon</td>
                    <td>Sprite</td>
                    <td>The sprite used as an icon for resources.</td>
                  </tr>
                  <tr>
                    <td colspan="3" class="section-header">Prefab Placement</td>
                  </tr>
                  <tr>
                    <td>resourceContainerHeight</td>
                    <td>float</td>
                    <td>Height of the resource container in the UI.</td>
                  </tr>
                  <tr>
                    <td>resourceImageWidth</td>
                    <td>float</td>
                    <td>Width of the resource image in the UI.</td>
                  </tr>
                  <tr>
                    <td>resourceImageHeight</td>
                    <td>float</td>
                    <td>Height of the resource image in the UI.</td>
                  </tr>
                  <tr>
                    <td>resourceImageAnchorMin</td>
                    <td>Vector2</td>
                    <td>Minimum anchor point for the resource image.</td>
                  </tr>
                  <tr>
                    <td>resourceImageAnchorMax</td>
                    <td>Vector2</td>
                    <td>Maximum anchor point for the resource image.</td>
                  </tr>
                  <tr>
                    <td>resourceImagePivot</td>
                    <td>Vector2</td>
                    <td>Pivot point for the resource image.</td>
                  </tr>
                  <tr>
                    <td>resourceTextFontSize</td>
                    <td>int</td>
                    <td>Font size of the resource text.</td>
                  </tr>
                  <tr>
                    <td>resourceVerticalAlign</td>
                    <td>float</td>
                    <td>Vertical alignment offset for the resource text.</td>
                  </tr>
                  <tr>
                    <td>resourceTextSize</td>
                    <td>Vector2</td>
                    <td>Size of the resource text box.</td>
                  </tr>
                  <tr>
                    <td>resourceTextColor</td>
                    <td>Color</td>
                    <td>Color of the resource text.</td>
                  </tr>
                  <tr>
                    <td>resourceTextAlignment</td>
                    <td>TextAnchor</td>
                    <td>Alignment of the resource text within its box.</td>
                  </tr>
                  <tr>
                    <td>resourceTextAutoSizing</td>
                    <td>bool</td>
                    <td>Whether the resource text automatically adjusts its size.</td>
                  </tr>
                </tbody>
              </table>
              
              <h4 class="mt-4">ConstructionUI Properties</h4>
              <table class="api-table">
                <thead>
                  <tr>
                    <th>Property</th>
                    <th>Type</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="3" class="section-header">Materials</td>
                  </tr>
                  <tr>
                    <td>skeletonColor</td>
                    <td>Material</td>
                    <td>The material used to color the skeleton of the model.</td>
                  </tr>
                  <tr>
                    <td>skeletonTransparentColor</td>
                    <td>Material</td>
                    <td>The material used to make the skeleton of the model transparent.</td>
                  </tr>
                  <tr>
                    <td colspan="3" class="section-header">Popup Build Settings</td>
                  </tr>
                  <tr>
                    <td>popupPrefab</td>
                    <td>GameObject</td>
                    <td>The prefab used for creating the popup UI.</td>
                  </tr>
                  <tr>
                    <td>popupButtonSrite</td>
                    <td>Sprite</td>
                    <td>The sprite used for the build button in the popup.</td>
                  </tr>
                  <tr>
                    <td>popupUnbuildButtonSprite</td>
                    <td>Sprite</td>
                    <td>The sprite used for the unbuild button in the popup.</td>
                  </tr>
                  <tr>
                    <td>popupSpritePanel</td>
                    <td>Sprite</td>
                    <td>The sprite used for the popup panel background.</td>
                  </tr>
                  <tr>
                    <td colspan="3" class="section-header">Popup Resources</td>
                  </tr>
                  <tr>
                    <td>popupSpriteIron</td>
                    <td>Sprite</td>
                    <td>The sprite used to represent iron resources in the popup.</td>
                  </tr>
                  <tr>
                    <td>popupSpritePlastic</td>
                    <td>Sprite</td>
                    <td>The sprite used to represent plastic resources in the popup.</td>
                  </tr>
                  <tr>
                    <td>popupSpriteRubber</td>
                    <td>Sprite</td>
                    <td>The sprite used to represent rubber resources in the popup.</td>
                  </tr>
                  <tr>
                    <td>resourceIconSize</td>
                    <td>Vector2</td>
                    <td>The size of the resource icons displayed in the popup.</td>
                  </tr>
                  <tr>
                    <td>resourceSpacing</td>
                    <td>float</td>
                    <td>The spacing between resource icons in the popup.</td>
                  </tr>
                  <tr>
                    <td>resourceTextColor</td>
                    <td>Color</td>
                    <td>The color of the resource text in the popup.</td>
                  </tr>
                  <tr>
                    <td>resourceTextFontSize</td>
                    <td>int</td>
                    <td>The font size of the resource text in the popup.</td>
                  </tr>
                  <tr>
                    <td colspan="3" class="section-header">Popup Layout</td>
                  </tr>
                  <tr>
                    <td>popupSize</td>
                    <td>Vector2</td>
                    <td>The size of the popup panel.</td>
                  </tr>
                  <tr>
                    <td>popupOffset</td>
                    <td>Vector2</td>
                    <td>The offset of the popup panel relative to the button.</td>
                  </tr>
                  <tr>
                    <td>popupPadding</td>
                    <td>float[]</td>
                    <td>The padding values (left, right, top, bottom) for the popup panel.</td>
                  </tr>
                  <tr>
                    <td>spacingBetweenElements</td>
                    <td>float</td>
                    <td>The spacing between elements inside the popup panel.</td>
                  </tr>
                </tbody>
              </table>
              
              <h4 class="mt-4">FreeCamera Properties</h4>
              <table class="api-table">
                <thead>
                  <tr>
                    <th>Property</th>
                    <th>Type</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="3" class="section-header">Camera Movement Settings</td>
                  </tr>
                  <tr>
                    <td>_mouseSensitivity</td>
                    <td>float</td>
                    <td>Controls the sensitivity of the mouse for camera rotation.</td>
                  </tr>
                  <tr>
                    <td>_movementSpeed</td>
                    <td>float</td>
                    <td>Determines the speed at which the camera moves in the scene.</td>
                  </tr>
                  <tr>
                    <td>_boundaryCollider</td>
                    <td>Collider</td>
                    <td>Defines the boundaries within which the camera can move.</td>
                  </tr>
                  <tr>
                    <td colspan="3" class="section-header">Camera Rotation Settings</td>
                  </tr>
                  <tr>
                    <td>_rotationX</td>
                    <td>float</td>
                    <td>Tracks the camera's vertical rotation (pitch).</td>
                  </tr>
                  <tr>
                    <td>_rotationY</td>
                    <td>float</td>
                    <td>Tracks the camera's horizontal rotation (yaw).</td>
                  </tr>
                </tbody>
              </table>
              
              <h4 class="mt-4">OrbitCamera Properties</h4>
              <table class="api-table">
                <thead>
                  <tr>
                    <th>Property</th>
                    <th>Type</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="3" class="section-header">Camera Settings</td>
                  </tr>
                  <tr>
                    <td>_rotationSpeed</td>
                    <td>float</td>
                    <td>Controls the speed of the camera's rotation around the target.</td>
                  </tr>
                  <tr>
                    <td>_zoomSpeed</td>
                    <td>float</td>
                    <td>Determines the speed at which the camera zooms in and out.</td>
                  </tr>
                  <tr>
                    <td>_minZoomDistance</td>
                    <td>float</td>
                    <td>The minimum distance the camera can zoom in towards the target.</td>
                  </tr>
                  <tr>
                    <td>_maxZoomDistance</td>
                    <td>float</td>
                    <td>The maximum distance the camera can zoom out from the target.</td>
                  </tr>
                  <tr>
                    <td>_target</td>
                    <td>Transform</td>
                    <td>The target object around which the camera orbits.</td>
                  </tr>
                  <tr>
                    <td colspan="3" class="section-header">Performance Settings</td>
                  </tr>
                  <tr>
                    <td>_usePerformanceMode</td>
                    <td>bool</td>
                    <td>Toggles performance mode to optimize camera behavior.</td>
                  </tr>
                  <tr>
                    <td colspan="3" class="section-header">Input Settings</td>
                  </tr>
                  <tr>
                    <td>_mouseSensitivity</td>
                    <td>float</td>
                    <td>Adjusts the sensitivity of mouse input for camera control.</td>
                  </tr>
                </tbody>
              </table>
              
              <h4 class="mt-4">PositioningCamera Properties</h4>
              <table class="api-table">
                <thead>
                  <tr>
                    <th>Property</th>
                    <th>Type</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="3" class="section-header">Camera Settings</td>
                  </tr>
                  <tr>
                    <td>_cameraSpeed</td>
                    <td>float</td>
                    <td>Controls the speed of the camera's movement during positioning.</td>
                  </tr>
                  <tr>
                    <td>_rotationSpeed</td>
                    <td>float</td>
                    <td>Determines the speed of the camera's rotation around the target.</td>
                  </tr>
                  <tr>
                    <td>_zoomSpeed</td>
                    <td>float</td>
                    <td>Adjusts the speed at which the camera zooms in and out.</td>
                  </tr>
                  <tr>
                    <td>_minZoomDistance</td>
                    <td>float</td>
                    <td>The minimum distance the camera can zoom in towards the target.</td>
                  </tr>
                  <tr>
                    <td>_maxZoomDistance</td>
                    <td>float</td>
                    <td>The maximum distance the camera can zoom out from the target.</td>
                  </tr>
                  <tr>
                    <td colspan="3" class="section-header">Target Settings</td>
                  </tr>
                  <tr>
                    <td>_target</td>
                    <td>Transform</td>
                    <td>The target object that the camera focuses on during positioning.</td>
                  </tr>
                  <tr>
                    <td>_offset</td>
                    <td>Vector3</td>
                    <td>The offset position of the camera relative to the target.</td>
                  </tr>
                  <tr>
                    <td colspan="3" class="section-header">Debug Settings</td>
                  </tr>
                  <tr>
                    <td>_enableDebugLogs</td>
                    <td>bool</td>
                    <td>Enables or disables debug logs for camera positioning actions.</td>
                  </tr>
                  <tr>
                    <td colspan="3" class="section-header">Placement System</td>
                  </tr>
                  <tr>
                    <td>_prefabPlacementSystem</td>
                    <td>PrefabPlacementSystem</td>
                    <td>Manages the placement of prefabs during camera positioning.</td>
                  </tr>
                </tbody>
              </table>
              
              <h4 class="mt-4">PlacementSystem Properties</h4>
              <table class="api-table">
                <thead>
                  <tr>
                    <th>Property</th>
                    <th>Type</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="3" class="section-header">References</td>
                  </tr>
                  <tr>
                    <td>_mainCamera</td>
                    <td>Camera</td>
                    <td>The main camera used for positioning and visualization. If not specified, Camera.main is used.</td>
                  </tr>
                  <tr>
                    <td>_placementSurfaces</td>
                    <td>LayerMask</td>
                    <td>The layers on which objects can be placed.</td>
                  </tr>
                  <tr>
                    <td>_constructionUI</td>
                    <td>ConstructionUI</td>
                    <td>Reference to the construction UI for interaction.</td>
                  </tr>
                  <tr>
                    <td>_viewDetails</td>
                    <td>ViewDetails</td>
                    <td>Reference to the component that manages display details.</td>
                  </tr>
                  <tr>
                    <td>_audioSource</td>
                    <td>AudioSource</td>
                    <td>Audio source for sound effects during placement.</td>
                  </tr>
                  <tr>
                    <td>_positioningCamera</td>
                    <td>PositioningCamera</td>
                    <td>Camera specialized for object positioning.</td>
                  </tr>
                  <tr>
                    <td>_placementUI</td>
                    <td>GameObject</td>
                    <td>User interface shown during placement.</td>
                  </tr>
                  <tr>
                    <td colspan="3" class="section-header">Camera Settings</td>
                  </tr>
                  <tr>
                    <td>_enableCameraFollow</td>
                    <td>bool</td>
                    <td>If enabled, the camera will follow the object during placement.</td>
                  </tr>
                  <tr>
                    <td>_cameraOffset</td>
                    <td>Vector3</td>
                    <td>Camera offset relative to the object during placement.</td>
                  </tr>
                  <tr>
                    <td colspan="3" class="section-header">Movement Controls</td>
                  </tr>
                  <tr>
                    <td>_allowHeightAdjustment</td>
                    <td>bool</td>
                    <td>Allows height adjustment during placement.</td>
                  </tr>
                  <tr>
                    <td>_allowFineMovement</td>
                    <td>bool</td>
                    <td>Allows precise movement with WASD during placement.</td>
                  </tr>
                  <tr>
                    <td>_raiseObjectKey</td>
                    <td>KeyCode</td>
                    <td>Key to raise the object during placement.</td>
                  </tr>
                  <tr>
                    <td>_lowerObjectKey</td>
                    <td>KeyCode</td>
                    <td>Key to lower the object during placement.</td>
                  </tr>
                  <tr>
                    <td>_rotationSpeed</td>
                    <td>float</td>
                    <td>Object rotation speed (in degrees per second).</td>
                  </tr>
                  <tr>
                    <td>_heightAdjustmentSpeed</td>
                    <td>float</td>
                    <td>Object height adjustment speed.</td>
                  </tr>
                  <tr>
                    <td>_movmentSpeed</td>
                    <td>float</td>
                    <td>Object lateral movement speed.</td>
                  </tr>
                  <tr>
                    <td>_maxHeightAdjustment</td>
                    <td>float</td>
                    <td>Maximum height adjustment limit up and down.</td>
                  </tr>
                  <tr>
                    <td colspan="3" class="section-header">Visual Feedback</td>
                  </tr>
                  <tr>
                    <td>_validPlacementMaterial</td>
                    <td>Material</td>
                    <td>Material applied to the prefab when placement is valid.</td>
                  </tr>
                  <tr>
                    <td>_invalidPlacementMaterial</td>
                    <td>Material</td>
                    <td>Material applied to the prefab when placement is invalid.</td>
                  </tr>
                  <tr>
                    <td>_previewAlpha</td>
                    <td>float</td>
                    <td>Transparency level of the prefab during preview (0-1).</td>
                  </tr>
                  <tr>
                    <td colspan="3" class="section-header">Audio</td>
                  </tr>
                  <tr>
                    <td>_placementValidSound</td>
                    <td>AudioClip</td>
                    <td>Sound played when placement becomes valid.</td>
                  </tr>
                  <tr>
                    <td>_placementInvalidSound</td>
                    <td>AudioClip</td>
                    <td>Sound played when placement becomes invalid.</td>
                  </tr>
                  <tr>
                    <td>_rotateSound</td>
                    <td>AudioClip</td>
                    <td>Sound played when rotating the object.</td>
                  </tr>
                  <tr>
                    <td>_confirmPlacementSound</td>
                    <td>AudioClip</td>
                    <td>Sound played when confirming placement.</td>
                  </tr>
                  <tr>
                    <td colspan="3" class="section-header">Placement Area Settings</td>
                  </tr>
                  <tr>
                    <td>_usePlacementBoundary</td>
                    <td>bool</td>
                    <td>If enabled, limits placement within a defined area.</td>
                  </tr>
                  <tr>
                    <td>_useVisualBoundary</td>
                    <td>bool</td>
                    <td>If enabled, displays the placement area limits in the editor.</td>
                  </tr>
                  <tr>
                    <td>_boundaryCenter</td>
                    <td>Vector3</td>
                    <td>Center of the placement area.</td>
                  </tr>
                  <tr>
                    <td>_boxSize</td>
                    <td>Vector3</td>
                    <td>Dimensions of the cube that defines the placement area (width, height, depth).</td>
                  </tr>
                  <tr>
                    <td>_boundaryColor</td>
                    <td>Color</td>
                    <td>Color of the placement area displayed in the editor.</td>
                  </tr>
                  <tr>
                    <td>_useHeightLimit</td>
                    <td>bool</td>
                    <td>If enabled, uses custom height limits instead of cube limits.</td>
                  </tr>
                  <tr>
                    <td>_minHeightLimit</td>
                    <td>float</td>
                    <td>Minimum height allowed for placement when _useHeightLimit is active.</td>
                  </tr>
                  <tr>
                    <td>_maxHeightLimit</td>
                    <td>float</td>
                    <td>Maximum height allowed for placement when _useHeightLimit is active.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      
      <div class="doc-section">
        <h2 class="doc-section-title">CONSTRUCTION SETTINGS</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <p>
              In the Hierarchy, you can find the <strong>Construction UI</strong> GameObject which contains all the settings for:
            </p>
            <ul>
              <li>Button settings for each model</li>
              <li>Color assignments for model transparency</li>
              <li>Individual settings for each piece of each model that will be displayed in the left grid</li>
              <li>Settings for the popup that appears when clicking on a piece</li>
            </ul>
            <p>
              These settings allow you to fully customize the appearance and behavior of your interactive models.
            </p>
          </div>
          
          <div class="content-media">
            <div class="image-group">
              <ImageZoomable 
                src="/images/construction2.jpg" 
                alt="Construction Settings 2"
                caption="Construction interface settings" 
              />
              <ImageZoomable 
                src="/images/construction1.jpg" 
                alt="Construction Settings 1"
                caption="Construction configuration details" 
              />
            </div>
          </div>
        </div>
      </div>
      
      <div class="doc-section">
        <h2 class="doc-section-title">FREE CAMERA SETTINGS</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <p>
              These settings control the free camera that activates when you press the <kbd>L</kbd> key.
              You can adjust:
            </p>
            <ul>
              <li>Movement speed</li>
              <li>Rotation sensitivity</li>
              <li>The free camera boundaries are determined by the size of the box collider located in the "Collider_FreeCamera" GameObject. By resizing this collider, you can precisely set the allowed movement area for the camera.</li>
            </ul>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
            src="/images/FREEcameraLimit.png" 
            alt="Free Camera Settings"
              caption="Free camera configuration" 
            />
          </div>
        </div>
      </div>
      
      <div class="doc-section">
        <h2 class="doc-section-title">ORBIT CAMERA/POSITIONING CAMERA - SETTINGS</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <p>
              These settings control the orbit camera that rotates around your model.
              You can configure:
            </p>
            <ul>
              <li>Rotation speed</li>
              <li>Damping and smoothing</li>
              <li>Minimum and maximum distance</li>
              <li>Use Performance Mode</li>
            </ul>
            
            <div class="info-box mt-3">
              <h5>Performance Mode</h5>
              <ul>
                <li><strong>Resource usage improvement:</strong> Using a more "raw" mode to determine camera position (such as using only the target position instead of considering a renderer's bounds) reduces complex calculations, freeing up resources for other tasks.</li>
                <li><strong>Application context:</strong> Performance mode is useful in situations where the user is in a resource-intensive scene (for example, when there are many objects to load, such as in a scene with many prefabs) and a lower computational load is desired.</li>
              </ul>
              
              <h6 class="mt-3">Technical details:</h6>
              <ul>
                <li><strong>Simplified position calculation:</strong> When performance mode is activated, the position of the targetTransform is simply used as the center of the object, without calculating the renderer bounds (which requires more computational resources).</li>
                <li><strong>Reduced interpolation:</strong> With performance mode active, the interpolation speed of position and rotation is reduced through the smoothFactor multiplier, which decreases the "slowness" of camera movement to further reduce computational load.</li>
              </ul>
            </div>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/ORbitCAmeraSettings.png" 
              alt="Orbit Camera Settings"
              caption="Orbit camera configuration" 
            />
          </div>
        </div>
      </div>
          
      <div class="doc-section">
        
        <div class="content-block vertical">
          <div class="content-media">
            <ImageZoomable 
              src="/images/CameraPositioning.png" 
              alt="Camera Positioning Settings"
              caption="Camera positioning configuration" 
            />
          </div>
        </div>
      </div>
      <div class="doc-section">
        <h2 class="doc-section-title">VISUAL AND SOUND EFFECTS SETTINGS</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <p>
              These settings relate to the sound and visual effects associated with each prefab.
              You can adjust:
            </p>
            <ul>
              <li>Sound effect</li>
              <li>Visual effect parameters</li>
              <li>Particle system configurations</li>
            </ul>
            <p>
              Customizing these settings allows you to create a more immersive and interactive experience for your users.
            </p>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/viewdetails2.jpg" 
              alt="Visual and Sound Effects Settings"
              caption="Visual and sound effects configuration" 
            />
          </div>
        </div>
      </div>
      
      <div class="doc-section">
        <h2 class="doc-section-title">PLACEMENT SYSTEM SETTINGS</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <p>
              These settings control the system for positioning completed prefabs in the game environment.
              In this section you can configure:
            </p>
            <ul>
              <li>Audio effects for placement and rotation</li>
              <li>Visual feedback colors (valid/invalid)</li>
              <li>Keys for rotating the prefab</li>
              <li>Movement speed and sensitivity</li>
               <li>Positioning settings</li>
            </ul>
            <p>
              Properly customizing these settings is essential to ensure a smooth and intuitive placement experience. 
              Visual and audio indicators help the user understand when a placement is valid or invalid.
            </p>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/PlacementSystem.png" 
              alt="Placement System Settings"
              caption="Prefab placement system configuration" 
            />
            
            <div class="video-container mt-4">
              <video controls class="demo-video w-100">
                <source src="https://www.dropbox.com/scl/fi/fvedqud4zmlwnfyk6mtvo/Placement-Boundary.mp4?rlkey=emon73phj1znrjt1thql7qm5s&st=q1ewfxxy&dl=1" type="video/mp4">
                Your browser does not support HTML5 video.
              </video>
              <p class="caption">Tutorial: Placement boundary configuration</p>
            </div>
            
            <div class="mt-4">
              <div class="image-row">
                <div class="image-column">
                  <ImageZoomable 
                    src="/images/PlacementSystemRed.png" 
                    alt="Custom Placement Area - Red Zone"
                    caption="Custom placement area visualization" 
                  />
                </div>
                <div class="image-column">
                  <ImageZoomable 
                    src="/images/redZone.png" 
                    alt="Red Zone Configuration"
                    caption="Red Zone configuration" 
                  />
                </div>
              </div>
              <p class="mt-3">
                <strong>Custom Placement Areas:</strong> You can also define specific boundaries within the placement area by modifying the Exclusion Zone settings. This allows you to create designated regions where objects can or cannot be placed, giving you precise control over your environment layout and creating specific boundaries inside the placement area.
              </p>
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
  name: 'SettingsPage',
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

.image-group {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.image-group > div {
  flex: 1;
  min-width: 280px;
}

kbd {
  background-color: #f7f7f7;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(0,0,0,0.2);
  color: #333;
  display: inline-block;
  font-size: .85em;
  font-weight: 700;
  line-height: 1;
  padding: 2px 4px;
  white-space: nowrap;
}

@media (max-width: 768px) {
  .image-group {
    flex-direction: column;
  }
}

.api-documentation {
  width: 100%;
  margin-bottom: 40px;
}

.api-class {
  margin-bottom: 30px;
}

.api-class h3 {
  background-color: #f8f9fa;
  padding: 10px 15px;
  border-left: 4px solid #007bff;
  margin-bottom: 15px;
}

.api-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  font-size: 0.9rem;
}

.api-table th {
  background: linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 12px 10px;
  text-align: left;
  border: 1px solid #ddd;
  font-weight: 600;
  color: #495057;
}

.api-table td {
  padding: 8px 10px;
  border: 1px solid #ddd;
  vertical-align: top;
}

.api-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

@media (max-width: 768px) {
  .api-table {
    font-size: 0.8rem;
  }
  
  .api-table th, .api-table td {
    padding: 6px;
  }
}

.api-class h4 {
  background: linear-gradient(90deg, #f0f8ff 0%, #ffffff 100%);
  padding: 12px 15px;
  margin-top: 30px;
  margin-bottom: 20px;
  border-radius: 8px;
  font-weight: 600;
  color: #0055a4;
  border-left: 5px solid #00A3FF;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  position: relative;
}

.api-class h4::before {
  content: '⚙️';
  margin-right: 8px;
  font-size: 1.1em;
}

.section-header {
  background: linear-gradient(90deg, #e6f3ff 0%, #f3f8ff 100%);
  font-weight: bold;
  color: #0055a4;
  text-align: left;
  padding: 10px 12px;
  border-top: 1px solid #b8daff;
  border-bottom: 1px solid #b8daff;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-size: 0.85rem;
}

.doc-section-title {
  background: linear-gradient(90deg, #f5f9ff 0%, #ffffff 100%);
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 25px;
  border-left: 6px solid #00A3FF;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.api-table {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  border: 1px solid #eaeaea;
}

.api-table tr td:first-child {
  font-weight: 500;
  color: #333;
  border-right: 1px solid #e6e6e6;
}

.api-table tr td:nth-child(2) {
  color: #0055a4;
  font-family: monospace;
  font-size: 0.85em;
  background-color: #f9fbff;
}

.image-row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  margin-bottom: 15px;
}

.image-column {
  flex: 1;
  min-width: 45%;
}

@media (max-width: 768px) {
  .image-row {
    flex-direction: column;
  }
  
  .image-column {
    min-width: 100%;
    margin-bottom: 15px;
  }
}
</style>
