<template>
  <div class="flex flex-col px-6 py-20 mx-auto max-w-7xl lg:flex-row">

    <div class="relative w-full mb-10 lg:text-left sm:text-center lg:w-1/2 xl:w-7/12 lg:mb-0">
      <div class="flex h-96 w-96 justify-center items-center">
        <div class="gradient-text text-left font-bold">HIGH VOLTAGE INSULATION</div>

      </div>
    </div>

    <div class="relative flex flex-col items-center justify-center flex-shrink-0 w-full max-w-2xl py-16 mx-auto  lg:w-1/2 lg:mx-0 xl:w-5/12">
      <p>
        Oberflächenbeschichtungen stellen die Schnittstelle zwischen Grundwerkstoffen und der äußeren Umgebung dar. Jede Beschichtung weist mindestens eine Funktion aus. Diese Funktion kann z.B. die Optik eines Bauteils, Korrosionsschutz, easy-to-clean Eigenschaften oder den Verschleißschutz bestimmen. Alle durch Beschichtungen realisierbaren Funktionen aufzuzählen, überschreitet den Umfang dieses Beitrages. Der Fokus dieser Betrachtung von funktionellen Beschichtungen liegt in den neuen Anwendungsfeldern der E-Mobilität, auch hier besteht kein Anspruch auf Vollständigkeit.
        In der E-Mobilität sind aus unserer Sicht folgende Anwendungsfelder von erhöhtem Interesse:<br><br>
      </p>
    </div>

    </div>


</template>

<script>
import _ from "lodash";

export default {
  props: {
    postTeasers: Array,
  },
  data: () => ({
    imageResolution: "xl",
  }),
  computed: {
    lang_suffix() {
      if (this.$i18n.locale == "de") return "";
      else return "_" + this.$i18n.locale;
    },
    link_prefix() {
      if (this.$i18n.locale == "de") return "";
      else return "/" + this.$i18n.locale + "/";
    },
  },
  mounted() {
    document.querySelectorAll(".parallaxscene").forEach((elem) => {
      const modifier = elem.getAttribute("data-modifier");
      const start = 500;
      const to = 2000;
      let modifierR = modifier * 1;

      basicScroll
          .create({
            elem: elem,
            from: start,
            to: to,
            direct: true,
            props: {
              "--translateY": {
                from: "0",
                to: `${4 * modifierR}px`,
              },
            },
          })
          .start();
    });
  },

  methods: {
    activeImage(images) {
      return _.filter(images, function (o) {
        return o.isVisible;
      });
    },
  },
};
</script>

<style scoped>
img[lazy=loading] {
  opacity: 0;
}
</style>

<style lang="scss" scoped>

.gradient-text {
  font-size: 72px;
  height: 100%;
  /* Fallback: Set a background color. */
  background-color: red;

  /* Create the gradient. */
  background-image: linear-gradient(45deg, #f3ec78, #af4261);

  /* Set the background size and repeat properties. */
  background-size: 100%;
  background-repeat: repeat;

  /* Use the text as a mask for the background. */
  /* This will show the gradient as a text color rather than element bg. */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
}
</style>
