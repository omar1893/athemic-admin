<template>
  <tr class="text-center product-row cursor-pointer" @click="$emit('click', product)">
    <td class="px-1 py-1">
      <ProductImage :src="product.image" :alt="product.name" />
    </td>
    <td>{{ product.name }}</td>
    <td>
      <span>{{ product.quantity }}</span>
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