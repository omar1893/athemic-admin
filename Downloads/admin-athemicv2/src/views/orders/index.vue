<script setup>
const orders = [
  { id: 'ORD-001', customer: 'Juan Pérez', date: '2024-07-01', status: 'Completada', total: 120.50 },
  { id: 'ORD-002', customer: 'Ana Gómez', date: '2024-07-02', status: 'Pendiente', total: 75.00 },
  { id: 'ORD-003', customer: 'Carlos Ruiz', date: '2024-07-03', status: 'Cancelada', total: 0.00 },
  { id: 'ORD-004', customer: 'María López', date: '2024-07-04', status: 'Completada', total: 210.99 },
]
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-6">Órdenes</h1>
    <div class="overflow-x-auto bg-white rounded-lg shadow">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="order in orders" :key="order.id">
            <td class="px-6 py-4 whitespace-nowrap font-mono">{{ order.id }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ order.customer }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ order.date }}</td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span
                :class="[
                  'px-2 py-1 rounded-full text-xs font-semibold',
                  order.status === 'Completada' ? 'bg-green-100 text-green-800' :
                  order.status === 'Pendiente' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                ]"
              >
                {{ order.status }}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">${{ order.total.toFixed(2) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template> 