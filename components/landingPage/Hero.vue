

<template>
    <div class="bg-[#FA4529]">

        <div class="max-w-screen-xl mx-auto pt-10 pb-56 px-3">
            <h1 class="text-white text-2xl leading-none md:text-7xl font-semibold">B2B MARKETING. <br>DIGITAL SALES.
                <br>PLATFORM DEVELOPMENT.
            </h1>

            <section class="mt-16 lg:mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
                <div v-for="(_, index) in Array(3)" :key="index" class="w-full h-[22rem] relative overflow-hidden group">
                    <video poster="" src='@/assets/office.mp4' type="video/mp4" autoplay loop muted playsinline
                        class="h-full w-full object-cover" />
                    <div
                        class="absolute  lg:bottom-[-100%] group-hover:bottom-0 transition-all ease-in duration-[0.3s]  border-2 border-black bg-white w-full h-full p-5 flex flex-col justify-between">
                        <div class="space-y-3">
                            <p class="font-bold">COMPETENCE</p>
                            <h1 class="text-3xl font-bold hover:text-[#E03F32]"><a href="/">MARKETING.MEDIA</a></h1>
                        </div>
                        <div class="w-20">
                            <button class="font-bold hover:text-[#E03F32]">CONTINUE</button>
                        </div>
                    </div>
                </div>
            </section>

            <section class="border-b-2 border-black h-10  pb-28 md:pb-96"></section>
            <p class="text-white text-[2.5rem] text-left font-normal m-[0,0,1.875rem] pt-10 pb-24">It´s my pleasure to help
                clients suceed by creating identities, digital experiences, and printmaterials that communicate clearly,
                achieve
                marketing goals & look fantastic Lorem uispum dolor sit amert tunoer poea opefse ceefo goipully.</p>
            <button class="text-white text-lg font-semibold bg-[#E03F32]  px-10 py-4">
                <a href="/">Learn More</a>
            </button>
        </div>
    </div>
</template>

