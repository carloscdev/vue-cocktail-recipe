<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import DrinkDetail from './components/DrinkDetail.vue';
import { useDrinksStore } from './stores/drinks';
import { useFavoritesStore } from './stores/favorites';
import { onMounted } from 'vue';
import Alert from './components/Alert.vue';

const drinksStore = useDrinksStore();
const favoritesStore = useFavoritesStore();

onMounted(() => {
  favoritesStore.loadFavorites();
});
</script>

<template>
  <div class="text-dark">
    <Navbar />
    <router-view v-slot="{ Component, route }">
      <Transition name="page-opacity" mode="out-in">
        <div :key="String(route.name)">
          <component :is="Component" />
        </div>
      </Transition>
    </router-view>
    <Footer />

    <DrinkDetail v-if="drinksStore.isOpenDetail" />
    <Alert />
  </div>
</template>
