<template>
    <div class="flex-col orders-enhanced-no-white">

        <BackButton />

        <div class="flex justify-between">
            <div class="monserrat text-4xl mb-7 font-semibold">
                <p>Order-{{ suborderIdShort }}</p>
            </div>

            <!-- BOTÓN ACTUALIZAR ESTADO -->
            <div>
                <button v-show="suborderStatus !== 'COMPLETED'  && suborderStatus !== 'CANCELLED' " @click="updateStatus = true"
                    class="monserrat font-semibold rounded-full py-3 px-4 bg-[#875EF8] text-sm text-white">Actualizar
                    Estado</button>
                <div class="monserrat">


                    <ModalDefault :show="updateStatus" @close="updateStatus = false">
                        <slot>
                            <div class="mt-2 mb-4 font-semibold text-black text-base">Actualizar Estado de Seguimiento
                            </div>

                            <label class="flex font-medium items-center text-[#170033] text-sm justify-between h-20">
                                <div class="flex gap-6">
                                    <div
                                        class="bg-[#E7DFFE] w-12 h-12 rounded-full flex-shrink-0 self-start flex items-center justify-center relative z-10">
                                        <div v-html="iconMap[suborderStatus] || iconMap.default"
                                            class="w-5 h-5 flex items-center justify-center"></div>
                                    </div>
                                    <div class="flex flex-col">
                                        <div class="flex flex-col text-[#170033]">
                                            <span class="font-semibold text-sm"> {{
                                                suborderStatus === 'RECEIVED' ? 'Orden aceptada' :
                                                    suborderStatus === 'ACCEPTED' ? 'En preparación' :
                                                        suborderStatus === 'PREPARING' ? 'Paquete listo' :
                                                            suborderStatus === 'READY_FOR_PICKUP' ? 'En camino' :
                                                                suborderStatus === 'DISPATCHED' ? 'Entregado' :
                                                                    suborderStatus === 'COMPLETED' ? 'Entregado' :
                                                                        "" }}</span>
                                            <span class="text-sm font-medium">{{
                                                suborderStatus === 'RECEIVED' ? 'Pago confirmado. Pendiente de confirmación y preparación por parte de la tienda.' :
                                                    suborderStatus === 'ACCEPTED' ? 'La tienda está alistando el pedido para que quede listo para su recolección.' :
                                                        suborderStatus === 'PREPARING' ? 'Pedido está en tránsito hacia la dirección de entrega' :
                                                            suborderStatus === 'READY_FOR_PICKUP' ? 'El pedido está en tránsito hacia la dirección de entrega' :
                                                                suborderStatus === 'DISPATCHED' ? 'El repartidor confirmó la entrega del pedido.' :
                                                                    suborderStatus === 'COMPLETED' ? 'Entregado' :
                                                                        "" }}</span>
                                        </div>
                                    </div>
                                </div>
                                <input type="radio" v-model="selected" value="a" name="status"
                                    class="w-5 h-5 accent-black" />
                            </label>

                        </slot>

                        <button @click="goToOrdersNewStatus (), updateStatusPost()" :disabled="!selected" class="w-full mt-4 px-4 monserrat font-semibold rounded-full py-3 px-4 bg-[#875EF8] text-sm text-white transition-colors duration-300 ease-in-out  
                            disabled:cursor-not-allowed disabled:bg-[#875EF8]/50 ">
                            Confirmar </button>
                    </ModalDefault>
                </div>
            </div>
        </div>


        <!-- SI NO CONSIGUE EL ORDER ID -->
        <div v-if="suborder">
            <component ref="statusComponentRef" :is="statusComponent" :suborderDetail="suborder" />
        </div>
        <div v-else>
            <p>Cargando datos de la orden...</p>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import OrderPreparing from '@/components/OrderPreparing.vue'
import BackButton from '../../components/BackButton.vue'
import OrderReady from '../../components/OrderReady.vue'
import ModalDefault from '../../components/ModalDefault.vue'
import OrderOnTheWay from '../../components/OrderOnTheWay.vue'
import OrderDelivered from '../../components/OrderDelivered.vue'
import OrderCanceled from '../../components/OrderCanceled.vue'
import OrderReceived from '../../components/OrderReceived.vue'
import OrderAccepted from '../../components/OrderAccepted.vue'

const router = useRouter()
const suborderId = ref(null)
const suborderIdShort = ref(null)
const suborderStatus = ref("")
const route = useRoute()
const selected = ref("")
const updateStatus = ref(false)
const token = localStorage.getItem('accessToken')
const suborder = ref(null)
const newStatus = ref("")

watch(
  () => route.params.status,
  (nuevoStatus) => {
    suborderStatus.value = nuevoStatus || '' },
  { immediate: true }
)

console.log("este es el estatus para el botón: ", suborderStatus.value)

function goToOrdersNewStatus () {
  router.push({ name: 'orders', query: { success: 'newStatus' } })
}

function updateStatusPost() {
    switch (suborderStatus.value) {
        case 'RECEIVED':
            newStatus.value = 'accept'
            break
        case 'ACCEPTED':
            newStatus.value = 'prepare'
            break
        case 'PREPARING':
            newStatus.value = 'ready'
            break
        case 'READY_FOR_PICKUP':
            newStatus.value = 'dispatch'
            break
        case 'DISPATCHED':
            newStatus.value = 'complete'
            break
    }

    const newStatusPost =
{
    "action": newStatus.value
}

console.log("Antes del fetch: ", newStatus.value)
console.log(newStatusPost)

    fetch(`https://mercapp-mono-production.up.railway.app/api/suborders/${suborderId.value}/status`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newStatusPost)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la respuesta');
            }
            return response.json();
        }).then(data => {
            console.log('Estado actualizado a:', newStatus.value);
            goToOrdersNewStatus();
        })
        .catch(error => {
            console.error('Error:', error);
        })
}

const iconMap = {

    'ACCEPTED': `<div class="w-full h-full border-2 border-gray-600 border-t-transparent rounded-full animate-spin"> </div>`
    ,
    'READY_FOR_PICKUP': `<div class="w-full h-full border-2 border-gray-600 border-t-transparent rounded-full animate-spin"> </div>`
    ,

    'default': `<svg class="w-full h-full" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.0944 10.4697L8.24049 12.6135C9.27269 10.8086 10.7012 9.26158 12.4182 8.08908L12.5111 8.02568M17.5527 10C17.5527 14.5563 13.8591 18.25 9.30273 18.25C4.74639 18.25 1.05273 14.5563 1.05273 10C1.05273 5.44365 4.74639 1.75 9.30273 1.75C13.8591 1.75 17.5527 5.44365 17.5527 10Z"
                            stroke="#170033" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>`
}

onMounted(() => {

    suborderId.value = route.params.id
    console.log("El id por params es: ", suborderId.value)
    suborderIdShort.value = route.params.id.slice(3, 10)
    console.log("id corto: ", suborderIdShort.value)
    suborderStatus.value = route.params.status
    console.log("el status por params es: ", suborderStatus.value)

    fetch(`https://mercapp-mono-production.up.railway.app/api/suborders/${suborderId.value}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then(response => response.json())
        .then(data => {
            suborder.value = data
            console.log("la suborden en detalle es: ", suborder.value)
        })
        .catch(error => ('Error al obtener órdenes: ', error));
})

const statusComponent = computed(() => {
    console.log("estatus actual: ", suborderStatus.value)
    switch (suborderStatus.value) {
        case 'RECEIVED':
            return OrderReceived
        case 'ACCEPTED':
            return OrderAccepted
        case 'PREPARING':
            return OrderPreparing
        case 'READY_FOR_PICKUP':
            return OrderReady
        // case 'En Centro de Distribución':
        //     return OrderDistribution
        case 'DISPATCHED':
            return OrderOnTheWay
        case 'COMPLETED':
            return OrderDelivered
        case 'CANCELED':
            return OrderCanceled
        default:
            return null
    }
})

</script>