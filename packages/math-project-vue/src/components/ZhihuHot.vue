<script lang="ts" setup>
import type { ZhiHuHot, ZhiHuHotList } from '../types/zhihu'
import { onMounted, ref } from 'vue'

const list = ref<ZhiHuHot[]>([])

const getData = async () => {
  const url = '/api/v3/feed/topstory/hot-lists/total'
  const response = await fetch(url)
  const res: ZhiHuHotList = await response.json()
  list.value = res.data
}

onMounted(() => {
  getData()
})

const toggleHot = (id: number) => {
  window.open(`https://www.zhihu.com/question/${id}`)
}
</script>

<template>
  <div class="flex flex-col gap-4 p-4">
    <section v-for="(item, index) in list" :key="item.id" class="relative flex cursor-pointer items-start border border-green-200 rounded-lg bg-green-100 p-4 shadow-sm transition-all duration-300 hover:bg-green-200 hover:shadow-md" @click="toggleHot(item.target.id)">
      <img :src="item.children[0].thumbnail" alt="" class="mr-4 h-20 w-20 rounded-md object-cover">
      <div class="flex flex-1 items-start">
        <span class="mr-4 text-gray-800 font-bold">{{ index + 1 }}</span>
        <div class="flex-1 break-words">
          <h1 class="line-clamp-2 mb-2 overflow-hidden whitespace-normal break-words text-left text-lg text-gray-800 font-bold">
            {{ item.target.excerpt }}
          </h1>
          <p class="text-indent-4 mb-2 min-h-20 overflow-hidden whitespace-normal break-words text-left text-base text-gray-600">
            {{ item.target.excerpt }}
          </p>
          <div class="min-h-10 whitespace-normal break-words text-left text-sm text-gray-500">
            {{ item.detail_text }}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


