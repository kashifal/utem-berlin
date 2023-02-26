<template>
  <!-- navigation -->
  <div class="fixed z-50 top-0 w-full bg-[#e03d24]">

    <!-- navigation desktop -->
    <div class="nav-menu z-50 flex justify-start items-center px-10 md:px-[40px] xl:px-[130px]">
      <!-- logo -->
      <nuxt-link to="/" class="logo cursor-pointer w-20 lg:w-64">


        <svg version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             viewBox="0 0 305.15 69.37" style="enable-background:new 0 0 305.15 69.37;" xml:space="preserve">
                    <g>
                      <path d="M41.86,0v53.96h-12.8v-3.55c-2.47,2.93-6.01,4.62-10.95,4.62C7.78,55.04,0,46.25,0,34.69c0-11.56,7.78-20.35,18.11-20.35
                        c4.93,0,8.48,1.7,10.95,4.62V0H41.86z M29.06,34.69c0-5.01-3.31-8.4-8.09-8.4s-8.09,3.39-8.09,8.4c0,5.01,3.31,8.4,8.09,8.4
                        S29.06,39.7,29.06,34.69z"/>
                      <path d="M73.39,53.96l-6.71-9.48l-6.71,9.48H45.56L59.51,34.3L46.1,15.42h14.41l6.17,8.71l6.17-8.71h14.49L73.93,34.3l13.95,19.66
                        H73.39z"/>
                      <path d="M133.44,34.69c0,11.56-7.78,20.35-18.11,20.35c-4.93,0-8.48-1.7-10.95-4.62v18.96h-12.8V15.42h12.8v3.55
                        c2.47-2.93,6.01-4.62,10.95-4.62C125.65,14.34,133.44,23.12,133.44,34.69z M120.57,34.69c0-5.01-3.31-8.4-8.09-8.4
                        c-4.78,0-8.09,3.39-8.09,8.4c0,5.01,3.31,8.4,8.09,8.4C117.25,43.09,120.57,39.7,120.57,34.69z"/>
                      <path d="M176.79,36.7c0,10.22-8.01,18.02-17.88,18.02c-6.7,0-12.01-3.45-14.84-8.77v8.01h-3.45V5.63h3.45v21.82
                        c2.83-5.32,8.15-8.77,14.84-8.77C168.78,18.68,176.79,26.48,176.79,36.7z M173.33,36.7c0-8.21-6.42-14.71-14.64-14.71
                        c-8.22,0-14.64,6.49-14.64,14.71c0,8.22,6.42,14.71,14.64,14.71C166.91,51.4,173.33,44.91,173.33,36.7z"/>
                      <path d="M217.73,36.83c0,0.55-0.07,1.11-0.07,1.66h-31.28c0.83,7.8,6.77,12.91,14.64,12.91c5.66,0,9.94-2.62,11.94-6.28l3.04,1.8
                        c-2.83,4.69-8.22,7.8-15.05,7.8c-10.63,0-18.16-7.6-18.16-18.02c0-10.15,7.32-18.02,17.88-18.02
                        C211.17,18.68,217.73,27.38,217.73,36.83z M186.39,35.11h27.75c-0.76-8.42-6.7-13.12-13.46-13.12
                        C192.81,21.99,187.08,27.44,186.39,35.11z"/>
                      <path d="M240.8,18.95v3.31c-5.94,0-11.53,3.66-11.53,12.5v19.19h-3.45V19.44h3.45v6.77C231.62,20.75,236.1,18.95,240.8,18.95z"/>
                      <path d="M247.77,3.56h3.45v50.4h-3.45V3.56z"/>
                      <path d="M260.82,8.32c0-1.45,1.24-2.69,2.76-2.69c1.52,0,2.76,1.24,2.76,2.69c0,1.52-1.24,2.76-2.76,2.76
                        C262.07,11.08,260.82,9.84,260.82,8.32z M261.86,19.44h3.45v34.52h-3.45V19.44z"/>
                      <path d="M305.15,32.48v21.47h-3.52V32.48c0-6.35-3.66-10.49-10.15-10.49c-6.77,0-12.08,4.42-12.08,13.74v18.23h-3.45V19.44h3.45V26
                        c2.62-5.11,7.04-7.32,12.36-7.32C299.97,18.68,305.15,24.13,305.15,32.48z"/>
                    </g>
              </svg>
      </nuxt-link>
      <!-- navigation desktop-->
      <ul class="nav lg:flex hidden justify-start items-center uppercase xl:ml-0 font-bold leading cursor-pointer">
        <!--                <li class="mr-8 xl:p-2">
                            <a href="/" class="focus:outline-none hover:text-gray-300">HOME</a>
                        </li>-->
        <li class="hoverable mr-8 xl:p-2">
          <nuxt-link to="/unternehmen" class="focus:outline-none hover:text-gray-300">ABOUT</nuxt-link>
          <div role="toggle" class="mega-menu1 p-6 mb-16 sm:mb-0 bg-white w-1/3 ">
            <div class="flex flex-wrap justify-between mx-2">
              <ul class="px-4 w-full sm:w-1/2 lg:w-1/2 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
                <nuxt-link to="/unternehmen">
                  <h3 class="font-bold text-sm text-gray-600 text-bold">UNTERNEHMEN</h3>
                </nuxt-link>
                <li>
                  <nuxt-link to="/unternehmen" class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">Profil</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/innovationen" class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">Innovationen</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/zertifizierung" class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">Zertifizierungen</nuxt-link>
                </li>
              </ul>
              <ul class="px-4 sm:w-1/2 lg:w-1/2 border-gray-600 pb-6 pt-6 lg:pt-3">
                <h3 class="font-bold text-sm text-gray-600 text-bold mb-2">Verfahren</h3>
                <li>
                  <nuxt-link to="/landingPage"
                             class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">Landing Page</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"
                             class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">link 2</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"
                             class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">link 3</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#"
                             class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">link 4</nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <!-- mega menu dropdown-->
        <li class="hoverable mr-8 xl:p-2">
          <nuxt-link to="#" class="focus:outline-none hover:text-gray-300">BLOG</nuxt-link>
          <div role="toggle" class="mega-menu p-6 mb-16 sm:mb-0 bg-white w-full ">
            <div class="flex flex-wrap justify-between mx-2">
              <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
                <h3 class="font-bold text-sm text-gray-600 text-bold">Sektoren - Unsere Geschäftsbereiche</h3>
                <li>
                  <nuxt-link to="/decorative" class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">Decorative</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/functional" class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">Functional</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/mobility" class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">Mobility</nuxt-link>
                </li>
                <li>
                  <nuxt-link href="/architecture" class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">Architecture</nuxt-link>
                </li>
              </ul>
              <ul class="px-4 sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                <h3 class="font-bold text-sm text-gray-600 text-bold mb-2">Verfahren</h3>
                <li>
                  <nuxt-link to="/gleitlackbeschichtung"
                             class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">Gleitlackbeschichtung</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/korrosionsschutz"
                             class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">Korrosionsschutz</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/pulverbeschichtung-dekorativ"
                             class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">Pulverbeschichtung dekorativ</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/pulverbeschichtung-funktional"
                             class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">Pulverbeschichtung funktional</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/pulverbeschichtung-architektur"
                             class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">Pulverbeschichtung architektur</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/nasslackbeschichtung"
                             class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">Nasslackbeschichtung</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/ktl-beschichtung"
                             class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">KTL-Beschichtung</nuxt-link>
                </li>
              </ul>
              <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                <h3 class="font-bold text-sm text-gray-600 text-bold mb-2">Branchen</h3>
                <li>
                  <nuxt-link to="/emobility" class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">eMobility</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/architektur" class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">architecture</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/energie" class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">energy</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/medizin" class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">medical
                    / life science</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/lebensmittel" class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">food</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/ace" class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">ace</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/maschinenbau" class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">Maschinenbau</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="gebrauchswaren" class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">Gebrauchswaren</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/armaturen" class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">Armaturen</nuxt-link>
                </li>
              </ul>
              <ul
                class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-b-0 md:border-b-0 pb-6 pt-6 lg:pt-3">
                <h3 class="font-bold text-sm text-gray-600">Tools</h3>
                <li>
                  <nuxt-link to="/demo" class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">demo</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/demo2" class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">demo2</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/1/uceva" class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">customOnePager DE</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/1/anewe" class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">customOnePager FU</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/1/cahif" class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">customOnePager MO</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/1/honir" class="block p-1 hover:bg-teal-900 text-sm text-gray-600 hover:text-white">customOnePager AR</nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li class="mr-8 xl:p-2">
          <nuxt-link to="/karriere" class="focus:outline-none hover:text-white">DXP DEVELOPMENT</nuxt-link>
        </li>
        <li class="mr-8 xl:p-2">
          <nuxt-link to="/kontakt" class="focus:outline-none hover:text-white">{{ $t("globalNav.kontakt") }}</nuxt-link>
        </li>
        <li class="lang xl:mr-8 xl:p-2">
          <button class="font-bold leading text-sm focus:outline-none hover:text-gray-300"
                  :class="{ 'text-black': $i18n.locale == 'de' }" @click="$i18n.locale = 'de'">de</button>
          <span> / </span>
          <button class="font-bold leading text-sm focus:outline-none hover:text-gray-300"
                  :class="{ 'text-yellow-400': $i18n.locale == 'en' }" @click="$i18n.locale = 'en'"> en</button>
        </li>
      </ul>
      <div @click="$emit('show-coatingai-modal')" class="coatingai-but w-40 lowercase pl-4 large:ml-8">
        <a href="javascript:void(0)" class="relative z-10">coating twin</a>
      </div>
      <div class="pt-6">
        <!-- Mobile Toggle Menu Icon -->
        <div class="sm:block lg:hidden pl-8" @click="$emit('show-menu')">
          <div ref="menuIcon" class="inline-block cursor-pointer relative">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </div>

        </div>
      </div>

    </div>
    <div class="border-b-2 border-black w-full w-[70%] mx-auto"></div>
  </div>
</template>

<script setup>
import { gsap  } from "gsap"
import { ScrollTrigger } from "~/assets/js/gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

ScrollTrigger.create({
  start: 'top -55',
  end: 99999,
  toggleClass: { className: 'nav-menu--scrolled', targets: '.nav-menu' }
})

</script>

<style lang="scss">


/*------------------------------------------------------------------
### nav & nav --scrolled
-------------------------------------------------------------------**/
.nav-menu {
  position: relative;
  padding-top: 30px;
  height: 160px;
  color: #000;
  font-size: 1rem;
  transition: ease 0.5s;

  @media (max-width: 450px) {
    margin-top: 30px;
  }

  .logo svg{
    margin-top: 0px;
    width: 200px;
    transition: ease 0.4s;

    .st0 {fill:#C20012;}
    .st1 {fill:#fff;}
  }

  .lang {
    color: #fff;
    transition: ease 0.3s;
  }

  .coatingai-but a {
    color: #000;
    transition: ease 0.3s;
  }

  &--scrolled {
    padding-top: 3px;
    height: 50px;
    background: #e03d24;

    .logo svg{
      margin-top: 0px;
      width: 160px;

    }
    .lang {
      color: #000;
    }
    .coatingai-but a{
      color: #000;
    }
  }
}

/*------------------------------------------------------------------
### set megamenu to li
-------------------------------------------------------------------**/
.hoverable {
  position: static;
}

.hoverable>a:after {
  content: "\25BC";
  font-size: 10px;
  padding-left: 6px;
  position: relative;
  top: -1px;
}

.hoverable:hover .mega-menu {
  display: block;
}
.hoverable:hover .mega-menu1 {
  display: block;
}

/*------------------------------------------------------------------
### mega menu
-------------------------------------------------------------------**/

.mega-menu {
  display: none;
  left: 0;
  position: absolute;
  text-align: left;
}
.mega-menu1 {
  display: none;
  left: 50;
  position: absolute;
  text-align: left;
}

/*------------------------------------------------------------------
### coatingai button
-------------------------------------------------------------------**/
.coatingai-but {
  display: block;

}

.coatingai-but a {
  margin-top: 0px;
  margin-left: 50px;
  padding-top: -3px;
  text-decoration: none;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.05em;
  line-height: 20px;
  display: block;
  position: relative;


}

.coatingai-but a::before {
  content: "";

  display: block;
  position: absolute;
  left: -14px;
  z-index: -1;
  width: 34px;
  height: 34px;

  background: #fff;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  border-radius: 50px;
  -webkit-transition: all .4s ease;
  -o-transition: all .4s ease;
  transition: all .4s ease;
}

.coatingai-but a::after {
  content: attr(data-hover);
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 0%;
  overflow: hidden;
  white-space: nowrap;
  color: #000;
  -webkit-transition: width .4s ease;
  -o-transition: width .4s ease;
  transition: width .4s ease;

}

.coatingai-but a:hover::after {
  width: 100%;
}

.coatingai-but a:hover::before {
  width: calc(100% + 30px);

}

.site-header.light .coatingai-but a {
  color: hsla(0, 0%, 100%, .4);

}

.site-header.light .coatingai-but a::before {
  background: #2b2e31
}

.site-header.light .coatingai-but a::after {
  color: #000000;
}

/*------------------------------------------------------------------
### toggle mobile menu
-------------------------------------------------------------------**/

.menu-toggle {
  height: 25px;
  cursor: pointer;

}

.menu-toggle.hidden {
  /*display: none;*/
}

.toggle-line {
  color: #fff;
  width: 0px;
  height: 1px;
  display: block;
  background: #191b1d;
  -webkit-transition: all .3s cubic-bezier(.475, .425, 0, .995);
  -o-transition: all .3s cubic-bezier(.475, .425, 0, .995);
  transition: all .3s cubic-bezier(.475, .425, 0, .995);
  left: 0
}

span.toggle-line:nth-child(2) {
  margin-top: 10px;
  -webkit-transition-delay: .1s;
  -o-transition-delay: .1s;
  transition-delay: .1s
}

span.toggle-line:nth-child(1) {
  margin-top: 5px;
}

body.loading span.toggle-line {
  -webkit-transition: none !important;
  -o-transition: none !important;
  transition: none !important
}

.menu-toggle.is-active .toggle-line:nth-child(1) {
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);

}

.menu-toggle.is-active .toggle-line:nth-child(2) {
  -webkit-transform: rotate(-135deg);
  -ms-transform: rotate(-135deg);
  transform: rotate(-135deg);
  margin-top: 0;

}

.menu-toggle.is-active .toggle-line {
  width: 35px
}
</style>
