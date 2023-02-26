<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const main = ref();
const ctx = ref();
const quoteRef = ref();

onMounted(() => {
    ctx.value = gsap.context((self) => {
        gsap.set(".parallaxContent", { yPercent: -20 });
        gsap.to(".parallaxContent", {
            yPercent: 20,
            ease: "none",
            scrollTrigger: {
                trigger: ".parallax",
                scrub: true,
                // markers: true,
                start: "-=60%",
                end: "+=100%"
            },
        });

    }, main.value); // <- Scope!
});

onUnmounted(() => {
    ctx.value.revert(); // <- Easy Cleanup!
    quoteRef.value.revert();
});
</script>


<template>
<div>
  <section class="parallax">
    <video class="parallaxContent bg-white" autoplay muted loop>
      <source src="http://d1wejytifqhe5y.cloudfront.net/ed852693-079c-4251-a1f2-ecd19b62078d/hls/Vielfalt+leben+in+Deiner+Stadt.m3u8" type="video/mp4">
    </video>
  </section>
</div>
</template>

<style>
.parallax {

    position: relative;
    padding-top: 330px;
    padding-bottom: 300px;
}
.parallaxContent {
    width: 100%;
    position: absolute;
    top: 0;
    right: 0;
    max-height: 1920px;
    z-index: -10;
}

</style>
