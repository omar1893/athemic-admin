<template>
  <div class="max-w-md mx-auto py-8">
    <h1 class="text-2xl font-semibold mb-6">Crear nuevo tag</h1>
    <form @submit.prevent="handleSubmit" class="flex flex-col gap-4 bg-white p-8 rounded-xl shadow">
      <div>
        <label for="tag-name" class="block text-sm font-medium text-gray-700 mb-1">Nombre del tag<span class="text-red-500">*</span></label>
        <input id="tag-name" v-model="nombre" type="text" required placeholder="Ej: Electrónicos" class="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm" />
      </div>
      <div>
        <label for="tag-desc" class="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
        <input id="tag-desc" v-model="descripcion" type="text" placeholder="Descripción del tag" class="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm" />
      </div>
      <button type="submit" class="w-full mt-2 px-4 py-2 rounded-md bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition">Crear Tag</button>
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