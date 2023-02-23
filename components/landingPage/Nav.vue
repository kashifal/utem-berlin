<script setup>
import { ref } from 'vue';

const showSideMenu = ref(false)
</script>

<template>
    <nav class="bg-[#E03F32] px-3 relative">
        <div class="max-w-screen-xl mx-auto flex justify-between border-b-2 border-black py-10 ">
            <a href="/">
                <img class="w-52" src="https://dev.utom.berlin/assets/img/root/dxp_berlin_black.svg" alt="">
            </a>
            <ul class="flex-1 hidden lg:flex space-x-10 ml-40 mt-3">
                <li class="flex flex-col items-center space-y-2">
                    <a class="font-semibold uppercase text-white decoration-white" href="/">home</a>
                    <span class="h-1 w-1 rounded-full bg-white"></span>
                </li>
                <li><a class="font-semibold uppercase" href="/">about</a></li>
                <li><a class="font-semibold uppercase" href="/">blog</a></li>
                <li><a class="font-semibold uppercase" href="/">dxp development</a></li>
            </ul>
            <div class="flex items-center space-x-2 md:space-x-7">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-7 h-7 cursor-pointer">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <svg @click="showSideMenu = !showSideMenu" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-9 h-9 cursor-pointer">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                </svg>
            </div>
        </div>
        <!-- Side menu -->
        <div v-if="showSideMenu" @click.self="showSideMenu = !showSideMenu"
            class="absolute inset-0 z-50 h-screen bg-black/80 grid place-items-end">
            <div class="w-full max-w-[30rem] h-full bg-white flex flex-col p-10">
                <section class="flex items-center justify-between">
                    <div class="flex space-x-5">
                        <a class="text-sm text-[#FA4529] font-semibold uppercase" href="#">eng</a>
                        <a class="text-sm hover:text-[#FA4529] uppercase" href="#">ger</a>
                    </div>
                    <svg @click="showSideMenu = !showSideMenu" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                        class="w-8 h-8 hover:text-[#FA4529] cursor-pointer">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </section>

                <ul class="flex-1 mt-12 text-[26.5px] md:text-3xl font-semibold space-y-8">
                    <li><a class="font-semibold text-[#FA4529]" href="/">Home</a></li>
                    <li><a class="font-semibold hover:text-[#FA4529]" href="/">About</a></li>
                    <li><a class="font-semibold hover:text-[#FA4529]" href="/">Blog</a></li>
                    <li><a class="font-semibold hover:text-[#FA4529]" href="/">dxp development</a></li>
                </ul>

                <section>
                    <p class="text-sm text-[#999999]">© 2022 <span class="text-black">dxp.berlin</span>
                        All Rights Reserved
                    </p>
                    <div class="flex space-x-7 mt-8">
                        <a href="/"
                            class="h-10 w-10 rounded-full border grid place-items-center text-gray-500 hover:text-white hover:bg-[#FA4529] hover:-mt-1 transition-all transform ease-in-out duration-300">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                class="w-4 h-4" viewBox="0 0 24 24">
                                <path
                                    d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                                </path>
                            </svg>
                        </a>
                        <a href="/"
                            class="h-10 w-10 rounded-full border grid place-items-center text-gray-500 hover:text-white hover:bg-[#FA4529] hover:-mt-1 transition-all transform ease-in-out duration-300">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                class="w-4 h-4" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a href="/"
                            class="h-10 w-10 rounded-full border grid place-items-center text-gray-500 hover:text-white hover:bg-[#FA4529] hover:-mt-1 transition-all transform ease-in-out duration-300">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>

                    </div>
                </section>
            </div>
        </div>
    </nav>
</template>