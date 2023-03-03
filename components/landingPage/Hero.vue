
<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const main = ref();
const ctx = ref();

onMounted(() => {
  ctx.value = gsap.context((self) => {
    const boxes = self.selector('.box');
    gsap.set(".box", {opacity: 0, y: 20});

    ScrollTrigger.batch(".box", {
      onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15}),
      onLeave: batch => gsap.to(batch, {opacity: 0, y: 20}),
      onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15}),
      onLeaveBack: batch => gsap.to(batch, {opacity: 0, y: 20}),

      start: "top 90%",
      end: "bottom 5%",
    });
  }, main.value); // <- Scope!
});

onUnmounted(() => {
  ctx.value.revert(); // <- Easy Cleanup!
});
</script>

<template >
  <div class="bg-[#FA4529]">

    <div class="max-w-screen-xl mx-auto pt-[12%] pb-12 px-3" ref="main">
      <div class="text-white text-2xl font-InterExtraBold leading-none md:text-7xl font-bold setOpacity box">
        <h1 class="box"> B2B MARKETING. </h1>
        <h1 class="box"> DIGITAL CHANGE MANAGEMENT. </h1>
        <h1 class="box"> PLATFORM DEVELOPMENT. </h1>
      </div>

      <section class="mt-16 lg:mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 setOpacity box">
        <div v-for="(_, index) in Array(3)" :key="index" class="w-full h-[30rem] relative overflow-hidden group box">
          <video poster="" src='@/assets/video/wissen01.mp4' type="video/mp4" autoplay loop muted playsinline
                 class="h-full w-full object-cover" />
          <div
            class="absolute lg:bottom-[-100%] group-hover:bottom-0 transition-all duration-[0.4s]
                        border-2 border-black bg-white w-full h-full p-5 flex flex-col justify-between">
            <div class="space-y-3">
              <p class="font-bold box">COMPETENCE</p>
              <h1 class="text-3xl font-bold hover:text-[#E03F32] box"><a href="/">MARKETING.MEDIA</a></h1>
            </div>
            <div class="w-20">
              <button class="font-bold hover:text-[#E03F32] box">CONTINUE</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style>
.setOpacity { opacity: 0;}
</style>
