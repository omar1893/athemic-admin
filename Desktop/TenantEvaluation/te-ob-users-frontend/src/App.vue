<template>
  <Toast />
  <div class="min-h-screen flex flex-col dark:bg-surface-800 bg-gray-100">
     <div class="flex-1 flex flex-col w-full">
      <router-view />
    </div>
    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue';
import Toast from 'primevue/toast';
import { useAuthStore } from '@/stores/auth';

import FooterComponent from '@/components/FooterComponent.vue';

const authStore = useAuthStore();

function getTokenFromCookies(): string | null {
  const cookies = document.cookie.split(';');
  const tokenCookie = cookies.find(cookie => cookie.trim().startsWith('token='));

  if (tokenCookie) {
    return tokenCookie.split('=')[1];
  }

  return null;
}

onBeforeMount(() => {
  const isDarkMode = localStorage.getItem('darkMode') === 'true';

  if (isDarkMode) {
    document.documentElement.classList.add('app-dark');
  }

  // Obtener el token de la sesión y guardarlo en el store
  const token = getTokenFromCookies();

  if (token) {
    console.log('Token encontrado:', token);
    authStore.setToken(token);

    // Verificar si el token está expirado
    if (authStore.isTokenExpired) {
      console.log('Token expirado');
      authStore.clearToken();
    } else {
      console.log('Token válido');
      console.log('Datos del token:', authStore.getTokenData());
      console.log('Usuario:', authStore.getUserName());
      console.log('Email:', authStore.getUserEmail());
      console.log('Rol:', authStore.getUserRole());
    }
  } else {
    console.log('No se encontró token en las cookies');
  }
});
</script>
