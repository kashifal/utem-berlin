<template>
    <section id="bigTitles" class="pl-24 pt-48 bg-amber-600 min-h-screen">
      <div data-height="170" ref="linkedTextRef" class="linked-text">
    <h1 class="big-title text-white">
      Hello,
      <br>
      <a data-target="About Us" href="about.html">creative agency</a>
      <br>
      <a data-target="Contact Us" href="contact.html">in the Istanbul</a>
      <br>
      Again,
      <br>
      <a data-target="about me" href="about.html">eastern part</a>
    </h1>
  </div>
    </section>
</template>

<script setup>
import { gsap } from "~/assets/js/gsap"
import { SplitText } from "~/assets/js/gsap/SplitText"
gsap.registerPlugin(SplitText)

const linkedTextRef = ref(null)

onMounted(() => {

  console.log(linkedTextRef)

  new SplitText(linkedTextRef.value.firstChild, {
    type: 'lines, words',
    linesClass: 'linked-line',
    wordsClass: 'linked-word'
  })

  gsap.set('.linked-line', {
    height: linkedTextRef.value.dataset.height,
  })

  gsap.set(linkedTextRef.value.firstChild, {
    lineHeight: '170px'
  })

  let links = gsap.utils.toArray("a", linkedTextRef.value.firstChild);
  console.log(links)

  links.forEach(link => {
    console.log(link)
    const targetTitle = link.dataset.target
    console.log('targetTitle', targetTitle)

    link.innerHTML = link.innerHTML + '<span style="display: block;" class="link-target"><span>' + targetTitle + '</span></span>'

    link.addEventListener('mouseenter', e => {
      console.log('mouseenter', e)

      const linkWords = gsap.utils.toArray("div", link);
      const linkSpan = gsap.utils.toArray(".link-target", link);

      gsap.to(linkWords, {
        y: '-105%',
        ease: 'power2.inOut',
      });

      gsap.to(linkSpan, {
        y: '-100%',
        ease: 'power2.inOut',
      })
    });

    link.addEventListener('mouseleave', e => {
      console.log('mouseleave', e)

      const linkWords = gsap.utils.toArray("div", link);
      const linkSpan = gsap.utils.toArray(".link-target", link);

      gsap.to(linkWords, {
        y: '0%'
      });

      gsap.to(linkSpan, {
        y: '0%'
      })

    });
  });

  let words = gsap.utils.toArray(".linked-word", linkedTextRef.value.firstChild);

  gsap.fromTo(words, {
    y: '100%'
  }, {
    y: '0%',
    ease: 'power2.Out',
    duration: 1,
    delay: .7,
    onComplete: function () {
      linkedTextRef.value.classList.add('loaded')
    }
  })
})

</script>

<style lang="scss" >
h1.big-title {
  font-size: 120px;
  font-style: normal;
  font-weight: 700;
  margin-left: -7px;
  margin-top: 20px;
  margin-bottom: 69px;
  padding-right: 10px;
}

/*--------------------------------------------------
## Linked Text
---------------------------------------------------*/

.linked-text {
  display: block;
  pointer-events: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.linked-text.loaded {
  pointer-events: all
}

.linked-text a {
  text-decoration: none;
  color: #fff;
  position: relative;

}

.linked-text a>div {
  background-repeat: repeat;
  -webkit-background-clip: text;
  background-repeat: repeat;
  -webkit-background-clip: text;
  padding-right: 4px;
  margin-right: -4px;

}

.linked-text a::before {
  content: "";
  position: absolute;
  width: 0%;
  height: 12px;
  background: #fff;
  bottom: 0;
  left: 0;
  border-top: 2px solid #fff;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  z-index: 1;
  -webkit-transition: all .7s ease;
  -o-transition: all .7s ease;
  transition: all .7s ease
}

.linked-text.loaded a:hover::before {
  width: 0%
}

.linked-text.loaded a::before {
  width: 100%;
}

.linked-line {
  cursor: pointer;
  overflow: hidden;
  padding-right: 5px;
  height: 170px;

}

.link-target {
  display: block;
  color: rgba(25, 27, 29, .99)
}

body.dark .linked-text a::before,
.linked-text.light a::before {
  background: #fff;
  border-top: 2px solid #fff
}

body.dark .link-target,
.linked-text.light .link-target {
  color: hsla(0, 0%, 100%, .2)
}

body.dark .linked-text a,
.linked-text.light a {
  color: #fff
}
</style>
