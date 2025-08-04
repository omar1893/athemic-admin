<template>
  <div class="relative orders-enhanced-filters flex justify-between">
    <span class="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg class="h-4 w-4 text-[#170033]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
            stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </span>
    <input type="search" :placeholder="searchPlaceholder" v-model="searchValue"
      @input="$emit('update:search', searchValue)"
      class="monserrat placeholder:font-medium placeholder-opacity-100 border-2 border-gray-100 rounded-full placeholder:text-[#170033] py-1 px-3" />

    <select class="poppins border-2 border-gray-100 rounded-full text-[#170033] py-1 px-2"
      v-model="storeValue" @change="$emit('update:store', storeValue)">
      <option value="">Filtrar tienda</option>
      <option v-for="store in stores" :key="store" :value="store">{{ store }}</option>
    </select>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
const props = defineProps({
  stores: { type: Array, default: () => [] },
  search: String,
  store: String,
  searchPlaceholder: { type: String, default: 'Buscar productos...' }
})
const searchValue = ref(props.search || '')
const storeValue = ref(props.store || '')
watch(() => props.search, val => { searchValue.value = val })
watch(() => props.store, val => { storeValue.value = val })
</script>