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

        start: "top 60%",
        end: "bottom 5%",
      });
    }, main.value); // <- Scope!
});

onUnmounted(() => {
  ctx.value.revert(); // <- Easy Cleanup!
});
</script>

<template>
  <div class="box max-w-7xl px-6 md:px-4 mx-auto border-b md:pt-40 pt-20 pb-24 border-slate-200"  ref="main">
    <h1 class="box normal text-xl md:text-2xl text-slate-900 md:leading-[48px] leading-[34px]">
      Lewis Studio Website is a startup that aims to supply energy (starting with gas) to domestic household acrossthe UK. Create a very simple yet stunning logotype and promo site that sets the brand of Entice Energy apart from the competitors like a fresh take on an already saturated area.
    </h1>
  </div>
</template>
