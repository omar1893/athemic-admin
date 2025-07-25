<template>
  <div class="min-h-screen bg-[#f6f6f6] px-4 md:px-20 pt-[72px] pb-20 flex flex-col gap-6 md:gap-[72px]">
    <!-- Header -->
    <div class="flex flex-row items-start justify-between w-full">
      <div></div>
      <button class="flex flex-row gap-1 items-center px-0 py-[3px] rounded-2xl">
        <div class="size-[25px] overflow-clip relative">
          <img src="http://localhost:3845/assets/3bdc461be6ee25e196856c626a8adda29c9d9276.svg" alt="Profile" class="absolute inset-[8.333%]" />
        </div>
        <span class="font-semibold text-[#4e445a] text-[14px]">My Profile</span>
      </button>
    </div>
    <!-- Title and Add User Button -->
    <div class="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-4 md:gap-0">
      <h1 class="font-medium text-[#4e445a] text-[28px] md:text-[36px]">Users</h1>
      <button
        @click="goToCreateUser"
        class="bg-[#ff5048] text-white font-medium text-[14px] md:text-[16px] px-4 md:px-6 py-2 md:py-3 rounded-2xl w-full md:w-auto text-center md:text-left"
      >
        Add new user
      </button>
    </div>
    <!-- Search and Filter Bar (Mobile First) -->
    <div class="flex flex-col md:hidden items-start justify-between w-full gap-4">
      <div class="bg-white flex flex-row gap-4 h-12 items-center pl-4 pr-3 py-3 rounded-xl w-full">
        <span class="font-normal text-[#4e445a] text-[14px] flex-1">Search by property, status, etc</span>
        <div class="bg-[#019cdc] rounded-[126px] w-[33px] h-8 flex items-center justify-center">
          <img src="http://localhost:3845/assets/b8e836cf70cc38eafc96b60cefd465119b75e59c.svg" alt="Search" class="size-[17.111px]" />
        </div>
      </div>
      <div class="relative rounded-2xl flex items-center justify-center md:justify-start gap-2 p-[12px] border border-[#e7e4ea] w-full">
        <img src="http://localhost:3845/assets/8e1a5e5822d7d7e96074336dc30e99163e5bf21e.svg" alt="Filter" class="size-6" />
        <span class="font-medium text-[#4e445a] text-[16px]">All Roles</span>
      </div>
    </div>
    <!-- Tabs and Content Container -->
    <div class="flex flex-col w-full">
      <!-- Tabs -->
      <div class="flex flex-row rounded-tl-[24px] rounded-tr-[24px] w-full md:w-[790px]">
        <div
          @click="activeTab = 'users'"
          :class="activeTab === 'users' ? 'bg-white' : 'bg-[rgba(255,255,255,0.5)]'"
          class="px-4 py-3 rounded-tl-[16px] rounded-tr-[16px] flex-1 md:w-[149px] flex items-center justify-center cursor-pointer"
        >
          <span class="font-semibold text-[#4e445a] text-[14px]">Users</span>
        </div>
        <div
          @click="activeTab = 'pending'"
          :class="activeTab === 'pending' ? 'bg-white' : 'bg-[rgba(255,255,255,0.5)]'"
          class="px-4 py-3 rounded-tl-[16px] rounded-tr-[16px] flex-1 flex items-center justify-center cursor-pointer"
        >
          <span class="font-semibold text-[#4e445a] text-[14px]">Pending invitation</span>
        </div>
      </div>
      <!-- Content -->
      <PendingInvitation v-if="activeTab === 'pending'" />
      <div v-else class="bg-[#f6f6f6] rounded-bl-[12px] rounded-br-[12px] rounded-tr-[12px] w-full">
        <div class="flex flex-col gap-6 md:gap-8 px-4 md:px-5 py-6 md:py-8 w-full">
          <!-- Filters and Search (Desktop Only) -->
          <div class="hidden md:flex flex-row items-center justify-between w-full">
            <div class="relative rounded-2xl flex items-center gap-2 p-[12px] border border-[#e7e4ea]">
              <img src="http://localhost:3845/assets/8e1a5e5822d7d7e96074336dc30e99163e5bf21e.svg" alt="Filter" class="size-6" />
              <span class="font-medium text-[#4e445a] text-[16px]">All Roles</span>
            </div>
            <div class="bg-white flex flex-row gap-4 h-12 items-center pl-4 pr-3 py-3 rounded-xl">
              <span class="font-normal text-[#4e445a] text-[14px] w-[292px]">Search anything</span>
              <div class="bg-[#019cdc] rounded-[126px] w-[33px] h-8 flex items-center justify-center">
                <img src="http://localhost:3845/assets/b8e836cf70cc38eafc96b60cefd465119b75e59c.svg" alt="Search" class="size-[17.111px]" />
              </div>
            </div>
          </div>
          <!-- Table -->
          <UsersTable
            :columns="columns"
            :rows="users"
            rowKey="email"
            @menuAction="handleMenuAction"
          >
            <template #role="{ value }">
              <span :class="roleClass(value)" class="text-[#4e445a] text-[12px] font-medium rounded-full px-3 py-1">{{ value }}</span>
            </template>
            <template #menu-items="{ row }">
              <button
                @click="handleMenuAction('deactivate', row)"
                class="w-full px-4 py-3 text-left font-semibold text-[#ec221f] text-[14px] hover:bg-gray-50"
              >
                Deactivate User
              </button>
            </template>
          </UsersTable>
          <!-- Pagination -->
          <div class="flex flex-col md:flex-row items-center justify-center md:justify-between w-full mt-4 gap-4 md:gap-0">
            <div class="text-[#4e445a] text-[14px]">12 Items per page</div>
            <div class="flex flex-row gap-2 items-center">
              <button class="rounded-full bg-white size-6 flex items-center justify-center"><img src="http://localhost:3845/assets/37ba71175f07bbcd9a4895fac5a6749265541c94.svg" alt="Prev" class="size-4" /></button>
              <button class="rounded-full bg-[#4e445a] size-6 flex items-center justify-center text-white text-[12px] font-medium">1</button>
              <button class="rounded-full bg-white size-6 flex items-center justify-center text-[#90849f] text-[12px] font-medium">2</button>
              <button class="rounded-full bg-white size-6 flex items-center justify-center text-[#90849f] text-[12px] font-medium">4</button>
              <button class="rounded-full bg-white size-6 flex items-center justify-center text-[#90849f] text-[12px] font-medium">6</button>
              <button class="rounded-full bg-white size-6 flex items-center justify-center"><img src="http://localhost:3845/assets/43afcbae00986ec0ce7c22810da9fe1e93431998.svg" alt="Next" class="size-4" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import UsersTable from '@/components/UsersTable.vue';
import PendingInvitation from './PendingInvitation.vue';
import apicall from '@/api/apicall';

const router = useRouter();
const activeTab = ref('users');

const users = [
  {
    name: 'Alice Smith',
    email: 'alice.smith@example.com',
    role: 'Property Admin',
    lastActive: '15:06 Jan 25, 2025',
  },
  {
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    role: 'Board Director',
    lastActive: '15:06 Jan 25, 2025',
  },
  {
    name: 'Charlie Brown',
    email: 'charlie.brown@example.com',
    role: 'Regional Admin',
    lastActive: '15:06 Jan 25, 2025',
  },
  {
    name: 'Diana Prince',
    email: 'diana.prince@example.com',
    role: 'Organization Admin',
    lastActive: '15:06 Jan 25, 2025',
  },
];
const columns = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'role', label: 'Role' },
  { key: 'lastActive', label: 'Last active' },
];
function roleClass(role: string) {
  switch (role) {
    case 'Property Admin':
      return 'bg-[#c8eaff]';
    case 'Board Director':
      return 'bg-[#d6f5d6]';
    case 'Regional Admin':
      return 'bg-[#e3e0fa]';
    case 'Organization Admin':
      return 'bg-[#ffe3b3]';
    default:
      return 'bg-gray-200';
  }
}

function handleMenuAction(action: string, row: Record<string, any>) {
  if (action === 'deactivate') {
    console.log('Deactivating user:', row);
    // Aquí puedes agregar la lógica para desactivar el usuario
  }
}

function goToCreateUser() {
  router.push('/create-user');
}

onMounted(async () => {
  let url = '/v1/onboarding/users';
  const response = await apicall.get(url, {});
  console.log(response);
});
</script>
