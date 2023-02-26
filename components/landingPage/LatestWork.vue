<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "~/assets/js/gsap/InertiaPlugin";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const main = ref();
const tl = ref();
const ctx = ref();

onMounted(() => {
  gsap.registerPlugin(Draggable, InertiaPlugin);

  function horizontalLoop(items, config) {
    items = gsap.utils.toArray(items);
    config = config || {};
    let onChange = config.onChange,
      lastIndex = 0,
      tl = gsap.timeline({
        repeat: config.repeat,
        onUpdate:
          onChange &&
          function () {
            let i = tl.closestIndex();
            if (lastIndex !== i) {
              lastIndex = i;
              onChange(items[i], i);
            }
          },
        paused: config.paused,
        defaults: { ease: "none" },
        onReverseComplete: () =>
          tl.totalTime(tl.rawTime() + tl.duration() * 100),
      }),
      length = items.length,
      startX = items[0].offsetLeft,
      times = [],
      widths = [],
      spaceBefore = [],
      xPercents = [],
      curIndex = 0,
      center = config.center,
      pixelsPerSecond = (config.speed || 1) * 100,
      snap =
        config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
      timeOffset = 0,
      container =
        center === true
          ? items[0].parentNode
          : gsap.utils.toArray(center)[0] || items[0].parentNode,
      totalWidth,
      getTotalWidth = () =>
        items[length - 1].offsetLeft +
        (xPercents[length - 1] / 100) * widths[length - 1] -
        startX +
        spaceBefore[0] +
        items[length - 1].offsetWidth *
        gsap.getProperty(items[length - 1], "scaleX") +
        (parseFloat(config.paddingRight) || 0),
      populateWidths = () => {
        let b1 = container.getBoundingClientRect(),
          b2;
        items.forEach((el, i) => {
          widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
          xPercents[i] = snap(
            (parseFloat(gsap.getProperty(el, "x", "px")) / widths[i]) * 100 +
            gsap.getProperty(el, "xPercent")
          );
          b2 = el.getBoundingClientRect();
          spaceBefore[i] = b2.left - (i ? b1.right : b1.left);
          b1 = b2;
        });
        gsap.set(items, {
          // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
          xPercent: (i) => xPercents[i],
        });
        totalWidth = getTotalWidth();
      },
      timeWrap,
      populateOffsets = () => {
        timeOffset = center
          ? (tl.duration() * (container.offsetWidth / 2)) / totalWidth
          : 0;
        center &&
        times.forEach((t, i) => {
          times[i] = timeWrap(
            tl.labels["label" + i] +
            (tl.duration() * widths[i]) / 2 / totalWidth -
            timeOffset
          );
        });
      },
      getClosest = (values, value, wrap) => {
        let i = values.length,
          closest = 1e10,
          index = 0,
          d;
        while (i--) {
          d = Math.abs(values[i] - value);
          if (d > wrap / 2) {
            d = wrap - d;
          }
          if (d < closest) {
            closest = d;
            index = i;
          }
        }
        return index;
      },
      populateTimeline = () => {
        let i, item, curX, distanceToStart, distanceToLoop;
        tl.clear();
        for (i = 0; i < length; i++) {
          item = items[i];
          curX = (xPercents[i] / 100) * widths[i];
          distanceToStart = item.offsetLeft + curX - startX + spaceBefore[0];
          distanceToLoop =
            distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
          tl.to(
              item,
              {
                xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
                duration: distanceToLoop / pixelsPerSecond,
              },
              0
            )
            .fromTo(
              item,
              {
                xPercent: snap(
                  ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
                ),
              },
              {
                xPercent: xPercents[i],
                duration:
                  (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
                immediateRender: false,
              },
              distanceToLoop / pixelsPerSecond
            )
            .add("label" + i, distanceToStart / pixelsPerSecond);
          times[i] = distanceToStart / pixelsPerSecond;
        }
        timeWrap = gsap.utils.wrap(0, tl.duration());
      },
      refresh = (deep) => {
        let progress = tl.progress();
        tl.progress(0, true);
        populateWidths();
        deep && populateTimeline();
        populateOffsets();
        deep && tl.draggable
          ? tl.time(times[curIndex], true)
          : tl.progress(progress, true);
      },
      proxy;
    gsap.set(items, { x: 0 });
    populateWidths();
    populateTimeline();
    populateOffsets();
    window.addEventListener("resize", () => refresh(true));
    function toIndex(index, vars) {
      vars = vars || {};
      Math.abs(index - curIndex) > length / 2 &&
      (index += index > curIndex ? -length : length); // always go in the shortest direction
      let newIndex = gsap.utils.wrap(0, length, index),
        time = times[newIndex];
      if (time > tl.time() !== index > curIndex) {
        // if we're wrapping the timeline's playhead, make the proper adjustments
        time += tl.duration() * (index > curIndex ? 1 : -1);
      }
      if (time < 0 || time > tl.duration()) {
        vars.modifiers = { time: timeWrap };
      }
      curIndex = newIndex;
      vars.overwrite = true;
      gsap.killTweensOf(proxy);
      return tl.tweenTo(time, vars);
    }
    tl.next = (vars) => toIndex(curIndex + 1, vars);
    tl.previous = (vars) => toIndex(curIndex - 1, vars);
    tl.current = () => curIndex;
    tl.toIndex = (index, vars) => toIndex(index, vars);
    tl.closestIndex = (setCurrent) => {
      let index = getClosest(times, tl.time(), tl.duration());
      setCurrent && (curIndex = index);
      return index;
    };
    tl.times = times;
    tl.progress(1, true).progress(0, true); // pre-render for performance
    if (config.reversed) {
      tl.vars.onReverseComplete();
      tl.reverse();
    }
    if (config.draggable && typeof Draggable === "function") {
      proxy = document.createElement("div");
      let wrap = gsap.utils.wrap(0, 1),
        ratio,
        startProgress,
        draggable,
        dragSnap,
        align = () =>
          tl.progress(
            wrap(startProgress + (draggable.startX - draggable.x) * ratio)
          ),
        syncIndex = () => tl.closestIndex(true);
      typeof InertiaPlugin === "undefined" &&
      console.warn(
        "InertiaPlugin required for momentum-based scrolling and snapping. https://greensock.com/club"
      );
      draggable = Draggable.create(proxy, {
        trigger: items[0].parentNode,
        type: "x",
        onPressInit() {
          gsap.killTweensOf(tl);
          startProgress = tl.progress();
          refresh();
          ratio = 1 / totalWidth;
          gsap.set(proxy, { x: startProgress / -ratio });
        },
        onDrag: align,
        onThrowUpdate: align,
        inertia: true,
        snap: (value) => {
          let time = -(value * ratio) * tl.duration(),
            wrappedTime = timeWrap(time),
            snapTime = times[getClosest(times, wrappedTime, tl.duration())],
            dif = snapTime - wrappedTime;
          Math.abs(dif) > tl.duration() / 2 &&
          (dif += dif < 0 ? tl.duration() : -tl.duration());
          return (time + dif) / tl.duration() / -ratio;
        },
        onRelease: syncIndex,
        onThrowComplete: syncIndex,
      })[0];
      tl.draggable = draggable;
    }
    tl.closestIndex(true);
    onChange && onChange(items[curIndex], curIndex);
    return tl;
  }

  ctx.value = gsap.context((self) => {
    const colors = ["#f38630","#6fb936", "#ccc", "#6fb936"];

    let activeElement;
    const boxes = self.selector(".card");
    // gsap.set(boxes , {
    //     backgroundColor: gsap.utils.wrap(colors)
    // });

    gsap.set(".box", {opacity: 0, y: 20});

    ScrollTrigger.batch(".box", {
      onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15}),
      onLeave: batch => gsap.to(batch, {opacity: 0, y: 20}),
      onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15}),
      onLeaveBack: batch => gsap.to(batch, {opacity: 0, y: 20}),

      start: "top 60%",
      end: "bottom 5%",
    });

    const loop = horizontalLoop(boxes, {
      paused: true,
      draggable: true, // make it draggable
      center: false, // active element is the one in the center of the container rather than th left edge
      paddingRight: 40,
      onChange: (element, index) => {
        // when the active element changes, this function gets called.
        // activeElement && activeElement.classList.remove("active");
        // element.classList.add("active");
        // activeElement = element;
      },
    });
    boxes.forEach((box, i) => box.addEventListener("click", () => loop.toIndex(i, {duration: 0.8, ease: "power1.inOut"})));
  }, main.value);

});

onUnmounted(() => {
  ctx.value.revert(); // <- Easy Cleanup!
});

</script>

<template>
  <div class="bg-white overflow-hidden">
    <div class="mt-44 mb-32 space-y-24" ref="main">
      <!-- heading -->
      <div class="flex flex-col justify-between space-y-10 md:flex-row md:space-y-0">
        <div class="flex items-center">
          <h1 class="text-[3.75rem] font-InterExtraBold  leading-tight text-black lg:text-[5rem] box">
            Latest Works
          </h1>
          <a href="/"
             class="group mb-3 ml-20 hidden self-end text-lg font-semibold text-black box
                         hover:text-[#ff4437] hover:transition-all hover:duration-[0.6s] lg:flex">ALL
            PROJECTS

            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                 class="h-7 w-7 group-hover:translate-x-1 group-hover:stroke-[#ff4437]
                                group-hover:transition-all group-hover:duration-[0.6s]"
                 viewBox="0 0 24 24" strokeWidth="{1.5}" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </a>
        </div>
        <div class="flex flex-row space-x-5 pb-3 md:flex-col md:space-x-0 lg:flex-row lg:space-x-5">
          <div
            class="box group flex h-12 w-12 items-center justify-center self-end border-[1.5px]
                        border-black/30 hover:relative hover:cursor-pointer hover:overflow-hidden hover:border-0 hover:bg-[#ff4437] hover:duration-[0.3s]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor"
                 class="h-6 w-6 stroke-gray-400 group-hover:absolute group-hover:right-[-20%]
                            group-hover:-translate-x-5 group-hover:stroke-white group-hover:transition-all
                            group-hover:duration-[0.4s]">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </div>

          <div
            class="box group flex h-12 w-12 items-center justify-center self-end border-[1.5px]
                        border-black/30 hover:relative hover:cursor-pointer hover:border-0 hover:bg-[#ff4437]
                        hover:duration-[0.3s]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor"
                 class="left-[-20%] h-6 w-6 stroke-gray-400 group-hover:absolute group-hover:translate-x-5
                             group-hover:stroke-white group-hover:transition-all group-hover:duration-[0.4s]">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </div>
        </div>
      </div>

      <!-- slider -->
      <div class="slider-wrapper flex flex-rows space-x-10 " >
        <div class="card group space-y-10 mx-10 ">
          <div class="box overflow-hidden">
            <img src="https://dev.utom.berlin/assets/img/portfolio/work-1.png"
                 class="image w-[65rem] object-contain grayscale hover:cursor-pointer group-hover:grayscale-0
                            group-hover:transition-all group-hover:duration-[1s] transition-all ease-out hover:scale-110"
                 alt="" />
          </div>
          <div>
            <div
              class="mb-3 text-base font-medium uppercase text-[#666666] group-hover:text-black/75 group-hover:transition-all group-hover:duration-[1s]">
              UI/UX
            </div>
            <h4
              class="text-3xl font-bold text-[#666666] hover:cursor-pointer hover:underline hover:duration-[1s] group-hover:text-black group-hover:transition-all group-hover:duration-[1s]">
              eMobility Landing Page
            </h4>
          </div>
        </div>
        <div class="card group space-y-10 mx-10">
          <div class="box overflow-hidden">
            <img src="https://dev.utom.berlin/assets/img/portfolio/work-2.png"
                 class="w-[65rem] object-contain grayscale hover:cursor-pointer group-hover:grayscale-0
                            group-hover:transition-all group-hover:duration-[1s] transition-all ease-out hover:scale-110"
                 alt="" />
          </div>
          <div>
            <div
              class="mb-3 text-base font-medium uppercase text-[#666666] group-hover:text-black/75
                            group-hover:transition-all group-hover:duration-[1s]">
              product
            </div>
            <h4
              class="text-3xl font-bold text-[#666666] hover:cursor-pointer hover:underline hover:duration-[1s]
                            group-hover:text-black group-hover:transition-all group-hover:duration-[1s]">
              The Battery Show Europe 2021
            </h4>
          </div>
        </div>
        <div class="card group space-y-10 mx-10">
          <div class="box overflow-hidden">
            <img src="https://dev.utom.berlin/assets/img/portfolio/work-3.png"
                 class="w-[65rem] object-contain grayscale hover:cursor-pointer group-hover:grayscale-0
                            group-hover:transition-all group-hover:duration-[1s] transition-all ease-out hover:scale-110"
                 alt="" />
          </div>
          <div>
            <div
              class="mb-3 text-base font-medium uppercase text-[#666666] group-hover:text-black/75
                            group-hover:transition-all group-hover:duration-[1s]">
              Branding,Packaging
            </div>
            <h4
              class="text-3xl font-bold text-[#666666] hover:cursor-pointer hover:underline hover:duration-[1s]
                            group-hover:text-black group-hover:transition-all group-hover:duration-[1s]">
              Bemusterungstool
            </h4>
          </div>
        </div>
        <div class="card group space-y-10 mx-10">
          <div class="box overflow-hidden">
            <img src="https://dev.utom.berlin/assets/img/portfolio/work-3.png"
                 class="w-[65rem] object-contain grayscale hover:cursor-pointer group-hover:grayscale-0
                            group-hover:transition-all group-hover:duration-[1s] transition-all ease-out hover:scale-110"
                 alt="" />
          </div>
          <div>
            <div
              class="mb-3 text-base font-medium uppercase text-[#666666] group-hover:text-black/75
                            group-hover:transition-all group-hover:duration-[1s]">
              Branding,Packaging
            </div>
            <h4
              class="text-3xl font-bold text-[#666666] hover:cursor-pointer hover:underline hover:duration-[1s]
                            group-hover:text-black group-hover:transition-all group-hover:duration-[1s]">
              Bemusterungstool
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style >
.card.active {
  transition: all;
  scale: 110%;
}

.card {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  position: relative;
  cursor: pointer;
}

.slider-wrapper {
  position: relative;
  overflow: hidden;
  width: 150vw;

}


</style>
