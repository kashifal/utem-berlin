<template>
  <!-- KOMPETENZ SECTION -->
  <section class="md:p-10 w-full max-w-screen-xl mx-auto inset-x-0 mt-16">
    <div class="flex">
      <div class="w-full">

        <p class="text pt-6">
          We are looking for a dedicated and driven engineer in the field of Automation and Instrumentation Engineering for our Northvolt Revolt Department to join us in our mission to contribute to build the world’s greenest batteries. The role is a part of our passionate Revolt Ett team based in Skellefteå. By joining us, you will be part of building the first in-house full recycling flow in the world. Recovery and effective recycling of end-of-life batteries is key to closing the loop on battery sustainable manufacturing and to achieve a minimal carbon footprint.
        </p>
        <h2 class="text-xl font-InterExtraBold mt-8">About the job</h2>
        <p class="text pt-6">
            The need to recycle batteries is increasing and the construction of Europe's largest recycling facility for batteries in Skellefteå is ongoing and will start its production process to separate out valuable metals for reuse in battery production during 2023. The goal is to source 50% of the raw materials needed for cell production from recycling by 2030 and therefore more recycling facilities are planned at site. So, forget about everything you thought you knew about working in the industry, this is going to be completely different!
            <br><br>
            The recycling process consists of the mechanical pre-treatment processes and chemical hydrometallurgical processes. As the Automation and Instrumentation Site Engineer, you will be working together with the Revolt Process Engineers, Electrical Engineers, Technical Project Managers of other Processes and Disciplines, Technical Leads, internal and external stakeholders, Contractors, and equipment vendors to execute and deliver the first recycling giga-factory. You have experience as Automation Engineer and have been managing and delivering large, technical, and industrial projects. You are our person to drive and assure the successful execution of the automation works.
            <br><br>
            As Automation and Instrumentation Site Engineer, you will get the chance to have a real impact on our success story and see the results of your work. Our organization requires and values great self-discipline and a natural talent to make things happen. You will be a vital member of the Recycling team and key to Northvolt's mission to enable the future of energy.
        </p>
        <h2 class="text-xl font-InterExtraBold mt-8">Job Scope (High Level Purpose of Function):</h2>
        <div class="flex space-x-2 pt-6">
          <div class="">-</div>
          <div class="text ">
            Responsible to lead and supervise automation/instrumentation installation and programming works on site.
          </div>
        </div>
        <h2 class="text-xl font-InterExtraBold mt-8">Key Responsibilities Include (But are not limited to):</h2>
        <div class="flex space-x-2 pt-6">
          <div class="">-</div>
          <div class="text ">
            Fully understanding the automation/instrumentation concept, control systems architecture and infrastructure and all the necessary drawings and making sure that they are implemented on site.
          </div>
        </div>
        <div class="flex space-x-2 pt-1">
          <div class="">-</div>
          <div class="text ">
            Being the client representative at all site automation/instrumentation inspections.
          </div>
        </div>
        <div class="flex space-x-2 pt-1">
          <div class="">-</div>
          <div class="text ">
            Attendance at site meetings and liaison with design to answer questions from site.
          </div>
        </div>
        <div class="flex space-x-2 pt-1">
          <div class="">-</div>
          <div class="text ">
            Regular progress status reporting.
          </div>
        </div>
        <div class="flex space-x-2 pt-1">
          <div class="">-</div>
          <div class="text ">
            Arranging all 3rd party inspections at pre-determined milestones to ensure that the automation/instrumentation installation complies with the installation drawings and manuals and contracted deliverables.
          </div>
        </div>
      </div>
    </div>
    <hr class="my-10" />
  </section>
</template>

<script>
export default {
  props: ["contents", "jobOffer"]
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.video-container {
  /*margin: 30px 0 30px 0;*/
  position: relative;
  width: 100%;
  height: 40vh;
  overflow: hidden;
}

.video-container video {
  /* Make video to at least 100% wide and tall */
  min-width: 100%;
  min-height: 100%;

  /* Setting width & height to auto prevents the browser from stretching or squishing the video */
  width: auto;
  height: auto;

  /* Center the video */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/*
.wrapper {
    display: table;
    width: auto;
    position: relative;
    width: 50%;
}
*/
.playpause {
  background-image: url("/img/media_play_pause_resume_white_01.png");
  background-repeat: no-repeat;
  width: 50%;
  height: 50%;
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  margin: auto;
  background-size: contain;
  background-position: center;
  z-index: 100;
}

.overlay {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAAXNSR0IArs4c6QAAACBJREFUCB1jYGBg+A/EIIBOQ0SRSXQVMD6yGggbJgOnAcmtCPjyS2ejAAAAAElFTkSuQmCC");

  opacity: 1;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  box-sizing: border-box;

  :last-child {
    margin-bottom: 0;
  }

  .textbox {
    position: absolute;
    bottom: 0;
    left: 0;
  }
  h1 {
    font-size: 32pt;
    font-weight: bold;
    color: #fff !important;
    margin: 0 0 1em;
  }

  p {
    font-size: 11pt;
    color: #fff !important;
    margin: 1em 0;
  }

  a {
    color: #fff;
  }
}

.inner {
  position: absolute;
  width: 100%;
  bottom: 35%;
  left: 5%;

  z-index: 3;

  @include medium {
  }
  @include small {
    padding: 0 40px;
    bottom: 10%;
  }
  @include extrasmall {
  }

  span.hashtag {
    font-size: 14px;
    margin-top: 20px;
    display: block;
    color: #ffcc00;
  }

  h2 {
    color: #ffcc00;

    font-size: 24px;
    line-height: 3rem;
    padding-top: 0.3rem;
    margin-bottom: 10px;
  }
  h3 {
    color: #ffcc00;

    font-size: 1rem;
    line-height: 1.8rem;
    padding-top: 1.3rem;
    margin-bottom: 10px;
  }
  h5 {
    font-weight: 700;
  }

  p {
    color: #ffcc00;
    font-size: 13px;
  }
}
</style>


