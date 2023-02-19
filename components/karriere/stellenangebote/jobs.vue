<template>
    <!-- blog posts section -->
    <section class="relative mt-24 w-full px-10 md:px-[40px] xl:px-[280px]">
        <h1
            class="absolute left-1 -top-16 md:left-4  xl:left-20 md:-top-36 text-6xl sm:text-[120px] lg:text-[186px] text-amber-400 font-bold">
            Job offers
        </h1>
        <div class="pt-24">
            <div v-if="jobOffers">
                <div v-for="jobOffer in jobOffers" class="space-y-4 hover:bg-amber-400 cursor-pointer py-10">
                    <nuxt-link :to="'/stellenangebot/' + jobOffer.urlDe">
                        <p class="text-gray-500">{{ jobOffer.date }} - {{ jobOffer.company }}</p>
                        <h3 class="text-3xl font-semibold">
                            {{ jobOffer.teaserTitle }}
                        </h3>
                        <p class="text-gray-500">
                            {{ jobOffer.teaserSubline }}
                        </p>
                    </nuxt-link>
                </div>
                <hr class="" />
            </div>
            <button
                class="items-center px-7 py-3 mt-20 mb-32 bg-black text-gray-300 font-medium rounded-full capitalize hidden md:inline-flex">
                weitere Stellenangebote
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                            clip-rule="evenodd" />
                    </svg>
                </span>
            </button>
        </div>
    </section>
</template>

<script setup>
const { httpGet } = useHTTPService();
const jobOffers = ref(null)

const response = await httpGet(
    'https://data.mongodb-api.com/app/dxp-fupgl/endpoint/jobOfferWeb'
);
jobOffers.value = response.success ? response.data : null

</script>
