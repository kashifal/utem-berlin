<template>
  <Html lang="'de-DE' : 'de-DE'">

  <Head>
    <Meta name="robots" content="noindex" />
    <!--        <Link rel="preload" href="/test.txt" as="script" />-->
    <!--        <Style type="text/css" :children="styleString" />-->
  </Head>

  </Html>

  <main>
    <globalsTopbar />
    <globalsNav @show-menu="showMenu = true" @show-coatingai-modal="showCoatingaiModal = true" />
    <globalsNav-mobile @hide-menu="showMenu = false" :show-menu="showMenu" class=" lg:hidden" />
    <globalsCoatingai-modal-dark @hide-coatingai-modal="showCoatingaiModal = false" :show-coatingai-modal="showCoatingaiModal" />
    <NuxtPage />

    <!-- HUD window -->
    <div class="sticky bottom-0 text-[11px] w-[220px] bg-red-100 px-2 flex">
      <div class="w-[95px]">
        x:{{ x }} y:{{ y }}
      </div>
      <!-- <div class="w-[105px]">
        w:{{ width }} h:{{ height }}
      </div> -->
      <div>
        <span class="font-bold">{{ $mq.current }}</span>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useMouse } from '@vueuse/core'
import { useMq } from "vue3-mq"
import { onMounted } from 'vue';
const $mq = useMq();

const { x, y } = useMouse()
/* const { width, height } = useWindowSize() */

onMounted(() => {
  (function (src, cb) {
    const s = document.createElement('script');
    s.setAttribute('src', src);
    s.onload = cb;
    (document.head || document.body).appendChild(s);
  })('https://ucarecdn.com/libs/blinkloader/3.x/blinkloader.min.js', function () {
    window.Blinkloader.optimize({
      "pubkey": "c304577ae1bc1f2a79d7",
      "responsive": true,
      "smartCompression": true,
      "retina": true,
      "webp": true,
      "fadeIn": true,
      "lazyload": true
    });
  })
})
</script>
<script>

export default {
  name: "App",
  data() {
    return {
      showMenu: false,
      showCoatingaiModal: false
    };
  },

  watch: {
    showMenu(val) {
      console.log(val);
    },
  },
};
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: opacity .5s;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}

.layout-enter-active,
.layout-leave-active {
  transition: opacity .5s;
}

.layout-enter,
.layout-leave-to {
  opacity: 0;
}

.slide-bottom-enter-active,
.slide-bottom-leave-active {
  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
}

.slide-bottom-enter,
.slide-bottom-leave-to {
  opacity: 0;
  transform: translate3d(0, 15px, 0);
}

.bounce-enter-active {
  transform-origin: top;
  animation: bounce-in 0.8s;
}

.bounce-leave-active {
  transform-origin: top;
  animation: bounce-out 0.5s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes bounce-out {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(0);
  }
}

a.nuxt-link-exact-active {
  color: #00c58e;
}
</style>
