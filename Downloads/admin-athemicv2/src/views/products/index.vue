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
      <div class="poppins font-medium text-2xl mb-6 text-gray-950">Productos</div>
      <button @click="goToCreate()" class="monserrat text-sm bg-[#875EF8] disabled:bg-[#875EF859] disabled:text-white disabled:cursor-not-allowed rounded-full text-white font-semibold px-5 py-2 flex items-center gap-2">
        Nuevo Producto
      </button>
    </div>
    <div>
    <ProductFilters
      :stores="stores"
      v-model:search="search"
      v-model:store="store"
      search-placeholder="Buscar tienda"
    />
  </div>
    <ProductTable :products="filteredProducts" @row-click="handleRowClick" />
    <div class="orders-enhanced-pagination text-sm monserrat mt-4">
      <button class="text-[#170033]" @click="goToPage(currentPage - 1)" :disabled="currentPage <= 1">&lt; Anterior</button>
      <button 
        v-for="page in totalPages" 
        :key="page"
        @click="goToPage(page)"
        :class="{ active: page === currentPage }"
      >
        {{ page }}
      </button>
      <button @click="goToPage(currentPage + 1)" :disabled="currentPage >= totalPages">Siguiente &gt;</button>
    </div>
    <div class="monserrat orders-enhanced-summary">
      Mostrando {{ filteredProducts.length }} de {{ totalProducts }} productos
    </div>
  </section>
</template>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

.monserrat {
  font-family: 'Montserrat', sans-serif;
}

.poppins {
  font-family: 'Poppins', sans-serif;
}
</style>