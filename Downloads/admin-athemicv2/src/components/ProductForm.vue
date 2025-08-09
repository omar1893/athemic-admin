<template>
  <form class="font-semibold flex monserrat flex-col gap-6 bg-white p-8 sm:p-8 p-4 rounded-xl"
    @submit.prevent="handleSubmit">
    <span class="text-black-600">Información del producto</span>
    <div class="text-[#170033]">
      <div class="flex gap-4 mb-5">
      <div class="w-full flex flex-col">
        <label for="product-name" class="text-sm mb-1">Tienda</label>
        <input id="product-name" v-model="form.name" type="text" required placeholder="Ej: Auriculares Inalámbricos Pro"
          class="rounded-[16px] border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm" />
      </div>
      <div class="w-full flex flex-col">
        <label for="product-name" class="text-sm mb-1">Nombre del Producto</label>
        <input id="product-name" v-model="form.name" type="text" required placeholder="Ej: Auriculares Inalámbricos Pro"
          class="rounded-[16px] border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm" />
      </div>
    </div>
      <div class="flex flex-col sm:flex-row gap-4 mb-5">
        <div class="flex-1">
          <label for="product-price" class="block text-sm mb-1">Precio</label>
          <div class="relative">
            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300">€</span>
            <input id="product-price" v-model.number="form.price" type="number" step="0.01" min="0" required
              placeholder="129.99"
              class="block w-full rounded-[16px] border border-gray-300 pl-8 pr-3 py-2 text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm" />
          </div>
        </div>
        <div class="flex-1">
          <label for="product-quantity" class="block text-sm mb-1">Cantidad</label>
          <div class="relative">
            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300">#</span>
            <input id="product-quantity" v-model.number="form.quantity" type="number" min="0" required placeholder="50"
              class="block w-full rounded-[16px] border border-gray-300 pl-8 pr-3 py-2 text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm" />
          </div>
        </div>
      </div>
      <div>
        <label for="product-description" class="block text-sm mb-1">Descripción</label>
        <textarea id="product-description" v-model="form.description" required rows="4"
          placeholder="Descripción detallada del producto..."
          class="block w-full rounded-[16px] border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"></textarea>
      </div>
    </div>
    <div>
      <label for="product-tags" class="block text-[#170033] font-semibold text-sm mb-1">Tags</label>

      <Multiselect id="product-tags" v-model="form.tagIds" :options="tags" mode="tags" :close-on-select="false"
        :searchable="true" placeholder="Selecciona o escribe tags" label="label" track-by="value"
        :create-option="false" />

    </div>
    <div class="text-[#170033]">
      <label for="product-menu-image" class="block text-sm font-semibold mb-1">First Image</label>
      <input id="product-menu-image" v-model="form.menuImage" type="url" required
        placeholder="https://ejemplo.com/imagen.jpg"
        class="block rounded-[16px] w-full border placeholder-gray-300 border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm" />
    </div>
    <!-- <div>
      <label class="block text-sm font-semibold text-black-600 mb-1">Carousel Images</label>
      <div class="space-y-2">
        <div v-for="(image, index) in form.detailImages" :key="index" class="flex gap-2">
          <input v-model="form.detailImages[index]" type="url" placeholder="https://ejemplo.com/imagen-carousel.jpg"
            class="flex-1 rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm" />
          <button type="button" @click="removeDetailImage(index)"
            class="px-3 py-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-md transition">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
        <button type="button" @click="addDetailImage"
          class="flex items-center gap-2 px-3 py-2 rounded-full text-black-600 hover:text-[#170033] hover:bg-[#875EF814] transition">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M12 4v16m8-8H4" />
          </svg>
          Agregar imagen
        </button>
      </div>
    </div> -->
  </form>

  <form class="font-semibold flex monserrat flex-col mt-5 gap-6 bg-white p-8 sm:p-8 p-4 rounded-xl">
    <div>
      <label class="block text-base font-semibold mb-1">Imágenes del Producto</label>
      <ImageUpload @update:files="files => form.images = files" />
    </div>
  </form>
  <form class="font-semibold flex monserrat flex-col mt-5 gap-6 bg-white p-8 sm:p-8 p-4 rounded-xl">
    <div>
      <label class="block text-base font-semibold mb-1"> Descuento
      </label>
      <input type="checkbox" v-model="showDiscount" class="rounded-[16px] accent-black">
      <span class="text-sm ml-2 font-medium text-[#170033]">Marca esta opcion si deseas habilitar un descuento para este
        producto</span>
      <DiscountFields v-if="showDiscount" v-model:percentage="form.discountPercentage"
        v-model:expiration="form.discountExpiration" :show="showDiscount" />
    </div>
  </form>

</template>
<script setup>
import { ref, onMounted, watch } from 'vue'
import ImageUpload from './ImageUpload.vue'
import DiscountFields from './DiscountFields.vue'
import Multiselect from '@vueform/multiselect'
import { tagsService } from '@/services/tagsService'

const props = defineProps({
  initialData: {
    type: Object,
    default: null
  },
  isEditing: {
    type: Boolean,
    default: false
  }
})

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
  tagIds: [],
  menuImage: '',
  detailImages: []
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

  // Pre-fill form with initial data if editing
  if (props.initialData) {
    form.value = {
      name: props.initialData.name || '',
      description: props.initialData.description || '',
      price: props.initialData.price || null,
      quantity: props.initialData.quantity || null,
      store: props.initialData.store || '',
      images: props.initialData.images || [],
      discountPercentage: props.initialData.discountPercentage || null,
      discountExpiration: props.initialData.discountExpiration || '',
      tagIds: props.initialData.tagIds || [],
      menuImage: props.initialData.menuImage || '',
      detailImages: props.initialData.detailImages || []
    }
  }
})

watch(() => form.value.tagIds, (val) => { console.log('tagIds seleccionados:', val) })

function addDetailImage() {
  form.value.detailImages.push('')
}

function removeDetailImage(index) {
  form.value.detailImages.splice(index, 1)
}

function handleSubmit() {
  emit('submit', { ...form.value })
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');


div.multiselect{
  font-family: 'Montserrat', sans-serif;
  font-weight:300;
  border-radius: 16px;
}

span.multiselect-tag{
  background-color: black !important;
}

div.multiselect-placeholder{
  font-family: 'Montserrat', sans-serif;
  font-weight:400;
  border-radius: 16px;
}

</style>

<style>@import "@vueform/multiselect/themes/default.css"; </style>
