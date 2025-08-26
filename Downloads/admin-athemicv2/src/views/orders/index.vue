<script setup>
import Swal from 'sweetalert2';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter()
const route = useRoute()
const token = localStorage.getItem('accessToken');
const suborders = ref([])

fetch('https://mercapp-mono-production.up.railway.app/api/suborders', {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${token}`
  }
})
  .then(response => response.json())
  .then(data => {
    suborders.value = data.suborders
  })
  .catch(error => ('Error al obtener órdenes: ', error));

onMounted (() => {

  if (route.query.success === 'newStatus') {
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
            <span class="text-sm font-semibold">La orden fue actualizada correctamente.</span>
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

  } else if (route.query.success === 'canceled') {
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
            <span class="text-sm font-semibold">La orden ha sido cancelada correctamente.</span>
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
    <div class="poppins font-medium text-2xl mb-6 text-gray-950">Órdenes</div>

    <div class="flex justify-between items-center flex-wrap gap-2 m-3">

      <div class="relative">
        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg class="h-4 w-4 text-[#170033]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
            stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </span>
        <input type="search" placeholder="Buscar"
          class="monserrat placeholder:font-medium placeholder-opacity-100 border-2 border-gray-100 rounded-full placeholder:text-[#170033] py-1 px-[2rem]" />
      </div>

      <div class="flex gap-2">
        <select class="poppins border-2 border-gray-100 rounded-full text-[#170033] py-1 px-2">
          <option class="rounded-full" value="Filtrar estados">Filtrar estados</option>
        </select>

        <select class="poppins border-2 border-gray-100 rounded-full text-[#170033] py-1 px-2">
          <option class="rounded-full" value="Filtrar tienda">Filtrar tienda</option>
        </select>

        <select class="poppins border-2 border-gray-100 rounded-full text-[#170033] py-1 px-2">
          <option class="rounded-full" value="Filtrar por fecha">Filtrar por fecha</option>
        </select>

      </div>

    </div>

    <div class="rounded-xl overflow-hidden">
      <table class="min-w-full">
        <thead class="monserrat text-[#170033] text-left text-base bg-[#875EF814]">
          <tr>
            <th class="px-6 py-3 font-semibold tracking-wider">Número de orden</th>
            <th class="px-6 py-3 font-semibold tracking-wider">Estado</th>
            <th class="px-6 py-3 font-semibold tracking-wider">Fecha</th>
            <th class="px-6 py-3 font-semibold tracking-wider">Tienda</th>
            <th class="px-6 py-3 font-semibold tracking-wider">Total</th>
          </tr>
        </thead>
        <tbody class="monserrat text-[#170033] text-sm font-medium bg-white divide-y divide-gray-100">
          <tr v-for="suborder in suborders" :key="suborder.subOrderId">
            <router-link :to="{ name: 'OrdenDetalle', params: { id: suborder.subOrderId, status: suborder.status } }"
              class="no-underline hover:underline">
              <td class="px-6 py-4 whitespace-nowrap"> {{ suborder.subOrderId.slice(3, 10) }}</td>
            </router-link>
            <td class="px-6 py-4 whitespace-nowrap">
              <span :class="[
                'px-2 rounded-full',
                suborder.status === 'COMPLETED' ? 'border-1 bg-green-100 text-green-600' :
                  suborder.status === 'RECEIVED' ? 'border-1 bg-[#17003314] text-[#17003380]' :
                    suborder.status === 'PREPARING' ? 'border-1 bg-[#2464E5]/10 text-[#2464E5]' :
                      suborder.status === 'READY_FOR_PICKUP' ? 'border-1 bg-[#117593]/10 text-[#117593]' :
                        suborder.status === 'ACCEPTED' ? 'border-1 bg-[#6E2FE3]/10 text-[#6E2FE3]' :
                          suborder.status === 'DISPATCHED' ? 'border-1 bg-[#BBA333]/10 text-[#BBA333]' :
                            suborder.status === 'CANCELED' ? 'border-1 bg-red-100 text-red-400' :
                              ''
              ]">
                {{ suborder.status === 'ACCEPTED' ? 'Orden aceptada' :
                  suborder.status === 'COMPLETED' ? 'Entregado' :
                    suborder.status === 'RECEIVED' ? 'Orden recibida' :
                      suborder.status === 'PREPARING' ? 'En preparación' :
                        suborder.status === 'READY_FOR_PICKUP' ? 'Paquete listo' :
                          suborder.status === 'DISPATCHED' ? 'En camino' :
                            suborder.status === 'CANCELED' ? 'Cancelada' :
                              "" }}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">{{ suborder.shipFromAddress.fechaCreacion.slice(0, 10) }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ suborder.sellerName }}</td>
            <td class="monserrat font-medium text-sm px-6 py-4 whitespace-nowrap">${{ suborder.subtotal }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>