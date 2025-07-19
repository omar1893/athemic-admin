<template>
  <tr class="product-row cursor-pointer" @click="$emit('click', product)">
    <td>
      <ProductImage :src="product.image" :alt="product.name" />
    </td>
    <td>{{ product.name }}</td>
    <td>
      <span class="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 font-semibold text-sm">{{ product.quantity }}</span>
    </td>
    <td>€{{ product.price.toFixed(2) }}</td>
    <td>{{ product.store }}</td>
    <td>
      <ProductStatusBadge :status="product.status">{{ product.status }}</ProductStatusBadge>
    </td>
  </tr>
</template>

<script setup>
import ProductImage from './ProductImage.vue'
import ProductStatusBadge from './ProductStatusBadge.vue'
const props = defineProps({
  product: { type: Object, required: true }
})
</script> 