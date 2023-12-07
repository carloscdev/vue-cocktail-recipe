<script setup lang="ts">
import type { ShortDrinkInterface } from '@/interface/drink.interface';
import { useDrinksStore } from '@/stores/drinks';
import FavoriteButton from './FavoriteButton.vue';

interface PropsInterface {
  drink: ShortDrinkInterface
}

const drinksStore = useDrinksStore();

defineProps<PropsInterface>();
</script>

<template>
  <li class="relative">
    <div class="text-left group cursor-pointer" @click="drinksStore.setDrink(drink.idDrink)">
      <figure class="rounded-3xl overflow-hidden shadow-md">
        <img :src="drink.strDrinkThumb" :alt="drink.strDrink">
      </figure>
      <h3 class="mt-5 text-xl font-bold group-hover:text-primary group-hover:underline">
        {{ drink.strDrink }}
      </h3>
    </div>
    <FavoriteButton :drink="drink" />
  </li>
</template>
