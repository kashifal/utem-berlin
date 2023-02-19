<template>
  <!--  <div class="relative w-full h-screen bg-cover bg-center" data-blink-src="https://ucarecdn.com/254f130b-5a9c-46fa-bee3-d81237c69cd3/">-->
  <!--  <div class="relative w-full h-screen bg-cover bg-center" styv-bind:data-blink-src="homeHero">-->
  <div class="relative w-full h-screen bg-cover bg-center"
    style="background-image: url(https://d2gbg4345jibci.cloudfront.net/img/home/jannes-glas-87royqk4t6o-unsplash-1900.jpeg);">
    <div class="blueOverlay">
      <div class="flex h-screen items-center">
        <div class="px-10 md:px-[40px] xl:px-[130px]">
          <!-- image/video teaser desktop -->
          <div
            class="text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl space-y-1 md:space-y-5 font-InterExtraBold text-white leading-normal">
            <div ref="fwProjectsRef" class="fw-projects">

              <div data-image-url="/img/project-featured-image.jpg" class="fw-project">
                <a href="/gleitlackbeschichtung">
                  <div class="fw-project-title">{{ $t("homeHero.Gleitlackbeschichtung") }} </div>
                  <div class="fw-project-category">Photography</div>
                </a>
              </div>

              <div data-image-url="/img/project_featured_image.jpg" class="fw-project">
                <a href="project-1.html">
                  <div class="fw-project-title"> {{ $t("homeHero.Korrosionsschutz") }} </div>
                  <div class="fw-project-category">Photography</div>
                </a>
              </div>

              <div data-image-url="/img/project_featured_image3.jpg" class="fw-project">
                <a href="project-1.html">
                  <div class="fw-project-title"> {{ $t("homeHero.PulverDekorative") }}</div>
                  <div class="fw-project-category">Photography</div>
                </a>
              </div>

              <div data-image-url="/img/project_featured_image4.jpg" class="fw-project hidden lg:block">
                <a href="project-1.html">
                  <div class="fw-project-title"> {{ $t("homeHero.Functional") }} </div>
                  <div class="fw-project-category">Photography</div>
                </a>
              </div>

              <div data-image-url="https://d2gbg4345jibci.cloudfront.net/video/emobility.mp4" class="fw-project">
                <a href="project-1.html">
                  <div class="fw-project-title"> {{ $t("homeHero.PulverArchitecture") }} </div>
                  <div class="fw-project-category">Photography</div>
                </a>
              </div>
              <br>

              <div data-image-url="https://d2gbg4345jibci.cloudfront.net/video/theTable.mp4" class="fw-project">
                <a href="project-1.html">
                  <div class="fw-project-title"> {{ $t("homeHero.Nasslack") }} </div>
                  <div class="fw-project-category">Photography</div>
                </a>
              </div>

              <div data-image-url="/video/ani2.mp4" class="fw-project">
                <a href="project-1.html">
                  <div class="fw-project-title"> {{ $t("homeHero.KTL") }} </div>
                  <div class="fw-project-category">Photography</div>
                </a>
              </div>

            </div>
            <div ref="fwImagesRef" class="fw-images"></div>
          </div>
        </div>
      </div>
      <!-- carousel news -->
      <div class="absolute bottom-10 sm:bottom-24 w-full ">
        <div class="px-10 md:px-[40px] xl:px-[130px]">
          <Splide aria-labelledby="autoplay-example-heading" :options="options" :has-track="false">
            <div style="position: relative">
              <SplideTrack>
                <SplideSlide>
                  <div class="">
                    <div class="text-[13px] text-amber-300 font-bold md:text text-white lg:pb-1">
                      #technology
                    </div>
                    <div class="text sm:text-xl md:text font-medium leading-none text-left text-white ">
                      Wir stellen im September auf "The Battery Show" in Stuttgart aus
                    </div>
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div class="">
                    <div class="text-[13px] text-amber-300 font-bold md:text text-white lg:spb-1">
                      #quality
                    </div>
                    <div class="text sm:text-xl md:text font-medium leading-none text-left text-white ">
                      AKASOL Rezertifizierung erfolgreich durchgeführt
                    </div>
                  </div>

                </SplideSlide>
              </SplideTrack>
            </div>

            <div class="splide__progress pt-2">
              <div class="splide__progress__bar opacity-20"></div>
            </div>
          </Splide>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { useMq } from "vue3-mq"
import '@splidejs/vue-splide/css';
import '@splidejs/vue-splide/css/core';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';

import { gsap } from "~/assets/js/gsap"
import { SplitText } from "~/assets/js/gsap/SplitText"
import { ScrollTrigger } from "~/assets/js/gsap/ScrollTrigger"
gsap.registerPlugin(SplitText, ScrollTrigger)

const $mq = useMq();

const fwProjectsRef = ref(null)
const fwImagesRef = ref(null)

const props = defineProps(["project"])
const { project } = toRefs(props)

const homeHero = computed(() => {
  switch ($mq.current) {
    case 'xxl':
      return `https://d2gbg4345jibci.cloudfront.net/img/home/jannes-glas-87royqk4t6o-unsplash-1900.jpeg`
    case 'xl':
      return `https://d2gbg4345jibci.cloudfront.net/img/home/jannes-glas-87royqk4t6o-unsplash-1900.jpeg`
    case 'large':
      return `https://ucarecdn.com/6c3fc5e4-f5c3-45be-b6d0-392fe2f5006f/-/preview/-/quality/smart/-/crop/16:9/-0p,0/-/resize/600x/`
    case 'medium':
      return `https://ucarecdn.com/6c3fc5e4-f5c3-45be-b6d0-392fe2f5006f/-/preview/-/quality/smart/-/resize/600x/`
    case 'small':
      return `https://ucarecdn.com/6c3fc5e4-f5c3-45be-b6d0-392fe2f5006f/-/preview/-/quality/smart/-/crop/16:12/-0p,0/-/resize/600x/`
    default:
      return `https://d2gbg4345jibci.cloudfront.net/img/home/jannes-glas-87royqk4t6o-unsplash-1900.jpeg`
  }
})

onMounted(() => {
  // const projects = fwProjectsRef.value;
  const project = gsap.utils.toArray(".fw-project", fwProjectsRef.value);
  //console.log('project', project)

  new SplitText('.fw-projects', {
    type: 'lines',
    linesClass: 'fwt-line'
  })

  project.forEach((element, i) => {
    //console.log('element, i', element, i)
    const imageURL = element.dataset.imageUrl
    //console.log('imageURL', imageURL)
    const videoID = element.dataset.plyrEmbedId
    //console.log('videoID', videoID)

    if (imageURL != null) {
      fwImagesRef.value.innerHTML = fwImagesRef.value.innerHTML + '<div class="fw-project-image image_' + i + '"><div class="fw-project-image-wrap"><img src="' + imageURL + '"></div></div>'
      element.dataset.image = 'image_' + i
    } else {
      fwImagesRef.value.innerHTML = fwImagesRef.value.innerHTML + '<div class="fw-project-image image_' + i + '"><div class="fw-project-image-wrap"> <div class="showcase-video" data-plyr-provider="vimeo" data-plyr-embed-id="' + videoID + '"></div></div></div>'
      element.dataset.image = 'image_' + i
    }

    element.addEventListener('mouseenter', () => {

      // let $this = $(this),
      const findImage = element.dataset.image
      //console.log('findImage', findImage)
      const imgWrap = gsap.utils.toArray('.fw-project-image-wrap', document.getElementsByClassName(findImage)[0])[0]
      //console.log('imgWrap', imgWrap)
      const img = gsap.utils.toArray('img', imgWrap)[0]
      //console.log('img', img)
      // cat = $this.find('.fw-project-category').text();

      // $('.fw-cat').html('<span>' + cat + '</span>');

      new SplitText('.fw-cat', {
        type: 'chars',
        charsClass: 'fw-cat-char'
      })

      gsap.fromTo('.fw-cat-char', {
        y: '100%'
      }, {
        y: '0%',
        stagger: 0.02
      })

      element.classList.add('active')

      gsap.to(imgWrap, {
        duration: 1,
        overwrite: true,
        ease: 'expo.out',
        width: '100%',
        onStart: function () {
          gsap.set(imgWrap, {
            left: 'unset',
            right: 0
          })
        }
      })

      /* gsap.fromTo(img, {
        duration: .7,
        x: '30%',
        scale: 1.1
      }, {
        x: '0%',
        scale: 1
      }) */


    })

    element.addEventListener('mouseleave', () => {

      // let $this = $(this),
      const findImage = element.dataset.image
      //console.log('findImage', findImage)
      const imgWrap = gsap.utils.toArray('.fw-project-image-wrap', document.getElementsByClassName(findImage)[0])[0]
      //console.log('imgWrap', imgWrap)
      const img = gsap.utils.toArray('img', imgWrap)[0]
      //console.log('img', img)
      // cat = $this.find('.fw-project-category').text();

      // $('.fw-cat').html('<span>' + cat + '</span>');

      element.classList.remove('active')

      gsap.to(imgWrap, {
        duration: 1,
        ease: 'expo.out',
        width: '0%',
        overwrite: true,
        onStart: function () {

          gsap.set(imgWrap, {
            right: 'unset',
            left: 0
          })

        }
      })

      /* gsap.fromTo(img, {
        duration: .7,
        x: '0%',
        scale: 1
      }, {
        x: '-30%',
        scale: 1.1
      }) */

      gsap.to('.fw-cat-char', {
        y: '-100%',
        stagger: 0.02
      })
    })
  })

  fwProjectsRef.value.addEventListener('mouseenter', e => {
    project.forEach(element => {
      element.classList.add('opdown')
    })
  })

  fwProjectsRef.value.addEventListener('mouseleave', e => {
    project.forEach(element => {
      element.classList.remove('opdown')
    })
  })

})

const options = ref({
  type: 'loop',
  gap: '1rem',
  autoplay: true,
  speed: 1500,
  duration: 4000,
  arrows: false,
  pagination: false

})

</script>


<style lang="scss" scoped>
.blueOverlay {
  height: 100%;
  background: linear-gradient(to right,
      rgba(0, 0, 0, 0.75) 0,
      rgba(21, 166, 219, 0.4) 100%);
}
</style>

<style>
/*------------------------------------------------------------------
## Fullscreen Wall
-------------------------------------------------------------------**/



.fw-projects {
  position: relative;
  top: 50%;
  left: 0%;
  display: block;
  width: 100%;
  z-index: 1
}

.fw-projects .fwt-line {
  overflow: hidden
}

.fw-images {
  position: fixed;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  pointer-events: none
}

@media screen and (max-width: 600px) {
  .fw-images {


    width: 100%;



  }
}

.portfolio-showcase .fw-images .plyr__video-wrapper {
  width: calc((100vh) * 1.77777778)
}

.fw-images .fw-project-image,
.fw-images .fw-project-image img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: top;
  object-position: top;
}

.fw-images .fw-project-image {
  position: absolute;
  top: 0;
  right: 0;
}

.fw-project {
  display: inline-block;
  padding: 5px 0;
  cursor: pointer;

  padding-right: 5px
}



.fw-project a {
  text-decoration: none;
  color: #ffffff;
  display: inline-block;

}


body.dark .fw-project a,
.fullscreen-wall-showcase.dark .fw-project a {
  color: #fff
}

.fw-projects .fw-project-image {
  display: none
}

.fw-project .fw-project-category {
  display: none
}

.fw-project-title {


  letter-spacing: -0.06em;
  display: inline-block;
  -webkit-transition: opacity .3s ease;
  -o-transition: opacity .3s ease;
  transition: opacity .3s ease;
}

.fw-project.opdown .fw-project-title {
  opacity: .4
}

.fw-project.active.opdown .fw-project-title {
  opacity: 1;
}


.fw-project-image-wrap {
  position: absolute;
  top: 0;
  right: 0;
  width: 0%;
  height: 100%;
  overflow: hidden;
}

.fw-project::after {
  content: "/";
  display: inline-block;
  font-size: 60px;
  margin: 0 20px;
  font-weight: 700;
  color: rgba(25, 27, 29, .2);
}


.fwt-line .fw-project:last-child::after {
  display: none
}


body.dark .fw-cat,
.fullscreen-wall-showcase.dark .fw-cat,
body.dark .fw-project::after,
.fullscreen-wall-showcase.dark .fw-project::after {
  color: hsla(0, 0%, 100%, .6)
}
</style>
