<script setup>

import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollSmoother } from "~/assets/js/gsap/ScrollSmoother";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const approaches = [
    {
        index: "one",
        title: 'Research',
    },
    {
        index: "two",
        title: 'Concept',
    },
    {
        index: "three",
        title: 'Development',
    },
    {
        index: "four",
        title: 'Test',
    },
    {
        index: "five",
        title: 'Hand over',
    },
]

const main = ref();
const ctx = ref();

onMounted(() => {
    gsap.registerPlugin( ScrollSmoother);

    ctx.value = gsap.context((self) => {
        // const smoother = ScrollSmoother.create({
        //     content: "#scrollsmoother-container",
        //     smooth: 1,
        //     normalizeScroll: true,
        //     ignoreMobileResize: true,
        //         effects: true,
        //     //preventDefault: true,
        //     //ease: 'power4.out',
        //     //smoothTouch: 0.1, 
        //     });

        const boxes = self.selector('.box');

        // smoother()
        gsap.set(".box", {opacity: 0, y: 20});

        ScrollTrigger.batch(".box", {
        onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15}),
        onLeave: batch => gsap.to(batch, {opacity: 0, y: 20}),
        onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15}),
        onLeaveBack: batch => gsap.to(batch, {opacity: 0, y: 20}),

        start: "top 90%",
        end: "bottom 10%",
        });
        
        // boxes.forEach((box) => {
        //     gsap.fromTo(box, {
        //         autoAlpha: 0, 
        //         y: 50
        //         }, {
        //         scrollTrigger: {
        //         trigger: box,
        //         scrub : 0.5
        //         },
        //         duration: 1.5, 
        //         autoAlpha: 1.3, 
        //         y: 0,
                
        //     });
        // });
    }, main.value); // <- Scope!
});

onUnmounted(() => {
    ctx.value.revert(); // <- Easy Cleanup!
});

</script>

<template>
    <div class="bg-[#E74134]">
        <div class="max-w-screen-xl mx-auto px-3 xl:px-0 pt-16 md:pt-32 pb-20 md:pb-44" ref="main">
            <h1 class="text-[3.3rem] md:text-6xl xl:text-[5rem] font-bold leading-none box">
                My <br class="md:hidden"> Approach
            </h1>
            <div class="mt-16 md:mt-28 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-14 gap-y-44 box">
                <div v-for="approach in approaches" :key="approach.index" class="pt-14 border-t-2 border-black box">
                    <p class="text-lg md:text-xl font-medium uppercase">{{ approach.index }}</p>
                    <h2 class="text-white text-[2.8rem] md:text-6xl font-semibold capitalize mt-1">{{ approach.title }}</h2>
                    <p class="md:text-lg mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur vel
                        quidem omnis recusandae aperiam sunt pariatur consequuntur iste repellat porro.Consectetur vel
                        quidem omnis recusandae aperiam sunt pariatur consequuntur!
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>