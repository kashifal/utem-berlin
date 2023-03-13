<template>
  <div class="max-w-[1550px] mx-auto mt-16 px-6 md:px-4 grid grid-cols-1 gap-8 md:grid-cols-12">
    <div class="col-span-12 md:col-span-4 pt-4">
      <div class>
        <p class="text-sm text-slate-400">ADDRESS</p>
        <h1 class="pt-4 text-xl tracking-wide text-slate-700 medium">
          Alt-Stralau
          <br />10245 Berlin
          <br />Germany
        </h1>
      </div>
      <div class="py-6"></div>
      <div class>
        <p class="text-sm text-slate-400">EMAIL</p>
        <h1 class="pt-4 text-xl tracking-wide text-slate-700 medium">
          hello@utom.berlin
          <br />dom@utom.de
        </h1>
      </div>
      <div class="py-6"></div>
      <div class>
        <p class="text-sm text-slate-400">PHONE</p>
        <h1 class="pt-4 text-xl tracking-wide text-slate-700 medium">+4915114966080</h1>
      </div>
    </div>
    <div class="col-span-12 md:col-span-8 pt-4">
      <p class="text-sm text-slate-400">TELL US ABOUT YOUR PROJECT AND GOALS.</p>
      <form class="mt-8" id="#estimate-form ">
        <div class="block relative">
          <label for="name" class="block text-2xl label relative">What is your name?</label>
          <input
            type="text"
            class="block mt-3 w-full border-b text-4xl py-3 font-semibold border-slate-300 outline-0 focus:outline-0 focus:ring-none focus:border-gray-600 transition-all"
            name="name"
          />
        </div>
        <div class="block relative mt-10">
          <label for="name" class="block label_1 text-2xl">What’s the name of your organization?</label>
          <input
            type="text"
            class="block mt-3 w-full border-b text-4xl py-3 font-semibold border-slate-300 outline-0 focus:outline-0 focus:ring-none focus:border-gray-600 transition-all"
            name="name"
          />
        </div>
        <div class="block relative mt-10">
          <label for="name" class="block text-2xl label_2">What’s your email address?</label>
          <input
            type="text"
            class="block mt-3 w-full border-b text-4xl py-3 font-semibold border-slate-300 outline-0 focus:outline-0 focus:ring-none focus:border-gray-600 transition-all"
            name="name"
          />
        </div>
        <div class="block relative mt-10">
          <label
            for="name"
            class="block text-2xl label_3"
          >Tell us about your project goals in a snapshot?</label>
          <input
            type="text"
            class="block mt-3 w-full border-b text-4xl py-3 font-semibold border-slate-300 outline-0 focus:outline-0 focus:ring-none focus:border-gray-600 transition-all"
            name="name"
          />
        </div>
        <div class="block relative mt-10">
          <label for="name" class="block text-2xl label_4">Do you have a timeline in mind?</label>
          <input
            type="text"
            class="block input-field mt-3 w-full border-b text-4xl py-3 font-semibold border-slate-300 focus:outline-0 focus:ring-none outline-0 focus:border-gray-600 transition-all"
            name="name"
          />
        </div>
        <div class="block relative mt-10">
          <label for="name" class="block text-2xl label_5">What have you budgeted for this project?</label>
          <select
            type="text"
            class="block mt-3 w-full border-b text-4xl py-3 font-semibold border-slate-300 outline-0 focus:outline-0 focus:ring-none focus:border-gray-600 transition-all"
            name="name"
          >
            <option>$300, and under</option>
            <option>$100-$200</option>
            <option>$200-$500</option>
            <option>$500-$1000</option>
          </select>
        </div>
        <div class="flex items-center mt-14">
          <label for="checkbox" class="flex items-center">
            <input type="checkbox" id="checkbox" class="custom-checkbox" />
            <span
              class="ml-5 text-gray-700 md:text-sm text-xs font-medium"
            >I agree to receive occasional MoonexLabs newsletters containing news & advice on creating personal and business progress via digital tech.</span>
          </label>
        </div>

        <div class="mt-20">
          <button
            class="py-3 text-6xl font-bold hover:text-[#fa4529] cursor-pointer transition-all duration-300"
          >
            Submit
            <Icon class="inline-flex" icon="material-symbols:arrow-outward-rounded" />
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>

<style  scoped>
.label::before {
  position: absolute;
  left: 0%;
  top: 0%;
  content: "01";
  width: 5%;
  height: 100%;
  font-size: 14px;
  color: #999999;
  transform: translateX(-100%);
}
.label_1::before {
  position: absolute;
  left: 0%;
  top: 0%;
  content: "02";
  width: 5%;
  height: 100%;
  font-size: 14px;
  color: #999999;
  transform: translateX(-100%);
}
.label_2::before {
  position: absolute;
  left: 0%;
  top: 0%;
  content: "03";
  width: 5%;
  height: 100%;
  font-size: 14px;
  color: #999999;
  transform: translateX(-100%);
}
.label_3::before {
  position: absolute;
  left: 0%;
  top: 0%;
  content: "04";
  width: 5%;
  height: 100%;
  font-size: 14px;
  color: #999999;
  transform: translateX(-100%);
}
.label_4::before {
  position: absolute;
  left: 0%;
  top: 0%;
  content: "05";
  width: 5%;
  height: 100%;
  font-size: 14px;
  color: #999999;
  transform: translateX(-100%);
}
.label_5::before {
  position: absolute;
  left: 0%;
  top: 0%;
  content: "06";
  width: 5%;
  height: 100%;
  font-size: 14px;
  color: #999999;
  transform: translateX(-100%);
}
.label_6::before {
  position: absolute;
  left: 0%;
  top: 0%;
  content: "07";
  width: 5%;
  height: 100%;
  font-size: 14px;
  color: #999999;
  transform: translateX(-100%);
}
.label_6::before {
  position: absolute;
  left: 0%;
  top: 0%;
  content: "02";
  width: 5%;
  height: 100%;
  font-size: 14px;
  color: #999999;
  transform: translateX(-100%);
}

@media all and (max-width: 768px) {
  .label::before {
    content: "";
  }
  .label_1::before {
    content: "";
  }
  .label_2::before {
    content: "";
  }
  .label_3::before {
    content: "";
  }
  .label_4::before {
    content: "";
  }
  .label_5::before {
    content: "06";
  }
  .label_6::before {
    content: "";
  }
  .label_6::before {
    content: "02";
  }
}
</style>