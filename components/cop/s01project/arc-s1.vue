<template>
  <section id="projectdescription" class="text-3xl text-black m-8 h-[70vh]">
    section 01 AR project
  </section>

</template>


<script setup>
import {useMq } from "vue3-mq"
const $mq = useMq();

const props = defineProps(["project"])
const { project } = toRefs(props)

</script>
