<script setup lang="ts">
import { Person } from '@w4ng3/tools'
import dayjs from 'dayjs'
import { onMounted } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import ZhihuHot from './components/ZhihuHot.vue'
import { useDark } from './composables/useDark'

const { enableDarkMode, disableDarkMode, applySavedTheme } = useDark()
const p = new Person('Junmping', 'math')
onMounted(() => {
  applySavedTheme()
})
</script>

<template>
  <div class="p-5 dark:bg-dark-500">
    <div class="mb-4 flex justify-center gap-5">
      <button class="rounded bg-light-500 px-4 py-2 text-dark-700 hover:bg-light-700" @click="disableDarkMode">
        Light
      </button>
      <button class="rounded bg-dark-700 px-4 py-2 text-white hover:bg-dark-500" @click="enableDarkMode">
        Dark
      </button>
    </div>
    <section class="grid grid-cols-3 w-800px items-center gap-2 rounded-md bg-yellow-300 p-4">
      <div class="h-10 flex items-center justify-center bg-pink-300">
        1
      </div>
      <div class="h-10 flex items-center justify-center bg-sky-300">
        2
      </div>
      <div class="h-10 flex items-center justify-center bg-green-300">
        3
      </div>
      <div class="h-10 flex items-center justify-center bg-purple-300">
        4
      </div>
      <div class="i-carbon-3d-print-mesh h-10" />
      <div class="h-10 bg-amber-400 md:bg-blue-500 sm:bg-blue-300" />
    </section>
    <div class="mt-4 text-gray-700">
      当前时间 {{ dayjs().format('YYYY年MM月DD日 HH:mm:ss') }}
    </div>
    <div class="mt-2 text-gray-700">
      {{ p.name }} : {{ p.slogan }}
    </div>
    <div class="mt-4 flex gap-4">
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo h-24 w-24" alt="Vite logo">
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo h-24 w-24" alt="Vue logo">
      </a>
    </div>
    <HelloWorld msg="Vite + Vue" />
    <ZhihuHot />
  </div>
</template>

<style scoped>
.logo {
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
