<template>
  <section class="w-full px-4 md:px-[40px] xl:px-[230px]">
    <div class="flex flex-col 2xl:space-x-44 mb-10">
      <!--      <div class="xl:w-[100%] p-5 md:p-0">
              <h2 class="text-3xl font-InterExtraBold mb-10 xl:mb-0">SEKTOREN</h2>
            </div>-->
      <div class="xl:w-full">
        <h2 class="scrollanime text-2xl md:text-4xl overflow-hidden font-InterExtraBold uppercase pt-24 pb-12 xl:mb-0">
          Wir sind ihr Partner für ihr Beschichtungserlebnis</h2>
        <div class="flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0 md:mb-10">
          <nuxt-link to="/decorative" class="relative">
            <div class="absolute top-10 bg-green-700 md:bg-gray-400 pl-3 w-fit">
                  <div class="bg-black px-4 py-2">
                      <p class="text-white">Technology</p>
                  </div>
              </div>
            <img
                alt=""
                class="w-full h-80 object-cover"
                data-blink-src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjgwfHx0ZWNobm9sb2d5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            />
            <div class="px-10 md:px-0">
              <p class="text-gray-400 my-3">March 02, 2022</p>
              <h4 class="text-xl font-semibold mb-4">
                DECORATIVE
              </h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Veniam quas illo praesentium ratione laboriosam, quasi placeat
                exercitationem quod doloribus maxime quam impedit sed
                temporibus.
              </p>
              <button class="border-b-2 border-green-700 font-medium mt-4">
                Read more
              </button>
            </div>
          </nuxt-link>
          <nuxt-link to="/functional" class="relative">
            <div class="absolute top-10 bg-green-700 md:bg-gray-400 pl-3 w-fit">
              <div class="bg-black px-4 py-2">
                <p class="text-white">Technology</p>
              </div>
            </div>
            <img alt="" class="w-full h-80 object-cover" data-blink-src="https://images.unsplash.com/photo-1618874571406-966ce895f4d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"/>
            <div class="px-10 md:px-0">
              <p class="text-gray-400 my-3">March 02, 2022</p>
              <h4 class="text-xl font-semibold mb-4">
                FUNCTIONAL
              </h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Veniam quas illo praesentium ratione laboriosam, quasi placeat
                exercitationem quod doloribus maxime quam impedit sed
                temporibus.
              </p>
              <button class="border-b-2 border-green-700 font-medium mt-4">
                Read more
              </button>
            </div>
          </nuxt-link>
        </div>

<!--        <div class="relative mt-10 md:inline">
          <div class="absolute left-0 z-10 top-10 bg-green-700 md:bg-gray-400 pl-3 w-fit">
            <div class="bg-black px-4 py-2">
              <p class="text-white">Technology</p>
            </div>
          </div>
          <img
              alt=""
              class="w-full h-80 object-cover"
              src="https://images.unsplash.com/photo-1618874571406-966ce895f4d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
          />
          <div class="px-10 md:px-0">
            <p class="text-gray-400 my-3">March 03, 2022</p>
            <h4 class="text-xl font-semibold mb-4">
              eMOBILITY
            </h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
              quas illo praesentium ratione laboriosam, quasi placeat
              exercitationem quod doloribus maxime quam impedit sed
              temporibus.
            </p>
            <button class="border-b-2 border-green-700 font-medium mt-4">
              Read more
            </button>
          </div>
        </div>-->

        <div class="flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0 mt-10  md:inline-flex mb-20">
          <nuxt-link to="/mobility" class="relative">
            <div
                class="absolute top-10 bg-green-700 md:bg-gray-400 pl-3 w-fit"
            >
              <div class="bg-black px-4 py-2">
                <p class="text-white">Technology</p>
              </div>
            </div>
            <img
                alt=""
                class="w-full h-80 object-cover"
                data-blink-src="https://images.unsplash.com/photo-1618874571406-966ce895f4d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
            />
            <div class="px-10 md:px-0">
              <p class="text-gray-400 my-3">March 02, 2022</p>
              <h4 class="text-xl font-semibold mb-4">
                MOBILITY
              </h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Veniam quas illo praesentium ratione laboriosam, quasi placeat
                exercitationem quod doloribus maxime quam impedit sed
                temporibus.
              </p>
              <button class="border-b-2 border-green-700 font-medium mt-4">
                Read more
              </button>
            </div>
          </nuxt-link>
          <nuxt-link to="/architecture" class="relative">
            <div
                class="absolute top-10 bg-green-700 md:bg-gray-400 pl-3 w-fit"
            >
              <div class="bg-black px-4 py-2">
                <p class="text-white">Technology</p>
              </div>
            </div>
            <img
                alt=""
                class="w-full h-80 object-cover"
                data-blink-src="https://images.unsplash.com/photo-1618874571406-966ce895f4d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
            />
            <div class="px-10 md:px-0">
              <p class="text-gray-400 my-3">March 02, 2022</p>
              <h4 class="text-xl font-semibold mb-4">
                ARCHITECTURE
              </h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Veniam quas illo praesentium ratione laboriosam, quasi placeat
                exercitationem quod doloribus maxime quam impedit sed
                temporibus.
              </p>
              <button class="border-b-2 border-green-700 font-medium mt-4">
                Read more
              </button>
            </div>
          </nuxt-link>
        </div>
<!--        <div class="w-fit mx-auto  md:block">
          <button class="px-4 py-3 border-2 border-black font-medium">
            Load more
          </button>
        </div>-->
      </div>
    </div>
  </section>
</template>

<script setup>
import {useMq} from "vue3-mq"

const $mq = useMq();

import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {onMounted, onUnmounted} from "vue"


gsap.registerPlugin(ScrollTrigger)

function gsapSet() {
  gsap.fromTo(
      ".scrollanime",
      {
        x: 60,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,

        ease: "Expo.easeOut",
        duration: 2,
        scrollTrigger: {
          trigger: ".scrollanime",
          start: "top 80%",
          end: "top 25%",
          scrub: false,
          markers: false,
        },
      }
  )
}

onMounted(() => {
  ScrollTrigger.refresh();
  gsapSet()
})

onUnmounted(() => {
  ScrollTrigger.clearMatchMedia();
})
</script>

<style lang="scss" scoped>

</style>
