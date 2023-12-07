import type { ShortDrinkInterface } from '@/interface/drink.interface';
import { defineStore } from 'pinia';
import { ref, type Ref } from 'vue';
import { useAlertStore } from './alert';

export const useFavoritesStore = defineStore('favorites', () => {
  const favorites: Ref<ShortDrinkInterface[]> = ref([]);

  const alert = useAlertStore();

  const addFavorite = (drink: ShortDrinkInterface) => {
    favorites.value.push(drink);
    localStorage.setItem('favorites', JSON.stringify(favorites.value));
    alert.openAlert('Added to favorites', 'success');
  };
  const loadFavorites = () => {
    const favoritesLocalStorage = localStorage.getItem('favorites');
    if (favoritesLocalStorage) {
      favorites.value = JSON.parse(favoritesLocalStorage);
    }
  };
  const removeFavorite = (drink: ShortDrinkInterface) => {
    const index = favorites.value.findIndex((f) => f.idDrink === drink.idDrink);
    if (index !== -1) {
      favorites.value.splice(index, 1);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites.value));
    alert.openAlert('Removed from favorites', 'danger');
  }

  const toggleFavorite = (drink: ShortDrinkInterface) => {
    if (isFavorite(drink)) {
      removeFavorite(drink);
    } else {
      addFavorite(drink);
    }
  }
  const isFavorite = (drink: ShortDrinkInterface) => {
    return favorites.value.some(d => d.idDrink === drink.idDrink);
  }


  return {
    favorites,
    addFavorite,
    loadFavorites,
    removeFavorite,
    isFavorite,
    toggleFavorite
  };
});