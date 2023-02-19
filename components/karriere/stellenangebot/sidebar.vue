<template>
  <!-- Sidebar -->
  <section class="w-full hidden bg-white lg:block">
    <div class="w-full h-[50px] border-b border-gray-400 cursor-pointer">
      <nuxt-link to="/stellenangebote" class="flex items-center space-x-2">
        <div class="pl-4 fill-amber-500 cursor-pointer">
          <svg width="1.7em" height="1.7em" viewBox="0 0 24 24">
            <path d="m5 13l4 4l-1.4 1.42L1.18 12L7.6 5.58L9 7l-4 4h16v2H5m16-7v2H11V6h10m0 10v2H11v-2h10Z"></path>
          </svg>
        </div>
        <div class="text-left font-bold text-[14px] leading-4 pl-2 py-4">
          <span  class="">zurück zur Übersicht</span>
        </div>
      </nuxt-link>
    </div>
    <div class="p-4">
      <!--        <h4 class="text font-bold mb-4">Navigation manual</h4>-->
      <div class=""></div>
      <div v-if="entityData" class="text-sm">JobID: {{ entityData.jobId }}</div>
      <h4 class="text font-bold mt-6 mb-5">Online-Bewerbung</h4>
      <div class="">
        <form @submit.prevent="submitForm">
          <div class="w-full">
            <div class="">
              <div class="text-sm">Vorname</div>
              <input type="text" placeholder="Bitte Vornamen eingeben" id="firstname" name="firstname" v-model="firstname"
                     class="mt-0 block w-full border border-gray-300 py-2 px-3 rounded focus:outline-none focus:ring-gray-900 focus:border-gray-900 text-[13px]"
              />
            </div>
            <div class="pt-4">
              <div class="text-sm">Nachname</div>
              <input type="text" placeholder="Bitte Nachnamen eingeben" id="lastname" name="lastname" v-model="lastname"
                     class="mt-0 block w-full border border-gray-300 py-2 px-3 rounded focus:outline-none focus:ring-gray-900 focus:border-gray-900 text-[13px]"
              />
            </div>
            <div class="pt-4">
              <div class="text-sm">Email</div>
              <input type="text" placeholder="Bitte Emailadresse eingeben" id="email" name="email" v-model="email"
                     class="mt-0 block w-full border border-gray-300 py-2 px-3 rounded focus:outline-none focus:ring-gray-900 focus:border-gray-900 text-[13px]"
              />
            </div>
            <div class="pt-4">
              <div class="text-sm">Mobilnummer</div>
              <input type="text" placeholder="Bitte ihre Mobilnummer eingeben" id="mobile" name="mobile" v-model="mobile"
                     class="mt-0 block w-full border border-gray-300 py-2 px-3 rounded focus:outline-none focus:ring-gray-900 focus:border-gray-900 text-[13px]"
              />
            </div>
            <div class="flex w-full">
              <fieldset class="mt-6">
                <legend class="text-base font-medium text-gray-900">Kommunikationstyp</legend>
                <p class="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
                <div class="mt-4 flex space-x-4">
                  <div class="flex items-center">
                    <input id="comemail" name="comtype" type="radio" value="email" v-model="comtype" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                    <label for="comemail" class="ml-3">
                      <span class="block text-sm font-medium text-gray-700">email</span>
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input id="comsms" name="comtype" type="radio" value="sms" v-model="comtype" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                    <label for="comsms" class="ml-3">
                      <span class="block text-sm font-medium text-gray-700">sms</span>
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
          <div class="pt-4">
            <div class="">
              <button class="bg-amber-400 w-full hover:bg-amber-600 p-4 rounded mt-4" type="submit">Submit</button>
            </div>
          </div>


        </form>
      </div>
      <p class="text font-bold mt-16 mb-5 leading-tight">
        Buchen sie direkt einen Kennenlerntermin für ihr Projekt!
      </p>
      <div class="flex space-x-4 items-center mt-2 fill-gray-600">
        <img class="w-20 object-cover object-center mt-3" src="/img/karriere/sidebar_sauer_01.jpg" alt="" />

        <div>
          <p class="text-[12px] font-semibold mt-3 leading-tight">
            Max Personal<br>
            Personalteam<br>
          </p>
          <div class="text-[12px] font-normal leading-3 py-2">
            Managing Director TriboCoating
          </div>
        </div>
      </div>
      <p class="text font-semibold mt-8 leading-tight">
        Wählen sie ihren Termin
      </p>
      <img class="w-[90%] object-cover object-center mt-3" src="/img/cop/sidebar_schroeer_calendly_01.png" alt="" />
    </div>
  </section>
</template>

<script>
const FORMSPARK_ACTION_URL = "https://submit-form.com/XLOW3Wue";

export default {
  props: ["entityData"],
  data() {
    return {
      message: "",
    };
  },
  methods: {
    async submitForm() {
      await fetch(FORMSPARK_ACTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          jobId: this.entityData.jobId,
          teaserTitle: this.entityData.teaserTitle,
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          mobile: this.mobile,
          comtype: this.comtype
        }),
      });
      alert("Form submitted");
    },
  },
};
</script>
<style lang="scss">
.double {

  transform: scale(1.4);
  -ms-transform: scale(1.4);
  -webkit-transform: scale(1.4);
  -o-transform: scale(1.4);
  -moz-transform: scale(1.4);
  transform-origin: 0 0;
  -ms-transform-origin: 0 0;
  -webkit-transform-origin: 0 0;
  -o-transform-origin: 0 0;
  -moz-transform-origin: 0 0;
}
</style>
