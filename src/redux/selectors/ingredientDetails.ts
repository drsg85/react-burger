import { TRootState } from 'redux/store'

export const ingredientDetails = (store: TRootState) =>
  store.ingredientDetails.ingredient
