<script setup>
const orders = [
  { id: 'ORD-001', customer: 'Juan Pérez', date: '2024-07-01', status: 'Completada', total: 120.50 },
  { id: 'ORD-002', customer: 'Ana Gómez', date: '2024-07-02', status: 'Pendiente', total: 75.00 },
  { id: 'ORD-003', customer: 'Carlos Ruiz', date: '2024-07-03', status: 'Cancelada', total: 0.00 },
  { id: 'ORD-004', customer: 'María López', date: '2024-07-04', status: 'Completada', total: 210.99 },
]
</script>

<template>
  <div class="bg-white rounded-2xl pt-[24px] pr-[16px] pb-[24px] pl-[16px]">
    <div class="poppins font-medium text-xl mb-6 text-gray-950">Órdenes</div>
    <div class="overflow-x-auto bg-white rounded-lg">
      <table class="min-w-full">
        <thead class="monserrat text-[#170033] font-semibold text-left text-base bg-[#875EF814]">
          <tr>
            <th class="px-6 py-3 tracking-wider">ID</th>
            <th class="px-6 py-3 tracking-wider">Cliente</th>
            <th class="px-6 py-3 tracking-wider">Fecha</th>
            <th class="px-6 py-3 tracking-wider">Estado</th>
            <th class="px-6 py-3 tracking-wider">Total</th>
          </tr>
        </thead>
        <tbody class="monserrat text-[#170033] text-sm font-medium bg-white divide-y divide-gray-100">
          <tr v-for="order in orders" :key="order.id">
            <td class="px-6 py-4 whitespace-nowrap">{{ order.id }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ order.customer }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ order.date }}</td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span
                :class="[
                  'px-2 py-1 rounded-full',
                  order.status === 'Completada' ? 'border-1 bg-green-100 text-green-600' :
                  order.status === 'Pendiente' ? 'border-1 bg-[#17003314] text-[#17003380]' :
                  'border-1 bg-red-100 text-red-400'
                ]"
              >
                {{ order.status }}
              </span>
            </td>
            <td class="monserrat font-medium text-sm px-6 py-4 whitespace-nowrap">${{ order.total.toFixed(2) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
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