<script setup lang="ts">
import DrinkItem from './DrinkItem.vue';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import { useDrinksStore } from '@/stores/drinks';
import Empty from './Empty.vue';
import IsLoading from './IsLoading.vue';

const drinksStore = useDrinksStore();

const breakpoints = {
  '640': {
    itemsToShow: 1.5,
    snapAlign: 'start'
  },
  '800': {
    itemsToShow: 2.5,
    snapAlign: 'start'
  },
  '1080': {
    itemsToShow: 3.5,
    snapAlign: 'start'
  }
}
const settings = {
  itemsToShow: 1,
  snapAlign: 'start',
}
</script>

<template>
  <main class="container mx-auto py-24 fadeInUp" style="animation-delay: 500ms;">
    <h2 class="font-['Pacifico'] text-3xl flex items-center justify-between mb-12 capitalize">
      <p>Explore <span class="text-primary">{{ drinksStore.searchStatic }} recipes</span></p>
      <small class="font-sans opacity-50 text-sm">Total: {{ drinksStore.drinks.length }}</small>
    </h2>
    <ul class="relative" v-if="drinksStore.drinks.length > 12 && !drinksStore.isLoading">
      <Carousel ref="carousel" :breakpoints="breakpoints" :settings="settings" :autoplay="8000" :wrap-around="true">
        <Slide v-for="i in drinksStore.drinks" :key="i.idDrink" class="sm:pr-8">
          <DrinkItem :drink="i" />
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </ul>
    <ul v-if="drinksStore.drinks.length <= 11 && !drinksStore.isLoading" class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <DrinkItem v-for="i in drinksStore.drinks" :key="i.idDrink" :drink="i" />
    </ul>
    <Empty v-if="drinksStore.drinks.length === 0 && !drinksStore.isLoading" />
    <IsLoading v-if="drinksStore.isLoading" />
  </main>
</template>

<style>
.carousel__next,
.carousel__prev {
  top: 50%;
  transform: translateY(-50%);
  width: 2rem;
  height: 2rem;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}
</style>