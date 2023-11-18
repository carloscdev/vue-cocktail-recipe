<script setup lang="ts">

</script>

<template>
<div class="bg-white shadow-smm">
  <nav class="container mx-auto flex items-center justify-between">
    <h1 class="font-['Pacifico'] text-3xl">
      <router-link to="/">
        Cocktail <span class="text-primary">Vue</span>
      </router-link>
    </h1>
    <ul class="flex items-center font-bold">
      <li>
        <router-link to="/" class="py-6 px-3">Home</router-link>
      </li>
      <li>
        <router-link to="/favorite" class="py-6 px-3">Favorites</router-link>
      </li>
    </ul>
  </nav>
</div>
</template>

<style scoped>
li .router-link-active,
li .router-link-exact-active {
  @apply bg-primary text-white inline-block;
}
</style>
