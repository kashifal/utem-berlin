<template>
  <div>
    <div @click="handleClick(image)" class="max-w-[1550px] overflow-hidden mx-auto pt-20 md:pt-40 px-6 md:px-4">
      <div class="w-full h-auto overflow-hidden rounded">
        <nuxt-link to="~/assets/content-image-1.png">
          <img
            src="https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt
            class="w-full transition-all duration-1000 ease-out hover:ease-in hover:scale-105 margin-fleche"
          />
        </nuxt-link>
      </div>
    </div>
    <Child ref="child" />
  </div>
</template>
<script>
import { ref } from 'vue';
import Child from './Child.vue';

export default {
  name: 'Parent',
  components: {
    Child
  },
  setup() {
    const image = ref('~/assets/blog.jpeg');
    const childComponent = ref(null);

    function handleClick(image) {
      childComponent.value.showLightbox(image);
    }

    return {
      image,
      handleClick,
      childComponent
    }
  }
}
</script>