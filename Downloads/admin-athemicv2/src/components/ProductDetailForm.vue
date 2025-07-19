<template>
  <form class="flex flex-col gap-6 bg-white p-8 sm:p-8 p-4 rounded-xl" @submit.prevent>
    <div>
      <label for="product-name" class="block text-sm font-medium text-gray-700 mb-1">Nombre del Producto<span class="text-red-500">*</span></label>
      <input id="product-name" v-model="form.name" type="text" required disabled :class="inputClass" />
    </div>
    <div>
      <label for="product-description" class="block text-sm font-medium text-gray-700 mb-1">Descripción<span class="text-red-500">*</span></label>
      <textarea id="product-description" v-model="form.description" required rows="4" disabled :class="inputClass" />
    </div>
    <div class="flex flex-col sm:flex-row gap-4">
      <div class="flex-1">
        <label for="product-price" class="block text-sm font-medium text-gray-700 mb-1">Precio<span class="text-red-500">*</span></label>
        <div class="relative">
          <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">€</span>
          <input id="product-price" v-model.number="form.price" type="number" step="0.01" min="0" required disabled :class="['pl-8', inputClass]" />
        </div>
      </div>
      <div class="flex-1">
        <label for="product-quantity" class="block text-sm font-medium text-gray-700 mb-1">Cantidad<span class="text-red-500">*</span></label>
        <div class="relative">
          <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">#</span>
          <input id="product-quantity" v-model.number="form.quantity" type="number" min="0" required disabled :class="['pl-8', inputClass]" />
        </div>
      </div>
    </div>
    <div>
      <label for="product-store" class="block text-sm font-medium text-gray-700 mb-1">Tienda<span class="text-red-500">*</span></label>
      <select id="product-store" v-model="form.store" required disabled :class="inputClass">
        <option v-for="store in stores" :key="store" :value="store">{{ store }}</option>
      </select>
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">Imágenes del Producto<span class="text-red-500">*</span></label>
      <ProductImageCarousel :images="form.images" />
    </div>
    <div>
      <label class="flex items-center gap-2 cursor-pointer select-none">
        <input type="checkbox" v-model="form.hasDiscount" class="accent-indigo-600" disabled>
        <span class="text-sm font-medium text-gray-700">Agregar Descuento</span>
      </label>
      <DiscountFields v-if="form.hasDiscount" v-model:percentage="form.discountPercentage" v-model:expiration="form.discountExpiration" :show="true" :readonly="true" />
    </div>
    <button type="button" class="w-full mt-4 px-4 py-3 rounded-md bg-indigo-600 text-white text-lg font-bold hover:bg-indigo-700 transition disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed" @click="$emit('edit')">
      Editar Producto
    </button>
  </form>
</template>
<script setup>
import { ref } from 'vue'
import ProductImageCarousel from './ProductImageCarousel.vue'
import DiscountFields from './DiscountFields.vue'
const props = defineProps({
  product: { type: Object, required: true },
  stores: { type: Array, default: () => [] }
})
const form = ref({ ...props.product })
const inputClass = 'block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm'
</script> 