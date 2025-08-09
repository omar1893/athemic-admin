<script setup>
import { ref } from 'vue'

const orders = [
  { repartidores: 'Moses Bogan', email: 'correo@correo.com', fecha: "January 16, 2023", },
  { repartidores: 'Brandon Bogan', email: 'correo@correo.com', fecha: "January 16, 2023", },
  { repartidores: 'Phillip Price', email: 'correo@correo.com', fecha: "May 23, 2023", },
  { repartidores: 'Wesley Kilback', email: 'correo@correo.com', fecha: "August 7, 2023", },
]


const currentPage = ref(1)
const totalPages = ref(1)


// function goToCreate() {
//     router.push('./')
// }
// </script>

<template>
  <div class="orders-enhanced-container">
    <div class="poppins font-medium text-2xl text-gray-950">Usuarios</div>
    <div class="rounded-xl overflow-hidden mt-5">
      <table class="min-w-full">
        <thead class="monserrat text-[#170033] text-left text-base bg-[#875EF814]">
          <tr>
            <th class="px-6 py-3 font-semibold tracking-wider">Repartidor</th>
            <th class="px-6 py-3 font-semibold tracking-wider">Teléfono</th>
            <th class="px-6 py-3 font-semibold tracking-wider">Correo</th>
          </tr>
        </thead>
        <tbody class="monserrat text-[#170033] text-sm font-medium bg-white divide-y divide-gray-100">
          <tr v-for="order in orders" :key="order.id">
            <td class="px-6 py-4 whitespace-nowrap">{{ order.repartidores }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ order.email }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ order.fecha }}</td>
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