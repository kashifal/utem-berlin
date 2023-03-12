<template>
     <div class="max-w-7xl px-6 md:px-4 mx-auto rounded mt-8 flex items-center justify-center">
      <div
        class="flex items-center px-6 md:px-4 justify-center border pb-20 pt-20 border-slate-200 h-full w-full"
      >
        <div class="w-[100%] md:w-[70%]">
          <div class="w-full h-auto py-0 flex items-center justify-between">
            <div class="flex items-center">
              <div class="md:h-14 h-8 rounded-full overflow-hidden md:w-14 w-8">
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
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>

<style lang="scss" scoped>

</style>