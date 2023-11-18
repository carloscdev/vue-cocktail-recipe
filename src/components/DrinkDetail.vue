<script setup lang="ts">
import { useDrinksStore } from '@/stores/drinks';
import { XMarkIcon, HeartIcon } from '@heroicons/vue/24/outline';
import type { DrinkInterface } from '@/interface/drink.interface';
import { onMounted, onUnmounted } from 'vue';

const drinksStore = useDrinksStore();

// Bloquear scroll body

onMounted(() => {
  document.body.style.overflow = 'hidden';
});

onUnmounted(() => {
  document.body.style.overflow = 'auto';
});

</script>

<template>
  <div class="fixed inset-0 bg-black/70 z-20 backdrop-blur" @click="drinksStore.setDrink('')">
    <div class="bg-gray-100 absolute right-0 top-0 h-screen w-full sm:w-[600px] p-10 sm:p-14 detail overflow-y-auto" @click.stop>
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
      <div class="space-y-8 text-center">
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
          <p v-if="drinksStore.drink?.strInstructionsES">({{ drinksStore.drink?.strInstructionsES }})</p>
        </div>
        <div class="flex items-center flex-wrap gap-2 justify-center">
          <div class="bg-primary text-white rounded-full py-2 px-4 text-xs flex items-center gap-2">
            <h3 class="font-bold">ID:</h3>
            <p>{{ drinksStore.drink?.idDrink }}</p>
          </div>
          <div class="bg-primary text-white rounded-full py-2 px-4 text-xs flex items-center gap-2">
            <h3 class="font-bold">Category:</h3>
            <p>{{ drinksStore.drink?.strCategory }}</p>
          </div>
          <div class="bg-primary text-white rounded-full py-2 px-4 text-xs flex items-center gap-2">
            <h3 class="font-bold">Type:</h3>
            <p>{{ drinksStore.drink?.strAlcoholic }}</p>
          </div>
          <div class="bg-primary text-white rounded-full py-2 px-4 text-xs flex items-center gap-2">
            <h3 class="font-bold">Glass:</h3>
            <p>{{ drinksStore.drink?.strGlass }}</p>
          </div>
          <div class="bg-primary text-white rounded-full py-2 px-4 text-xs flex items-center gap-2">
            <h3 class="font-bold">Modified:</h3>
            <p>{{ drinksStore.drink?.dateModified }}</p>
          </div>
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