<template>
  <div class="orders-enhanced-container">
    <div class="poppins font-medium text-2xl mb-6 text-gray-950">Crear nuevo tag</div>
    <form @submit.prevent="handleSubmit" class="monserrat flex flex-col bg-white gap-4 rounded-xl">
      <div>
        <label for="tag-name" class="block text-sm font-semibold text-[#170033] mb-1">Nombre del tag</label>
        <input id="tag-name" v-model="nombre" type="text" required placeholder="Ej: Electrónicos"
          class="block w-full rounded-[16px] border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-[#170033] focus:border-[#170033] text-sm" />
      </div>
      <div>
        <label for="tag-desc" class="block text-sm font-semibold text-[#170033]mb-1">Descripción</label>
        <input id="tag-desc" v-model="descripcion" type="text" placeholder="Descripción del tag"
          class="block w-full rounded-[16px] border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#170033] focus:border-[#170033] text-sm" />
      </div>
      <button type="submit"
        class="mt-2 px-4 py-2 rounded-[16px] bg-[#875EF8] inline-block self-center text-white font-bold">Crear
        Tag</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { tagsService } from '@/services/tagsService'
import { useRouter } from 'vue-router'
const nombre = ref('')
const descripcion = ref('')
const router = useRouter()
async function handleSubmit() {
  try {
    await tagsService.create({ nombre: nombre.value, descripcion: descripcion.value })
    alert('Tag creado correctamente')
    router.push({ name: 'products' })
  } catch (e) {
    alert('Error al crear el tag')
  }
}
</script>