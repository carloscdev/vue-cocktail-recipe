<script setup lang="ts">
import { useDrinksStore } from '@/stores/drinks';
import { XMarkIcon, HeartIcon } from '@heroicons/vue/24/outline';
import type { DrinkInterface } from '@/interface/drink.interface';

const drinksStore = useDrinksStore();

</script>

<template>
  <div class="fixed inset-0 bg-black/70 z-20 backdrop-blur" v-if="drinksStore.isOpenDetail">
    <div class="bg-gray-100 absolute right-0 top-0 h-screen w-full sm:w-[600px] p-10 sm:p-14 detail overflow-y-auto">
      <XMarkIcon class="w-10 absolute top-2 right-2 cursor-pointer" @click="drinksStore.setDrink('')" />
      <figure class="rounded-3xl overflow-hidden shadow-sm w-full sm:w-[70%] mx-auto relative">
        <img class="w-full" :src="drinksStore.drink?.strDrinkThumb" :alt="drinksStore.drink?.strDrink">
        <div class="absolute w-10 h-10 rounded-full bg-white top-5 right-5 grid place-content-center group cursor-pointer">
          <HeartIcon class="w-5 group-hover:text-primary" />
        </div>
      </figure>
      <h2 class="font-['Pacifico'] text-3xl capitalize text-center my-5 text-primary">
        {{ drinksStore.drink?.strDrink }}
      </h2>
      <div class="space-y-5 text-center">
        <div>
          <h3 class="font-bold text-xl mb-2">Category</h3>
          <p>{{ drinksStore.drink?.strCategory }}</p>
        </div>
        <div>
          <h3 class="font-bold text-xl mb-2">Ingredients</h3>
          <ul>
            <li v-for="i in 15" :key="i" v-if="drinksStore.drink">
              <span v-if="(drinksStore.drink[`strIngredient${i}` as keyof DrinkInterface])">
                {{ (drinksStore.drink[`strIngredient${i}` as keyof DrinkInterface]) }} -
                {{ (drinksStore.drink[`strMeasure${i}` as keyof DrinkInterface]) }}
              </span>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="font-bold text-xl mb-2">Instructions</h3>
          <p>{{ drinksStore.drink?.strInstructions }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.detail {
  animation: slide-right 0.5s ease-in-out;

}

@keyframes slide-right {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>