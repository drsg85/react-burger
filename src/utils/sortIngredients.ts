import { IIngredient } from 'types'

export const sortIngredientsList = (
  ingredients: IIngredient[],
): IIngredient[] => {
  const buns = [...new Set(ingredients)].filter((el) => el.type === 'bun')
  const ingredientsList = ingredients.filter((el) => el.type !== 'bun')
  const totalIngredientsList = [...buns, ...ingredientsList, ...buns]

  return totalIngredientsList
}
