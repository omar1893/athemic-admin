<script setup>
import { ref } from "vue";

const conversaciones = ref([
  {
    id: 1,
    nombre: "Moses Bogan",
    asunto: "Cambio de Contraseña",
    hora: "8:34 a.m.",
    mensajes: [
      { texto: "Hola, necesito cambiar la contraseña", hora: "2:34 p.m.", emisor: "usuario" },
      { texto: "Claro, ya te ayudo con eso", hora: "2:35 p.m.", emisor: "soporte" },
      { texto: "Gracias, no podía acceder a mi cuenta", hora: "2:36 p.m.", emisor: "usuario" }
    ]
  },
  {
    id: 2,
    nombre: "Jane Doe",
    asunto: "Problema con pago",
    hora: "9:15 a.m.",
    mensajes: [
      { texto: "Tengo un error al pagar", hora: "3:00 p.m.", emisor: "usuario" },
      { texto: "Ok, verificamos tu caso", hora: "3:05 p.m.", emisor: "soporte" }
    ]
  },
  {
    id: 2,
    nombre: "Jane Bob",
    asunto: "Problema con pago",
    hora: "9:15 a.m.",
    mensajes: [
      { texto: "Tengo un error al pagar", hora: "3:00 p.m.", emisor: "usuario" },
      { texto: "Ok, verificamos tu caso", hora: "3:05 p.m.", emisor: "soporte" }
    ]
  },
  {
    id: 2,
    nombre: "Jane Fred",
    asunto: "Problema con pago",
    hora: "9:15 a.m.",
    mensajes: [
      { texto: "Tengo un error al pagar", hora: "3:00 p.m.", emisor: "usuario" },
      { texto: "Ok, verificamos tu caso", hora: "3:05 p.m.", emisor: "soporte" }
    ]
  },
  {
    id: 2,
    nombre: "Jane Pete",
    asunto: "Problema con pago",
    hora: "9:15 a.m.",
    mensajes: [
      { texto: "Tengo un error al pagar", hora: "3:00 p.m.", emisor: "usuario" },
      { texto: "Ok, verificamos tu caso", hora: "3:05 p.m.", emisor: "soporte" }
    ]
  },
  {
    id: 2,
    nombre: "Jane Jim",
    asunto: "Problema con pago",
    hora: "9:15 a.m.",
    mensajes: [
      { texto: "Tengo un error al pagar", hora: "3:00 p.m.", emisor: "usuario" },
      { texto: "Ok, verificamos tu caso", hora: "3:05 p.m.", emisor: "soporte" }
    ]
  }
]);

// Estado para guardar la conversación seleccionada
const seleccionada = ref(null);

// Función para seleccionar una conversación
const seleccionarConversacion = (convo) => {
  seleccionada.value = convo;
};
</script>



<template>
  <div class="fixed top-0 right-0 h-screen w-[calc(100%-18rem)] flex">

    <!-- sección lista conversaciones -->
    <section class="monserrat shadow-md bg-[#9747FF]/5 h-full w-[60%] pt-6 pb-15 pl-10 pr-5">

      <div>
        <div class="font-semibold mb-10 text-[#170033]">Últimas Solicitudes</div>

        <div class="flex mb-10 justify-between items-center">
          <div class="relative">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg class="h-4 w-4 text-[#170033]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
                stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>
            <input type="search" placeholder="Buscar tienda"
              class="bg-white placeholder:font-medium placeholder-opacity-100 border-2 border-[#17003314] rounded-full placeholder:text-[#170033] py-1 pl-8" />
          </div>
          <div
            class=" text-sm bg-[#875EF8] disabled:bg-[#875EF859] disabled:text-white disabled:cursor-not-allowed rounded-full text-white py-1 px-1">
            <button>Nuevo chat</button>
          </div>
        </div>
      </div>

      <!-- Conversaciones dentro de la lista-->
      <div>
        <ul>
          <li v-for="convo in conversaciones" :key="convo.id" @click="seleccionarConversacion(convo)"
            class="cursor-pointer p-2 rounded-lg hover:bg-[#875EF820]">
            <div class="flex mb-5">
              <div class="flex-col">
                <div class="font-semibold text-sm text-[#04151F]">{{ convo.nombre }}</div>
                <div class="text-sm font-medium text-[#04151F]">{{ convo.asunto }}</div>
              </div>

              <div class="ml-auto font-normal text-xs flex flex-col">
                <span>{{ convo.hora }}</span>
                <div class="text-right mt-1">
                  <span class="px-2 py-0.5 rounded-full bg-[#875EF8] text-white text-xs font-semibold">1</span>
                </div>
              </div>
            </div>
          </li>


        </ul>
      </div>
    </section>

    <!-- Sección derecha -->
    <section class="w-full bg-white-100 flex flex-col h-full">


      <!-- Cabecera del chat -->
      <div v-if="seleccionada" class=" flex items-center shadow-b shadow-sm p-4 gap-2 monserrat">
        <div><svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M25.8089 25.5283C25.6734 23.1895 23.6391 21.3327 21.1494 21.3327H11.8161C9.32643 21.3327 7.29213 23.1895 7.1566 25.5283M25.8089 25.5283C28.2816 23.1079 29.8161 19.7328 29.8161 15.9993C29.8161 8.63555 23.8465 2.66602 16.4827 2.66602C9.11895 2.66602 3.14941 8.63555 3.14941 15.9993C3.14941 19.7328 4.68391 23.1079 7.1566 25.5283M25.8089 25.5283C23.4045 27.8818 20.1131 29.3327 16.4827 29.3327C12.8524 29.3327 9.56098 27.8818 7.1566 25.5283M20.4827 13.3327C20.4827 15.5418 18.6919 17.3327 16.4827 17.3327C14.2736 17.3327 12.4827 15.5418 12.4827 13.3327C12.4827 11.1235 14.2736 9.33268 16.4827 9.33268C18.6919 9.33268 20.4827 11.1235 20.4827 13.3327Z"
              stroke="#170033" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
          </svg></div>
        <div>
          <p class="text-base font-semibold text-[#170033]">{{ seleccionada.nombre }}</p>
          <p class="text-sm font-medium text-[#170033]">Última vez a las {{ seleccionada.hora }}</p>
        </div>
      </div>

      <!-- Placeholder si no hay selección -->
      <div v-if="!seleccionada"
        class="flex flex-col items-center justify-center h-full poppins text-base font-light text-gray-500">
        <img src="/src/assets/logo/athemic.svg">
        <p>Selecciona una conversación para comenzar</p>
      </div>

      <!-- Mensajes -->
      <div v-if="seleccionada" class="monserrat font-medium flex-1 overflow-y-auto p-6 space-y-2">
        <div v-for="(msg, index) in seleccionada.mensajes" :key="index" class="flex"
          :class="msg.emisor === 'usuario' ? 'justify-start' : 'justify-end'">
          <div class="max-w-[70%] p-3 rounded-xl text-sm" :class="msg.emisor === 'usuario'
            ? 'bg-gray-100 text-gray-800 rounded-bl-none'
            : 'bg-purple-100 text-gray-900 rounded-br-none'">
            {{ msg.texto }}
            <div class="text-xs text-gray-500 mt-1 text-left">
              {{ msg.hora }}
            </div>
          </div>
        </div>
      </div>

      <!-- Eviar mensaje -->
      <div class="flex gap-2 mx-4 mb-4 items-center justify-center" v-if="seleccionada">
        <div class="flex rounded-full bg-[#170033]/8 px-2 h-8 items-center justify-center font-semibold"><svg width="21"
            height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.4827 15.8337V10.0003M10.4827 10.0003V4.16699M10.4827 10.0003L4.64941 10.0003M10.4827 10.0003L16.3161 10.0003"
              stroke="#170033" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <input type="text" class="border border-[#170033]/8 px-3 h-10 w-full mr-2 rounded-full">
      </div>

    </section>
  </div>
</template>