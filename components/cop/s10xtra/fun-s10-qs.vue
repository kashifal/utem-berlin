<template>
  <section id="qualityassurance" class="relative h-[50vh] bg-bgBeige mt-16 md:mr-12">
    <div class="relative bg-white flex-1 h-12 px-6 lg:pl-20 lg:pr-10 mb-5 mr-0">
      <div class="absolute top-10 z-10 lg:top-[24px] text-5xl font-bold tracking-tight">
        <div class="">Qualitätsmanagement</div>
      </div>
    </div>

    <!-- section container -->
    <div class="relative flex-1 mt-0 bg-bgBeige  lg:pl-20  mb-5 mr-0 md:mr-12">
      <div class="flex flex-col lg:flex-row lg:space-x-14 py-20">
        <!-- text container -->
        <div class="lg:w-full px-10 pt-4 lg:px-0">
          <div class="text-sm">
            <div v-if="project.generalProjectType == 'BE'" class="">Schichtdickenmessung zu Ihrer Beschichtungsempfehlung</div>
            <div v-if="project.generalProjectType == 'VA'" class="">Schichtdickenmessung zu Ihrem Versuchsauftrag</div>
          </div>
          <h1 class="text-3xl font-bold tracking-tight px-10 lg:px-0">Schichtdickenmessung</h1>

          <!-- qualitätsmanagement -->
          <div>
<!--            <h3 class="text-xl font-bold tracking-tight my-5 mt-8">Profil</h3>-->
            <p class="pt-3">
              ceramHEO® zeigt eine farbstabile tiefschwarze Oberfläche. Diese Anforderung wird in der
              Industrie auch gerne als "Klavierlackoptik" gefordert -
              eben wie ein hochwertiger Konzertflügel, hochglänzend und tiefschwarz. Die Farbbeständigkeit
              über die Lebensdauer des lackierten Bauteils ist uns durch zahlreiche Spezifikationen der OEMs
              bestätigt. Sprechen Sie
              mit unsere Qualitätssicherung. Wir erfüllen die Normen der Automobilindustrie.
            </p>
            <h4 class="text font-bold mt-12 mb-5">Download</h4>
            <div class="flex space-x-2 items-center fill-gray-600">
              <svg width="2em" height="2em" viewBox="0 0 36 36">
                <path d="M18 20.25a1 1 0 0 1-.43-.1l-15-7.09a1 1 0 0 1 0-1.81l15-7.09a1 1 0 0 1 .85 0l15 7.09a1 1 0 0 1 0 1.81l-15 7.09a1 1 0 0 1-.42.1Z" class="clr-i-solid clr-i-solid-path-1"></path><path fill="currentColor" d="M18 26.16a1 1 0 0 1-.43-.1L2.57 19a1 1 0 1 1 .85-1.81L18 24.06l14.57-6.89a1 1 0 1 1 .86 1.83l-15 7.09a1 1 0 0 1-.43.07Z" class="clr-i-solid clr-i-solid-path-2"></path><path fill="currentColor" d="M18 32.07a1 1 0 0 1-.43-.1l-15-7.09a1 1 0 0 1 .85-1.81L18 30l14.57-6.89a1 1 0 1 1 .85 1.81L18.43 32a1 1 0 0 1-.43.07Z" class="clr-i-solid clr-i-solid-path-3"></path><path fill="none" d="M0 0h36v36H0z"></path>
              </svg>
              <p class="leading-tight font-semibold text">
                Schichdickenmessung {{project.qma.layermlocation1}}: {{project.qma.layerthickness1}}µm
              </p>
            </div>
            <div class="flex space-x-2 items-center fill-gray-600 mt-4">
              <svg width="2em" height="2em" viewBox="0 0 36 36">
                <path d="M18 20.25a1 1 0 0 1-.43-.1l-15-7.09a1 1 0 0 1 0-1.81l15-7.09a1 1 0 0 1 .85 0l15 7.09a1 1 0 0 1 0 1.81l-15 7.09a1 1 0 0 1-.42.1Z" class="clr-i-solid clr-i-solid-path-1"></path><path fill="currentColor" d="M18 26.16a1 1 0 0 1-.43-.1L2.57 19a1 1 0 1 1 .85-1.81L18 24.06l14.57-6.89a1 1 0 1 1 .86 1.83l-15 7.09a1 1 0 0 1-.43.07Z" class="clr-i-solid clr-i-solid-path-2"></path><path fill="currentColor" d="M18 32.07a1 1 0 0 1-.43-.1l-15-7.09a1 1 0 0 1 .85-1.81L18 30l14.57-6.89a1 1 0 1 1 .85 1.81L18.43 32a1 1 0 0 1-.43.07Z" class="clr-i-solid clr-i-solid-path-3"></path><path fill="none" d="M0 0h36v36H0z"></path>
              </svg>
              <p class="leading-tight font-semibold text">
                Schichdickenmessung {{project.qma.layermlocation2}}: {{project.qma.layerthickness2}}µm<br>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script setup>
import {useMq } from "vue3-mq"
const $mq = useMq();

const props = defineProps(["project"])
const { project } = toRefs(props)

</script>


