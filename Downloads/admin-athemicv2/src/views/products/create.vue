<template>
  <div class="max-w-2xl mx-auto py-8">
    <BackButton></BackButton>
    <div class="items-center mb-5 flex justify-between">
      <div class="monserrat text-2xl font-semibold">{{ isEditing ? productData?.name : 'Nuevo producto' }}</div>
      <div class="monserrat">

        <button v-show="isEdited" @click="buttonCancel()" class="m-5 font-semibold text-[#170033] text-sm">cancelar</button>

        <button type="submit" @click="buttonCondition()" 
          class="px-4 py-3 rounded-full text-white text-sm font-semibold bg-[#875EF8] disabled:bg-[#875EF859]
          disabled:text-white disabled:cursor-not-allowed">
          {{ isEditing ? editCondition : 'Crear Producto' }}
        </button>

        <div>
      <ModalDefault :show="saveProduct" @close="saveProduct = false">
        <slot>
          <div class=" monserrat flex mt-10 flex-col items-center justify-center">
            <div class=" flex items-center justify-center w-12 h-12 rounded-full bg-[#875EF8]">
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0762 21C16.0942 17.7256 16.1653 24.3574 21.0762 19M3.14233 18.3151C3.15163 17.9381 3.15628 17.7497 3.20185 17.5726C3.24225 17.4156 3.30624 17.2658 3.39161 17.1282C3.48788 16.973 3.62061 16.8396 3.88607 16.573L16.9388 3.46297C17.4624 2.93708 18.2802 2.84896 18.9029 3.25131C19.6412 3.7283 20.2719 4.3551 20.7547 5.09146L20.7885 5.14307C20.813 5.18037 20.8252 5.19902 20.8356 5.21582C21.2189 5.83327 21.1378 6.63294 20.6384 7.16005C20.6248 7.17439 20.6091 7.19018 20.5776 7.22177L7.60428 20.2521C7.32891 20.5287 7.19122 20.6669 7.03052 20.7658C6.88805 20.8534 6.73271 20.9178 6.57023 20.9568C6.38696 21.0008 6.19225 21.0005 5.80282 20.9999L3.07617 20.9955L3.14233 18.3151Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </div>
            <div class="mt-2 mb-2 font-semibold text-black text-xl">¿Aplicar los cambios realizados?</div>
          </div>

          <div class="monserrat flex flex-col font-medium text-[#170033] text-center text-sm">
            <div class="mb-4">Estás por actualizar los datos de este producto.</div>
            <div>Asegúrate que todo esté correcto antes de guardar los cambios.</div>
          </div>
        </slot>

        <div class=" monserrat flex justify-around gap-10">
          <button @click="cancelEditProduct()" class="w-full mt-4 px-4 py-2 text-sm font-semibold text-black">
            Cancelar
          </button>

          <button @click="goToProductsEdited()"
            class="w-full mt-4 px-2 font-medium py-3 bg-[#875EF8] rounded-full text-white text-sm">
            Guardar cambios </button>
        </div>
      </ModalDefault>
    </div>
      </div>
    </div>

    <div>
      <ModalDefault :show="createProduct" @close="createProduct = false">
        <slot>
          <div class=" monserrat flex mt-10 flex-col items-center justify-center">
            <div class=" flex items-center justify-center w-12 h-12 rounded-full bg-[#875EF8]">
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.1689 13V10M10.1689 10V7M10.1689 10H7.16895M10.1689 10H13.1689M10.1689 19C7.3733 19 5.97547 19 4.87285 18.5433C3.40268 17.9343 2.23463 16.7663 1.62567 15.2961C1.16895 14.1935 1.16895 12.7956 1.16895 10C1.16895 7.20435 1.16895 5.80653 1.62567 4.7039C2.23463 3.23373 3.40268 2.06569 4.87285 1.45672C5.97547 1 7.3733 1 10.1689 1C12.9646 1 14.3624 1 15.465 1.45672C16.9352 2.06569 18.1033 3.23373 18.7122 4.7039C19.1689 5.80653 19.1689 7.20435 19.1689 10C19.1689 12.7956 19.1689 14.1935 18.7122 15.2961C18.1033 16.7663 16.9352 17.9343 15.465 18.5433C14.3624 19 12.9646 19 10.1689 19Z"
                  stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            </div>
            <div class="mt-2 mb-2 font-semibold text-black text-xl">Crear Producto</div>
          </div>

          <div class="monserrat flex flex-col font-medium text-[#170033] text-center text-sm">
            <div class="mb-4">Estás por agregar un nuevo producto al catálogo.</div>
            <div>Verifica que toda la información esté correcta antes de confirmar. Podrás editarlo más adelante si es
              necesario.</div>
          </div>
        </slot>

        <div class=" monserrat flex justify-around gap-10">
          <button @click="createProduct = false" class="w-full mt-4 px-4 py-2 text-sm font-semibold text-black">
            Cancelar
          </button>

          <button @click="goToProductsCreated(), probarSubmit(), handleSubmit(formNewProduct)" :disabled="!validForm"
            class="w-full mt-4 px-2 font-medium py-3 bg-[#875EF8] rounded-full text-white text-sm disabled:cursor-not-allowed transition-colors duration-300 ease-in-out disabled:bg-[#875EF8]/50">
            Crear producto </button>
        </div>
      </ModalDefault>
    </div>

    <div v-if="loading" class="flex items-center justify-center py-8">
      <span class="text-lg text-gray-500">Cargando...</span>
    </div>
    <ProductForm v-else :initial-data="productData" :is-editing="isEditing" :beingEdited="beingEdited" ref="productFormRef" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import BackButton from '@/components/BackButton.vue'
import ProductForm from '@/components/ProductForm.vue'
import { productsService } from '@/services/productsService'
import { useSellerStore } from '@/stores/sellerStore'
import ModalDefault from '../../components/ModalDefault.vue'
const createProduct = ref(false)
const saveProduct = ref(false)
const route = useRoute()
const router = useRouter()
const sellerStore = useSellerStore()
const loading = ref(false)
const productData = ref(null)
const productId = route.params.id
const isEditing = computed(() => !!productId)
const isEdited = ref(false)
const beingEdited = ref(false)
const editCondition = ref("Editar producto")
const productFormRef = ref(null)
const validForm = ref(false)
const formNewProduct = ref({})


function probarSubmit () {
  console.log(formNewProduct.value)
  console.log(validForm.value)
}

watch(
  () => (productFormRef.value ? productFormRef.value.checkFields() : false),
  (nuevoValor) => {
    validForm.value = nuevoValor
  },
  { immediate: true }
)

watch (
  () => (productFormRef.value ? productFormRef.value.form : null),
  (nuevoValor) => {
    formNewProduct.value = nuevoValor
  },
  { immediate: true }
)

const fetchProduct = async () => {
  if (!productId) return

  try {
    loading.value = true
    const token = localStorage.getItem('accessToken')
    const response = await productsService.getById(productId, {
      headers: { Authorization: `Bearer ${token}` }
    })

    if (response.data) {
      productData.value = {
        name: response.data.nombre,
        description: response.data.descripcion,
        price: response.data.precio,
        quantity: response.data.contadorCarrito || 0,
        tagIds: response.data.tagIds || [],
        menuImage: response.data.menuImage || '',
        detailImages: response.data.detailImages || []
      }
    }
  } catch (error) {
    console.error('Error fetching product:', error)
    alert('Error al cargar el producto')
    router.push({ name: 'products' })
  } finally {
    loading.value = false
  }
}

const handleSubmit = async (product) => {
  try {
    const token = localStorage.getItem('accessToken')
    const sellerId = sellerStore.seller?.id
    if (!token || !sellerId) throw new Error('No autenticado')

    const payload = {
      nombre: product.name,
      precio: product.price,
      tagIds: product.tagIds || [],
      descripcion: product.description,
      menuImage: product.menuImage || '',
      detailImages: product.detailImages || []
    }
    
    console.log("Este es el payload: ", payload)

    if (isEditing.value) {
      // Update existing product
      await productsService.update(productId, payload, {
        headers: { Authorization: `Bearer ${token}` }
      })
      alert('Producto actualizado correctamente')
    } else {
      // Create new product
      await productsService.create(payload, {
        headers: { Authorization: `Bearer ${token}` }
      })
      alert('Producto creado correctamente')
    }
    router.push({ name: 'products' })
  } catch (e) {
    console.error('Error saving product:', e)
    alert(isEditing.value ? 'Error al actualizar el producto' : 'Error al crear el producto')
  }
}

function cancelEditProduct () {
  saveProduct.value = false, 
  beingEdited.value = false, 
  isEdited.value = false, 
  editCondition.value = 'Editar producto'
}

function buttonCondition () {
          if (isEditing.value && !beingEdited.value) {
            editCondition.value = 'Guardar cambios';
            isEdited.value = true;
            beingEdited.value = true;
          } else if (isEditing.value  && beingEdited.value ) {
            saveProduct.value = true
          } else if (!isEditing.value) {
            createProduct.value = true
          }}

function buttonCancel () {
          isEdited.value = false;
          editCondition.value = 'Editar productos';
          beingEdited.value = false;
}

onMounted(() => {
  if (isEditing.value) {
    fetchProduct()
  }
})

function goToProductsCreated () {
  router.push({ name: 'products', query: { success: 'created' } })
}

function goToProductsEdited () {
  router.push({ name: 'products', query: { success: 'edited' } })
}

</script>