<script setup>
const awardsData = [
    {
        year: 2003,
        image: 'https://dev.utom.berlin/assets/img/root/rewards/logo-2.png',
        awards: [
            {
                title: 'Double Platinum Record Bundesverband Musikindustrie',
                category: 'Production'
            }
        ]
    },
    {
        year: 1996,
        image: 'https://dev.utom.berlin/assets/img/root/rewards/logo-3.png',
        awards: [
            {
                title: 'Platinum Record Bundesverband Musikindustrie',
                category: 'Artist, Production, Author'
            },
            {
                title: 'Gold Record Bundesverband Musikindustrie',
                category: 'Artist, Production, Author'
            }
        ]
    }
]
</script>

<template>
    <div class="bg-white">
        <div class="max-w-screen-xl mx-auto px-3 xl:px-0 py-16 md:py-32 lg:h-screen grid place-items-center">
            <div class="flex flex-col lg:flex-row lg:space-x-28 xl:space-x-36 space-y-2 lg:space-y-0 w-full">
                <h1 class="text-[3.3rem] md:text-6xl xl:text-[5rem] font-bold leading-none lg:mt-10">My <br> Awards</h1>

                <section class="flex-1">
                    <div v-for="(data, index) in awardsData" :key="index"
                        class="flex flex-col md:flex-row py-8 md:py-12 border-b-2 last:border-0 border-black">
                        <div class="md:w-[13.8rem] flex flex-col md:flex-row">
                            <p class="text-[#999999]">{{ data.year }}</p>
                            <img class="w-28 object-contain object-top mt-10 md:mt-0 md:ml-16" :src="data.image" alt="">
                        </div>

                        <div class="flex-1 md:ml-16 xl:ml-32 mt-5">
                            <div v-for="(award, index) in data.awards" :key="index" class="mb-8 last:mb-0">
                                <div class="flex items-center justify-between">
                                    <a href="/" class="text-xl md:text-2xl font-semibold hover:text-[#FA4529] md:w-[23rem]">
                                        {{ award.title }}
                                    </a>
                                    <a class="hidden xl:inline text-[#666666] hover:text-[#FA4529] text-sm uppercase"
                                        href="/">see project</a>
                                </div>
                                <p class="text-lg text-[#666666] mt-2">{{ award.category }}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>