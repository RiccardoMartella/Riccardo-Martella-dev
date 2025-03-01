<template>
  <div class="doc-container">
    <div class="container-fluid mt-4">
      <div class="row">
     
        <div class="col-lg-3 col-md-4 d-none d-md-block">
          <DocSidebar :isItalian="isItalian" />
        </div>

     
        <MobileSidebarToggle />
        
   
        <div class="col-lg-9 col-md-8">
          <div class="content-wrapper">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DocSidebar from '@/components/DocSidebar.vue'
import MobileSidebarToggle from '@/components/MobileSidebarToggle.vue'

export default {
  name: 'DocContainer',
  components: {
    DocSidebar,
    MobileSidebarToggle
  },
  computed: {
    isItalian() {
      return this.$route.path.includes('/it/')
    }
  }
}
</script>

<style scoped>
.doc-container {
  margin-top: 80px;
  padding-bottom: 40px;
}

.content-wrapper {
  max-width: 100%;
  padding: 0 15px;
}

@media (max-width: 767.98px) {
  .content-wrapper {
    padding: 0 10px;
  }
}
</style>
