<template>
  <section id="corrosionproductgeneral" class="section3General relative h-[92vh] mt-4 md:mr-12">
    <!-- section container -->
    <div class="relative flex-1 mt-0 bg-bgBeige lg:pl-20  mb-5 mr-0 ">
      <div class="flex flex-col lg:flex-row lg:space-x-14 py-20">
        <!-- images container -->
        <div class="lg:w-6/12 h-[80vh] mt-20 lg:mt-0">
          <div class="w-full h-full bg-gray-700">
            <div :class="{'show': selectedNav == 1}" class="flex items-center h-full w-full bgbeige-left-div bgbeige-left-div-1 ">
              <div class="w-10/12 pt-12 mx-auto">
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
          </div>

        </div>
        <!-- text container -->
        <div class="lg:w-6/12 px-10 pt-4 lg:px-12">
          <!-- sub navigation -->
          <nav>
            <ul class="flex justify-between space-x-24 px-24">
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
              </ul>
          </nav>
          <!-- text content -->
          <div class="subcont-holder-s3-fun mt-8">
            <div :class="{'show': selectedNav == 1}" class="sub-content-1 sub-content">
              <div class="text">

                <div v-if="project.generalProjectType == 'VA'" class="font-weight-bold uppertext"
                     style="margin-top: 40px;">allgemeine Informationen zu ihrem angewendeten Korrosionsschutz
                </div>
                <div v-if="project.generalProjectType == 'BE'" class="font-weight-bold uppertext"
                     style="margin-top: 40px;">allgemeine Informationen zu Ihrem empfohlenen Korrosionsschutz
                </div>
                <h1 class="text-3xl font-InterExtraBold tracking-tight px-10 lg:px-0">galvanischer Zink-Nickel Korrosionsschutz</h1>

                <div class="mt-8">
                  <p>Die zunehmende Bedeutung der Hochdruckschmierung ist durch die gesteigerten
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
                  </p>
                  <div>
                    <p>Die Schmiereigenschaften des Molybdändisulfides beruht - ähnlich der des
                      Grafits - darauf, dass
                      diese Stoffe auf Grund ihres Kristallgefüges befähigt sind, ohne Veränderung
                      der metallischen
                      Oberfläche Schmierwirkung zu entfalten. Das MoS2 gehört in die Gruppe der
                      Schichtgitterkristalle,
                      d. h. die Atome oder Ionen sind in Schichten angeordnet, vorwiegend in der
                      Weise, dass die
                      einzelnen Schichten nur aus Atomen oder Ionen gleicher Art und gleicher
                      Ladung bestehen.
                    </p>
                  </div>
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

