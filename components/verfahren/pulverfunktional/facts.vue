<template>
  <!-- KOMPETENZ SECTION -->
  <section class="md:p-10 w-full px-4 md:px-[40px] xl:px-[230px] mt-16 bg-purple-800">
    <div class="flex flex-col xl:flex-row 2xl:space-x-44 mb-20 xl:p-0">

      <div class="xl:w-full">
        <h1 class="text-4xl font-semibold text-white">
          Unser Möglichkeiten in der dekorativen Pulverbeschichtung
        </h1>
        <hr class="my-10" />
        <div class="grid md:grid-cols-2 xl:gap-x-10 gap-y-10 w-full text-white">
          <div>
            <h2 class="text-7xl font-InterExtraBold mb-10">17 +</h2>
            <p class="text-white">Gestellmaße/Bauteilgröße</p>
          </div>
          <div>
            <h2 class="text-7xl font-InterExtraBold mb-10">157</h2>
            <p class="text-white-gray-500">Einbrenntemperatur</p>
          </div>
          <div>
            <h2 class="text-7xl font-InterExtraBold mb-10">73</h2>
            <p class="text-white">nasschemisch/chemisch</p>
          </div>
          <div>
            <h2 class="text-7xl font-InterExtraBold mb-10">350 +</h2>
            <p class="text-white">Stars</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { gsap } from "~/assets/js/gsap";

export default {
  mounted () {
    this.myTween = gsap.to(this.$refs.myElement, { /* GSAP Config Here */ });
  }
}

</script>
<!--<script setup>
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
</script>-->

<style lang="scss" scoped>

</style>


