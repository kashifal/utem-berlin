<template>
  <div v-if="globalPage == 2">
    <div class="text-xl text-white pt-3">
      <span class="font-InterExtraBold">page 2 | ceramHEO®</span>
<!--      <span class="font-normal text-[16px] pl-4">{{ selectedGroupItem }}</span>-->
    </div>
    <div class=" w-full">
      <div class="grid grid-cols-5 xxl:grid-cols-4 gap-12 xl:gap-40 2xl:gap-16 px-0 py-6">
        <div @click="selectItem('c7', '1')"
             :class="{ 'border-amber-400 border-8' : selectedGroupItem['c7'] == '1' }"
             class="relative border-2 border-gray-300 rounded h-36 w-48 bg-white hover:bg-gray-200">
          <div class="bg-gray-200 h-8 w-full">
            <div class="text-center my-1 font-bold">
              Gleitlack
            </div>
          </div>
          <div v-if="selectedGroupItem['c7'] == '1'" class="absolute bottom-1 right-2 fill-green-500">
            <svg width="1.6em" height="1.6em" viewBox="0 0 32 32">
              <path
                  d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm-2 19.59l-5-5L10.59 15L14 18.41L21.41 11l1.596 1.586Z">
              </path>
              <path fill="none" d="m14 21.591l-5-5L10.591 15L14 18.409L21.41 11l1.595 1.585L14 21.591z">
              </path>
            </svg>
          </div>
        </div>
        <div @click="selectItem('c7', '2')"
             :class="{ 'border-amber-400 border-8' : selectedGroupItem['c7'] == '2' }"
             class="relative border-2 border-gray-300 rounded h-36 w-48 bg-white hover:bg-gray-200">
          <div class="bg-gray-200 h-8 w-full">
            <div class="text-center my-1 font-bold">
              Korrosionsschutz
            </div>
          </div>
          <div v-if="selectedGroupItem['c7'] == '2'" class="absolute bottom-1 right-2 fill-green-500">
            <svg width="1.6em" height="1.6em" viewBox="0 0 32 32">
              <path
                  d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm-2 19.59l-5-5L10.59 15L14 18.41L21.41 11l1.596 1.586Z">
              </path>
              <path fill="none" d="m14 21.591l-5-5L10.591 15L14 18.409L21.41 11l1.595 1.585L14 21.591z">
              </path>
            </svg>
          </div>
        </div>
        <div @click="selectItem('c7', '3')"
             :class="{ 'border-amber-400 border-8' : selectedGroupItem['c7'] == '3' }"
             class="relative border-2 border-gray-300 rounded h-36 w-48 bg-white hover:bg-gray-200">
          <div class="bg-gray-200 h-8 w-full">
            <div class="text-center my-1 font-bold">
              functional pulver
            </div>
          </div>
          <div v-if="selectedGroupItem['c7'] == '3'" class="absolute bottom-1 right-2 fill-green-500">
            <svg width="1.6em" height="1.6em" viewBox="0 0 32 32">
              <path
                  d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm-2 19.59l-5-5L10.59 15L14 18.41L21.41 11l1.596 1.586Z">
              </path>
              <path fill="none" d="m14 21.591l-5-5L10.591 15L14 18.409L21.41 11l1.595 1.585L14 21.591z">
              </path>
            </svg>
          </div>
        </div>
        <div @click="selectItem('c7', '4')"
             :class="{ 'border-amber-400 border-8' : selectedGroupItem['c7'] == '4' }"
             class="relative border-2 border-gray-300 rounded h-36 w-48 bg-white hover:bg-gray-200">
          <div class="bg-gray-200 h-8 w-full">
            <div class="text-center my-1 font-bold">
              functional decorative
            </div>
          </div>
          <div v-if="selectedGroupItem['c7'] == '4'" class="absolute bottom-1 right-2 fill-green-500">
            <svg width="1.6em" height="1.6em" viewBox="0 0 32 32">
              <path
                  d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm-2 19.59l-5-5L10.59 15L14 18.41L21.41 11l1.596 1.586Z">
              </path>
              <path fill="none" d="m14 21.591l-5-5L10.591 15L14 18.409L21.41 11l1.595 1.585L14 21.591z">
              </path>
            </svg>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-5 xxl:grid-cols-4 gap-12 xl:gap-40 2xl:gap-16 px-0 py-6">
        <div @click="selectItem('c8', '1')"
             :class="{ 'border-amber-400 border-8' : selectedGroupItem['c8'] == '1' }"
             class="relative border-2 border-gray-300 rounded h-36 w-48 bg-white hover:bg-gray-200">
          <div class="bg-gray-200 h-8 w-full">
            <div class="text-center my-1 font-bold">
              Gleitlack
            </div>
          </div>
          <div v-if="selectedGroupItem['c8'] == '1'" class="absolute bottom-1 right-2 fill-green-500">
            <svg width="1.6em" height="1.6em" viewBox="0 0 32 32">
              <path
                  d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm-2 19.59l-5-5L10.59 15L14 18.41L21.41 11l1.596 1.586Z">
              </path>
              <path fill="none" d="m14 21.591l-5-5L10.591 15L14 18.409L21.41 11l1.595 1.585L14 21.591z">
              </path>
            </svg>
          </div>
        </div>
        <div @click="selectItem('c8', '2')"
             :class="{ 'border-amber-400 border-8' : selectedGroupItem['c8'] == '2' }"
             class="relative border-2 border-gray-300 rounded h-36 w-48 bg-white hover:bg-gray-200">
          <div class="bg-gray-200 h-8 w-full">
            <div class="text-center my-1 font-bold">
              Korrosionsschutz
            </div>
          </div>
          <div v-if="selectedGroupItem['c8'] == '2'" class="absolute bottom-1 right-2 fill-green-500">
            <svg width="1.6em" height="1.6em" viewBox="0 0 32 32">
              <path
                  d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm-2 19.59l-5-5L10.59 15L14 18.41L21.41 11l1.596 1.586Z">
              </path>
              <path fill="none" d="m14 21.591l-5-5L10.591 15L14 18.409L21.41 11l1.595 1.585L14 21.591z">
              </path>
            </svg>
          </div>
        </div>
        <div @click="selectItem('c8', '3')"
             :class="{ 'border-amber-400 border-8' : selectedGroupItem['c8'] == '3' }"
             class="relative border-2 border-gray-300 rounded h-36 w-48 bg-white hover:bg-gray-200">
          <div class="bg-gray-200 h-8 w-full">
            <div class="text-center my-1 font-bold">
              functional pulver
            </div>
          </div>
          <div v-if="selectedGroupItem['c8'] == '3'" class="absolute bottom-1 right-2 fill-green-500">
            <svg width="1.6em" height="1.6em" viewBox="0 0 32 32">
              <path
                  d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm-2 19.59l-5-5L10.59 15L14 18.41L21.41 11l1.596 1.586Z">
              </path>
              <path fill="none" d="m14 21.591l-5-5L10.591 15L14 18.409L21.41 11l1.595 1.585L14 21.591z">
              </path>
            </svg>
          </div>
        </div>
        <div @click="selectItem('c8', '4')"
             :class="{ 'border-amber-400 border-8' : selectedGroupItem['c8'] == '4' }"
             class="relative border-2 border-gray-300 rounded h-36 w-48 bg-white hover:bg-gray-200">
          <div class="bg-gray-200 h-8 w-full">
            <div class="text-center my-1 font-bold">
              functional decorative
            </div>
          </div>
          <div v-if="selectedGroupItem['c8'] == '4'" class="absolute bottom-1 right-2 fill-green-500">
            <svg width="1.6em" height="1.6em" viewBox="0 0 32 32">
              <path
                  d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm-2 19.59l-5-5L10.59 15L14 18.41L21.41 11l1.596 1.586Z">
              </path>
              <path fill="none" d="m14 21.591l-5-5L10.591 15L14 18.409L21.41 11l1.595 1.585L14 21.591z">
              </path>
            </svg>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-5 xxl:grid-cols-4 gap-12 xl:gap-40 2xl:gap-16 px-0 py-6">
        <div @click="selectItem('c9', '1')"
             :class="{ 'border-amber-400 border-8' : selectedGroupItem['c9'] == '1' }"
             class="relative border-2 border-gray-300 rounded h-36 w-48 bg-white hover:bg-gray-200">
          <div class="bg-gray-200 h-8 w-full">
            <div class="text-center my-1 font-bold">
              Gleitlack
            </div>
          </div>
          <div v-if="selectedGroupItem['c9'] == '1'" class="absolute bottom-1 right-2 fill-green-500">
            <svg width="1.6em" height="1.6em" viewBox="0 0 32 32">
              <path
                  d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm-2 19.59l-5-5L10.59 15L14 18.41L21.41 11l1.596 1.586Z">
              </path>
              <path fill="none" d="m14 21.591l-5-5L10.591 15L14 18.409L21.41 11l1.595 1.585L14 21.591z">
              </path>
            </svg>
          </div>
        </div>
        <div @click="selectItem('c9', '2')"
             :class="{ 'border-amber-400 border-8' : selectedGroupItem['c9'] == '2' }"
             class="relative border-2 border-gray-300 rounded h-36 w-48 bg-white hover:bg-gray-200">
          <div class="bg-gray-200 h-8 w-full">
            <div class="text-center my-1 font-bold">
              Korrosionsschutz
            </div>
          </div>
          <div v-if="selectedGroupItem['c9'] == '2'" class="absolute bottom-1 right-2 fill-green-500">
            <svg width="1.6em" height="1.6em" viewBox="0 0 32 32">
              <path
                  d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm-2 19.59l-5-5L10.59 15L14 18.41L21.41 11l1.596 1.586Z">
              </path>
              <path fill="none" d="m14 21.591l-5-5L10.591 15L14 18.409L21.41 11l1.595 1.585L14 21.591z">
              </path>
            </svg>
          </div>
        </div>
        <div @click="selectItem('c9', '3')"
             :class="{ 'border-amber-400 border-8' : selectedGroupItem['c9'] == '3' }"
             class="relative border-2 border-gray-300 rounded h-36 w-48 bg-white hover:bg-gray-200">
          <div class="bg-gray-200 h-8 w-full">
            <div class="text-center my-1 font-bold">
              functional pulver
            </div>
          </div>
          <div v-if="selectedGroupItem['c9'] == '3'" class="absolute bottom-1 right-2 fill-green-500">
            <svg width="1.6em" height="1.6em" viewBox="0 0 32 32">
              <path
                  d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm-2 19.59l-5-5L10.59 15L14 18.41L21.41 11l1.596 1.586Z">
              </path>
              <path fill="none" d="m14 21.591l-5-5L10.591 15L14 18.409L21.41 11l1.595 1.585L14 21.591z">
              </path>
            </svg>
          </div>
        </div>
        <div @click="selectItem('c9', '4')"
             :class="{ 'border-amber-400 border-8' : selectedGroupItem['c9'] == '4' }"
             class="relative border-2 border-gray-300 rounded h-36 w-48 bg-white hover:bg-gray-200">
          <div class="bg-gray-200 h-8 w-full">
            <div class="text-center my-1 font-bold">
              functional decorative
            </div>
          </div>
          <div v-if="selectedGroupItem['c9'] == '4'" class="absolute bottom-1 right-2 fill-green-500">
            <svg width="1.6em" height="1.6em" viewBox="0 0 32 32">
              <path
                  d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm-2 19.59l-5-5L10.59 15L14 18.41L21.41 11l1.596 1.586Z">
              </path>
              <path fill="none" d="m14 21.591l-5-5L10.591 15L14 18.409L21.41 11l1.595 1.585L14 21.591z">
              </path>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-between mt-4">
      <button @click="$emit('changePage', 1)" class="bg-amber-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded mr-6">back</button>
      <button @click="$emit('changePage', 3)" class="bg-amber-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded">next</button>
    </div>
  </div>
  <div v-if="globalPage == 3">

    <div class="flex">
      <div class="w-full overflow-hidden">
        <div class="text-xl text-white pt-3">
          <span class="font-InterExtraBold">page 3 | ceramHEO®</span>
          <span class="font-normal text-[16px] pl-4">{{ selectedGroupItem }}</span>
        </div>

        <div class="grid grid-cols-5 xxl:grid-cols-4 gap-12 xl:gap-40 2xl:gap-16 px-0 py-6">
          <div @click="selectItem('c7', '1')"
               :class="{ 'border-amber-400 border-8' : selectedGroupItem['c7'] == '1' }"
               class="relative border-2 border-gray-300 rounded h-36 w-48 bg-white hover:bg-gray-200">
            <div class="bg-gray-200 h-8 w-full">
              <div class="text-center my-1 font-bold">
                Gleitlack
              </div>
            </div>
            <div v-if="selectedGroupItem['c7'] == '1'" class="absolute bottom-1 right-2 fill-green-500">
              <svg width="1.6em" height="1.6em" viewBox="0 0 32 32">
                <path
                    d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm-2 19.59l-5-5L10.59 15L14 18.41L21.41 11l1.596 1.586Z">
                </path>
                <path fill="none" d="m14 21.591l-5-5L10.591 15L14 18.409L21.41 11l1.595 1.585L14 21.591z">
                </path>
              </svg>
            </div>
          </div>
          <div @click="selectItem('c7', '2')"
               :class="{ 'border-amber-400 border-8' : selectedGroupItem['c7'] == '2' }"
               class="relative border-2 border-gray-300 rounded h-36 w-48 bg-white hover:bg-gray-200">
            <div class="bg-gray-200 h-8 w-full">
              <div class="text-center my-1 font-bold">
                Korrosionsschutz
              </div>
            </div>
            <div v-if="selectedGroupItem['c7'] == '2'" class="absolute bottom-1 right-2 fill-green-500">
              <svg width="1.6em" height="1.6em" viewBox="0 0 32 32">
                <path
                    d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm-2 19.59l-5-5L10.59 15L14 18.41L21.41 11l1.596 1.586Z">
                </path>
                <path fill="none" d="m14 21.591l-5-5L10.591 15L14 18.409L21.41 11l1.595 1.585L14 21.591z">
                </path>
              </svg>
            </div>
          </div>
          <div @click="selectItem('c7', '3')"
               :class="{ 'border-amber-400 border-8' : selectedGroupItem['c7'] == '3' }"
               class="relative border-2 border-gray-300 rounded h-36 w-48 bg-white hover:bg-gray-200">
            <div class="bg-gray-200 h-8 w-full">
              <div class="text-center my-1 font-bold">
                functional pulver
              </div>
            </div>
            <div v-if="selectedGroupItem['c7'] == '3'" class="absolute bottom-1 right-2 fill-green-500">
              <svg width="1.6em" height="1.6em" viewBox="0 0 32 32">
                <path
                    d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm-2 19.59l-5-5L10.59 15L14 18.41L21.41 11l1.596 1.586Z">
                </path>
                <path fill="none" d="m14 21.591l-5-5L10.591 15L14 18.409L21.41 11l1.595 1.585L14 21.591z">
                </path>
              </svg>
            </div>
          </div>
          <div @click="selectItem('c7', '4')"
               :class="{ 'border-amber-400 border-8' : selectedGroupItem['c7'] == '4' }"
               class="relative border-2 border-gray-300 rounded h-36 w-48 bg-white hover:bg-gray-200">
            <div class="bg-gray-200 h-8 w-full">
              <div class="text-center my-1 font-bold">
                functional decorative
              </div>
            </div>
            <div v-if="selectedGroupItem['c7'] == '4'" class="absolute bottom-1 right-2 fill-green-500">
              <svg width="1.6em" height="1.6em" viewBox="0 0 32 32">
                <path
                    d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm-2 19.59l-5-5L10.59 15L14 18.41L21.41 11l1.596 1.586Z">
                </path>
                <path fill="none" d="m14 21.591l-5-5L10.591 15L14 18.409L21.41 11l1.595 1.585L14 21.591z">
                </path>
              </svg>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-5 xxl:grid-cols-4 gap-12 xl:gap-40 2xl:gap-16 px-0 py-6">
          <div @click="selectItem('c7', '1')"
               :class="{ 'border-amber-400 border-8' : selectedGroupItem['c7'] == '1' }"
               class="relative border-2 border-gray-300 rounded h-36 w-48 bg-white hover:bg-gray-200">
            <div class="bg-gray-200 h-8 w-full">
              <div class="text-center my-1 font-bold">
                Gleitlack
              </div>
            </div>
            <div v-if="selectedGroupItem['c7'] == '1'" class="absolute bottom-1 right-2 fill-green-500">
              <svg width="1.6em" height="1.6em" viewBox="0 0 32 32">
                <path
                    d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm-2 19.59l-5-5L10.59 15L14 18.41L21.41 11l1.596 1.586Z">
                </path>
                <path fill="none" d="m14 21.591l-5-5L10.591 15L14 18.409L21.41 11l1.595 1.585L14 21.591z">
                </path>
              </svg>
            </div>
          </div>
          <div @click="selectItem('c7', '2')"
               :class="{ 'border-amber-400 border-8' : selectedGroupItem['c7'] == '2' }"
               class="relative border-2 border-gray-300 rounded h-36 w-48 bg-white hover:bg-gray-200">
            <div class="bg-gray-200 h-8 w-full">
              <div class="text-center my-1 font-bold">
                Korrosionsschutz
              </div>
            </div>
            <div v-if="selectedGroupItem['c7'] == '2'" class="absolute bottom-1 right-2 fill-green-500">
              <svg width="1.6em" height="1.6em" viewBox="0 0 32 32">
                <path
                    d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm-2 19.59l-5-5L10.59 15L14 18.41L21.41 11l1.596 1.586Z">
                </path>
                <path fill="none" d="m14 21.591l-5-5L10.591 15L14 18.409L21.41 11l1.595 1.585L14 21.591z">
                </path>
              </svg>
            </div>
          </div>
          <div @click="selectItem('c7', '3')"
               :class="{ 'border-amber-400 border-8' : selectedGroupItem['c7'] == '3' }"
               class="relative border-2 border-gray-300 rounded h-36 w-48 bg-white hover:bg-gray-200">
            <div class="bg-gray-200 h-8 w-full">
              <div class="text-center my-1 font-bold">
                functional pulver
              </div>
            </div>
            <div v-if="selectedGroupItem['c7'] == '3'" class="absolute bottom-1 right-2 fill-green-500">
              <svg width="1.6em" height="1.6em" viewBox="0 0 32 32">
                <path
                    d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm-2 19.59l-5-5L10.59 15L14 18.41L21.41 11l1.596 1.586Z">
                </path>
                <path fill="none" d="m14 21.591l-5-5L10.591 15L14 18.409L21.41 11l1.595 1.585L14 21.591z">
                </path>
              </svg>
            </div>
          </div>
          <div @click="selectItem('c7', '4')"
               :class="{ 'border-amber-400 border-8' : selectedGroupItem['c7'] == '4' }"
               class="relative border-2 border-gray-300 rounded h-36 w-48 bg-white hover:bg-gray-200">
            <div class="bg-gray-200 h-8 w-full">
              <div class="text-center my-1 font-bold">
                functional decorative
              </div>
            </div>
            <div v-if="selectedGroupItem['c7'] == '4'" class="absolute bottom-1 right-2 fill-green-500">
              <svg width="1.6em" height="1.6em" viewBox="0 0 32 32">
                <path
                    d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm-2 19.59l-5-5L10.59 15L14 18.41L21.41 11l1.596 1.586Z">
                </path>
                <path fill="none" d="m14 21.591l-5-5L10.591 15L14 18.409L21.41 11l1.595 1.585L14 21.591z">
                </path>
              </svg>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-5 xxl:grid-cols-4 gap-12 xl:gap-40 2xl:gap-16 px-0 py-6">
          <div @click="selectItem('c7', '1')"
               :class="{ 'border-amber-400 border-8' : selectedGroupItem['c7'] == '1' }"
               class="relative border-2 border-gray-300 rounded h-36 w-48 bg-white hover:bg-gray-200">
            <div class="bg-gray-200 h-8 w-full">
              <div class="text-center my-1 font-bold">
                Gleitlack
              </div>
            </div>
            <div v-if="selectedGroupItem['c7'] == '1'" class="absolute bottom-1 right-2 fill-green-500">
              <svg width="1.6em" height="1.6em" viewBox="0 0 32 32">
                <path
                    d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm-2 19.59l-5-5L10.59 15L14 18.41L21.41 11l1.596 1.586Z">
                </path>
                <path fill="none" d="m14 21.591l-5-5L10.591 15L14 18.409L21.41 11l1.595 1.585L14 21.591z">
                </path>
              </svg>
            </div>
          </div>
          <div @click="selectItem('c7', '2')"
               :class="{ 'border-amber-400 border-8' : selectedGroupItem['c7'] == '2' }"
               class="relative border-2 border-gray-300 rounded h-36 w-48 bg-white hover:bg-gray-200">
            <div class="bg-gray-200 h-8 w-full">
              <div class="text-center my-1 font-bold">
                Korrosionsschutz
              </div>
            </div>
            <div v-if="selectedGroupItem['c7'] == '2'" class="absolute bottom-1 right-2 fill-green-500">
              <svg width="1.6em" height="1.6em" viewBox="0 0 32 32">
                <path
                    d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm-2 19.59l-5-5L10.59 15L14 18.41L21.41 11l1.596 1.586Z">
                </path>
                <path fill="none" d="m14 21.591l-5-5L10.591 15L14 18.409L21.41 11l1.595 1.585L14 21.591z">
                </path>
              </svg>
            </div>
          </div>
          <div @click="selectItem('c7', '3')"
               :class="{ 'border-amber-400 border-8' : selectedGroupItem['c7'] == '3' }"
               class="relative border-2 border-gray-300 rounded h-36 w-48 bg-white hover:bg-gray-200">
            <div class="bg-gray-200 h-8 w-full">
              <div class="text-center my-1 font-bold">
                functional pulver
              </div>
            </div>
            <div v-if="selectedGroupItem['c7'] == '3'" class="absolute bottom-1 right-2 fill-green-500">
              <svg width="1.6em" height="1.6em" viewBox="0 0 32 32">
                <path
                    d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm-2 19.59l-5-5L10.59 15L14 18.41L21.41 11l1.596 1.586Z">
                </path>
                <path fill="none" d="m14 21.591l-5-5L10.591 15L14 18.409L21.41 11l1.595 1.585L14 21.591z">
                </path>
              </svg>
            </div>
          </div>
          <div @click="selectItem('c7', '4')"
               :class="{ 'border-amber-400 border-8' : selectedGroupItem['c7'] == '4' }"
               class="relative border-2 border-gray-300 rounded h-36 w-48 bg-white hover:bg-gray-200">
            <div class="bg-gray-200 h-8 w-full">
              <div class="text-center my-1 font-bold">
                functional decorative
              </div>
            </div>
            <div v-if="selectedGroupItem['c7'] == '4'" class="absolute bottom-1 right-2 fill-green-500">
              <svg width="1.6em" height="1.6em" viewBox="0 0 32 32">
                <path
                    d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm-2 19.59l-5-5L10.59 15L14 18.41L21.41 11l1.596 1.586Z">
                </path>
                <path fill="none" d="m14 21.591l-5-5L10.591 15L14 18.409L21.41 11l1.595 1.585L14 21.591z">
                </path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <aside class="h-auto w-[360px] space border-l border-gray-300 bg-gray-300">
        <section class="w-full hidden bg-white lg:block">
          <div class="w-full h-[50px] border-b border-gray-400 cursor-pointer">
            <nuxt-link to="/coatingai" class="flex items-center space-x-2">
              <div class="pl-1 fill-amber-500 cursor-pointer">
              </div>
              <div class="text-left font-bold text-[14px] leading-4 py-4">
                <span class="">Beschichtungsempfehlungen</span>
              </div>
            </nuxt-link>
          </div>
          <div class="">
            <nuxt-link to="/1/anewe" class="pb-2">
              <div class="border-b border-gray-500 hover:bg-yellow-400 pt-4 cursor-pointer">
                <div class="text-left font-bold text-[14px] leading-4 pb-2 pl-2">
                  <span class="">1. BE2202-001</span>
                </div>
                <div class="flex flex-row text-left text-[14px] leading-4 pb-4 pl-2">
                  <span class="w-9/12 pt-4">BE2202-001</span>
                  <div class="w-3/12">
                    <img class="w-[66%] object-right" src="/img/demo/circular-progress-bar01.png" alt="" />
                  </div>

                </div>
              </div>
            </nuxt-link>
            <nuxt-link to="/1/anewe" class="pb-2">
              <div class="border-b border-gray-500 hover:bg-yellow-400 pt-4 cursor-pointer">
                <div class="text-left font-bold text-[14px] leading-4 pb-2 pl-2">
                  <span class="">2. BE2202-002</span>
                </div>
                <div class="flex flex-row text-left text-[14px] leading-4 pb-4 pl-2">
                  <div class="w-9/12 pt-2">

                    <div class="text-[12px] pt-1 text-gray-600">Korrosionsschutz Zink-Nickel</div>
                    <div class="text-[12px] pt-1 text-gray-600">Gleitlack TC2000</div>
                  </div>
                  <div class="w-3/12">
                    <img class="w-[66%] object-right" src="/img/demo/circular-progress-bar01.png" alt="" />
                  </div>

                </div>
              </div>
            </nuxt-link>
          </div>
        </section>
      </aside>
    </div>
    <div class="flex justify-start">
      <button @click="globalPage = 2" class="bg-amber-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded mr-6 mt-4">back</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["globalPage", "selectedGroupItem"])
const { globalPage, selectedGroupItem } = toRefs(props)
</script>
