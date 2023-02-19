<template>
    <div v-if="sampleProject._id" class="flex">
        <main class="w-full overflow-hidden">
            <copSection00-hero :project="sampleProject" />
            <copSection01-project :project="sampleProject" />
            <copSection02-requirements :project="sampleProject" />
            <copSection03-coatingproduct :project="sampleProject" />
            <copSection04-coatingproductgeneral :project="sampleProject" />
            <copSection05-coatingproductproduction :project="sampleProject" />
            <copSection06-corrosionproduct :project="sampleProject" />
            <copSection07-corrosionproductgeneral :project="sampleProject" />
            <copSection08-corrosionproductproduction :project="sampleProject" />
            <copSection09-services :project="sampleProject" />
            <copSection10-xtra :project="sampleProject" />
            <copSection11-download :project="sampleProject" />
            <GlobalsFooter />
        </main>
        <aside
            class="md:block hidden h-screen sticky top-0 z-50 w-[280px] space border-l border-gray-300">
            <copSidebar-Fu-Manual v-if="sampleProject.generalProjectCategory == 'FU' && sampleProject.generalCreationSource == 'manual'" :project="sampleProject" />
            <copSidebar-Fu-Auto v-if="sampleProject.generalProjectCategory == 'FU' && sampleProject.generalCreationSource == 'auto'" :project="sampleProject" />
            <copSidebar-De-Auto v-if="sampleProject.generalProjectCategory == 'DE'" :project="sampleProject" />

            <copSidebar-Ar-Manual v-if="sampleProject.generalProjectCategory == 'AR'"  :project="sampleProject" />
        </aside>

    </div>
</template>

<script setup>
const config = useRuntimeConfig()
const linkword = ref("")

const sampleProject = ref({})
const route = useRoute()

linkword.value = route.params.linkword

console.log('config.API_URL', config.public.API_URL)

$fetch(`${config.public.API_URL}linkwordSampleProject`, {
    method: 'POST',
    body: { linkword: linkword.value }
}).then(data => {
    sampleProject.value = data.item
}).catch(error => console.log(error.data))


</script>
