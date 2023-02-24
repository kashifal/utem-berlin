<script setup>

</script>
<template>
    <section class="h-[70vh] overflow-hidden" ref="main">
        <div class="ParallaxVideo">
            <video autoplay muted loop>
            <source src="http://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
            <source src="http://www.w3schools.com/html/mov_bbb.ogg" type="video/ogg">
            </video>
        </div>
           
    </section>
</template>

<style scoped>
    .ParallaxVideo{ 
        height: 70vh;
        padding-bottom: 50px;
        padding-top: 50px; 
    }
    .ParallaxVideo video{ 
        min-width: 100%;
        position: fixed;
        top:0;
        z-index: -999;
    }

</style>