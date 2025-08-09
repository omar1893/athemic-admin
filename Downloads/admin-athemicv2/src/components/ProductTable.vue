<template>
  <div class="rounded-xl overflow-hidden">
    <table class="min-w-full">
      <thead class="monserrat text-[#170033] font-semibold text-center text-base bg-[#875EF814]">
        <tr>
          <th class="px-6 py-3 font-semibold tracking-wider">Imagen</th>
          <th class="px-6 py-3 font-semibold tracking-wider">Producto</th>
          <th class="px-6 py-3 font-semibold tracking-wider">Cantidad</th>
          <th class="px-6 py-3 font-semibold tracking-wider">Precio</th>
          <th class="px-6 py-3 font-semibold tracking-wider">Tienda</th>
          <th class="px-6 py-3 font-semibold tracking-wider">Estado</th>
        </tr>
      </thead>
      <tbody class="monserrat text-[#170033] text-sm font-medium bg-white divide-y divide-gray-100 px-6 py-4 whitespace-nowrap">
        <ProductRow
          v-for="product in products"
          :key="product.id"
          :product="product"
          @click="$emit('row-click', product)"
        />
      </tbody>
    </table>
  </div>
</template>

<script setup>
import ProductRow from './ProductRow.vue'
const props = defineProps({
  products: { type: Array, required: true }
})
</script> 