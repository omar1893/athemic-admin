<template>
  <div class="overflow-x-auto overflow-y-auto rounded-xl bg-white">
    <table class="min-w-full">
      <thead>
        <tr class="bg-[rgba(78,68,90,0.08)] h-12">
          <th v-for="col in columns" :key="col.key" class="px-4 py-3 text-left font-semibold text-[#4e445a] text-[14px]">
            {{ col.label }}
          </th>
          <th class="px-4 py-3"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row[rowKey]" class="h-[72px] border-b border-[#f6f6f6]">
          <td v-for="col in columns" :key="col.key" class="px-4 py-3 text-[#4e445a] text-[14px]">
            <slot :name="col.key" :value="row[col.key]" :row="row">
              {{ row[col.key] }}
            </slot>
          </td>
          <td class="px-4 py-3 text-right relative">
            <slot name="actions" :row="row">
              <button @click="toggleMenu(row[rowKey])" class="relative">
                <i class="fa-solid fa-ellipsis-v"></i>
                <!-- Context Menu -->
                <div v-if="activeMenu === row[rowKey]" class="absolute right-0 top-full mt-1 z-50">
                  <div class="bg-white rounded-xl shadow-[2px_4px_20.8px_6px_rgba(0,0,0,0.08)] min-w-[160px] py-1">
                    <slot name="menu-items" :row="row">
                      <!-- Default menu items - will be overridden by parent components -->
                      <button
                        @click="handleMenuAction('default', row)"
                        class="w-full px-4 py-3 text-left font-semibold text-[#4e445a] text-[14px] hover:bg-gray-50"
                      >
                        Default Action
                      </button>
                    </slot>
                  </div>
                </div>
              </button>
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, onMounted, onUnmounted } from 'vue';

interface Column {
  key: string;
  label: string;
}

defineProps<{
  columns: Column[];
  rows: Record<string, any>[];
  rowKey: string;
}>();

const emit = defineEmits<{
  menuAction: [action: string, row: Record<string, any>];
}>();

const activeMenu = ref<string | null>(null);

function toggleMenu(rowId: string) {
  console.log('Toggle menu for row:', rowId);
  activeMenu.value = activeMenu.value === rowId ? null : rowId;
}

function handleMenuAction(action: string, row: Record<string, any>) {
  console.log('Menu action:', action, 'for row:', row);
  emit('menuAction', action, row);
  activeMenu.value = null;
}

function handleClickOutside(event: Event) {
  const target = event.target as Element;
  if (!target.closest('.relative')) {
    activeMenu.value = null;
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
/* Ajustes finos si es necesario */
</style>
