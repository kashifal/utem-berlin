import { defineNuxtPlugin } from "#app"
import { Vue3Mq } from "vue3-mq"

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.use(Vue3Mq, {
		defaultBreakpoint: "small",
		breakpoints: {
			'xs': '0px',
			'small': '322px',
			'medium': '768px',
			'large': '1024px',
			'xl': '1280px',
			'xxl': '1536px'
		}
	})
})
