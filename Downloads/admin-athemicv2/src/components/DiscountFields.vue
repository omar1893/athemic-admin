<template>
  <div v-if="show" class="flex flex-col sm:flex-row gap-4 mt-4">
    <div class="flex-1">
      <label for="discount-percentage" class="block text-sm font-medium text-gray-700 mb-1">Porcentaje (%)<span class="text-red-500">*</span></label>
      <input id="discount-percentage" type="number" min="0" max="100" placeholder="0" class="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm" v-model.number="percentageProxy" />
    </div>
    <div class="flex-1">
      <label for="discount-expiration" class="block text-sm font-medium text-gray-700 mb-1">Fecha de Expiración<span class="text-red-500">*</span></label>
      <div class="relative">
        <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M8 7V3m8 4V3m-9 8h10m-12 8V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
        </span>
        <input id="discount-expiration" type="date" placeholder="dd/mm/yyyy" class="block w-full rounded-md border border-gray-300 pl-10 pr-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm" v-model="expirationProxy" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue'
const props = defineProps({
  show: Boolean,
  percentage: Number,
  expiration: String
})
const emit = defineEmits(['update:percentage', 'update:expiration'])
const percentageProxy = computed({
  get: () => props.percentage,
  set: val => emit('update:percentage', val)
})
const expirationProxy = computed({
  get: () => props.expiration,
  set: val => emit('update:expiration', val)
})
</script> 