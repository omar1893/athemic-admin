<script setup>
import { ref } from 'vue'

const orders = [
    { repartidores: 'Moses Bogan', telefono: '+34 600 123 456', email: 'correo@correo.com', amount: 0,  },
    { repartidores: 'Brandon Bogan', telefono: '+34 600 123 456', email: 'correo@correo.com', amount: 2, },
    { repartidores: 'Phillip Price', telefono: '+34 600 123 456', email: 'correo@correo.com', amount: 3, },
    { repartidores: 'Wesley Kilback', telefono: '+34 600 123 456', email: 'correo@correo.com', amount: 4, },
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
            <div class="poppins font-medium text-2xl text-gray-950">Repartidores</div>
            <button
                class="monserrat text-sm bg-[#875EF8] disabled:bg-[#875EF859] disabled:text-white disabled:cursor-not-allowed rounded-full text-white font-semibold px-5 py-2 flex items-center gap-2">
                Nuevo Repartidor
            </button>
        </div>

        <div class="rounded-xl overflow-hidden mt-5">
            <table class="min-w-full">
                <thead class="monserrat text-[#170033] text-left text-base bg-[#875EF814]">
                    <tr>
                        <th class="px-6 py-3 font-semibold tracking-wider">Repartidor</th>
                        <th class="px-6 py-3 font-semibold tracking-wider">Teléfono</th>
                        <th class="px-6 py-3 font-semibold tracking-wider">Correo</th>
                        <th class="px-6 py-3 font-semibold tracking-wider">Órdenes activas</th>
                    </tr>
                </thead>
                <tbody class="monserrat text-[#170033] text-sm font-medium bg-white divide-y divide-gray-100">
                    <tr v-for="order in orders" :key="order.id">
                        <td class="px-6 py-4 whitespace-nowrap">{{ order.repartidores }}</td>
                        <td class="px-6 py-4 whitespace-nowrap">{{ order.telefono }}</td>
                        <td class="px-6 py-4 whitespace-nowrap">{{ order.email }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-center">
                            <span :class="[
                            'px-2 py-1 rounded-full',
                            order.amount >0 ? 'border-1 bg-green-100 text-green-600' 
                            : 'border-1 border-[#B6B7BB] bg-[#B6B7BB1A] text-[#B6B7BB]'
                        ]">
                            {{ order.amount }}
                        </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="orders-enhanced-pagination text-sm monserrat mt-4">
            <button class="text-[#170033]" @click="goToPage(currentPage - 1)" :disabled="currentPage <= 1">&lt;
                Anterior</button>
            <button v-for="page in totalPages" :key="page" @click="goToPage(page)"
                :class="{ active: page === currentPage }">
                {{ page }}
            </button>
            <button @click="goToPage(currentPage + 1)" :disabled="currentPage >= totalPages">Siguiente &gt;</button>
        </div>

    </div>
</template>