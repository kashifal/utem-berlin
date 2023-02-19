<template>
  <div ref="menuRef"
    class="z-50 fixed bg-white top-0 left-0 w-full h-screen bg-grey-200 transition-all duration-500 ease-in-out transform -translate-y-full">
    <!-- Menu Close Button -->
    <span class="absolute top-0 left-4 text-4xl ml-3 mt-2 text-black cursor-pointer" @click="$emit('hide-menu')">
      <span>&times;</span>
    </span>

    <nav class="w-full h-full">
      <div class="text-black">
        <nuxt-link to="/" class="py-4 pt-20 pl-5 text-red-500 text-lg font-bold block">
          LOGO
        </nuxt-link>

        <div class="w-full self-stretch overflow-y-auto overflow-x-hidden mt-0" style="height: calc(100vh - 175px)">
          <!-- Menu -->
          <Transition :name="animate && 'menu'">
            <div v-if="!subMenuShow && !menuItem" class="w-full">
              <div v-for="(el, k) in menu" :key="k" class="w-full">
                <!-- Navigation Menu -->
                <ul class="bg-white mt-0">
                  <li v-for="(item, key) in el" :key="key" class="relative px-0">
                    <NuxtLink
                      class="inline-flex py-4 items-center w-full text-gray-800 text-4xl font-InterExtraBold transition-colors duration-150 hover:text-gray-500"
                      :to="item.url" @click.native="onMenuItemClick(k, key, !item.subMenu.length)">
                      <span v-if="item.image">
                        <img :src="item.image" alt="" class="w-5 h-5 rounded" />
                      </span>
                      <span class=" ml-4">{{ item.text }}</span>
                      <span v-if="item.subMenu?.length" class="pl-4">+
                      </span>
                    </NuxtLink>
                    <!-- divider -->
                    <!--                    <hr class="boder-b border-seperatorSidebar  ml-8" />-->
                  </li>
                </ul>
              </div>
            </div>
          </Transition>

          <!-- Sub Menu -->
          <Transition :name="animate && 'sub-menu'">
            <ul v-if="menuItem && subMenuShow"
              class="p-2 pb-0 mt-4 space-y-2 text-black text-4xl font-InterExtraBold bg-white" aria-label="submenu">
              <li class="relative px-2">
                <button
                  class=" w-full focus:outline-none flex text-black text-4xl font-extrabold transition duration-150 hover:text-white "
                  @click="menuItem = ''; subMenuShow = '';">
                  <div
                    class="inline-flex items-center w-full text-sm font-normal  transition duration-150 hover:text-gray-400 dark:hover:text-gray-200">
                    <span class="mr-2 inline-block">
                      <svg width="1.6em" height="1.6em" viewBox="0 0 24 24"><path d="M10 22L0 12L10 2l1.775 1.775L3.55 12l8.225 8.225Z"></path></svg>
                    </span>
                    <span class="ml-1 text-black text-2xl font-extrabold">back</span>
                  </div>
                </button>
              </li>
              <li class="relative px-2" v-for="(item, i) in menu[menuItem][subMenuShow].subMenu" :key="i">
                <nuxt-link
                  class="inline-flex items-center w-full text-black text-2xl font-extrabold transition duration-150 hover:text-gray-400 dark:hover:text-gray-200"
                  :to="item.url" @click.native="onMenuItemClick(i, key, true)">
                  <span class=" ml-4">{{ item.text }}</span>
                </nuxt-link>
                <!--                <hr class="boder-b border-seperatorSidebar  ml-8" />-->
              </li>
            </ul>
          </Transition>
        </div>

        <div class="px-6 mt-0">
          <button
            class="flex items-center place-content-center w-full px-4 py-2 text-sm font-normal leading-5 text-sky-600 hover:bg-sky-500 hover:text-white transition-colors duration-150 border border-sky-500 hover:border-white rounded-lg active:bg-purple-600 hover:bg-highlightSidebar focus:outline-none focus:shadow-outline-purple">
            <span class="md:mr-2" aria-hidden="true">?</span>
            <span class=""> Social Media </span>
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
const props = defineProps(["showMenu"])
const { showMenu } = toRefs(props)

const animate = true
const menuItem = ref("")
const subMenuShow = ref("")
const menu = {
  main: {
    dashboard: {
      text: "Home",
      url: "/",
      image: "",
      subMenu: [],
    },
    sampleProjects: {
      text: "Unternehmen",
      url: "/unternehmen",
      image: "",
      subMenu: []
    },
    helper: {
      text: "Serienbeschichtung",
      url: "#!",
      image: "",
      subMenu: [
        {
          text: "functional",
          url: "/functional",
          image: ""
        },
        {
          text: "energy",
          url: "/energie",
          image: ""
        },
        {
          text: "cop dec",
          url: "/1/uceva",
          image: ""
        },
        {
          text: "cop fun",
          url: "/1/anewe",
          image: ""
        },
        {
          text: "cop arc",
          url: "/1/honir",
          image: ""
        },
        {
          text: "cop mob",
          url: "/1/cahif",
          image: ""
        },
      ],
    },
    webCms: {
      text: "Blog",
      url: "/unternehmen",
      image: "",
      subMenu: [],
    },
    login: {
      text: "Karriere",
      url: "/karriere",
      image: "",
      subMenu: [],
    },
    kontakt: {
      text: "Kontakt",
      url: "/kontakt",
      image: "",
      subMenu: [],
    },
    coatingai: {
      text: "coatingai",
      url: "/coatingai-modal",
      image: "",
      subMenu: [],
    }
  }
}


const title = computed(() => {
  return (k) => {
    if (k === "main") {
      return "Main Navigation"
    }
    return "Core Features"
  }
})

const emit = defineEmits(['hide-menu'])
const onMenuItemClick = (k, key, hideMenu = false) => {
  console.log(k, key);

  if (hideMenu) {
    emit('hide-menu')
  }

  if (menu[k][key].subMenu?.length) {
    menuItem.value = k;
    subMenuShow.value = key;
  } else {
    subMenuShow.value = "";
    menuItem.value = "";
  }

  if (hideMenu) {
    emit('hide-menu')
  }
}

const menuRef = ref(null)

watch(showMenu, (val) => {
  if (val) {
    menuRef.value.style.transform = "translateY(0)";
  } else {
    menuRef.value.style.transform = "translateY(-100%)";
  }
})
</script>

<style scoped>
.menu-enter-active {
  transition: all 1.0s;
  opacity: 1;
  max-height: 0;
  width: 100%;
  transform: translateX(0);
}

.menu-enter-from {
  opacity: 0;
  max-height: 0;
  transform: translateX(-100%);
}

.menu-leave-active {
  transition: all .7s;
  opacity: 1;
  width: 100%;
  transform: translateX(0);
  max-height: auto;
}

.menu-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  max-height: 0;
}

/* Sub Menu Animation */
.sub-menu-enter-active {
  transition: all .7s;
  opacity: 1;
  width: 100%;
  max-height: 0;
  transform: translateX(0);
}

.sub-menu-enter-from {
  opacity: 0;
  max-height: 0;
  transform: translateX(100%);
}

.sub-menu-leave-active {
  transition: all 0.25s;
  opacity: 1;
  width: 100%;
  max-height: auto;
  transform: translateX(0);
}

.sub-menu-leave-to {
  opacity: 0;
  transform: translateX(100%);
  max-height: 0;
}

</style>
