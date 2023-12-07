<script setup lang="ts">
import { useFavoritesStore } from '@/stores/favorites';
import DrinkItem from '@/components/DrinkItem.vue';
import Empty from '@/components/Empty.vue';

const favoritesStore = useFavoritesStore();
</script>

<template>
  <div class="py-20 container mx-auto min-h-[80vh] fadeInUp">
    <h2 class="font-['Pacifico'] text-3xl flex items-center justify-between mb-12 capitalize">
      <p>Favorite <span class="text-primary">recipes</span></p>
      <small class="font-sans opacity-50 text-sm">Total: {{ favoritesStore.favorites.length }}</small>
    </h2>
    <ul
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      v-if="favoritesStore.favorites.length > 0"
    >
      <li v-for="drink in favoritesStore.favorites" :key="drink.idDrink">
        <DrinkItem :drink="drink" />
      </li>
    </ul>
    <Empty v-else />
  </div>
</template>
