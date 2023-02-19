<template>

    <div v-if="project.coating.coatingColor.colorsystem=='RAL'" class="relative w-full h-[90vh] bg-cover bg-center" v-bind:style="imgUrlRal">
      <div class="grid place-items-center h-full">
        <div class="text-white font-bold text-4xl xl:text-5xl 2xl:text-6xl">
          <div v-if="project.generalProjectType == 'VA'" class="">Versuchsauftrag {{project.generalProjectNumber}}</div>
          <div v-if="project.generalProjectType == 'BE'" class="">Beschichtungsempfehlung {{project.generalProjectNumber}}</div>
        </div>
      </div>
    </div>
    <div v-if="project.coating.coatingColor.colorsystem=='xal'" class="relative w-full h-[90vh] bg-cover bg-center" v-bind:style="imgUrlXal">
      <div class="grid place-items-center h-full">
        <div class="text-white font-bold text-2xl xl:text-6xl">
          <div v-if="project.generalProjectType == 'VA'" class="">Versuchsauftrag {{project.generalProjectNumber}}</div>
          <div v-if="project.generalProjectType == 'BE'" class="">Beschichtungsempfehlung<br>{{project.generalProjectNumber}}</div>
        </div>
      </div>
    </div>


</template>

<script setup>
import {useMq } from "vue3-mq"
const $mq = useMq();

const props = defineProps(["project"])
const { project } = toRefs(props)

const imgUrlRal = computed(() => {
    return `background-image: url('https://dwy7y89mziqdl.cloudfront.net/customOnePager/section01/arc/fascade04/${project.value.coating.coatingColor.colorcode.trim()}_fascade04.jpg');background-position-x: 50%;`
})
const imgUrlXal = computed(() => {
    return `background-image: url('https://dwy7y89mziqdl.cloudfront.net/customOnePager/section01/arc/fascade04/${project.value.coating.coatingColor.colorcode.trim()}_xal_fascade01.jpg');background-position-x: 50%;`
})

</script>

