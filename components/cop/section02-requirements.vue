<template>
      <copS02requirementsDec-s2 v-if="project.generalProjectCategory == 'DE'" :is="component" :project="project"/>
      <copS02requirementsFun-s2 v-if="project.generalProjectCategory == 'FU'" :is="component" :project="project"/>
      <copS02requirementsMob-s2 v-if="project.generalProjectCategory == 'MO'" :is="component" :project="project"/>
      <copS02requirementsArc-s2 v-if="project.generalProjectCategory == 'AR'" :is="component" :project="project"/>
</template>

<script setup>
const props = defineProps(["project"])
const { project } = toRefs(props)
</script>
