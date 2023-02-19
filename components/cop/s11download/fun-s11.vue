<template>
  <section id="download" class="relative h-[50vh] bg-bgBeige mt-16 md:mr-12 md:ml-20 mb-24">
    <div class="relative bg-white flex-1 h-12 px-6 lg:pl-12 lg:pr-10 mb-5 mr-0">
      <div class="absolute top-10 lg:top-[24px] text-5xl font-bold tracking-tight">
        <div class="">Download</div>
      </div>
    </div>

    <!-- section container -->
    <div class="relative flex-1 mt-0 bg-bgBeige  lg:pl-12  mb-5 mr-0 md:mr-12">
      <div class="flex flex-col lg:flex-row lg:space-x-14 py-20">
        <!-- text container -->
        <div class="lg:w-full px-10 pt-4 lg:px-0">
          <div class="text-sm">
            <div v-if="project.generalProjectType == 'BE'" class="">Schichtdickenmessung zu Ihrer
              Beschichtungsempfehlung</div>
            <div v-if="project.generalProjectType == 'VA'" class="">Schichtdickenmessung zu Ihrem Versuchsauftrag</div>
          </div>
          <h1 class="text-3xl font-bold tracking-tight px-10 lg:px-0">Download Projektinformationen</h1>

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
            <div class="mt-5">
              <h4 class="text font-bold mt-12 mb-5">Download</h4>
              <div class="flex space-x-2 items-center fill-gray-600">
                <svg width="2em" height="2em" viewBox="0 0 16 16">
                  <path fillRule="evenodd"
                        d="m13.85 4.44l-3.28-3.3l-.35-.14H2.5l-.5.5V7h1V2h6v3.5l.5.5H13v1h1V4.8l-.15-.36zM10 5V2l3 3h-3zM2.5 8l-.5.5v6l.5.5h11l.5-.5v-6l-.5-.5h-11zM13 13v1H3V9h10v4zm-8-1h-.32v1H4v-3h1.06c.75 0 1.13.36 1.13 1a.94.94 0 0 1-.32.72A1.33 1.33 0 0 1 5 12zm-.06-1.45h-.26v.93h.26c.36 0 .54-.16.54-.47c0-.31-.18-.46-.54-.46zM9 12.58a1.48 1.48 0 0 0 .44-1.12c0-1-.53-1.46-1.6-1.46H6.78v3h1.06A1.6 1.6 0 0 0 9 12.58zm-1.55-.13v-1.9h.33a.94.94 0 0 1 .7.25a.91.91 0 0 1 .25.67a1 1 0 0 1-.25.72a.94.94 0 0 1-.69.26h-.34zm4.45-.61h-.97V13h-.68v-3h1.74v.55h-1.06v.74h.97v.55z"
                        clipRule="evenodd"></path>
                </svg>
                <p class="leading-tight font-semibold text-sm">
                  Projektbeschreibung {{ project.generalProjectNumber }}
                </p>
              </div>
              <div @click="generateReport" class="flex space-x-2 items-center mt-2 fill-gray-600 cursor-pointer hover:text-amber-500 hover:fill-amber-500">
                <svg width="2em" height="2em" viewBox="0 0 16 16">
                  <path fillRule="evenodd"
                        d="m13.85 4.44l-3.28-3.3l-.35-.14H2.5l-.5.5V7h1V2h6v3.5l.5.5H13v1h1V4.8l-.15-.36zM10 5V2l3 3h-3zM2.5 8l-.5.5v6l.5.5h11l.5-.5v-6l-.5-.5h-11zM13 13v1H3V9h10v4zm-8-1h-.32v1H4v-3h1.06c.75 0 1.13.36 1.13 1a.94.94 0 0 1-.32.72A1.33 1.33 0 0 1 5 12zm-.06-1.45h-.26v.93h.26c.36 0 .54-.16.54-.47c0-.31-.18-.46-.54-.46zM9 12.58a1.48 1.48 0 0 0 .44-1.12c0-1-.53-1.46-1.6-1.46H6.78v3h1.06A1.6 1.6 0 0 0 9 12.58zm-1.55-.13v-1.9h.33a.94.94 0 0 1 .7.25a.91.91 0 0 1 .25.67a1 1 0 0 1-.25.72a.94.94 0 0 1-.69.26h-.34zm4.45-.61h-.97V13h-.68v-3h1.74v.55h-1.06v.74h.97v.55z"
                        clipRule="evenodd"></path>
                </svg>
                <p class="leading-tight font-semibold text-sm">
                  Technisches Datenblatt project {{ project.coating.coatingProduct.product }}
                </p>
              </div>
              <div @click="generateProductPdf" class="flex space-x-2 items-center mt-2 fill-gray-600 cursor-pointer hover:text-amber-500 hover:fill-amber-500">
                <svg width="2em" height="2em" viewBox="0 0 16 16">
                  <path fillRule="evenodd"
                        d="m13.85 4.44l-3.28-3.3l-.35-.14H2.5l-.5.5V7h1V2h6v3.5l.5.5H13v1h1V4.8l-.15-.36zM10 5V2l3 3h-3zM2.5 8l-.5.5v6l.5.5h11l.5-.5v-6l-.5-.5h-11zM13 13v1H3V9h10v4zm-8-1h-.32v1H4v-3h1.06c.75 0 1.13.36 1.13 1a.94.94 0 0 1-.32.72A1.33 1.33 0 0 1 5 12zm-.06-1.45h-.26v.93h.26c.36 0 .54-.16.54-.47c0-.31-.18-.46-.54-.46zM9 12.58a1.48 1.48 0 0 0 .44-1.12c0-1-.53-1.46-1.6-1.46H6.78v3h1.06A1.6 1.6 0 0 0 9 12.58zm-1.55-.13v-1.9h.33a.94.94 0 0 1 .7.25a.91.91 0 0 1 .25.67a1 1 0 0 1-.25.72a.94.94 0 0 1-.69.26h-.34zm4.45-.61h-.97V13h-.68v-3h1.74v.55h-1.06v.74h.97v.55z"
                        clipRule="evenodd"></path>
                </svg>
                <p class="leading-tight font-semibold text-sm">
                  Technisches Datenblatt product {{ project.coating.coatingProduct.product }}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script setup>
import { useMq } from "vue3-mq"
const $mq = useMq();

const props = defineProps(["project", "product"])
const { project, product } = toRefs(props)

const generateReport = () => useGenerateReport(project.value, product.value)

// const generateProductPdf = () => useProductPdf(project.value, product.value)
const generateProductPdf = () => useProductPdf().generateReport(project.value.coating.coatingProduct._id)

</script>
