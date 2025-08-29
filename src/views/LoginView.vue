<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
      <div class="poppins font-medium text-2xl mb-6 text-gray-950">Iniciar sesión</div>
      <form @submit.prevent="handleLogin" class="flex monserrat flex-col gap-4">
        <div>
          <label for="email" class="block text-base font-semibold mb-1">Email</label>
          <input id="email" v-model="email" type="email" required placeholder="Ingresa tu email" class="block w-full rounded-[16px] border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm" />
        </div>
        <button type="submit" class="mt-2 px-4 py-2 rounded-[16px] bg-[#875EF8] inline-block self-center text-white font-bold" :disabled="loading">
          {{ loading ? 'Enviando...' : 'Enviar código' }}
        </button>
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { authService } from '@/services/authService'

const email = ref('')
const loading = ref(false)
const router = useRouter()

async function handleLogin() {
  loading.value = true
  try {
    await authService.loginWithEmail(email.value)
    router.push({ name: 'pinVerification', query: { email: email.value } })
  } catch (e) {
    alert('Error al enviar el código')
  } finally {
    loading.value = false
  }
}
</script> 