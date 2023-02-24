<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const main = ref();
const ctx = ref();

onMounted(() => {
    ctx.value = gsap.context((self) => {
        const boxes = self.selector('.box');
        gsap.set(".box", { opacity: 0, y: 40 });

        ScrollTrigger.batch(".box", {
            onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.2 }),
            onLeave: batch => gsap.to(batch, { opacity: 0, y: 40 }),
            onEnterBack: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15 }),
            onLeaveBack: batch => gsap.to(batch, { opacity: 0, y: 40 }),

            start: "top 90%",
            end: "bottom 5%",
        });
    }, main.value); // <- Scope!
});

onUnmounted(() => {
    ctx.value.revert(); // <- Easy Cleanup!
});
</script>
<template>
    <section class="h-[70vh] md:h-screen mx-auto bg-black relative" ref="main">
        <video poster="" src='@/assets/office.mp4' type="video/mp4" autoplay loop muted playsinline
            class="h-[75%] w-full object-cover sticky box top-[15%]" />
    </section>
</template>