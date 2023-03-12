<template>
<div class="max-w-7xl mx-auto px-6 md:px-4 pt-16">
  <div>
    <div class="grid md:grid-cols-12 grid-cols-1 gap-10 ">
      <div class="md:col-span-6 " @click="show(1)">
        <div class="w-full h-auto overflow-hidden rounded">
          <nuxt-link to="~/assets/content-image-2.png">
            <img
              src="~/assets/content-image-2.png"
              alt
              class="w-full transition-all duration-1000 ease-out hover:ease-in hover:scale-105 margin-fleche"
            />
          </nuxt-link>
        </div>
      </div>
      <div class="md:col-span-6 " @click="show(2)">
        <div class="w-full h-auto overflow-hidden rounded">
          <nuxt-link to="~/assets/content-image-3.png">
            <img
              src="~/assets/content-image-3.png"
              alt
              class="w-full transition-all duration-1000 ease-out hover:ease-in hover:scale-105 margin-fleche"
            />
          </nuxt-link>
        </div>
      </div>
      <div class=" md:col-span-12" @click="show(3)">
        <div class="w-full h-auto overflow-hidden rounded">
          <nuxt-link to="~/assets/content-image-4.png">
            <img
              src="~/assets/content-image-4.png"
              alt
              class="w-full transition-all duration-1000 ease-out hover:ease-in hover:scale-105 margin-fleche"
            />
          </nuxt-link>
        </div>
      </div>
    </div>
    <vue-easy-lightbox
      :visible="visibleRef"
      :imgs="imgsRef"
      :index="indexRef"
      @hide="onHide"
    />
  </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import VueEasyLightbox, { useEasyLightbox } from 'vue-easy-lightbox'
import img_1 from '~/assets/content-image-1.png'
import img_2 from '~/assets/content-image-2.png'
import img_3 from '~/assets/content-image-3.png'
import img_4 from '~/assets/content-image-4.png'

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
        img_2,
        img_3,
        img_4,

      ],
      // initial index
      initIndex: 0
    })

    return {
      visibleRef,
      indexRef,
      imgsRef,
      show(index) {
        changeIndex(index)
        visibleRef.value = true
      },
      onHide
    }
  }
})
</script>

<style lang="" scoped>



</style>
