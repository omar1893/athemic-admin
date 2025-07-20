<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import ProductTable from '@/components/ProductTable.vue'
import ProductFilters from '@/components/ProductFilters.vue'
import { productsService } from '@/services/productsService'
import { useSellerStore } from '@/stores/sellerStore'

const router = useRouter()
const sellerStore = useSellerStore()

const allProducts = ref([])
const loading = ref(true)
const currentPage = ref(1)
const totalPages = ref(1)
const totalProducts = ref(0)

const search = ref('')
const store = ref('')
const stores = computed(() => Array.from(new Set(allProducts.value.map(p => p.store))))

const filteredProducts = computed(() => {
  return allProducts.value.filter(p => {
    const matchesSearch = search.value === '' || p.nombre.toLowerCase().includes(search.value.toLowerCase())
    const matchesStore = store.value === '' || p.store === store.value
    return matchesSearch && matchesStore
  })
})

function handleRowClick(product) {
  console.log('Product clicked:', product)
  router.push({ name: 'productEdit', params: { id: product.id } })
}

function goToCreate() {
  router.push('/products/create')
}

async function fetchProducts(page = 1) {
  loading.value = true
  const token = localStorage.getItem('accessToken')
  const sellerId = sellerStore.seller?.id

  if (!token || !sellerId) return
  
  try {
    const params = {
      sellerId,
      page,
      limit: 20
    }
    
    const res = await productsService.getAll(params, { Authorization: `Bearer ${token}` })
    
    allProducts.value = res.data.productos.map(product => ({
      id: product.id,
      name: product.nombre,
      price: product.precio,
      quantity: product.contadorCarrito || 0,
      image: '',
      store: 'Tienda',
      status: product.isActive ? 'Disponible' : 'No disponible'
    }))
    
    currentPage.value = res.data.paginaActual
    totalPages.value = res.data.totalPaginas
    totalProducts.value = res.data.totalProductos
  } catch (e) {
    console.error('Error fetching products:', e)
    allProducts.value = []
  } finally {
    loading.value = false
  }
}

function goToPage(page) {
  if (page >= 1 && page <= totalPages.value) {
    fetchProducts(page)
  }
}

onMounted(() => {
  fetchProducts()
})
</script>

<template>
  <section class="orders-enhanced-container">
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-2xl font-bold text-gray-900">Productos</h1>
      <button @click="goToCreate" class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2 rounded-lg shadow-sm flex items-center gap-2 transition">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4"/></svg>
        Agregar Producto
      </button>
    </div>
    <ProductFilters
      :stores="stores"
      v-model:search="search"
      v-model:store="store"
      search-placeholder="Buscar productos..."
    />
    <ProductTable :products="filteredProducts" @row-click="handleRowClick" />
    <div class="orders-enhanced-pagination mt-4">
      <button @click="goToPage(currentPage - 1)" :disabled="currentPage <= 1">&lt;</button>
      <button 
        v-for="page in totalPages" 
        :key="page"
        @click="goToPage(page)"
        :class="{ active: page === currentPage }"
      >
        {{ page }}
      </button>
      <button @click="goToPage(currentPage + 1)" :disabled="currentPage >= totalPages">&gt;</button>
    </div>
    <div class="orders-enhanced-summary">
      Mostrando {{ filteredProducts.length }} de {{ totalProducts }} productos
    </div>
  </section>
</template> 