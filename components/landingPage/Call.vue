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

<template>
    <div ref="main">
        <section class="bg-black ">
            <div class="max-w-screen-xl mx-auto px-3 xl:px-0 py-24 md:py-32 lg:py-40 grid place-items-center ">
                <div class="">
                    <p class="box text-[#FA4529] text-3xl md:text-4xl leading-relaxed md:leading-normal">Describe your
                        <br class="md:hidden">
                        project
                    </p>
                    <h1
                        class="box text-white text-[4.9rem] md:text-[7.5rem] font-semibold leading-none md:leading-normal 
                        mt-3 md:mt-0 mb-5 md:mb-0 heading">
                        Call
                        <br class="md:hidden"> Moonex
                    </h1>
                    <svg class="w-16 h-16 md:w-20 md:h-20 text-white box" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>

                </div>
            </div>
        </section>

        <section
            class=" py-24 md:py-40 min:h-screen bg-[url('https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')] bg-cover bg-center bg-no-repeat">
            <div class="max-w-screen-xl mx-auto px-4 xl:px-0 grid place-items-center h-full">
                <div class="flex flex-col xl:flex-row justify-between space-y-16 xl:space-y-0 h-fit">
                    <img class="w-40 h-fit object-contain box" src="https://dev.utom.berlin/assets/img/root/quote.png" alt="">
                    <div class="text-white lg:w-[70%]">
                        <p class="text-3xl md:text-4xl lg:text-5xl font-semibold leading-normal box">
                            “I don’t know what else to say, this is something that you haven’t seen before. Unique design,
                            lightweight, and outstanding support!”</p>
                        <p class="text-xl md:text-2xl font-semibold mt-16 box">Pavel. S</p>
                        <p class="text-xs md:text-sm box">CEO at Liarch Studio</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style>
.heading {
    transition: all .8s cubic-bezier(0,0,.23,1);
    text-decoration: none;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(90deg,#FA4529,#FA4529 50%,white 0);
    background-size: 200% 100%;
    background-position: 100%;
}
.heading:hover {
      background-position: 0;
        color: #FA4529;
        cursor: pointer;
}

</style>