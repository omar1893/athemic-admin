<template>
  <div class="flex flex-col gap-6 items-start justify-start px-5 py-8 w-full">
    <h2 class="font-semibold text-[#4e445a] text-[20px] leading-[1.2]">Regions</h2>

    <div class="flex flex-col gap-2 items-start justify-start w-full">
      <div class="bg-[#f4f3f6] min-w-60 relative rounded-lg shrink-0 w-full">
        <div class="absolute border border-[#e7e4ea] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
        <div class="flex flex-col justify-center min-w-inherit relative size-full">
          <div class="flex flex-col gap-4 items-start justify-center min-w-inherit pl-4 pr-3 py-3 relative w-full">
            <!-- Search Header -->
            <div class="flex flex-row h-10 items-center justify-between min-w-60 px-0 py-4 relative rounded-lg shrink-0 w-full">
              <div class="flex flex-row font-normal gap-1.5 h-[22px] items-center justify-start leading-[1.4] p-0 relative shrink-0 text-[#4e445a] text-[16px] text-left">
                <div class="relative shrink-0">
                  <span class="text-nowrap">|</span>
                </div>
                <div class="opacity-50 relative shrink-0">
                  <span class="text-nowrap">Search Regions</span>
                </div>
              </div>
              <div class="overflow-clip relative shrink-0 size-5">
                <div class="absolute inset-[13.563%]">
                  <img
                    src="http://localhost:3845/assets/b60900a414c6c03bbcdc826e08447a015a920de7.svg"
                    alt="Search"
                    class="block max-w-none size-full"
                  />
                </div>
              </div>
            </div>

            <!-- Divider -->
            <div class="h-0 relative shrink-0 w-full">
              <div class="absolute bottom-0 left-0 right-0 top-[-1px]">
                <img
                  src="http://localhost:3845/assets/b50d1463d24d6aadfffb036dfe70d08f5b228175.svg"
                  alt="Divider"
                  class="block max-w-none size-full"
                />
              </div>
            </div>

            <!-- Regions List -->
            <div class="flex flex-col gap-6 items-start justify-center min-w-60 overflow-clip p-0 relative shadow-[8px_13px_25.2px_9px_rgba(122,108,140,0.13)] shrink-0 w-full">
              <div class="flex flex-row gap-4 items-center justify-center p-0 relative shrink-0 w-full">
                <div class="basis-0 flex flex-col gap-3 grow h-[253px] items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
                  <!-- Header with Select All -->
                  <div class="basis-0 flex flex-row grow items-center justify-between min-h-px min-w-px p-0 relative shrink-0 w-full">
                    <div class="font-medium relative shrink-0 text-[#7a6c8c] text-[12px] text-left text-nowrap tracking-[0.72px] uppercase">
                      Popular Regions
                    </div>
                    <button
                      @click="selectAllRegions"
                      class="bg-[#e7e4ea] flex flex-row gap-2 items-center justify-center overflow-clip px-3 py-2 relative rounded-xl shrink-0"
                    >
                      <div class="font-semibold relative shrink-0 text-[#4e445a] text-[14px] text-left text-nowrap">
                        Select all
                      </div>
                    </button>
                  </div>

                  <!-- Regions List -->
                  <div class="flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                    <div
                      v-for="region in regions"
                      :key="region.id"
                      class="flex flex-row gap-2 items-center justify-start px-0 py-4 relative rounded-xl shrink-0 w-full hover:bg-[#f4f3f6] cursor-pointer"
                      @click="toggleRegion(region.id)"
                    >
                      <div class="basis-0 flex flex-col gap-2 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
                        <div class="flex flex-col gap-2.5 items-center justify-center p-0 relative shrink-0">
                          <div class="flex flex-row gap-2.5 items-center justify-center p-0 relative shrink-0">
                            <div class="font-semibold relative shrink-0 text-[#4e445a] text-[14px] text-left text-nowrap">
                              {{ region.name }}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="overflow-clip relative shrink-0 size-5">
                        <div class="absolute inset-[8.333%]">
                          <img
                            :src="selectedRegions.includes(region.id) ? 'http://localhost:3845/assets/a131889457f7301d442c1a376fe12752aec27d7c.svg' : 'http://localhost:3845/assets/a131889457f7301d442c1a376fe12752aec27d7c.svg'"
                            alt="Checkbox"
                            class="block max-w-none size-full"
                            :class="{ 'opacity-50': !selectedRegions.includes(region.id) }"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-[#4e445a] h-[106px] opacity-20 shrink-0 w-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Buttons -->
    <div class="w-full flex justify-between pt-4">
      <button
        @click="$emit('previous')"
        class="bg-gray-300 text-[#4e445a] font-medium text-[16px] px-6 py-4 rounded-2xl"
      >
        Back
      </button>
      <button
        @click="handleContinue"
        :disabled="selectedRegions.length === 0"
        class="bg-[#4e445a] text-white font-medium text-[16px] px-6 py-4 rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#3a3447] transition-colors"
      >
        Continue
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useCreateUserStore } from '@/stores/createUser';

const emit = defineEmits(['next', 'previous']);
const createUserStore = useCreateUserStore();

const regions = [
  { id: 'west', name: 'Region West' },
  { id: 'east', name: 'Region East' },
  { id: 'central', name: 'Region Central' },
  { id: 'south', name: 'Region South' }
];

const selectedRegions = ref<string[]>([]);

onMounted(() => {
  // Cargar regiones seleccionadas existentes si las hay
  const existingSetup = createUserStore.userSetup;
  if (existingSetup.permissions && existingSetup.permissions.length > 0) {
    selectedRegions.value = existingSetup.permissions;
  }
});

function toggleRegion(regionId: string) {
  const index = selectedRegions.value.indexOf(regionId);
  if (index > -1) {
    selectedRegions.value.splice(index, 1);
  } else {
    selectedRegions.value.push(regionId);
  }
}

function selectAllRegions() {
  if (selectedRegions.value.length === regions.length) {
    selectedRegions.value = [];
  } else {
    selectedRegions.value = regions.map(region => region.id);
  }
}

function handleContinue() {
  if (selectedRegions.value.length > 0) {
    // Guardar configuración en el store
    createUserStore.setUserSetup({
      permissions: selectedRegions.value,
      settings: {
        regions: selectedRegions.value
      }
    });

    console.log('Setup saved:', createUserStore.userSetup);
    emit('next');
  }
}
</script>
