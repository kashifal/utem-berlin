<template>
    <div class="max-w-[1550px] mx-auto mt-64 px-4">
      <div class="w-full h-auto grid grid-cols-12 gap-y-12">
        <div class="col-span-12 lg:col-span-6">
          <h1 class="lg:text-[5rem] md:text-[4rem] text-[3rem] leading-tight font-bold">
            Let's get you an
            <br />estimate
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