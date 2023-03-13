<template>
  <div class="bg-white py-16">
    <div class="mx-auto max-w-7xl px-4 md:px-6">
      <div
        class="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-4 md:max-w-2xl md:grid-cols-2 lg:max-w-3xl xl:mx-0 xl:max-w-none xl:grid-cols-3"
      >
        <div
          v-for="item in card_data"
          :key="item.plan"
          class="p-6 ring-1 min-h-[700px] relative group ring-gray-600 hover:bg-[#fa4529] -z-10 hover:ring-[#fa4529] transition-all duration-300"
        >
          <div class="flex items-center justify-between">
            <h3
              id="tier-hobby"
              class="text-md font-light leading-8 text-slate-500 group-hover:text-white"
            >{{item.plan}} PLAN</h3>
            <p v-if="item.popular" class="px-2 py-2 text-xs text-white bg-red-600">Popular</p>
          </div>
          <p class="mt-6 relative flex items-baseline gap-x-1">
            <!-- Price, update based on frequency toggle state -->
            <span class="text-5xl font-bold tracking-tight text-[#669900] group-hover:text-white">
              <span class="text-3xl absolute top-0 font-medium">$</span>
              <span class="ml-6">{{item.price}}</span>
            </span>
            <!-- Payment frequency, update based on frequency toggle state -->
            <span class="text-md font-normal leading-6 text-gray-600 group-hover:text-white">/ MONTH</span>
          </p>
          <p
            class="mt-4 text-sm leading-6 group-hover:text-white group-hover:border-white border-b border-gray-700 pb-8 text-gray-600 mt-8"
          >10% taxed will include after make price</p>
          <div class="py-8"></div>
          <p
            v-for="(include,index) in item.included"
            :key="index"
            class="text-lg pb-4 pt-4 group-hover:text-white leading-6 group-hover:border-white border-b border-gray-700 text-gray-900"
          >{{include}}</p>

          <nuxt-link
            href="#"
            aria-describedby="tier-hobby"
            class="block bottom-10 w-[88%] absolute transition-all duration-300 btn text-white hover:-translate-y-1 hover:bg-black group-hover:bg-white group-hover:ring-white z-10 group-hover:text-gray-900 py-5 px-4 text-center text-lg bg-[#fa4529] font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e03d24] hover:text-white hover:text-white"
          >Start My Project Now</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const card_data = [
  {
    plan: "BASIC",
    popular: false,
    price: 49,
    included: ["Full Design & Development", "Installation"],
  },
  {
    plan: "PREMIUM",
    popular: true,
    price: 69,
    included: ["Full Design & Development", "Installation", "Support Lifetime"],
  },
  {
    plan: "ULTIMATE",
    popular: false,
    price: 99,
    included: [
      "Full Design & Development",
      "Installation",
      "Support Lifetime",
      "SEO/Marketing Include",
    ],
  },
];
</script>

<style  scoped>
.btn:hover {
  background-color: #e03d24;
  color: white;
}
</style>