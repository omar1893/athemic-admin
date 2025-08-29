<script setup>
import { ref } from 'vue'

const orders = [
  { dependiente: 'Moses Bogan', tienda: 'Adidas', email: 'correo@correo.com' },
  { dependiente: 'Brandon Bogan', tienda: 'Zara', email: 'correo@correo.com' },
  { dependiente: 'Phillip Price', tienda: 'Nike', email: 'correo@correo.com' },
  { dependiente: 'Wesley Kilback', tienda: 'Juan Valdez', email: 'correo@correo.com' },
]


const currentPage = ref(1)
const totalPages = ref(1)


// function goToCreate() {
//     router.push('./')
// }
// </script>

<template>
  <div class="orders-enhanced-container">
    <div class="flex flex justify-between">
      <div class="poppins font-medium text-2xl text-gray-950">Dependientes</div>
      <button
        class="monserrat text-sm bg-[#875EF8] disabled:bg-[#875EF859] disabled:text-white disabled:cursor-not-allowed rounded-full text-white font-semibold px-5 py-2 flex items-center gap-2">
        Nuevo dependiente
      </button>
    </div>

    <div class="rounded-xl overflow-hidden mt-5">
      <table class="min-w-full">
        <thead class="monserrat text-[#170033] text-left text-base bg-[#875EF814]">
          <tr>
            <th class="px-6 py-3 font-semibold tracking-wider">Dependiente</th>
            <th class="px-6 py-3 font-semibold tracking-wider">Tienda</th>
            <th class="px-6 py-3 font-semibold tracking-wider">Correo</th>
          </tr>
        </thead>
        <tbody class="monserrat text-[#170033] text-sm font-medium bg-white divide-y divide-gray-100">
          <tr v-for="order in orders" :key="order.id">
            <td class="px-6 py-4 whitespace-nowrap">{{ order.dependiente }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ order.tienda }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ order.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="orders-enhanced-pagination text-sm monserrat mt-4">
      <button class="text-[#170033]" @click="goToPage(currentPage - 1)" :disabled="currentPage <= 1">&lt;
        Anterior</button>
      <button v-for="page in totalPages" :key="page" @click="goToPage(page)" :class="{ active: page === currentPage }">
        {{ page }}
      </button>
      <button @click="goToPage(currentPage + 1)" :disabled="currentPage >= totalPages">Siguiente &gt;</button>
    </div>

  </div>
</template>