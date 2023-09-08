export interface IIngredient {
  _id: string
  name: string
  type: 'bun' | 'main' | 'sauce'
  price: number
  image: string
  image_mobile: string
  image_large: string
  proteins: number
  fat: number
  carbohydrates: number
  calories: number
}

export interface IConstructorIngredient extends IIngredient {
  uuid: string
}
