
<template>
    <div class="bg-white">
        <div class="mt-44 mb-32 space-y-24">
            <!-- heading -->
            <div class="flex flex-col md:flex-row justify-between  space-y-10 md:space-y-0 ">
                <div class="flex items-center ">
                    <h1 class="text-[3.75rem] lg:text-[5rem] leading-tight font-extrabold text-black">Latest Works</h1>
                    <a href="/"
                        class="hidden lg:flex self-end mb-3  ml-20 text-black text-lg font-semibold group hover:text-[#ff4437] hover:transition-all hover:duration-[0.6s]  ">ALL
                        PROJECTS
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                class="w-7 h-7 group-hover:stroke-[#ff4437]  group-hover:translate-x-1 group-hover:transition-all  group-hover:duration-[0.6s]"
                                viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </span></a>
                </div>
                <div class="flex flex-row md:flex-col lg:flex-row space-x-5 md:space-x-0 lg:space-x-5 pb-3">
                    <div
                        class="group hover:relative hover:duration-[0.3s] hover:bg-[#ff4437] hover:border-0 hover:cursor-pointer hover:overflow-hidden  border-[1.5px]  border-black/30 w-12 h-12 flex items-center justify-center self-end">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6 stroke-gray-400 group-hover:stroke-white group-hover:absolute group-hover:right-[-20%] group-hover:-translate-x-5  group-hover:transition-all  group-hover:duration-[0.4s] ">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>

                    </div>

                    <div
                        class="group hover:relative hover:duration-[0.3s] hover:bg-[#ff4437] hover:border-0  hover:cursor-pointer border-[1.5px] border-black/30 w-12 h-12 flex items-center justify-center self-end">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6 stroke-gray-400 group-hover:stroke-white group-hover:absolute left-[-20%] group-hover:translate-x-5  group-hover:transition-all  group-hover:duration-[0.4s] ">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
            </div>

            <!-- slider -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-x-14">
                <div class="space-y-10 group ">
                    <div class="box">
                        <img src="https://dev.utom.berlin/assets/img/portfolio/work-1.png"
                            class="image w-full h-full object-cover hover:cursor-pointer grayscale group-hover:grayscale-0 group-hover:transition-all group-hover:duration-[1s]"
                            alt="">
                    </div>
                    <div>
                        <div
                            class="uppercase text-base font-medium mb-3  text-[#666666] group-hover:text-black/75 group-hover:transition-all group-hover:duration-[1s]">
                            UI/UX</div>
                        <h4
                            class="text-3xl font-bold text-[#666666]  hover:cursor-pointer  hover:underline  hover:duration-[1s]  group-hover:text-black group-hover:transition-all group-hover:duration-[1s]">
                            eMobility Landing Page</h4>
                    </div>
                </div>

                <div class="space-y-10 group">
                    <div>
                        <img src="https://dev.utom.berlin/assets/img/portfolio/work-2.png"
                            class="w-full h-full object-cover hover:cursor-pointer  grayscale group-hover:grayscale-0 group-hover:transition-all group-hover:duration-[1s]"
                            alt="">
                    </div>
                    <div>
                        <div
                            class="uppercase text-base font-medium mb-3  text-[#666666] group-hover:text-black/75 group-hover:transition-all group-hover:duration-[1s]">
                            product</div>
                        <h4
                            class="text-3xl font-bold text-[#666666]  hover:cursor-pointer  hover:underline  hover:duration-[1s]  group-hover:text-black group-hover:transition-all group-hover:duration-[1s]">
                            The Battery Show Europe 2021</h4>
                    </div>
                </div>
                <div class="space-y-10 group">
                    <div>
                    <img src="https://dev.utom.berlin/assets/img/portfolio/work-3.png"
                        class="w-full h-full object-cover hover:cursor-pointer  grayscale group-hover:grayscale-0 group-hover:transition-all group-hover:duration-[1s]"
                        alt="">
                </div>
                <div>
                    <div
                        class="uppercase text-base font-medium mb-3  text-[#666666] group-hover:text-black/75 group-hover:transition-all group-hover:duration-[1s]">
                        Branding,Packaging</div>
                    <h4
                        class="text-3xl font-bold text-[#666666]  hover:cursor-pointer  hover:underline  hover:duration-[1s]  group-hover:text-black group-hover:transition-all group-hover:duration-[1s]">
                        Bemusterungstool</h4>
                </div>
            </div>
        </div>
    </div>
</div></template>

<style></style>