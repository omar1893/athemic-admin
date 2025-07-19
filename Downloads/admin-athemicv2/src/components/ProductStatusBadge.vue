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
    return 'orders-enhanced-badge entregado';
  }
  // Puedes agregar más estados si es necesario
  return 'orders-enhanced-badge';
})
</script> 