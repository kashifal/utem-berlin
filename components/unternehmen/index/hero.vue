<template>
  <div class="hero w-full bg-cover bg-center"  style="background-image: url('https://ucarecdn.com/68140f4e-146d-4b76-a2e1-6fbf899ef457/unternehmen_banner_02.png');">
    <div class="inner">
      <h5 class="font-InterExtraBold text-white text-5xl uppercase">
        Traditionell fortschrittlich<br>
        <span class="text-amber-400"></span>
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

  computed: {
    lang_suffix() {
      if (this.$i18n.locale == "de") return "";
      else return "_" + this.$i18n.locale;
    }
  }
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

.hero {
  position: relative;
  height: 60vH;
}
.overlay {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAAXNSR0IArs4c6QAAACBJREFUCB1jYGBg+A/EIIBOQ0SRSXQVMD6yGggbJgOnAcmtCPjyS2ejAAAAAElFTkSuQmCC");

  opacity: 1;
  position: absolute;
  top: 0;
  left: 0;
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

  bottom: 30px;
  left: 100px;

  z-index: 20;

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





