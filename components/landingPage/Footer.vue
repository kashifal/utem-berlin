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
        end: "bottom 0%",
        });
        
    }, main.value); // <- Scope!
});

onUnmounted(() => {
    ctx.value.revert(); // <- Easy Cleanup!
});
</script>

<template>
    <footer class="bg-[#F5F5F5]">
        <div class="max-w-screen-xl mx-auto pt-20 md:pt-32 px-3 xl:px-0" ref="main">
            <section class="grid grid-cols-10 gap-x-5 xl:gap-x-20 gap-y-20 pb-20 md:pb-32 border-b-2 border-black">
                <div class="col-span-10 xl:col-span-5 text-3xl md:text-[42px] font-semibold box">
                    <h1>Boost Your Business Up To High Level</h1>
                    <h1 class="mt-14 md:mt-24">
                        <span>Start by </span>
                        <a class="text-[#FA4529] underline" href="/">Saying Hi!</a>
                    </h1>
                </div>

                <div class="col-span-10 md:col-span-5 xl:col-span-2">
                    <p class="text-2xl md:text-3xl font-semibold box">Links</p>
                    <ul class="mt-10 text-xs md:text-sm font-medium uppercase space-y-5">
                        <li><a class="hover:text-[#FA4529] box" href="/">faqs</a></li>
                        <li><a class="hover:text-[#FA4529] box" href="/">term & conditions</a></li>
                        <li><a class="hover:text-[#FA4529] box" href="/">privacy policy</a></li>
                        <li><a class="hover:text-[#FA4529] box" href="/">help</a></li>
                        <li><a class="hover:text-[#FA4529] box" href="/">affiliate</a></li>
                        <li><a class="hover:text-[#FA4529] box" href="/">services</a></li>
                    </ul>
                </div>

                <div class="col-span-10 md:col-span-5 xl:col-span-3">
                    <p class="text-2xl md:text-3xl font-semibold box">Contact</p>
                    <p class="mt-10 text-xl md:text-2xl text-[#666666] leading-normal mb-2 box">Dominik Stahlschmidt <br>
                        Alt-Stralau 52 <br>
                        10245 Berlin <br>
                        Germany</p>
                    <a class="text-[35px] md:text-[40px] hover:text-[#FA4529] box" href="/">hello@utom.berlin</a>

                    <ul class="mt-20 text-xs md:text-sm font-medium uppercase space-y-5">
                        <li><a class="hover:text-[#FA4529] box" href="/">works</a></li>
                        <li><a class="hover:text-[#FA4529] box" href="/">about</a></li>
                        <li><a class="hover:text-[#FA4529] box" href="/">news</a></li>
                        <li><a class="hover:text-[#FA4529] box" href="/">contact</a></li>
                    </ul>
                </div>
            </section>

            <section class="py-16 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 box">
                <a href="/">
                    <img class="w-52" src="https://dev.utom.berlin/assets/img/root/dxp_berlin_black.svg" alt="">
                </a>
                <p class="md:mt-3 xl:col-span-2">© 2022 dxp.berlin All Rights Reserved</p>
                <div class="lg:mt-2 flex space-x-7">
                    <a href="/"
                        class="text-black hover:text-[#FA4529] hover:-mt-1 transition-all transform ease-in-out duration-300">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            class="w-6 h-6" viewBox="0 0 24 24">
                            <path
                                d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                            </path>
                        </svg>
                    </a>
                    <a href="/"
                        class="text-black hover:text-[#FA4529] hover:-mt-1 transition-all transform ease-in-out duration-300">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            class="w-6 h-6" viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                    </a>
                    <a href="/"
                        class="text-black hover:text-[#FA4529] hover:-mt-1 transition-all transform ease-in-out duration-300">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                    </a>
                    <a href="/"
                        class="text-black hover:text-[#FA4529] hover:-mt-1 transition-all transform ease-in-out duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>
                    </a>
                </div>
            </section>
        </div>
    </footer>
</template>