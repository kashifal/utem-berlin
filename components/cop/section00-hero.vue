<template>
      <copS00heroDec-s0 v-if="project.generalProjectCategory == 'DE'" :is="component" :project="project"/>
      <copS00heroFun-s0 v-if="project.generalProjectCategory == 'FU'" :is="component" :project="project"/>
      <copS00heroMob-s0 v-if="project.generalProjectCategory == 'MO'" :is="component" :project="project"/>
      <copS00heroArc-s0 v-if="project.generalProjectCategory == 'AR'" :is="component" :project="project"/>
</template>

<script setup>
const props = defineProps(["project"])
const { project } = toRefs(props)
</script>
