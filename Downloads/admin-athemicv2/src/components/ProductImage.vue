<template>
  <div>
    <img v-if="src" :src="src" :alt="alt" class="w-20 h-20 rounded object-cover bg-gray-100" />
    <span v-else class="inline-flex items-center justify-center w-20 h-20 rounded-xl bg-gray-100 text-gray-400">
      <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M4 16l4-4a3 3 0 0 1 4 0l4 4"/></svg>
    </span>
  </div>
</template>

<script setup>
const props = defineProps({
  src: String,
  alt: { type: String, default: 'Producto' }
})
</script> 