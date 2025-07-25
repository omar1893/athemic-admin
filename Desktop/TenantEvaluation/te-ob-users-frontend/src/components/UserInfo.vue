<template>
  <div class="p-4 bg-white rounded-lg shadow">
    <h3 class="text-lg font-semibold text-[#4e445a] mb-4">Información del Usuario</h3>

    <div v-if="authStore.isAuthenticated && !authStore.isTokenExpired" class="space-y-2">
      <div class="flex items-center gap-2">
        <span class="font-medium text-[#4e445a]">Nombre completo:</span>
        <span class="text-[#7a6c8c]">{{ authStore.getUserName() || 'No disponible' }}</span>
      </div>

      <div class="flex items-center gap-2">
        <span class="font-medium text-[#4e445a]">Nombre:</span>
        <span class="text-[#7a6c8c]">{{ authStore.getUserFirstName() || 'No disponible' }}</span>
      </div>

      <div class="flex items-center gap-2">
        <span class="font-medium text-[#4e445a]">Apellido:</span>
        <span class="text-[#7a6c8c]">{{ authStore.getUserLastName() || 'No disponible' }}</span>
      </div>

      <div class="flex items-center gap-2">
        <span class="font-medium text-[#4e445a]">Email:</span>
        <span class="text-[#7a6c8c]">{{ authStore.getUserEmail() || 'No disponible' }}</span>
      </div>

      <div class="flex items-center gap-2">
        <span class="font-medium text-[#4e445a]">Subject:</span>
        <span class="text-[#7a6c8c]">{{ authStore.getSubject() || 'No disponible' }}</span>
      </div>

      <div class="flex items-center gap-2">
        <span class="font-medium text-[#4e445a]">Rol:</span>
        <span class="text-[#7a6c8c]">{{ authStore.getUserRole() || 'No disponible' }}</span>
      </div>

      <div class="flex items-center gap-2">
        <span class="font-medium text-[#4e445a]">Estado:</span>
        <span class="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Autenticado</span>
      </div>

      <div class="flex items-center gap-2">
        <span class="font-medium text-[#4e445a]">Expiración:</span>
        <span class="text-[#7a6c8c]">{{ formatExpiration() }}</span>
      </div>
    </div>

    <div v-else class="text-[#7a6c8c]">
      <p>No hay usuario autenticado o el token ha expirado.</p>
    </div>

    <div class="mt-4 pt-4 border-t">
      <button
        @click="clearAuth"
        class="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600"
      >
        Limpiar Autenticación
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();

function clearAuth() {
  authStore.clearToken();
  console.log('Autenticación limpiada');
}

function formatExpiration(): string {
  const tokenData = authStore.getTokenData();
  if (tokenData?.exp) {
    const expirationDate = new Date(tokenData.exp * 1000);
    return expirationDate.toLocaleString();
  }
  return 'No disponible';
}
</script>
