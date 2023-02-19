<template>
  <div class="relative flex-1 bg-bgBeige mt-40 h-[100vh] lg:pl-20 mr-0 md:mr-12">
    <div class="">
      <div class="absolute top-0 lg:-top-[25px] text-5xl font-bold tracking-tight">
        <div class="">Korrosionsschutz</div>
      </div>
    </div>
    <div class="flex flex-col h-auto lg:flex-row">
      <!-- text content -->
      <div class="lg:w-6/12 h-auto px-10 lg:px-0 lg:pr-20 pt-24 py-20">
        <!-- projectbeschreibung -->

        <div class="text-sm">
          <div v-if="project.generalProjectType == 'BE'" class="">Empfohlene Korrosionsschutz</div>
          <div v-if="project.generalProjectType == 'VA'" class="">applizierte Korrosionsschutz</div>
        </div>
        <h1 class="text-3xl font-bold tracking-tight px-10 lg:px-0">{{project.corrosion.corrosionProduct.product}}</h1>

        <div class="mt-6">Funktionsweise: Kathodischer Korrosionsschutz</div>
        <div class="flex mt-2">
          <div>Farbe:</div>
          <div class="pl-4">
            <svg width="120" height="30">
              <rect width="40" height="24" style="stroke-width:0;stroke:rgb(0,0,0)" v-bind:style="{ fill: project.coating.coatingProduct.color ? project.coating.coatingProduct.color : 'transparent' }"></rect>
            </svg>
          </div>
        </div>
        <div class="mt-2">
          Betriebstemperaturbereich: {{project.coating.coatingProduct.optemp_from}} bis {{project.coating.coatingProduct.optemp_to}}
        </div>
        <div class="mt-2">
          optimale Schichtdicke: {{project.coating.coatingProduct.layerthickness_from}} bis {{project.coating.coatingProduct.layerthickness_to}} µ
        </div>

        <!-- projectbeschreibung -->
        <div>
          <h3 class="text-xl font-bold tracking-tight my-5 mt-8">Profil</h3>
          <p class="pt-3">{{project.coating.coatingProduct.tcesc_trockenschmierung}} {{project.coating.coatingProduct.tcesc_langzeitschmierung}}</p>
        </div>

        <div>
          <h3 class="text-xl font-bold tracking-tight my-5 mt-8">Besonderheiten</h3>
          <ul class="text">
            <li v-for="(advantage, index) in project.coating.coatingProduct.advantages" :key="index">{{advantage.text}}</li>
          </ul>
        </div>

        <div class="pt-5">
          <h3 class="text-xl font-bold tracking-tight my-5 mt-8">Einsatzbedingungen</h3>
          <ul class="text">
            <li v-for="(feature, index) in project.coating.coatingProduct.features" :key="index">
              <div class="flex items-center space-x-2">
                <div class="w-2 h-2 bg-amber-500 mt-1"></div>
                <div>{{feature}}</div>
              </div>
            </li>

          </ul>
        </div>
      </div>
      <!-- image content -->
      <div class="lg:w-6/12 mt-0 lg:mt-0 pr-0 pt-24 pb-12">
        <!-- top -->
        <div class="w-full h-1/2 flex justify-center items-center object-cover bg-gray-700">
          <img class="w-full w-[65%] object-cover py-24" src="/img/cop/corroion_diagramm_01.png" alt="" />
        </div>
        <!-- bottom -->
        <div class="relative w-full h-1/2">
          <img class="w-full h-full object-cover" src="/img/cop/sec6/znNi2.jpg" alt="" />
          <!-- text overlay -->
          <div class="absolute flex justify-center bottom-5 w-full font-bold text left-0">
            <div class="text-amber-500 w-56 text-center">Farbe {{project.coating.coatingProduct.product}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--  <section id="coatingproduct" class="relative h-[100vh] bg-bgBeige mt-16 md:mr-12">
      <div class="bg-white flex-1 h-12 px-6 lg:pl-20 lg:pr-10 mb-5 mr-0">
        <div class="absolute top-10 lg:top-[24px] text-5xl font-bold tracking-tight">
          <div class="">Deckschicht</div>
        </div>
      </div>

      &lt;!&ndash; section container &ndash;&gt;
      <div class="flex-1 mt-0 bg-bgBeige lg:pl-20  mb-5 mr-0">


        <div class="flex flex-col lg:flex-row lg:space-x-14 py-20">
          &lt;!&ndash; text container &ndash;&gt;
          <div class="w-full lg:w-6/12 px-10 pt-4 lg:px-0">
            <div class="text-sm">
              <div v-if="project.generalProjectType == 'BE'" class="">Empfohlene Deckschicht</div>
              <div v-if="project.generalProjectType == 'VA'" class="">applizierte Deckschicht</div>
            </div>
            <h1 class="text-3xl font-bold tracking-tight px-10 lg:px-0">{{project.coating.coatingProduct.category}} Produkt: {{project.coating.coatingProduct.product}}</h1>

            <div class="mt-4">Festschmierstoff: {{project.coating.coatingProduct.solidlubricant}}</div>
            <div class="flex mt-1">
              <div>Farbe:</div>
              <div class="pl-4">
              <svg width="120" height="30">
                <rect width="40" height="24" style="stroke-width:0;stroke:rgb(0,0,0)" v-bind:style="{ fill: project.coating.coatingProduct.color ? project.coating.coatingProduct.color : 'transparent' }"></rect>
              </svg>
            </div>
            </div>
            <div>Betriebstemperaturbereich: {{project.coating.coatingProduct.optemp_from}} bis {{project.coating.coatingProduct.optemp_to}}</div>
            <div class="mt-1">optimale Schichtdicke: {{project.coating.coatingProduct.layerthickness_from}} bis {{project.coating.coatingProduct.layerthickness_to}} µ</div>

            &lt;!&ndash; projectbeschreibung &ndash;&gt;
            <div>
              <h3 class="text-xl font-bold tracking-tight my-5 mt-8">Profil</h3>
              <p class="pt-3">{{project.coating.coatingProduct.tcesc_trockenschmierung}} {{project.coating.coatingProduct.tcesc_langzeitschmierung}}</p>
            </div>

            <div class="pt-5">
              <h3 class="text-xl font-bold tracking-tight my-5 mt-8">Besonderheiten</h3>
              <ul class="text-[12px]">
                <li v-for="(advantage, index) in project.coating.coatingProduct.advantages" :key="index">{{advantage.text}}</li>
              </ul>
            </div>

            <div class="pt-5">
              <h3 class="text-xl font-bold tracking-tight my-5 mt-8">Einsatzbedingungen</h3>
              <ul class="text-[12px]">
                <li v-for="(feature, index) in project.coating.coatingProduct.features" :key="index">{{feature}}</li>

              </ul>
            </div>



          </div>

          &lt;!&ndash; images container &ndash;&gt;
          <div class="w-full lg:w-6/12 h-full flex flex-col mt-20 lg:mt-0">
            <div class="grid grid-cols-1 gap-0">
              <div class="h-full bg-red-200">
                top
              </div>
  &lt;!&ndash;            <div class="w-10/12 pt-12 mx-auto">
                <svg x="0px" y="0px" viewBox="0 0 1235 632" xml:space="preserve">
                          <g id="Ebene_2">
                              <g class="drop">
                                  <path class="st1"
                                        d="M617.5,379c-24.8,43.3-74.4,89.7-74.4,131.1c0,41.4,33.3,74.9,74.4,74.9c41.1,0,74.4-33.5,74.4-74.9
                                      C691.9,468.7,642.3,422.2,617.5,379z M615.3,553.3l-0.9,3.6c-1.1,4.5-5.8,7.8-10.3,6.8c-20.5-5-36.7-21.2-41.8-41.7
                                      c-1.1-4.5,2.1-9.3,6.6-10.6l3.7-1.1c4.4-1.3,7.9,1.5,8.9,6c3.1,13.8,13.9,24.7,27.6,27.9C613.6,545.2,616.4,548.8,615.3,553.3z"
                                  />
                                <g>
                                  <line class="st2" x1="617" y1="199" x2="617" y2="321"/>
                                  <line class="st2" x1="368.5" y1="203" x2="571" y2="321"/>
                                  <line class="st2" x1="866.5" y1="203" x2="662" y2="321"/>
                                  </g>
                              </g>
                            <text transform="matrix(1 0 0 1 380 30)" class="st0 st8">Zusammensetzung {{project.coating.coatingProduct.product}}</text>
                            <text transform="matrix(1 0 0 1 197.895 110)" class="st3 st4 st5">Festschmierstoff</text>
                            <text transform="matrix(1 0 0 1 258.3579 160)" class="st3 st6 st7">{{project.coating.coatingProduct.solidlubricant}}</text>
                            <text transform="matrix(1 0 0 1 532.6597 160)" class="st3 st6 st7">organisch</text>
                            <text transform="matrix(1 0 0 1 746.2729 160)" class="st3 st6 st7">korrosionsschützend</text>
                            <text transform="matrix(1 0 0 1 569.895 110)" class="st3 st4 st5">Binder</text>
                            <text transform="matrix(1 0 0 1 858.895 110)" class="st3 st4 st5">Additive</text>
                          </g>
                </svg>
              </div>&ndash;&gt;

            <div class="h-full bg-blue-200">
              bottom
  &lt;!&ndash;            <img class=" w-full h-1/2 object-cover" src="/img/cop/schliess_01.jpg" alt="" />
              <div class="absolute flex justify-center top-5 w-full font-bold text left-0">
                <div class="text-amber-500 w-56 text-center">Farbbeispiel {{project.coating.coatingProduct.product}}</div>
              </div>&ndash;&gt;
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>-->

</template>

<script setup>
import {useMq } from "vue3-mq"
const $mq = useMq();

const props = defineProps(["project"])
const { project } = toRefs(props)
</script>

<style lang="scss" scoped>

svg {
  /*  @include large {
     width: 110% !important;
     margin-left: -30px !important;
   }
   @include small {
     width: 125%;
     margin-left: -30px !important;
   }*/


  .drop {
    padding-top: 80;
  }

  .st0 {
    fill: #efb904;
  }

  .st1 {
    fill-rule: evenodd;
    clip-rule: evenodd;
    fill: #ffffff;
  }

  .st2 {
    fill: none;
    stroke: #ffffff;
    stroke-width: 4;
    stroke-miterlimit: 10;
  }

  .st3 {
    fill: #ffffff;
  }

  .st4 {
  }

  .st5 {
    font-size: 32px;
  }

  .st6 {
    font-weight: 700;
  }

  .st7 {
    font-size: 36px;
  }

  .st8 {
    //font-family: $display-font;
    font-size: 2.4rem;
    font-weight: bold;
  }





}
</style>
