<script setup>
import { ref } from 'vue'

const orders = [
    { tienda: 'Adidas', dependiente: 'Moses Bogan', date: 'Hoy', status: 'Completada', total: 120.50 },
    { tienda: 'Zara', dependiente: 'Brandon Bogan', date: 'Hoy', status: 'Pendiente', total: 75.00 },
    { tienda: 'Nike', dependiente: 'Phillip Price', date: '2024-07-03', status: 'Cancelada', total: 0.00 },
    { tienda: 'Juan Valdez', dependiente: 'Wesley Kilback', date: '2024-07-04', status: 'Completada', total: 210.99 },
]

const currentPage = ref(1)
const totalPages = ref(1)

function goToCreate() {
    router.push('./create.vue')
}
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
                <tr v-for="order in orders" :key="order.id">
                    <td class="px-6 py-4 whitespace-nowrap">{{ order.tienda }}</td>
                    <td class="px-6 py-4 whitespace-nowrap">{{ order.dependiente }}</td>
                    <td class="px-6 py-4 whitespace-nowrap">{{ order.date }}</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <span :class="[
                            'px-2 py-1 rounded-full',
                            order.status === 'Completada' ? 'border-1 bg-green-100 text-green-600' :
                                order.status === 'Pendiente' ? 'border-1 bg-[#17003314] text-[#17003380]' :
                                    'border-1 bg-red-100 text-red-400'
                        ]">
                            {{ order.status }}
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