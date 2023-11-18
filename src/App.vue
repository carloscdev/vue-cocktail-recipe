<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import DrinkDetail from './components/DrinkDetail.vue';
import { useDrinksStore } from './stores/drinks';

const drinksStore = useDrinksStore();
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
  </div>
</template>
