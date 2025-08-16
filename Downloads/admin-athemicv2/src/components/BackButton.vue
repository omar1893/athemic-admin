<template>
  <div class="w-8 h-8 bg-[#170033]/8 mb-5 rounded-full flex items-center justify-center">
  <button type="button" @click="goBack">
    <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7.30273 13C5.12194 11.423 3.16633 9.57707 1.48557 7.51012C1.24179 7.21033 1.24179 6.78967 1.48557 6.48988C3.16633 4.42294 5.12194 2.57701 7.30273 1"
                        stroke="#303A47" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
    <slot></slot>
  </button>
</div>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function goBack() {
  router.back()
}
</script> 