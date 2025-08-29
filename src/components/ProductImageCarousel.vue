<template>
  <div class="relative w-full flex items-center justify-center gap-4">
    <button type="button" @click="prev" :disabled="currentIndex === 0" class="absolute left-0 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-gray-100 transition disabled:opacity-30" style="z-index:2;">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
    </button>
    <div class="flex gap-4 overflow-x-auto py-2">
      <div v-for="(img, i) in images" :key="i" v-show="i === currentIndex" class="relative">
        <img :src="img" :alt="`Imagen ${i+1}`" class="w-32 h-32 object-cover rounded-lg border border-gray-200" />
      </div>
    </div>
    <button type="button" @click="next" :disabled="currentIndex === images.length - 1" class="absolute right-0 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-gray-100 transition disabled:opacity-30" style="z-index:2;">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
    </button>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const props = defineProps({
  images: { type: Array, required: true }
})
const currentIndex = ref(0)
function prev() {
  if (currentIndex.value > 0) currentIndex.value--
}
function next() {
  if (currentIndex.value < props.images.length - 1) currentIndex.value++
}
</script> 