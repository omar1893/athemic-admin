<template>
  <div class="max-w-2xl mx-auto pt-10 mb-16">
    <BackButton>Volver a productos</BackButton>
    <h1 class="text-3xl font-extrabold text-gray-900 mb-8">Detalle del Producto</h1>
    <ProductDetailForm :product="product" :stores="stores" />
  </div>
</template>

<script setup>
import BackButton from '@/components/BackButton.vue'
import ProductDetailForm from '@/components/ProductDetailForm.vue'

const product = {
  name: 'Zapatos Running',
  description: 'Zapatillas cómodas para correr en exteriores',
  price: 89.99,
  quantity: 25,
  store: 'Tienda Central',
  images: [
    'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=200&q=80',
    'https://images.unsplash.com/photo-1526178613658-3f1622045557?auto=format&fit=crop&w=200&q=80',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80',
  ],
  hasDiscount: true,
  discountPercentage: 15,
  discountExpiration: '2025-09-30',
}
const stores = ['Tienda Central', 'Tienda Norte', 'Tienda Sur']
</script> 