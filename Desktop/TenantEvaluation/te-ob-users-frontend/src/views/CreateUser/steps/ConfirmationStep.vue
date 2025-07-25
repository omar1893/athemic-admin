<template>
  <div class="flex flex-col gap-8 items-start justify-start px-5 py-8 w-full">
    <h2 class="font-semibold text-[#4e445a] text-[20px] leading-[1.2]">Confirmation</h2>
    <div class="text-[#7a6c8c] text-[16px]">
      <p>Revisión y confirmación de la invitación - Paso 4</p>
      <p>Aquí se mostrará un resumen de toda la información antes de enviar la invitación</p>
    </div>
    <div class="w-full flex justify-between">
      <button
        @click="$emit('previous')"
        class="bg-gray-300 text-[#4e445a] font-medium text-[16px] px-6 py-4 rounded-2xl"
      >
        Back
      </button>
      <button
        @click="sendInvitation"
        class="bg-[#ff5048] text-white font-medium text-[16px] px-6 py-4 rounded-2xl"
      >
        Send Invitation
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineEmits(['next', 'previous']);

function sendInvitation() {
  console.log('Enviando invitación...');
  // Aquí irá la lógica para enviar la invitación
  // Después de enviar, navegar de vuelta a la vista de usuarios
  window.history.back();
}
</script>
