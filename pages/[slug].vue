<template>
  <div>
    <template v-if="entityData">
        <template v-for="element in entityData?.webpage?.data">
            <component :is="'blogDynamicLayout' + capitalizeFirstLetter(element.sectionId)"
                :contents="element.contents" :entityData="entityData" />
        </template>
    </template>
  </div>
</template>

<script setup>
const route = useRoute()
const { httpGet } = useHTTPService();
const { capitalizeFirstLetter } = useHelperFunctions();
const entityData = ref(null)

httpGet(
    `https://data.mongodb-api.com/app/dxp-fupgl/endpoint/blog?url=${route.params.slug}`
).then((data) => {
    entityData.value = data.success ? data.data : null
}).catch(error => console.log(error.data))

</script>
