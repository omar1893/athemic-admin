<script setup>
const orders = [
  { id: 'ORD-001', customer: 'Juan Pérez', date: '2024-07-01', status: 'Completada', total: 120.50 },
  { id: 'ORD-002', customer: 'Ana Gómez', date: '2024-07-02', status: 'Pendiente', total: 75.00 },
  { id: 'ORD-003', customer: 'Carlos Ruiz', date: '2024-07-03', status: 'Cancelada', total: 0.00 },
  { id: 'ORD-004', customer: 'María López', date: '2024-07-04', status: 'Completada', total: 210.99 },
]
</script>

<template>
  <div class="orders-enhanced-container">
    <div class="poppins font-medium text-2xl mb-6 text-gray-950">Órdenes</div>

    <div class="flex justify-between items-center flex-wrap gap-2 m-3">

      <div class="relative">
        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg class="h-4 w-4 text-[#170033]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
            stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </span>
        <input type="search" placeholder="Buscar"
          class="monserrat placeholder:font-medium placeholder-opacity-100 border-2 border-gray-100 rounded-full placeholder:text-[#170033] py-1 px-[2rem]" />
      </div>

      <div class="flex gap-2">
        <select class="poppins border-2 border-gray-100 rounded-full text-[#170033] py-1 px-2">
          <option class="rounded-full" value="Filtrar estados">Filtrar estados</option>
        </select>

        <select class="poppins border-2 border-gray-100 rounded-full text-[#170033] py-1 px-2">
          <option class="rounded-full" value="Filtrar tienda">Filtrar tienda</option>
        </select>

        <select class="poppins border-2 border-gray-100 rounded-full text-[#170033] py-1 px-2">
          <option class="rounded-full" value="Filtrar por fecha">Filtrar por fecha</option>
        </select>

      </div>

    </div>

    <table class="min-w-full">
      <thead class="monserrat text-[#170033] text-left text-base bg-[#875EF814]">
        <tr>
          <th class="px-6 py-3 font-semibold tracking-wider">ID</th>
          <th class="px-6 py-3 font-semibold tracking-wider">Cliente</th>
          <th class="px-6 py-3 font-semibold tracking-wider">Fecha</th>
          <th class="px-6 py-3 font-semibold tracking-wider">Estado</th>
          <th class="px-6 py-3 font-semibold tracking-wider">Total</th>
        </tr>
      </thead>
      <tbody class="monserrat text-[#170033] text-sm font-medium bg-white divide-y divide-gray-100">
        <tr v-for="order in orders" :key="order.id">
          <td class="px-6 py-4 whitespace-nowrap">{{ order.id }}</td>
          <td class="px-6 py-4 whitespace-nowrap">{{ order.customer }}</td>
          <td class="px-6 py-4 whitespace-nowrap">{{ order.date }}</td>
          <td class="px-6 py-4 whitespace-nowrap">
            <span :class="[
              'px-2 py-1 rounded-full',
              order.status === 'Completada' ? 'border-1 bg-green-100 text-green-600' :
                order.status === 'Pendiente' ? 'border-1 bg-[#17003314] text-[#17003380]' :
                  'border-1 bg-red-100 text-red-400'
            ]">
              {{ order.status }}
            </span>
          </td>
          <td class="monserrat font-medium text-sm px-6 py-4 whitespace-nowrap">${{ order.total.toFixed(2) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

.monserrat {
  font-family: 'Montserrat', sans-serif;
}

.poppins {
  font-family: 'Poppins', sans-serif;
}
</style>