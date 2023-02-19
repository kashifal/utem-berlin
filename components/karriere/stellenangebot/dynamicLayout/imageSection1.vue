<template>
<!--  <div class="hero w-full bg-cover bg-center" data-blink-uuid="0d1da52e-8121-4ebb-bf5f-d64b4c62a1af">-->
  <div class="hero w-full bg-cover bg-center" style="background-image: url(https://d2gbg4345jibci.cloudfront.net/img/karriere/joboffer-01.jpeg);">
    <div class="inner w-full max-w-screen-xl mx-auto inset-x-0 mt-16">
      <h5 class="font-InterExtraBold text-white text-5xl">
        <div v-if="entityData">
          <strong>{{ contents.headline }}</strong>
        </div>
      </h5>
    </div>
<!--    <div class="overlay"></div>-->
  </div>
</template>


<script>
export default {
  props: ["contents", "entityData"],
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


}

.inner {
  position: absolute;
  bottom: 10px;
  left: 0px;
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




