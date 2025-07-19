<template>
  <button type="button" @click="goBack" class="flex items-center gap-2 px-3 py-2 rounded-md bg-white border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition mb-6">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
    <slot>Volver</slot>
  </button>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function goBack() {
  router.back()
}
</script> 