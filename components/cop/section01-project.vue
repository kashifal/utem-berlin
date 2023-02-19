<template>
      <copS01projectDec-s1 v-if="project.generalProjectCategory == 'DE'" :is="component" :project="project"/>
      <copS01projectFun-s1 v-if="project.generalProjectCategory == 'FU'" :is="component" :project="project"/>
<!--      <copS01projectFun-s1ls v-if="project.generalProjectCategory == 'FU'" :is="component" :project="project"/>-->

      <copS01projectMob-s1 v-if="project.generalProjectCategory == 'MO'" :is="component" :project="project"/>
      <copS01projectArc-s1 v-if="project.generalProjectCategory == 'AR'" :is="component" :project="project"/>
</template>

<script setup>
const props = defineProps(["project"])
const { project } = toRefs(props)
</script>
