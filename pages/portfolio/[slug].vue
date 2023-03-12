<template>
  <div class="mt-32">
    <div class="max-w-[1550px] mx-auto pt-40 px-6 md:px-4">
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

    <!-- section 2 -->
    <div class="max-w-[1550px] overflow-hidden mx-auto pt-40 px-6 md:px-4">
      <div class="w-full h-auto overflow-hidden rounded">
        <nuxt-link to="#">
          <img
            src="~/assets/content-image-1.png"
            alt
            class="w-full transition-all duration-1000 ease-out hover:ease-in hover:scale-105 margin-fleche"
          />
        </nuxt-link>
      </div>
    </div>

    <!-- section 3 -->
    <div class="max-w-7xl px-6 md:px-4 mx-auto border-b md:pt-40 pt-20 pb-24 border-slate-200">
      <h1
        class="normal text-xl md:text-2xl text-slate-900 md:leading-[48px] leading-[34px]"
      >Lewis Studio Website is a startup that aims to supply energy (starting with gas) to domestic household acrossthe UK. Create a very simple yet stunning logotype and promo site that sets the brand of Entice Energy apart from the competitors like a fresh take on an already saturated area.</h1>
    </div>

    <!-- section 4 -->
    <div class="max-w-7xl px-6 md:px-4 mx-auto pt-28 pb-20 border-slate-200">
      <h1 class="text-5xl pb-8 tracking-wide">Challenge</h1>
      <p
        class="normal text-xl md:text-2xl text-slate-600 tracking-wide md:leading-[48px]"
      >Create an unconventional yet user-friendly website – innovative, with a clean and simple design that communicates brand values and showcases multi-media content. Site that spreads the message: "Islamic stories your child will love"</p>

      <div class="py-4"></div>
      <ul class="list-disc">
        <li>
          <p
            class="text-slate-600 leading-loose ml-6"
          >Develop easy-to-find and easy-to-navigate mobile friendly website</p>
        </li>
        <li>
          <p
            class="text-slate-600 leading-loose ml-6"
          >Showcase each type of content: interactive books, animated stories and picture books, audio stories. Create an experience people want to share with others</p>
        </li>
        <li>
          <p class="text-slate-600 leading-loose ml-6">Persuade to download app and subscribe</p>
        </li>
      </ul>
    </div>

    <!-- Section 5 -->

    <div
      class="max-w-7xl px-6  md:px-4 mx-auto rounded mt-8 flex items-center justify-center"
    >
      <div
        class="flex items-center px-2 justify-center border pb-20 pt-20 border-slate-200 h-full w-full"
      >
        <div class="w-[100%] md:w-[70%]">
          <div class="w-full h-auto py-4 flex items-center justify-between">
            <div class="flex items-center">
              <div class="h-14 rounded-full overflow-hidden w-14">
                <img
                  class="object-cover"
                  src="https://images.unsplash.com/photo-1590086782957-93c06ef21604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                  alt
                />
              </div>
              <div class="ml-4">
                <h1 class="md:text-base text-sm">Thiago Alcantara</h1>
                <p>
                  <nuxt-link to="#" class="hover:text-sky-400 transition-all">@thiago.lfc</nuxt-link>- 15 Dec, 2022
                </p>
              </div>
            </div>

            <div class>
              <Icon icon="mdi:twitter" class="md:text-4xl text-2xl text-sky-400" />
            </div>
          </div>
          <div class="py-6"></div>
          <div class>
            <h1
              class="md:text-2xl text-xl text-left normal leading-[40px]"
            >The team at @moonexlabs is incredibly dedicated, knowledgeable, and helpful. The finished product was beautiful, and worth every penny. I would absolutely recommend Moonex Labs.</h1>
          </div>
        </div>
      </div>
    </div>

    <!-- section 6 -->
    <div class="max-w-7xl px-6 md:px-4 mx-auto pt-28 pb-20 border-slate-200">
      <h1 class="text-5xl pb-8 tracking-wide">Solution</h1>
      <p
        class="normal text-xl md:text-2xl text-slate-600 tracking-wide md:leading-[48px]"
      >Our approach was to present the site as a visual editorial platform with quarterly features based on events and occasions the brand was focused on. Each quarterly focus would be marked by the hero and custom tags that filter content.</p>

      <div class="py-8"></div>
      <div class="grid grid-cols-12 gap-10 w-full">
        <div class="md:col-span-6 col-span-10">
          <div class="w-full h-auto overflow-hidden rounded">
            <nuxt-link to="#">
              <img
                src="~/assets/content-image-2.png"
                alt
                class="w-full transition-all duration-1000 ease-out hover:ease-in hover:scale-105 margin-fleche"
              />
            </nuxt-link>
          </div>
        </div>
        <div class="md:col-span-6 col-span-10">
          <div class="w-full h-auto overflow-hidden rounded">
            <nuxt-link to="#">
              <img
                src="~/assets/content-image-3.png"
                alt
                class="w-full transition-all duration-1000 ease-out hover:ease-in hover:scale-105 margin-fleche"
              />
            </nuxt-link>
          </div>
        </div>
        <div class="col-span-10 md:col-span-12">
          <div class="w-full h-auto overflow-hidden rounded">
            <nuxt-link to="#">
              <img
                src="~/assets/content-image-4.png"
                alt
                class="w-full transition-all duration-1000 ease-out hover:ease-in hover:scale-105 margin-fleche"
              />
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <!-- section 6 -->
    <div class="max-w-7xl px-6 md:px-4 mx-auto pt-28 pb-20 border-slate-200">
    <p class="text-xl text-slate-400">NEXT PROJECT</p>
      <nuxt-link to="#">
      <h1 class="text-7xl  relative inline-flex z-50 overflow-hidden  mytext tracking-wide mt-8">SPA Brand</h1>
      </nuxt-link>
     
      <div class="py-8"></div>
       
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