<template>
  <div> 
    <div @click="show" class="max-w-[1550px] overflow-hidden mx-auto pt-40 px-6 md:px-4">
      <div class="w-full h-auto overflow-hidden rounded">
        <nuxt-link to="~/assets/content-image-1.png">
          <img
            src="~/assets/content-image-1.png"
            alt
            class="w-full transition-all duration-1000 ease-out hover:ease-in hover:scale-105 margin-fleche"
          />
        </nuxt-link>
      </div>
    </div>
    <vue-easy-lightbox
      :visible="visibleRef"
      :imgs="imgsRef"
      :index="indexRef"
      @hide="onHide"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import VueEasyLightbox, { useEasyLightbox } from 'vue-easy-lightbox'
import img_1 from '~/assets/content-image-1.png' 

export default defineComponent({
  components: {
    VueEasyLightbox
  }, 
  setup() {
    const {
      // methods
      show, onHide, changeIndex,
      // refs
      visibleRef, indexRef, imgsRef
    } = useEasyLightbox({
      // src / src[]
      imgs: [
        img_1,
        
      ],
      // initial index
      initIndex: 0
    })

    return {
      visibleRef,
      indexRef,
      imgsRef,
      show,
      onHide
    }
  }
})
</script>

<style lang="" scoped>
    
  

</style>