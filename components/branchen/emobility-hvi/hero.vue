<template>
  <div class=" w-full h-[80vh] bg-cover bg-center"  data-blink-uuid="1117ed91-1f36-45ae-b6ac-0716250732b7">
    <!-- logo -->
    <div class="">
      <div class="overlay h-[80vh]"></div>

      <!-- navigation -->
      <div class="absolute bottom-10 left-40 z-10 flex items-center h-[80vh]">
        <div class=" ">
          <p class="text-xl md:text-2xl font-medium tracking-widest leading-none text-left text-white uppercase">
            Branchen
          </p>
          <div class="md:block hidden md:text-4xl xl:text-5xl 2xl:text-6xl space-y-8 font-bold mt-6 text-white leading-normal">
            <div>
              <span><a href="/panel">HIGH VOLTAGE INSULATION</a></span>
            </div>
          </div>
        </div>
      </div>

      <div/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.blueOverlay {
  height: 100%;
  background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.75) 0,
      rgba(21, 166, 219, 0.4) 100%
  );
}
.overlay {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAAXNSR0IArs4c6QAAACBJREFUCB1jYGBg+A/EIIBOQ0SRSXQVMD6yGggbJgOnAcmtCPjyS2ejAAAAAElFTkSuQmCC");
}
</style>

