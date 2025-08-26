<template>

    <!-- ESTADO DE PEDIDO -->
    <div class="bg-white rounded-[1.25rem] px-8 py-5 my-6 max-w-[820px] monserrat">
        <div class="mb-3 text-base font-semibold">Estado de pedido</div>

        <!-- ORDEN CANCELADA -->
        <div class="flex items-start justify-between mt-5 gap-5 h-20">
            <div class="flex gap-5">
            <div
                    class="bg-[#FEF2F2] w-12 h-12 rounded-full flex-shrink-0 self-start flex items-center justify-center relative z-10">
                    <div class="w-6 h-6 flex items-center justify-center">
                        <svg viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.35552 13.7501L11.1055 11.0001M11.1055 11.0001L13.8555 8.25011M11.1055 11.0001L8.35552 8.25011M11.1055 11.0001L13.8555 13.7501M11.1055 19.25C6.54912 19.25 2.85547 15.5563 2.85547 11C2.85547 6.44365 6.54912 2.75 11.1055 2.75C15.6618 2.75 19.3555 6.44365 19.3555 11C19.3555 15.5563 15.6618 19.25 11.1055 19.25Z"
                                stroke="#EC221F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </div>
                </div>

                <div class="flex flex-col">
                    <div class="font-bold text-base flex-1">Cancelada</div>
                    <div class="font-medium text-sm text-[#7A6C8C] whitespace-nowrap">
                        La orden ha sido cancelada.
                    </div>
                </div>
            </div>
                <div class="font-medium text-sm text-[#7A6C8C] whitespace-nowrap">Mayo 24, 2025</div>
            </div>
    </div>


    <!-- PERSONAL DE ENTREGA -->
    <!-- <div class="bg-white rounded-[1.25rem] px-8 py-5 my-6 max-w-[820px] monserrat">

        <div class="flex justify-between items-center">
            <div class="mb-3 text-base font-semibold text-black">Personal de entrega</div>
            <button @click="changeDelivery = true"
                class="font-bold text-base bg-[#DFD7F6] disabled:bg-[#875EF859] disabled:text-white disabled:cursor-not-allowed rounded-full text-[#170033] px-5 py-2">
                Cambiar repartidor
            </button>
        </div>

        <div>
            <ModalDefault :show="changeDelivery" @close="changeDelivery = false">

                <slot>

                    <div class="font-semibold text-black text-base mb-6">Selecciona un repartidor</div>

                    <div class="relative">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg class="h-4 w-4 text-[#170033]" fill="none" stroke="currentColor" stroke-width="2"
                                viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                        </span>
                        <input type="search" placeholder="Buscar repartidor"
                            class="monserrat text-base w-full placeholder:font-medium placeholder-opacity-100 border-2 border-gray-100 rounded-full placeholder:text-[#170033] py-1 px-[2rem]" />
                    </div>

                    <ul class="mt-4 text-sm font-medium text-[#170033]">
                        <li :class="selectedCategory === '1' ? 'selected flex justify-between' : 'not-selected'"
                            @click="setActiveCategory('1')">
                            <span>Diego Rodríguez </span><span v-if="selectedCategory === '1'">✔</span>
                        </li>
                        <li :class="selectedCategory === '2' ? 'selected flex justify-between' : 'not-selected'"
                            @click="setActiveCategory('2')">
                            <span>Lucía Fernandez</span><span v-if="selectedCategory === '2'">✔</span>
                        </li>
                        <li :class="selectedCategory === '3' ? 'selected flex justify-between' : 'not-selected'"
                            @click="setActiveCategory('3')">
                            <span>Carlos Gómez</span><span v-if="selectedCategory === '3'">✔</span>

                        </li>
                        <li :class="selectedCategory === '4' ? 'selected flex justify-between' : 'not-selected'"
                            @click="setActiveCategory('4')">
                            <span>Sofía Gómez</span><span v-if="selectedCategory === '4'">✔</span>
                        </li>
                    </ul>
                </slot>

                <button @click="changeDelivery = false"
                    class="w-full mt-4 px-4 py-2 bg-[#875EF8] rounded-full text-white">
                    Confirmar
                </button>

            </ModalDefault>
        </div>

        <div class="flex gap-2 text-sm text-[#170033] items-center my-2">
            <p class="font-normal">Nombre del repartidor:</p>
            <p class="font-semibold">Carlos Ruiz Martín</p>
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M9.77051 3.63379C10.9809 3.35131 12.2464 3.37141 13.4463 3.6875C15.0229 4.10294 16.3 4.68954 17.4141 5.53809C18.5225 6.38246 19.4244 7.45112 20.2959 8.76758C21.2198 10.1634 21.3253 12.005 20.4287 13.4805C19.1273 15.6218 17.5204 17.0373 14.748 18.1953C12.7434 19.0325 10.4736 19.0544 8.45215 18.2666C5.82895 17.244 4.03902 15.8803 2.58203 13.4111C1.75036 12.0016 1.83811 10.2665 2.67676 8.92188C3.58951 7.45845 4.54418 6.31338 5.70312 5.44141C6.86764 4.56538 8.18617 4.00366 9.77051 3.63379ZM12.9365 5.62207C12.0502 5.3886 11.1162 5.37421 10.2256 5.58203C8.84818 5.90358 7.80159 6.36652 6.90625 7.04004C6.00544 7.71774 5.20478 8.64851 4.37402 9.98047C3.90229 10.7368 3.8773 11.6714 4.30371 12.3945C5.50138 14.4243 6.91124 15.5194 9.17871 16.4033C10.7204 17.004 12.4534 16.9862 13.9775 16.3496C16.3882 15.3427 17.6534 14.1959 18.7197 12.4414C19.1868 11.6724 19.1535 10.6663 18.6279 9.87207C17.83 8.66669 17.0724 7.79188 16.2021 7.12891C15.3371 6.47008 14.3121 5.98455 12.9365 5.62207ZM11.4492 7.4375C13.5198 7.43797 15.1981 9.11687 15.1982 11.1875C15.1982 13.2582 13.5198 14.937 11.4492 14.9375C9.37824 14.9375 7.69927 13.2585 7.69922 11.1875C7.69932 9.11658 9.37827 7.4375 11.4492 7.4375ZM11.4492 9.4375C10.4828 9.4375 9.69932 10.2211 9.69922 11.1875C9.69927 12.1539 10.4828 12.9375 11.4492 12.9375C12.4152 12.937 13.1982 12.1536 13.1982 11.1875C13.1981 10.2214 12.4152 9.43797 11.4492 9.4375Z"
                    fill="#170033" />
            </svg>
        </div>

        <div class="flex gap-2 text-sm text-[#170033] items-center my-2">
            <p class="font-normal">Teléfono:</p>
            <p class="font-semibold">+34 655 789 123</p>
        </div>
    </div> -->


    <!-- DETALLES DE ENTREGA -->
    <div class="bg-white rounded-[1.25rem] px-8 py-5 my-6 max-w-[820px] monserrat">

<div class="flex justify-between">
    <div class="mb-3 text-base font-semibold text-black">Detalles de Entrega</div>
    <button @click="isOpen1 = !isOpen1" class="flex items-center gap-2 justify-between">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform duration-300"
            :class="{ 'rotate-90': isOpen1 }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
    </button>
</div>

<div v-show="isOpen1" class="transition-all">
    <div class="flex gap-2 text-sm text-[#170033] items-center my-5">
        <p class="font-normal">Detalles de dirección:</p>
        <p class="font-semibold">{{ props.suborderDetail.subOrder.shipFromAddress.calle }},
            {{ props.suborderDetail.subOrder.shipFromAddress.nombreEdificio }},
            {{ props.suborderDetail.subOrder.shipFromAddress.detalleVivienda }}</p>
    </div>

    <div class="flex gap-2 text-sm text-[#170033] items-center my-5">
        <p class="font-normal">Número de casa:</p>
        <p class="font-semibold">{{ props.suborderDetail.subOrder.shipFromAddress.homeNumber }}</p>
    </div>

    <div class="flex gap-2 text-sm text-[#170033] items-center my-5">
        <p class="font-normal">Código postal:</p>
        <p class="font-semibold">{{ props.suborderDetail.subOrder.shipFromAddress.codigoPostal }}</p>
    </div>

    <div class="flex gap-2 text-sm text-[#170033] items-center my-5">
        <p class="font-normal">Tipo:</p>
        <p class="font-semibold">POR DEFINIR</p>
    </div>

    <div class="flex gap-2 text-sm text-[#170033] items-center my-5">
        <p class="font-normal">Referencias:</p>
        <p class="font-semibold">{{ props.suborderDetail.subOrder.shipFromAddress.referencias }},
            {{ props.suborderDetail.subOrder.shipFromAddress.instruccionesRepartidor }}</p>
    </div>
</div>

<div class="border-b-3 border-dashed border-[#170033]/8"></div>

<!-- INFORMACIÓN DE CLIENTE -->
<div class="flex justify-between mt-3">
    <span class="font-semibold text-black">Información del Cliente</span>

    <button @click="isOpen2 = !isOpen2" class="flex items-center gap-2 justify-between">

        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform duration-300"
            :class="{ 'rotate-90': isOpen2 }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
    </button>
</div>
<div v-show="isOpen2" class="transition-all">

    <div class="flex gap-2 text-sm text-[#170033] items-center my-2">
        <p class="font-normal">Nombre:</p>
        <p class="font-semibold">John Doe</p>
        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M9.77051 3.63379C10.9809 3.35131 12.2464 3.37141 13.4463 3.6875C15.0229 4.10294 16.3 4.68954 17.4141 5.53809C18.5225 6.38246 19.4244 7.45112 20.2959 8.76758C21.2198 10.1634 21.3253 12.005 20.4287 13.4805C19.1273 15.6218 17.5204 17.0373 14.748 18.1953C12.7434 19.0325 10.4736 19.0544 8.45215 18.2666C5.82895 17.244 4.03902 15.8803 2.58203 13.4111C1.75036 12.0016 1.83811 10.2665 2.67676 8.92188C3.58951 7.45845 4.54418 6.31338 5.70312 5.44141C6.86764 4.56538 8.18617 4.00366 9.77051 3.63379ZM12.9365 5.62207C12.0502 5.3886 11.1162 5.37421 10.2256 5.58203C8.84818 5.90358 7.80159 6.36652 6.90625 7.04004C6.00544 7.71774 5.20478 8.64851 4.37402 9.98047C3.90229 10.7368 3.8773 11.6714 4.30371 12.3945C5.50138 14.4243 6.91124 15.5194 9.17871 16.4033C10.7204 17.004 12.4534 16.9862 13.9775 16.3496C16.3882 15.3427 17.6534 14.1959 18.7197 12.4414C19.1868 11.6724 19.1535 10.6663 18.6279 9.87207C17.83 8.66669 17.0724 7.79188 16.2021 7.12891C15.3371 6.47008 14.3121 5.98455 12.9365 5.62207ZM11.4492 7.4375C13.5198 7.43797 15.1981 9.11687 15.1982 11.1875C15.1982 13.2582 13.5198 14.937 11.4492 14.9375C9.37824 14.9375 7.69927 13.2585 7.69922 11.1875C7.69932 9.11658 9.37827 7.4375 11.4492 7.4375ZM11.4492 9.4375C10.4828 9.4375 9.69932 10.2211 9.69922 11.1875C9.69927 12.1539 10.4828 12.9375 11.4492 12.9375C12.4152 12.937 13.1982 12.1536 13.1982 11.1875C13.1981 10.2214 12.4152 9.43797 11.4492 9.4375Z"
                fill="#170033" />
        </svg>
    </div>

    <div class="flex gap-2 text-sm text-[#170033] items-center my-2">
        <p class="font-normal">Email:</p>
        <p class="font-semibold">jhon.smith@example.com</p>
    </div>

    <div class="flex gap-2 text-sm text-[#170033] items-center my-2">
        <p class="font-normal">Teléfono:</p>
        <p class="font-semibold">+34 655 789 123</p>
    </div>
</div>
</div>

<!-- RESUMEN DE ORDEN Y PRODUCTOS -->
<div class="bg-white rounded-[1.25rem] px-8 py-5 my-6 max-w-[820px] monserrat">

<div class="flex items-center justify-between">
    <div class="mb-3 text-base font-semibold text-black">Resumen de Orden y Productos</div>
    <button @click="cancelOrder = true"
        class="font-bold bg-white border border-[#170033]/8 text-base disabled:bg-[#875EF859] disabled:text-white disabled:cursor-not-allowed rounded-full text-red-500 px-5 py-3">
        Cancelar Orden
    </button>
</div>

<div>
    <ModalDefault :show="cancelOrder" @close="cancelOrder = false">

        <slot>
            <div class="flex mt-10 flex-col items-center justify-center">
                <div class=" flex items-center justify-center w-12 h-12 rounded-full bg-[#FDEBEB]">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16.5605 7L15.455 4.78885C14.9068 3.69253 13.7863 3 12.5605 3C11.3348 3 10.2143 3.69253 9.66612 4.78885L8.56055 7M4.56055 7H20.5605M6.56055 7H18.5605V15C18.5605 16.8638 18.5605 17.7957 18.2561 18.5307C17.8501 19.5108 17.0714 20.2895 16.0913 20.6955C15.3562 21 14.4243 21 12.5605 21C10.6968 21 9.7649 21 9.02981 20.6955C8.0497 20.2895 7.271 19.5108 6.86503 18.5307C6.56055 17.7957 6.56055 16.8638 6.56055 15V7Z"
                            stroke="#EC221F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div class="mt-2 mb-2 font-semibold text-black text-xl">¿Cancelar esta orden?</div>
            </div>

            <div class="flex flex-col font-medium text-[#170033] text-center text-sm">
                <div class="mb-4">Estás por cancelar una orden en curso. Esta acción notificará al cliente y
                    detendrá el
                    proceso de entrega.</div>
                <div>Asegúrate de que sea necesario antes de continuar.</div>
                <div>¿Quieres confirmar la cancelación?</div>
            </div>

        </slot>

        <div class="flex justify-around gap-10">
            <button @click="cancelOrder = false" class="w-full mt-4 px-4 py-2 text-sm font-semibold text-black">
                Cancelar
            </button>

            <button @click="cancelOrder = false, cancelOrderPost(props.suborderDetail.subOrder.subOrderId)"
                class="w-full mt-4 px-4 font-semibold py-2 bg-[#EB5757]/12 rounded-full text-red-500 text-sm">
                Eliminar orden
            </button>
        </div>

    </ModalDefault>
</div>


<div class="text-[#170033] border-1 border-[#875EF8]/8 rounded-[16px] px-4 mt-2">
    <!-- INFORMACIÓN TIENDA -->
    <div class="flex justify-between items-center w-full my-3">
        <div class="flex gap-3 items-center">
            <div class="flex w-18 h-18 rounded-full items-center justify-center border"><img src="" alt="">
            </div>
            <div class="flex flex-col">
                <p class="font-medium text-sm">Store</p>
                <p class="font-semibold text-xl">{{ props.suborderDetail.subOrder.sellerName }}</p>
            </div>
        </div>
    </div>

    <!-- SUBÓRDENES E ITEMS LISTA -->
    <ul>

        <li v-for="item in props.suborderDetail.subOrder.items" :key="item.productId">
            <div class="flex justify-between mb-3 items-center">
                <div class=" flex gap-3 items-center ">
                    <div>
                        <ProductImage />
                    </div>
                    <div class="flex flex-col">
                        <p class="font-semibold text-base my-1">{{ item.productName }}</p>
                        <p class="font-medium text-sm my-1">Cantidad: <span class="font-semibold">{{ item.qty
                        }}</span></p>
                        <!-- NO RECIBO UN ESTADO ESPECÍFICAMENTE DEL ITEM -->
                        <p class="font-medium text-sm my-1">Estado: <span
                                class="text-[#27AE60] font-semibold">Aceptado</span></p>
                        <button @click="deleteItem(item.orderItemId, props.suborderDetail.orderId, props.suborderDetail.subOrder.subOrderId)"><svg
                                class="cursor-pointer" width="20" height="20" viewBox="0 0 25 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16.5605 7L15.455 4.78885C14.9068 3.69253 13.7863 3 12.5605 3C11.3348 3 10.2143 3.69253 9.66612 4.78885L8.56055 7M4.56055 7H20.5605M6.56055 7H18.5605V15C18.5605 16.8638 18.5605 17.7957 18.2561 18.5307C17.8501 19.5108 17.0714 20.2895 16.0913 20.6955C15.3562 21 14.4243 21 12.5605 21C10.6968 21 9.7649 21 9.02981 20.6955C8.0497 20.2895 7.271 19.5108 6.86503 18.5307C6.56055 17.7957 6.56055 16.8638 6.56055 15V7Z"
                                    stroke="#EC221F" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="font-semibold">
                    ${{ item.precio }}</div>
            </div>
        </li>

    </ul>

    <div class="border-b-3 border-dashed border-[#170033]/8 my-5"></div>

    <!-- SUBTOTAL -->

    <div class="flex justify-between mb-4 items-center">
        <div class="flex font-medium text-base">Subtotal de {{ props.suborderDetail.subOrder.sellerName }}</div>
        <div class="flex flex-col">
            <p class="line-through font-normal text-sm">$0</p>
            <!-- EL OBJETO VIENE SIN SUBTOTAL - SOLO PRECIO POR UNIDAD -->
            <p class="font-semibold text-base">${{ props.suborderDetail.subOrder.subtotal }}</p>
        </div>
    </div>
</div>

<!-- TOTAL FINAL -->

<div class="bg-[#875EF8]/6 rounded-[16px] px-8 py-2 mt-5">

    <div class="flex justify-between my-4 font-medium text-sm">
        <p>Subtotal</p>
        <p>$0</p>
    </div>

    <div class="flex justify-between my-4 font-medium text-sm">
        <p>IVA</p>
        <p>$0</p>
    </div>

    <div class="flex justify-between my-4 font-semibold text-base">
        <p>TOTAL</p>
        <p>$0</p>
    </div>
</div>
</div>
</template>


<script setup>

import { ref } from "vue"
import ProductImage from "./ProductImage.vue"
import ModalDefault from "./ModalDefault.vue"

const token = localStorage.getItem('accessToken')
const changeDelivery = ref(false)
const cancelOrder = ref(false)
const isOpen1 = ref(false)
const isOpen2 = ref(false)
const selectedCategory = ref('')
const props = defineProps({
    suborderDetail: {
        type: Object,
        required: true
    }
})


function cancelOrderPost (suborderId) {

    const cancelOrderBody = 
{
    "action": "cancel"
}


    console.log(suborderId)
    
    fetch(`https://mercapp-mono-production.up.railway.app/api/suborders/${suborderId}/status`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cancelOrderBody)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la respuesta');
            }
            return response.json();
        }).then(data => {
            console.log('Estado actualizado a:', newStatus.value);
        })
        .catch(error => {
            console.error('Error:', error);
        })
}

function deleteItem(itemOrderId, orderId, subOrderId) {

    const cancelItemBody = {
    "subOrderId": subOrderId,
    "reason": "prueba"
}

    fetch(`https://mercapp-mono-production.up.railway.app/api/orders/${orderId}/items/${itemOrderId}/cancel`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cancelItemBody)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la respuesta');
            }
            return response.json();
        }).then(data => {
            console.log('Estado actualizado a:', newStatus.value);
        })
        .catch(error => {
            console.error('Error:', error);
        })

}

function setActiveCategory(category) {
    selectedCategory.value = category
}

console.log("esta es la prop: ", props.suborderDetail.subOrder.subtotal)

</script>
<style scoped>
.not-selected {
margin-top: 2px;
margin-bottom: 2px;
padding: 10px 1px 10px 10px;
border-radius: 9999px;
}

.selected {
margin-top: 2px;
margin-bottom: 2px;
padding: 10px 10px 10px 10px;
border-radius: 9999px;
background-color: #EDE6E6;
}
</style>