<template>
  <div class="video-container" @click="updatePaused" v-if="$mq != 'small'">
    <video id="videoElement" class="video" ref="video">
      <source src="https://ucarecdn.com/91c9e20d-c1a5-4523-bde9-57afdecc7824/mobility_web_1920_1080_de.mp4" type="video/mp4"/>
    </video>
    <transition name="fade">
      <div v-if="!playing" class="playpause"></div>
    </transition>

    <div class="inner">
      <h5 class="font-InterExtraBold text-white text-5xl">
        SEKTOR MOBILITY
      </h5>
    </div>

    <div class="overlay"></div>
  </div>
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
  top: 0;
  bottom: 0;
  width: 100%;
  height: 80vh;
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
  background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ic" width="1rem" height="1rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="#ffffff" d="m10 16.5l6-4.5l-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z"></path></svg>');
  background-repeat: no-repeat;
  width: 20%;
  height: 20%;
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


