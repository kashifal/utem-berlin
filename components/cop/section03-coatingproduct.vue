<template>
  <copS03coatingproductFun-s3 v-if="project.generalProjectCategory == 'FU'" :is="component" :project="project"/>
</template>

<script setup>
const props = defineProps(["project"])
const { project } = toRefs(props)
</script>
