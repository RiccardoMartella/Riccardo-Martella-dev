<template>
  <div class="doc-page">
    <ContentSection>
      <h1 class="doc-title">11. GENERAL SETTINGS</h1>
      
      <p class="text-lead">
        This page describes all the different settings available in Assembly Station.
      </p>
      
      <div class="doc-section">
        <h2 class="doc-section-title">MAIN COMPONENTS REFERENCE</h2>
        
        <div class="content-block vertical">
          <div class="api-documentation">
            <div class="api-class">
              <h3>ViewDetails.cs</h3>
              <p>Manages the user interface and display details for prefabs and their components.</p>
              
              <table class="api-table">
                <thead>
                  <tr>
                    <th>Field</th>
                    <th>Type</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>prefabButtonList</td>
                    <td>PrefabButtonList</td>
                    <td>Contains the list of button data associated with prefabs. Stores information such as colors and confirmation status for each button.</td>
                  </tr>
                  <tr>
                    <td>pieceButtons</td>
                    <td>Dictionary&lt;GameObject, Button&gt;</td>
                    <td>Dictionary that associates each piece with its button in the user interface. Allows quick access to a specific piece's button.</td>
                  </tr>
                  <tr>
                    <td>prefabManager</td>
                    <td>PrefabManager</td>
                    <td>Manager that controls the creation, loading, and saving of prefabs. Coordinates the global state of prefabs in the system.</td>
                  </tr>
                  <tr>
                    <td>builtPieces</td>
                    <td>HashSet&lt;GameObject&gt;</td>
                    <td>Set of pieces already built by the user. Used to quickly check if a piece has been assembled.</td>
                  </tr>
                  <tr>
                    <td>playerResources</td>
                    <td>PlayerResources</td>
                    <td>Manages player resources (iron, plastic, rubber) used to build pieces. Tracks quantities and controls add/subtract operations.</td>
                  </tr>
                  <tr>
                    <td>buildButton</td>
                    <td>GameObject</td>
                    <td>Reference to the main button for building a component. Allows starting the assembly process.</td>
                  </tr>
                  <tr>
                    <td>effectsContainer</td>
                    <td>Transform</td>
                    <td>Container for visual effects during construction. Particle effects are created as children of this transform.</td>
                  </tr>
                  <tr>
                    <td>panelResources</td>
                    <td>GameObject</td>
                    <td>UI panel showing resources required for a piece. Contains resource texts and images.</td>
                  </tr>
                  <tr>
                    <td>PanelTextresources</td>
                    <td>GameObject</td>
                    <td>Panel showing resource-related messages (e.g., "Insufficient resources").</td>
                  </tr>
                  <tr>
                    <td>containerPercentage</td>
                    <td>GameObject</td>
                    <td>UI container for displaying the percentage of assembly completion.</td>
                  </tr>
                  <tr>
                    <td>saveProgressButton</td>
                    <td>GameObject</td>
                    <td>Button for saving assembly progress. Allows preserving the construction state between sessions.</td>
                  </tr>
                  <tr>
                    <td>effectsManager</td>
                    <td>EffectsManager</td>
                    <td>Manager for visual effects shown during assembly (particles, lights, etc.). Coordinates effects for individual pieces and groups.</td>
                  </tr>
                </tbody>
              </table>
              
              <h4 class="mt-4">UI Settings</h4>
              <table class="api-table">
                <thead>
                  <tr>
                    <th>Field</th>
                    <th>Type</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>cellSizeH</td>
                    <td>float</td>
                    <td>Width of the UI cell for piece buttons. Controls the horizontal size of buttons in the grid.</td>
                  </tr>
                  <tr>
                    <td>cellSizeY</td>
                    <td>float</td>
                    <td>Height of the UI cell for piece buttons. Controls the vertical size of buttons in the grid.</td>
                  </tr>
                  <tr>
                    <td>resourceIcon</td>
                    <td>Sprite</td>
                    <td>Generic icon used to represent resources in the interface.</td>
                  </tr>
                  <tr>
                    <td>resourceContainerWidth</td>
                    <td>float</td>
                    <td>Width of the container showing required resources. Defines the horizontal space available for resource information.</td>
                  </tr>
                  <tr>
                    <td>resourceContainerHeight</td>
                    <td>float</td>
                    <td>Height of the container showing required resources. Defines the vertical space for each resource.</td>
                  </tr>
                  <tr>
                    <td>resourceTextFontSize</td>
                    <td>int</td>
                    <td>Font size for resource text. Controls the readability of resource information.</td>
                  </tr>
                  <tr>
                    <td>resourceVerticalAlign</td>
                    <td>float</td>
                    <td>Vertical spacing between resources in the list. Controls the visual density of resource information.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div class="api-class">
              <h3>ConstructionUI.cs</h3>
              <p>Manages the main construction and assembly interface.</p>
              
              <table class="api-table">
                <thead>
                  <tr>
                    <th>Field</th>
                    <th>Type</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Instance</td>
                    <td>ConstructionUI</td>
                    <td>Singleton instance of the ConstructionUI class. Allows global access to its functionalities.</td>
                  </tr>
                  <tr>
                    <td>currentPrefab</td>
                    <td>GameObject</td>
                    <td>Prefab currently selected for assembly. Object the user is working on.</td>
                  </tr>
                  <tr>
                    <td>tagObject</td>
                    <td>List&lt;string&gt;</td>
                    <td>List of available tags for categorizing objects. Used to organize pieces into categories.</td>
                  </tr>
                  <tr>
                    <td>piecesByTag</td>
                    <td>Dictionary&lt;string, List&lt;GameObject&gt;&gt;</td>
                    <td>Dictionary organizing pieces by tag. Facilitates access to pieces by category.</td>
                  </tr>
                  <tr>
                    <td>originalMaterials</td>
                    <td>Dictionary&lt;GameObject, Material[]&gt;</td>
                    <td>Stores the original materials of each piece. Used to restore materials after skeleton mode.</td>
                  </tr>
                  <tr>
                    <td>confirmedPieces</td>
                    <td>HashSet&lt;GameObject&gt;</td>
                    <td>Set of pieces confirmed in the assembly. Pieces that have been correctly positioned.</td>
                  </tr>
                  <tr>
                    <td>skeletonColor</td>
                    <td>Material</td>
                    <td>Material used to display pieces in skeleton mode. Defines the appearance of pieces not yet assembled.</td>
                  </tr>
                  <tr>
                    <td>skeletonTransparentColor</td>
                    <td>Material</td>
                    <td>Material for the skeleton with transparency. Allows seeing the internal structure while keeping the outlines visible.</td>
                  </tr>
                  <tr>
                    <td>switchMaterial</td>
                    <td>ButtonSwitch</td>
                    <td>Controller for switching between normal and transparent materials. Manages the visualization change.</td>
                  </tr>
                </tbody>
              </table>
              
              <h4 class="mt-4">Grid UI Settings</h4>
              <table class="api-table">
                <thead>
                  <tr>
                    <th>Field</th>
                    <th>Type</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>gridColumn</td>
                    <td>int</td>
                    <td>Number of columns in the pieces grid. Determines the layout of the available pieces display.</td>
                  </tr>
                  <tr>
                    <td>sizeCellX</td>
                    <td>int</td>
                    <td>Cell width in the grid. Controls the horizontal size of piece buttons.</td>
                  </tr>
                  <tr>
                    <td>sizeCellY</td>
                    <td>int</td>
                    <td>Cell height in the grid. Controls the vertical size of piece buttons.</td>
                  </tr>
                  <tr>
                    <td>spacingX</td>
                    <td>int</td>
                    <td>Horizontal spacing between cells. Controls the distance between piece buttons horizontally.</td>
                  </tr>
                  <tr>
                    <td>spacingY</td>
                    <td>int</td>
                    <td>Vertical spacing between cells. Controls the distance between piece buttons vertically.</td>
                  </tr>
                  <tr>
                    <td>paddingLeft</td>
                    <td>int</td>
                    <td>Left padding of the grid. Space between the left edge of the container and the first column.</td>
                  </tr>
                  <tr>
                    <td>paddingRight</td>
                    <td>int</td>
                    <td>Right padding of the grid. Space between the last column and the right edge of the container.</td>
                  </tr>
                  <tr>
                    <td>paddingTop</td>
                    <td>int</td>
                    <td>Top padding of the grid. Space between the top edge of the container and the first row.</td>
                  </tr>
                  <tr>
                    <td>paddingBottom</td>
                    <td>int</td>
                    <td>Bottom padding of the grid. Space between the last row and the bottom edge of the container.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div class="api-class">
              <h3>FreeCamera.cs</h3>
              <p>Manages the camera in free mode, allowing the user to move freely in the scene.</p>
              
              <table class="api-table">
                <thead>
                  <tr>
                    <th>Field</th>
                    <th>Type</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>_freeCameraOn</td>
                    <td>bool</td>
                    <td>Activation state of the free camera. When true, the camera is in free mode and can be moved independently of objects in the scene.</td>
                  </tr>
                  <tr>
                    <td>_mainCameraAssembly</td>
                    <td>GameObject</td>
                    <td>Reference to the main assembly camera object. When the free camera is activated, this is disabled.</td>
                  </tr>
                  <tr>
                    <td>_boundaryCollider</td>
                    <td>BoxCollider</td>
                    <td>Collider that defines the movement limits of the free camera. Prevents the user from moving too far from the assembly area.</td>
                  </tr>
                  <tr>
                    <td>_moveSpeed</td>
                    <td>float</td>
                    <td>Camera movement speed in units per second. Controls how quickly the user can move in space.</td>
                  </tr>
                  <tr>
                    <td>_mouseSensitivity</td>
                    <td>float</td>
                    <td>Mouse sensitivity for camera rotation control. Higher values make rotation faster.</td>
                  </tr>
                  <tr>
                    <td>_rotationX</td>
                    <td>float</td>
                    <td>Current rotation on the X axis (pitch). Limited to prevent complete rotation.</td>
                  </tr>
                  <tr>
                    <td>_rotationY</td>
                    <td>float</td>
                    <td>Current rotation on the Y axis (yaw). Controls the horizontal rotation of the camera.</td>
                  </tr>
                  <tr>
                    <td>_isInitialized</td>
                    <td>bool</td>
                    <td>Flag indicating if the free camera has been initialized. Prevents multiple initializations.</td>
                  </tr>
                  <tr>
                    <td>_cachedBounds</td>
                    <td>Bounds</td>
                    <td>Cache of the boundary collider limits. Stored to optimize movement limit checks.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div class="api-class">
              <h3>OrbitCamera.cs</h3>
              <p>Manages the orbital camera that rotates around a target object.</p>
              
              <table class="api-table">
                <thead>
                  <tr>
                    <th>Field</th>
                    <th>Type</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>_target</td>
                    <td>Transform</td>
                    <td>Current target around which the camera orbits. Center of the camera's orbital movement.</td>
                  </tr>
                  <tr>
                    <td>_canvasAssembly</td>
                    <td>Canvas</td>
                    <td>Main assembly interface canvas. Manages UI display during assembly.</td>
                  </tr>
                  <tr>
                    <td>_canvasFreeAssembly</td>
                    <td>GameObject</td>
                    <td>Canvas specific to free camera mode. Contains UI controls specific to this mode.</td>
                  </tr>
                  <tr>
                    <td>_mainCamera</td>
                    <td>Camera</td>
                    <td>Main camera component of the system. Responsible for rendering the main view.</td>
                  </tr>
                  <tr>
                    <td>_zoomMultiplier</td>
                    <td>float</td>
                    <td>Multiplier that controls zoom speed. Higher values make zooming faster.</td>
                  </tr>
                  <tr>
                    <td>_zoomMin</td>
                    <td>float</td>
                    <td>Minimum zoom distance from the target. Prevents zooming in too close.</td>
                  </tr>
                  <tr>
                    <td>_zoomMax</td>
                    <td>float</td>
                    <td>Maximum zoom distance from the target. Limits how far you can zoom out.</td>
                  </tr>
                  <tr>
                    <td>_startDistance</td>
                    <td>float</td>
                    <td>Initial distance of the camera from the target at startup. Defines the default zoom level.</td>
                  </tr>
                  <tr>
                    <td>_rotationSpeed</td>
                    <td>float</td>
                    <td>Camera rotation speed around the target. Controls the responsiveness of rotation.</td>
                  </tr>
                  <tr>
                    <td>_minYAngle</td>
                    <td>float</td>
                    <td>Minimum Y angle for rotation. Prevents looking too far down relative to the target.</td>
                  </tr>
                  <tr>
                    <td>_maxYAngle</td>
                    <td>float</td>
                    <td>Maximum Y angle for rotation. Prevents looking too far up relative to the target.</td>
                  </tr>
                  <tr>
                    <td>_smoothSpeed</td>
                    <td>float</td>
                    <td>Smoothing speed for camera movements. Higher = smoother but less immediate movements.</td>
                  </tr>
                  <tr>
                    <td>_usePerformanceMode</td>
                    <td>bool</td>
                    <td>When activated, optimizes certain calculations to improve performance, reducing precision.</td>
                  </tr>
                  <tr>
                    <td>_targetCenterUpdateFrequency</td>
                    <td>float</td>
                    <td>Frequency (in seconds) with which the target center is updated during orbit.</td>
                  </tr>
                  <tr>
                    <td>_useFixedUpdate</td>
                    <td>bool</td>
                    <td>Whether to use FixedUpdate for updates at fixed intervals, useful for smoother movements.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div class="api-class">
              <h3>PositioningCamera.cs</h3>
              <p>Manages camera positioning in relation to scene objects.</p>
              
              <table class="api-table">
                <thead>
                  <tr>
                    <th>Field</th>
                    <th>Type</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>_cameraComponent</td>
                    <td>Camera</td>
                    <td>Camera component used for visualization. Manages the rendering of the positioning view.</td>
                  </tr>
                  <tr>
                    <td>_zoomMin</td>
                    <td>float</td>
                    <td>Minimum allowed zoom level. Limits how close the camera can get to the object.</td>
                  </tr>
                  <tr>
                    <td>_zoomMax</td>
                    <td>float</td>
                    <td>Maximum allowed zoom level. Limits how far the camera can move away from the object.</td>
                  </tr>
                  <tr>
                    <td>_distance</td>
                    <td>float</td>
                    <td>Current distance from the target. Determines how far the camera is from the observed object.</td>
                  </tr>
                  <tr>
                    <td>_mouseSensitivity</td>
                    <td>float</td>
                    <td>Mouse sensitivity for camera rotation. Higher values make rotation more responsive.</td>
                  </tr>
                  <tr>
                    <td>_minYAngle</td>
                    <td>float</td>
                    <td>Minimum Y angle allowed for rotation. Prevents looking too far down.</td>
                  </tr>
                  <tr>
                    <td>_maxYAngle</td>
                    <td>float</td>
                    <td>Maximum Y angle allowed for rotation. Prevents looking too far up.</td>
                  </tr>
                  <tr>
                    <td>_smoothSpeed</td>
                    <td>float</td>
                    <td>Smoothing speed for camera movements. Higher values make movements smoother but less immediate.</td>
                  </tr>
                  <tr>
                    <td>_usePerformanceMode</td>
                    <td>bool</td>
                    <td>When activated, reduces the update frequency of certain calculations to improve performance.</td>
                  </tr>
                  <tr>
                    <td>_targetCenterUpdateFrequency</td>
                    <td>float</td>
                    <td>Target center update frequency in seconds. In performance mode, limits intensive updates.</td>
                  </tr>
                  <tr>
                    <td>_useFixedUpdate</td>
                    <td>bool</td>
                    <td>If true, uses FixedUpdate instead of Update for camera movements, ensuring fixed-frequency updates.</td>
                  </tr>
                  <tr>
                    <td>_enableDebugLogs</td>
                    <td>bool</td>
                    <td>Enables/disables debug logs. Useful for troubleshooting during development.</td>
                  </tr>
                  <tr>
                    <td>_target</td>
                    <td>Transform</td>
                    <td>The transform of the object the camera is observing. Center of orbit for the camera.</td>
                  </tr>
                  <tr>
                    <td>_currentX</td>
                    <td>float</td>
                    <td>Current rotation on the X axis. Controls the horizontal angle of the camera.</td>
                  </tr>
                  <tr>
                    <td>_currentY</td>
                    <td>float</td>
                    <td>Current rotation on the Y axis. Controls the vertical angle of the camera (view height).</td>
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
  background-color: #f0f0f0;
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
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
</style>
