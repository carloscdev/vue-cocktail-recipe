<script setup lang="ts">
import { FaceFrownIcon } from '@heroicons/vue/24/outline';
</script>

<template>
  <div class="empty opacity-50 select-none py-20">
    <div class="flex items-center justify-center">
      <FaceFrownIcon class="w-20" />
    </div>
    <p class="text-center mt-3 font-bold text-xl">No recipes found</p>
  </div>
</template>
