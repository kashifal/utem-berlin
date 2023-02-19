<template>
  <section class="w-full bg-white">
    <div class="flex flex-col px-6 py-20 mx-auto max-w-7xl lg:flex-row">

      <div class="relative w-full mb-10 lg:text-left sm:text-center lg:w-1/2 xl:w-7/12 lg:mb-0">
        <p class="text-sm font-semibold tracking-wide uppercase">What Is tails?</p>
        <h2 class="text-5xl font-bold sm:text-6xl mt-7">Was müssen<br class="hidden lg:block"> Beschichtungen<br>leisten?</h2>
        <p class="text-gray-600 lg:max-w-xl mt-9">
          Tails is a drag'n drop tailwindcss page creator that will help you design the page of your dreams. Despite all the work done, TT Norms Pro 3.0 continues to be a geometric sans serif for a wide range of applications—a trouble-free workhorse. TT Norms Pro 3.0 works equally well both in large text arrays or in headlines, as well as in web and it is “the one”, the indispensable universal modern geometric sans.
          <br><br>
          Tails is a drag'n drop tailwindcss page creator that will help you design the page of your dreams. Despite all the work done, TT Norms Pro 3.0 continues to be a geometric sans serif for a wide range of applications—a trouble-free workhorse. TT Norms Pro 3.0 works equally well both in large text arrays or in headlines, as well as in web and it is “the one”, the indispensable universal modern geometric sans.
        </p>
        <ul class="relative max-w-md lg:mx-0">
          <li class="flex pl-6 mt-5">
            <svg class="absolute left-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
            <span class="text-sm text-gray-600"><span class="font-bold text-gray-900">Hand-crafted</span> designs that are easy to modify and change to fit into any new or existing project. 100% satisfaction is guaranteed!</span>
          </li>
          <li class="flex pl-6 mt-5">
            <svg class="absolute left-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
            <span class="text-sm text-gray-600"><span class="font-bold text-gray-900">Clean HTML</span> with perfect indentation, comments, and structure. Easily modify any element to fit your needs.</span>
          </li>
        </ul>

        <!--
<a href="#_" class="inline-block px-5 py-3 mt-8 text-sm text-white bg-gray-900 rounded-md hover:bg-gray-800">
             <span class="font-medium">Get Started</span> - <span class="font-light">it's free</span>
         </a>
-->
      </div>

      <div class="relative flex flex-col items-center justify-center flex-shrink-0 w-full max-w-2xl py-16 mx-auto bg-gray-200 rounded-lg lg:w-1/2 lg:mx-0 xl:w-5/12">
        <img src="/img/verfahren/hvi/leistung_06.png">
      </div>

    </div>
  </section>
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
