export interface ShortDrinkInterface {
  strDrink: string
  strDrinkThumb: string
  idDrink: string
}

export interface DrinkInterface extends ShortDrinkInterface{
  strDrinkAlternate: any
  strTags: string
  strVideo: any
  strCategory: string
  strIBA: string
  strAlcoholic: string
  strGlass: string
  strInstructions: string
  strInstructionsES: any
  strInstructionsDE: string
  strInstructionsFR: any
  strInstructionsIT: string
  "strInstructionsZH-HANS": any
  "strInstructionsZH-HANT": any
  strIngredient1: string
  strIngredient2: string
  strIngredient3: string
  strIngredient4: string
  strIngredient5: string
  strIngredient6: string
  strIngredient7: string
  strIngredient8: string
  strIngredient9: string
  strIngredient10: string
  strIngredient11: string
  strIngredient12: string
  strIngredient13: string
  strIngredient14: string
  strIngredient15: string
  strMeasure1: string
  strMeasure2: string
  strMeasure3: string
  strMeasure4: any
  strMeasure5: any
  strMeasure6: any
  strMeasure7: any
  strMeasure8: any
  strMeasure9: any
  strMeasure10: any
  strMeasure11: any
  strMeasure12: any
  strMeasure13: any
  strMeasure14: any
  strMeasure15: any
  strImageSource: string
  strImageAttribution: string
  strCreativeCommonsConfirmed: string
  dateModified: string
}

export interface CategoryDrinkInterface {
  strCategory: string
}