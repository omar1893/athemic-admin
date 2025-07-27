<template>
  <span :class="badgeClass">
    <slot />
  </span>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  status: { type: String, required: true }
})
const badgeClass = computed(() => {
  if (props.status === 'Disponible') {
    return 'px-2 py-1 rounded-full border-1 bg-green-100 text-green-600 entregado';
  }
  // Puedes agregar más estados si es necesario
  return 'orders-enhanced-badge';
})
</script> 