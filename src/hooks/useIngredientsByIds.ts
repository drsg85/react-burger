// Redux
import { ingredientsSelector } from 'redux/selectors'
import { useSelector } from 'redux/store'
import { IIngredient } from 'types'
import { sortIngredientsList } from 'utils/sortIngredients'

export function useIngredientsByIds(ids: string[]) {
  const allIngredients = useSelector(ingredientsSelector)

  const orderIngredients = ids.reduce<IIngredient[]>((acc, id) => {
    const ingredient = allIngredients.ingredients?.find((el) => el._id === id)

    if (ingredient) acc.push(ingredient)

    return acc
  }, [])

  return sortIngredientsList(orderIngredients)
}
