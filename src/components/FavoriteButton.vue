<script setup lang="ts">
import { HeartIcon as Favorite } from '@heroicons/vue/24/solid';
import { HeartIcon } from '@heroicons/vue/24/outline';
import { useFavoritesStore } from '@/stores/favorites';
import type { ShortDrinkInterface } from '@/interface/drink.interface';

const favoritesStore = useFavoritesStore();

defineProps<{
  drink: ShortDrinkInterface
}>();
</script>

<template>
  <button
    @click="favoritesStore.toggleFavorite(drink)"
    :class="favoritesStore.isFavorite(drink) ? 'bg-primary' : 'bg-white'"
    class="shadow absolute w-12 h-12 rounded-full top-5 right-5 grid place-content-center group cursor-pointer">
    <HeartIcon class="w-6 group-hover:text-primary" v-if="!favoritesStore.isFavorite(drink)" />
    <Favorite class="w-6 text-white" v-else />
  </button>
</template>
