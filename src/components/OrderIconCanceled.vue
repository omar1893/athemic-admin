<template>

<div class="flex items-center justify-between gap-5">
    <div class="flex h-20 gap-5">
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
                    <div class="font-bold text-base">Cancelada</div>
                    <div class="font-medium text-sm text-[#7A6C8C] whitespace-nowrap">
                        La orden ha sido cancelada.
                    </div>
                </div>
            </div>

                <div class="font-medium text-sm text-[#7A6C8C] whitespace-nowrap">{{
                    props.suborderDate.slice(0, 10) }}</div>
            </div>


</template> 

<script setup>

const props = defineProps({
    suborderDate: {
        type: String,
        required: false
    }
})
</script>