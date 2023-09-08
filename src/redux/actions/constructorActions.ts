// Types and utils
import { IConstructorIngredient, IIngredient } from 'types'

// Typing
export interface ISetBunA {
  type: 'ADD_BUN'
  payload: {
    bun: IIngredient
  }
}

export interface ISetIngredientA {
  type: 'ADD_INGREDIENT'
  payload: {
    ingredient: IConstructorIngredient
  }
}

export interface IRemoveIngredientA {
  type: 'REMOVE_INGREDIENT'
  payload: {
    id: string
  }
}

export interface IReorderIngredientsA {
  type: 'REORDER_INGREDIENTS'
  payload: {
    ingredients: IConstructorIngredient[]
  }
}

export type ConstructorActions =
  | ISetBunA
  | ISetIngredientA
  | IRemoveIngredientA
  | IReorderIngredientsA

// Actions
export const setBun = (bun: IIngredient): ISetBunA => ({
  type: 'ADD_BUN',
  payload: {
    bun,
  },
})

export const setIngredient = (ingredient: IIngredient): ISetIngredientA => ({
  type: 'ADD_INGREDIENT',
  payload: {
    ingredient: {
      ...ingredient,
      uuid: crypto.randomUUID(),
    },
  },
})

export const removeIngredient = (id: string): IRemoveIngredientA => ({
  type: 'REMOVE_INGREDIENT',
  payload: {
    id,
  },
})

export const reorderIngredients = (
  ingredients: IConstructorIngredient[],
): IReorderIngredientsA => ({
  type: 'REORDER_INGREDIENTS',
  payload: {
    ingredients,
  },
})
