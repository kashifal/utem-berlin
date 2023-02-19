<template>
  <section class="w-full h-20 bg-gray-200">
    <div class="max-w-screen-xl mx-auto inset-x-0 md:px-10 h-full">
      <div class="flex justify-start items-center space-x-8 h-full">
          <div v-if="jobOffer" class="flex items-center fill-gray-500 space-x-2">
            <svg width="2.3em" height="2.3em" viewBox="0 0 24 24">
              <path
                d="m2.5 10.56l9 5.2a1 1 0 0 0 1 0l9-5.2a1 1 0 0 0 0-1.73l-9-5.2a1 1 0 0 0-1 0l-9 5.2a1 1 0 0 0 0 1.73ZM12 5.65l7 4l-7 4.05l-7-4.01Zm8.5 7.79L12 18.35l-8.5-4.91a1 1 0 0 0-1.37.36a1 1 0 0 0 .37 1.37l9 5.2a1 1 0 0 0 1 0l9-5.2a1 1 0 0 0 .37-1.37a1 1 0 0 0-1.37-.36Z">
              </path>
            </svg>
            <div class="text-sm">JobID: {{ jobOffer.jobId }}</div>
          </div>
          <div class="flex items-center fill-gray-500 space-x-2">
            <svg width="2.3em" height="2.3em" viewBox="0 0 24 24">
              <path
                d="m2.5 10.56l9 5.2a1 1 0 0 0 1 0l9-5.2a1 1 0 0 0 0-1.73l-9-5.2a1 1 0 0 0-1 0l-9 5.2a1 1 0 0 0 0 1.73ZM12 5.65l7 4l-7 4.05l-7-4.01Zm8.5 7.79L12 18.35l-8.5-4.91a1 1 0 0 0-1.37.36a1 1 0 0 0 .37 1.37l9 5.2a1 1 0 0 0 1 0l9-5.2a1 1 0 0 0 .37-1.37a1 1 0 0 0-1.37-.36Z">
              </path>
            </svg>
            <div class="text-sm">
              Applications are considered on a rolling basis
            </div>
          </div>
          <div class="flex items-center fill-gray-500 space-x-2">
            <svg width="2em" height="2em" viewBox="0 0 512 512">
              <path d="M256 48c34.19 0 66.334 13.314 90.51 37.49S384 141.81 384 176c0 42.92-24.092 107.127-69.67 185.68-22.279 38.396-44.771 71.634-58.332 90.931-13.518-19.232-35.912-52.327-58.161-90.645C152.149 283.281 128 218.976 128 176c0-34.19 13.314-66.334 37.49-90.51S221.81 48 256 48m0-16c-79.529 0-144 64.471-144 144 0 112 144 304 144 304s144-192 144-304c0-79.529-64.471-144-144-144z" fill="currentColor"></path><path d="M256 112c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64zm0 110.9c-25.9 0-46.9-21-46.9-46.9s21-46.9 46.9-46.9 46.9 21 46.9 46.9-21 46.9-46.9 46.9z"></path>
            </svg>
            <div class="text-sm">
              Wickede (Ruhr)
            </div>
          </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["contents", "jobOffer"]
}
</script>
