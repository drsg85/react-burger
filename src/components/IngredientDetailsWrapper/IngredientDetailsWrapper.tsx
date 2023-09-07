import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

// Redux
import { useDispatch, useSelector } from 'redux/store'

// Components
import IngredientDetails from '../IngredientDetails/IngredientDetails'
import { setIngredientDetails } from '../../redux/actions/ingredientDetailsAction'
import { ingredientsListSelector } from '../../redux/selectors'
import { ingredientDetails } from '../../redux/selectors/ingredientDetails'

const IngredientDetailsWrapper: React.FC = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  const ingredient = useSelector(ingredientsListSelector)?.find(
    (el) => el._id === id,
  )

  useEffect(() => {
    if (ingredient) dispatch(setIngredientDetails(ingredient))
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
