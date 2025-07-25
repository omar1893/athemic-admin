<template>
  <div class="flex flex-col gap-8 items-start justify-start px-5 py-8 w-full">
    <h2 class="font-semibold text-[#4e445a] text-[20px] leading-[1.2]">Roles</h2>

    <div class="flex flex-col gap-7 items-start justify-start w-full">
      <!-- Organization Admin -->
      <div class="flex flex-row gap-[70px] items-center justify-start w-full">
        <div class="basis-0 flex flex-col gap-3 grow items-start justify-start min-h-px min-w-px">
          <div class="flex flex-row gap-2.5 items-center justify-center">
            <div class="font-semibold text-[#4e445a] text-[14px] leading-[1.2]">
              Organization Admin
            </div>
            <div class="bg-[#d7eaff] flex flex-row gap-2.5 items-center justify-center px-3 py-0.5 rounded-[999px]">
              <div class="font-normal text-[#4e445a] text-[14px] leading-[1.5]">
                Oversees the entire organization
              </div>
            </div>
          </div>
          <div class="font-normal text-[#7a6c8c] text-[14px] leading-[1.5] min-w-full">
            Can onboard new properties, manage all regional and property-level users, and access all applications across regions.
          </div>
        </div>
        <div class="flex flex-row items-center justify-center">
          <button
            @click="selectRole('Organization Admin')"
            class="box-border content-stretch cursor-pointer flex flex-row items-center justify-center p-0 relative size-6"
          >
            <div class="box-border content-stretch flex flex-row items-center justify-center overflow-clip p-0 relative rounded-[100px] shrink-0">
              <div class="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0">
                <div class="relative shrink-0 size-6">
                  <div class="absolute inset-[8.333%]">
                    <img
                      :src="selectedRole === 'Organization Admin' ? 'http://localhost:3845/assets/81974d71ff482c34f3a53c64bc6bbb6724e97ed4.svg' : 'http://localhost:3845/assets/2a366fc9e6a80d878f221e9ec9685363744427ca.svg'"
                      alt="Radio button"
                      class="block max-w-none size-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>

      <!-- Regional Admin -->
      <div class="flex flex-row gap-[70px] items-center justify-start w-full">
        <div class="basis-0 flex flex-col gap-3 grow items-start justify-start min-h-px min-w-px">
          <div class="flex flex-row gap-2.5 items-center justify-center">
            <div class="font-semibold text-[#4e445a] text-[14px] leading-[1.2]">
              Regional Admin
            </div>
            <div class="bg-[#fef1dd] flex flex-row gap-2.5 items-center justify-center px-3 py-0.5 rounded-[999px]">
              <div class="font-normal text-[#4e445a] text-[14px] leading-[1.5]">
                Manages properties within a specific region
              </div>
            </div>
          </div>
          <div class="font-normal text-[#7a6c8c] text-[14px] leading-[1.5] min-w-full">
            Responsible for onboarding properties, managing property admins, and overseeing application processing in their assigned region.
          </div>
        </div>
        <div class="flex flex-row items-center justify-center">
          <button
            @click="selectRole('Regional Admin')"
            class="box-border content-stretch cursor-pointer flex flex-row items-center justify-center p-0 relative size-6"
          >
            <div class="box-border content-stretch flex flex-row items-center justify-center overflow-clip p-0 relative rounded-[100px] shrink-0">
              <div class="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0">
                <div class="relative shrink-0 size-6">
                  <div class="absolute inset-[8.333%]">
                    <img
                      :src="selectedRole === 'Regional Admin' ? 'http://localhost:3845/assets/81974d71ff482c34f3a53c64bc6bbb6724e97ed4.svg' : 'http://localhost:3845/assets/2a366fc9e6a80d878f221e9ec9685363744427ca.svg'"
                      alt="Radio button"
                      class="block max-w-none size-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>

      <!-- Property Admin -->
      <div class="flex flex-row gap-[70px] items-center justify-start w-full">
        <div class="basis-0 flex flex-col gap-3 grow items-start justify-start min-h-px min-w-px">
          <div class="flex flex-row gap-2.5 items-center justify-center">
            <div class="font-semibold text-[#4e445a] text-[14px] leading-[1.2]">
              Property Admin
            </div>
            <div class="bg-[#e5f3e6] flex flex-row gap-2.5 items-center justify-center px-3 py-0.5 rounded-[999px]">
              <div class="font-normal text-[#4e445a] text-[14px] leading-[1.5]">
                Manages an individual property
              </div>
            </div>
          </div>
          <div class="font-normal text-[#7a6c8c] text-[14px] leading-[1.5] min-w-full">
            Handles property-specific onboarding tasks, manage applications, and manages documentation for their property.
          </div>
        </div>
        <div class="flex flex-row items-center justify-center">
          <button
            @click="selectRole('Property Admin')"
            class="box-border content-stretch cursor-pointer flex flex-row items-center justify-center p-0 relative size-6"
          >
            <div class="box-border content-stretch flex flex-row items-center justify-center overflow-clip p-0 relative rounded-[100px] shrink-0">
              <div class="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0">
                <div class="relative shrink-0 size-6">
                  <div class="absolute inset-[8.333%]">
                    <img
                      :src="selectedRole === 'Property Admin' ? 'http://localhost:3845/assets/81974d71ff482c34f3a53c64bc6bbb6724e97ed4.svg' : 'http://localhost:3845/assets/2a366fc9e6a80d878f221e9ec9685363744427ca.svg'"
                      alt="Radio button"
                      class="block max-w-none size-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>

      <!-- Board Director -->
      <div class="flex flex-row gap-[70px] items-center justify-start w-full">
        <div class="basis-0 flex flex-col gap-3 grow items-start justify-start min-h-px min-w-px">
          <div class="flex flex-row gap-2.5 items-center justify-center">
            <div class="font-semibold text-[#4e445a] text-[14px] leading-[1.2]">
              Board Director
            </div>
            <div class="bg-[#edeaf9] flex flex-row gap-2.5 items-center justify-center px-3 py-0.5 rounded-[999px]">
              <div class="font-normal text-[#4e445a] text-[14px] leading-[1.5]">
                Represents the property association's leadership
              </div>
            </div>
          </div>
          <div class="font-normal text-[#7a6c8c] text-[14px] leading-[1.5] min-w-full">
            Primarily reviews and approves applications, ensuring they align with association rules.
          </div>
        </div>
        <div class="flex flex-row items-center justify-center">
          <button
            @click="selectRole('Board Director')"
            class="box-border content-stretch cursor-pointer flex flex-row items-center justify-center p-0 relative size-6"
          >
            <div class="box-border content-stretch flex flex-row items-center justify-center overflow-clip p-0 relative rounded-[100px] shrink-0">
              <div class="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0">
                <div class="relative shrink-0 size-6">
                  <div class="absolute inset-[8.333%]">
                    <img
                      :src="selectedRole === 'Board Director' ? 'http://localhost:3845/assets/81974d71ff482c34f3a53c64bc6bbb6724e97ed4.svg' : 'http://localhost:3845/assets/2a366fc9e6a80d878f221e9ec9685363744427ca.svg'"
                      alt="Radio button"
                      class="block max-w-none size-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </button>
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
        :disabled="!selectedRole"
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

const selectedRole = ref<string>('');

onMounted(() => {
  // Cargar rol existente si lo hay
  const existingRole = createUserStore.userRole.role;
  if (existingRole) {
    selectedRole.value = existingRole;
  }
});

function selectRole(role: string) {
  selectedRole.value = role;
}

function handleContinue() {
  if (selectedRole.value) {
    // Guardar rol en el store
    createUserStore.setUserRole({
      role: selectedRole.value
    });

    console.log('Role selected:', selectedRole.value);
    emit('next');
  }
}
</script>
