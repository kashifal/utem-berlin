<template>
  <div class="flex w-full bg-red-700" style="height: 70vh;">
    <div class="flex w-1/2 bg-white justify-center items-center">
      <div class="flex h-48 w-96 bg-green-400 justify-center items-center">
        <div class="text-white text-xl text-center font-bold">DECORATIVE COATING</div>
      </div>
    </div>
    <div class="flex w-1/2 bg-red-400 justify-center items-center">
      <div class="flex h-48 w-96 bg-green-400 justify-center items-center">
        <div class="text-white text-xl text-center font-bold">image</div>
      </div>
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

</style>
