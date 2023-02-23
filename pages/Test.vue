<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "~/assets/js/gsap/InertiaPlugin"

// definePageMeta({
//   title: "Toggle Boxes",
// });

const main = ref();
const tl = ref();
const ctx = ref();

const toggleTimeline = () => {
  tl.value.reversed(!tl.value.reversed());
};

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
    const boxes = self.selector(".box");
    gsap.set(boxes , {
	    backgroundColor: gsap.utils.wrap(colors)
    });

   const loop = horizontalLoop(boxes, {
      paused: true,
      draggable: true, // make it draggable
      center: true, // active element is the one in the center of the container rather than th left edge
      onChange: (element, index) => {
        // when the active element changes, this function gets called.
        activeElement && activeElement.classList.remove("active");
        element.classList.add("active");
        activeElement = element;
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
  <main>
    <section class="boxes-container" ref="main">
      <h1>Use the button to toggle a Timeline</h1>
      <div>
        <button @click="toggleTimeline">Toggle Timeline</button>
      </div>
      <div class="wrapper ">
        <div class="box hover:scale-150">1</div>
        <div class="box hover:scale-150">2</div>
        <div class="box hover:scale-150">3</div>
        <div class="box" style="width:350px">4</div>
        <div class="box">5</div>
        <div class="box">6</div>
        <div class="box">7</div>
        <div class="box">8</div>
        <div class="box">9</div>
        <div class="box">10</div>
        <div class="box">11</div>
      </div>
    </section>
  </main>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Signika+Negative:wght@400;600&display=swap");

.carousel {
  background: blue;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background: green;
  height: 80%;
  width: 20%;
  margin: 0;
  padding: 0;
  position: relative;
  flex-shrink: 0;
  color: black;
  font-size: 21px;
  cursor: pointer;
}

.wrapper {
  height: 20%;
  width: 60%;
  background: #555;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.box.active {
  color: rgb(124, 4, 4);
  border: 2px solid rgb(15, 134, 152);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --dark: #1d1d1d;
  --grey-dark: #414141;
  --light: #fff;
  --mid: #ededed;
  --grey: #989898;
  --gray: #989898;
  --green: #28a92b;
  --green-dark: #4e9815;
  --green-light: #6fb936;
  --blue: #2c7ad2;
  --purple: #8d3dae;
  --red: #c82736;
  --orange: #e77614;
  accent-color: var(--green);
}

/* colors */

.green {
  background-color: var(--green);
}

.blue {
  background-color: var(--blue);
}

.purple {
  background-color: var(--purple);
}

.red {
  background-color: var(--red);
}

.orange {
  background-color: var(--orange);
}

.dark {
  background-color: var(--dark);
  color: var(--light);
}

.light {
  background-color: var(--light);
  color: var(--dark);
}

.text-light {
  color: var(--light);
}

.text-dark {
  color: var(--dark);
}

.gray,
.grey {
  background-color: var(--grey);
}

.panel.align-top {
  align-items: flex-start;
}

.panel h1 {
  font-size: 1.8em;
  color: white;
  font-weight: 300;
  margin: 0 auto;
}

.panel.description {
  padding-bottom: 60px;
}

.panel p,
.panel li {
  color: black;
  font-weight: 400;
  text-align: left;
  font-size: 0.8em;
  line-height: 1.5em;
  margin: 0.3em 0 1em 0;
}

.panel p strong,
.panel li strong {
  color: white;
  font-weight: 400;
}

.panel p code,
.panel li code {
  background-color: rgba(255, 255, 255, 0.15);
  padding: 2px 4px;
  border-radius: 5px;
}

.panel li {
  margin: 0;
}

.gray {
  background-color: #777;
  background-image: radial-gradient(
      circle at 47% 14%,
      rgba(205, 205, 205, 0.04) 0%,
      rgba(205, 205, 205, 0.04) 43%,
      transparent 43%,
      transparent 100%
    ),
    radial-gradient(
      circle at 35% 12%,
      rgba(215, 215, 215, 0.04) 0%,
      rgba(215, 215, 215, 0.04) 4%,
      transparent 4%,
      transparent 100%
    ),
    radial-gradient(
      circle at 1% 35%,
      rgba(24, 24, 24, 0.04) 0%,
      rgba(24, 24, 24, 0.04) 37%,
      transparent 37%,
      transparent 100%
    ),
    radial-gradient(
      circle at 21% 1%,
      rgba(0, 0, 0, 0.04) 0%,
      rgba(0, 0, 0, 0.04) 26%,
      transparent 26%,
      transparent 100%
    ),
    radial-gradient(
      circle at 23% 82%,
      rgba(249, 249, 249, 0.04) 0%,
      rgba(249, 249, 249, 0.04) 60%,
      transparent 60%,
      transparent 100%
    ),
    radial-gradient(
      circle at 11% 54%,
      rgba(251, 251, 251, 0.04) 0%,
      rgba(251, 251, 251, 0.04) 23%,
      transparent 23%,
      transparent 100%
    ),
    radial-gradient(
      circle at 69% 68%,
      rgba(234, 234, 234, 0.04) 0%,
      rgba(234, 234, 234, 0.04) 10%,
      transparent 10%,
      transparent 100%
    ),
    linear-gradient(90deg, #777, #606060);
}

.blue {
  background-color: #2c7ad2;
  background-image: radial-gradient(
      circle at 47% 14%,
      rgba(205, 205, 205, 0.04) 0%,
      rgba(205, 205, 205, 0.04) 43%,
      transparent 43%,
      transparent 100%
    ),
    radial-gradient(
      circle at 35% 12%,
      rgba(215, 215, 215, 0.04) 0%,
      rgba(215, 215, 215, 0.04) 4%,
      transparent 4%,
      transparent 100%
    ),
    radial-gradient(
      circle at 1% 35%,
      rgba(24, 24, 24, 0.04) 0%,
      rgba(24, 24, 24, 0.04) 37%,
      transparent 37%,
      transparent 100%
    ),
    radial-gradient(
      circle at 21% 1%,
      rgba(0, 0, 0, 0.04) 0%,
      rgba(0, 0, 0, 0.04) 26%,
      transparent 26%,
      transparent 100%
    ),
    radial-gradient(
      circle at 23% 82%,
      rgba(249, 249, 249, 0.04) 0%,
      rgba(249, 249, 249, 0.04) 60%,
      transparent 60%,
      transparent 100%
    ),
    radial-gradient(
      circle at 11% 54%,
      rgba(251, 251, 251, 0.04) 0%,
      rgba(251, 251, 251, 0.04) 23%,
      transparent 23%,
      transparent 100%
    ),
    radial-gradient(
      circle at 69% 68%,
      rgba(234, 234, 234, 0.04) 0%,
      rgba(234, 234, 234, 0.04) 10%,
      transparent 10%,
      transparent 100%
    ),
    linear-gradient(90deg, #2c7ad2, #1568c6);
}

.orange {
  background-color: #e77614;
  background-image: radial-gradient(
      circle at 46% 40%,
      rgba(228, 228, 228, 0.06) 0%,
      rgba(228, 228, 228, 0.06) 13%,
      transparent 13%,
      transparent 100%
    ),
    radial-gradient(
      circle at 11% 41%,
      rgba(198, 198, 198, 0.06) 0%,
      rgba(198, 198, 198, 0.06) 19%,
      transparent 19%,
      transparent 100%
    ),
    radial-gradient(
      circle at 52% 23%,
      rgba(14, 14, 14, 0.06) 0%,
      rgba(14, 14, 14, 0.06) 69%,
      transparent 69%,
      transparent 100%
    ),
    radial-gradient(
      circle at 13% 85%,
      rgba(148, 148, 148, 0.06) 0%,
      rgba(148, 148, 148, 0.06) 44%,
      transparent 44%,
      transparent 100%
    ),
    radial-gradient(
      circle at 57% 74%,
      rgba(232, 232, 232, 0.06) 0%,
      rgba(232, 232, 232, 0.06) 21%,
      transparent 21%,
      transparent 100%
    ),
    radial-gradient(
      circle at 59% 54%,
      rgba(39, 39, 39, 0.06) 0%,
      rgba(39, 39, 39, 0.06) 49%,
      transparent 49%,
      transparent 100%
    ),
    radial-gradient(
      circle at 98% 38%,
      rgba(157, 157, 157, 0.06) 0%,
      rgba(157, 157, 157, 0.06) 24%,
      transparent 24%,
      transparent 100%
    ),
    radial-gradient(
      circle at 8% 6%,
      rgba(60, 60, 60, 0.06) 0%,
      rgba(60, 60, 60, 0.06) 12%,
      transparent 12%,
      transparent 100%
    ),
    linear-gradient(90deg, #ff7600, #ff7600);
}

.red {
  background-color: #c82736;
  background-image: radial-gradient(
      circle at 19% 90%,
      rgba(190, 190, 190, 0.04) 0%,
      rgba(190, 190, 190, 0.04) 17%,
      transparent 17%,
      transparent 100%
    ),
    radial-gradient(
      circle at 73% 2%,
      rgba(78, 78, 78, 0.04) 0%,
      rgba(78, 78, 78, 0.04) 94%,
      transparent 94%,
      transparent 100%
    ),
    radial-gradient(
      circle at 45% 2%,
      rgba(18, 18, 18, 0.04) 0%,
      rgba(18, 18, 18, 0.04) 55%,
      transparent 55%,
      transparent 100%
    ),
    radial-gradient(
      circle at 76% 60%,
      rgba(110, 110, 110, 0.04) 0%,
      rgba(110, 110, 110, 0.04) 34%,
      transparent 34%,
      transparent 100%
    ),
    radial-gradient(
      circle at 68% 56%,
      rgba(246, 246, 246, 0.04) 0%,
      rgba(246, 246, 246, 0.04) 16%,
      transparent 16%,
      transparent 100%
    ),
    radial-gradient(
      circle at 71% 42%,
      rgba(156, 156, 156, 0.04) 0%,
      rgba(156, 156, 156, 0.04) 47%,
      transparent 47%,
      transparent 100%
    ),
    radial-gradient(
      circle at 46% 82%,
      rgba(247, 247, 247, 0.04) 0%,
      rgba(247, 247, 247, 0.04) 39%,
      transparent 39%,
      transparent 100%
    ),
    radial-gradient(
      circle at 50% 47%,
      rgba(209, 209, 209, 0.04) 0%,
      rgba(209, 209, 209, 0.04) 45%,
      transparent 45%,
      transparent 100%
    ),
    linear-gradient(90deg, #e53949, #cc2232);
}

.purple {
  background-color: #8d3dae;
  background-image: radial-gradient(
      circle at 47% 14%,
      rgba(205, 205, 205, 0.04) 0%,
      rgba(205, 205, 205, 0.04) 43%,
      transparent 43%,
      transparent 100%
    ),
    radial-gradient(
      circle at 35% 12%,
      rgba(215, 215, 215, 0.04) 0%,
      rgba(215, 215, 215, 0.04) 4%,
      transparent 4%,
      transparent 100%
    ),
    radial-gradient(
      circle at 1% 35%,
      rgba(24, 24, 24, 0.04) 0%,
      rgba(24, 24, 24, 0.04) 37%,
      transparent 37%,
      transparent 100%
    ),
    radial-gradient(
      circle at 21% 1%,
      rgba(0, 0, 0, 0.04) 0%,
      rgba(0, 0, 0, 0.04) 26%,
      transparent 26%,
      transparent 100%
    ),
    radial-gradient(
      circle at 23% 82%,
      rgba(249, 249, 249, 0.04) 0%,
      rgba(249, 249, 249, 0.04) 60%,
      transparent 60%,
      transparent 100%
    ),
    radial-gradient(
      circle at 11% 54%,
      rgba(251, 251, 251, 0.04) 0%,
      rgba(251, 251, 251, 0.04) 23%,
      transparent 23%,
      transparent 100%
    ),
    radial-gradient(
      circle at 69% 68%,
      rgba(234, 234, 234, 0.04) 0%,
      rgba(234, 234, 234, 0.04) 10%,
      transparent 10%,
      transparent 100%
    ),
    linear-gradient(90deg, #8d3dae, #8d3dae);
}

.green {
  background-color: #28a92b;
  background-image: radial-gradient(
      circle at 46% 40%,
      rgba(228, 228, 228, 0.06) 0%,
      rgba(228, 228, 228, 0.06) 13%,
      transparent 13%,
      transparent 100%
    ),
    radial-gradient(
      circle at 11% 41%,
      rgba(198, 198, 198, 0.06) 0%,
      rgba(198, 198, 198, 0.06) 19%,
      transparent 19%,
      transparent 100%
    ),
    radial-gradient(
      circle at 52% 23%,
      rgba(14, 14, 14, 0.06) 0%,
      rgba(14, 14, 14, 0.06) 69%,
      transparent 69%,
      transparent 100%
    ),
    radial-gradient(
      circle at 13% 85%,
      rgba(148, 148, 148, 0.06) 0%,
      rgba(148, 148, 148, 0.06) 44%,
      transparent 44%,
      transparent 100%
    ),
    radial-gradient(
      circle at 57% 74%,
      rgba(232, 232, 232, 0.06) 0%,
      rgba(232, 232, 232, 0.06) 21%,
      transparent 21%,
      transparent 100%
    ),
    radial-gradient(
      circle at 59% 54%,
      rgba(39, 39, 39, 0.06) 0%,
      rgba(39, 39, 39, 0.06) 49%,
      transparent 49%,
      transparent 100%
    ),
    radial-gradient(
      circle at 98% 38%,
      rgba(157, 157, 157, 0.06) 0%,
      rgba(157, 157, 157, 0.06) 24%,
      transparent 24%,
      transparent 100%
    ),
    radial-gradient(
      circle at 8% 6%,
      rgba(60, 60, 60, 0.06) 0%,
      rgba(60, 60, 60, 0.06) 12%,
      transparent 12%,
      transparent 100%
    ),
    linear-gradient(90deg, #28a92b, #10a614);
}

button {
  display: inline-block;
  outline: none;
  border: none;
  padding: 8px 14px;
  background: var(--light);
  background-image: linear-gradient(
    to bottom,
    hsl(0deg 0% 100%),
    hsl(0deg 0% 94%)
  );
  -webkit-box-shadow: 0px 1px 0px #414141;
  -moz-box-shadow: 0px 1px 0px #414141;
  box-shadow: 0px 1px 0px #414141;
  color: var(--dark);
  text-decoration: none;
  -webkit-border-radius: 4;
  -moz-border-radius: 4;
  border-radius: 4px;
  padding: 12px 25px;
  font-family: "Signika Negative", sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  line-height: 18px;
}

button:hover {
  background: var(--green-light);
  background-image: linear-gradient(to bottom, #57a818, #4d9916);
  -webkit-box-shadow: 0px 1px 0px fefefe;
  -moz-box-shadow: 0px 1px 0px fefefe;
  box-shadow: 0px 1px 0px fefefe;
  color: #ffffff;
  text-decoration: none;
}

html,
body {
  margin: 0;
  height: 100%;
  -webkit-overflow-scrolling: touch;
  overflow-scrolling: touch;
  font-family: "Signika Negative", sans-serif, Arial;
}

.panel {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 1.5em;
  text-align: center;
  color: white;
  position: relative;
  box-sizing: border-box;
  padding: 10px;
}

body {
  overflow-x: hidden;
  overflow-y: scroll;
}

h1,
h2,
p,
li {
  max-width: 800px;
}

/* HEADER */
header {
  position: fixed;
  top: 0px;
  left: 0px;
  padding: 6px 10px 10px 10px;
  border-bottom-right-radius: 26px;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
  will-change: transform;
}

a {
  text-decoration: none;
  color: var(--green-dark);
}

/* HEADINGS */
.header-section {
  padding: 0 15px;
  text-align: center;
  margin: 40vh auto 50vh;
}

/* SCROLL DOWN */
.scroll-down {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translate(-50%, 0);
  color: black;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 16px;
  overflow: visible;
}

.scroll-down .arrow {
  position: relative;
  top: -4px;
  margin: 0 auto;
  width: 20px;
  height: 20px;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj4KPHBhdGggZmlsbD0iYmxhY2siIGQ9Ik00ODMuMiwxOTIuMmMtMjAuNS0yMC41LTUzLjUtMjAuOC03My43LTAuNkwyNTcsMzQ0LjFMMTA0LjUsMTkxLjZjLTIwLjItMjAuMi01My4yLTE5LjktNzMuNywwLjYKCWMtMjAuNSwyMC41LTIwLjgsNTMuNS0wLjYsNzMuN2wxOTAsMTkwYzEwLjEsMTAuMSwyMy40LDE1LjEsMzYuOCwxNWMxMy4zLDAuMSwyNi43LTQuOSwzNi44LTE1bDE5MC0xOTAKCUM1MDMuOSwyNDUuNyw1MDMuNywyMTIuNyw0ODMuMiwxOTIuMnoiLz4KPC9zdmc+);
  background-size: contain;
}

.arrow-right {
  transform: rotate(-90deg);
  position: relative;
  top: -4px;
  margin: 1rem auto;
  width: 20px;
  height: 20px;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj4KPHBhdGggZmlsbD0iYmxhY2siIGQ9Ik00ODMuMiwxOTIuMmMtMjAuNS0yMC41LTUzLjUtMjAuOC03My43LTAuNkwyNTcsMzQ0LjFMMTA0LjUsMTkxLjZjLTIwLjItMjAuMi01My4yLTE5LjktNzMuNywwLjYKCWMtMjAuNSwyMC41LTIwLjgsNTMuNS0wLjYsNzMuN2wxOTAsMTkwYzEwLjEsMTAuMSwyMy40LDE1LjEsMzYuOCwxNWMxMy4zLDAuMSwyNi43LTQuOSwzNi44LTE1bDE5MC0xOTAKCUM1MDMuOSwyNDUuNyw1MDMuNywyMTIuNyw0ODMuMiwxOTIuMnoiLz4KPC9zdmc+);
  background-size: contain;
}

html,
body {
  height: auto;
  background-color: var(--dark);
  color: var(--light);
  font-family: "Signika Negative", sans-serif;
}

.header {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  padding: 0;
  border-radius: 0;
  background-color: transparent;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0 1rem;
}

nav {
  display: flex;
  align-items: flex-end;
  height: 100%;
}

nav ul {
  margin: 0;
  padding: 0;
  display: flex;
  gap: 0.75rem;
  list-style: none;
}

nav li a {
  padding: 0.5rem 1rem 0.25rem;
  color: var(--mid);
  text-decoration: none;
  font-size: 18px;
  display: block;
}

nav li a:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.panel {
  height: 100vh;
  position: sticky;
  top: 0;
}

.section {
  width: 100%;
  height: 100vh;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.column {
  flex-direction: column;
  gap: 1rem;
}

.boxes-container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
}

.box {
  background-color: var(--green);
  width: 100px;
  height: 100px;
  border-radius: 10px;
  font-size: 24px;
  text-align: center;
  line-height: 100px;
}
</style>
