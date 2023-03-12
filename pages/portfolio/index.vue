<template>
  <div class="mt-32">
    <HeroSection /> 
    <Lightbox /> 
    <div class="max-w-7xl px-6 md:px-4 mx-auto border-b md:pt-40 pt-20 pb-24 border-slate-200">
      <h1
        class="normal text-xl md:text-2xl text-slate-900 md:leading-[48px] leading-[34px]"
      >Lewis Studio Website is a startup that aims to supply energy (starting with gas) to domestic household acrossthe UK. Create a very simple yet stunning logotype and promo site that sets the brand of Entice Energy apart from the competitors like a fresh take on an already saturated area.</h1>
    </div> 
    <Challenges />  
    <Tweet /> 
    <div class="max-w-7xl px-6 md:px-4 mx-auto pt-28 pb-20 border-slate-200">
      <h1 class="text-5xl pb-8 tracking-wide">Solution</h1>
      <p
        class="normal text-xl md:text-2xl text-slate-600 tracking-wide md:leading-[48px]"
      >Our approach was to present the site as a visual editorial platform with quarterly features based on events and occasions the brand was focused on. Each quarterly focus would be marked by the hero and custom tags that filter content.</p>

      <div class="py-8"></div>
      <GridLightbox />
    </div> 
    <div class="max-w-7xl px-6 md:px-4 mx-auto pt-28 pb-20 border-slate-200">
      <p class="text-xl text-slate-400">NEXT PROJECT</p>
      <nuxt-link to="#">
        <h1
          class="text-7xl relative inline-flex z-50 overflow-hidden mytext tracking-wide mt-8"
        >SPA Brand</h1>
      </nuxt-link>

      <div class="py-8"></div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import GridLightbox from "@/components/portfolio/GridLightbox.vue";
import Lightbox from "@/components/portfolio/Lightbox.vue";
import HeroSection from "@/components/portfolio/HeroSection.vue";
import Challenges from "@/components/portfolio/Challenges.vue";
import Tweet from "@/components/portfolio/Tweet.vue";


</script>

<style scoped>
</style>