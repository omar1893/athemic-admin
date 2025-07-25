import { defineStore } from 'pinia';
import { ref } from 'vue';

interface UserInfo {
  firstName: string;
  lastName: string;
  email: string;
}

interface UserRole {
  role: string;
}

interface UserSetup {
  // Aquí irán las configuraciones específicas
  permissions?: string[];
  settings?: Record<string, any>;
}

interface CreateUserData {
  userInfo: UserInfo;
  userRole: UserRole;
  userSetup: UserSetup;
}

export const useCreateUserStore = defineStore('createUser', () => {
  const userInfo = ref<UserInfo>({
    firstName: '',
    lastName: '',
    email: ''
  });

  const userRole = ref<UserRole>({
    role: ''
  });

  const userSetup = ref<UserSetup>({});

  const currentStep = ref(0);

  function setUserInfo(data: UserInfo) {
    userInfo.value = data;
  }

  function setUserRole(data: UserRole) {
    userRole.value = data;
  }

  function setUserSetup(data: UserSetup) {
    userSetup.value = data;
  }

  function getFullData(): CreateUserData {
    return {
      userInfo: userInfo.value,
      userRole: userRole.value,
      userSetup: userSetup.value
    };
  }

  function clearData() {
    userInfo.value = {
      firstName: '',
      lastName: '',
      email: ''
    };
    userRole.value = {
      role: ''
    };
    userSetup.value = {};
    currentStep.value = 0;
  }

  function nextStep() {
    if (currentStep.value < 3) {
      currentStep.value++;
    }
  }

  function previousStep() {
    if (currentStep.value > 0) {
      currentStep.value--;
    }
  }

  function setStep(step: number) {
    if (step >= 0 && step <= 3) {
      currentStep.value = step;
    }
  }

  return {
    userInfo,
    userRole,
    userSetup,
    currentStep,
    setUserInfo,
    setUserRole,
    setUserSetup,
    getFullData,
    clearData,
    nextStep,
    previousStep,
    setStep
  };
});
