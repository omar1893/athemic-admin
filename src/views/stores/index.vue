<script setup>
import Swal from 'sweetalert2'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const stores = [
    { id: '1', tienda: 'Adidas', dependiente: 'Moses Bogan', date: 'Hoy', status: 'Completada', total: 120.50 },
    { id: '2', tienda: 'Zara', dependiente: 'Brandon Bogan', date: 'Hoy', status: 'Pendiente', total: 75.00 },
    { id: '3', tienda: 'Nike', dependiente: 'Phillip Price', date: '2024-07-03', status: 'Cancelada', total: 0.00 },
    { id: '4', tienda: 'Juan Valdez', dependiente: 'Wesley Kilback', date: '2024-07-04', status: 'Completada', total: 210.99 },
]

const currentPage = ref(1)
const totalPages = ref(1)
const router = useRouter()
const route = useRoute()

function goToCreate() {
    router.push('stores/create')
}

function handleRowClick(stores) {
  console.log('store clicked:', stores)
  router.push({ name: 'storesEdit', params: { id: stores } })
}

onMounted(() => {

  if (route.query.success === 'created') {
    Swal.fire({
      toast: false,
      position: 'top-end',
      allowOutsideClick: false,
      allowEscapeKey: false,
      backdrop: false,
      html: `
        <div class="monserrat flex items-center gap-3">
          <div class="flex items-center justify-center bg-[#170033] w-7 h-7 border rounded-full">
            <svg width="28" height="28" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.0944 10.4697L8.24049 12.6135C9.27269 10.8086 10.7012 9.26158 12.4182 8.08908L12.5111 8.02568M17.5527 10C17.5527 14.5563 13.8591 18.25 9.30273 18.25C4.74639 18.25 1.05273 14.5563 1.05273 10C1.05273 5.44365 4.74639 1.75 9.30273 1.75C13.8591 1.75 17.5527 5.44365 17.5527 10Z" stroke="#E7DFFE" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="flex flex-col text-start">
            <span class="text-sm font-semibold">Tu tienda fue creada correctamente</span>
            <span class="text-sm font-medium">Ya está disponible en el catálogo.</span>
          </div>
        </div>
      `,
      showConfirmButton: false,
      timer: 2800,
      background: '#E7DFFE',
      color: '#170033',
      customClass: {
        popup: 'my-swal-popup'
      }
    })
    router.replace({ query: { ...route.query, success: "none" } })

  } else if (route.query.success === 'edited') {
    Swal.fire({
      toast: false,
      position: 'top-end',
      allowOutsideClick: false,
      allowEscapeKey: false,
      backdrop: false,
      html: `
        <div class="monserrat flex items-center gap-3">
          <div class="flex items-center justify-center bg-[#170033] w-7 h-7 border rounded-full">
            <svg width="28" height="28" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.0944 10.4697L8.24049 12.6135C9.27269 10.8086 10.7012 9.26158 12.4182 8.08908L12.5111 8.02568M17.5527 10C17.5527 14.5563 13.8591 18.25 9.30273 18.25C4.74639 18.25 1.05273 14.5563 1.05273 10C1.05273 5.44365 4.74639 1.75 9.30273 1.75C13.8591 1.75 17.5527 5.44365 17.5527 10Z" stroke="#E7DFFE" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="flex flex-col text-start">
            <span class="text-sm font-semibold">Tu tienda fue editada correctamente</span>
            <span class="text-sm font-medium">Los cambios ya están disponibles en el catálogo.</span>
          </div>
        </div>
      `,
      showConfirmButton: false,
      timer: 2800,
      background: '#E7DFFE',
      color: '#170033',
      customClass: {
        popup: 'my-swal-popup'
      }
    })
    router.replace({ query: { ...route.query, success: "none" } })
  } else if (route.query.success === 'delete') {
    Swal.fire({
      toast: false,
      position: 'top-end',
      allowOutsideClick: false,
      allowEscapeKey: false,
      backdrop: false,
      html: `
        <div class="monserrat flex items-center gap-3">
          <div class="flex items-center justify-center bg-[#170033] w-7 h-7 border rounded-full">
            <svg width="28" height="28" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.0944 10.4697L8.24049 12.6135C9.27269 10.8086 10.7012 9.26158 12.4182 8.08908L12.5111 8.02568M17.5527 10C17.5527 14.5563 13.8591 18.25 9.30273 18.25C4.74639 18.25 1.05273 14.5563 1.05273 10C1.05273 5.44365 4.74639 1.75 9.30273 1.75C13.8591 1.75 17.5527 5.44365 17.5527 10Z" stroke="#E7DFFE" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="flex flex-col text-start">
            <span class="text-sm font-semibold">Tienda eliminada correctamente</span>
            <span class="text-sm font-medium">Se removió la tienda con éxito.</span>
          </div>
        </div>
      `,
      showConfirmButton: false,
      timer: 2800,
      background: '#FEE2E2',
      color: '#170033',
      customClass: {
        popup: 'my-swal-popup'
      }
    })
    router.replace({ query: { ...route.query, success: "none" } })
  }
})

</script>

<template>
    <div class="orders-enhanced-container">
        <div class="flex flex justify-between">
            <div class="poppins font-medium text-2xl text-gray-950">Tiendas</div>
            <button @click="goToCreate()"
                class="monserrat text-sm bg-[#875EF8] disabled:bg-[#875EF859] disabled:text-white disabled:cursor-not-allowed rounded-full text-white font-semibold px-5 py-2 flex items-center gap-2">
                Nueva tienda
            </button>
        </div>

        <div class="flex justify-between items-center flex-wrap gap-2 m-3">

            <div class="relative">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg class="h-4 w-4 text-[#170033]" fill="none" stroke="currentColor" stroke-width="2"
                        viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                </span>
                <input type="search" placeholder="Buscar tienda"
                    class="monserrat placeholder:font-medium placeholder-opacity-100 border-2 border-gray-100 rounded-full placeholder:text-[#170033] py-1 px-[2rem]" />
            </div>

            <div class="flex gap-2">
                <select class="poppins border-2 border-gray-100 rounded-full text-[#170033] py-1 px-2">
                    <option class="rounded-full" value="Filtrar por fecha">Estado</option>
                </select>

            </div>

        </div>

        <div class="rounded-xl overflow-hidden">
        <table class="min-w-full">
            <thead class="monserrat text-[#170033] text-left text-base bg-[#875EF814]">
                <tr>
                    <th class="px-6 py-3 font-semibold tracking-wider">Tienda</th>
                    <th class="px-6 py-3 font-semibold tracking-wider">Dependiente</th>
                    <th class="px-6 py-3 font-semibold tracking-wider">Ult Solicitud</th>
                    <th class="px-6 py-3 font-semibold tracking-wider">Estado</th>
                </tr>
            </thead>
            <tbody class="monserrat text-[#170033] text-sm font-medium bg-white divide-y divide-gray-100">
                <tr v-for="store in stores" :key="store.id"> 
                    <td @click="handleRowClick(store.tienda)" class="px-6 py-4 whitespace-nowrap">{{ store.tienda }}</td>
                    <td class="px-6 py-4 whitespace-nowrap">{{ store.dependiente }}</td>
                    <td class="px-6 py-4 whitespace-nowrap">{{ store.date }}</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <span :class="[
                            'px-2 py-1 rounded-full',
                            store.status === 'Completada' ? 'border-1 bg-green-100 text-green-600' :
                            store.status === 'Pendiente' ? 'border-1 bg-[#17003314] text-[#17003380]' :
                                    'border-1 bg-red-100 text-red-400'
                        ]">
                            {{ store.status }}
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

        <div class="orders-enhanced-pagination text-sm monserrat mt-4">
            <button class="text-[#170033]" @click="goToPage(currentPage - 1)" :disabled="currentPage <= 1">&lt;
                Anterior</button>
            <button v-for="page in totalPages" :key="page" @click="goToPage(page)" class="flex w-8 h-8 items-center justify-center"
                :class="{ active: page === currentPage }">
                {{ page }}
            </button>
            <button @click="goToPage(currentPage + 1)" :disabled="currentPage >= totalPages">Siguiente &gt;</button>
        </div>

    </div>
</template>