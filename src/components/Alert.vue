<script setup lang="ts">
import { useAlertStore } from '@/stores/alert';
import { InformationCircleIcon } from '@heroicons/vue/24/solid';

const alertStore = useAlertStore();
</script>

<template>
  <section v-if="alertStore.isOpen" class="z-50 fixed bottom-10 left-0 right-0 bg-primary text-white font-semibold shadow fadeInUp p-5 rounded-full w-96 mx-auto">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <InformationCircleIcon class="w-6 mr-2 mt-0.5" />
        <span class="text-sm">{{ alertStore.message }}</span>
      </div>
      <button class="text-sm font-bold" @click="alertStore.isOpen = false">Close</button>
    </div>
  </section>
</template>
