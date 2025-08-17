<template>

    <!-- ESTADO DE PEDIDO -->
    <div class="bg-white rounded-[1.25rem] px-8 py-5 my-6 max-w-[820px] monserrat">
        <div class="mb-3 text-base font-semibold">Estado de pedido</div>
        <div class="relative">
            <div class="absolute left-6 h-40 w-[2px] bg-[#170033]/8"></div>

            <!-- ORDEN RECIBIDA -->
            <div class="flex items-start justify-between gap-5 h-20">
                <div
                    class="bg-[#E7DFFE] w-12 h-12 rounded-full flex-shrink-0 self-start flex items-center justify-center relative z-10">
                    <div class="w-5 h-5 flex items-center justify-center">
                        <svg class="w-full h-full" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6.0944 10.4697L8.24049 12.6135C9.27269 10.8086 10.7012 9.26158 12.4182 8.08908L12.5111 8.02568M17.5527 10C17.5527 14.5563 13.8591 18.25 9.30273 18.25C4.74639 18.25 1.05273 14.5563 1.05273 10C1.05273 5.44365 4.74639 1.75 9.30273 1.75C13.8591 1.75 17.5527 5.44365 17.5527 10Z"
                                stroke="#170033" stroke-width="1.83333" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>

                <div class="flex flex-col">
                    <div class="font-bold text-base flex-1">Orden recibida</div>
                    <div class="font-medium text-sm text-[#7A6C8C]">
                        Pago confirmado. Pendiente de confirmación y preparación por parte de la tienda.
                    </div>
                </div>
                <div class="font-medium text-sm text-[#7A6C8C] whitespace-nowrap">Mayo 24, 2025</div>
            </div>


            <!-- EN PREPARACIÓN -->
            <div class="flex items-start justify-between gap-5 h-20">
                <div
                    class="bg-[#E7DFFE] w-12 h-12 rounded-full flex-shrink-0 self-start flex items-center justify-center relative z-10">
                    <div class="w-5 h-5 flex items-center justify-center">
                        <svg class="w-full h-full" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6.0944 10.4697L8.24049 12.6135C9.27269 10.8086 10.7012 9.26158 12.4182 8.08908L12.5111 8.02568M17.5527 10C17.5527 14.5563 13.8591 18.25 9.30273 18.25C4.74639 18.25 1.05273 14.5563 1.05273 10C1.05273 5.44365 4.74639 1.75 9.30273 1.75C13.8591 1.75 17.5527 5.44365 17.5527 10Z"
                                stroke="#170033" stroke-width="1.83333" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>

                <div class="flex flex-col flex-1">
                    <div class="font-bold text-base">En preparación</div>
                    <div class="font-medium text-sm text-[#7A6C8C] flex flex-nowrap">La tienda está alistando el pedido
                        para que quede listo para su recolección.</div>
                </div>
                <div class="font-medium text-sm text-[#7A6C8C] whitespace-nowrap">Mayo 24, 2025</div>
            </div>

            <!-- PAQUETE LISTO -->
            <div class="flex items-start justify-between gap-5 h-20">
                <div
                    class="bg-[#E7DFFE] w-12 h-12 rounded-full flex-shrink-0 self-start flex items-center justify-center relative z-10">
                    <div class="w-5 h-5 flex items-center justify-center">
                        <svg class="w-full h-full" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6.0944 10.4697L8.24049 12.6135C9.27269 10.8086 10.7012 9.26158 12.4182 8.08908L12.5111 8.02568M17.5527 10C17.5527 14.5563 13.8591 18.25 9.30273 18.25C4.74639 18.25 1.05273 14.5563 1.05273 10C1.05273 5.44365 4.74639 1.75 9.30273 1.75C13.8591 1.75 17.5527 5.44365 17.5527 10Z"
                                stroke="#170033" stroke-width="1.83333" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>

                <div class="flex flex-col flex-1">
                    <div class="font-bold text-base">Paquete Listo</div>
                    <div class="font-medium text-sm text-[#7A6C8C] flex flex-nowrap">El paquete está listo para ser
                        recogido.</div>
                </div>
                <div class="font-medium text-sm text-[#7A6C8C] whitespace-nowrap">Mayo 24, 2025</div>
            </div>
        </div>
    </div>



    <!-- PERSONAL DE ENTREGA -->
    <div class="bg-white rounded-[1.25rem] px-8 py-5 my-6 max-w-[820px] monserrat">

        <div class="flex justify-between items-center">
            <div class="mb-3 text-base font-semibold text-black">Personal de entrega</div>
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
    </div>


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
                <p class="font-semibold">Calle de la Paz, 123, 4º B, Madrid, España</p>
            </div>

            <div class="flex gap-2 text-sm text-[#170033] items-center my-5">
                <p class="font-normal">Número de casa:</p>
                <p class="font-semibold">123</p>
            </div>

            <div class="flex gap-2 text-sm text-[#170033] items-center my-5">
                <p class="font-normal">Código postal:</p>
                <p class="font-semibold">28001</p>
            </div>

            <div class="flex gap-2 text-sm text-[#170033] items-center my-5">
                <p class="font-normal">Tipo:</p>
                <p class="font-semibold">Casa</p>
            </div>

            <div class="flex gap-2 text-sm text-[#170033] items-center my-5">
                <p class="font-normal">Referencias:</p>
                <p class="font-semibold">Edificio blanco con puerta azul, al lado de la farmacia. Tercer piso, puerta B.
                    Timbre: Rodríguez-García.</p>
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
                class="font-bold text-base bg-red-100 disabled:bg-[#875EF859] disabled:text-white disabled:cursor-not-allowed rounded-full text-red-500 px-5 py-2">
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

                    <button @click="cancelOrder = false"
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
                        <p class="font-semibold text-xl">Sweet Roots</p>
                    </div>
                </div>
                <div class="border-1 rounded-full px-2 bg-green-100 text-green-600 font-medium text-sm">Paquete Recogido
                </div>
            </div>

            <!-- PRODUCTOS EN PREPARACIÓN -->

            <div class="flex justify-between mb-3 items-center">
                <div class="flex gap-3 items-center ">
                    <div>
                        <ProductImage />
                    </div>
                    <div class="flex flex-col">
                        <p class="font-semibold text-base my-1">Sunset Harmony Coffee</p>
                        <p class="font-medium text-sm my-1">Cantidad: <span class="font-semibold">2</span></p>
                        <p class="font-medium text-sm my-1">Estado: <span
                                class="text-[#27AE60] font-semibold">Aceptado</span></p>
                    </div>
                </div>
                <div class="font-semibold">$12.99</div>
            </div>

            <div class="flex justify-between mb-3 items-center">
                <div class="flex gap-3 items-center ">
                    <div>
                        <ProductImage />
                    </div>
                    <div class="flex flex-col">
                        <p class="font-semibold text-base my-1">Sunset Harmony Coffee</p>
                        <p class="font-medium text-sm my-1">Cantidad: <span class="font-semibold">2</span></p>
                        <p class="font-medium text-sm my-1">Estado: <span
                                class="text-[#27AE60] font-semibold">Aceptado</span></p>
                    </div>
                </div>
                <div class="font-semibold">$12.99</div>
            </div>

            <div class="flex justify-between mb-3 items-center">
                <div class="flex gap-3 items-center ">
                    <div>
                        <ProductImage />
                    </div>
                    <div class="flex flex-col">
                        <p class="font-semibold text-base my-1">Sunset Harmony Coffee</p>
                        <p class="font-medium text-sm my-1">Cantidad: <span class="font-semibold">2</span></p>
                        <p class="font-medium text-sm my-1">Estado: <span
                                class="text-[#27AE60] font-semibold">Aceptado</span></p>
                    </div>
                </div>
                <div class="font-semibold">$12.99</div>
            </div>


            <div class="border-b-3 border-dashed border-[#170033]/8 my-5"></div>

            <!-- SUBTOTAL -->

            <div class="flex justify-between mb-4 items-center">
                <div class="flex font-medium text-base">Subtotal de Sweet Roots</div>
                <div class="flex flex-col">
                    <p class="line-through font-normal text-sm">$12.99</p>
                    <p class="font-semibold text-base">$25.25</p>
                </div>
            </div>
        </div>

        <!-- TOTAL FINAL -->

        <div class="bg-[#875EF8]/6 rounded-[16px] px-8 py-2 mt-5">

            <div class="flex justify-between my-4 font-medium text-sm">
                <p>Subtotal</p>
                <p>$7.25</p>
            </div>

            <div class="flex justify-between my-4 font-medium text-sm">
                <p>IVA</p>
                <p>$7.25</p>
            </div>

            <div class="flex justify-between my-4 font-semibold text-base">
                <p>TOTAL</p>
                <p>$38.25</p>
            </div>




        </div>



    </div>
</template>

<script setup>
defineProps({
    order: {
        type: Object,
        required: true
    }
})

import { ref } from "vue"
import ProductImage from "./ProductImage.vue"
import ModalDefault from "./ModalDefault.vue"

const cancelOrder = ref(false)
const isOpen1 = ref(false)
const isOpen2 = ref(false)
const selectedCategory = ref('')

function setActiveCategory(category) {
    selectedCategory.value = category
}
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