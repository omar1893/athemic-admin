<template>
  <div class="orders-enhanced-filters">
    <input
      type="search"
      class="flex-1 min-w-[180px]"
      :placeholder="searchPlaceholder"
      v-model="searchValue"
      @input="$emit('update:search', searchValue)"
    />
    <select class="min-w-[150px]" v-model="storeValue" @change="$emit('update:store', storeValue)">
      <option value="">Todos</option>
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