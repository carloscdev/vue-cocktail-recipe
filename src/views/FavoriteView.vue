<script setup lang="ts">
import { useDrinksStore } from '@/stores/drinks';

const drinksStore = useDrinksStore();
</script>

<template>
  <div class="py-20 container mx-auto">

    <h2 class="font-['Pacifico'] text-3xl flex items-center justify-between mb-12 capitalize">
      <p>Favorite <span class="text-primary">recipes</span></p>
      <small class="font-sans opacity-50 text-sm">Total: {{ drinksStore.drinks.length }}</small>
    </h2>
    ok
  </div>
</template>
