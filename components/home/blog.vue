<template>
  <!-- blog posts section -->
    <section class="relative mt-56 w-full px-10 md:px-[40px] xl:px-[360px]">
      <h1 class="scrollanime absolute left-1 -top-16 md:left-4  xl:left-20 md:-top-36 text-6xl sm:text-[120px] lg:text-[186px] text-gray-100 font-bold">
        Blog Posts
      </h1>
      <div class="pt-24">
        <div class="space-y-4">
          <p class="text-gray-500">12 January, 2022 - NEWS</p>
          <h3 class="text-3xl font-semibold">
            Pneumatische Balancersysteme für die Hochglanz-Beschichtungsanlage
          </h3>
          <p class="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            placeat asperiores at, eaque maxime quod. placeat asperiores at,
            eaque maxime quod.
          </p>
        </div>
        <hr class="my-10" />
        <div class="space-y-4">
          <p class="text-gray-500">12 January, 2022 - NEWS</p>
          <h3 class="text-3xl font-semibold">
            Bei uns werden Beschichter*innen Nerds
          </h3>
          <p class="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            placeat asperiores at, eaque maxime quod. placeat asperiores at,
            eaque maxime quod.
          </p>
        </div>
        <hr class="my-10" />
        <div class="space-y-4">
          <p class="text-gray-500">12 January, 2022 - NEWS</p>
          <h3 class="text-3xl font-semibold">
            Wenn Verantwortung die Technologie antreibt
          </h3>
          <p class="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            placeat asperiores at, eaque maxime quod. placeat asperiores at,
            eaque maxime quod.
          </p>
        </div>
        <hr class="my-10" />
        <button
          class="items-center px-7 py-3 mt-20 mb-32 bg-black text-gray-300 font-medium rounded-full capitalize hidden md:inline-flex"
        >
          weitere posts
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </button>
      </div>
    </section>
</template>

<script setup>
import { gsap } from "~/assets/js/gsap";
import { ScrollTrigger } from "~/assets/js/gsap/ScrollTrigger"
import { onMounted, onUnmounted } from "vue"

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
