<template>
  <div class="max-w-[1550px] mx-auto px-6 md:px-4">
    <div class="flex items-center justify-between">
      <h1 class="md:text-5xl text-2xl   inline-flex">Projects</h1>
      <div class="gap-4 flex items-center">
        <button
          class="px-4 py-4 ring-1 ring-gray-400 hover:bg-[#fa4529] hover:text-white duration-500 hover:ring-[#fa4529]"
          @click="next"
        >
          <Icon icon="fluent:ios-arrow-left-24-regular" />
        </button>
        <button
          class="px-4 py-4 ring-1 ring-gray-400 hover:bg-[#fa4529] hover:text-white duration-500 hover:ring-[#fa4529]"
          @click="next"
        >
          <Icon icon="fluent:ios-arrow-right-24-regular" />
        </button>
        <!-- <button class="px-4 py-4 ring-1 ring-gray-400" @click="prev"><Icon icon="fluent:ios-arrow-right-24-regular" /></button> -->
      </div>
    </div>
    <div class="mt-8">
      <Carousel
        ref="carousel"
        v-model="currentSlide"
        :settings="settings"
        :breakpoints="breakpoints"
        :wrap-around="true"
        :transition="500"
      >
        <Slide v-for="slide in projects" :key="slide" >
          <div class="carousel__item ">
            <div class>
              <img :src="slide.img" alt />
            </div>
            <div class>
              <p class="text-left text-slate-500 pt-6">{{slide.type}}</p>
              <h1 class="text-left tracking-wide pt-5 text-3xl">{{slide.title}}</h1>
            </div>
          </div>
        </Slide>
 
      </Carousel>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import work_one from "@/assets/work-1.png";
import work_two from "@/assets/work-2.png";
import work_three from "@/assets/work-3.png";
import work_four from "@/assets/work-4.png";
import work_five from "@/assets/work-5.png";
import work_six from "@/assets/work-6.png";
import { Icon } from "@iconify/vue";

// import 'vue3-carousel/carousel.css'
import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Breakpoints",
  components: {
    Carousel,
    Slide, 
    Icon,
  },
  data: () => ({
    // carousel settings

    currentSlide: 0,
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
      loop: true,
    },
    projects: [
      {
        title: "Taskly Dashboard",
        type: "UIUX",
        img: work_one,
      },
      {
        title: "Film & Art Festival",
        type: "Product",
        img: work_two,
      },
      {
        title: "Dark Whiskey",
        type: "Branding, Packiging",
        img: work_three,
      },
      {
        title: "Swiss Style Poster",
        type: "Illustration",
        img: work_four,
      },
      {
        title: "Liarch Architecture Firm",
        type: "UIUX",
        img: work_five,
      },
      {
        title: "FG Print Brand",
        type: "Branding, Packiging, Motion Video",
        img: work_six,
      },
    ],
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
       
      590: {
        itemsToShow: 2,
        snapAlign: "center",
      },
      // 1024 and up
      990: {
        itemsToShow: 3.1,
        snapAlign: "start",
      },
    },
  }),
  methods: {
    next() {
      this.$refs.carousel.next();
    },
    prev() {
      this.$refs.carousel.prev();
    },
  },
});
</script>


<style scoped>
.carousel {
  overflow: hidden;
}

.carousel__wrapper {
  display: flex;
  align-items: center;
  margin: 0 -10px;
}

.carousel__item {
  flex: 0 0 calc(100% / 1);
  padding: 0 0px;
  box-sizing: border-box;
  min-height: 200px;
  min-width: 100%;  
  font-size: 20px;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 20px); /* Adjust this value based on your layout */
}

 
.carousel__slide {
	padding: 10px;
}

 


</style>
