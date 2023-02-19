<template>
  <!-- KOMPETENZ SECTION -->
  <section class="md:p-10 w-full px-4 md:px-[40px] xl:px-[230px] mt-16">
    <div class="flex flex-col xl:flex-row 2xl:space-x-44 mb-20 xl:p-0">
      <div class="xl:w-[20%]">
        <h2 class="scrollanime text-4xl xl:text-3xl 2xl:text-4xl font-InterExtraBold mb-10 xl:mb-0">WARUM<br>HILLEBRAND COATING?</h2>
      </div>
      <div class="xl:w-[80%]">
        <p class="text-lg font-semibold text-gray-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
          ipsum facilis natus, ut modi vero. Iusto provident dolorum voluptate
          obcaecati quo dolorem quas? Consectetur aut iste temporibus.
          Quaerat, delectus molestiae?
        </p>
        <hr class="my-10" />
        <div class="grid md:grid-cols-2 xl:gap-x-10 gap-y-10 w-full">
          <div>
            <h2 class="text-7xl font-InterExtraBold mb-10">17 +</h2>
            <p class="text-gray-500">Galaxies</p>
          </div>
          <div>
            <h2 class="text-7xl font-InterExtraBold mb-10">157</h2>
            <p class="text-gray-500">Black holes</p>
          </div>
          <div>
            <h2 class="text-7xl font-InterExtraBold mb-10">73</h2>
            <p class="text-gray-500">Known planets</p>
          </div>
          <div>
            <h2 class="text-7xl font-InterExtraBold mb-10">350 +</h2>
            <p class="text-gray-500">Stars</p>
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


