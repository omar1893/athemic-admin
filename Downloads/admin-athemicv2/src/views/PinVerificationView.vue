<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold mb-6 text-center">Verifica tu código</h1>
      <form @submit.prevent="handlePinSubmit" class="flex flex-col gap-4">
        <div class="flex gap-2 justify-center">
          <input v-for="(digit, i) in 6" :key="i" v-model="pinDigits[i]" maxlength="1" type="text" inputmode="numeric" pattern="[0-9]*" class="w-12 h-12 text-center border rounded-md text-xl font-bold focus:ring-2 focus:ring-indigo-500" @input="onInput(i)" />
        </div>
        <button type="submit" class="w-full mt-2 px-4 py-2 rounded-md bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition" :disabled="loading || !isPinComplete">
          {{ loading ? 'Verificando...' : 'Confirmar' }}
        </button>
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { authService } from '@/services/authService'

const route = useRoute()
const router = useRouter()
const email = ref(route.query.email || '')
const pinDigits = ref(['', '', '', '', '', ''])
const loading = ref(false)

const isPinComplete = computed(() => pinDigits.value.every(d => d !== ''))

function onInput(i) {
  if (pinDigits.value[i].length > 1) {
    pinDigits.value[i] = pinDigits.value[i].slice(-1)
  }
  if (pinDigits.value[i] && i < 5) {
    const next = document.querySelectorAll('input[type=text]')[i+1]
    next && next.focus()
  }
}

async function handlePinSubmit() {
  if (!isPinComplete.value) return
  loading.value = true
  try {
    const code = pinDigits.value.join('')
    const res = await authService.confirmLogin(email.value, code)
    console.log(res)
    if (res && res.data.accessToken) {
      localStorage.setItem('accessToken', res.data.accessToken)
      router.push({ name: 'orders' })
    } else {
      alert('Respuesta inesperada del servidor')
    }
  } catch (e) {
    alert('Código incorrecto')
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  const first = document.querySelector('input[type=text]')
  first && first.focus()
})
</script> 