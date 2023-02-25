<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const main = ref();
const ctx = ref();
const quoteRef = ref();

onMounted(() => {
    ctx.value = gsap.context((self) => {
        gsap.set(".pImage", { yPercent: -20 });
        gsap.to(".pImage", {
            yPercent: 20,
            ease: "none",
            scrollTrigger: {
                trigger: ".pSection",
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
    <div class="red"></div>
        <section class="pSection">
            <video class="pImage" autoplay muted loop>
                <source src="http://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
            </video>
        </section>
    <div class="white"></div>
</div>
</template>

<style>
    .red{
    height: 150px;
    background : #FA4529;
    }
    .white{
    height: 150px;
    background : #ffffff;
    }

    .pSection {

    position: relative;
    padding-top: 400px;
    padding-bottom: 300px;
    }

    .container {
    padding: 20px;
    margin: 0 auto;
    max-width: 1070px;
    position: relative;
    z-index: 1;
    }

    .pContent {
    width: 65%;
    background-color: transperant;
    color: white;
    padding: 5% 60px;
    margin-top: 4rem;
    font-weight: 700;
    font-size : 2rem
    }

    .pImage {
        width: 100%;
        position: absolute;
        top: 0;
        right: 0;
        max-height: 1920px;
        z-index: -10;
    }

</style>