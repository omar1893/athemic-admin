<template>
  <div class="flex flex-col gap-6 items-start justify-start px-5 py-8 w-full">
    <h2 class="font-semibold text-[#4e445a] text-[20px] leading-[1.2]">User information</h2>

    <form @submit.prevent="handleSubmit" class="w-full space-y-6">
      <!-- First Row: First Name and Last Name -->
      <div class="flex flex-row gap-6 items-start justify-start w-full">
        <div class="basis-0 flex flex-col gap-2 grow items-start justify-start min-h-px min-w-px">
          <div class="bg-[#f4f3f6] min-w-60 relative rounded-lg shrink-0 w-full">
            <div class="flex flex-row items-center min-w-inherit overflow-clip relative size-full">
              <div class="box-border content-stretch flex flex-row items-center justify-start min-w-inherit px-4 py-3 relative w-full">
                <input
                  v-model="form.firstName"
                  type="text"
                  placeholder="First name"
                  class="basis-0 font-normal grow leading-[1.4] min-h-px min-w-px relative shrink-0 text-[#4e445a] text-[16px] text-left bg-transparent border-none outline-none placeholder-[#90849f]"
                  :class="{ 'text-red-500': v$.firstName.$error }"
                />
              </div>
            </div>
            <div class="absolute border border-[#e7e4ea] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
          </div>
          <div v-if="v$.firstName.$error" class="text-sm text-red-500">
            <span v-if="v$.firstName.required.$invalid">First name is required</span>
            <span v-else-if="v$.firstName.minLength.$invalid">First name must be at least 2 characters</span>
          </div>
        </div>

        <div class="basis-0 flex flex-col gap-2 grow items-start justify-start min-h-px min-w-px">
          <div class="bg-[#f4f3f6] min-w-60 relative rounded-lg shrink-0 w-full">
            <div class="flex flex-row items-center min-w-inherit overflow-clip relative size-full">
              <div class="box-border content-stretch flex flex-row items-center justify-start min-w-inherit px-4 py-3 relative w-full">
                <input
                  v-model="form.lastName"
                  type="text"
                  placeholder="Last name"
                  class="basis-0 font-normal grow leading-[1.4] min-h-px min-w-px relative shrink-0 text-[#4e445a] text-[16px] text-left bg-transparent border-none outline-none placeholder-[#90849f]"
                  :class="{ 'text-red-500': v$.lastName.$error }"
                />
              </div>
            </div>
            <div class="absolute border border-[#e7e4ea] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
          </div>
          <div v-if="v$.lastName.$error" class="text-sm text-red-500">
            <span v-if="v$.lastName.required.$invalid">Last name is required</span>
            <span v-else-if="v$.lastName.minLength.$invalid">Last name must be at least 2 characters</span>
          </div>
        </div>
      </div>

      <!-- Second Row: Email -->
      <div class="flex flex-col gap-2 items-start justify-start w-full">
        <div class="bg-[#f4f3f6] min-w-60 relative rounded-lg shrink-0 w-full">
          <div class="flex flex-row items-center min-w-inherit overflow-clip relative size-full">
            <div class="box-border content-stretch flex flex-row items-center justify-start min-w-inherit px-4 py-3 relative w-full">
              <input
                v-model="form.email"
                type="email"
                placeholder="Email"
                class="basis-0 font-normal grow leading-[1.4] min-h-px min-w-px relative shrink-0 text-[#4e445a] text-[16px] text-left bg-transparent border-none outline-none placeholder-[#90849f]"
                :class="{ 'text-red-500': v$.email.$error }"
              />
            </div>
          </div>
          <div class="absolute border border-[#e7e4ea] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
        </div>
        <div v-if="v$.email.$error" class="text-sm text-red-500">
          <span v-if="v$.email.required.$invalid">Email is required</span>
          <span v-else-if="v$.email.email.$invalid">Please enter a valid email address</span>
        </div>
      </div>

      <!-- Continue Button -->
      <div class="w-full flex justify-end pt-4">
        <button
          type="submit"
          :disabled="v$.$invalid"
          class="bg-[#4e445a] text-white font-medium text-[16px] px-6 py-4 rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#3a3447] transition-colors"
        >
          Continue
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue';
import useVuelidate from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';
import { useCreateUserStore } from '@/stores/createUser';

const emit = defineEmits(['next', 'previous']);
const createUserStore = useCreateUserStore();

const form = reactive({
  firstName: '',
  lastName: '',
  email: ''
});

const rules = {
  firstName: {
    required,
    minLength: minLength(2)
  },
  lastName: {
    required,
    minLength: minLength(2)
  },
  email: {
    required,
    email
  }
};

const v$ = useVuelidate(rules, form);

onMounted(() => {
  // Cargar datos existentes si los hay
  const existingData = createUserStore.userInfo;
  if (existingData.firstName || existingData.lastName || existingData.email) {
    form.firstName = existingData.firstName;
    form.lastName = existingData.lastName;
    form.email = existingData.email;
  }
});

async function handleSubmit() {
  const isValid = await v$.value.$validate();

  if (isValid) {
    // Guardar datos en el store
    createUserStore.setUserInfo({
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email
    });

    console.log('User info saved:', createUserStore.userInfo);
    emit('next');
  }
}
</script>
