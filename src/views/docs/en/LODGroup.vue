<template>
  <div class="doc-page">
    <ContentSection>
      <h1 class="doc-title">11. LOD GROUP</h1>

      <div class="doc-section">
        <h2 class="doc-section-title">LOD GROUP SUPPORT</h2>

        <div class="content-block">
          <div class="content-text">
            <p>
              Assembly Station fully supports models that use LOD Groups (Level
              of Detail), allowing you to create interactive assemblies even
              with models optimized for different viewing distances.
            </p>
            <p>
              When working with models containing LOD Groups, remember that:
            </p>
            <ul>
              <li>
                The <strong>Descriptor Component</strong> must be applied to the
                <strong>LOD0</strong> level (maximum detail) of the prefab
                <div class="alert alert-success mt-2 mb-2">
                  <i class="bi bi-lightning-fill me-2"></i>
                  <div>
                    <strong>Tip:</strong> The Descriptor Component is documented
                    in detail in the
                    <router-link to="/docs/descriptions" class="alert-link"
                      >4. Add Descriptions and Images</router-link
                    >
                    section of this documentation. Refer to it for complete
                    instructions on how to add and configure this component.
                  </div>
                </div>
              </li>
              <li>
                The Assembly system will automatically recognize LOD Groups and
                correctly handle the transition between different detail levels
              </li>
              <li>
                All settings for LOD groups remain the same as used in the rest
                of the system
              </li>
            </ul>

            <div class="info-box mt-4">
              <h5>Benefits of Using LOD Groups</h5>
              <p>
                Using LOD Groups with Assembly Station offers significant
                performance advantages for complex scenes:
              </p>
              <ul>
                <li>Reduced GPU load when objects are distant</li>
                <li>
                  Ability to use highly detailed models without compromising
                  performance
                </li>
                <li>
                  Greater application scalability across devices with different
                  hardware capabilities
                </li>
              </ul>
            </div>
          </div>

          <div class="content-media">
            <ImageZoomable
              src="/images/LOD0.jpg"
              alt="LOD Group with Assembly Station"
              caption="LOD Group Example - The Description Component should be applied to the LOD0 level"
            />
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">LOD GROUP CONFIGURATION</h2>

        <div class="content-block">
          <div class="content-text">
            <p>
              To correctly configure a model with LOD Groups for use in Assembly
              Station:
            </p>

            <ol class="numbered-list">
              <li>
                <strong>Prepare your model with different detail levels</strong>
                <p>
                  Ensure your model has correctly configured LOD levels (LOD0,
                  LOD1, LOD2, etc.)
                </p>
              </li>
              <li>
                <strong>Add the Descriptor Components</strong>
                <p>
                  Always add the Descriptor Components to the LOD0 level
                  (maximum detail) of the model
                </p>
              </li>
              <li>
                <strong>Configure normal properties</strong>
                <p>
                  Configure all other properties as you would for any other
                  Assembly Station component
                </p>
              </li>
            </ol>

            <div class="alert alert-info">
              <i class="bi bi-info-circle-fill me-2"></i>
              <strong>Note:</strong> Assembly Station will automatically use the
              appropriate detail levels based on the camera's distance from the
              object. No additional LOD Group-specific configuration is needed.
            </div>
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">NAMING CONVENTIONS FOR LOD LEVELS</h2>

        <div class="content-block">
          <div class="content-text">
            <p>
              It's recommended to use a consistent naming convention for your
              LOD levels to easily identify and manage them:
            </p>

            <div class="code-example">
              <pre><code>GROUP BARREL
├── barrel_01_LOD0    // High detail version
├── barrel_01_LOD1    // Medium detail version
├── barrel_01_LOD2    // Low detail version
│
└── GROUP BARREL_02
    ├── barrel_02_LOD0    // High detail for second barrel
    ├── barrel_02_LOD1    // Medium detail for second barrel
    └── barrel_02_LOD2    // Low detail for second barrel</code></pre>
            </div>

            <p class="mt-3">This naming structure provides several benefits:</p>

            <ul>
              <li>
                <strong>Clarity:</strong> Each LOD level has a unique name that
                includes both the object identifier and the LOD level
              </li>
              <li>
                <strong>Organization:</strong> Makes it easier to manage complex
                hierarchies with multiple LOD groups
              </li>
              <li>
                <strong>Consistency:</strong> Helps maintain a uniform structure
                across different models and projects
              </li>
            </ul>

            <div class="alert alert-warning mt-3">
              <i class="bi bi-exclamation-triangle-fill me-2"></i>
              <strong>Important:</strong> While you can use any naming
              convention you prefer, ensure that your Descriptor Component is
              always attached to the LOD0 (highest detail) object in each LOD
              Group.
            </div>
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">BEST PRACTICES</h2>

        <div class="content-block">
          <div class="content-text">
            <ul class="check-list">
              <li>
                <strong>Verify correct LOD configuration</strong>: Make sure the
                LOD Groups are configured with smooth transitions between levels
              </li>
              <li>
                <strong>Test at different distances</strong>: Check your
                assembly behavior at various distances to ensure LODs work as
                expected
              </li>
              <li>
                <strong>Progressively optimize</strong>: Significantly reduce
                polygon counts in lower LOD levels to maximize performance
                benefits
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ContentSection>
  </div>
</template>

<script>
import ContentSection from "@/components/ContentSection.vue";
import ImageZoomable from "@/components/ImageZoomable.vue";

export default {
  name: "LODGroupPage",
  components: {
    ContentSection,
    ImageZoomable,
  },
};
</script>

<style scoped>
@import "@/assets/styles/documentation.css";

.numbered-list {
  counter-reset: item;
  padding-left: 0;
}

.numbered-list li {
  display: block;
  margin-bottom: 1.5rem;
  position: relative;
  padding-left: 2.5rem;
}

.numbered-list li::before {
  content: counter(item);
  counter-increment: item;
  background: #00a3ff;
  color: white;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  position: absolute;
  left: 0;
  top: 0;
}

.numbered-list li strong {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1.1em;
}

.check-list {
  padding-left: 0;
  list-style: none;
}

.check-list li {
  padding-left: 28px;
  position: relative;
  margin-bottom: 1rem;
}

.check-list li::before {
  content: "✓";
  color: #00a3ff;
  position: absolute;
  left: 0;
  top: 0;
  font-weight: bold;
}

.alert {
  border-radius: 8px;
  padding: 15px;
  margin-top: 20px;
  display: flex;
  align-items: center;
}

.alert-info {
  background-color: #e6f7ff;
  border-left: 4px solid #00a3ff;
  color: #0055a4;
}

.alert-success {
  background-color: #e6ffe6;
  border-left: 4px solid #00a300;
  color: #005500;
}

.alert-warning {
  background-color: #fff4e6;
  border-left: 4px solid #ffa500;
  color: #a45d00;
}
</style>
