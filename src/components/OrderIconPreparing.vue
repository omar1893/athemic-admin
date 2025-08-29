<template>


<div class="relative h-15">
    <div v-if="isPreparing === true"></div>
    <div v-else class="absolute left-6 h-30 w-[2px] bg-[#170033]/8"></div>

<div class="flex items-center justify-between gap-5">
            <div
                class="bg-[#E7DFFE] w-12 h-12 rounded-full flex-shrink-0 self-start flex items-center justify-center relative z-10">

                <div v-if="isPreparing === true"
                    class="bg-[#E7DFFE] w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center relative z-10">
                    <div class="w-5 h-5 flex items-center justify-center">
                        <div
                            class="w-full h-full border-2 border-gray-600 border-t-transparent rounded-full animate-spin">
                        </div>
                    </div>
                </div>

                <div v-else
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

            </div>

            <div class="flex flex-col flex-1">
                <div class="font-bold text-base">En preparación</div>
                <div class="font-medium text-sm text-[#7A6C8C] flex flex-nowrap">La tienda está alistando el pedido
                    para que quede listo para su recolección.</div>
            </div>

            <div class="font-medium text-sm text-[#7A6C8C] whitespace-nowrap">{{
                props.suborderDate.slice(0, 10) }}</div>
        </div>
    </div>
</template>

<script setup>

import { ref } from 'vue';


let isPreparing = ref(false)
const props = defineProps({
    suborderStatus: {
        type: String,
        required: false
    },
    suborderDate: {
        type: String,
        required: false
    }
})


if (props.suborderStatus === "PREPARING") {
    isPreparing = true;
}

</script>