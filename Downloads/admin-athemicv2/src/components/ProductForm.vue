<template>
  <div class="bg-white p-8 sm:p-8 p-4 rounded-xl">
    <form class="font-semibold flex monserrat flex-col gap-6" @submit.prevent="handleSubmit">
      <span class="text-black-600">Información del producto</span>
      <div class="text-[#170033]">
        <div class="flex gap-4 mb-5">
          <!-- <div class="w-full flex flex-col">
            <label for="product-name" class="text-sm mb-1">Tienda</label>
            <input id="product-name" v-model="form.name" type="text" required
              placeholder="Ej: Auriculares Inalámbricos Pro"
              class="rounded-[16px] border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm" />
          </div> -->
          <div class="w-full flex flex-col">
            <label for="product-name" class="text-sm mb-1">Nombre del Producto</label>
            <input id="product-name" v-model="form.name" type="text" required
              placeholder="Ej: Auriculares Inalámbricos Pro"
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
              <input id="product-quantity" v-model.number="form.quantity" type="number" min="0" required
                placeholder="50"
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
      <div>
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
    </div>
    </form>

    <Transition enter-active-class="transition ease-out duration-300" enter-from-class="opacity-0 translate-y-2"
      enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-2">
      <div v-show="beingEdited" class="monserrat mt-5 flex gap-5">

        <button type="button" @click="disableProductConfirm = true"
          class="flex items-center justify-center gap-3 px-4 py-2 rounded-full bg-gray-200 font-semibold">
          <span><svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="4.30273" cy="4.5" r="4" :fill="!disabledProduct ? '#EB5757' : 'green'" />
            </svg>
          </span> {{ !disabledProduct ? 'Inactivar Producto' : 'Activar Producto' }} </button>


        <button type="button" @click="deleteProductConfirm = true"
          class="font-bold bg-white border border-[#170033]/8 text-base disabled:bg-[#875EF859] disabled:text-white disabled:cursor-not-allowed rounded-full text-red-500 px-5 py-3">
          Eliminar Producto </button>
      </div>
    </Transition>

    <div>
      <ModalDefault :show="deleteProductConfirm" @close="deleteProductConfirm = false">
        <slot>
          <div class=" monserrat flex mt-10 flex-col items-center justify-center">
            <div class=" flex items-center justify-center w-12 h-12 rounded-full bg-[#170033]/8">
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.5605 7L15.455 4.78885C14.9068 3.69253 13.7863 3 12.5605 3C11.3348 3 10.2143 3.69253 9.66612 4.78885L8.56055 7M4.56055 7H20.5605M6.56055 7H18.5605V15C18.5605 16.8638 18.5605 17.7957 18.2561 18.5307C17.8501 19.5108 17.0714 20.2895 16.0913 20.6955C15.3562 21 14.4243 21 12.5605 21C10.6968 21 9.7649 21 9.02981 20.6955C8.0497 20.2895 7.271 19.5108 6.86503 18.5307C6.56055 17.7957 6.56055 16.8638 6.56055 15V7Z"
                  stroke="#EC221F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>


            </div>
            <div class="mt-2 mb-2 font-semibold text-black text-xl"><span>Eliminar producto</span></div>
          </div>

          <div class="monserrat flex flex-col font-medium text-[#170033] text-center text-sm">
            <div class="mb-4">Esta acción no se puede deshacer</div>
            <div>El producto será removido del catálogo y ya no estará disponible para los usuarios.</div>
          </div>
        </slot>

        <div class="monserrat flex justify-around gap-10">
          <button @click="deleteProductConfirm = false" class="w-full mt-4 px-4 py-2 text-sm font-semibold text-black">
            Cancelar
          </button>

          <button type="button" @click="goToStoreDelete()"
            class="w-full mt-4 px-1 font-semibold py-3 bg-[#EB5757]/12 text-red-600 rounded-full text-sm">Eliminar
            producto</button>
        </div>
      </ModalDefault>
    </div>

    <div>
      <ModalDefault :show="disableProductConfirm" @close="disableProductConfirm = false">
        <slot>
          <div class=" monserrat flex mt-10 flex-col items-center justify-center">
            <div class=" flex items-center justify-center w-12 h-12 rounded-full bg-[#170033]/8">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 8V12.8164C12 12.9874 12.0873 13.1465 12.2316 13.2383L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  stroke="#170033" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            </div>
            <div class="mt-2 mb-2 font-semibold text-black text-xl"><span>{{ !disabledProduct ? 'Inactivar Producto' :
                'Activar Producto' }}</span></div>
          </div>

          <div class="monserrat flex flex-col font-medium text-[#170033] text-center text-sm">
            <div class="mb-4">{{ !disabledProduct ? 'El producto dejará de estar visible en el catálogo y no podrá ser comprado por los usuarios.' : 'El producto volverá a estar visible en el catálogo y disponible para los usuarios.' }}</div>
            <div>{{ !disabledProduct ? 'Podrás volver a activarlo en cualquier momento.' : 'Asegúrate de que su información esté actualizada antes de activarlo.' }}</div>
          </div>
        </slot>

        <div class=" monserrat flex justify-around gap-10">
          <button @click="disableProductConfirm = false" class="w-full mt-4 px-4 py-2 text-sm font-semibold text-black">
            Cancelar
          </button>

          <button
            @click="buttonDisableEnable()"
            class="w-full mt-4 px-1 font-semibold py-3 bg-[#170033]/8 text-[#170033] rounded-full text-sm">{{
              !disabledProduct ? 'Desactivar Producto' : 'Activar Producto' }}</button>
        </div>
      </ModalDefault>
    </div>
  </div>

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
import { ref, onMounted, watch, reactive } from 'vue'
import ImageUpload from './ImageUpload.vue'
import DiscountFields from './DiscountFields.vue'
import Multiselect from '@vueform/multiselect'
import { tagsService } from '@/services/tagsService'
import ModalDefault from './ModalDefault.vue'
import Swal from 'sweetalert2'
import { useRoute, useRouter } from 'vue-router'


const props = defineProps({
  initialData: {
    type: Object,
    default: null
  },
  isEditing: {
    type: Boolean,
    default: false
  },
  beingEdited: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['submit'])

const alertInactive = (isDisabled) => {
  if (!isDisabled) {
    Swal.fire({
      toast: false,
      position: 'top-end',
      allowOutsideClick: false,
      allowEscapeKey: false,
      backdrop: false,
      html: `
        <div class="monserrat flex items-center gap-3">
          <div class="flex items-center justify-center bg-[#170033] w-7 h-7 border rounded-full">
            <svg width="28" height="28" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.0944 10.4697L8.24049 12.6135C9.27269 10.8086 10.7012 9.26158 12.4182 8.08908L12.5111 8.02568M17.5527 10C17.5527 14.5563 13.8591 18.25 9.30273 18.25C4.74639 18.25 1.05273 14.5563 1.05273 10C1.05273 5.44365 4.74639 1.75 9.30273 1.75C13.8591 1.75 17.5527 5.44365 17.5527 10Z" stroke="#E7DFFE" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="flex flex-col text-start">
            <span class="text-sm font-semibold">Producto desactivado correctamente</span>
            <span class="text-sm font-medium">Ya no se encuentra disponible en el catálogo.</span>
          </div>
        </div>
      `,
      showConfirmButton: false,
      timer: 3500,
      background: '#E7DFFE',
      color: '#170033',
      customClass: {
        popup: 'my-swal-popup'
      }
    })
  } else {
    Swal.fire({
      toast: false,
      position: 'top-end',
      allowOutsideClick: false,
      allowEscapeKey: false,
      backdrop: false,
      html: `
        <div class="monserrat flex items-center gap-3">
          <div class="flex items-center justify-center bg-[#170033] w-7 h-7 border rounded-full">
            <svg width="28" height="28" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.0944 10.4697L8.24049 12.6135C9.27269 10.8086 10.7012 9.26158 12.4182 8.08908L12.5111 8.02568M17.5527 10C17.5527 14.5563 13.8591 18.25 9.30273 18.25C4.74639 18.25 1.05273 14.5563 1.05273 10C1.05273 5.44365 4.74639 1.75 9.30273 1.75C13.8591 1.75 17.5527 5.44365 17.5527 10Z" stroke="#E7DFFE" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="flex flex-col text-start">
            <span class="text-sm font-semibold">Producto activado correctamente</span>
            <span class="text-sm font-medium">Ya se encuentra disponible en el catálogo.</span>
          </div>
        </div>
      `,
      showConfirmButton: false,
      timer: 3500,
      background: '#E7DFFE',
      color: '#170033',
      customClass: {
        popup: 'my-swal-popup'
      }
    })
  }
}

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

const router = useRouter()
const showDiscount = ref(false)
const tags = ref([])
const disableProductConfirm = ref(false)
const disabledProduct = ref(false)
const deleteProductConfirm = ref(false)

function goToStoreDelete() {
  router.push({ name: 'stores', query: { success: 'delete' } })
}

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

function buttonDisableEnable () {
  alertInactive(disabledProduct);
  disableProductConfirm.value = false; 
  disabledProduct.value = !disabledProduct.value;
}

</script>