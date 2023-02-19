<template>
    <!-- Sidebar -->
    <section class="w-full p-3 hidden lg:inline">
        <div class="flex items-center space-x-2">
            <!--            <div class="border-2 border-black rounded-full p-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                fill-rule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clip-rule="evenodd"
                />
            </svg>
            </div>-->
            <div class="leading-4">
                <div class="text-left pl-0">
                    <span v-if="project.generalProjectType == 'VA'" class="font-bold text">Versuchsauftrag {{
                        project.generalProjectNumber
                    }}</span>
                    <span v-if="project.generalProjectType == 'FM'" class="font-bold text">Farbmuster {{
                        project.generalProjectNumber
                    }}</span>
                    <span v-if="project.generalProjectType == 'BE'" class="font-bold text">Beschichtungsempfehlung {{
                        project.generalProjectNumber
                    }}</span>
                </div>

            </div>
        </div>

        <h4 class="text font-bold my-5">Navigation</h4>
        <p id="start-nav-link" @click="scrolTo('#hero')" class="nav-link text-[12px] cursor-pointer">Start</p>
        <p id="projektbeschreibung-nav-link" @click="scrolTo('#projektbeschreibung')" class="nav-link text-[12px] cursor-pointer">Projektbeschreibung</p>
        <p id="beschichtungsanforderungen-nav-link" @click="scrolTo('#beschichtungsanforderungen')" class="nav-link text-[12px] cursor-pointer">Beschichtungsanforderungen</p>

        <div class="flex justify-between mt-3">
            <div>
                <p id="decklackprodukt-nav-link" @click="scrolTo('#decklackprodukt')" class="nav-link text-[12px] cursor-pointer">Decklackprodukt</p>
                <p id="decklackproduktgeneral-nav-link" @click="scrolTo('#decklackproduktgeneral')" class="nav-link text-[12px] cursor-pointer">
                    allgemeine Info {{ project.coating.coatingProduct.solidlubricant }}
                </p>
                <p id="decklackproduktproduktion-nav-link" @click="scrolTo('#decklackproduktproduktion')" class="nav-link text-[12px] cursor-pointer">Decklack Produktion</p>
            </div>
            <p class="font-medium text-right text-sm pt-4">Decklack</p>
        </div>
        <div class="flex justify-between mt-3">
            <div>
              <p id="korrosionsprodukt-nav-link" @click="scrolTo('#korrosionsprodukt')"
                 class="nav-link text-[12px] cursor-pointer">
                Korrosionschutzprodukt
              </p>
              <p id="korrosionsproduktgeneral-nav-link" @click="scrolTo('#korrosionsproduktgeneral')"
                 class="nav-link text-[12px] cursor-pointer">
                allgemeine Info
              </p>
              <p id="korrosionsproduktproduktion-nav-link" @click="scrolTo('#korrosionsproduktproduktion')"
                 class="nav-link text-[12px] cursor-pointer">
                Korrosionschutz Produktion
              </p>
            </div>
            <p class="font-medium text-right text-sm pt-4">Korrosionsschutz</p>
        </div>

        <h4 class="text font-bold mt-12 mb-5">Download</h4>
        <div class="flex space-x-2 items-center fill-gray-600">
            <svg width="1.6em" height="1.6em" viewBox="0 0 16 16">
                <path fillRule="evenodd"
                    d="m13.85 4.44l-3.28-3.3l-.35-.14H2.5l-.5.5V7h1V2h6v3.5l.5.5H13v1h1V4.8l-.15-.36zM10 5V2l3 3h-3zM2.5 8l-.5.5v6l.5.5h11l.5-.5v-6l-.5-.5h-11zM13 13v1H3V9h10v4zm-8-1h-.32v1H4v-3h1.06c.75 0 1.13.36 1.13 1a.94.94 0 0 1-.32.72A1.33 1.33 0 0 1 5 12zm-.06-1.45h-.26v.93h.26c.36 0 .54-.16.54-.47c0-.31-.18-.46-.54-.46zM9 12.58a1.48 1.48 0 0 0 .44-1.12c0-1-.53-1.46-1.6-1.46H6.78v3h1.06A1.6 1.6 0 0 0 9 12.58zm-1.55-.13v-1.9h.33a.94.94 0 0 1 .7.25a.91.91 0 0 1 .25.67a1 1 0 0 1-.25.72a.94.94 0 0 1-.69.26h-.34zm4.45-.61h-.97V13h-.68v-3h1.74v.55h-1.06v.74h.97v.55z"
                    clipRule="evenodd"></path>
            </svg>
            <p class="leading-tight text-[12px]">
                Projektbeschreibung {{ project.generalProjectNumber }}
            </p>
        </div>
        <div class="flex space-x-2 items-center mt-2 fill-gray-600">
            <svg width="1.6em" height="1.6em" viewBox="0 0 16 16">
                <path fillRule="evenodd"
                    d="m13.85 4.44l-3.28-3.3l-.35-.14H2.5l-.5.5V7h1V2h6v3.5l.5.5H13v1h1V4.8l-.15-.36zM10 5V2l3 3h-3zM2.5 8l-.5.5v6l.5.5h11l.5-.5v-6l-.5-.5h-11zM13 13v1H3V9h10v4zm-8-1h-.32v1H4v-3h1.06c.75 0 1.13.36 1.13 1a.94.94 0 0 1-.32.72A1.33 1.33 0 0 1 5 12zm-.06-1.45h-.26v.93h.26c.36 0 .54-.16.54-.47c0-.31-.18-.46-.54-.46zM9 12.58a1.48 1.48 0 0 0 .44-1.12c0-1-.53-1.46-1.6-1.46H6.78v3h1.06A1.6 1.6 0 0 0 9 12.58zm-1.55-.13v-1.9h.33a.94.94 0 0 1 .7.25a.91.91 0 0 1 .25.67a1 1 0 0 1-.25.72a.94.94 0 0 1-.69.26h-.34zm4.45-.61h-.97V13h-.68v-3h1.74v.55h-1.06v.74h.97v.55z"
                    clipRule="evenodd"></path>
            </svg>
            <p class="leading-tight text-[12px]">
                Technisches Datenblatt {{ project.coating.coatingProduct.product }}
            </p>
        </div>
        <div class="flex space-x-2 items-center mt-2 fill-gray-600">
            <svg width="1.6em" height="1.6em" viewBox="0 0 16 16">
                <path fillRule="evenodd"
                    d="m13.85 4.44l-3.28-3.3l-.35-.14H2.5l-.5.5V7h1V2h6v3.5l.5.5H13v1h1V4.8l-.15-.36zM10 5V2l3 3h-3zM2.5 8l-.5.5v6l.5.5h11l.5-.5v-6l-.5-.5h-11zM13 13v1H3V9h10v4zm-8-1h-.32v1H4v-3h1.06c.75 0 1.13.36 1.13 1a.94.94 0 0 1-.32.72A1.33 1.33 0 0 1 5 12zm-.06-1.45h-.26v.93h.26c.36 0 .54-.16.54-.47c0-.31-.18-.46-.54-.46zM9 12.58a1.48 1.48 0 0 0 .44-1.12c0-1-.53-1.46-1.6-1.46H6.78v3h1.06A1.6 1.6 0 0 0 9 12.58zm-1.55-.13v-1.9h.33a.94.94 0 0 1 .7.25a.91.91 0 0 1 .25.67a1 1 0 0 1-.25.72a.94.94 0 0 1-.69.26h-.34zm4.45-.61h-.97V13h-.68v-3h1.74v.55h-1.06v.74h.97v.55z"
                    clipRule="evenodd"></path>
            </svg>
            <p class="leading-tight text-[12px]">
                Technisches Datenblatt {{ project.coating.coatingProduct.product }}
            </p>
        </div>

        <p class="text font-bold mt-16 mb-5 leading-tight">
            Buchen sie direkt einen Termin für ihr Projekt!
        </p>
        <div class="flex space-x-4 items-center mt-2 fill-gray-600">
            <img class="w-20 object-cover object-center mt-3" src="/img/cop/sidebar_natrup_02.jpg"
                alt="" />
            <div>
                <p class="text-[12px] font-semibold mt-3 leading-tight">
                  Susanne Meyer zu Natrup<br>
                  Dipl.-Kauffrau<br>
                </p>
                <div class="text-[12px] font-normal leading-3 py-2">
                    Key Account Decorative<br>
                    Tel:  +49 2377 801125<br>
                    Mobil:  +49 170 8143392
                </div>
            </div>
        </div>

        <!-- <img class="w-full h-44 object-cover object-center mt-3" src="/img/cop/sidebar_schroeer_01.png" alt=""/>-->
        <!--        <p class="text-[13px] font-semibold mt-3 leading-tight">
          Dr. Achim Schröer<br>
          Dipl. Chemiker<br>
          Managing Director TriboCoating
        </p>-->
        <p class="text font-semibold mt-8 leading-tight">
            Wählen sie ihren Termin
        </p>
        <img class="w-[90%] object-cover object-center mt-3" src="/img/cop/sidebar_schroeer_calendly_01.png"
            alt="" />

    </section>
</template>


<script setup>
import { gsap } from "~/assets/js/gsap"
import { ScrollToPlugin } from "~/assets/js/gsap/ScrollToPlugin"
gsap.registerPlugin(ScrollToPlugin)

const props = defineProps(["project"])
const { project } = toRefs(props)

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

/*
function updateValues() {
    gsap.set(".nav-link", { fontWeight: "normal", color: "black" })
    if (ScrollTrigger.isInViewport(document.querySelector("#projektbeschreibung"))) {
        console.log('1 | projektbeschreibung')
        gsap.set("#projektbeschreibung-nav-link", { fontWeight: "bold", color: "#2e9f00" })
    }
    if (ScrollTrigger.isInViewport(document.querySelector("#beschichtungsanforderungen"))) {
        console.log('2 | beschichtungsanforderungen')
        gsap.set("#beschichtungsanforderungen-nav-link", { fontWeight: "bold", color: "#2e9f00" })
    }
    if (ScrollTrigger.isInViewport(document.querySelector("#decklackprodukt"))) {
        console.log('3 | decklackprodukt')
        gsap.set("#decklackprodukt-nav-link", { fontWeight: "bold", color: "#2e9f00" })
    }
    if (ScrollTrigger.isInViewport(document.querySelector("#decklackproduktgeneral"))) {
        console.log('4 | decklackproduktgeneral')
        gsap.set("#decklackproduktgeneral-nav-link", { fontWeight: "bold", color: "#2e9f00" })
    }
    if (ScrollTrigger.isInViewport(document.querySelector("#decklackproduktproduktion"))) {
        console.log('5 | decklackproduktproduktion')
        gsap.set("#decklackproduktproduktion-nav-link", { fontWeight: "bold", color: "#2e9f00" })
    }
}

onMounted(() => {
    ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: updateValues
    })
})
*/

</script>
