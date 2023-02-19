import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({

    components: {
        global: true,
        dirs: ['~/components']
    },
    modules: [
        "@nuxtjs/tailwindcss",
        '@nuxtjs/i18n',
    ],
    buildModules: [
        ["@pinia/nuxt", { disableVuex: true }],
        "@vueuse/nuxt"
    ],
    imports: {},
    css: [
        '@/assets/css/tailwind.css'
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/scss/_mixins.scss";'
                }
            }
        }
    },
    i18n: {
        // add `vueI18n` option to `@nuxtjs/i18n` module options
        strategy: "prefix_except_default",
        defaultLocale: 'de',   // default locale of your project for Nuxt pages and routings
        langDir: "locales/",
        locales: [{
            code: 'en',
            file: 'en.json'
        },
        {
            code: 'de',
            file: 'de.json'
        }]
    },
    runtimeConfig: {
        public: {
            API_URL_WEBINAR: process.env.API_URL_WEBINAR || "https://eu-west-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/stitch-vueadmin-ire-kgwnt/service/http_hc_webinar/incoming_webhook/",
            API_URL: process.env.API_URL || "https://eu-west-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/stitch-vueadmin-ire-kgwnt/service/http_heo_coating/incoming_webhook/",
            PROJECT_MODE: process.env.PROJECT_MODE || "dev"
        }
    }
})
