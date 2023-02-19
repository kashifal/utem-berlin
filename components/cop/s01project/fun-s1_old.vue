<template>
  <section id="projectdescription" class="mb-14">
    <div class="relative bg-bgBeige flex-1 h-24 px-6 lg:pl-20 lg:pr-10 mb-2 mr-0">
      <div class="absolute top-10 lg:top-[70px] text-5xl font-bold tracking-tight">
        <div class="">Projekt</div>
      </div>
    </div>
    <!-- content -->
    <div class="flex flex-col lg:flex-row lg:space-x-14 lg:pl-20 lg:pr-10 mt-20">
      <!-- project data content -->
      <div class="lg:w-6/12 px-5 lg:px-0">

        <h1 class="text-[28px] md:text-3xl font-bold tracking-tight px-0 lg:px-0 pt-4">
          <div v-if="project.generalProjectType == 'VA'" class="">Versuchsauftrag {{
              project.generalProjectNumber
          }}
          </div>
          <div v-if="project.generalProjectType == 'BE'" class="">
            <div v-if="$mq.current>='lg'">
              Beschichtungsempfehlung {{project.generalProjectNumber}}
            </div>
            <div v-else>
              Beschichtungsempfehlung<br>{{project.generalProjectNumber}}
            </div>
          </div>
        </h1>
        <!-- projectbeschreibung -->
        <div>
          <h3 class="text-xl font-bold tracking-tight mt-12 my-5">
            Projektbeschreibung</h3>
          <p>{{ project.generalProjectDescription }}</p>
        </div>
        <!-- performance -->
        <div class="mt-16">
          <h3 class="text-xl font-bold tracking-tight mb-5">Performance</h3>
          <p>{{ project.generalPerformanceDescription }}</p>
        </div>
        <!-- empfohlenes schichtsystem -->
        <div class="mt-16">
          <h3 class="text-xl font-bold tracking-tight mb-5">Empfohlenes Schichtsystem</h3>
          <p>{{ project.generalPerformanceDescription }}</p>
        </div>
        <!-- Deckschichtsystem -->
        <div class="mt-16">
          <h3 class="text font-bold tracking-tight">Deckschichtsystem</h3>
          <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-2">
            <!-- deckschicht col 1 -->
            <div class="flex justify-between items-center">
              <div class="">
                <div class="text-3xl font-medium text-[#4d6786]"> {{ project.coating.coatingProduct.product }}</div>
                <div class="text-[13px] font-light text-[#4d6786]"> Wärmehärtender Gleitlack</div>
              </div>
              <div class="w-[1px] bg-gray-200 h-[80%]"></div>
            </div>
            <!-- deckschicht col 2 -->
            <div class="flex justify-between items-center">
              <div class="flex flex-col justify-between items-center text-[12px] font-bold tracking-tighter w-full px-0 md:px-2 py-6">
                <div class="w-full border-b pb-2">
                  <div class="">Festschmierstoff</div>
                  <div class="font-light text-left">
                    MOS2
                  </div>
                </div>
                <div class="w-full border-b pb-2">
                  <div class="pt-2">Farbe</div>
                  <div class="pt-1">
                    <svg width="40" height="24">
                      <rect width="40" height="24" style="stroke-width:0;stroke:rgb(0,0,0)" v-bind:style="{ fill: project.coating.coatingProduct.color ? project.coating.coatingProduct.color : 'transparent' }"></rect>
                    </svg>
                  </div>
                </div>
                <div class="w-full pt-1">
                  <div class="">Betriebstemperaturbereich</div>
                  <div class="font-light">-70°C-180°C</div>
                </div>
              </div>
              <div class="w-[1px] bg-gray-200 h-[80%]"></div>
            </div>
            <!-- deckschicht col 3 -->
            <div class="flex justify-between items-center">
              <div class="flex flex-col justify-between items-center text-[12px] font-bold tracking-tighter w-full px-0 md:px-2 py-6">
                <div class="w-full border-b pb-2">
                  <div class="">Applikationsverfahren</div>
                  <div class="font-light text-left">
                   Zentrifugenbeschichtung
                  </div>
                </div>
                <div class="w-full border-b pb-2">
                  <div class="pt-2">Beschichtungsdurchgänge</div>
                  <div class="font-light pt-2">2</div>
                </div>
                <div class="w-full pt-2">
                  <div class="">Schichtdicke</div>
                  <div class="font-light">200-400nm</div>
                </div>
              </div>
              <div class="w-[1px] bg-gray-200 h-[80%]"></div>
            </div>
            <!-- deckschicht col 4 -->
            <div class="flex justify-between items-start">
              <div class="flex flex-col space-y-4 justify-between items- text-[12px] font-bold tracking-tighter w-full pl-0 md:pl-2  pt-6">
                <div class="flex justify-start items-center w-full ">
                  <div class="w-1/2">Korrosionsschutz</div>
                  <div class="flex space-x-0.5 text-right w-1/2 pl-10">
                    <div v-for="n in 7" class="">
                      <svg class="fill-green-500" width="6" height="17"><rect width="6" height="17"></rect></svg>
                    </div>
                    <div v-for="n in 3" class="">
                      <svg class="fill-bgBeige" width="6" height="17"><rect width="6" height="17"></rect></svg>
                    </div>
                  </div>
                </div>
                <div class="flex justify-start items-start w-full pb-2">
                  <div class="w-1/2">Oberflächenhärte</div>
                  <div class="flex space-x-0.5 text-right w-1/2 pl-10">
                    <div v-for="n in 10" class="">
                      <svg class="fill-green-500" width="6" height="17"><rect width="6" height="17"></rect></svg>
                    </div>
                    <!--                    <div v-for="n in 1" class="">
                                          <svg class="fill-bgBeige" width="6" height="17"><rect width="6" height="17"></rect></svg>
                                        </div>-->
                  </div>
                </div>
                <div class="flex justify-start items-center w-full pb-2">
                  <div class="w-1/2">Masshaltigkeit</div>
                  <div class="flex space-x-0.5 text-right w-1/2 pl-10">
                    <div v-for="n in 6" class="">
                      <svg class="fill-green-500" width="6" height="17"><rect width="6" height="17"></rect></svg>
                    </div>
                    <div v-for="n in 4" class="">
                      <svg class="fill-bgBeige" width="6" height="17"><rect width="6" height="17"></rect></svg>
                    </div>
                  </div>
                </div>
                <div class="flex justify-start items-center w-full pb-2">
                  <div class="w-1/2">Unterwanderung</div>
                  <div class="flex space-x-0.5 text-right w-1/2 pl-10">
                    <div v-for="n in 9" class="">
                      <svg class="fill-green-500" width="6" height="17"><rect width="6" height="17"></rect></svg>
                    </div>
                    <div v-for="n in 1" class="">
                      <svg class="fill-bgBeige" width="6" height="17"><rect width="6" height="17"></rect></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
<!--            <div class="flex justify-between items-center">
              <div class="flex flex-col space-y-2 justify-between items-center text-[12px] font-light tracking-tighter w-full px-2">
                <div class="flex justify-between items-center w-full pb-2">
                  <div class="">Feststoff</div>
                  <div class="flex space-x-0.5 text-right pl-0">
                    <div v-for="n in 9" class="">
                      <svg class="fill-green-500" width="6" height="17"><rect width="6" height="17"></rect></svg>
                    </div>
                    <div v-for="n in 3" class="">
                      <svg class="fill-bgBeige" width="6" height="17"><rect width="6" height="17"></rect></svg>
                    </div>
                  </div>
                </div>
                <div class="flex justify-between items-center w-full pb-2">
                  <div class="">Feststoff</div>
                  <div class="flex space-x-0.5 text-right pl-0">
                    <div v-for="n in 7" class="">
                      <svg class="fill-green-500" width="6" height="17"><rect width="6" height="17"></rect></svg>
                    </div>
                    <div v-for="n in 5" class="">
                      <svg class="fill-bgBeige" width="6" height="17"><rect width="6" height="17"></rect></svg>
                    </div>
                  </div>
                </div>
                <div class="flex justify-between items-center w-full pb-2">
                  <div class="">Feststoff</div>
                  <div class="flex space-x-0.5 text-right pl-0">
                    <div v-for="n in 11" class="">
                      <svg class="fill-green-500" width="6" height="17"><rect width="6" height="17"></rect></svg>
                    </div>
                    <div v-for="n in 1" class="">
                      <svg class="fill-bgBeige" width="6" height="17"><rect width="6" height="17"></rect></svg>
                    </div>
                  </div>
                </div>
                <div class="flex justify-between items-center w-full pb-2">
                  <div class="">Feststoff</div>
                  <div class="flex space-x-0.5 text-right pl-0">
                    <div v-for="n in 11" class="">
                      <svg class="fill-green-500" width="6" height="17"><rect width="6" height="17"></rect></svg>
                    </div>
                    <div v-for="n in 1" class="">
                      <svg class="fill-bgBeige" width="6" height="17"><rect width="6" height="17"></rect></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>-->

          </div>
        </div>
        <!-- Korrosionsschutzsystem -->
        <div class="mt-16 md:mt-2">
          <h3 class="text font-bold tracking-tight">Korrosionsschutzsystem</h3>
          <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-2">
            <!-- Korrosionsschutzsystem col 1 -->
            <div class="flex justify-between items-center">
              <div class="">
                <div class="text-3xl font-medium text-[#4d6786]"> Zink-Nickel</div>
                <div class="text-[13px] font-light text-[#4d6786]">kathodischer Korrosionsschutz</div>
              </div>
              <div class="w-[1px] bg-gray-200 h-[80%]"></div>
            </div>
            <!-- Korrosionsschutzsystem col 2 -->
            <div class="flex justify-between items-center">
              <div class="flex flex-col justify-between items-center text-[12px] font-bold tracking-tighter w-full px-0 md:px-2  py-6">
                <div class="w-full border-b pb-2">
                  <div class="">Schichtsystem</div>
                  <div class="font-light text-left">
                    Zink-Nickel + Passivierung
                  </div>
                </div>
                <div class="w-full border-b pb-2">
                  <div class="pt-2">Farbe</div>
                  <div class="pt-1">
                    <svg width="40" height="24">
                      <rect width="40" height="24" style="stroke-width:0;stroke:rgb(0,0,0)" v-bind:style="{ fill: project.corrosion.corrosionProduct.color ? project.corrosion.corrosionProduct.color : 'transparent' }"></rect>
                    </svg>
                  </div>
                </div>
                <div class="w-full pt-1">
                  <div class="">Korrosionsschutz</div>
                  <div class="font-light">720h DIN EN ISO 9227</div>
                </div>
              </div>
              <div class="w-[1px] bg-gray-200 h-[80%]"></div>
            </div>
            <!-- Korrosionsschutzsystem col 3 -->
            <div class="flex justify-between items-center">
              <div class="flex flex-col justify-between items-center text-[12px] font-bold tracking-tighter w-full px-0 md:px-2  py-6">
                <div class="w-full border-b pb-2">
                  <div class="">Applikationsverfahren</div>
                  <div class="font-light text-left">
                    Trommelbeschichtung
                  </div>
                </div>
                <div class="w-full border-b pb-2">
                  <div class="pt-2">Vorbehandlung</div>
                  <div class="font-light pt-2">nass-chemisch</div>
                </div>
                <div class="w-full pt-2">
                  <div class="">Schichtdicke</div>
                  <div class="font-light">8-12µm</div>
                </div>
              </div>
              <div class="w-[1px] bg-gray-200 h-[80%]"></div>
            </div>
            <!-- Korrosionsschutzsystem col 4 -->
            <div class="flex justify-between items-start">
              <div class="flex flex-col space-y-4 justify-between items- text-[12px] font-bold tracking-tighter w-full pl-0 md:pl-2 pt-6">
                <div class="flex justify-start items-center w-full ">
                  <div class="w-1/2">Korrosionsschutz</div>
                  <div class="flex space-x-0.5 text-right w-1/2 pl-10">
                    <div v-for="n in 7" class="">
                      <svg class="fill-green-500" width="6" height="17"><rect width="6" height="17"></rect></svg>
                    </div>
                    <div v-for="n in 3" class="">
                      <svg class="fill-bgBeige" width="6" height="17"><rect width="6" height="17"></rect></svg>
                    </div>
                  </div>
                </div>
                <div class="flex justify-start items-start w-full pb-2">
                  <div class="w-1/2">Oberflächenhärte</div>
                  <div class="flex space-x-0.5 text-right w-1/2 pl-10">
                    <div v-for="n in 10" class="">
                      <svg class="fill-green-500" width="6" height="17"><rect width="6" height="17"></rect></svg>
                    </div>
<!--                    <div v-for="n in 1" class="">
                      <svg class="fill-bgBeige" width="6" height="17"><rect width="6" height="17"></rect></svg>
                    </div>-->
                  </div>
                </div>
                <div class="flex justify-start items-center w-full pb-2">
                  <div class="w-1/2">Masshaltigkeit</div>
                  <div class="flex space-x-0.5 text-right w-1/2 pl-10">
                    <div v-for="n in 6" class="">
                      <svg class="fill-green-500" width="6" height="17"><rect width="6" height="17"></rect></svg>
                    </div>
                    <div v-for="n in 4" class="">
                      <svg class="fill-bgBeige" width="6" height="17"><rect width="6" height="17"></rect></svg>
                    </div>
                  </div>
                </div>
                <div class="flex justify-start items-center w-full pb-2">
                  <div class="w-1/2">Unterwanderung</div>
                  <div class="flex space-x-0.5 text-right w-1/2 pl-10">
                    <div v-for="n in 9" class="">
                      <svg class="fill-green-500" width="6" height="17"><rect width="6" height="17"></rect></svg>
                    </div>
                    <div v-for="n in 1" class="">
                      <svg class="fill-bgBeige" width="6" height="17"><rect width="6" height="17"></rect></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
        <hr class="mt-2">
      </div>

      <!-- layer structure svg -->
      <div class="lg:w-6/12 lg:flex-1 ">
        <div class="h-full py-6 bg-[#f1f2f3]">
          <div class="flex flex-col justify-between items-start h-full">
            <div class="lg:inline text-black text-lg font-bold tracking-tight">
              <h4 v-if="project.generalProjectType == 'BE'" class="pl-4 md:pl-8">Schichtaufbau für ihre Beschichtungsempfehlung
              </h4>
              <h4 v-if="project.generalProjectType == 'VA'" class="pl-4 md:pl-8">Schichtaufbau für ihren Versuchsauftrag</h4>
            </div>
            <div class="flex justify-center items-center w-full h-full">

              <div class="w-full">
                  <!--headline-->

                  <!--layer structure infographic-->
                  <div class="layer">
                    <!--galvanisch-->
                    <div v-if="project.corrosion.corrosionProduct.layerThree == 'Versiegelung'">
                      <div v-if="project.coating.coatingProductLayerAmount == '1'"></div>
                      <div v-if="project.coating.coatingProductLayerAmount == '2'"></div>
                    </div>
                    <div v-else-if="project.corrosion.corrosionProduct.layerOne == 'Galvanisch'">
                      <div v-if="project.coating.coatingProductLayerAmount == '1'">
                        <div class="pt-16 flex justify-center overflow-hidden">
                          <svg class="w-[80%]" x="0px" y="0px" viewBox="0 0 420 500" style="enable-background:new 0 0 420 500;">
                            <svg id="substrat" class="fill-[#69A0AA]">
                              <polygon class="opacity-100" points="186.56,385.5 0,306.15 0,257.98 186.56,337.34 			" />
                              <polygon class="opacity-80" points="368.5,306.15 186.56,385.5 186.56,337.34 368.5,257.98 			" />
                              <polygon class="opacity-70" points="0.13,257.98 187.11,337.34 368.06,257.98 184.53,178.63 		" />
                            </svg>

                            <svg v-if="project.corrosion.corrosionProduct.color=='lightgrey'" id="corr1" class="fill-[#7A858C]" x="0px" y="0px">
                              <polygon class="opacity-100" points="186.56,317.93 0,238.57 0,221.43 186.56,300.78 			" />
                              <polygon class="opacity-80" points="368.5,238.57 186.56,317.93 186.56,300.78 368.5,221.43 			" />
                              <polygon class="opacity-90" points="0.13,221.43 187.11,300.78 368.06,221.42 184.53,142.07 		" />
                            </svg>
                            <svg v-else-if="project.corrosion.corrosionProduct.color=='black'" id="corr1" class="fill-[#161616]" x="0px" y="0px">
                              <polygon class="opacity-100" points="186.56,317.93 0,238.57 0,221.43 186.56,300.78 			" />
                              <polygon class="opacity-80" points="368.5,238.57 186.56,317.93 186.56,300.78 368.5,221.43 			" />
                              <polygon class="opacity-90" points="0.13,221.43 187.11,300.78 368.06,221.42 184.53,142.07 		" />
                            </svg>

                            <svg id="corr2" x="0px" y="8px" style="opacity: 0.3">
                              <polygon class="ls-corrPassTrans-dark" points="186.56,279.83 0,195.72 0,188.07 186.56,272.18 			" />
                              <polygon class="ls-corrPassTrans-light" points="368.5,195.72 186.56,279.83 186.56,272.18 368.5,188.07 			" />
                              <polygon class="ls-corrPassTrans-face" points="0.13,188.07 187.11,272.18 368.06,188.07 184.53,103.97 		" />
                            </svg>

                            <svg id="top1" class="fill-[#C5CDD3] opacity-40" x="0px" y="5px">
                              <polygon class="opacity-100" points="186.56,250.52 0,166.41 0,158.76 186.56,242.87 			" />
                              <polygon class="opacity-80" points="368.5,166.41 186.56,250.52 186.56,242.87 368.5,158.76 			" />
                              <polygon class="opacity-70" points="0.13,158.76 187.11,242.87 368.06,158.76 184.53,74.66 		" />
                            </svg>

                            <svg id="top2" class="fill-[#C5CDD3] opacity-40" x="0px" y="-25px" style="opacity: 0.5">
                              <polygon class="opacity-100" points="186.56,250.52 0,166.41 0,158.76 186.56,242.87 			" />
                              <polygon class="opacity-80" points="368.5,166.41 186.56,250.52 186.56,242.87 368.5,158.76 			" />
                              <polygon class="opacity-70" points="0.13,158.76 187.11,242.87 368.06,158.76 184.53,74.66 		" />
                            </svg>

                            <circle class="ls-circle" cx="380" cy="137" r="1.8" />
                            <line class="ls-line" x1="380" y1="137" x2="400" y2="137" />
                            <line class="ls-line" x1="400" y1="137" x2="400" y2="37" />
                            <line class="ls-line" x1="393" y1="37" x2="400" y2="37" />
                            <text transform="matrix(1 0 0 1 388 8)" text-anchor="end" class="ls-headline">Deckschichtsystem</text>

                            <text transform="matrix(1 0 0 1 340 25)" text-anchor="end" class="ls-subline">Gleitlack {{project.coating.coatingProduct.product}}</text>
                            <text transform="matrix(1 0 0 1 345 25)" text-anchor="start" class="ls-schicht">Schicht2</text>

                            <text transform="matrix(1 0 0 1 340 40)" text-anchor="end" class="ls-subline">Gleitlack {{project.coating.coatingProduct.product}}</text>
                            <text transform="matrix(1 0 0 1 345 40)" text-anchor="start" class="ls-schicht">Schicht1</text>

                            <circle class="ls-circle" cx="380" cy="167" r="1.8" />
                            <line class="ls-line" x1="380" y1="167" x2="410" y2="167" />
                            <line class="ls-line" x1="410" y1="167" x2="410" y2="20" />
                            <line class="ls-line" x1="393" y1="20" x2="410" y2="20" />

                            <text transform="matrix(1 0 0 1 390 400)" text-anchor="end" class="ls-headline">Korrosionsschutzsystem</text>
                            <circle class="ls-circle" cx="380" cy="230" r="1.8" />
                            <line class="ls-line" x1="380" y1="230" x2="400" y2="230" />
                            <line class="ls-line" x1="400" y1="230" x2="400" y2="413" />
                            <line class="ls-line" x1="393" y1="413" x2="400" y2="413" />
                            <text transform="matrix(1 0 0 1 390 417)" text-anchor="end" class="ls-subline">Zink-Nickel-Schicht</text>

                            <circle class="ls-circle" cx="380" cy="200" r="1.8" />
                            <line class="ls-line" x1="380" y1="200" x2="410" y2="200" />
                            <line class="ls-line" x1="410" y1="200" x2="410" y2="430" />
                            <line class="ls-line" x1="393" y1="430" x2="410" y2="430" />
                            <text transform="matrix(1 0 0 1 390 433)" text-anchor="end" class="ls-subline">Passivierung</text>
                          </svg>
                        </div>
                      </div>
                      <div v-if="project.coating.coatingProductLayerAmount == '2'">
                        <div class="pt-16 flex justify-center overflow-hidden">
                          <svg class="w-[93%] md:w-[70%]" x="0px" y="0px" viewBox="0 0 420 500" style="enable-background:new 0 0 420 500;">
                            <svg id="substrat" class="fill-[#69A0AA]">
                              <polygon class="opacity-100" points="186.56,385.5 0,306.15 0,257.98 186.56,337.34 			" />
                              <polygon class="opacity-80" points="368.5,306.15 186.56,385.5 186.56,337.34 368.5,257.98 			" />
                              <polygon class="opacity-70" points="0.13,257.98 187.11,337.34 368.06,257.98 184.53,178.63 		" />
                            </svg>

                            <svg v-if="project.corrosion.corrosionProduct.color=='lightgrey'" id="corr1" class="fill-[#7A858C]" x="0px" y="0px">
                              <polygon class="opacity-100" points="186.56,317.93 0,238.57 0,221.43 186.56,300.78 			" />
                              <polygon class="opacity-80" points="368.5,238.57 186.56,317.93 186.56,300.78 368.5,221.43 			" />
                              <polygon class="opacity-90" points="0.13,221.43 187.11,300.78 368.06,221.42 184.53,142.07 		" />
                            </svg>
                            <svg v-else-if="project.corrosion.corrosionProduct.color=='black'" id="corr1" class="fill-[#161616]" x="0px" y="0px">
                              <polygon class="opacity-100" points="186.56,317.93 0,238.57 0,221.43 186.56,300.78 			" />
                              <polygon class="opacity-80" points="368.5,238.57 186.56,317.93 186.56,300.78 368.5,221.43 			" />
                              <polygon class="opacity-90" points="0.13,221.43 187.11,300.78 368.06,221.42 184.53,142.07 		" />
                            </svg>

                            <svg id="corr2" x="0px" y="8px" style="opacity: 0.3">
                              <polygon class="ls-corrPassTrans-dark" points="186.56,279.83 0,195.72 0,188.07 186.56,272.18 			" />
                              <polygon class="ls-corrPassTrans-light" points="368.5,195.72 186.56,279.83 186.56,272.18 368.5,188.07 			" />
                              <polygon class="ls-corrPassTrans-face" points="0.13,188.07 187.11,272.18 368.06,188.07 184.53,103.97 		" />
                            </svg>

                            <svg id="top1" class="fill-[#C5CDD3] opacity-40" x="0px" y="5px">
                              <polygon class="opacity-100" points="186.56,250.52 0,166.41 0,158.76 186.56,242.87 			" />
                              <polygon class="opacity-80" points="368.5,166.41 186.56,250.52 186.56,242.87 368.5,158.76 			" />
                              <polygon class="opacity-70" points="0.13,158.76 187.11,242.87 368.06,158.76 184.53,74.66 		" />
                            </svg>

                            <svg id="top2" class="fill-[#C5CDD3] opacity-40" x="0px" y="-25px" style="opacity: 0.5">
                              <polygon class="opacity-100" points="186.56,250.52 0,166.41 0,158.76 186.56,242.87 			" />
                              <polygon class="opacity-80" points="368.5,166.41 186.56,250.52 186.56,242.87 368.5,158.76 			" />
                              <polygon class="opacity-70" points="0.13,158.76 187.11,242.87 368.06,158.76 184.53,74.66 		" />
                            </svg>

                            <circle class="ls-circle" cx="380" cy="137" r="1.8" />
                            <line class="ls-line" x1="380" y1="137" x2="400" y2="137" />
                            <line class="ls-line" x1="400" y1="137" x2="400" y2="37" />
                            <line class="ls-line" x1="393" y1="37" x2="400" y2="37" />
                            <text transform="matrix(1 0 0 1 388 8)" text-anchor="end" class="ls-headline">Deckschichtsystem</text>

                            <text transform="matrix(1 0 0 1 340 25)" text-anchor="end" class="ls-subline">Gleitlack {{project.coating.coatingProduct.product}}</text>
                            <text transform="matrix(1 0 0 1 345 25)" text-anchor="start" class="ls-schicht">Schicht2</text>

                            <text transform="matrix(1 0 0 1 340 40)" text-anchor="end" class="ls-subline">Gleitlack {{project.coating.coatingProduct.product}}</text>
                            <text transform="matrix(1 0 0 1 345 40)" text-anchor="start" class="ls-schicht">Schicht1</text>

                            <circle class="ls-circle" cx="380" cy="167" r="1.8" />
                            <line class="ls-line" x1="380" y1="167" x2="410" y2="167" />
                            <line class="ls-line" x1="410" y1="167" x2="410" y2="20" />
                            <line class="ls-line" x1="393" y1="20" x2="410" y2="20" />

                            <text transform="matrix(1 0 0 1 390 400)" text-anchor="end" class="ls-headline">Korrosionsschutzsystem</text>
                            <circle class="ls-circle" cx="380" cy="230" r="1.8" />
                            <line class="ls-line" x1="380" y1="230" x2="400" y2="230" />
                            <line class="ls-line" x1="400" y1="230" x2="400" y2="413" />
                            <line class="ls-line" x1="393" y1="413" x2="400" y2="413" />
                            <text transform="matrix(1 0 0 1 390 417)" text-anchor="end" class="ls-subline">Zink-Nickel-Schicht</text>

                            <circle class="ls-circle" cx="380" cy="200" r="1.8" />
                            <line class="ls-line" x1="380" y1="200" x2="410" y2="200" />
                            <line class="ls-line" x1="410" y1="200" x2="410" y2="430" />
                            <line class="ls-line" x1="393" y1="430" x2="410" y2="430" />
                            <text transform="matrix(1 0 0 1 390 433)" text-anchor="end" class="ls-subline">Passivierung</text>
                          </svg>
                        </div>
                      </div>
                    </div>

                    <!--lamelle-->
                    <div
                      v-else-if="project.corrosion.corrosionCategory == 'Lamelle' && project.coating.coatingCategory == 'kein Decklack'">
                      <div v-if="project.corrosion.corrosionProductLayerAmount == '2'"></div>
                      <div v-if="project.corrosion.corrosionProductLayerAmount == '1'"></div>
                    </div>

                    <div
                      v-else-if="project.corrosion.corrosionCategory == 'Lamelle' && project.coating.coatingCategory == 'Lamelle'">
                      <div
                        v-if="project.corrosion.corrosionProductLayerAmount == '2' && project.coating.coatingProductLayerAmount == '1'">
                      </div>
                      <div
                        v-else-if="project.corrosion.corrosionProductLayerAmount == '2' && project.coating.coatingProductLayerAmount == '2'">
                      </div>
                    </div>
                    <div
                      v-else-if="project.corrosion.corrosionCategory == 'Lamelle' && project.coating.coatingCategory == 'Gleitlack'">
                      <div
                        v-if="project.corrosion.corrosionProductLayerAmount == '2' && project.coating.coatingProductLayerAmount == '1'">
                      </div>
                      <div
                        v-else-if="project.corrosion.corrosionProductLayerAmount == '2' && project.coating.coatingProductLayerAmount == '2'">
                      </div>
                      <div
                        v-else-if="project.corrosion.corrosionProductLayerAmount == '1' && project.coating.coatingProductLayerAmount == '1'">
                      </div>
                      <div
                        v-else-if="project.corrosion.corrosionProductLayerAmount == '1' && project.coating.coatingProductLayerAmount == '2'">
                      </div>
                    </div>

                    <!--phosphat-->
                    <div
                      v-else-if="project.corrosion.corrosionCategory == 'Phosphatierung' && project.coating.coatingCategory == 'Lamelle'">
                      <div v-if="project.coating.coatingProductLayerAmount == '1'"></div>
                      <div v-else-if="project.coating.coatingProductLayerAmount == '2'"></div>
                    </div>
                    <div
                      v-else-if="project.corrosion.corrosionCategory == 'Phosphatierung' && project.coating.coatingCategory == 'Gleitlack'">
                      <div v-if="project.coating.coatingProductLayerAmount == '1'"></div>
                      <div v-else-if="project.coating.coatingProductLayerAmount == '2'"></div>
                      <div v-else-if="project.coating.coatingProductLayerAmount == '3'"></div>
                    </div>

                    <!--gleitlack only-->
                    <div
                      v-else-if="project.corrosion.corrosionCategory == 'Nur Strahlen/Entfetten' && project.coating.coatingCategory == 'Gleitlack'">
                      <div v-if="project.coating.coatingProductLayerAmount == '2'"></div>
                      <div v-if="project.coating.coatingProductLayerAmount == '1'"></div>
                    </div>
                  </div>
              </div>
          </div>
<!--            <div class="w-full">
              <div class="hidden lg:inline text-black text-lg font-bold tracking-tight">
                <h4  class="pl-8">Highlights</h4>
              </div>
              <div class="grid grid-cols-3 gap-2 w-full px-8 pt-8">
                <div class="bg-amber-400 h-32 w-full"></div>
                <div class="bg-amber-400 h-32 w-full"></div>
                <div class="bg-amber-400 h-32 w-full"></div>
                <div class="bg-amber-400 h-32 w-full"></div>
                <div class="bg-amber-400 h-32 w-full"></div>
                <div class="bg-amber-400 h-32 w-full"></div>
              </div>
            </div>-->

          </div>
        </div>
<!--        <div class="h-[30%] bg-gray-200 flex w-full px-8 pt-4">
            <div class="flex flex-col space-y-2 w-3/12 ">
              <div class="flex flex-col space-y-2 w-full text-[#696969]">
                <div class="text-sm">Substrat</div>
                <div class="">
                  <div class="text-[12px] font-bold">Stahl 10.9</div>
                  <div class="text-[12px] font-light leading-3">gehärtet</div>
                </div>
                <div class="">
                  <div class="text-[12px] font-bold">Vorbehandlung</div>
                  <div class="text-[12px] font-light leading-3">nass-chemisch</div>
                </div>
              </div>
            </div>
            <div class="flex flex-col space-y-2 w-6/12 pl-4">
              <div class="flex flex-col space-y-2 w-full text-[#4f7c6d]">
                <div class="text-sm">Korrosionsschutzsystem</div>
                <div class="">
                  <div class="text-[12px] font-bold">galvanische Zink-Nickel-Schicht</div>
                  <div class="text-[12px] font-light leading-3">Kathodischer Korrosionsschutz
                                                                schützt ihr Bauteil vor Rotrost-
                                                                korrosion
                  </div>
                </div>
                <div class="">
                  <div class="text-[12px] font-bold">Passivierung</div>
                  <div class="text-[12px] font-light leading-3">schließt Risse und Poren in der Zink-Nickel-Schicht und schützt
                                                                ihr Bauteil vor Weißrostkorrosion
                  </div>
                </div>
                <div class="">
                  <div class="text-[12px] font-bold">Temperprozeß</div>
                  <div class="text-[12px] font-light leading-3">Der Temperprozeß läßt
                                                                eingetragenen Wasserstoff aus dem
                                                                Bauteil effundieren.
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col space-y-2 w-3/12 pl-8">
            <div class="flex flex-col space-y-2 w-full text-[#696969]">
              <div class="text-sm">Substrat</div>
              <div class="">
                <div class="text-[12px] font-bold">Stahl 10.9</div>
                <div class="text-[12px] font-light leading-3">gehärtet</div>
              </div>
              <div class="">
                <div class="text-[12px] font-bold">Vorbehandlung</div>
                <div class="text-[12px] font-light leading-3">nass-chemisch</div>
              </div>
            </div>
          </div>
        </div>-->
      </div>
    </div>
  </section>
</template>

<script setup>
import { useMq } from "vue3-mq"
const $mq = useMq();

const props = defineProps(["project"])
const { project } = toRefs(props)

const svgZnniPassLubri2TransNarrow = useSvgZnniPassLubri2TransNarrow(project.value)
const svgZnniPassLubri2TransWide = useSvgZnniPassLubri2TransWide(project.value)

const svgZnniPassLubri1TransNarrow = useSvgZnniPassLubri1TransNarrow(project.value)
const svgZnniPassLubri1TransWide = useSvgZnniPassLubri1TransWide(project.value)

</script>


<style>
.ls-substrat-dark {fill: #69A0AA;}
.ls-substrat-light {opacity: 0.8;fill: #69A0AA;}
.ls-substrat-face {opacity: 0.7;fill: #69A0AA;}

.ls-corrZnni-dark {fill: #7A858C;}
.ls-corrZnni-light {fill: #707B84;}
.ls-corrZnni-face {fill: #95A0A5;}

.ls-corrPassTrans-dark {opacity: 0.35;}
.ls-corrPassTrans-light {fill: #5F6866;}
.ls-corrPassTrans-face {opacity: 0.8;fill: #5F6866;}

.ls-topGleitTrans-dark {fill: #C5CDD3;}
.ls-topGleitTrans-light {opacity: 0.8;fill: #C5CDD3;}
.ls-topGleitTrans-face {opacity: 0.7;fill: #C5CDD3;}

.lblackmain{fill:#161616;}
.lblackleft{opacity:0.7;fill:#161616;}
.lblackright{opacity:0.8;fill:#161616;}



.ls-line {
  opacity: 1;
  fill: none;
  stroke: #000;
  stroke-width: .2
}

.ls-circle {
  opacity: 0.7;
  fill: #000;
}

.ls-headline {
  font-size: 12px;
  font-weight: 700;
}

.ls-subline {
  font-size: 12px;
}

.ls-schicht {
  font-size: 11px;
  opacity: 0.6;
}
</style>
