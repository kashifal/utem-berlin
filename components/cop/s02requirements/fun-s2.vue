<template>
    <section id="requirements">
        <div class="relative flex-1 bg-bgBeige mr-0 md:mr-12 md:ml-20">
            <div class="flex flex-col lg:flex-row mt-40 mb-5">
                <!-- text content -->
                <div class="md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12 px-4 lg:pl-10 lg:pr-20 py-20">
                  <div v-if="project.assembly.assemblyObject == 'Automobil' && project.assembly.assemblyArea == 'Innenraum'">
                      <div class="">
                        <h2 v-if="$mq.current =='small'" class="text-3xl font-bold tracking-tight">Beschichtungs-<br>anforderungen</h2>
                        <h2 v-else class="text-3xl font-bold tracking-tight">Beschichtungsanforderungen</h2>
                      </div>
                      <div class="">
                        <h3 class="text-xl font-bold tracking-tight my-5 mt-16">Schliesssysteme und Scharniere in Innenraumumgebungen</h3>
                        <p>
                            Für die immer komplexer werdenden Türschließmechanismen
                            und Scharniere bieten wir die passenden Trockenschmierungen
                            und Beschichtungssysteme, die sich durch hervorragende
                            Tieftemperatureigenschaften, hohe Wasser- und Enteiserbeständigkeit,
                            Lackverträglichkeit und hohen Korrosionsschutz
                            auszeichnen.
                        </p>
                        <div>
                        <h3 class="text-xl font-bold tracking-tight my-5 mt-16">Anforderungen an Gleitlacksysteme</h3>
                        <p>Trockenschmierung<br>Lebensdauerschmierung</p>
                      </div>
                        <div>
                        <h3 class="text-xl font-bold tracking-tight my-5 mt-16">Korrosionsschutzanforderungen</h3>
                        <p>{{ project.assembly.assemblyAreaParameter1 }}h DIN EN ISO 9227 (NSS-Test)</p>
                      </div>
                      </div>
                    </div>
                  <div v-else-if="project.assembly.assemblyObject == 'Automobil' && project.assembly.assemblyArea == 'Aussenbereich'">
                      <div class="">
                        <h2 v-if="$mq.current =='small'" class="text-3xl font-bold tracking-tight">Beschichtungs-<br>anforderungen</h2>
                        <h2 v-else class="text-3xl font-bold tracking-tight">Beschichtungsanforderungen</h2>
                      </div>
                      <div class="">
                        <h3 class="text-xl font-bold tracking-tight my-5 mt-16">Schließsysteme und Scharniere in Wechselklimaumgebungen</h3>
                        <p>
                            Für die immer komplexer werdenden Türschließmechanismen
                            und Scharniere bieten wir die passenden Trockenschmierungen
                            und Beschichtungssysteme, die sich durch hervorragende
                            Tieftemperatureigenschaften, hohe Wasser- und Enteiserbeständigkeit,
                            Lackverträglichkeit und hohen Korrosionsschutz
                            auszeichnen.
                        </p>
                        <div>
                        <h3 class="text-xl font-bold tracking-tight my-5 mt-16">Anforderungen an Gleitlacksysteme</h3>
                        <p>Trockenschmierung<br>Lebensdauerschmierung</p>
                      </div>
                        <div>
                        <h3 class="text-xl font-bold tracking-tight my-5 mt-16">Korrosionsschutzanforderungen</h3>
                        <p>{{ project.assembly.assemblyAreaParameter1 }}h DIN EN ISO 9227 (NSS-Test)</p>
                      </div>
                      </div>
                    </div>
                  <div v-else-if="project.assembly.assemblyObject == 'Automobil' && project.assembly.assemblyArea == 'Unterboden'">
                      <div class="">
                        <h2 v-if="$mq.current =='small'" class="text-3xl font-bold tracking-tight">Beschichtungs-<br>anforderungen</h2>
                        <h2 v-else class="text-3xl font-bold tracking-tight">Beschichtungsanforderungen</h2>
                      </div>
                      <div class="">
                        <h3 class="text-xl font-bold tracking-tight my-5 mt-16">Fahrgestell- und steinschlaggefährdeter Bereich</h3>
                        <p>
                            Für die immer komplexer werdenden Türschließmechanismen
                            und Scharniere bieten wir die passenden Trockenschmierungen
                            und Beschichtungssysteme, die sich durch hervorragende
                            Tieftemperatureigenschaften, hohe Wasser- und Enteiserbeständigkeit,
                            Lackverträglichkeit und hohen Korrosionsschutz
                            auszeichnen.
                        </p>
                        <div>
                        <h3 class="text-xl font-bold tracking-tight my-5 mt-16">Anforderungen an Gleitlacksysteme</h3>
                        <p>Trockenschmierung<br>Lebensdauerschmierung</p>
                      </div>
                        <div>
                          <h3 v-if="project.material.treatment" class="text-xl font-bold tracking-tight my-5 mt-16">Korrosionsschutzanforderungen für hochfeste Bauteile</h3>
                          <h3 v-else class="text-xl font-bold tracking-tight my-5 mt-16">Korrosionsschutzanforderungen für Bauteile im stark korrosiv gefährdeten Aussenbereich</h3>

                        <p>{{ project.assembly.assemblyAreaParameter1 }}h DIN EN ISO 9227 (NSS-Test)</p>
                      </div>
                      </div>
                    </div>
                  <div v-else-if="project.assembly.assemblyObject == 'Automobil' && project.assembly.assemblyArea == 'Bremsenbereich'">
                    <div class="">
                      <h2 v-if="$mq.current =='small'" class="text-3xl font-bold tracking-tight">Beschichtungs-<br>anforderungen</h2>
                      <h2 v-else class="text-3xl font-bold tracking-tight">Beschichtungsanforderungen</h2>
                    </div>
                    <div class="">
                      <h3 class="text-xl font-bold tracking-tight my-5 mt-16">Bremsanlagenbereich</h3>
                      <p>
                        Für die immer komplexer werdenden Türschließmechanismen
                        und Scharniere bieten wir die passenden Trockenschmierungen
                        und Beschichtungssysteme, die sich durch hervorragende
                        Tieftemperatureigenschaften, hohe Wasser- und Enteiserbeständigkeit,
                        Lackverträglichkeit und hohen Korrosionsschutz
                        auszeichnen.
                      </p>
                      <div>
                        <h3 class="text-xl font-bold tracking-tight my-5 mt-16">Anforderungen an Gleitlacksysteme</h3>
                        <p>Trockenschmierung<br>Lebensdauerschmierung</p>
                      </div>
                      <div>
                        <h3 class="text-xl font-bold tracking-tight my-5 mt-16">Korrosionsschutzanforderungen</h3>
                        <p>{{ project.assembly.assemblyAreaParameter1 }}h DIN EN ISO 9227 (NSS-Test)</p>
                      </div>
                    </div>
                  </div>
                  <div v-else-if="project.assembly.assemblyObject == 'Automobil' && project.assembly.assemblyArea == 'Batteriebereich'">
                    <div class="">
                      <h2 v-if="$mq.current =='small'" class="text-3xl font-bold tracking-tight">Beschichtungs-<br>anforderungen</h2>
                      <h2 v-else class="text-3xl font-bold tracking-tight">Beschichtungsanforderungen</h2>
                    </div>
                    <div class="">
                      <h3 class="text-xl font-bold tracking-tight my-5 mt-16">Energieversorgung - Hochvoltbereich</h3>
                      <p>
                        Für die immer komplexer werdenden Türschließmechanismen
                        und Scharniere bieten wir die passenden Trockenschmierungen
                        und Beschichtungssysteme, die sich durch hervorragende
                        Tieftemperatureigenschaften, hohe Wasser- und Enteiserbeständigkeit,
                        Lackverträglichkeit und hohen Korrosionsschutz
                        auszeichnen.
                      </p>
                      <div>
                        <h3 class="text-xl font-bold tracking-tight my-5 mt-16">Anforderungen an Gleitlacksysteme</h3>
                        <p>Trockenschmierung<br>Lebensdauerschmierung</p>
                      </div>
                      <div>
                        <h3 class="text-xl font-bold tracking-tight my-5 mt-16">Korrosionsschutzanforderungen</h3>
                        <p>{{ project.assembly.assemblyAreaParameter1 }}h DIN EN ISO 9227 (NSS-Test)</p>
                      </div>
                    </div>
                  </div>
                  <div v-else-if="project.assembly.assemblyObject == 'Automobil' && project.assembly.assemblyArea == 'Motorraum-Verbenner'">
                    <div class="">
                      <h2 v-if="$mq.current =='small'" class="text-3xl font-bold tracking-tight">Beschichtungs-<br>anforderungen</h2>
                      <h2 v-else class="text-3xl font-bold tracking-tight">Beschichtungsanforderungen</h2>
                    </div>
                    <div class="">
                      <h3 class="text-xl font-bold tracking-tight my-5 mt-16">Motorraum Verbrennungsmotor</h3>
                      <p>
                        Für die immer komplexer werdenden Türschließmechanismen
                        und Scharniere bieten wir die passenden Trockenschmierungen
                        und Beschichtungssysteme, die sich durch hervorragende
                        Tieftemperatureigenschaften, hohe Wasser- und Enteiserbeständigkeit,
                        Lackverträglichkeit und hohen Korrosionsschutz
                        auszeichnen.
                      </p>
                      <div>
                        <h3 class="text-xl font-bold tracking-tight my-5 mt-16">Anforderungen an Gleitlacksysteme</h3>
                        <p>Trockenschmierung<br>Lebensdauerschmierung</p>
                      </div>
                      <div>
                        <h3 class="text-xl font-bold tracking-tight my-5 mt-16">Korrosionsschutzanforderungen</h3>
                        <p>{{ project.assembly.assemblyAreaParameter1 }}h DIN EN ISO 9227 (NSS-Test)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- image content -->
                <div class="md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12 mt-0 lg:mt-0 flex flex-col">
                  <div v-if="project.assembly.assemblyObject == 'Automobil' && project.assembly.assemblyArea == 'Innenraum'">
                    <img class="object-cover w-full h-96 lg:h-96 xl:h-[32rem]" v-bind:data-blink-src="innenImg1" alt="">
                    <img class="object-cover w-full h-96 lg:h-96 xl:h-[32rem]" v-bind:data-blink-src="innenImg2" alt="">
                  </div>
<!--                  <div v-else-if="project.assembly.assemblyObject == 'Automobil' && project.assembly.assemblyArea == 'Aussenbereich'">
                    <img class="w-full h-1/2 object-cover" src="/img/cop/enteiser_tuer_01.jpg" alt="" />
                    <img class="w-full h-1/2 object-cover" src="/img/cop/inside_temp_01.jpg" alt="" />
                    <img class="w-full h-1/2 object-cover" src="/img/cop/outside_temp_01.jpg" alt="" />
                  </div>-->
                  <div v-else-if="project.assembly.assemblyObject == 'Automobil' && project.assembly.assemblyArea == 'Aussenbereich'">
                    <img class="object-cover w-full h-96 md:h-72 " v-bind:data-blink-src="aussenImg1" alt="">
                    <img class="object-cover w-full h-96 md:h-72 " v-bind:data-blink-src="aussenImg2" alt="">
                    <img class="object-cover w-full h-96 md:h-72 " v-bind:data-blink-src="aussenImg3" alt="">
<!--

                    <div class="w-full h-80 overflow-hidden"><img class="object-contain" src="https://ucarecdn.com/56688a00-b811-40b8-9083-9e683dbb8120/-/preview/-/quality/smart/-/resize/1200x/" alt=""></div>
                    <div class="w-full h-80 overflow-hidden"><img class="object-contain" src="https://ucarecdn.com/56688a00-b811-40b8-9083-9e683dbb8120/-/preview/-/quality/smart/-/resize/1200x/" alt=""></div>
                    <div class="w-full h-80 overflow-hidden"><img class="object-contain" src="https://ucarecdn.com/56688a00-b811-40b8-9083-9e683dbb8120/-/preview/-/quality/smart/-/resize/1200x/" alt=""></div>
-->

                    <!--                    <img class="w-full h-1/2 object-cover" src="/img/cop/enteiser_tuer_01.jpg" alt="" />
                                        <img class="w-full h-1/2 object-cover" src="/img/cop/inside_temp_01.jpg" alt="" />
                                        <img class="w-full h-1/2 object-cover" src="/img/cop/outside_temp_01.jpg" alt="" />-->
                  </div>
                  <div v-else-if="project.assembly.assemblyObject == 'Automobil' && project.assembly.assemblyArea == 'Unterboden'">
                    <table class="salttable" width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tbody>
                      <tr>
                        <td align="center">
                          <table  width="100%" border="0" cellspacing="0" cellpadding="0" class="maintable">
                            <tbody>
                            <tr>
                              <td>
                                <table width="640" border="0" cellspacing="0" cellpadding="0" align="center">
                                  <tbody>
                                  <tr>
                                    <td class="mainTd">
                                      <table width="620" border="0" cellspacing="0" cellpadding="0" align="center">
                                        <tbody>
                                        <tr>
                                          <th scope="row" bgcolor="#484e53" width="220" height="60" valign="top" class="headTh">Auftaumittel</th>
                                          <th bgcolor="#484e53" class="headTh2" width="150" valign="top">Minimale
                                            Anwendungs-
                                            temperatur</th>
                                          <th bgcolor="#484e53" class="headTh2" width="150" valign="top">Kosten-
                                            vergleich</th>
                                          <th bgcolor="#484e53" class="headTh2" width="150" valign="top">Bemerkung</th>
                                        </tr>
                                        <tr>
                                          <th scope="row" class="headTh3" width="220" valign="top">Natriumchlorid
                                            <p>NaCl</p></th>
                                          <td class="headTh4" width="150">-8 ºC</td>
                                          <td class="headTh4" width="150">100</td>
                                          <td class="headTh4a" width="150">Anwendung als Feuchtsalz
                                            hauptsächlich nach Schnee-
                                            pflugeinsatz</td>
                                        </tr>
                                        <tr>
                                          <th scope="row" class="headTh3" width="220" valign="top">Calciumchlorid
                                            <p>CaCl<sub>2</sub></p></th>
                                          <td class="headTh4" width="150">-20 ºC </td>
                                          <td class="headTh4" width="150">140-280 </td>
                                          <td class="headTh4a" width="150">bei gleicher Einsatzmenge im
                                            Vergleich zu NaCl wird doppelt
                                            so viel Chlorid ausgebracht </td>
                                        </tr>
                                        <tr>
                                          <th class="headTh3" scope="row" width="220" valign="top">Magnesiumchlorid
                                            <p>MgCl<sub>2</sub></p></th>
                                          <td class="headTh4" width="150">-15 ºC</td>
                                          <td class="headTh4" width="150">200-300</td>
                                          <td class="headTh4a" width="150">sehr korrosiv, bei gleicher
                                            Einsatzmenge wird doppelt so
                                            viel Chlorid ausgebracht</td>
                                        </tr>
                                        <tr>
                                          <th scope="row" class="headTh3" width="220" valign="top">Calcium-/
                                            Magnesiumacetat
                                            <p>CMA</p></th>
                                          <td class="headTh4" width="150">-6 ºC </td>
                                          <td class="headTh4" width="150">250-400 </td>
                                          <td class="headTh4a" width="150">hohe Herstellungskosten,
                                            biologisch abbaubar </td>
                                        </tr>
                                        <tr>
                                          <td colspan="4" class="headTh5">verschiedene Auftaumittel Berlin 2012</td>
                                        </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                  <div v-else-if="project.assembly.assemblyObject == 'Automobil' && project.assembly.assemblyArea == 'Bremsenbereich'">
                    <img class="w-full h-1/2 object-cover" src="/img/cop/auto_bremsen_detail_02.jpg" alt="" />
                    <img class="w-full h-1/2 object-cover" src="/img/cop/auto_bremsen_detail_01.jpg" alt="" />
                  </div>
                  <div v-else-if="project.assembly.assemblyObject == 'Automobil' && project.assembly.assemblyArea == 'Batteriebereich'">
                    <img class="w-full h-1/2 object-cover" src="/img/cop/auto_batterie_detail_01.jpg" alt="" />
                    <img class="w-full h-1/2 object-cover" src="/img/cop/auto_batterie_detail_02.jpg" alt="" />
                  </div>
                  <div v-else-if="project.assembly.assemblyObject == 'Automobil' && project.assembly.assemblyArea == 'Motorraum-Verbenner'">
                    <img class="w-full h-1/2 object-cover" src="/img/cop/auto_motor_verbrenner_detail_01.jpg" alt="" />
                    <img class="w-full h-1/2 object-cover" src="/img/cop/auto_motor_verbrenner_detail_03.jpg" alt="" />
                  </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import {useMq } from "vue3-mq"
const $mq = useMq();

const props = defineProps(["project"])
const { project } = toRefs(props)

const innenImg1 = computed(() => {
  switch ($mq.current) {
    case 'xxl':
      return `https://ucarecdn.com/6c3fc5e4-f5c3-45be-b6d0-392fe2f5006f/-/preview/-/quality/smart/-/resize/600x/`
    case 'xl':
      return `https://ucarecdn.com/6c3fc5e4-f5c3-45be-b6d0-392fe2f5006f/-/preview/-/quality/smart/-/resize/600x/`
    case 'large':
      return `https://ucarecdn.com/6c3fc5e4-f5c3-45be-b6d0-392fe2f5006f/-/preview/-/quality/smart/-/crop/16:9/-0p,0/-/resize/600x/`
    case 'medium':
      return `https://ucarecdn.com/6c3fc5e4-f5c3-45be-b6d0-392fe2f5006f/-/preview/-/quality/smart/-/resize/600x/`
    case 'small':
      return `https://ucarecdn.com/6c3fc5e4-f5c3-45be-b6d0-392fe2f5006f/-/preview/-/quality/smart/-/crop/16:12/-0p,0/-/resize/600x/`
    default:
      return `https://ucarecdn.com/6c3fc5e4-f5c3-45be-b6d0-392fe2f5006f/-/preview/-/quality/smart/-/resize/600x/`
  }
})
const innenImg2 = computed(() => {
  switch ($mq.current) {
    case 'xxl':
      return `https://ucarecdn.com/22f5c970-e2d5-43aa-a506-b8ff909bd2cb/-/preview/-/quality/smart/-/resize/600x/`
    case 'xl':
      return `https://ucarecdn.com/22f5c970-e2d5-43aa-a506-b8ff909bd2cb/-/preview/-/quality/smart/-/resize/600x/`
    case 'large':
      return `https://ucarecdn.com/22f5c970-e2d5-43aa-a506-b8ff909bd2cb/-/preview/-/quality/smart/-/crop/16:9/15p,0/-/resize/600x/`
    case 'medium':
      return `https://ucarecdn.com/22f5c970-e2d5-43aa-a506-b8ff909bd2cb/-/preview/-/quality/smart/-/resize/600x/`
    case 'small':
      return `https://ucarecdn.com/22f5c970-e2d5-43aa-a506-b8ff909bd2cb/-/preview/-/quality/smart/-/resize/600x/`
    default:
      return `https://ucarecdn.com/22f5c970-e2d5-43aa-a506-b8ff909bd2cb/-/preview/-/quality/smart/-/resize/600x/`
  }
})


const aussenImg1 = computed(() => {
  switch ($mq.current) {
    case 'xxl':
      return `https://ucarecdn.com/56688a00-b811-40b8-9083-9e683dbb8120/-/preview/-/quality/smart/-/resize/600x/`
    case 'xl':
      return `https://ucarecdn.com/56688a00-b811-40b8-9083-9e683dbb8120/-/preview/-/quality/smart/-/resize/600x/`
    case 'large':
      return `https://ucarecdn.com/56688a00-b811-40b8-9083-9e683dbb8120/-/preview/-/quality/smart/-/resize/600x/`
    case 'medium':
      return `https://ucarecdn.com/56688a00-b811-40b8-9083-9e683dbb8120/-/preview/-/quality/smart/-/resize/600x/`
    case 'small':
      return `https://ucarecdn.com/56688a00-b811-40b8-9083-9e683dbb8120/-/preview/-/quality/smart/-/resize/600x/`
    default:
      return `https://ucarecdn.com/56688a00-b811-40b8-9083-9e683dbb8120/-/preview/-/quality/smart/-/resize/600x/`
  }
})
const aussenImg2 = computed(() => {
  switch ($mq.current) {
    case 'xxl':
      return `https://ucarecdn.com/e4d06e3b-05c2-40c5-ada9-0a00e612fd9e/-/preview/-/quality/smart/-/resize/600x/`
    case 'xl':
      return `https://ucarecdn.com/e4d06e3b-05c2-40c5-ada9-0a00e612fd9e/-/preview/-/quality/smart/-/resize/600x/`
    case 'large':
      return `https://ucarecdn.com/e4d06e3b-05c2-40c5-ada9-0a00e612fd9e/-/preview/-/quality/smart/-/resize/600x/`
    case 'medium':
      return `https://ucarecdn.com/e4d06e3b-05c2-40c5-ada9-0a00e612fd9e/-/preview/-/quality/smart/-/resize/600x/`
    case 'small':
      return `https://ucarecdn.com/e4d06e3b-05c2-40c5-ada9-0a00e612fd9e/-/preview/-/quality/smart/-/resize/600x/`
    default:
      return `https://ucarecdn.com/e4d06e3b-05c2-40c5-ada9-0a00e612fd9e/-/preview/-/quality/smart/-/resize/600x/`
  }
})
const aussenImg3 = computed(() => {
  switch ($mq.current) {
    case 'xxl':
      return `https://ucarecdn.com/ba929fc4-e37f-49c2-a72a-93773d76e0d8/-/preview/-/quality/smart/-/resize/1000x/`
    case 'xl':
      return `https://ucarecdn.com/ba929fc4-e37f-49c2-a72a-93773d76e0d8/-/preview/-/quality/smart/-/resize/600x/`
    case 'large':
      return `https://ucarecdn.com/ba929fc4-e37f-49c2-a72a-93773d76e0d8/-/preview/-/quality/smart/-/resize/600x/`
    case 'medium':
      return `https://ucarecdn.com/ba929fc4-e37f-49c2-a72a-93773d76e0d8/-/preview/-/quality/smart/-/resize/600x/`
    case 'small':
      return `https://ucarecdn.com/ba929fc4-e37f-49c2-a72a-93773d76e0d8/-/preview/-/quality/smart/-/resize/600x/`
    default:
      return `https://ucarecdn.com/ba929fc4-e37f-49c2-a72a-93773d76e0d8/-/preview/-/quality/smart/-/resize/600x/`
  }
})


</script>

<style lang="scss" >
section#requirements {


  .salttable {

    .maintable{
      max-width:100%;

      background: url('/img/cop/sec2/saltut_colored_04.jpg') center center no-repeat;
      background-size: cover;
      /*font-family: $text-font;*/
      font-size:13px;
      line-height:130%;
      color:#ffffff;
    }

    .mainTd{
      padding: 135px 0;
    }
    .headTh{
      /*font-family: $display-font;*/
      font-size:13px;
      line-height:130%;
      color:#ffffff;
      text-align:left;
      padding:20px 25px;
      border-bottom:1px solid #e2e3e3;
      background-color: #3d4755;
    }
    .headTh2{
      text-align:left;
      padding:20px 25px;
      border-left:1px solid #e2e3e3;
      border-bottom:1px solid #e2e3e3;
      background-color: #3d4755;
    }
    .headTh3{
      text-align:left;
      padding:20px 25px;
      border-bottom:1px solid #e2e3e3;
    }
    .headTh4{
      text-align:left;
      padding:20px 25px;
      border-left:1px solid #e2e3e3;
      border-bottom:1px solid #e2e3e3;
    }
    .headTh4a{
      font-size: 12px;
      text-align:left;
      padding:20px 25px;
      border-left:1px solid #e2e3e3;
      border-bottom:1px solid #e2e3e3;
    }
    .headTh3 p{
      /*font-family: $display-font;*/
      padding: 0px;
      margin: 15px 0px 0px 0px;
      font-size: 28px;
      color: #ecbf0a;
    }
    .headTh5{
      font-size:12px;
      line-height:130%;
      color:#ffffff;
      text-align:right;
      padding:10px 0px;
    }
  }
}


</style>
