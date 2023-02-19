<template>
  <div class="relative w-full h-[90vh] bg-cover bg-center" v-bind:style="mobHero">
    <!-- bg blue overlay -->
    <div class="blueOverlay">
      <!-- content center/center box -->
      <div class="grid place-items-center h-full">
        <div class="text-white font-bold text-6xl">
          <div v-if="project.generalProjectType == 'VA'" class="">Versuchsauftrag {{ project.generalProjectNumber }}</div>
          <div v-if="project.generalProjectType == 'BE'" class="">Beschichtungsempfehlung {{ project.generalProjectNumber }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useMq } from "vue3-mq"
const $mq = useMq();

const props = defineProps(["project"])
const { project } = toRefs(props)

const mobHero = computed(() => {
  if (project.value.assembly.assemblyObject == "Automobil" && project.value.assembly.assemblyArea == "Aussenbereich") {
    return `background-image: url('/img/cop/auto_aussenbereich_02.jpg');`
  } else if
  (project.value.assembly.assemblyObject == "Automobil" && project.value.assembly.assemblyArea == "Innenraum") {
    return `background-image: url('/img/cop/auto_innenraum_01.jpg');`
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
          rgba(0, 0, 0, 0.75) 0,
          rgba(21, 166, 219, 0.4) 100%
  );
}
</style>
