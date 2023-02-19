<template>
  <!-- KOMPETENZ SECTION -->
  <section class="md:p-10 w-full max-w-screen-2xl mx-auto inset-x-0 mt-16">
    <div class="flex">
      <div class="hidden lg:block md:w-[30%] bg-green-400">
        <h2 class="text-4xl font-InterExtraBold mb-10 xl:mb-0">Gleitlacke =<br>TROCKEN<br>SCHMIERUNG</h2>
      </div>
      <div class="xl:w-[70%] bg-red-400">
        <h2 class="lg:hidden text-4xl font-InterExtraBold mb-10 xl:mb-0">Gleitlacke =TROCKENSCHMIERUNG</h2>
        <p class="text-lg font-semibold text-gray-500">
          Trockenschmierung verleiht Maschinenelementen verbesserte Gleiteigenschaften.

          Der Reibungskoeffizient zweier Fluorkunstoffflächen entspricht etwa dem von nassem Eis auf nassem Eis. Die Funktion der Trockenschmierung und die damit verbundene Verringerung des Reibungskoeffizienten werden gesteigert, je höher der Reibungsdruck ist.
          <br><br>
          Die Basis bei der Trockenschmierung (tribotechnischen Beschichtungen/Coatings) sind Festschmierstoffe. Die Feststoffpigmente werden in Harz oder Binder sowie durch ein Lösemittel eingebunden. Je nach Anforderungsprofil der Trockenschmierung entstehen so die unterschiedlichsten Festschmierstoffrezepturen.
          <br><br>
          Die wichtigsten Beschichtungsarten für das Aufbringen einer Trockenschmierung sind das Tauchzentrifugieren, das Trommelsprühen und das manuelle oder automatische Spritzverfahren. Die Mehrzahl der tribotechnischen Coatings werden durch den Polymerisationsprozess (Sintern) in einer Ofenanlage abgeschlossen.
          <br><br>
          Bevorzugte Einsatzgebiete von Trockenschmier-Systemen sind z.B. Kugel-, Stab- oder Gleitlager, Vergaserteile, Steuerungen, Gelenke, Relais, Gleitflächen, Schrauben, Erdölbohrausrüstungen, Antriebe.

        </p>
      </div>
    </div>
    <hr class="my-10" />
    <div class="flex flex-col lg:flex-row 2xl:space-x-44 mb-20 xl:p-0">
      <div class="xl:w-[20%]">
        <h2 class="scrollanime text-4xl xl:text-3xl 2xl:text-4xl font-InterExtraBold mb-10 xl:mb-0">Was sind Gleitlack<br>beschichtungen</h2>
      </div>
      <div class="xl:w-[80%]">
        <p class="text-lg font-semibold text-gray-500">
          Ihre Bauteile sind kontinuierlich Reibkräften ausgesetzt? Unsere Produktentwickler haben sich intensiv mit diesem Thema auseinandergesetzt – das Ergebnis sind belastbare Gleitbeschichtungen für viele Anwendungsgebiete. Durch unsere fachgerechte Oberflächenbehandlung bleibt das Material unterhalb der Oberfläche lange erhalten und geschützt. Setzen Sie deshalb auf robuste Gleitlacke von Aalberts surface technologies. Die Trockenschmierung birgt viele Vorteile gegenüber konventionellen Schmierstoffen wie Öl oder Fett. Zum einen können die Reibwerte und Gleiteigenschaften deutlich gesteigert werden, zum anderen wird die Haltbarkeit verlängert. Darüber hinaus ist eine Dauerschmierung wartungsfrei – auch unter hoher Beanspruchung</p>
      </div>
    </div>
    <hr class="my-10" />
    <div class="flex flex-col xl:flex-row 2xl:space-x-44 mb-20 xl:p-0">
      <div class="xl:w-[20%]">
        <h2 class="scrollanime text-4xl xl:text-3xl 2xl:text-4xl font-InterExtraBold mb-10 xl:mb-0">Wie funktionieren<br>Gleitlack<br>beschichtungen</h2>
      </div>
      <div class="xl:w-[80%]">
        <div class="video-container" @click="updatePaused" v-if="$mq != 'small'">
          <video id="videoElement" class="video " ref="video">
            <!--      <source src="https://d2gbg4345jibci.cloudfront.net/video/theTable.mp4" type="video/mp4"/>-->
            <source src="/video/ani2.mp4" type="video/mp4"/>
          </video>
          <transition name="fade">
            <div v-if="!playing" class="playpause"></div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "customBgVideo",
  props: ["contents"],
  data() {
    return {
      // videoElement: null,
      paused: true,
    };
  },
  methods: {
    updatePaused(event) {
      //console.log(event);
      console.log("updatePaused");

      // Old code
      //this.videoElement = event.target;
      //this.paused = event.target.paused;

      // new code
      if (this.playing) {
        this.pause();
        this.paused = true;
      } else {
        this.play();
        this.paused = false;
      }
    },
    play() {
      console.log("play");
      this.videoElement.play();
    },
    pause() {
      console.log("pause");
      this.videoElement.pause();
    },
  },

  computed: {
    lang_suffix() {
      if (this.$i18n.locale == "de") return "";
      else return "_" + this.$i18n.locale;
    },
    videoElement() {
      return this.$refs.video;
    },
    playing() {
      return !this.paused;
    },
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.video-container {
  /*margin: 30px 0 30px 0;*/
  position: relative;
  width: 100%;
  height: 40vh;
  overflow: hidden;
}

.video-container video {
  /* Make video to at least 100% wide and tall */
  min-width: 100%;
  min-height: 100%;

  /* Setting width & height to auto prevents the browser from stretching or squishing the video */
  width: auto;
  height: auto;

  /* Center the video */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/*
.wrapper {
    display: table;
    width: auto;
    position: relative;
    width: 50%;
}
*/
.playpause {
  background-image: url("/img/media_play_pause_resume_white_01.png");
  background-repeat: no-repeat;
  width: 50%;
  height: 50%;
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  margin: auto;
  background-size: contain;
  background-position: center;
  z-index: 100;
}

.overlay {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAAXNSR0IArs4c6QAAACBJREFUCB1jYGBg+A/EIIBOQ0SRSXQVMD6yGggbJgOnAcmtCPjyS2ejAAAAAElFTkSuQmCC");

  opacity: 1;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  box-sizing: border-box;

  :last-child {
    margin-bottom: 0;
  }

  .textbox {
    position: absolute;
    bottom: 0;
    left: 0;
  }
  h1 {
    font-size: 32pt;
    font-weight: bold;
    color: #fff !important;
    margin: 0 0 1em;
  }

  p {
    font-size: 11pt;
    color: #fff !important;
    margin: 1em 0;
  }

  a {
    color: #fff;
  }
}

.inner {
  position: absolute;
  width: 100%;
  bottom: 35%;
  left: 5%;

  z-index: 3;

  @include medium {
  }
  @include small {
    padding: 0 40px;
    bottom: 10%;
  }
  @include extrasmall {
  }

  span.hashtag {
    font-size: 14px;
    margin-top: 20px;
    display: block;
    color: #ffcc00;
  }

  h2 {
    color: #ffcc00;

    font-size: 24px;
    line-height: 3rem;
    padding-top: 0.3rem;
    margin-bottom: 10px;
  }
  h3 {
    color: #ffcc00;

    font-size: 1rem;
    line-height: 1.8rem;
    padding-top: 1.3rem;
    margin-bottom: 10px;
  }
  h5 {
    font-weight: 700;
  }

  p {
    color: #ffcc00;
    font-size: 13px;
  }
}
</style>


