<template>
  <div class="overflow-x-auto">
    <table class="orders-enhanced-table">
      <thead>
        <tr>
          <th>Imagen</th>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>Tienda</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
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