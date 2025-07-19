<template>
  <form class="flex flex-col gap-6 bg-white p-8 sm:p-8 p-4 rounded-xl" @submit.prevent="handleSubmit">
    <div>
      <label for="product-name" class="block text-sm font-medium text-gray-700 mb-1">Nombre del Producto<span class="text-red-500">*</span></label>
      <input id="product-name" v-model="form.name" type="text" required placeholder="Ej: Auriculares Inalámbricos Pro" class="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm" />
    </div>
    <div>
      <label for="product-description" class="block text-sm font-medium text-gray-700 mb-1">Descripción<span class="text-red-500">*</span></label>
      <textarea id="product-description" v-model="form.description" required rows="4" placeholder="Descripción detallada del producto..." class="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"></textarea>
    </div>
    <div class="flex flex-col sm:flex-row gap-4">
      <div class="flex-1">
        <label for="product-price" class="block text-sm font-medium text-gray-700 mb-1">Precio<span class="text-red-500">*</span></label>
        <div class="relative">
          <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">€</span>
          <input id="product-price" v-model.number="form.price" type="number" step="0.01" min="0" required placeholder="129.99" class="block w-full rounded-md border border-gray-300 pl-8 pr-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm" />
        </div>
      </div>
      <div class="flex-1">
        <label for="product-quantity" class="block text-sm font-medium text-gray-700 mb-1">Cantidad<span class="text-red-500">*</span></label>
        <div class="relative">
          <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">#</span>
          <input id="product-quantity" v-model.number="form.quantity" type="number" min="0" required placeholder="50" class="block w-full rounded-md border border-gray-300 pl-8 pr-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm" />
        </div>
      </div>
    </div>
    <div>
      <label for="product-tags" class="block text-sm font-medium text-gray-700 mb-1">Tags</label>
      <Multiselect
        id="product-tags"
        v-model="form.tagIds"
        :options="tags"
        mode="tags"
        :close-on-select="false"
        :searchable="true"
        placeholder="Selecciona o escribe tags"
        label="label"
        track-by="value"
        :create-option="false"
        class="mb-2"
      />
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">Imágenes del Producto<span class="text-red-500">*</span></label>
      <ImageUpload @update:files="files => form.images = files" />
    </div>
    <div>
      <label class="flex items-center gap-2 cursor-pointer select-none">
        <input type="checkbox" v-model="showDiscount" class="accent-indigo-600">
        <span class="text-sm font-medium text-gray-700">Agregar Descuento</span>
      </label>
      <DiscountFields v-if="showDiscount" v-model:percentage="form.discountPercentage" v-model:expiration="form.discountExpiration" :show="showDiscount" />
    </div>
    <button type="submit" class="w-full mt-4 px-4 py-3 rounded-md bg-indigo-600 text-white text-lg font-bold hover:bg-indigo-700 transition disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed">
      Crear Producto
    </button>
  </form>
</template>
<script setup>
import { ref, onMounted, watch } from 'vue'
import ImageUpload from './ImageUpload.vue'
import DiscountFields from './DiscountFields.vue'
import Multiselect from '@vueform/multiselect'
import { tagsService } from '@/services/tagsService'
const emit = defineEmits(['submit'])
const form = ref({
  name: '',
  description: '',
  price: null,
  quantity: null,
  store: '',
  images: [],
  discountPercentage: null,
  discountExpiration: '',
  tagIds: []
})
const showDiscount = ref(false)
const tags = ref([])
onMounted(async () => {
  try {
    const res = await tagsService.getAll()
    tags.value = res.data.map(tag => ({ value: tag.id, label: tag.nombre }))
  } catch (e) {
    tags.value = []
  }
})
watch(() => form.value.tagIds, (val) => { console.log('tagIds seleccionados:', val) })
function handleSubmit() {
  emit('submit', { ...form.value })
}
</script>
<style src="@vueform/multiselect/themes/default.css"></style> 