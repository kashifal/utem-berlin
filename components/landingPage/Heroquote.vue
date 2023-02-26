
<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const main = ref();
const ctx = ref();

onMounted(() => {
    ctx.value = gsap.context((self) => {
        const boxes = self.selector('.box');
        gsap.set(".box", {opacity: 0, y: 30});

        ScrollTrigger.batch(".box", {
        onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.7}),
        onLeave: batch => gsap.to(batch, {opacity: 0, y: 30}),
        onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15}),
        onLeaveBack: batch => gsap.to(batch, {opacity: 0, y: 20}),

        start: "top 72%",
        end: "bottom 5%",
        });
    }, main.value); // <- Scope!
});

onUnmounted(() => {
    ctx.value.revert(); // <- Easy Cleanup!
});
</script>

<template >
    <div class="bg-[#FA4529] ">

        <div class="w-screen px-32 mx-auto  px-3 " ref="main">


            <section class="border-b-2 border-black h-10  pb-28 md:pb-96"></section>
          <div class="pb-64 box">
            <p class="text-white text-[2.5rem] text-left font-normal m-[0,0,1.875rem] pt-32 pb-24  box">It´s my pleasure to
                help
                clients suceed by creating identities, digital experiences, and printmaterials that communicate clearly,
                achieve
                marketing goals & look fantastic Lorem uispum dolor sit amert tunoer poea opefse ceefo goipully.</p>
            <button class="text-white text-lg font-semibold bg-[#E03F32]  px-10 py-4 box">
                <a href="/">Learn More</a>
            </button>
          </div>
        </div>
    </div>
</template>

