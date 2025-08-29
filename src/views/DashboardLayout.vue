<script setup>
import Sidebar from '@/components/Sidebar.vue'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { sellersService } from '@/services/sellersService'
import { useSellerStore } from '@/stores/sellerStore'

const router = useRouter()
const sellerStore = useSellerStore()
const loading = ref(true)

onMounted(async () => {
  const token = localStorage.getItem('accessToken')
  if (!token) {
    router.replace({ name: 'login' })
    return
  }
  try {
    const res = await sellersService.getMe({ token })
    sellerStore.setSeller(res.data)
  } catch (e) {
    localStorage.removeItem('accessToken')
    sellerStore.clearSeller()
    router.replace({ name: 'login' })
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div v-if="loading" class="flex items-center justify-center min-h-screen">
    <span class="text-lg text-gray-500">Cargando...</span>
  </div>
  <div v-else class="min-h-screen bg-gray-50">
    <Sidebar />
    <main class="ml-75 p-8">
      <router-view />
    </main>
  </div>
</template> 