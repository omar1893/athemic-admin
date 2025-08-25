<template>
    <div class="flex-col orders-enhanced-no-white">

        <BackButton />

        <div class="flex justify-between">
            <div class="monserrat text-4xl mb-7 font-semibold">
                <p>Order-{{ suborderIdShort }}</p>
            </div>

            <!-- BOTÓN ACTUALIZAR ESTADO -->
            <div>
                <button @click="updateStatus = true"
                    class="monserrat font-semibold rounded-full py-3 px-4 bg-[#875EF8] text-sm text-white">Actualizar
                    Estado</button>
                <div class="monserrat">
                    <ModalDefault :show="updateStatus" @close="updateStatus = false">
                        <slot>
                            <div class="mt-2 mb-4 font-semibold text-black text-base">Actualizar Estado de Seguimiento
                            </div>

                            <label class="flex font-medium items-center text-[#170033] text-sm justify-between h-20">
                                <div class="flex gap-5">
                                    <div
                                        class="bg-[#E7DFFE] w-12 h-12 rounded-full flex-shrink-0 self-start flex items-center justify-center relative z-10">
                                        <div class="w-5 h-5 flex items-center justify-center">
                                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.3153 9.58464V17.5013M6.98193 4.16797L13.6486 7.91797"
                                                    stroke="black" stroke-width="1.66667" />
                                                <path
                                                    d="M9.06527 2.38966C9.83877 1.94307 10.7918 1.94307 11.5653 2.38966L16.2821 5.11295C17.0556 5.55953 17.5321 6.38485 17.5321 7.27801V12.7246C17.5321 13.6178 17.0556 14.4431 16.2821 14.8897L11.5653 17.6129C10.7918 18.0595 9.83877 18.0595 9.06527 17.6129L4.34839 14.8897C3.57489 14.4431 3.09839 13.6178 3.09839 12.7246L3.09839 7.27801C3.09839 6.38485 3.57489 5.55953 4.34839 5.11295L9.06527 2.38966Z"
                                                    stroke="black" stroke-width="1.66667" />
                                                <path
                                                    d="M17.3986 6.25195L11.0951 9.58911C10.6073 9.84736 10.0233 9.84736 9.53545 9.58911L3.23193 6.25195"
                                                    stroke="black" stroke-width="1.66667" />
                                            </svg>

                                        </div>
                                    </div>
                                    <div class="flex flex-col">
                                        <div class="flex flex-col text-[#170033]">
                                            <span class="font-semibold text-sm">En centro de distribución</span>
                                            <span class="text-sm font-medium">Preparando productos para envío</span>
                                        </div>
                                    </div>
                                </div>
                                <input type="radio" v-model="selected" value="a" name="status"
                                    class="w-5 h-5 accent-black" />
                            </label>

                            <label class="flex font-medium items-center text-[#170033] text-sm justify-between h-20">
                                <div class="flex gap-5">
                                    <div
                                        class="bg-[#E7DFFE] w-12 h-12 rounded-full flex-shrink-0 self-start flex items-center justify-center relative z-10">
                                        <div class="w-5 h-5 flex items-center justify-center">
                                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_938_1334)">
                                                    <path
                                                        d="M12.8926 2.94141C13.9971 2.94141 14.8926 3.83684 14.8926 4.94141V5.44141H16.7158C17.8052 5.44142 18.8088 6.03213 19.3379 6.98438L21.0146 10.0029L21.1025 10.1729C21.2931 10.5742 21.3926 11.014 21.3926 11.46V13.9414C21.3926 15.486 20.2251 16.7566 18.7246 16.9219C18.318 18.0966 17.2056 18.9414 15.8926 18.9414C14.583 18.9414 13.4718 18.1015 13.0625 16.9316C13.0064 16.9364 12.9499 16.9414 12.8926 16.9414H9.71875C9.30664 18.1061 8.19843 18.9414 6.89258 18.9414C5.58673 18.9414 4.47852 18.1061 4.06641 16.9414H2.89258C1.78801 16.9414 0.892578 16.046 0.892578 14.9414L0.892578 4.94141C0.892578 3.83684 1.78801 2.94141 2.89258 2.94141L12.8926 2.94141ZM6.89258 14.9414C6.34029 14.9414 5.89258 15.3891 5.89258 15.9414C5.89258 16.4937 6.34029 16.9414 6.89258 16.9414C7.44486 16.9414 7.89258 16.4937 7.89258 15.9414C7.89258 15.3891 7.44486 14.9414 6.89258 14.9414ZM15.8926 14.9414C15.3403 14.9414 14.8926 15.3891 14.8926 15.9414C14.8926 16.4937 15.3403 16.9414 15.8926 16.9414C16.4449 16.9414 16.8926 16.4937 16.8926 15.9414C16.8926 15.3891 16.4449 14.9414 15.8926 14.9414ZM2.89258 14.9414H4.06641C4.47852 13.7767 5.58673 12.9414 6.89258 12.9414C8.19843 12.9414 9.30664 13.7767 9.71875 14.9414H12.8926V4.94141L2.89258 4.94141L2.89258 14.9414ZM14.8926 13.1152C15.2056 13.0045 15.5416 12.9414 15.8926 12.9414C17.18 12.9414 18.2745 13.7536 18.7002 14.8926C19.1019 14.7628 19.3926 14.3863 19.3926 13.9414V11.46C19.3926 11.3326 19.3682 11.2065 19.3213 11.0889L19.2666 10.9736L17.5898 7.95605C17.4135 7.6386 17.079 7.44142 16.7158 7.44141H14.8926V13.1152Z"
                                                        fill="black" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_938_1334">
                                                        <rect width="20" height="20" fill="white"
                                                            transform="translate(0.892578 0.941406)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>

                                        </div>
                                    </div>
                                    <div class="flex flex-col">
                                        <div class="flex flex-col text-[#170033]">
                                            <span class="font-semibold text-sm">En camino</span>
                                            <span class="text-sm font-medium">Pedido en camino al destino</span>
                                        </div>
                                    </div>
                                </div>
                                <input type="radio" v-model="selected" value="b" name="status"
                                    class="w-5 h-5 accent-black" />
                            </label>

                            <label class="flex font-medium items-center text-[#170033] text-sm justify-between h-20">
                                <div class="flex gap-5">
                                    <div
                                        class="bg-[#E7DFFE] w-12 h-12 rounded-full flex-shrink-0 self-start flex items-center justify-center relative z-10">
                                        <div class="w-5 h-5 flex items-center justify-center">
                                            <svg class="w-full h-full" viewBox="0 0 19 20" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M6.0944 10.4697L8.24049 12.6135C9.27269 10.8086 10.7012 9.26158 12.4182 8.08908L12.5111 8.02568M17.5527 10C17.5527 14.5563 13.8591 18.25 9.30273 18.25C4.74639 18.25 1.05273 14.5563 1.05273 10C1.05273 5.44365 4.74639 1.75 9.30273 1.75C13.8591 1.75 17.5527 5.44365 17.5527 10Z"
                                                    stroke="#170033" stroke-width="1.83333" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="flex flex-col">
                                        <div class="flex flex-col text-[#170033]">
                                            <span class="font-semibold text-sm">Entregado</span>
                                            <span class="text-sm font-medium">El repartidor confirmó la recepción del
                                                pedido</span>
                                        </div>
                                    </div>
                                </div>
                                <input type="radio" v-model="selected" value="c" name="status"
                                    class="w-5 h-5 accent-black" />
                            </label>
                        </slot>

                        <button @click="updateStatus = false" :disabled="!selected" class="w-full mt-4 px-4 monserrat font-semibold rounded-full py-3 px-4 bg-[#875EF8] text-sm text-white transition-colors duration-300 ease-in-out  
                            disabled:cursor-not-allowed disabled:bg-[#875EF8]/50 ">
                            Confirmar </button>
                    </ModalDefault>
                </div>
            </div>
        </div>


        <!-- SI NO CONSIGUE EL ORDER ID -->
        <div v-if="suborder">
            <component :is="statusComponent" :suborderDetail="suborder" />
        </div>
        <div v-else>
            <p>Cargando datos de la orden...</p>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import OrderPreparing from '@/components/OrderPreparing.vue'
import BackButton from '../../components/BackButton.vue'
import OrderReady from '../../components/OrderReady.vue'
import ModalDefault from '../../components/ModalDefault.vue'
import OrderDistribution from '../../components/OrderDistribution.vue'
import OrderOnTheWay from '../../components/OrderOnTheWay.vue'
import OrderDelivered from '../../components/OrderDelivered.vue'
import OrderCanceled from '../../components/OrderCanceled.vue'
import OrderReceived from '../../components/OrderReceived.vue'

const suborderId = ref(null)
const suborderIdShort = ref(null)
const suborderStatus = ref(null)
const route = useRoute()
const selected = ref("")
const updateStatus = ref(false)
const token = localStorage.getItem('accessToken')
const suborder = ref(null)

onMounted(() => {
    suborderId.value = route.params.id
    console.log(suborderId.value)
    suborderIdShort.value = route.params.id.slice(3, 10)
    console.log(route.params.status)
    suborderStatus.value = route.params.status

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
        case undefined:
            return OrderReceived
        case 'En Preparación':
            return OrderPreparing
        case 'Paquete Listo':
            return OrderReady
        case 'En Centro de Distribución':
            return OrderDistribution
        case 'En Camino':
            return OrderOnTheWay
        case 'Entregado':
            return OrderDelivered
        case 'Cancelada':
            return OrderCanceled
        default:
            return null
    }
})

</script>