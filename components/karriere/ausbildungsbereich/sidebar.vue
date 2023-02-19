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
            Stephanie Sauer<br>
            Personalmanagement (B.A.)<br>
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
const FORMSPARK_ACTION_URL = "https://submit-form.com/LAjqxnNK";

export default {
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
          jobid: "AA7636",
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          mobile: this.mobile,
          message: this.message
        }),
      });
      alert("Form submitted");
    },
  },
};
</script>


<!--<template>
    &lt;!&ndash; Sidebar &ndash;&gt;
    <section class="p-3 hidden lg:inline">
        <div class="flex items-center space-x-2">
            <div class="leading-4">
                <div class="text-left pl-0">
                    <span class="font-bold text">Karriere page test </span>
                </div>
            </div>
        </div>

        <h4 class="text font-bold mt-6 mb-5">Online-Bewerbung</h4>
        <div class="">
          <form @submit.prevent="submitForm">
            <div class="w-full">
              <div class="">
                <div class="text-sm">Vorname</div>
                <input type="text" placeholder="given name" id="firstname" name="firstname" v-model="firstname"
                       class="mt-0 block w-full border border-gray-300 py-2 px-3 rounded focus:outline-none focus:ring-gray-900 focus:border-gray-900 text-[13px]"
                />
              </div>
              <div class="pt-4">
                <div class="text-sm">Nachname</div>
                <input type="text" placeholder="last name" id="lastname" name="lastname" v-model="lastname"
                       class="mt-0 block w-full border border-gray-300 py-2 px-3 rounded focus:outline-none focus:ring-gray-900 focus:border-gray-900 text-[13px]"
                />
              </div>
              <div class="pt-4">
                <div class="text-sm">Email</div>
                <input type="text" placeholder="email" id="email" name="email" v-model="email"
                       class="mt-0 block w-full border border-gray-300 py-2 px-3 rounded focus:outline-none focus:ring-gray-900 focus:border-gray-900 text-[13px]"
                />
              </div>
              <div class="pt-4">
                <div class="text-sm">Mobilnummer</div>
                <input type="text" placeholder="mobile" id="mobile" name="mobile" v-model="mobile"
                       class="mt-0 block w-full border border-gray-300 py-2 px-3 rounded focus:outline-none focus:ring-gray-900 focus:border-gray-900 text-[13px]"
                />
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
            Buchen sie direkt einen Termin für ihr Projekt!
        </p>
        <div class="flex space-x-4 items-center mt-2 fill-gray-600">
            <img class="w-20 object-cover object-center mt-3" src="/img/karriere/sidebar_sauer_01.jpg"
                alt="" />
            <div>
                <p class="text-[12px] font-semibold mt-3 leading-tight">
                    Stephanie Sauer<br>
                    Personalmanagement (B.A.)<br>
                </p>
                <div class="text-[12px] font-normal leading-3 py-2">
                    Managing Director TriboCoating
                </div>
            </div>
        </div>

        <p class="text font-semibold mt-8 leading-tight">
            Wählen sie ihren Termin
        </p>
        <img class="w-[90%] object-cover object-center mt-3" src="/img/cop/sidebar_schroeer_calendly_01.png"
            alt="" />

    </section>
</template>


<script>
const FORMSPARK_ACTION_URL = "https://submit-form.com/XLOW3Wue";

export default {
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
          jobid: "AA7636",
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          mobile: this.mobile,
          message: this.message
        }),
      });
      alert("Form submitted");
    },
  },
};
</script>-->
