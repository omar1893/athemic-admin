<template>
  <div class="max-w-2xl mx-auto py-8">
    <BackButton>Volver a productos</BackButton>
    <h1 class="text-2xl font-semibold mb-6">Crear producto</h1>
    <ProductForm @submit="handleCreate" />
  </div>
</template>

<script setup>
import BackButton from '@/components/BackButton.vue'
import ProductForm from '@/components/ProductForm.vue'
import { productsService } from '@/services/productsService'
import { useRouter } from 'vue-router'
import { useSellerStore } from '@/stores/sellerStore'

const router = useRouter()
const sellerStore = useSellerStore()

async function handleCreate(product) {
  try {
    const token = localStorage.getItem('accessToken')
    const sellerId = sellerStore.seller?.id
    if (!token || !sellerId) throw new Error('No autenticado')
    // Adaptar payload a lo que espera el endpoint
    const payload = {
      nombre: product.name,
      precio: product.price,
      sellerId,
      tagIds: product.tagIds || [],
      descripcion: product.description
    }
    await productsService.create(payload, { headers: { Authorization: `Bearer ${token}` } })
    alert('Producto creado correctamente')
    router.push({ name: 'products' })
  } catch (e) {
    alert('Error al crear el producto')
  }
}
</script> 