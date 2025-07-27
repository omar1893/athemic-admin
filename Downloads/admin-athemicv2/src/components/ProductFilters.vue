<template>
  <div class="orders-enhanced-filters flex justify-between">
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