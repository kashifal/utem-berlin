<template>
  <div v-if="project.material.substrate=='Zink-Druckguss'" class="relative w-full h-[90vh] bg-cover bg-center" v-bind:style="imgUrlzdc">
    <div class="grid place-items-center h-full">
      <div class="text-white font-bold text-6xl">
        <div v-if="project.generalProjectType == 'VA'" class="">Versuchsauftrag {{project.generalProjectNumber}}</div>
        <div v-if="project.generalProjectType == 'FM'" class="">Farbmuster {{project.generalProjectNumber}}</div>
        <div v-if="project.generalProjectType == 'BE'" class="">Beschichtungsempfehlung {{project.generalProjectNumber}}</div>
      </div>
    </div>
  </div>
  <div v-if="project.material.substrate=='Aluminium'" class="relative w-full h-[90vh] bg-cover bg-center" v-bind:style="imgUrlalu">
    <div class="grid place-items-center h-full">
      <div class="text-white font-bold text-6xl">
        <div v-if="project.generalProjectType == 'VA'" class="">Versuchsauftrag {{project.generalProjectNumber}}</div>
        <div v-if="project.generalProjectType == 'BE'" class="">Beschichtungsempfehlung {{project.generalProjectNumber}}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useMq } from "vue3-mq"
const $mq = useMq();

const props = defineProps(["project"])
const { project } = toRefs(props)

const imgUrlzdc = computed(() => {
  return `background-image: url('https://dwy7y89mziqdl.cloudfront.net/customOnePager/section01/dec/cast/${project.value.coating.coatingColor.colorcode.trim()}_cast01.jpg');background-position-x: 50%;`
})
const imgUrlalu = computed(() => {
  return `background-image: url('https://dwy7y89mziqdl.cloudfront.net/customOnePager/section01/dec/alu/${project.value.coating.coatingColor.colorcode.trim()}_alu01.jpg');background-position-x: 50%;`
})

</script>
