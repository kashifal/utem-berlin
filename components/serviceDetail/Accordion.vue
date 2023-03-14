<template>
  <div class="w-full pt-8 px-2 lg:px-0">
    <div
      class="mx-auto w-full lg:max-w-md max-w-full border-gray-300 border-b pb-6"
      v-for="(item,index) in data"
      :key="index"
      :class="index === 4 ? 'border-transparent' : ''"
    >
      <Disclosure v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between pb-2 py-2 text-left text-lg semi focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        >
          <h1 :class="open ? 'text-[#fa4529]' : ''">{{item.title}}</h1>
          <ChevronUpIcon
            :class="open ? 'text-[#fa4529]' : 'rotate-180 transform '"
            class="h-8 w-8 text-gray-700"
          />
          <!-- [#fa4529] -->
        </DisclosureButton>
        <transition
          enter-active-class="transition duration-300 ease-out ease-in"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-300 ease-out ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <DisclosurePanel class="py-4 text-md text-gray-600">{{item.desc}}</DisclosurePanel>
        </transition>
      </Disclosure>
    </div>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronUpIcon } from "@heroicons/vue/20/solid";

const data = [
  {
    title: "How much does website cost?",
    desc: "Alienum phaedrum torquatos nec eu, detr periculis ex, nihil expe ndismei. Meian pericula euripidis hinc partem eiest. Eos ei nisl graecis, vixisester aperiri con sequat an. Eius lorem.]",
  },
  {
    title: "How about payment?",
    desc: "Alienum phaedrum torquatos nec eu, detr periculis ex, nihil expe ndismei. Meian pericula euripidis hinc partem eiest. Eos ei nisl graecis, vixisester aperiri con sequat an. Eius lorem.]",
  },
  {
    title: "How long support that i get?",
    desc: "Alienum phaedrum torquatos nec eu, detr periculis ex, nihil expe ndismei. Meian pericula euripidis hinc partem eiest. Eos ei nisl graecis, vixisester aperiri con sequat an. Eius lorem.]",
  },
  {
    title: "If i not satify with your service, can i get a refund?",
    desc: "Alienum phaedrum torquatos nec eu, detr periculis ex, nihil expe ndismei. Meian pericula euripidis hinc partem eiest. Eos ei nisl graecis, vixisester aperiri con sequat an. Eius lorem.]",
  },
  {
    title: "Do you provide NDA Agreement?",
    desc: "Alienum phaedrum torquatos nec eu, detr periculis ex, nihil expe ndismei. Meian pericula euripidis hinc partem eiest. Eos ei nisl graecis, vixisester aperiri con sequat an. Eius lorem.]",
  },
];
</script>


