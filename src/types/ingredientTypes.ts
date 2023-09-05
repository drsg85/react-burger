export interface IIngredient {
  _id: string
  name: string
  price: number
  image: string
  proteins: number
  fat: number
  carbohydrates: number
  calories: number
}

export interface IConstructorIngredient extends IIngredient {
  uuid: string
}
