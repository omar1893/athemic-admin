<template>
  <div>
  <button type="button" @click="goBack" class="flex items-center gap-1 px-1 py-1 rounded-[2rem] bg-[#17003314] text-gray-700 font-medium mb-6">
    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
    <slot></slot>
  </button>
</div>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function goBack() {
  router.back()
}
</script> 