<template>
  <div class="relative w-full h-[100vh]"  v-bind:data-blink-src="decHero">
    <div class="absolute bottom-24 left-48 z-10">
      <h5 class="font-InterExtraBold text-white text-5xl">
        KTL-BESCHICHTUNG<br>
        <span class="text-amber-400">ecoatHEO®</span>
      </h5>
    </div>
    <div class="absolute top-0 left-0 w-full h-full bg-hero-pattern"></div>
  </div>
</template>


<script setup>
import { computed } from "@vue/reactivity";
import {useMq } from "vue3-mq"
const $mq = useMq();

const decHero = computed(() => {
  switch ($mq.current) {
    case 'xxl':
      return `https://ucarecdn.com/4020fcb0-d977-40ba-92e5-a5f402e1318c/-/quality/smart/-/resize/1800x/`
    case 'xl':
      return `https://ucarecdn.com/4020fcb0-d977-40ba-92e5-a5f402e1318c/-/quality/smart/-/resize/1800x/`
    case 'large':
      return `https://ucarecdn.com/4020fcb0-d977-40ba-92e5-a5f402e1318c/-/quality/smart/-/resize/1800x/`
    case 'medium':
      return `https://ucarecdn.com/4020fcb0-d977-40ba-92e5-a5f402e1318c/-/quality/smart/-/crop/9:16/30p,0/`
    case 'small':
      return `https://ucarecdn.com/4020fcb0-d977-40ba-92e5-a5f402e1318c/-/quality/smart/-/crop/9:16/25p,0/-/resize/1000x/`
    default:
      return `https://ucarecdn.com/4020fcb0-d977-40ba-92e5-a5f402e1318c/-/quality/smart/-/resize/1800x/`
  }
})

</script>


