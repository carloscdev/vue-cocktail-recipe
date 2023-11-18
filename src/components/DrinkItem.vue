<script setup lang="ts">
import type { ShortDrinkInterface } from '@/interface/drink.interface';
import { HeartIcon } from '@heroicons/vue/24/outline';
import { useDrinksStore } from '@/stores/drinks';

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
    <div class="absolute w-10 h-10 rounded-full bg-white top-5 right-5 grid place-content-center group cursor-pointer">
      <HeartIcon class="w-5 group-hover:text-primary" />
    </div>
  </li>
</template>
