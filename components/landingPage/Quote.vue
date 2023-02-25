<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const main = ref();
const ctx = ref();
const quoteRef = ref();

onMounted(() => {
    ctx.value = gsap.context((self) => {
        const boxes = self.selector('.box');
        gsap.set(".box", { opacity: 0, y: 20 });

        ScrollTrigger.batch(".box", {
            onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15 }),
            onLeave: batch => gsap.to(batch, { opacity: 0, y: 20 }),
            onEnterBack: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15 }),
            onLeaveBack: batch => gsap.to(batch, { opacity: 0, y: 20 }),

            start: "top 90%",
            end: "bottom 10%",
        });

        gsap.utils.toArray(".parallax").forEach((section, i) => {
            section.bg = quoteRef.value;
            if (i) {
                section.bg.style.backgroundPosition = `50% ${innerHeight / 2}px`;

                gsap.to(`.${quoteRef.value.className.split(' ')[0]}`, {
                    backgroundPosition: `50% ${-innerHeight / 2}px`,
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        scrub: true
                    }
                });
            }
        });
    }, main.value); // <- Scope!
});

onUnmounted(() => {
    ctx.value.revert(); // <- Easy Cleanup!
});
</script>

<template>
    <div ref="main" class="parallax relative z-10 mb-[50%]">
        <section ref="quoteRef"
            class="quote py-24 md:py-40 min:h-screen bg-[url('https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')] bg-cover bg-center bg-no-repeat bg-fixed absolute -z-10 top-0 left-0 w-full parallax">
            <div class="max-w-screen-xl mx-auto px-4 xl:px-0 grid place-items-center h-fit w-full">
                <div class="flex flex-col xl:flex-row justify-between space-y-16 xl:space-y-0 h-fit">
                    <img class="w-40 h-fit object-contain box" src="https://dev.utom.berlin/assets/img/root/quote.png"
                        alt="">
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