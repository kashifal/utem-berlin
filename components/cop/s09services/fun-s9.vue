<template>
  <section id="services" class="relative h-[50vh] bg-bgBeige mt-16 md:mr-12 md:ml-20">
    <div class="relative bg-white flex-1 h-12 px-6 lg:pl-12 lg:pr-10 mb-5 mr-0">
      <div class="absolute top-10 lg:top-[24px] text-5xl font-bold tracking-tight">
        <div class="">Services</div>
      </div>
    </div>

    <!-- section container -->
    <div class="relative flex-1 mt-0 bg-bgBeige  lg:pl-12  mb-5 mr-0 md:mr-12">
      <div class="flex flex-col lg:flex-row lg:space-x-14 py-20">
        <!-- text container -->
        <div class="lg:w-full px-10 pt-4 lg:px-0">
          <div class="text-sm">
            <div v-if="project.generalProjectType == 'BE'" class="">Services zu Ihrer Beschichtungsempfehlung</div>
            <div v-if="project.generalProjectType == 'VA'" class="">Services zu Ihrem Versuchsauftrag</div>
          </div>
          <h1 class="text-3xl font-bold tracking-tight px-10 lg:px-0">Services vor und nach der Beschichtung</h1>

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

            <div v-if="project.services && project.services.serviceOpticalcheck == true" class="flex space-x-2 items-center fill-gray-600 mt-8">
              <svg width="2em" height="2em" viewBox="0 0 24 24">
                <path d="m14.17 13.71l1.4-2.42c.09-.15.05-.34-.08-.45l-1.48-1.16c.03-.22.05-.45.05-.68s-.02-.46-.05-.69l1.48-1.16c.13-.11.17-.3.08-.45l-1.4-2.42c-.09-.15-.27-.21-.43-.15l-1.74.7c-.36-.28-.75-.51-1.18-.69l-.26-1.85a.364.364 0 0 0-.35-.29h-2.8c-.17 0-.32.13-.35.3L6.8 4.15c-.42.18-.82.41-1.18.69l-1.74-.7c-.16-.06-.34 0-.43.15l-1.4 2.42c-.09.15-.05.34.08.45l1.48 1.16c-.03.22-.05.45-.05.68s.02.46.05.69l-1.48 1.16c-.13.11-.17.3-.08.45l1.4 2.42c.09.15.27.21.43.15l1.74-.7c.36.28.75.51 1.18.69l.26 1.85c.03.16.18.29.35.29h2.8c.17 0 .32-.13.35-.3l.26-1.85c.42-.18.82-.41 1.18-.69l1.74.7c.16.06.34 0 .43-.15zM8.81 11c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2zm13.11 7.67l-.96-.74c.02-.14.04-.29.04-.44c0-.15-.01-.3-.04-.44l.95-.74c.08-.07.11-.19.05-.29l-.9-1.55c-.05-.1-.17-.13-.28-.1l-1.11.45c-.23-.18-.48-.33-.76-.44l-.17-1.18a.216.216 0 0 0-.21-.2h-1.79c-.11 0-.21.08-.22.19l-.17 1.18c-.27.12-.53.26-.76.44l-1.11-.45a.23.23 0 0 0-.28.1l-.9 1.55c-.05.1-.04.22.05.29l.95.74a3.145 3.145 0 0 0 0 .88l-.95.74c-.08.07-.11.19-.05.29l.9 1.55c.05.1.17.13.28.1l1.11-.45c.23.18.48.33.76.44l.17 1.18c.02.11.11.19.22.19h1.79c.11 0 .21-.08.22-.19l.17-1.18c.27-.12.53-.26.75-.44l1.12.45c.1.04.22 0 .28-.1l.9-1.55c.06-.09.03-.21-.05-.28zm-4.29.16a1.35 1.35 0 1 1 .001-2.701a1.35 1.35 0 0 1-.001 2.701z"></path>
              </svg>
              <p class="leading-tight font-semibold text">
                  <h2 v-if="project.services && project.services.serviceOpticalcheck == true && project.services.serviceOpticalcheckPriority=='gewünscht'">Optische Kontrolle gewünscht</h2>
                  <h2 v-else-if="project.services && project.services.serviceOpticalcheck == true && project.services.serviceOpticalcheckPriority=='empfohlen'">empfohlene Optische Kontrolle</h2>
                  <h2 v-else-if="project.services && project.services.serviceOpticalcheck == true && project.services.serviceOpticalcheckPriority=='notwendig'">notwendige Optische Kontrolle</h2>
                  <h2 v-else-if="project.services && project.services.serviceOpticalcheck == true && project.services.serviceOpticalcheckPriority=='sicherheitsrelevant'">sicherheitsrelevante Optische Kontrolle</h2>
              </p>
            </div>
            <div v-if="project.services && project.services.servicePacking == true" class="flex space-x-2 items-center fill-gray-600 mt-8">
              <svg width="2em" height="2em" viewBox="0 0 24 24">
                <path d="m14.17 13.71l1.4-2.42c.09-.15.05-.34-.08-.45l-1.48-1.16c.03-.22.05-.45.05-.68s-.02-.46-.05-.69l1.48-1.16c.13-.11.17-.3.08-.45l-1.4-2.42c-.09-.15-.27-.21-.43-.15l-1.74.7c-.36-.28-.75-.51-1.18-.69l-.26-1.85a.364.364 0 0 0-.35-.29h-2.8c-.17 0-.32.13-.35.3L6.8 4.15c-.42.18-.82.41-1.18.69l-1.74-.7c-.16-.06-.34 0-.43.15l-1.4 2.42c-.09.15-.05.34.08.45l1.48 1.16c-.03.22-.05.45-.05.68s.02.46.05.69l-1.48 1.16c-.13.11-.17.3-.08.45l1.4 2.42c.09.15.27.21.43.15l1.74-.7c.36.28.75.51 1.18.69l.26 1.85c.03.16.18.29.35.29h2.8c.17 0 .32-.13.35-.3l.26-1.85c.42-.18.82-.41 1.18-.69l1.74.7c.16.06.34 0 .43-.15zM8.81 11c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2zm13.11 7.67l-.96-.74c.02-.14.04-.29.04-.44c0-.15-.01-.3-.04-.44l.95-.74c.08-.07.11-.19.05-.29l-.9-1.55c-.05-.1-.17-.13-.28-.1l-1.11.45c-.23-.18-.48-.33-.76-.44l-.17-1.18a.216.216 0 0 0-.21-.2h-1.79c-.11 0-.21.08-.22.19l-.17 1.18c-.27.12-.53.26-.76.44l-1.11-.45a.23.23 0 0 0-.28.1l-.9 1.55c-.05.1-.04.22.05.29l.95.74a3.145 3.145 0 0 0 0 .88l-.95.74c-.08.07-.11.19-.05.29l.9 1.55c.05.1.17.13.28.1l1.11-.45c.23.18.48.33.76.44l.17 1.18c.02.11.11.19.22.19h1.79c.11 0 .21-.08.22-.19l.17-1.18c.27-.12.53-.26.75-.44l1.12.45c.1.04.22 0 .28-.1l.9-1.55c.06-.09.03-.21-.05-.28zm-4.29.16a1.35 1.35 0 1 1 .001-2.701a1.35 1.35 0 0 1-.001 2.701z"></path>
              </svg>
              <p class="leading-tight font-semibold text">
                  <h2 v-if="project.services && project.services.servicePacking == true && project.services.servicePackingPriority=='gewünscht'">Verpackung gewünscht</h2>
                  <h2 v-else-if="project.services && project.services.servicePacking == true && project.services.servicePackingPriority=='empfohlen'">empfohlene Verpackung</h2>
                  <h2 v-else-if="project.services && project.services.servicePacking == true && project.services.servicePackingPriority=='notwendig'">notwendige Verpackung</h2>
              </p>
            </div>
            <div v-if="project.services && project.services.serviceLabel == true" class="flex space-x-2 items-center fill-gray-600 mt-8">
              <svg width="2em" height="2em" viewBox="0 0 24 24">
                <path d="m14.17 13.71l1.4-2.42c.09-.15.05-.34-.08-.45l-1.48-1.16c.03-.22.05-.45.05-.68s-.02-.46-.05-.69l1.48-1.16c.13-.11.17-.3.08-.45l-1.4-2.42c-.09-.15-.27-.21-.43-.15l-1.74.7c-.36-.28-.75-.51-1.18-.69l-.26-1.85a.364.364 0 0 0-.35-.29h-2.8c-.17 0-.32.13-.35.3L6.8 4.15c-.42.18-.82.41-1.18.69l-1.74-.7c-.16-.06-.34 0-.43.15l-1.4 2.42c-.09.15-.05.34.08.45l1.48 1.16c-.03.22-.05.45-.05.68s.02.46.05.69l-1.48 1.16c-.13.11-.17.3-.08.45l1.4 2.42c.09.15.27.21.43.15l1.74-.7c.36.28.75.51 1.18.69l.26 1.85c.03.16.18.29.35.29h2.8c.17 0 .32-.13.35-.3l.26-1.85c.42-.18.82-.41 1.18-.69l1.74.7c.16.06.34 0 .43-.15zM8.81 11c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2zm13.11 7.67l-.96-.74c.02-.14.04-.29.04-.44c0-.15-.01-.3-.04-.44l.95-.74c.08-.07.11-.19.05-.29l-.9-1.55c-.05-.1-.17-.13-.28-.1l-1.11.45c-.23-.18-.48-.33-.76-.44l-.17-1.18a.216.216 0 0 0-.21-.2h-1.79c-.11 0-.21.08-.22.19l-.17 1.18c-.27.12-.53.26-.76.44l-1.11-.45a.23.23 0 0 0-.28.1l-.9 1.55c-.05.1-.04.22.05.29l.95.74a3.145 3.145 0 0 0 0 .88l-.95.74c-.08.07-.11.19-.05.29l.9 1.55c.05.1.17.13.28.1l1.11-.45c.23.18.48.33.76.44l.17 1.18c.02.11.11.19.22.19h1.79c.11 0 .21-.08.22-.19l.17-1.18c.27-.12.53-.26.75-.44l1.12.45c.1.04.22 0 .28-.1l.9-1.55c.06-.09.03-.21-.05-.28zm-4.29.16a1.35 1.35 0 1 1 .001-2.701a1.35 1.35 0 0 1-.001 2.701z"></path>
              </svg>
              <p class="leading-tight font-semibold text">
                  <h2 v-if="project.services && project.services.serviceLabel == true && project.services.servicePackingPriority=='gewünscht'">Bauteil labeln gewünscht</h2>
                  <h2 v-else-if="project.services && project.services.serviceLabel == true && project.services.servicePackingPriority=='empfohlen'">Bauteil labeln empfohlen</h2>
                  <h2 v-else-if="project.services && project.services.serviceLabel == true && project.services.servicePackingPriority=='notwendig'">Bauteil labeln notwendig</h2>
              </p>
            </div>
            <div v-if="project.services && project.services.serviceZeroErrorChecking == true" class="flex space-x-2 items-center fill-gray-600 mt-8">
              <svg width="2em" height="2em" viewBox="0 0 24 24">
                <path d="m14.17 13.71l1.4-2.42c.09-.15.05-.34-.08-.45l-1.48-1.16c.03-.22.05-.45.05-.68s-.02-.46-.05-.69l1.48-1.16c.13-.11.17-.3.08-.45l-1.4-2.42c-.09-.15-.27-.21-.43-.15l-1.74.7c-.36-.28-.75-.51-1.18-.69l-.26-1.85a.364.364 0 0 0-.35-.29h-2.8c-.17 0-.32.13-.35.3L6.8 4.15c-.42.18-.82.41-1.18.69l-1.74-.7c-.16-.06-.34 0-.43.15l-1.4 2.42c-.09.15-.05.34.08.45l1.48 1.16c-.03.22-.05.45-.05.68s.02.46.05.69l-1.48 1.16c-.13.11-.17.3-.08.45l1.4 2.42c.09.15.27.21.43.15l1.74-.7c.36.28.75.51 1.18.69l.26 1.85c.03.16.18.29.35.29h2.8c.17 0 .32-.13.35-.3l.26-1.85c.42-.18.82-.41 1.18-.69l1.74.7c.16.06.34 0 .43-.15zM8.81 11c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2zm13.11 7.67l-.96-.74c.02-.14.04-.29.04-.44c0-.15-.01-.3-.04-.44l.95-.74c.08-.07.11-.19.05-.29l-.9-1.55c-.05-.1-.17-.13-.28-.1l-1.11.45c-.23-.18-.48-.33-.76-.44l-.17-1.18a.216.216 0 0 0-.21-.2h-1.79c-.11 0-.21.08-.22.19l-.17 1.18c-.27.12-.53.26-.76.44l-1.11-.45a.23.23 0 0 0-.28.1l-.9 1.55c-.05.1-.04.22.05.29l.95.74a3.145 3.145 0 0 0 0 .88l-.95.74c-.08.07-.11.19-.05.29l.9 1.55c.05.1.17.13.28.1l1.11-.45c.23.18.48.33.76.44l.17 1.18c.02.11.11.19.22.19h1.79c.11 0 .21-.08.22-.19l.17-1.18c.27-.12.53-.26.75-.44l1.12.45c.1.04.22 0 .28-.1l.9-1.55c.06-.09.03-.21-.05-.28zm-4.29.16a1.35 1.35 0 1 1 .001-2.701a1.35 1.35 0 0 1-.001 2.701z"></path>
              </svg>
              <p class="leading-tight font-semibold text">
                  <h2 v-if="project.services && project.services.serviceZeroErrorChecking == true && project.services.serviceLabelPriority=='gewünscht'">Null-Fehler-Kontrolle gewünscht</h2>
                  <h2 v-else-if="project.services && project.services.serviceZeroErrorChecking == true && project.services.serviceLabelPriority=='empfohlen'">empfohlene Null-Fehler-Kontrolle</h2>
                  <h2 v-else-if="project.services && project.services.serviceZeroErrorChecking == true && project.services.serviceLabelPriority=='notwendig'">notwendige Null-Fehler-Kontrolle</h2>
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


