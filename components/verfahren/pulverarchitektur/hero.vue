<template>
  <div class="relative w-full h-[80vh]"  v-bind:data-blink-src="decHero">
    <div class="absolute bottom-24 left-48 z-10">
      <h5 class="font-InterExtraBold text-white text-5xl">
        PULVERBESCHICHTUNG ARCHITEKTUR<br>
        <span class="text-amber-400">BESCHICHTUNGSLÖSUNGEN</span>
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
      return `https://ucarecdn.com/68d47660-f323-4aaa-b851-762b58ee6bae//-/quality/smart/-/resize/1800x/`
    case 'xl':
      return `https://ucarecdn.com/68d47660-f323-4aaa-b851-762b58ee6bae//-/quality/smart/-/resize/1800x/`
    case 'large':
      return `https://ucarecdn.com/68d47660-f323-4aaa-b851-762b58ee6bae//-/quality/smart/-/resize/1800x/`
    case 'medium':
      return `https://ucarecdn.com/68d47660-f323-4aaa-b851-762b58ee6bae//-/quality/smart/-/crop/9:16/30p,0/`
    case 'small':
      return `https://ucarecdn.com/68d47660-f323-4aaa-b851-762b58ee6bae//-/quality/smart/-/crop/9:16/25p,0/-/resize/1000x/`
    default:
      return `https://ucarecdn.com/68d47660-f323-4aaa-b851-762b58ee6bae//-/quality/smart/-/resize/1800x/`
  }
})

</script>


