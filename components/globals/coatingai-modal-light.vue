<template>
  <div ref="coatingaiModalRef"
    class="z-50 fixed top-0 left-0 w-full h-screen bg-grey-200 transition-all duration-[.7s] ease-in-out transform -translate-y-full overflow-hidden">
    <!-- bg gradient image -->
    <div class="absolute w-full h-full z-0 top-0 left-0 bg-white"></div>

    <div class="w-full z-20">
      <!-- close button -->
      <div @click="$emit('hide-coatingai-modal')"
        class="absolute  top-16 right-16 stroke-black hover:stroke-amber-500 stroke-[1] cursor-pointer origin-center hover:rotate-90 transition ease-in-out">
        <svg width="32px" height="32px" x="0px" y="0px" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;">
          <line class="st0" x1="0" y1="0" x2="32" y2="32" />
          <line class="st0" x1="0" y1="32" x2="32" y2="0" />
        </svg>
      </div>
      <!-- content -->
      <div class="px-32">
        <div class="w-full">
          <div class="relative flex flex-col xl:flex-row 2xl:space-x-24">
            <div class="text-5xl text pt-16">
              <span class="font-normal">IHR COATING TWIN IN 5 SCHRITTEN</span>
              <span class="font-normal text-[16px] pl-4">{{ selectedGroupItem }}</span>
            </div>
          </div>

          <div class="relative w-full h-full pb-24 text-left text-sm text leading-4 ">
            <!-- static step display -->
            <div v-if="selectedSteps" class="flex h-48 xl:space-x-16 pt-6">
              <div v-for="i in 6" :key="i" class="w-40" :style="{ opacity: selectedSteps['step' + i].opacity ? selectedSteps['step' + i].opacity : 1 }">
                <div class="text-center text-white text-xl">{{ i }}</div>
                <div class="w-40 h-[90px] border-dashed border border-gray-500">
                  <Transition name="slide-fade">
                    <img :key="selectedSteps['step' + i].image" :src="selectedSteps['step' + i].image">
                  </Transition>
                </div>
                <div class="pt-2">
                  <Transition name="slide-fade">
                    <span :key="selectedSteps['step' + i]?.text1" v-html="selectedSteps['step' + i]?.text1"></span>
                  </Transition>
                  <br>
                  <Transition name="slide-fade">
                    <span :key="selectedSteps['step' + i]?.text2" v-html="selectedSteps['step' + i].text2"></span>
                  </Transition>
                </div>
                <div>
                  <Transition name="slide-fade">
                    <span :key="selectedSteps['step' + i]?.text3" v-html="selectedSteps['step' + i].text3"> </span>
                  </Transition>
                </div>
                <div></div>
              </div>

              <button @click="resetSteps" class="h-12 bg-gray-400 hover:bg-blue-700 text-white font-bold py-2 px-6 ml-4 mt-12 rounded">reset</button>
            </div>

            <!-- page 0 introduction  -->
            <div v-if="globalPage == 0">
              <div class="text-2xl text-white pt-12">
                <div class="font-normal">Introduction</div>
              </div>
              <!-- row 1 verfahren -->
              <div class="flex">
                <div class="grid grid-cols-1 pt-6">
                  <div class="">
                    <div class="relative">
                      <img class="object-fill" src="/img/coatingai/gleitlack1_01.png">
                    </div>
                  </div>
                </div>
                <button @click="changePage(1)"
                  class="bg-gray-400 hover:bg-amber-500 opacity-60  hover:opacity-100 text-6xl text-white font-bold py-2 px-0 ml-4 mt-6">
                  <svg width="1em" height="1em" viewBox="0 0 20 20">
                    <path fill="currentColor" d="M7 1L5.6 2.5L13 10l-7.4 7.5L7 19l9-9z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <!-- page 1  -->
            <div v-if="globalPage == 1">
              <div class="text-2xl text pt-12">
                <div class="font-normal">1 Welches Beschichtungsverfahren benötigen Sie?</div>
              </div>
              <div class="flex">
                <div class="grid grid-cols-3 gap-8 pt-6">
                  <div @click="selectItem('c1', '1'); updateStep(steps.gleitlack)"
                    :class="{ 'ring-4 ring-green-500 ring-offset-4 ring-offset-white': selectedGroupItem['c1'] == '1' }"
                    class="">
                    <div class="relative">
                      <img class="object-fill" src="/img/coatingai/gleitlack1_01.png">
                      <div class="absolute top-4 left-6 text-gray-700 text-2xl leading-6">Gleitlack<br>Korrosionsschutz
                      </div>
                    </div>
                  </div>

                  <div @click="selectItem('c1', '2'); updateStep(steps.pulver_decorative)"
                    :class="{ 'ring-4 ring-green-500 ring-offset-4 ring-offset-white': selectedGroupItem['c1'] == '2' }"
                    class="">
                    <div class="relative">
                      <img class="object-fill" src="/img/coatingai/pulver-dekorative1_01.png">
                      <div class="absolute top-4 left-6 text-white text-2xl leading-6">Pulverbeschichtung<br>dekorativ
                      </div>
                    </div>
                  </div>

                  <div @click="selectItem('c1', '3'); updateStep(steps.pulver_functional)"
                    :class="{ 'ring-4 ring-green-500 ring-offset-4 ring-offset-white': selectedGroupItem['c1'] == '3' }"
                    class="">
                    <div class="relative">
                      <img class="object-fill" src="/img/coatingai/pulver-functional1_01.png">
                      <div class="absolute top-4 left-6 text-gray-700 text-2xl leading-6">
                        Pulverbeschichtung<br>funktional
                      </div>
                    </div>
                  </div>

                  <div @click="selectItem('c1', '4'); updateStep(steps.pulver_architecture)"
                    :class="{ 'ring-4 ring-green-500 ring-offset-4 ring-offset-white': selectedGroupItem['c1'] == '4' }"
                    class="">
                    <div class="relative">
                      <img class="object-fill" src="/img/coatingai/gleitlack1_01.png">
                      <div class="absolute top-4 left-6 text-gray-700 text-2xl leading-6">
                        Pulverbeschichtung<br>Architektur
                      </div>
                    </div>
                  </div>

                  <div @click="selectItem('c1', '5'); updateStep(steps.ceramheo)"
                    :class="{ 'ring-4 ring-green-500 ring-offset-4 ring-offset-white': selectedGroupItem['c1'] == '5' }"
                    class="">
                    <div class="relative">
                      <img class="object-fill" src="/img/coatingai/pulver-dekorative1_01.png">
                      <div class="absolute top-4 left-6 text-white text-2xl leading-6">
                        Nasslack ceramHEO®<br>schwarz
                      </div>
                    </div>
                  </div>

                  <div @click="selectItem('c1', '6'); updateStep(steps.ecoatheo)"
                    :class="{ 'ring-4 ring-green-500 ring-offset-4 ring-offset-white': selectedGroupItem['c1'] == '6' }"
                    class="">
                    <div class="relative">
                      <img class="object-fill" src="/img/coatingai/pulver-functional1_01.png">
                      <div class="absolute top-4 left-6 text-gray-700 text-2xl leading-6">
                        KTL-Beschichtung ecoatHEO®<br>schwarz
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mt-6 pl-4">
                  <button @click="changePage(2)" class="w-20 h-full bg-gray-400 hover:bg-amber-600 opacity-60 pl-5" :class="selectedGroupItem['c1'] ? 'bg-amber-300 blinky pl-5' : ''">
                  <svg width="2.6em" height="2.6em" viewBox="0 0 20 20">
                    <path fill="currentColor" d="M7 1L5.6 2.5L13 10l-7.4 7.5L7 19l9-9z"></path>
                  </svg>
                </button>
                </div>
              </div>
            </div>
            <!-- page 2 -->
            <div v-if="globalPage == 2 || globalPage == 3">
              <globalsCoatingaiFun-tribo v-if="selectedGroupItem['c1'] == '1'" :selectedGroupItem="selectedGroupItem"
                @updateStep="updateStep" @selectItem="selectItem" @changePage="changePage" :globalPage="globalPage" />
              <globalsCoatingaiFun-powder v-else-if="selectedGroupItem['c1'] == '3'"
                :selectedGroupItem="selectedGroupItem" @updateStep="updateStep" @selectItem="selectItem"
                @changePage="changePage" :globalPage="globalPage" />
              <globalsCoatingaiArc v-else-if="selectedGroupItem['c1'] == '2' && selectedGroupItem['c2'] == '2'"
                :selectedGroupItem="selectedGroupItem" @updateStep="updateStep" @selectItem="selectItem"
                @changePage="changePage" :globalPage="globalPage" />
              <globalsCoatingaiDec v-else-if="selectedGroupItem['c1'] == '2'" :selectedGroupItem="selectedGroupItem"
                @selectItem="selectItem" @changePage="changePage" :globalPage="globalPage" />
              <globalsCoatingaiCeramheo v-else-if="selectedGroupItem['c1'] == '4'"
                :selectedGroupItem="selectedGroupItem" @updateStep="updateStep" @selectItem="selectItem"
                @changePage="changePage" :globalPage="globalPage" />
              <globalsCoatingaiEcoatheo v-else-if="selectedGroupItem['c1'] == '5'"
                :selectedGroupItem="selectedGroupItem" @updateStep="updateStep" @selectItem="selectItem"
                @changePage="changePage" :globalPage="globalPage" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["showCoatingaiModal"])
const { showCoatingaiModal } = toRefs(props)
const coatingaiModalRef = ref(null)

const selectedSteps = ref(null)
const steps = {
  "default":  {
    "step1": {
      "image": "",
      "text1": "",
      "text2": "",
      "text3": "",
      "opacity": 0.4
    },
    "step2": {
      "image": "",
      "text1": "",
      "text2": "",
      "text3": "",
      "opacity": 0.4
    },
    "step3": {
      "image": "",
      "text1": "",
      "text2": "",
      "text3": "",
      "opacity": 0.4
    },
    "step4": {
      "image": "",
      "text1": "",
      "text2": "",
      "text3": "",
      "opacity": 0.4
    },
    "step5": {
      "image": "",
      "text1": "",
      "text2": "",
      "text3": "",
      "opacity": 0.4
    },
    "step6": {
      "image": "",
      "text1": "",
      "text2": "",
      "text3": "",
      "opacity": 0.4
    },
  },
  "gleitlack": {
    "step1": {
      "image": "/img/coatingai/step1_01.png",
      "text1": "Gleitlack<br>Korrosionsschutz",
      "text2": "",
      "text3": "",
      "opacity": 1

    },
    "step2": {
      "image": "",
      "text1": "Bauteil<br>Werkstoff",
      "text2": "",
      "text3": "",
      "opacity": 1
    },
    "step3": {
      "image": "",
      "text1": "Umgebungssituation",
      "text2": "",
      "text3": "",
      "opacity": 1
    },
    "step4": {
      "image": "",
      "text1": "Belastungssituation",
      "text2": "",
      "text3": "",
      "opacity": 1
    },
    "step5": {
      "image": "",
      "text1": "60% Empfehlung",
      "text2": "",
      "text3": "",
      "opacity": 1
    },
    "step6": {
      "image": "",
      "text1": "90% Empfehlung",
      "text2": "",
      "text3": "",
      "opacity": 0.4
    },
  },
  "pulver_decorative": {
    "step1": {
      "image": "/img/coatingai/step2_01.jpg",
      "text1": "Pulverbeschichtung<br>dekorativ",
      "text2": "",
      "text3": ""
    },
    "step2": {
      "image": "",
      "text1": "",
      "text2": "",
      "text3": ""
    },
    "step3": {
      "image": "",
      "text1": "",
      "text2": "",
      "text3": ""
    },
    "step4": {
      "image": "",
      "text1": "",
      "text2": "",
      "text3": ""
    },
    "step5": {
      "image": "",
      "text1": "60% Empfehlung",
      "text2": "",
      "text3": ""
    },
    "step6": {
      "image": "",
      "text1": "90% Empfehlung",
      "text2": "",
      "text3": ""
    },
  },
  "pulver_functional": {
    "step1": {
      "image": "/img/coatingai/step3_01.jpg",
      "text1": "Pulverbeschichtung<br>functional",
      "text2": "",
      "text3": ""
    },
    "step2": {
      "image": "",
      "text1": "",
      "text2": "",
      "text3": ""
    },
    "step3": {
      "image": "",
      "text1": "",
      "text2": "",
      "text3": ""
    },
    "step4": {
      "image": "",
      "text1": "",
      "text2": "",
      "text3": ""
    },
    "step5": {
      "image": "",
      "text1": "60% Empfehlung",
      "text2": "",
      "text3": ""
    },
    "step6": {
      "image": "",
      "text1": "90% Empfehlung",
      "text2": "",
      "text3": ""
    },
  },
  "pulver_architecture": {
    "step1": {
      "image": "/img/coatingai/step2_01.jpg",
      "text1": "Pulverbeschichtung<br>Architektur",
      "text2": "",
      "text3": ""
    },
    "step2": {
      "image": "",
      "text1": "",
      "text2": "",
      "text3": ""
    },
    "step3": {
      "image": "",
      "text1": "",
      "text2": "",
      "text3": ""
    },
    "step4": {
      "image": "",
      "text1": "",
      "text2": "",
      "text3": ""
    },
    "step5": {
      "image": "",
      "text1": "60% Empfehlung",
      "text2": "",
      "text3": ""
    },
    "step6": {
      "image": "",
      "text1": "90% Empfehlung",
      "text2": "",
      "text3": ""
    },
  },
  "ceramheo": {
    "step1": {
      "image": "/img/coatingai/step2_01.jpg",
      "text1": "ceramHEO®<br>Nassbeschichtung",
      "text2": "schwarz",
      "text3": ""
    },
    "step2": {
      "image": "",
      "text1": "",
      "text2": "",
      "text3": ""
    },
    "step3": {
      "image": "",
      "text1": "",
      "text2": "",
      "text3": ""
    },
    "step4": {
      "image": "",
      "text1": "",
      "text2": "",
      "text3": ""
    },
    "step5": {
      "image": "",
      "text1": "60% Empfehlung",
      "text2": "",
      "text3": ""
    },
    "step6": {
      "image": "",
      "text1": "90% Empfehlung",
      "text2": "",
      "text3": ""
    },
  },
  "ecoatheo": {
    "step1": {
      "image": "/img/coatingai/step2_01.jpg",
      "text1": "ecoatHEO®<br>KTL-Beschichtung",
      "text2": "schwarz",
      "text3": ""
    },
    "step2": {
      "image": "",
      "text1": "",
      "text2": "",
      "text3": ""
    },
    "step3": {
      "image": "",
      "text1": "",
      "text2": "",
      "text3": ""
    },
    "step4": {
      "image": "",
      "text1": "",
      "text2": "",
      "text3": ""
    },
    "step5": {
      "image": "",
      "text1": "60% Empfehlung",
      "text2": "",
      "text3": ""
    },
    "step6": {
      "image": "",
      "text1": "90% Empfehlung",
      "text2": "",
      "text3": ""
    },
  },

}

const merge = (a, b) => Object.fromEntries([
  ...Object.entries(a).filter(([k]) => !(k in b)),
  ...Object.entries(b).filter(([k]) => !(k in a)),
  ...Object.entries(b).filter(([k]) => (k in a)).map(([k, v]) =>
    [k, Object(v) === v && Object(a[k]) === a[k] ? merge(a[k], v) : v]
  ),
])

watch(showCoatingaiModal, (val) => {
  if (val) {
    coatingaiModalRef.value.style.transform = "translateY(0)"
  } else {
    coatingaiModalRef.value.style.transform = "translateY(-100%)"
  }
})

const selectedGroupItem = ref({})
const selectItem = (group, value, deselect = true) => {
  if (deselect && selectedGroupItem.value[group] && selectedGroupItem.value[group] == value) {
    delete selectedGroupItem.value[group]
  } else {
    selectedGroupItem.value[group] = value
  }
}

const globalPage = ref(1)
const changePage = (value) => {
  globalPage.value = value
}

const updateStep = (data) => {
  selectedSteps.value = merge(selectedSteps.value, data)
}

const resetSteps = () => {
  selectedSteps.value = steps.default
  selectedGroupItem.value = {}
  globalPage.value = 1
}

onMounted(() => {
  if (!selectedSteps.value) {
    resetSteps()
  }
})

</script>

<style>
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}

/* .slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
} */

.slide-fade-enter-from {
  transform: translateX(20px);
  opacity: 0;
}

/* .slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
} */
</style>
<style scoped>

.blinky {
  animation: blink 1.2s linear infinite alternate;
}
@keyframes blink {
  100% {
    opacity: 0.4;
  }

  0% {
    opacity: 1;
  }
}
</style>
<!--


<div
  @click="selectItem('c1', '1');"
  :class="{ 'ring-4 ring-green-500 ring-offset-4 ring-offset-black': selectedGroupItem['c1'] == '1' }"
  class="">
    <div class="relative">
      <img class="object-fill" src="/img/coatingai/gleitlack1_01.png">
      <div class="absolute top-4 left-6 text-gray-700 text-2xl leading-6">Gleitlack<br>Korrosionsschutz</div>
    </div>
</div>


-->




<!--


steps: [
  {
    step1: [
      { img: "/img/coatingai/step1_01.png"},
      { text1: "Gleitlack<br>Korrosionsschutz"},
      { text2: "Schüttgut" },
      { text3: ""}
    ],
    step2: [
      { img: ""},
      { text1: "Bauteil<br>Werkstoff"},
      { text2: "" },
      { text3: ""}
    ],
    step3: [
      { img: ""},
      { text1: "Umgebungssituation"},
      { text2: "" },
      { text3: ""}
    ],
    step4: [
      { img: ""},
      { text1: "Belastungssituation"},
      { text2: "" },
      { text3: ""}
    ],
    step5: [
      { img: ""},
      { text1: "60% Empfehlung"},
      { text2: "" },
      { text3: ""}
    ],
    step6: [
      { img: ""},
      { text1: "90% Empfehlung"},
      { text2: "" },
      { text3: ""}
    ]
}

-->
