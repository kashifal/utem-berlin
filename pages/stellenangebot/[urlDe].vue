<template>
    <div class="flex">
        <div class="w-[85vw] overflow-hidden">
            <template v-if="entityData">
                <template v-for="element in entityData?.webpage?.data">
                    <component :is="'karriereStellenangebotDynamicLayout' + capitalizeFirstLetter(element.sectionId)"
                        :contents="element.contents" :entityData="entityData" />
                </template>
            </template>
            <!-- <karriereStellenangebotHero :jobOffer="jobOffer" />
            <karriereStellenangebotTopbar :jobOffer="jobOffer" />
            <karriereStellenangebotJoboffer :jobOffer="jobOffer" />
            <GlobalsFooter /> -->
        </div>
        <sidebar class="md:block hidden h-screen sticky top-0 z-50 w-[280px] space border-l border-gray-300">
            <karriereStellenangebotSidebar :entityData="entityData" />
        </sidebar>
    </div>
</template>

<!-- <script>
export default {
    props: ["contents", "jobOffer"],
};
</script>-->

<script setup>
const route = useRoute()
const { httpGet } = useHTTPService();
const { capitalizeFirstLetter } = useHelperFunctions();
const entityData = ref(null)

httpGet(
    `https://data.mongodb-api.com/app/dxp-fupgl/endpoint/jobOfferByID?urlDe=${route.params.urlDe}`
).then((data) => {
    entityData.value = data.success ? data.data : null
}).catch(error => console.log(error.data))

</script>
