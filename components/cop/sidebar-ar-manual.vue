<template>
    <!-- Sidebar -->
    <section class="w-full hidden bg-white lg:block">
      <div class="w-full h-[50px] border-b border-gray-400 cursor-pointer">
        <nuxt-link to="/coatingai" class="flex items-center space-x-2">
            <div class="pl-4 fill-amber-500 cursor-pointer">
              <svg width="1.7em" height="1.7em" viewBox="0 0 24 24">
                <path d="m5 13l4 4l-1.4 1.42L1.18 12L7.6 5.58L9 7l-4 4h16v2H5m16-7v2H11V6h10m0 10v2H11v-2h10Z"></path>
              </svg>
            </div>
            <div class="text-left font-bold text-[14px] leading-4 pl-2 py-4">
              <span  class="">zurück zur Übersicht</span>
            </div>
        </nuxt-link>
      </div>
      <div class="p-4">
<!--        <h4 class="text font-bold mb-4">Navigation manual</h4>-->
        <div class=""></div>
        <div class="text-left font-bold text-[14px] leading-4 pb-2">
          <span v-if="project.generalProjectType == 'VA'" class="">Versuchsauftrag<br>{{project.generalProjectNumber}}</span>
          <span v-if="project.generalProjectType == 'FM'" class="">Farbmuster<br>{{project.generalProjectNumber}}</span>
          <span v-if="project.generalProjectType == 'BE'" class="">Beschichtungsempfehlung<br>{{project.generalProjectNumber}}</span>
        </div>
        <div id="start-nav-link" @click="scrolTo('#hero')" class="nav-link text-[12px] cursor-pointer">Start</div>
        <div id="projektbeschreibung-nav-link" @click="scrolTo('#projektbeschreibung')"
            class="nav-link text-[12px] cursor-pointer">
            Projektbeschreibung
        </div>
        <p id="beschichtungsanforderungen-nav-link" @click="scrolTo('#beschichtungsanforderungen')"
            class="nav-link text-[12px] cursor-pointer">
            Beschichtungsanforderungen
        </p>

<!--        <div class="flex justify-between mt-1">
            <div>
                <div class="font-bold text-sm pt-4">Deckschicht</div>
                <div id="decklackprodukt-nav-link" @click="scrolTo('#decklackprodukt')"
                    class="nav-link text-[12px] cursor-pointer">
                    Beschichtungsprodukt {{ project.coating.coatingProduct.product }}
                </div>
                <div id="decklackproduktgeneral-nav-link" @click="scrolTo('#decklackproduktgeneral')"
                    class="nav-link text-[12px] cursor-pointer">
                    allgemeine Info {{ project.coating.coatingProduct.solidlubricant }}
                </div>
                <div id="decklackproduktproduktion-nav-link" @click="scrolTo('#decklackproduktproduktion')"
                    class="nav-link text-[12px] cursor-pointer">
                    Deckschicht Produktion
                </div>
            </div>

        </div>
        <div class="flex justify-between mt-1">
            <div>
                <div class="font-bold text-sm pt-4">Korrosionsschutz</div>
                <div id="decklackprodukt-nav-link" @click="scrolTo('#decklackprodukt')"
                    class="nav-link text-[12px] cursor-pointer">
                  Korrosionschutzprodukt {{ project.coating.coatingProduct.product }}
                </div>
                <div id="decklackproduktgeneral-nav-link" @click="scrolTo('#decklackproduktgeneral')"
                    class="nav-link text-[12px] cursor-pointer">
                  allgemeine Info
                </div>
                <div id="decklackproduktproduktion-nav-link" @click="scrolTo('#decklackproduktproduktion')"
                    class="nav-link text-[12px] cursor-pointer">
                  Korrosionschutz Produktion
                </div>
            </div>

        </div>-->

        <h4 class="text font-bold mt-12 mb-3">Download</h4>
        <div class="flex space-x-2 items-center fill-gray-600">
            <svg width="1.6em" height="1.6em" viewBox="0 0 16 16">
                <path fillRule="evenodd"
                    d="m13.85 4.44l-3.28-3.3l-.35-.14H2.5l-.5.5V7h1V2h6v3.5l.5.5H13v1h1V4.8l-.15-.36zM10 5V2l3 3h-3zM2.5 8l-.5.5v6l.5.5h11l.5-.5v-6l-.5-.5h-11zM13 13v1H3V9h10v4zm-8-1h-.32v1H4v-3h1.06c.75 0 1.13.36 1.13 1a.94.94 0 0 1-.32.72A1.33 1.33 0 0 1 5 12zm-.06-1.45h-.26v.93h.26c.36 0 .54-.16.54-.47c0-.31-.18-.46-.54-.46zM9 12.58a1.48 1.48 0 0 0 .44-1.12c0-1-.53-1.46-1.6-1.46H6.78v3h1.06A1.6 1.6 0 0 0 9 12.58zm-1.55-.13v-1.9h.33a.94.94 0 0 1 .7.25a.91.91 0 0 1 .25.67a1 1 0 0 1-.25.72a.94.94 0 0 1-.69.26h-.34zm4.45-.61h-.97V13h-.68v-3h1.74v.55h-1.06v.74h.97v.55z"
                    clipRule="evenodd"></path>
            </svg>
            <p class="leading-tight text-[12px]">
                Projektbeschreibung<br>{{ project.generalProjectNumber }}
            </p>
        </div>
        <div  class="flex space-x-2 items-center mt-3 fill-gray-600 cursor-pointer hover:text-amber-500 hover:fill-amber-500">
            <svg width="1.6em" height="1.6em" viewBox="0 0 16 16">
                <path fillRule="evenodd"
                    d="m13.85 4.44l-3.28-3.3l-.35-.14H2.5l-.5.5V7h1V2h6v3.5l.5.5H13v1h1V4.8l-.15-.36zM10 5V2l3 3h-3zM2.5 8l-.5.5v6l.5.5h11l.5-.5v-6l-.5-.5h-11zM13 13v1H3V9h10v4zm-8-1h-.32v1H4v-3h1.06c.75 0 1.13.36 1.13 1a.94.94 0 0 1-.32.72A1.33 1.33 0 0 1 5 12zm-.06-1.45h-.26v.93h.26c.36 0 .54-.16.54-.47c0-.31-.18-.46-.54-.46zM9 12.58a1.48 1.48 0 0 0 .44-1.12c0-1-.53-1.46-1.6-1.46H6.78v3h1.06A1.6 1.6 0 0 0 9 12.58zm-1.55-.13v-1.9h.33a.94.94 0 0 1 .7.25a.91.91 0 0 1 .25.67a1 1 0 0 1-.25.72a.94.94 0 0 1-.69.26h-.34zm4.45-.61h-.97V13h-.68v-3h1.74v.55h-1.06v.74h.97v.55z"
                    clipRule="evenodd"></path>
            </svg>
            <p class="leading-tight text-[12px]">
                Technisches Datenblatt<br>{{ project.coating.coatingProduct.product }}
            </p>
        </div>
        <div  class="flex space-x-2 items-center mt-3 fill-gray-600 cursor-pointer hover:text-amber-500 hover:fill-amber-500">
            <svg width="1.6em" height="1.6em" viewBox="0 0 16 16">
                <path fillRule="evenodd"
                    d="m13.85 4.44l-3.28-3.3l-.35-.14H2.5l-.5.5V7h1V2h6v3.5l.5.5H13v1h1V4.8l-.15-.36zM10 5V2l3 3h-3zM2.5 8l-.5.5v6l.5.5h11l.5-.5v-6l-.5-.5h-11zM13 13v1H3V9h10v4zm-8-1h-.32v1H4v-3h1.06c.75 0 1.13.36 1.13 1a.94.94 0 0 1-.32.72A1.33 1.33 0 0 1 5 12zm-.06-1.45h-.26v.93h.26c.36 0 .54-.16.54-.47c0-.31-.18-.46-.54-.46zM9 12.58a1.48 1.48 0 0 0 .44-1.12c0-1-.53-1.46-1.6-1.46H6.78v3h1.06A1.6 1.6 0 0 0 9 12.58zm-1.55-.13v-1.9h.33a.94.94 0 0 1 .7.25a.91.91 0 0 1 .25.67a1 1 0 0 1-.25.72a.94.94 0 0 1-.69.26h-.34zm4.45-.61h-.97V13h-.68v-3h1.74v.55h-1.06v.74h.97v.55z"
                    clipRule="evenodd"></path>
            </svg>
            <p class="leading-tight text-[12px]">
                Technisches Datenblatt<br>{{ project.coating.coatingProduct.product }}
            </p>
        </div>

        <p class="text font-bold mt-16 mb-5 leading-tight">
            Buchen sie direkt einen Kennenlerntermin für ihr Projekt!
        </p>
        <div class="flex space-x-4 items-center mt-2 fill-gray-600">
            <img class="w-20 object-cover object-center mt-3" src="/img/cop/sidebar_schroeer_01.jpg"
                alt="" />
            <div>
                <p class="text-[12px] font-semibold mt-3 leading-tight">
                    Dr. Achim Schröer<br>
                    Dipl. Chemiker<br>
                </p>
                <div class="text-[12px] font-normal leading-3 py-2">
                    Managing Director TriboCoating
                </div>
            </div>
        </div>
        <p class="text font-semibold mt-8 leading-tight">
            Wählen sie ihren Termin
        </p>
        <img class="w-[90%] object-cover object-center mt-3" src="/img/cop/sidebar_schroeer_calendly_01.png" alt="" />
      </div>
    </section>
</template>


<script setup>
import { gsap } from "~/assets/js/gsap"
import { ScrollToPlugin } from "~/assets/js/gsap/ScrollToPlugin"
gsap.registerPlugin(ScrollToPlugin)

const props = defineProps(["project", "product"])
const { project, product } = toRefs(props)

const setNav = (id) => {
    console.log('setNav', id)
    gsap.set(".nav-link", { fontWeight: "normal", color: "black" })
    gsap.set(id + "-nav-link", { fontWeight: "bold", color: "#2e9f00" })
}

const { $bus } = useNuxtApp()
$bus.$on('setNav', setNav)

const scrolTo = (id) => {
    gsap.to(window, { scrollTo: { y: id, offsetY: +50 }, duration: .8, ease: "power2.inOut" })
}

const generateReport = () => useGenerateReport(project.value, product.value)

const generateProductPdf = () => useProductPdf().generateReport(project.value.coating.coatingProduct._id)

</script>
