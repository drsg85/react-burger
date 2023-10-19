/* istanbul ignore file */
import { IWSOrder } from 'redux/actions/webSocket'
import { IConstructorIngredient, IIngredient } from 'types'

export const mockBun: IIngredient = ingredientCreator('bun')
export const mockMain: IIngredient = ingredientCreator('main')
export const mockSauce: IIngredient = ingredientCreator('sauce')
export const mockCartMain: IConstructorIngredient =
  cartIngredientCreator('main')
export const mockCartSauce: IConstructorIngredient =
  cartIngredientCreator('sauce')

export function mockOrder(status: 'created' | 'pending' | 'done'): IWSOrder {
  return {
    ingredients: ['ingredient 1', 'ingredient 2', 'ingredient 3'],
    _id: '_id',
    name: 'name',
    number: 1337,
    status: status,
    createdAt: 'date',
    updatedAt: 'date',
  }
}

function ingredientCreator(type: 'bun' | 'sauce' | 'main'): IIngredient {
  return {
    _id: '1',
    name: 'name',
    type: type,
    proteins: 42,
    fat: 13,
    carbohydrates: 69,
    calories: 228,
    price: 1337,
    image: 'image link',
    image_mobile: 'image link',
    image_large: 'image link',
  }
}

function cartIngredientCreator(
  type: 'bun' | 'sauce' | 'main',
): IConstructorIngredient {
  return {
    _id: '1',
    name: 'name',
    type: type,
    proteins: 42,
    fat: 13,
    carbohydrates: 69,
    calories: 228,
    price: 1337,
    image: 'image link',
    image_mobile: 'image link',
    image_large: 'image link',
    uuid: 'test value',
  }
}
