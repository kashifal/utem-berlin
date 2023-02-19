<template>
  <!-- navigation -->
  <div class="nav-menu z-20 fixed top-0 mx-auto inset-x-0 h-full">
    <!-- navigation desktop -->
    <div class="flex justify-start items-center px-4 md:px-10 max-w-screen-2xl h-full">
      <!-- logo -->
      <nuxt-link to="/" class="logo cursor-pointer z-50 w-20 lg:pl-6 xl:pl-20">
        <svg viewBox="0 0 474.2 472.2" xml:space="preserve">
          <rect id="frame_x5F_white" x="0.7" y="2.2" class="st1" width="470.6" height="470.6" />
          <rect id="bg_x5F_red" x="10" y="11.5" class="st0" width="452" height="452" />
          <g id="typo">
            <path class="st1" d="M100.4,190.9c0.3-1.7,0.7-4.3,0.7-4.3c0.2-1,0.7-2,3-2h8.7c1.4,0,0.9,0.8,0.5,3.6c-0.4,2.8-0.7,4.3-0.7,4.3
                              c-0.1,1-0.9,2.1-3,2.1l-8.7,0C99.5,194.5,100,193.4,100.4,190.9" />
            <path class="st1" d="M151.5,235.9l5.6-31.8c0.3-1.3,0.8-2.6,6.8-2.6h31.5c0,0,4.5,0.4,4,5.3c-0.7,6.1-1.7,11.1-1.7,11.1
                              s-0.1,3.1-4.5,3.1h-26.3l-1.9,11.2c0,0-0.4,3.8,2.4,3.8h11.9c1,0,2.1-0.3,2.7-2.5c0.6-2.1,1.1-5.1,1.1-5.1h12.1
                              c0,0-0.1,5.6-1.1,7.7c-0.9,2-2.1,3.3-3.6,3.3h-37.1C152.3,239.5,151.1,238.2,151.5,235.9 M169.6,205.1l-2.3,13.4h14.5
                              c0,0,2.9-0.3,4.1-5.9c1.6-7.5-2.4-7.5-2.4-7.5H169.6z" />
            <path class="st1"
              d="M112.2,239.5l9.8-56.3c0.2-1,0.7-2.1,3-2.1h8.7c1.4,0,0.9,0.8,0.5,3.6c-0.4,2.8-9.5,54.8-9.5,54.8H112.2z" />
            <path class="st1"
              d="M132.4,239.5l9.8-56.3c0.2-1,0.7-2.1,3-2.1h8.7c1.4,0,0.9,0.8,0.5,3.6c-0.4,2.8-9.5,54.8-9.5,54.8H132.4z" />
            <path class="st1"
              d="M91.9,239.5l6.2-35.7c0.2-1,0.7-2,3-2h8.7c1.4,0,0.9,0.8,0.5,3.6c-0.4,2.8-5.9,34.2-5.9,34.2H91.9z" />
            <path class="st1" d="M71.7,239.5l5.4-31.1c0.3-2.6-1.8-3.3-3.2-3.3l-13.6,0c0,0-0.4,0-0.6,0.1c-0.2,0.2-0.3,0.7-0.3,0.7l-5.8,33.6
                              H41.2l9.8-56.3c0.2-1,0.7-2.1,3-2.1h8.7c1.4,0,0.9,0.8,0.5,3.6c-0.1,0.9-2.7,16.1-2.7,16.1c-0.1,0.3-0.2,0.7,0.1,1.1
                              c0.2,0.4,0.6,0.3,0.6,0.3l15.5,0c0.7,0,1.7-0.3,1.9-1.3l3.1-17.8c0.2-1,0.7-2.1,3-2.1h8.7c1.4,0,0.9,0.8,0.5,3.6
                              c-0.4,2.8-9.5,54.8-9.5,54.8H71.7z" />
            <path class="st1" d="M249.1,239.5l6.4-36.6c0.2-1,0.6-1.2,2.8-1.2h34.5c5.4,0,3,6,2.1,11.3l-13,0c1.1-3,1.5-8-1-8l-13.4,0
                              c-0.4,2.8-5.9,34.4-5.9,34.4H249.1z" />
            <path class="st1" d="M326.6,205.1l-5.6,31.8c-0.2,0.7-0.6,2.6-2.4,2.6h-36.2c0,0-4.5-0.4-4-5.3l2.3-12.7c0,0,0.5-3.1,4.9-3.1h26
                              l1.7-9.6c0,0,1.4-3.8-2.4-3.8h-10.7c-1,0,0.2-3.5,1.7-3.5h21.5C324.5,201.5,327,202.8,326.6,205.1 M308.6,235.9l2.5-14.9h-14.5
                              c-0.8,0-3.1,0.2-3.5,2.4l-1.5,9.9c-0.2,1.5-0.6,2.7,1.5,2.6H308.6z" />
            <path class="st1" d="M326.9,239.5l6.4-36.6c0.2-1,0.6-1.2,2.8-1.2h34.5c5.4,0,3,6,2.1,11.3l-4.6,26.5h-13l4.9-28.1
                              c0.6-3.4,1.3-6.3-1.2-6.3l-13.4,0c-0.4,2.8-5.9,34.4-5.9,34.4H326.9z" />
            <path class="st1" d="M198.5,239.5l9.8-56.3c0.2-1,0.7-2.1,3-2.1h8.7c1.4,0,0.9,0.8,0.5,3.6c-0.2,1-1.4,8.1-2.9,16.8h25.6
                              c3.2,0,6.7,0,6,5.3c-0.9,6.1-5.3,29.3-5.3,29.3s-0.8,3.5-5,3.5H211h-2.4H198.5z M217,205.1l-5.4,31h15.1c2.8,0.1,4.2,0,4.9-3.3
                              c0.9-4.1,4.7-23.5,4.7-23.5c0.3-2.1-0.1-4.2-3.8-4.2H217z" />
            <path class="st1"
              d="M418.4,239.5h-10.1h-2.4H378c-4.2,0-3.7-3.5-3.7-3.5s3.9-23.2,5.3-29.3c1.2-5.3,4.6-5.3,7.9-5.3H413
                              c1.6-8.8,3-15.8,3.2-16.8c0.6-2.8,0.4-3.6,1.8-3.6h8.7c2.2,0,2.4,1.1,2.2,2.1L418.4,239.5z M412.3,205.1h-15.6
                              c-3.7,0-4.8,2-5.3,4.2c0,0-3.1,19.3-3.7,23.5c-0.5,3.3,0.9,3.5,3.7,3.3h15.1L412.3,205.1z" />
            <rect x="41.2" y="252.1" class="st1" width="377.3" height="4.1" />
            <path class="st1"
              d="M178.5,291.1c-1.8,0.8-4,1.3-6.1,1.3c-6.5,0-10.6-4-10.6-11.4c0-7.5,4.3-12,10.6-12c2.2,0,3.9,0.3,6,1.2
                              l-1,2.6c-1.6-0.7-3.1-1-5-1c-4.4,0-7.1,3.7-7.1,9c0,5.9,3,8.9,7.6,8.9c1.7,0,3.4-0.5,4.8-1.1L178.5,291.1z" />
            <path class="st1" d="M193.4,292.6c-7.2,0-10.7-4.5-10.7-11.6c0-7.1,3.8-12,10.9-12c7,0,10.7,4.6,10.7,11.6
                              C204.3,287.8,200.6,292.6,193.4,292.6z M193.3,271.7c-5.3,0-7.2,4.1-7.2,8.8c0,5.4,1.9,9.3,7.6,9.3c5.4,0,7.2-4.1,7.2-8.9
                              C200.9,275.7,198.9,271.7,193.3,271.7z" />
            <path class="st1" d="M225,292.2c-0.6-1.9-1.1-4-1.8-5.9h-9.6c-0.7,2-1.3,4-1.8,5.9h-3.3c2.5-8.1,5.2-15.7,8.3-22.9h3.5
                              c3.2,7.6,6,15.4,8.3,22.9H225z M222.5,283.7c-1-2.8-2.1-5.9-3.2-8.8c-0.3-0.8-0.6-1.6-0.8-2.4h0c-0.3,0.8-0.6,1.6-0.9,2.4
                              c-1.1,2.9-2.2,5.9-3.1,8.8H222.5z" />
            <path class="st1" d="M241.5,272v20.2h-3.2V272h-6.8v-2.7h16.9v2.7H241.5z" />
            <path class="st1" d="M253.3,292.2v-22.9h3.2v22.9H253.3z" />
            <path class="st1" d="M277.3,292.2l-10.2-18.7H267v18.7h-2.9v-22.9h4.4l9.9,18.2h0.1v-18.2h2.9v22.9H277.3z" />
            <path class="st1"
              d="M305,273.4c-1.8-1.1-4-1.7-6.1-1.7c-5.1,0-7.9,3.8-7.9,9c0,5.8,3.1,9,7.9,9c1.2,0,2.4-0.2,3.6-0.5v-9.1h3.2
                              v11.2c-2,0.8-4.6,1.2-7,1.2c-7.2,0-11.1-4.6-11.1-11.6c0-7.3,4.3-12,11.3-12c2.6,0,5.1,0.7,7.1,1.9L305,273.4z" />
          </g>
        </svg>
      </nuxt-link>

      <div class="flex justify-between items-center lg:mx-auto w-full lg:pl-10 ">
        <!-- Mobile Toggle Menu Icon -->
        <div class="togglebtn pt-6">
          <div class="sm:block lg:hidden pl-2 w-20" @click="$emit('show-menu')">
            <div ref="menuIcon" class="inline-block cursor-pointer relative">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-16" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>

          </div>
        </div>
        <!-- navigation desktop-->
        <ul
          class="nav hidden lg:flex justify-start items-center uppercase xl:ml-0 font-bold leading text-sm cursor-pointer">
          <li class="hoverable mr-8 xl:p-2">
            <nuxt-link to="/unternehmen" class="focus:outline-none hover:text-amber-400">{{
              $t("globalNav.unternehmen")
            }}</nuxt-link>
            <div role="toggle" class="mega-menu1 p-6 mb-16 sm:mb-0 bg-white w-3/12 ">
              <div class="flex flex-wrap justify-between mx-2">
                <ul
                  class="px-4 w-full sm:w-1/2 lg:w-full border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3 hover:text-white">
                  <nuxt-link to="/unternehmen">
                    <h3 class="font-bold text-sm text-gray-600 text-bold ">UNTERNEHMEN</h3>
                  </nuxt-link>
                  <li>
                    <nuxt-link to="/unternehmen"
                      class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">Profil</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/innovationen"
                      class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">Innovationen</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/zertifizierung"
                      class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">Zertifizierungen</nuxt-link>
                  </li>
                </ul>
                <!--                          <ul class="px-4 sm:w-1/2 lg:w-1/2 border-gray-600 pb-6 pt-6 lg:pt-3">
                            <h3 class="font-bold text-sm text-gray-600 text-bold mb-2">Verfahren</h3>
                            <li>
                              <nuxt-link to="#"
                                         class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">link 1</nuxt-link>
                            </li>
                            <li>
                              <nuxt-link to="#"
                                         class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">link 2</nuxt-link>
                            </li>
                            <li>
                              <nuxt-link to="#"
                                         class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">link 3</nuxt-link>
                            </li>
                            <li>
                              <nuxt-link to="#"
                                         class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">link 4</nuxt-link>
                            </li>
                          </ul>-->
              </div>
            </div>
          </li>
          <!-- mega menu dropdown-->
          <li class="hoverable mr-8 xl:p-2">
            <nuxt-link to="#" class="focus:outline-none hover:text-amber-400">{{
              $t("globalNav.serienbeschichtung")
            }}</nuxt-link>
            <div role="toggle" class="mega-menu p-6 mb-16 sm:mb-0 bg-white max-w-screen-lg mx-auto inset-x-0">
              <div class="flex justify-between mx-2 ">
                <ul
                  class="px-4 w-6/12 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
                  <h3 class="font-bold text-sm text-gray-600 text-bold">Geschäftssektoren</h3>
                  <li>
                    <nuxt-link to="/decorative"
                      class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">Decorative</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/functional"
                      class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">Functional</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/mobility"
                      class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">Mobility</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link href="/architecture"
                      class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">Architecture</nuxt-link>
                  </li>
                </ul>
                <ul class="px-4 w-6/12 border-gray-600 border-b sm:border-r-0 lg:border-b-0 pb-6 pt-6 lg:pt-3 ">
                  <h3 class="font-bold text-sm text-gray-600 text-bold mb-2">Verfahren</h3>
                  <li>
                    <nuxt-link to="/gleitlackbeschichtung"
                      class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">Gleitlackbeschichtung</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/korrosionsschutz"
                      class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">Korrosionsschutz</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/pulverbeschichtung-dekorativ"
                      class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">Pulverbeschichtung
                      dekorativ</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/pulverbeschichtung-funktional"
                      class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">Pulverbeschichtung
                      funktional</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/pulverbeschichtung-architektur"
                      class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">Pulverbeschichtung
                      architektur</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/nasslackbeschichtung"
                      class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">Nasslackbeschichtung</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/ktl-beschichtung"
                      class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">KTL-Beschichtung</nuxt-link>
                  </li>
                </ul>
                <ul class="px-4 w-3/12 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                  <h3 class="font-bold text-sm text-gray-600 text-bold mb-2"></h3>
                </ul>
                <ul class="px-4 w-3/12 border-gray-600 border-b sm:border-r-0 lg:border-b-0 pb-6 pt-6 lg:pt-3">
                    <h3 class="font-bold text-sm text-gray-600 text-bold mb-2">Branchen</h3>
                    <li>
                        <nuxt-link to="/emobility" class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">eMobility</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/architektur" class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">architecture</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/energie" class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">energy</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/medizin" class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">medical
                            / life science</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/lebensmittel" class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">food</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/ace" class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">ace</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/maschinenbau" class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">Maschinenbau</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="gebrauchswaren" class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">Gebrauchswaren</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/armaturen" class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">Armaturen</nuxt-link>
                    </li>
                </ul>

              </div>
            </div>
          </li>
          <li class="hoverable mr-8 xl:p-2">
            <nuxt-link to="/" class="focus:outline-none hover:text-amber-400">{{ $t("globalNav.blog") }} </nuxt-link>
            <div role="toggle" class="mega-menu1 p-6 mb-16 sm:mb-0 bg-white w-72">
              <div class="flex flex-wrap justify-between mx-2">
                <ul class="px-4 w-full border-gray-600 border-b sm:border-b-0 md:border-b-0 pb-6 pt-6 lg:pt-3">
                  <h3 class="font-bold text-sm text-gray-600">Tools</h3>
                  <li>
                    <nuxt-link to="/demo"
                      class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">demo</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/demo2"
                      class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">demo2</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/1/uceva"
                      class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">customOnePager
                      DE</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/1/anewe"
                      class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">customOnePager
                      FU</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/1/cahif"
                      class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">customOnePager
                      MO</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/1/honir"
                      class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">customOnePager
                      AR</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li class="hoverable mr-8 xl:p-2">
            <nuxt-link to="/karriere" class="focus:outline-none hover:text-amber-400">{{
              $t("globalNav.karriere")
            }}</nuxt-link>
            <div role="toggle" class="mega-menu1 p-6 mb-16 sm:mb-0 bg-white w-72 ">
              <div class="flex flex-wrap justify-between mx-2">
                <ul
                  class="px-4 w-full border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3 hover:text-white">
                  <nuxt-link to="/karriere">
                    <h3 class="font-bold text-sm text-gray-600 text-bold hover:text-amber-400">KARRIERE</h3>
                  </nuxt-link>
                  <li>
                    <nuxt-link to="/stellenangebote"
                      class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">job offers</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/ausbildungsbereiche"
                      class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">apprentice</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li class="mr-8 xl:p-2">
            <nuxt-link to="/kontakt" class="focus:outline-none hover:text-amber-400"> {{ $t("globalNav.kontakt") }}
            </nuxt-link>
          </li>
          <li class="lang xl:mr-8 xl:p-2 w-16">
            <button class="font-bold leading text-sm focus:outline-none hover:text-amber-400"
              :class="{ 'text-yellow-400': $i18n.locale == 'de' }" @click="$i18n.locale = 'de'">de</button>
            <span> / </span>
            <button class="font-bold leading text-sm focus:outline-none hover:text-amber-400"
              :class="{ 'text-yellow-400': $i18n.locale == 'en' }" @click="$i18n.locale = 'en'"> en</button>
          </li>
        </ul>
        <div @click="$emit('show-coatingai-modal')" class="coatingai-but w-40 lowercase pl-4 large:ml-8">
          <a href="javascript:void(0)" class="relative z-10">coating twin</a>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { gsap } from "gsap"
import { ScrollTrigger } from "~/assets/js/gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

ScrollTrigger.create({
  start: 'top -35',
  end: 99999,
  toggleClass: { className: 'nav-menu--scrolled', targets: '.nav-menu' }
})

</script>

<style lang="scss">
/*------------------------------------------------------------------
### nav & nav --scrolled
-------------------------------------------------------------------**/
.nav-menu {
  width: 100%;
  margin-top: 80px;
  height: 50px;
  color: #fff;
  transition: ease 0.5s;

  @media (max-width: 450px) {
    margin-top: 30px;
  }

  .logo svg {
    margin-top: 20px;
    width: 80px;
    transition: ease 0.4s;

    .st0 {
      fill: #C20012;
    }

    .st1 {
      fill: #fff;
    }
  }

  .lang {
    color: #fff;
    transition: ease 0.3s;
  }

  .togglebtn {
    padding-top: 5px;
  }

  .coatingai-but a {
    color: #fff;

  }

  &--scrolled {
    margin-top: 0px;
    background: white;
    color: #000 !important;
    border-bottom: #aaa 1px solid;

    .logo svg {
      margin-top: 0px;
      padding-left: 20px;
      width: 70px;
    }

    .lang {
      color: #000;
    }

    .togglebtn {
      padding-top: 5px;
    }

    .coatingai-but a {
      color: #444;
    }
  }
}

/*------------------------------------------------------------------
### set megamenu to li
-------------------------------------------------------------------**/
.hoverable {
  position: static;
}

.hoverable>a:after {
  content: "\25BC";
  font-size: 10px;
  padding-left: 6px;
  position: relative;
  top: -1px;
}

.hoverable:hover .mega-menu {
  display: block;
}

.hoverable:hover .mega-menu1 {
  display: block;
}

/*------------------------------------------------------------------
### mega menu
-------------------------------------------------------------------**/

.mega-menu {
  display: none;
  left: 0;
  position: absolute;
  text-align: left;
}

.mega-menu1 {
  display: none;
  left: 50;
  position: absolute;
  text-align: left;
}

/*------------------------------------------------------------------
### coatingai button
-------------------------------------------------------------------**/

.coatingai-but {
  position: relative;
}

.coatingai-but a {
  margin-top: 0px;
  margin-left: 50px;

  text-decoration: none;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.05em;
  line-height: 20px;

}

.coatingai-but a::before {
  content: "";
  display: block;
  position: absolute;
  left: -14px;
  z-index: -1;
  width: 34px;
  height: 34px;

  background: #ecbf0a;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  border-radius: 50px;
  -webkit-transition: all .4s ease;
  -o-transition: all .4s ease;
  transition: all .4s ease;
}

.coatingai-but a::after {
  content: attr(data-hover);
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 0%;
  overflow: hidden;
  white-space: nowrap;
  color: #fff;
  -webkit-transition: width .4s ease;
  -o-transition: width .4s ease;
  transition: width .4s ease;
}

.coatingai-but a:hover::after {
  width: 100%;
}

.coatingai-but a:hover::before {
  width: calc(100% + 30px);

}

.site-header.light .coatingai-but a {
  color: hsla(0, 0%, 100%, .4)
}

.site-header.light .coatingai-but a::before {
  background: #2b2e31
}

.site-header.light .coatingai-but a::after {
  color: #fff
}

/*------------------------------------------------------------------
### toggle mobile menu
-------------------------------------------------------------------**/

.menu-toggle {
  height: 25px;
  cursor: pointer;

}

.menu-toggle.hidden {
  /*display: none;*/
}

.toggle-line {
  color: #fff;
  width: 0px;
  height: 1px;
  display: block;
  background: #191b1d;
  -webkit-transition: all .3s cubic-bezier(.475, .425, 0, .995);
  -o-transition: all .3s cubic-bezier(.475, .425, 0, .995);
  transition: all .3s cubic-bezier(.475, .425, 0, .995);
  left: 0
}

span.toggle-line:nth-child(2) {
  margin-top: 10px;
  -webkit-transition-delay: .1s;
  -o-transition-delay: .1s;
  transition-delay: .1s
}

span.toggle-line:nth-child(1) {
  margin-top: 5px;
}

body.loading span.toggle-line {
  -webkit-transition: none !important;
  -o-transition: none !important;
  transition: none !important
}

.menu-toggle.is-active .toggle-line:nth-child(1) {
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);

}

.menu-toggle.is-active .toggle-line:nth-child(2) {
  -webkit-transform: rotate(-135deg);
  -ms-transform: rotate(-135deg);
  transform: rotate(-135deg);
  margin-top: 0;

}

.menu-toggle.is-active .toggle-line {
  width: 35px
}
</style>
