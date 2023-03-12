<template>
    <div class="max-w-[1550px] mx-auto mt-64 px-6 md:px-4">
      <div class="w-full h-auto grid grid-cols-12 gap-y-12">
        <div class="col-span-12 lg:col-span-6">
          <h1 class="lg:text-[5rem] md:text-[4rem] text-[3rem] leading-tight font-bold">
            Lewis Studio
            <br />Website
          </h1>
          <div class="py-8"></div>
          <!-- Social Icons -->
          <div class="flex items-center gap-6 flex-wrap">
            <nuxt-link
              v-for="item in socialicons"
              :key="item.icon"
              :to="item.to"
              class="h-10 w-10 ring-1 transition-all text-slate-600 duration-200 hover:ease-in hover:bg-[#fa4529] hover:text-white transform hover:-translate-y-1 ring-slate-200 hover:ring-[#fa4529] rounded-full flex items-center justify-center"
            >
              <Icon :icon="item.icon" class />
            </nuxt-link>
          </div>
        </div>
        <div class="col-span-12 lg:col-span-3 pt-4">
          <div class>
            <p class="text-sm text-slate-400">CLIENTS</p>
            <h1 class="pt-4 text-xl tracking-wide text-slate-700 medium">
              Paul Themes Company,
              <br />Russia
            </h1>
          </div>
          <div class="py-12"></div>
          <div class>
            <p class="text-sm text-slate-400">SERVICES</p>
            <h1 class="pt-4 text-xl tracking-wide text-slate-700 medium">
              UI/UX, Back-End,
              <br />Front-End, Graphic Design,
              <br />Animation
            </h1>
          </div>
        </div>
        <div class="col-span-12 lg:col-span-3 pt-4">
          <div class>
            <p class="text-sm text-slate-400">TEAM</p>
            <h1 class="pt-4 text-xl tracking-wide text-slate-700 medium">
              LoganCee - UI/UX Designer
              <br />Pavel Suslov - Developer
            </h1>
          </div>
          <div class="py-12"></div>
          <div class>
            <p class="text-sm text-slate-400">DATE</p>
            <h1 class="pt-4 text-xl tracking-wide text-slate-700 medium">Feburary 25th, 2022</h1>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";


const socialicons = [
  {
    icon: "mdi:twitter",
    to: "#",
  },
  {
    icon: "ri:facebook-fill",
    to: "#",
  },
  {
    icon: "ph:instagram-logo",
    to: "#",
  },
  {
    icon: "ph:pinterest-logo-bold",
    to: "#",
  },
];
</script>

<style lang="scss" scoped>

</style>