<template>
  <div>
    <div class="flex flex-col justify-center items-center h-screen">
      <div>
        <img :src="getCDNLogo('normal')" :alt="config.company.name" class="h-8 dark:hidden" />
        <img :src="getCDNLogo('white')" :alt="config.company.name" class="h-8 hidden dark:block" />
      </div>
      <div class="mb-4">
        <h1 class="text-2xl font-bold text-center text-gray-500 dark:text-gray-400">Home</h1>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getCDNLogo } from '@/utils/cdnUtils';
import config from '@/config';

</script>
