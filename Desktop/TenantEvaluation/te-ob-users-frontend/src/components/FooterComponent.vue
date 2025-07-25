<template>
  <footer class="text-sm text-gray-500 dark:text-gray-400">
    <div class="container mx-auto px-4 py-2 text-center">
      <p>© {{ year }} {{ config.company.name }}. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import config from '@/config';

const year = new Date().getFullYear();
</script>
