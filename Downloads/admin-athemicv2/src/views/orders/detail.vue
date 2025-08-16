<template>
    <div class="flex-col orders-enhanced-no-white">

<BackButton />

        <div class="monserrat text-4xl mb-7 font-semibold">
            <p>#{{ order.id }}</p>
        </div>

        <div v-if="order">
            <component :is="statusComponent" v-if="statusComponent" :order="order" />
        </div>

        <div v-else>
            <p class="text-red-500">Orden no encontrada</p>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import OrderPreparing from '@/components/OrderPreparing.vue'
import BackButton from '../../components/BackButton.vue'

const orders = [
    { id: 1345, customer: 'Adidas', date: '2024-07-01', status: 'Orden Recibida', total: 120.50 },
    { id: 3567, customer: 'Zara', date: '2024-07-02', status: 'En Preparación', total: 75.00 },
    { id: 456223, customer: 'Nike', date: '2024-07-03', status: 'Paquete Listo', total: 0.00 },
    { id: 3232, customer: 'Juan Valdez', date: '2024-07-04', status: 'En Centro de Distribución', total: 210.99 },
    { id: 12343, customer: 'Juan Valdez', date: '2024-07-04', status: 'En Camino', total: 210.99 },
    { id: 3434, customer: 'Juan Valdez', date: '2024-07-04', status: 'Entregado', total: 210.99 },
    { id: 7632, customer: 'Juan Valdez', date: '2024-07-04', status: 'Cancelada', total: 210.99 },
    { id: 2358, customer: 'Juan Valdez', date: '2024-07-04', status: 'Entregado', total: 210.99 }
]

const route = useRoute()
const order = computed(() => orders.find(o => o.id === Number(route.params.id)))

const statusComponent = computed(() => {
    switch (order.value?.status) {
        case 'En Preparación':
            return OrderPreparing
        default:
            return null
    }
})
</script>