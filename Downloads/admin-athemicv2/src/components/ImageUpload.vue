<template>
  <div
    class="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 bg-gray-50 cursor-pointer hover:border-indigo-400 transition"
    tabindex="0"
    @click="openFileDialog"
    @keydown.enter.prevent="openFileDialog"
    @keydown.space.prevent="openFileDialog"
  >
    <svg class="w-10 h-10 text-gray-400 mb-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 16v-8m0 0l-4 4m4-4l4 4"/><rect x="4" y="4" width="16" height="16" rx="2"/></svg>
    <span class="text-xs text-gray-500 mb-2">Click o arrastra para agregar una o varias imágenes</span>
    <input ref="fileInput" type="file" multiple class="hidden" @change="onFilesChange" />
    <div v-if="previews.length" class="flex gap-2 mt-2">
      <img v-for="(src, i) in previews" :key="i" :src="src" class="w-20 h-20 bg-gray-200 rounded object-cover" />
    </div>
    <div v-else class="w-20 h-20 bg-gray-200 rounded mt-2 flex items-center justify-center text-gray-400 text-xs">Preview</div>
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