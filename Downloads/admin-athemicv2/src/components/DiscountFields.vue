<template>
  <div v-if="show" class="flex flex-col sm:flex-row gap-4 mt-4">
    <div class="flex-1">
      <label for="discount-percentage" class="block text-sm font-semibold text-[#170033] mb-1">Porcentaje de descuento</label>
      <input id="discount-percentage" type="number" min="0" max="100" placeholder="Ej: %34" class="block w-full rounded-[16px] border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-300" v-model.number="percentageProxy" />
    </div>
    <div class="flex-1">
      <label for="discount-expiration" class="block text-sm font-semibold text-[#170033] mb-1">Fecha de Expiración</label>
      <div>
        <input id="discount-expiration" type="date" placeholder="dd/mm/yyyy" class="block w-full rounded-[16px] border border-gray-300 pl-3 pr-3 py-2 text-gray-300 placeholder-gray-300" v-model="expirationProxy" />
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