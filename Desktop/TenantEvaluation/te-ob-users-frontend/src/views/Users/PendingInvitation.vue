<template>
  <div class="bg-[#f6f6f6] rounded-bl-[12px] rounded-br-[12px] w-full">
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
        :rows="pendingUsers"
        rowKey="email"
        @menuAction="handleMenuAction"
      >
        <template #role="{ value }">
          <span :class="roleClass(value)" class="text-[#4e445a] text-[12px] font-medium rounded-full px-3 py-1">{{ value }}</span>
        </template>
        <template #menu-items="{ row }">
          <button
            @click="handleMenuAction('resend', row)"
            class="w-full px-4 py-3 text-left font-semibold text-[#4e445a] text-[14px] hover:bg-gray-50"
          >
            Resend invitation
          </button>
          <button
            @click="handleMenuAction('cancel', row)"
            class="w-full px-4 py-3 text-left font-semibold text-[#ec221f] text-[14px] hover:bg-gray-50"
          >
            Cancel Invitation
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
</template>

<script setup lang="ts">
import UsersTable from '@/components/UsersTable.vue';
import { onMounted } from 'vue';

const pendingUsers = [
  {
    name: 'John Doe',
    email: 'johndoe@email.com',
    role: 'Property Admin',
    invitedOn: '15:06 Jan 25, 2025',
  },
  {
    name: 'Sophia Turner',
    email: 'sophia.turner@example.com',
    role: 'Property Admin',
    invitedOn: '15:06 Jan 25, 2025',
  },
  {
    name: 'Liam Smith',
    email: 'liam.smith@example.com',
    role: 'Regional Admin',
    invitedOn: '15:06 Jan 25, 2025',
  },
];

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'role', label: 'Role' },
  { key: 'invitedOn', label: 'Invited on' },
];

function roleClass(role: string) {
  switch (role) {
    case 'Property Admin':
      return 'bg-[#c8eaff]';
    case 'Regional Admin':
      return 'bg-[#e3e0fa]';
    default:
      return 'bg-gray-200';
  }
}

function handleMenuAction(action: string, row: Record<string, any>) {
  if (action === 'resend') {
    console.log('Resending invitation to:', row);
    // Aquí puedes agregar la lógica para reenviar la invitación
  } else if (action === 'cancel') {
    console.log('Canceling invitation for:', row);
    // Aquí puedes agregar la lógica para cancelar la invitación
  }
}

onMounted(() => {
  console.log('PendingInvitation mounted - isPendingInvitation should be true');
});
</script>
