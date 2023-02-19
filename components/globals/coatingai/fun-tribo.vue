<template>
  <div v-if="globalPage == 2" class="relative">
    <div class="text-2xl text-white pt-12">
      <div class="font-normal">2 Um was für ein Bauteil handelt es sich?</div>
    </div>
    <div class="flex">
      <div class="grid grid-cols-5 gap-8 pt-6">
        <div @click="selectItem('c2', '1'); $emit('updateStep', steps['werkstoff-steal'])"
          :class="{ 'ring-4 ring-green-500 ring-offset-4 ring-offset-white': selectedGroupItem['c2'] == '1' }" class="">
          <div class="relative">
            <img class="object-fill" src="/img/coatingai/gleitlack1_01.png">
            <div class="absolute top-4 left-6 text-gray-700 text-2xl leading-6">Stahl</div>
          </div>
        </div>

        <div @click="selectItem('c2', '2'); $emit('updateStep', steps['werkstoff-aluminium'])"
          :class="{ 'ring-4 ring-green-500 ring-offset-4 ring-offset-white': selectedGroupItem['c2'] == '2' }" class="">
          <div class="relative">
            <img class="object-fill" src="/img/coatingai/pulver-dekorative1_01.png">
            <div class="absolute top-4 left-6 text-white text-2xl leading-6">Aluminium</div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex">
      <div class="grid grid-cols-5 gap-8 pt-6">
        <div @click="selectItem('c3', '1'); $emit('updateStep', steps['bauteil-bulk'])"
          :class="{ 'ring-4 ring-green-500 ring-offset-4 ring-offset-white': selectedGroupItem['c3'] == '1' }" class="">
          <div class="relative">
            <img class="object-fill" src="/img/coatingai/gleitlack1_01.png">
            <div class="absolute top-4 left-6 text-gray-700 text-2xl leading-6">
              Schüttgut
            </div>
          </div>
        </div>

        <div @click="selectItem('c3', '2'); $emit('updateStep', steps['bauteil-rack'])"
          :class="{ 'ring-4 ring-green-500 ring-offset-4 ring-offset-white': selectedGroupItem['c3'] == '2' }" class="">
          <div class="relative">
            <img class="object-fill" src="/img/coatingai/pulver-dekorative1_01.png">
            <div class="absolute top-4 left-6 text-white text-2xl leading-6">
              Gestellware
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-between mt-8">
      <button @click="$emit('changePage', 1)"
        class="bg-amber-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded mr-6">back</button>
      <button @click="$emit('changePage', 3)"
        class="bg-amber-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded">next</button>
    </div>
  </div>

  <!-- page 3 -->
  <div v-if="globalPage == 3">
    <div class="flex flex-row justify-between ">
      <div class="w-10/12 overflow-hidden h-[616px]">
        <div class="text-2xl text-white pt-12">
          <div class="font-normal">3 Wie ist die Verbauumgebung?</div>
        </div>
        <div class="flex">
          <div class="grid grid-cols-5 gap-8 pt-6">
            <div @click="selectItem('c4', '1'); getCoatingai()"
              :class="{ 'ring-4 ring-green-500 ring-offset-4 ring-offset-black': selectedGroupItem['c4'] == '1' }"
              class="">
              <div class="relative">
                <img class="object-fill" src="/img/coatingai/gleitlack1_01.png">
                <div class="absolute top-4 left-6 text-gray-700 text-2xl leading-6">Umgebung1</div>
              </div>
            </div>

            <div @click="selectItem('c4', '2'); getCoatingai()"
              :class="{ 'ring-4 ring-green-500 ring-offset-4 ring-offset-black': selectedGroupItem['c4'] == '2' }"
              class="">
              <div class="relative">
                <img class="object-fill" src="/img/coatingai/pulver-dekorative1_01.png">
                <div class="absolute top-4 left-6 text-white text-2xl leading-6">Umgebung2</div>
              </div>
            </div>

            <div @click="selectItem('c4', '3'); getCoatingai()"
              :class="{ 'ring-4 ring-green-500 ring-offset-4 ring-offset-black': selectedGroupItem['c4'] == '3' }"
              class="">
              <div class="relative">
                <img class="object-fill" src="/img/coatingai/pulver-dekorative1_01.png">
                <div class="absolute top-4 left-6 text-white text-2xl leading-6">Umgebung3</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <aside class="h-auto w-2/12 border-l border-gray-300 bg-gray-300">
        <section class="w-full hidden bg-white lg:block">
          <div>

          </div>
          <div class="w-full h-[50px] border-b border-gray-400 cursor-pointer">
            <nuxt-link to="/coatingai" class="flex items-center space-x-2">
              <div class="pl-1 fill-amber-500 cursor-pointer">
              </div>
              <div class="text-left font-bold text-[14px] leading-4 py-4">
                <span class="">Beschichtungsempfehlungen</span>
              </div>
            </nuxt-link>
          </div>

          <div v-if="coatingai" class="">
            <nuxt-link :to="coatingai.url" class="pb-2">
              <div class="border-b border-gray-500 text-black hover:text-white hover:bg-yellow-500 pt-4 cursor-pointer">
                <div class="text-left  hover:text-white font-bold text-[14px] leading-4 pb-2 pl-2">
                  <span class="">{{ coatingai.shortlink.linkword }}</span>
                </div>
                <div class="flex flex-row text-left text-[14px] leading-4 pb-4 pl-2">
                  <span class="w-9/12 pt-4">{{ coatingai.generalProjectNumber }}</span>
                  <div class="w-3/12">
                    <img class="w-[66%] object-right" src="/img/demo/circular-progress-bar01.png" alt="" />
                  </div>
                </div>
              </div>
            </nuxt-link>
          </div>
        </section>
      </aside>
    </div>
    <div class="flex justify-start">
      <button @click="$emit('changePage', 2)"
        class="bg-amber-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded mr-6 mt-4">back</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["globalPage", "selectedGroupItem"])
const { globalPage, selectedGroupItem } = toRefs(props)

const steps = {
  "werkstoff-steal": {
    "step2": {
      "image": "/img/coatingai/werkstoff_stahl_01.jpg",
      "text1": "Stahl"
    },
  },
  "werkstoff-aluminium": {
    "step2": {
      "image": "/img/coatingai/werkstoff_alu_01.jpg",
      "text1": "Aluminium"
    },
  },
  "bauteil-bulk": {
    "step2": {
      "text2": "Schüttgut"
    }
  },
  "bauteil-rack": {
    "step2": {
      "text2": "Gestellware"
    }
  }

}

const coatingai = ref(null)
const getCoatingai = async () => {
  const { data } = await useFetch(`https://eu-west-1.aws.data.mongodb-api.com/app/stitch-vueadmin-ire-kgwnt/endpoint/coatingai`,
    {
      method: "POST",
      body: { ...selectedGroupItem.value }
    }
  )
  coatingai.value = data.value.data
  console.log(coatingai.value)
}

const selectItem = (group, value, deselect = true) => {
  if (deselect && selectedGroupItem.value[group] && selectedGroupItem.value[group] == value) {
    delete selectedGroupItem.value[group]
  } else {
    selectedGroupItem.value[group] = value
  }
}
</script>
