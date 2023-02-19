<template>
  <section id="corrosionproductproduction" class="section3Produktion relative mt-8 md:mr-12">
    <!-- section container -->
    <div class="relative flex-1 h-[80vh] mt-0 bg-bgBeige lg:pl-20  mb-5 mr-0 ">
      <div class="flex flex-col lg:flex-row lg:space-x-14 pt-20 pb-16 mr-12">
        <!-- text container -->
        <div class="lg:w-5/12 px-10  lg:px-12">
          <!-- sub navigation -->
          <nav>
            <ul class="flex justify-between space-x-8 px-8">
              <li @click="selectedNav = 1" :class="{ 'text-amber-500 fill-amber-500': selectedNav == 1 }"
                  class="active flex flex-col items-center cursor-pointer hover:text-amber-500 hover:fill-amber-500"
                  data-id="1">
                <svg width="2.0em" height="2.0em" viewBox="0 0 24 24">
                  <path
                      d="M18 20a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm-6 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm-6 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm12-6a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm-6 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm-6 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm12-6a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm-6 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4ZM6 8a2 2 0 1 1 0-4a2 2 0 0 1 0 4Z">
                  </path>
                </svg>
                <div class="text-[12px] font-bold text-center">Produktion
                </div>
              </li>
              <li @click="selectedNav = 2" :class="{ 'text-amber-500 fill-amber-500': selectedNav == 2 }"
                  class="active flex flex-col items-center cursor-pointer hover:text-amber-500 hover:fill-amber-500"
                  data-id="2">
                <svg width="2.0em" height="2.0em" viewBox="0 0 24 24" style="">
                  <path
                      d="m2.5 10.56l9 5.2a1 1 0 0 0 1 0l9-5.2a1 1 0 0 0 0-1.73l-9-5.2a1 1 0 0 0-1 0l-9 5.2a1 1 0 0 0 0 1.73ZM12 5.65l7 4l-7 4.05l-7-4.01Zm8.5 7.79L12 18.35l-8.5-4.91a1 1 0 0 0-1.37.36a1 1 0 0 0 .37 1.37l9 5.2a1 1 0 0 0 1 0l9-5.2a1 1 0 0 0 .37-1.37a1 1 0 0 0-1.37-.36Z">
                  </path>
                </svg>
                <div class="text-[12px] font-bold text-center">Vorbehandlung</div>
              </li>
              <li @click="selectedNav = 3" :class="{ 'text-amber-500 fill-amber-500': selectedNav == 3 }"
                  class="active flex flex-col items-center cursor-pointer hover:text-amber-500 hover:fill-amber-500"
                  data-id="3">
                <svg width="2.2em" height="2.2em" viewBox="0 0 256 256">
                  <path
                      d="M204.2 83.5A107 107 0 0 0 128.1 52h-.5c-48.9.2-90.4 33.5-103.4 78.9a3.7 3.7 0 0 0-.5 1.1a3 3 0 0 0-.1 1.3a106.5 106.5 0 0 0-3.6 27.8V184a12 12 0 0 0 12 12h192a12 12 0 0 0 12-12v-24a107.3 107.3 0 0 0-31.8-76.5ZM228 184a4 4 0 0 1-4 4H111.6l63.4-82.7a4 4 0 1 0-6.3-4.9L101.5 188H32a4 4 0 0 1-4-4v-22.9a102.6 102.6 0 0 1 2.6-23l26.8 7.1l1.1.2a4 4 0 0 0 1-7.9l-26.7-7.2C45.3 90.8 81.3 61.8 124 60.1V88a4 4 0 0 0 8 0V60.1a99.3 99.3 0 0 1 66.6 29.1a98.2 98.2 0 0 1 24.9 41.1l-27 7.2a4 4 0 0 0 1 7.9l1.1-.2l27-7.2a100.2 100.2 0 0 1 2.4 22Z">
                  </path>
                </svg>
                <div class="text-[12px] font-bold text-center">QS
                </div>
              </li>
            </ul>
          </nav>
          <!-- text content -->
          <div class="subcont-holder-s3-fun mt-8">
            <div :class="{ 'show': selectedNav == 1 }" class="sub-content-1 sub-content">
              <div class="text">

                <div v-if="project.generalProjectType == 'VA'" class="font-weight-bold uppertext"
                     style="margin-top: 40px;">Produktionsinformationen zu Ihrem angewendeten Korrosionsschutz
                </div>
                <div v-if="project.generalProjectType == 'BE'" class="font-weight-bold uppertext"
                     style="margin-top: 40px;">Produktionsinformationen zu Ihrem empfohlenen Korrosionsschutz
                </div>
                <h1 class="text-3xl font-bold tracking-tight px-10 lg:px-0">
                  Produktion<br>Zink-Nickel-Trommelbeschichtung</h1>

                <div class="mt-8">
                  <p>Bei Hillebrand Coating werden Ihre Serienaufträge auf vollautomatischen
                    Beschichtungsanlagen
                    durchgeführt. Für die Beschichtung von Schüttgutteilen stehen uns
                    Tauchschleuderzentrifugen zur Verfügung – sowohl in Horizontal- als
                    Vertikaltechnik. Abhängig von
                    Ihren Bauteilanforderungen und der Geometrie wählen wir das geeignete Verfahren.
                    Die
                    Großserienbeschichtung von Präzisionsbauteilen erfolgt mit einem
                    Lackierrobotersystem mit
                    integriertem Durchlaufofen für eine hohe Wiederholgenauigkeit und gleichmäßigem
                    Beschichtungsverlauf. Die Beschichtungskonzepte von Hillebrand Coating sind für
                    Ihre
                    Automotive-Anforderungen ausgelegt.
                  </p>
                  <img class="mt-8" src="/img/cop/sec8/whw-hillebrand_logo.png" width="200">
                </div>
                <!-- sub nav -->
                <ul class="pt-12">
                  <li @click="selectedSubNav = 1" class="sub-nav active" data-id="1-1">
                    <div :class="{ 'text-amber-500 fill-amber-500': selectedSubNav == 1 }"
                         class="flex flex-row cursor-pointer hover:text-amber-500 hover:fill-amber-500">
                      <div class="pt-1">
                        <svg width="1.5em" height="1.5em" viewBox="0 0 36 36">
                          <path
                              d="M32.12 10H3.88A1.88 1.88 0 0 0 2 11.88v18.24A1.88 1.88 0 0 0 3.88 32h28.24A1.88 1.88 0 0 0 34 30.12V11.88A1.88 1.88 0 0 0 32.12 10ZM32 30H4V12h28Z"
                              class="clr-i-outline clr-i-outline-path-1"></path>
                          <path fill="currentColor"
                                d="M8.56 19.45a3 3 0 1 0-3-3a3 3 0 0 0 3 3Zm0-4.6A1.6 1.6 0 1 1 7 16.45a1.6 1.6 0 0 1 1.56-1.6Z"
                                class="clr-i-outline clr-i-outline-path-2"></path>
                          <path fill="currentColor"
                                d="m7.9 28l6-6l3.18 3.18L14.26 28h2l7.46-7.46L30 26.77v-2L24.2 19a.71.71 0 0 0-1 0l-5.16 5.16l-3.67-3.66a.71.71 0 0 0-1 0L5.92 28Z"
                                class="clr-i-outline clr-i-outline-path-3"></path>
                          <path fill="currentColor"
                                d="M30.14 3a1 1 0 0 0-1-1h-22a1 1 0 0 0-1 1v1h24Z"
                                class="clr-i-outline clr-i-outline-path-4"></path>
                          <path fill="currentColor"
                                d="M32.12 7a1 1 0 0 0-1-1h-26a1 1 0 0 0-1 1v1h28Z"
                                class="clr-i-outline clr-i-outline-path-5"></path>
                          <path fill="none" d="M0 0h36v36H0z"></path>
                        </svg>

                      </div>
                      <div class="pl-3 py-1 font-bold">
                        <h4>Produktionsansichten</h4>
                      </div>
                    </div>
                  </li>
                  <li @click="selectedSubNav = 2" class="sub-nav pt-3" data-id="1-2">
                    <div :class="{ 'text-amber-500 fill-amber-500': selectedSubNav == 2 }"
                         class="flex flex-row cursor-pointer hover:text-amber-500 hover:fill-amber-500">
                      <div class="pt-1">
                        <svg width="1.5em" height="1.5em" viewBox="0 0 256 256">
                          <path
                              d="M232 208a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V48a8 8 0 0 1 16 0v108.7l50.3-50.4a8.1 8.1 0 0 1 11.4 0l26.3 26.4L188.7 72H168a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8v40a8 8 0 0 1-16 0V83.3l-66.3 66.4a8.1 8.1 0 0 1-11.4 0L96 123.3l-56 56V200h184a8 8 0 0 1 8 8Z">
                          </path>
                        </svg>
                      </div>
                      <div class="pl-3 py-1 font-bold">
                        <h4>HC Ansicht</h4>
                      </div>
                    </div>
                  </li>
                  <li @click="selectedSubNav = 3" class="sub-nav pt-3" data-id="1-3">
                    <div :class="{ 'text-amber-500 fill-amber-500': selectedSubNav == 3 }"
                         class="flex flex-row cursor-pointer hover:text-amber-500 hover:fill-amber-500">
                      <div class="pt-1">
                        <svg width="1.4em" height="1.5em" viewBox="0 0 1536 1792">
                          <path
                              d="M971 1244v211q0 67-39 67q-23 0-45-22v-301q22-22 45-22q39 0 39 67zm338 1v46h-90v-46q0-68 45-68t45 68zm-966-218h107v-94H138v94h105v569h100v-569zm288 569h89v-494h-89v378q-30 42-57 42q-18 0-21-21q-1-3-1-35v-364h-89v391q0 49 8 73q12 37 58 37q48 0 102-61v54zm429-148v-197q0-73-9-99q-17-56-71-56q-50 0-93 54V933h-89v663h89v-48q45 55 93 55q54 0 71-55q9-27 9-100zm338-10v-13h-91q0 51-2 61q-7 36-40 36q-46 0-46-69v-87h179v-103q0-79-27-116q-39-51-106-51q-68 0-107 51q-28 37-28 116v173q0 79 29 116q39 51 108 51q72 0 108-53q18-27 21-54q2-9 2-58zM790 525V315q0-69-43-69t-43 69v210q0 70 43 70t43-70zm719 751q0 234-26 350q-14 59-58 99t-102 46q-184 21-555 21t-555-21q-58-6-102.5-46T53 1626q-26-112-26-350q0-234 26-350q14-59 58-99t103-47q183-20 554-20t555 20q58 7 102.5 47t57.5 99q26 112 26 350zM511 0h102L492 399v271H392V399q-14-74-61-212Q294 84 266 0h106l71 263zm370 333v175q0 81-28 118q-38 51-106 51q-67 0-105-51q-28-38-28-118V333q0-80 28-117q38-51 105-51q68 0 106 51q28 37 28 117zm335-162v499h-91v-55q-53 62-103 62q-46 0-59-37q-8-24-8-75V171h91v367q0 33 1 35q3 22 21 22q27 0 57-43V171h91z">
                          </path>
                        </svg>
                      </div>
                      <div class="pl-3 py-1 font-bold">
                        <h4>Produktionsvideo</h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>


            </div>
            <div :class="{ 'show': selectedNav == 2 }" class="sub-content-2 sub-content">
              <div class="text-sm">

                <div v-if="project.generalProjectType == 'VA'" class="font-weight-bold uppertext"
                     style="margin-top: 40px;">allgemeine Informationen zu Ihrer angewendeten Deckschicht
                </div>
                <div v-if="project.generalProjectType == 'BE'" class="font-weight-bold uppertext"
                     style="margin-top: 40px;">allgemeine Informationen zu Ihrer empfohlenen Deckschicht
                </div>
                <h1 class="text-3xl font-InterExtraBold tracking-tight px-10 lg:px-0">Wie funktionieren
                  Gleitlacke?</h1>

                <div class="mt-8">
                  <p>Bei der Relativbewegung der Kontaktpartner erfolgt zunächst ein Einglätten der
                    Gleitlackoberfläche.
                    Durch einen partiellen Austrag schmierwirksamer Komponenten aus der
                    Gleitlackschicht kommt es zur Ausbildung eines sogenannten Transferfilmes auf
                    dem Gegenkörper. Der
                    Aufbau eines Schmierstofffilms zwischen den Gleitpartnern führt zu einer
                    Verringerung der Reibwerte.
                  </p><br><br>
                  <p>Die Schmiereigenschaften des Molybdändisulfides beruht - ähnlich der des Grafits
                    - darauf, dass
                    diese Stoffe auf Grund ihres Kristallgefüges befähigt sind, ohne Veränderung der
                    metallischen
                    Oberfläche Schmierwirkung zu entfalten. Das MoS2 gehört in die Gruppe der
                    Schichtgitterkristalle, d.
                    h. die Atome oder Ionen sind in Schichten angeordnet, vorwiegend in der Weise,
                    dass die einzelnen
                    Schichten nur aus Atomen oder Ionen gleicher Art und gleicher Ladung bestehen.
                  </p>
                </div>
              </div>
            </div>
            <div :class="{ 'show': selectedNav == 3 }" class="sub-content-3 sub-content">
              <div class="text-sm">

                <div v-if="project.generalProjectType == 'VA'" class="font-weight-bold uppertext"
                     style="margin-top: 40px;">allgemeine Informationen zu Ihrer angewendeten Deckschicht
                </div>
                <div v-if="project.generalProjectType == 'BE'" class="font-weight-bold uppertext"
                     style="margin-top: 40px;">allgemeine Informationen zu Ihrer empfohlenen Deckschicht
                </div>
                <h1 class="text-3xl font-InterExtraBold tracking-tight px-10 lg:px-0">
                  Flüssigschmierstoffe
                  vs.<br>Trockenschmierstoffe
                </h1>

                <div class="mt-8">
                  <h1>Gleitfilme vs.<br>Flüssigschmierstoffe vs.<br>Trockenschmierstoffe</h1>
                  <h2>1,85
                    <span>Helligkeitswert LAB*</span>
                  </h2>
                  <p>ceramHEO® zeigt eine farbstabile tiefschwarze Oberfläche. Diese Anforderung wird
                    in der
                    Industrie auch gerne als "Klavierlackoptik" gefordert -
                    eben wie ein hochwertiger Konzertflügel, hochglänzend und tiefschwarz. Die
                    Farbbeständigkeit
                    über die Lebensdauer des lackierten Bauteils ist uns durch zahlreiche
                    Spezifikationen der OEMs
                    bestätigt. Sprechen Sie
                    mit unsere Qualitätssicherung. Wir erfüllen die Normen der Automobilindustrie.
                  </p>
                  <p>ceramHEO® zeigt eine farbstabile tiefschwarze Oberfläche. Diese Anforderung wird
                    in der
                    Industrie auch gerne als "Klavierlackoptik" gefordert -
                    eben wie ein hochwertiger Konzertflügel, hochglänzend und tiefschwarz. Die
                    Farbbeständigkeit
                    über die Lebensdauer des lackierten Bauteils ist uns durch zahlreiche
                    Spezifikationen der OEMs
                    bestätigt. Sprechen Sie
                    mit unsere Qualitätssicherung. Wir erfüllen die Normen der Automobilindustrie.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- images container -->
        <div class="lg:w-7/12 mt-12 lg:mt-0">
          <div class="w-full h-full">
            <div :class="{ 'show': selectedNav == 1 && selectedSubNav == 1 }"
                 class="flex items-center h-full w-full bgbeige-left-div bgbeige-left-div-1">
              <div class="w-full mx-auto">
                <Splide aria-labelledby="autoplay-example-heading" :options="options" :has-track="false">
                  <div>
                    <SplideTrack>
                      <SplideSlide>
                        <img src="/img/cop/sec8/a50_03.jpg" alt="">

                      </SplideSlide>
                      <SplideSlide>
                        <img src="/img/cop/sec8/a50_02.jpg" alt="">
                      </SplideSlide>
                    </SplideTrack>
                  </div>

                  <div class="splide__progress">
                    <div class="splide__progress__bar">
                    </div>
                  </div>

<!--                  <button class="splide__toggle">
                    <span class="splide__toggle__play">Play</span>
                    <span class="splide__toggle__pause">Pause</span>
                  </button>-->
                </Splide>

              </div>
            </div>
            <div :class="{ 'show': selectedNav == 1 && selectedSubNav == 2 }"
                 class="flex items-center h-full w-full bgbeige-left-div bgbeige-left-div-1">
              <div class="w-full mx-auto">
                <img class="h-full" src="/img/cop/sec5/tribo2_02.jpg">
              </div>
            </div>
            <div :class="{ 'show': selectedNav == 1 && selectedSubNav == 3 }"
                 class="flex items-center h-full w-full bgbeige-left-div bgbeige-left-div-1">
              <div class="w-full mx-auto">
                <img class="h-full" src="/img/cop/sec5/tribo2_03.jpg">
              </div>
            </div>



            <div :class="{ 'show': selectedNav == 2 }" class="bgbeige-left-div bgbeige-left-div-2">
              <div class="w-full flex flex-col bg-gray-700">
                <div class="w-10/12 pt-12 mx-auto">
                  <div class="video-container">
                    <video playsInline autoPlay loop="true" width="790" height="1060">
                      <source type="video/mp4" src="/video/ani2.mp4">
                    </video>

                    <div class="overlay">
                    </div>
                  </div>
                </div>


              </div>
            </div>
            <div :class="{ 'show': selectedNav == 3 }" class="bgbeige-left-div bgbeige-left-div-3">
              <div class="w-10/12 pt-12 mx-auto text-white text-[12px]">
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// or only core styles
import '@splidejs/vue-splide/css';
import '@splidejs/vue-splide/css/core';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';

const props = defineProps(["project"])
const { project } = toRefs(props)

const selectedNav = ref(1)
const selectedSubNav = ref(1)
const options = ref({
  rewind: true,
  gap: '1rem',
  autoplay: true,
  speed: 1500,
  arrows:false,
  pagination: false

})

</script>

<style lang="scss" scoped>
section.section3Produktion {

  .bgbeige-left-div {

    display: none;

    &.show {
      display: block;
    }

    &.bgbeige-left-div-2 {
      video {
        object-fit: fill;
        width: 100%;
        height: 100%;
        max-width: 100%;
      }
    }

  }

  .show {
    display: initial;
  }
}

.subcont-holder-s3-fun {
  opacity: 1;

  .sub-content {
    opacity: 0;
    display: none;
    width: 100%;
    -webkit-transition: opacity 0.5s ease-in-out;
    -moz-transition: opacity 0.5s ease-in-out;
    -ms-transition: opacity 0.5s ease-in-out;
    -o-transition: opacity 0.5s ease-in-out;
    transition: opacity 0.5s ease-in-out;

    &.show {
      opacity: 1;
      display: flex;
    }
  }
}
</style>

