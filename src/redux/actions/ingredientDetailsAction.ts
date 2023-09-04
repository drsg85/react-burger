import { IIngredient } from 'types'

// Typing
export interface ISetIngredientDetailsA {
  type: 'SET_INGREDIENT_DETAILS'
  payload: {
    ingredient: IIngredient
  }
}

export interface IResetIngredientDetailsA {
  type: 'RESET_INGREDIENT_DETAILS'
}

export type IngredientDetailsActions =
  | ISetIngredientDetailsA
  | IResetIngredientDetailsA

// Actions
export const setIngredientDetails = (
  ingredient: IIngredient,
): ISetIngredientDetailsA => ({
  type: 'SET_INGREDIENT_DETAILS',
  payload: {
    ingredient,
  },
})

export const resetIngredientDetails: IResetIngredientDetailsA = {
  type: 'RESET_INGREDIENT_DETAILS',
}
