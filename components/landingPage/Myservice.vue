

<template>
    <div class="bg-white mt-32">
        <div
            class="max-w-screen-xl mx-auto flex flex-col lg:flex-row px-4 lg:px-0 justify-between space-y-16 lg:space-y-0 space-x-0 lg:space-x-24">
            <div class="space-y-10 w-full  lg:w-[45%]">
                <h1 class="text-6xl md:text-[5rem] leading-none font-bold">My <br> Services</h1>
                <p class="text-xl text-left text-black/60 ">We help ambitious businesses like yours generate more profits by
                    building
                    awareness, driving web traffic, connecting with customers and growing overall sales.</p>
            </div>
            <div class="w-full">
                <a href="/"
                    class="group flex flex-col lg:flex-row justify-between border-t-2  border-black hover:bg-gray-100 py-14 px-12 space-y-5 lg:space-y-0 "
                    v-for="(_, index) in Array(6)" :key="index">
                    <img src="@/assets/box-svgrepo-com.svg" class="w-16 h-16" alt="">
                    <h5 class="text-2xl font-bold">BRAND <br> CONSULTANT</h5>
                    <p class="text-left w-full lg:w-52 text-black/60">We build and activate brands throung cultural insight
                        & strategic vision.
                    </p>
                    <a href="/" class="hidden xl:flex ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                            class="w-12 h-12 group-hover:stroke-[#ff4437] group-hover:translate-x-1 group-hover:transition-all group-hover:duration-[0.6s]"
                            viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </a>
                </a>
            </div>
        </div>
    </div>
</template>