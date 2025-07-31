<template>
  <div
    class="rounded-[16px] flex flex-col items-center justify-center border-3 border-dashed border-gray-100 p-6 cursor-pointer"
    tabindex="0"
    @click="openFileDialog"
    @keydown.enter.prevent="openFileDialog"
    @keydown.space.prevent="openFileDialog"
  >
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.3027 18V14M14.3027 14V10M14.3027 14H10.3027M14.3027 14H18.3027M14.3027 26C10.5752 26 8.71144 26 7.24127 25.391C5.28104 24.5791 3.72365 23.0217 2.9117 21.0615C2.30273 19.5913 2.30273 17.7275 2.30273 14C2.30273 10.2725 2.30273 8.4087 2.9117 6.93853C3.72365 4.97831 5.28104 3.42092 7.24127 2.60896C8.71144 2 10.5752 2 14.3027 2C18.0303 2 19.894 2 21.3642 2.60896C23.3244 3.42092 24.8818 4.97831 25.6938 6.93853C26.3027 8.4087 26.3027 10.2725 26.3027 14C26.3027 17.7275 26.3027 19.5913 25.6938 21.0615C24.8818 23.0217 23.3244 24.5791 21.3642 25.391C19.894 26 18.0303 26 14.3027 26Z" stroke="#170033" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    <span class="text-base font-medium text-gray-500 mb-2">Click para agregar imagen</span>
    <input ref="fileInput" type="file" multiple class="hidden" @change="onFilesChange" />
    <div v-if="previews.length" class="flex gap-2 mt-2">
      <img v-for="(src, i) in previews" :key="i" :src="src" class="w-20 h-20 bg-gray-200 rounded object-cover" />
    </div>
    <!-- <div v-else class="w-20 h-20 bg-gray-200 rounded mt-2 flex items-center justify-center text-gray-400 text-xs">Preview</div> -->
  </div>
</template>
<script setup>
import { ref } from 'vue'
const emit = defineEmits(['update:files'])
const fileInput = ref(null)
const previews = ref([])
function openFileDialog() {
  fileInput.value && fileInput.value.click()
}
function onFilesChange(e) {
  const files = Array.from(e.target.files)
  previews.value = []
  files.forEach(file => {
    const reader = new FileReader()
    reader.onload = ev => previews.value.push(ev.target.result)
    reader.readAsDataURL(file)
  })
  emit('update:files', files)
}
</script> 