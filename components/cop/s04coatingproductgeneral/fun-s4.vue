<template>
    <section id="coatingproductgeneral" class="section3General relative h-auto mt-4 md:mr-12">
        <!-- section container -->
        <div class="relative flex-1 mt-0 bg-bgBeige lg:pl-20  mb-5 mr-0 py-20">
            <div class="flex flex-col lg:flex-row lg:space-x-14">
                <!-- images container -->
                <div class="lg:w-6/12 mt-20 lg:mt-0">
                    <div class="w-full h-full bg-gray-700">
                        <div :class="{'show': selectedNav == 1}" class="flex items-center h-full w-full bgbeige-left-div bgbeige-left-div-1 ">
                            <div class="w-10/12  mx-auto">
                                <img src="/img/cop/gleitlack_mos2_04.svg">
                            </div>
                        </div>
                        <div :class="{'show': selectedNav == 2}" class="bgbeige-left-div bgbeige-left-div-2 ">
                            <div class="w-full flex flex-col bg-gray-700">
                                <div class="w-10/12 pt-12 mx-auto">
                                    <div class="video-container">
                                        <video playsinline autoplay loop="true" width="790" height="1060">
                                            <source type="video/mp4" src="/video/ani2.mp4">
                                        </video>

                                        <div class="overlay">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div :class="{'show': selectedNav == 3}" class="bgbeige-left-div bgbeige-left-div-3">
                            <div class="w-10/12 pt-12 mx-auto text-white text-[12px]">
                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                    <tbody>
                                        <tr>
                                            <td align="center">
                                                <table width="90%" border="0" cellspacing="0" cellpadding="0"
                                                    align="center">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <table width="100%" border="0" cellspacing="0"
                                                                    cellpadding="0" align="center">
                                                                    <tbody>
                                                                        <!--                            <tr>
                                                            <th scope="col" colspan="3" class="content-top-bar">Benchmark Flussigschmierstoffe vs Gleitlacke </th>
                                                          </tr>-->
                                                                        <tr>
                                                                            <th scope="row" valign="top"
                                                                                class="content-th-left"></th>
                                                                            <th valign="top" class="content-top-th">
                                                                                Flüssigschmierstoffe</th>
                                                                            <th valign="top" class="content-top-th">
                                                                                Gleitlacke</th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th valign="top" class="content-th-left">
                                                                                Funktionsweise</th>
                                                                            <td class="content-td">Kolloidale
                                                                                Dispersionen von hochmolekularen
                                                                                Polymeren in
                                                                                Wasser</td>
                                                                            <td class="content-td">PTFE, Graphit, MoS2
                                                                                als Festschmierstoff</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th valign="top" class="content-th-left">
                                                                                Hoch-<br>temperaturbereich</th>
                                                                            <td class="content-td"
                                                                                style="padding-top: 0px;">
                                                                                <!--                                <div class="minus-icon">-</div>&nbsp; <div class="minus-icon">-</div><br>-->
                                                                                <div class="minus-icon">-</div><br>
                                                                                <div style="margin-top: 5px;">nur mit
                                                                                    speziellen Ölen</div>
                                                                            </td>
                                                                            <td class="content-td">
                                                                                <div class="add-icon">+</div> &nbsp;
                                                                                <div href="#" class="add-icon">+</div>
                                                                                <br>
                                                                                <div style="margin-top: 5px;">sehr gut,
                                                                                    Einsatz bis 1000°C möglich</div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th valign="top" class="content-th-left">
                                                                                Niedrig-<br>temperaturbereiche</th>
                                                                            <td class="content-td"
                                                                                style="padding-top: 15px;">
                                                                                <!--                                <div class="minus-icon">-</div>&nbsp; <div class="minus-icon">-</div><br>-->
                                                                                <div class="minus-icon">-</div><br>
                                                                                <div style="margin-top: 5px;">ungünstig
                                                                                </div>
                                                                            </td>
                                                                            <td class="content-td">
                                                                                <div class="add-icon">+</div><br>
                                                                                <div style="margin-top: 5px;">gut</div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th valign="top" class="content-th-left">
                                                                                Hochdruckbereiche</th>
                                                                            <td class="content-td"
                                                                                style="padding-top: 15px;">
                                                                                <!--                                <div class="minus-icon">-</div>&nbsp; <div class="minus-icon">-</div><br>-->
                                                                                <div class="minus-icon">-</div><br>
                                                                                <div style="margin-top: 5px;">ungünstig
                                                                                </div>
                                                                            </td>
                                                                            <td class="content-td">
                                                                                <div class="add-icon">+</div><br>
                                                                                <div style="margin-top: 5px;">gut</div>
                                                                            </td>
                                                                        </tr>

                                                                        <tr>
                                                                            <th valign="top" class="content-th-left">
                                                                                Niedrige<br>Geschwindigkeiten</th>
                                                                            <td class="content-td">Kolloidale
                                                                                Dispersionen von hochmolekularen
                                                                                Polymeren in
                                                                                Wasser</td>
                                                                            <td class="content-td">PTFE, Graphit, MoS2
                                                                                als Festschmierstoff</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th valign="top" class="content-th-left">
                                                                                Hohe<br>Geschwindigkeiten</th>
                                                                            <td class="content-td"><a href="#"
                                                                                    class="minus-icon">-</a> <br>
                                                                                nur mit speziellen Olen
                                                                            </td>
                                                                            <td class="content-td">
                                                                                <a href="#" class="add-icon"></a> &nbsp;
                                                                                <a href="#" class="add-icon"></a> <br>
                                                                                nur mit speziellen Olen
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th valign="top" class="content-th-left">
                                                                                Verunreinigungen</th>
                                                                            <td class="content-td"><a href="#"
                                                                                    class="minus-icon">-</a> <br>
                                                                                nur mit speziellen Olen
                                                                            </td>
                                                                            <td class="content-td">
                                                                                <a href="#" class="add-icon"></a> &nbsp;
                                                                                <a href="#" class="add-icon"></a> <br>
                                                                                nur mit speziellen Olen
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th valign="top" class="content-th-left">
                                                                                Brennbarkeit</th>
                                                                            <td class="content-td"><a href="#"
                                                                                    class="minus-icon">-</a> <br>
                                                                                nur mit speziellen Olen
                                                                            </td>
                                                                            <td class="content-td">
                                                                                <a href="#" class="add-icon"></a> &nbsp;
                                                                                <a href="#" class="add-icon"></a> <br>
                                                                                nur mit speziellen Olen
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th valign="top" class="content-th-left">
                                                                                Umweltgefährung</th>
                                                                            <td class="content-td"><a href="#"
                                                                                    class="minus-icon">-</a> <br>
                                                                                nur mit speziellen Olen
                                                                            </td>
                                                                            <td class="content-td">
                                                                                <a href="#" class="add-icon"></a> &nbsp;
                                                                                <a href="#" class="add-icon"></a> <br>
                                                                                nur mit speziellen Olen
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th valign="top" class="content-th-left">
                                                                                Kosten</th>
                                                                            <td class="content-td"><a href="#"
                                                                                    class="minus-icon">-</a> <br>
                                                                                nur mit speziellen Olen
                                                                            </td>
                                                                            <td class="content-td">
                                                                                <a href="#" class="add-icon"></a> &nbsp;
                                                                                <a href="#" class="add-icon"></a> <br>
                                                                                nur mit speziellen Olen
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
                        </div>
                    </div>

                </div>
                <!-- text container -->
                <div class="lg:w-6/12 px-10 pt-4 lg:px-12">
                    <!-- sub navigation -->
                    <nav>
                        <ul class="flex justify-between space-x-8 px-8">
                            <li @click="selectedNav=1" :class="{'text-amber-500 fill-amber-500': selectedNav == 1}"  class="active flex flex-col items-center cursor-pointer hover:text-amber-500 hover:fill-amber-500"
                                data-id="1">
                                <svg width="2.0em" height="2.0em" viewBox="0 0 24 24">
                                    <path
                                        d="M18 20a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm-6 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm-6 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm12-6a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm-6 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm-6 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm12-6a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm-6 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4ZM6 8a2 2 0 1 1 0-4a2 2 0 0 1 0 4Z">
                                    </path>
                                </svg>
                                <div class="text-[12px] font-bold text-center">MOS2 Festschmierstoffe:<br>allgemeine
                                    Informationen</div>
                            </li>
                            <li @click="selectedNav=2" :class="{'text-amber-500 fill-amber-500': selectedNav == 2}" class="active flex flex-col items-center cursor-pointer hover:text-amber-500 hover:fill-amber-500"
                                data-id="2">
                                <svg width="2.0em" height="2.0em" viewBox="0 0 24 24" style="">
                                    <path
                                        d="m2.5 10.56l9 5.2a1 1 0 0 0 1 0l9-5.2a1 1 0 0 0 0-1.73l-9-5.2a1 1 0 0 0-1 0l-9 5.2a1 1 0 0 0 0 1.73ZM12 5.65l7 4l-7 4.05l-7-4.01Zm8.5 7.79L12 18.35l-8.5-4.91a1 1 0 0 0-1.37.36a1 1 0 0 0 .37 1.37l9 5.2a1 1 0 0 0 1 0l9-5.2a1 1 0 0 0 .37-1.37a1 1 0 0 0-1.37-.36Z">
                                    </path>
                                </svg>
                                <div class="text-[12px] font-bold text-center">Wie funktionieren<br>Gleitlacke?</div>
                            </li>
                            <li @click="selectedNav=3" :class="{'text-amber-500 fill-amber-500': selectedNav == 3}" class="active flex flex-col items-center cursor-pointer hover:text-amber-500 hover:fill-amber-500"
                                data-id="3">
                                <svg width="2.2em" height="2.2em" viewBox="0 0 256 256">
                                    <path
                                        d="M204.2 83.5A107 107 0 0 0 128.1 52h-.5c-48.9.2-90.4 33.5-103.4 78.9a3.7 3.7 0 0 0-.5 1.1a3 3 0 0 0-.1 1.3a106.5 106.5 0 0 0-3.6 27.8V184a12 12 0 0 0 12 12h192a12 12 0 0 0 12-12v-24a107.3 107.3 0 0 0-31.8-76.5ZM228 184a4 4 0 0 1-4 4H111.6l63.4-82.7a4 4 0 1 0-6.3-4.9L101.5 188H32a4 4 0 0 1-4-4v-22.9a102.6 102.6 0 0 1 2.6-23l26.8 7.1l1.1.2a4 4 0 0 0 1-7.9l-26.7-7.2C45.3 90.8 81.3 61.8 124 60.1V88a4 4 0 0 0 8 0V60.1a99.3 99.3 0 0 1 66.6 29.1a98.2 98.2 0 0 1 24.9 41.1l-27 7.2a4 4 0 0 0 1 7.9l1.1-.2l27-7.2a100.2 100.2 0 0 1 2.4 22Z">
                                    </path>
                                </svg>
                                <div class="text-[12px] font-bold text-center">Flüssigschmierstoffe
                                    vs.<br>Trockenschmierstoffe</div>
                            </li>
                        </ul>
                    </nav>
                    <!-- text content -->
                    <div class="subcont-holder-s3-fun mt-8">
                        <div :class="{'show': selectedNav == 1}" class="sub-content-1 sub-content">
                            <div class="">

                                <div v-if="project.generalProjectType == 'VA'" class="font-weight-bold uppertext text-sm"
                                    style="margin-top: 40px;">allgemeine Informationen zu Ihrer angewendeten Deckschicht
                                </div>
                                <div v-if="project.generalProjectType == 'BE'" class="font-weight-bold uppertext text-sm"
                                    style="margin-top: 40px;">allgemeine Informationen zu Ihrer empfohlenen Deckschicht
                                </div>
                                <h1 class="text-3xl font-bold tracking-tight px-10 lg:px-0">MOS2
                                    Festschmierstoffe</h1>

                              <div class="mt-8 text">
                                  Die zunehmende Bedeutung der Hochdruckschmierung ist durch die gesteigerten
                                  Ansprüche, die auf
                                  allen Gebieten des Maschinenbaues gestellt werden, gegeben. Im Bereich der
                                  Misch- und der
                                  Grenzreibung ist auf Festschmierstoffe, und insbesondere auf Molybdändisulfid
                                  (MoS2) auch heute
                                  nicht zu verzichten.
                                  <br><br>
                                  Das Molybdändisulfid gehört in die Gruppe der festen Schmierstoffe, die auf
                                  Grund ihres
                                  kristallischen Aufbaues solche Eigenschaften in sich vereinen, die sie dazu
                                  befähigt, ohne
                                  Veränderungen der metallischen Oberfläche eine Schmierwirkung zu entfalten.
                                  <br><br>
                                  Die Wirkungsweise der chemisch wirkenden Hochdruckschmiermittel beruht im
                                  allgemeinen darauf, dass
                                  durch chemische Umsetzung an der Oberflächen Grenzschichten nicht - metallischer
                                  Zwischenfilme
                                  hergestellt werden, die den direkten Metall- an Metall- Kontakt und dadurch das
                                  Verschweißen und
                                  Festfressen verhindern. Diese Zwischenfilme werden durch chemische Umsetzung
                                  erzeugt, indem den
                                  Schmiermitteln solche Stoffe zugesetzt werden, die mit dem Oberflächenmaterial
                                  chemisch reagieren.
                                  <br><br>
                                  Die Schmiereigenschaften des Molybdändisulfides beruht - ähnlich der des
                                  Grafits - darauf, dass
                                  diese Stoffe auf Grund ihres Kristallgefüges befähigt sind, ohne Veränderung
                                  der metallischen
                                  Oberfläche Schmierwirkung zu entfalten. Das MoS2 gehört in die Gruppe der
                                  Schichtgitterkristalle,
                                  d. h. die Atome oder Ionen sind in Schichten angeordnet, vorwiegend in der
                                  Weise, dass die
                                  einzelnen Schichten nur aus Atomen oder Ionen gleicher Art und gleicher
                                  Ladung bestehen.
                              </div>
                            </div>

                        </div>
                        <div :class="{'show': selectedNav == 2}" class="sub-content-2 sub-content">
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
                        <div :class="{'show': selectedNav == 3}" class="sub-content-3 sub-content">
                            <div class="text-sm">

                                <div v-if="project.generalProjectType == 'VA'" class="font-weight-bold uppertext"
                                    style="margin-top: 40px;">allgemeine Informationen zu Ihrer angewendeten Deckschicht
                                </div>
                                <div v-if="project.generalProjectType == 'BE'" class="font-weight-bold uppertext"
                                    style="margin-top: 40px;">allgemeine Informationen zu Ihrer empfohlenen Deckschicht
                                </div>
                                <h1 class="text-3xl font-InterExtraBold tracking-tight px-10 lg:px-0">
                                    Flüssigschmierstoffe
                                    vs.<br>Trockenschmierstoffe</h1>

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
            </div>
        </div>
    </section>
</template>

<script setup>
import {useMq } from "vue3-mq"
const $mq = useMq();

const props = defineProps(["project"])
const { project } = toRefs(props)

const selectedNav = ref(1)

</script>

<style lang="scss" scoped>
section.section3General {

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

        &.bgbeige-left-div-3 {

            table th {
                max-width: 100%;
                font-size: 10px;
                line-height: 130%;
                color: #ffffff;
                text-align: left;
            }

            .content-th-left {
                width: 30%;
                font-size: 12px;
                line-height: 100%;
                color: #ffffff;
                text-align: left;
                padding: 15px 0px;
                border-bottom: 1px solid #e2e3e3;

            }

            .content-td {
                width: 30%;
                font-size: 11px;
                line-height: 130%;
                color: #ffffff;
                text-align: left;
                padding: 10px 20px;
                border-left: 1px solid #e2e3e3;
                border-bottom: 1px solid #e2e3e3;
            }

            .content-top-th {
                padding: 10px 25px;
                font-family: Verdana, Arial, Gotham, Helvetica, sans-serif;
                font-size: 12px;
                line-height: 110%;
                color: #ffffff;
                text-align: left;
                border-left: 1px solid #e2e3e3;
                border-bottom: 1px solid #e2e3e3;
                height: 80px;
            }

            .content-top-bar {
                padding: 20px 25px;
                font-family: Verdana, Arial, Gotham, Helvetica, sans-serif;
                font-size: 14px;
                line-height: 130%;
                color: #ffffff;
                text-align: center;
                height: 60px;

            }

            .add-icon {

                height: 16px;
                width: 16px;
                display: inline-block;
                text-align: center;
                border-radius: 100%;
                padding-top: 2px !important;
                padding-left: 1px;
                //padding-top: 3px;
                color: #fff;
                font-size: 22px;
                //line-height:1;
                background: #54cf4f;
                font-weight: bolder;
                text-decoration: none;

            }

            /*.add-icon:after{
          position: absolute;
          left: 0;
          top: -1px;
          content: '+';
          color: #000;
          font-family: Arial, Gotham, Helvetica, sans-serif;
          font-size: 23px;
          line-height: 1;
          text-align: center;
          width: 100%;
          height: 100%;
        }*/
            .minus-icon {
                height: 16px;
                width: 16px;
                display: inline-block;
                text-align: center;
                border-radius: 100%;
                background: #fe5474;
                padding-top: 1px;
                color: #fff;
                font-size: 22px;
                font-weight: bolder;
                text-decoration: none;
                position: relative;
            }

            /* .minus-icon:after {
           position: absolute;
           left: 0;
           top: -4px;
           content: '-';
           color: #000;
           font-family: Arial, Gotham, Helvetica, sans-serif;
           font-size: 25px;
           line-height: 1;
           width: 100%;
           height: 100%;
           text-align: center;
         }*/

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

