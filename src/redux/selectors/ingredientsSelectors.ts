import { TRootState } from 'redux/store'

export const ingredientsSelector = (store: TRootState) => store.ingredients

export const ingredientsListSelector = (store: TRootState) =>
  store.ingredients.ingredients
