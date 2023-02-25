
<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';

</script>


<template>
       <main class="min-h-screen">
        <div class="relative z-10"> 
            <landingPageNav />
            <landingPageHero />
            <landingPageVideoNew />
            <landingPageMyservice />
            <landingPageLatestWork />
            <landingPageMyApproach />
            <landingPageMyAwards />
            <landingPageCall />
            <landingPageQuote />
        </div>
      
        <landingPageFooter />
    </main>
</template>