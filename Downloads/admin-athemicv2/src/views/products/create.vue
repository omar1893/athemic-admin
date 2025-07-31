<template>
  <div class="max-w-2xl mx-auto py-8">
    <BackButton></BackButton>
    <div class="items-center mb-5 flex justify-between">
      <div class="monserrat text-2xl font-semibold">{{ isEditing ? 'Editar producto' : 'Nuevo producto' }}</div>
      <div class="monserrat">
        <span class="m-5 font-semibold text-[#170033] text-sm">cancelar</span>
        <button type="submit"
          class="px-4 py-3 rounded-full text-white text-sm font-semibold bg-[#875EF8] disabled:bg-[#875EF859] disabled:text-white disabled:cursor-not-allowed">
          {{ isEditing ? 'Actualizar Producto' : 'Crear Producto' }}
        </button>
      </div>
    </div>

    <div v-if="loading" class="flex items-center justify-center py-8">
      <span class="text-lg text-gray-500">Cargando...</span>
    </div>
    <ProductForm v-else :initial-data="productData" :is-editing="isEditing" @submit="handleSubmit" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import BackButton from '@/components/BackButton.vue'
import ProductForm from '@/components/ProductForm.vue'
import { productsService } from '@/services/productsService'
import { useSellerStore } from '@/stores/sellerStore'

const route = useRoute()
const router = useRouter()
const sellerStore = useSellerStore()

const loading = ref(false)
const productData = ref(null)

const productId = route.params.id
const isEditing = computed(() => !!productId)

const fetchProduct = async () => {
  if (!productId) return

  try {
    loading.value = true
    const token = localStorage.getItem('accessToken')
    const response = await productsService.getById(productId, {
      headers: { Authorization: `Bearer ${token}` }
    })

    if (response.data) {
      productData.value = {
        name: response.data.nombre,
        description: response.data.descripcion,
        price: response.data.precio,
        quantity: response.data.contadorCarrito || 0,
        tagIds: response.data.tagIds || [],
        menuImage: response.data.menuImage || '',
        detailImages: response.data.detailImages || []
      }
    }
  } catch (error) {
    console.error('Error fetching product:', error)
    alert('Error al cargar el producto')
    router.push({ name: 'products' })
  } finally {
    loading.value = false
  }
}

const handleSubmit = async (product) => {
  try {
    const token = localStorage.getItem('accessToken')
    const sellerId = sellerStore.seller?.id
    if (!token || !sellerId) throw new Error('No autenticado')

    const payload = {
      nombre: product.name,
      precio: product.price,
      sellerId,
      tagIds: product.tagIds || [],
      descripcion: product.description,
      menuImage: product.menuImage || '',
      detailImages: product.detailImages || []
    }

    if (isEditing.value) {
      // Update existing product
      await productsService.update(productId, payload, {
        headers: { Authorization: `Bearer ${token}` }
      })
      alert('Producto actualizado correctamente')
    } else {
      // Create new product
      await productsService.create(payload, {
        headers: { Authorization: `Bearer ${token}` }
      })
      alert('Producto creado correctamente')
    }

    router.push({ name: 'products' })
  } catch (e) {
    console.error('Error saving product:', e)
    alert(isEditing.value ? 'Error al actualizar el producto' : 'Error al crear el producto')
  }
}

onMounted(() => {
  if (isEditing.value) {
    fetchProduct()
  }
})
</script>