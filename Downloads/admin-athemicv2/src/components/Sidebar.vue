<template>
  <aside class="w-72 bg-white shadow-md px-6 py-8 fixed inset-y-0 left-0 z-20">
    <!-- Top Title -->
    <div class="mb-8">
      <h1 class="text-2xl font-bold text-indigo-900">Admin</h1>
    </div>
    <!-- Navigation Menu -->
    <nav class="flex-1">
      <ul class="space-y-2">
        <li>
          <router-link to="/orders" class="flex items-center gap-3 px-3 py-2 rounded-full">
            <span class="w-5 h-5 flex items-center justify-center">
              <!-- Heroicon: Map (placeholder) -->
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 20l-5.447-2.724A2 2 0 0 1 2 15.382V6.618a2 2 0 0 1 1.553-1.946l5.447-1.362a2 2 0 0 1 1.002 0l5.447 1.362A2 2 0 0 1 18 6.618v8.764a2 2 0 0 1-1.553 1.946L11 20a2 2 0 0 1-1.002 0z"/></svg>
            </span>
            <span>Órdenes</span>
            <span class="ml-auto px-2 py-0.5 rounded-full bg-indigo-500 text-white text-xs font-semibold">125</span>
          </router-link>
        </li>
        <li>
          <router-link to="/products" class="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition">
            <span class="w-5 h-5 flex items-center justify-center">
              <!-- Heroicon: Tag (placeholder) -->
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M7 7h.01M3 11l7.293-7.293a1 1 0 0 1 1.414 0l7.293 7.293a1 1 0 0 1 0 1.414l-7.293 7.293a1 1 0 0 1-1.414 0L3 12.414A1 1 0 0 1 3 11z"/></svg>
            </span>
            <span>Productos</span>
          </router-link>
        </li>
        <li>
          <router-link to="/tags/create" class="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition">
            <span class="w-5 h-5 flex items-center justify-center">
              <!-- Heroicon: Plus (placeholder) -->
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4"/></svg>
            </span>
            <span>Crear Tag</span>
          </router-link>
        </li>
        <li>
          <router-link to="/stores" class="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition">
            <span class="w-5 h-5 flex items-center justify-center">
              <!-- Heroicon: Store (placeholder) -->
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg>
            </span>
            <span>Tiendas</span>
          </router-link>
        </li>
        <li>
          <router-link to="/staff" class="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition">
            <span class="w-5 h-5 flex items-center justify-center">
              <!-- Heroicon: Users (placeholder) -->
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 20h5v-2a4 4 0 0 0-3-3.87M9 20H4v-2a4 4 0 0 1 3-3.87m9-4a4 4 0 1 0-8 0 4 4 0 0 0 8 0z"/></svg>
            </span>
            <span>Dependientes</span>
          </router-link>
        </li>
        <li>
          <router-link to="/users" class="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition">
            <span class="w-5 h-5 flex items-center justify-center">
              <!-- Heroicon: User (placeholder) -->
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4"/><path d="M5.5 21a8.38 8.38 0 0 1 13 0"/></svg>
            </span>
            <span>Usuarios</span>
          </router-link>
        </li>
        <li>
          <router-link to="/analytics" class="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition">
            <span class="w-5 h-5 flex items-center justify-center">
              <!-- Heroicon: DollarSign (placeholder) -->
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 8c-4 0-4 8 0 8s4-8 0-8zm0 0V4m0 16v-4"/></svg>
            </span>
            <span>Analíticas</span>
          </router-link>
        </li>
        <li>
          <router-link to="/support" class="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition">
            <span class="w-5 h-5 flex items-center justify-center">
              <!-- Heroicon: Support (placeholder) -->
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            </span>
            <span>Soporte</span>
          </router-link>
        </li>
      </ul>
    </nav>
    <!-- Spacer -->
    <div class="flex-1"></div>
    <!-- Log out and copyright -->
    <div class="mt-8">
      <a href="#" class="flex items-center gap-2 text-indigo-900 font-semibold px-3 py-2 rounded-lg hover:bg-gray-100 transition">
        <span class="w-5 h-5 flex items-center justify-center">
          <!-- Heroicon: Logout (placeholder) -->
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"/></svg>
        </span>
        Log out
      </a>
      <p class="mt-8 text-xs text-gray-400 text-center">Copyright 2025 Athemic. Todos los derechos reservados</p>
    </div>
  </aside>
</template>

<script setup>
// Sidebar del admin
</script> 