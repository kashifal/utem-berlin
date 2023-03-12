<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';

</script>

<template>
  <main class="min-h-screen">
    <div class="relative z-10 bg-white">
  <!--  <div class="mt-32 w-full overflow-x-hidden">-->
      <portfoliooneHerosection />
      <portfoliooneLightbox />
<!--      <landingPageHeroquote />-->
      <portfoliooneText />
      <portfoliooneChallenges />
      <portfoliooneTweet />
      <portfoliooneSolution />
      <portfoliooneGridlightbox />
      <portfoliooneNextprojects />

    </div>
    <landingPageFooter />
  </main>
</template>


