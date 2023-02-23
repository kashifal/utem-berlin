<script setup>
const approaches = [
    {
        index: "one",
        title: 'Research',
    },
    {
        index: "two",
        title: 'Concept',
    },
    {
        index: "three",
        title: 'Development',
    },
    {
        index: "four",
        title: 'Test',
    },
    {
        index: "five",
        title: 'Hand over',
    },
]
</script>

<template>
    <div class="bg-[#E74134]">
        <div class="max-w-screen-xl mx-auto px-3 xl:px-0 pt-16 md:pt-32 pb-20 md:pb-44">
            <h1 class="text-[3.3rem] md:text-6xl xl:text-[5rem] font-bold leading-none">
                My <br class="md:hidden"> Approach
            </h1>
            <div class="mt-16 md:mt-28 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-14 gap-y-44">
                <div v-for="approach in approaches" :key="approach.index" class="pt-14 border-t-2 border-black">
                    <p class="text-lg md:text-xl font-medium uppercase">{{ approach.index }}</p>
                    <h2 class="text-white text-[2.8rem] md:text-6xl font-semibold capitalize mt-1">{{ approach.title }}</h2>
                    <p class="md:text-lg mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur vel
                        quidem omnis recusandae aperiam sunt pariatur consequuntur iste repellat porro.Consectetur vel
                        quidem omnis recusandae aperiam sunt pariatur consequuntur!
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>