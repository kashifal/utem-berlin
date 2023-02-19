<template>
    <div class="h-48 title3">
        <span class="font-extrabold text-7xl pb-8">NUXT </span>
        <span class="font-extrabold text-7xl pb-8">GSAP</span>
        <br>
        <div class="flex col">
            <div class="h-16 w-[460px] overflow-hidden" @mouseover="setRotationOnEnter1" @mouseleave="setRotationOnLeave1">
                <button class="title2 font-extrabold text-7xl">CLICK ME</button>
                <div class="title4 font-extrabold text-7xl text-gray-400">CLICK AGAIN</div>

            </div>
            <div class="h-16 w-[460px] overflow-hidden" @mouseover="setRotationOnEnter2" @mouseleave="setRotationOnLeave2">
            <button class="title2 font-extrabold text-7xl">CLICK ME</button>
            <div class="title4 font-extrabold text-7xl text-gray-400">CLICK AGAIN</div>
        </div>
        </div>
        <div class="bar h-1 bg-amber-400"></div>
    </div>
</template>

<script setup>
import { gsap  } from "gsap"
</script>

<script>
export default {
    mounted() {
        this.setRotationOnLoad()
    },
    methods: {
        setRotationOnEnter1() {
            this.gsap.to('.title2', { y: -70, duration: .3 })
            this.gsap.to('.title4', { y: -75, duration: .3 })
        },
        setRotationOnLeave1() {
            this.gsap.to('.title2', { y: 0, duration: .3 })
            this.gsap.to('.title4', { y: 0, duration: .3 })
        },
        setRotationOnLoad() {
            this.gsap.fromTo('.bar', {width: 0}, {width: 340, duration: 1,delay: 2});
        }
    }
}
</script>

