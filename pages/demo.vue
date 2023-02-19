<template>
  <div class="w-screen h-screen bg-gray-400">
    <!-- logo -->
    <div class="pt-36 pl-24">

      <h1>
        Hello scss mixin test ...
      </h1>

      <div>Window: {{ width }}, {{ height }}</div><br>
      <div>pos: {{ x }}, {{ y }}</div><br>
      $mq: {{ $mq.current }}
      <br />
      <!--      imageUrl: {{ imageUrl }}-->
      <br />
      <!--      <div class="w-full">
        <img :src="imageUrl" style="height:80%;" />
      </div>-->

      <br />

      <MqResponsive landscape target="md">
        <div>This is an MD Screen landscape</div>
      </MqResponsive>
      <MqResponsive portrait target="md">
        <div>This is an MD Screen portrait</div>
      </MqResponsive>
      <br />
      <!--      <pre>
          Full Object: {{ $mq }}
      </pre>-->

      <br /> <br />
      <coatingaiPills />



    </div>

  </div>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { MqResponsive, useMq } from "vue3-mq"
import { useMouse } from '@vueuse/core'

const $mq = useMq();

const imageUrl = computed(() => {
  switch ($mq.current) {
    case 'xxl':
      return `https://res.cloudinary.com/utomberlin/image/upload/c_fill,g_north,h_800,w_1250/v1650889482/hc/customonepager/iStock-649754074-2_dzw5yj.jpg`
    case 'xl':
      return `https://res.cloudinary.com/utomberlin/image/upload/c_fill,g_north,h_700,w_1100/v1650889482/hc/customonepager/iStock-649754074-2_dzw5yj.jpg`
    case 'large':
      return `https://res.cloudinary.com/utomberlin/image/upload/c_fill,g_north,h_600,w_950/v1650889482/hc/customonepager/iStock-649754074-2_dzw5yj.jpg`
    case 'medium':
      return `https://res.cloudinary.com/utomberlin/image/upload/c_fill,g_north,h_800,w_500/v1650889482/hc/customonepager/iStock-649754074-2_dzw5yj.jpg`
    case 'small':
      return `https://res.cloudinary.com/utomberlin/image/upload/c_fill,g_north,h_400,w_650/v1650889482/hc/customonepager/iStock-649754074-2_dzw5yj.jpg`
    default:
      return `https://res.cloudinary.com/utomberlin/image/upload/c_fill,g_north,h_300,w_500/v1650889482/hc/customonepager/iStock-649754074-2_dzw5yj.jpg`
  }
})

const { width, height } = useWindowSize()
const { x, y } = useMouse()
</script>

<style lang="scss" scoped>
h1 {
  font-size: 56px;
  color: yellow;
  font-weight: bold;

  @include extrasmall {
    font-size: 18px;
    color: orange;
  }

  @include small {
    font-size: 24px;
    color: lightblue;
  }

  @include medium {
    font-size: 36px;
    color: deepskyblue;
  }

  @include large {
    font-size: 36px;
    color: greenyellow;
  }

  @include xlarge {
    font-size: 36px;
    color: green;
  }

  @include xxlarge {
    font-size: 48px;
    color: red;
  }
}
</style>
