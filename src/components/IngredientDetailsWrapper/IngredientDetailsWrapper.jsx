import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

// Components
import IngredientDetails from '../IngredientDetails/IngredientDetails'
import { setIngredientDetails } from '../../redux/actions/ingredientDetailsAction'
import { ingredientsListSelector } from '../../redux/selectors'
import { ingredientDetails } from '../../redux/selectors/ingredientDetails'

const IngredientDetailsWrapper = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  const ingredient = useSelector(ingredientsListSelector)?.find(
    (el) => el._id === id,
  )

  useEffect(() => {
    dispatch(setIngredientDetails(ingredient))
  }, [dispatch, ingredient])

  const currentIngredient = useSelector(ingredientDetails)

  return (
    <>
      {currentIngredient ? (
        <IngredientDetails ingredient={currentIngredient} />
      ) : (
        <h1>Идет загрузка ингредиента...</h1>
      )}
    </>
  )
}

export default IngredientDetailsWrapper
