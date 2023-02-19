<template>
  <section id="hero" class="">
<!--    <div id="hero" class="relative w-full h-[100vh] bg-cover bg-center" v-bind:data-blink-src="funHero">-->
    <div class="relative w-full h-screen bg-cover bg-center" style="background-image: url(https://ucarecdn.com/b9b227b5-ff90-4809-8a9d-9bb37c618f36/-/quality/smart/-/resize/1800x/);">
        <!-- bg blue overlay -->
        <div class="blueOverlay">
          <!-- content center/center box -->
          <div class="grid place-items-center h-full">
            <div class="text-white text-center font-bold text-2xl md:text-6xl">
              <div v-if="project.generalProjectType == 'VA'" class="">Versuchsauftrag {{ project.generalProjectNumber }}</div>
              <div v-if="project.generalProjectType == 'BE'" class="">Beschichtungsempfehlung {{ project.generalProjectNumber }}</div>
              <div class="text-2xl">{{ project.generalProjectSummary}}</div>

            </div>
            <div class="absolute bottom-32 flex flex-col items-center stroke-gray-400 pt-8">
              <svg width="3em" height="3em" viewBox="0 0 247 390">
                <path id="wheel" d="M123.359,79.775l0,72.843" style="fill:none; stroke-width:20px;"/>
                <path id="mouse" d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z" style="fill:none;stroke-width:20px;"/>
              </svg>
            </div>
          </div>
        </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import {useMq } from "vue3-mq"
const $mq = useMq();

const props = defineProps(["project"])
const { project } = toRefs(props)

const funHero = computed(() => {
  if (project.value.assembly.assemblyObject == "Automobil" && project.value.assembly.assemblyArea == "Aussenbereich") {
    switch ($mq.current) {
      case 'xxl':
        return `https://ucarecdn.com/b9b227b5-ff90-4809-8a9d-9bb37c618f36/-/quality/smart/-/resize/1800x/`
      case 'xl':
        return `https://ucarecdn.com/b9b227b5-ff90-4809-8a9d-9bb37c618f36/-/quality/smart/-/resize/1800x/`
      case 'large':
        return `https://ucarecdn.com/b9b227b5-ff90-4809-8a9d-9bb37c618f36/-/quality/smart/-/resize/1800x/`
      case 'medium':
        return `https://ucarecdn.com/b9b227b5-ff90-4809-8a9d-9bb37c618f36/-/quality/smart/-/crop/9:16/30p,0/`
      case 'small':
        return `https://ucarecdn.com/b9b227b5-ff90-4809-8a9d-9bb37c618f36/-/quality/smart/-/crop/9:16/35p,0/-/resize/1000x/`
      default:
        return `https://ucarecdn.com/b9b227b5-ff90-4809-8a9d-9bb37c618f36/-/quality/smart/-/resize/1800x/`
    }
  } else if
  (project.value.assembly.assemblyObject == "Automobil" && project.value.assembly.assemblyArea == "Innenraum") {
    switch ($mq.current) {
      case 'xxl':
        return `https://ucarecdn.com/3bf8efe9-4f2b-4f76-adf2-9ab9adec3033/-/quality/smart/-/resize/1800x/`
      case 'xl':
        return `https://ucarecdn.com/3bf8efe9-4f2b-4f76-adf2-9ab9adec3033/-/quality/smart/-/resize/1800x/`
      case 'large':
        return `https://ucarecdn.com/3bf8efe9-4f2b-4f76-adf2-9ab9adec3033/-/quality/smart/-/resize/1800x/`
      case 'medium':
        return `https://ucarecdn.com/3bf8efe9-4f2b-4f76-adf2-9ab9adec3033/-/quality/smart/-/crop/9:16/30p,0/`
      case 'small':
        return `https://ucarecdn.com/3bf8efe9-4f2b-4f76-adf2-9ab9adec3033/-/quality/smart/-/crop/9:16/25p,0/-/resize/1000x/`
      default:
        return `https://ucarecdn.com/3bf8efe9-4f2b-4f76-adf2-9ab9adec3033/-/quality/smart/-/resize/1800x/`
    }
  } else if
  (project.value.assembly.assemblyObject == "Automobil" && project.value.assembly.assemblyArea == "Unterboden") {
    return `background-image: url('/img/cop/auto_unterboden_01.jpg');`
  } else if
  (project.value.assembly.assemblyObject == "Automobil" && project.value.assembly.assemblyArea == "Batteriebereich") {
    return `background-image: url('/img/cop/auto_batterie_02.jpg');`
  } else if
  (project.value.assembly.assemblyObject == "Automobil" && project.value.assembly.assemblyArea == "Bremsenbereich") {
    return `background-image: url('/img/cop/auto_bremsen_01.jpg');`
  } else if
  (project.value.assembly.assemblyObject == "Automobil" && project.value.assembly.assemblyArea == "Motorraum-Verbenner") {
    return `background-image: url('/img/cop/auto_motor_verbrenner_01.jpg');`
  } else if
  (project.value.assembly.assemblyObject == "Automobil" && project.value.assembly.assemblyArea == "Motorraum-Hybrid") {
    return `background-image: url('/img/cop/auto_bremsen_01.jpg');`
  } else if (project.value.assembly.assemblyObject == "Automobil" && project.value.assembly.assemblyArea == "Schiebedachbereich") {
    return `background-image: url('/img/cop/auto_schiebedach_02.jpg');`
  } else {
    return `background-image: url('/img/cop/auto_innenraum_01.jpg');`
  }
})
</script>

<style lang="scss" scoped>
.blueOverlay {
  height: 100%;
  background: linear-gradient(
  to right,
  rgba(0, 0, 0, 0.6) 0,
  rgba(21, 166, 219, 0.4) 100%
  );
}
// mouse animation.
@keyframes scroll {
  0% {transform: translateY(0);}
  30% {transform: translateY(60px);}
}
svg #wheel {
  animation: scroll ease 2s infinite;
}

// Default stuff.
*,
*::before,
*::after {
  box-sizing: border-box;
  -webkit-backface-visibility: hidden;
  -webkit-transform-style: preserve-3d;
}
</style>
