<template>
  <copS10xtraFun-s10-qs v-if="project.generalProjectCategory == 'FU'" :is="component" :project="project"/>
</template>

<script setup>
const props = defineProps(["project"])
const { project } = toRefs(props)
</script>
