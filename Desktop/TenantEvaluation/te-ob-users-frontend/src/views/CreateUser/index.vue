<template>
  <div class="min-h-screen bg-[#ededed] flex">
    <!-- Menu lateral (placeholder) -->
    <div class="w-[157px] bg-[#4e445a] flex flex-col items-center justify-start px-6 py-[41px] gap-20">
      <div class="size-[55.818px] overflow-clip relative">
        <img src="http://localhost:3845/assets/251c75fc5232def3319bdc2dc452419eb440dc21.svg" alt="Logo" class="absolute inset-[1.067%]" />
      </div>
      <div class="flex flex-col gap-16 h-[1118.82px] items-center justify-start w-[109px]">
        <div class="flex flex-row gap-1 items-center justify-center p-1 rounded-lg w-[109px]">
          <img src="http://localhost:3845/assets/a2c5d95e0a24d8be9ff31b973f9f54712d5710c4.svg" alt="Dashboard" class="size-7" />
        </div>
        <div class="w-full">
          <div class="flex flex-row items-center justify-center w-full">
            <div class="flex flex-row gap-1 items-center justify-center p-1 w-full">
              <img src="http://localhost:3845/assets/3780a7681d40a094f7a66e2f9f0543e4c2d1c32b.svg" alt="Logout" class="size-6" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Contenido principal -->
    <div class="flex flex-col gap-6 items-start justify-start px-60 py-20 w-[1283px]">
      <!-- Header con back button y progress bar -->
      <div class="flex flex-row items-center justify-between px-0 py-2 w-full">
        <button class="backdrop-blur-[62.8px] backdrop-filter bg-white flex flex-row gap-2 items-center justify-center p-3 rounded-[32px] shadow-[3px_4px_63.5px_0px_rgba(243,224,224,0.48)] cursor-pointer" @click="goBack">
          <div class="overflow-clip relative size-4">
            <img src="http://localhost:3845/assets/2a366fc9e6a80d878f221e9ec9685363744427ca.svg" alt="Back" class="absolute inset-[10.906%]" />
          </div>
        </button>

        <!-- Progress Bar -->
        <div class="flex flex-row gap-[9px] items-center justify-start">
          <div v-for="(step, index) in steps" :key="step.key" class="flex flex-col gap-1 items-center justify-center w-[94px]">
            <div
              :class="[
                'h-2 rounded-[420.632px] w-full',
                currentStep >= index ? 'bg-[#4e445a]' : 'bg-[#4e445a] opacity-20'
              ]"
            ></div>
            <div class="font-normal text-[12px] text-[#7a6c8c] leading-[1.8]">
              {{ step.label }}
            </div>
          </div>
        </div>

        <!-- Placeholder para balancear el layout -->
        <button class="backdrop-blur-[62.8px] backdrop-filter bg-white flex flex-row gap-2 items-center justify-center p-3 rounded-[32px] shadow-[3px_4px_63.5px_0px_rgba(243,224,224,0.48)] opacity-0">
          <div class="overflow-clip relative size-4">
            <img src="http://localhost:3845/assets/2a366fc9e6a80d878f221e9ec9685363744427ca.svg" alt="Back" class="absolute inset-[10.906%]" />
          </div>
        </button>
      </div>

      <!-- Título y subtítulo -->
      <div class="flex flex-col gap-4 items-center justify-center w-full">
        <h1 class="font-medium text-[#4e445a] text-[28px] leading-[1.2]">{{ currentStepData.title }}</h1>
        <p class="font-normal text-[#7a6c8c] text-[16px] leading-[1.4]">{{ currentStepData.subtitle }}</p>
      </div>

      <!-- Contenido del paso actual -->
      <div class="bg-white rounded-xl w-full">
        <component :is="currentStepComponent" @next="nextStep" @previous="previousStep" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import UserInfoStep from './steps/UserInfoStep.vue';
import RoleStep from './steps/RoleStep.vue';
import SetupStep from './steps/SetupStep.vue';
import ConfirmationStep from './steps/ConfirmationStep.vue';

const currentStep = ref(0);

const steps = [
  { key: 'user-info', label: 'User info', component: UserInfoStep },
  { key: 'role', label: 'Role', component: RoleStep },
  { key: 'setup', label: 'Setup', component: SetupStep },
  { key: 'confirmation', label: 'Confirmation', component: ConfirmationStep }
];

const stepData = [
  {
    title: 'Invite User',
    subtitle: 'Please ensure that all the information is correct before submitting an invitation'
  },
  {
    title: 'Assign Role',
    subtitle: 'Select a Role for this User'
  },
  {
    title: 'Setup',
    subtitle: 'Configure user settings and permissions'
  },
  {
    title: 'Confirmation',
    subtitle: 'Review and confirm user invitation'
  }
];

const currentStepData = computed(() => stepData[currentStep.value]);
const currentStepComponent = computed(() => steps[currentStep.value].component);

function nextStep() {
  if (currentStep.value < steps.length - 1) {
    currentStep.value++;
  }
}

function previousStep() {
  if (currentStep.value > 0) {
    currentStep.value--;
  }
}

function goBack() {
  if (currentStep.value > 0) {
    previousStep();
  } else {
    // Navegar de vuelta a la vista de usuarios
    window.history.back();
  }
}
</script>
