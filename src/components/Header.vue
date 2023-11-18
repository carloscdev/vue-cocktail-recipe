<script setup lang="ts">
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
import { useDrinksStore } from '@/stores/drinks';

const drinksStore = useDrinksStore();

const clearSearch = () => {
  if (drinksStore.filterBy === 'c') {
    drinksStore.search = drinksStore.categories[0].strCategory;
  }
  if (drinksStore.filterBy === 'a') {
    drinksStore.search = 'Alcoholic';
  }
  if (drinksStore.filterBy === 's') {
    drinksStore.search = 'Margarita';
  }
  if (drinksStore.filterBy === 'i') {
    drinksStore.search = 'Tequila';
  }

  console.log(drinksStore.search)
};

const handleSearch = () => {
  drinksStore.searchDrinks();
};
</script>

<template>
  <header>
    <div class="header flex items-center overflow-hidden h-[40rem] 2xl:h-[50rem]">
      <video autoplay="true" muted="true" loop="true" class="absolute inset-0 z-0 h-full w-full object-cover">
        <source src="@/assets/images/barman.mp4" type="video/mp4">
      </video>
      <div class="relative z-10 container mx-auto fadeInUp">
        <form @submit.prevent="handleSearch" class="bg-white shadow-2xl inline-block p-10 md:p-12 rounded-3xl space-y-3 w-full md:max-w-[540px] md:w-10/12">
          <div>
            <select @change="clearSearch" v-model="drinksStore.filterBy" name="search" id="search" class="border-2 border-gray-100 focus:border-primary w-full h-12 rounded-xl px-3 bg-gray-100">
              <option value="c">Filter by category</option>
              <option value="s">Filter by name</option>
              <option value="i">Filter by ingredient</option>
              <option value="a">Filter by alcoholic</option>
            </select>
          </div>
          <div v-if="drinksStore.filterBy === 'c'">
            <select v-model="drinksStore.search" name="category" id="category" class="border-2 border-gray-100 focus:border-primary w-full h-12 rounded-xl px-3 bg-gray-100">
              <option v-for="item in drinksStore.categories" :key="item.strCategory" :value="item.strCategory">
                {{ item.strCategory }}
              </option>
            </select>
          </div>
          <div v-if="drinksStore.filterBy === 's' || drinksStore.filterBy === 'i'">
            <input v-model="drinksStore.search" type="search" id="name" class="border-2 border-gray-100 focus:border-primary focus:outline-none w-full bg-gray-100 h-12 rounded-xl px-3" :placeholder="`Search ...`" />
          </div>
          <div v-if="drinksStore.filterBy === 'a'">
            <select v-model="drinksStore.search" name="alcoholic" id="alcoholic" class="border-2 border-gray-100 focus:border-primary w-full h-12 rounded-xl px-3 bg-gray-100">
              <option value="Alcoholic">Alcoholic</option>
              <option value="Non_alcoholic">Non alcoholic</option>
            </select>
          </div>
          <button
            type="submit"
            :disabled="drinksStore.isLoading"
            class="bg-primary w-full h-12 rounded-xl hover:bg-primary-dark text-white font-semibold
            flex items-center justify-center gap-1 duration-100 ease-in-out text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <MagnifyingGlassIcon class="w-5 mt-1" />
            <span v-if="!drinksStore.isLoading">Search</span>
            <span v-else>Searching ...</span>
          </button>
        </form>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  background-image: url('/images/bar.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
}

.header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: inherit;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
}
</style>