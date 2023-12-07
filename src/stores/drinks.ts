import type { CategoryDrinkInterface, ShortDrinkInterface, DrinkInterface } from "@/interface/drink.interface";
import { defineStore } from "pinia";
import { ref, type Ref, onMounted } from "vue";
import axios from "axios";

export const useDrinksStore = defineStore("drinks", () => {
  const isOpenDetail = ref(false);
  const isLoading = ref(false);
  const filterBy = ref("c");
  const search = ref("");
  const searchStatic = ref("");
  const categories: Ref<CategoryDrinkInterface[]> = ref([]);

  const idDrink = ref("");
  const drink: Ref<DrinkInterface | null> = ref(null);
  const drinks: Ref<ShortDrinkInterface[]> = ref([]);

  const toggleDetail = () => {
    isOpenDetail.value = !isOpenDetail.value;
  }
  const setDrink = async (id: string) => {
    idDrink.value = id;
    if (idDrink.value) {
      const { data } = await axios.get(`/lookup.php?i=${idDrink.value}`);
      drink.value = data.drinks[0];
    } else {
      drink.value = null;
    }
    toggleDetail();
  }

  const searchDrinks = async () => {
    isLoading.value = true;
    const { data } = await axios.get(`/${filterBy.value === 's' ? 'search' : 'filter'}.php?${filterBy.value}=${search.value}`);
    searchStatic.value = search.value;
    drinks.value = data.drinks || [];
    isLoading.value = false;
  }

  const getCategories = async () => {
    const { data } = await axios.get("/list.php?c=list");
    search.value = data.drinks[0].strCategory;
    setCategories(data.drinks);
  }
  const setCategories = (ctg: CategoryDrinkInterface[]) => {
    categories.value = ctg;
  };
  onMounted(async () => {
    await getCategories();
    await searchDrinks();
  });

  return {
    isOpenDetail,
    isLoading,
    filterBy,
    search,
    searchStatic,
    categories,
    getCategories,
    setCategories,
    drink,
    drinks,
    setDrink,
    searchDrinks
  };
});