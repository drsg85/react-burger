import { useSelector } from 'react-redux'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

// Redux
import { ingredientsSelector } from '../../redux/selectors/ingredientsSelectors'

// Components
import BurgerIngredients from '../../components/BurgerIngredients/BurgerIngredients'
import BurgerConstructor from '../../components/BurgerConstructor/BurgerConstructor'

const MainPage: React.FC = () => {
  const { isLoading, hasError, ingredients } = useSelector(ingredientsSelector)

  return (
    <>
      {isLoading || !ingredients ? (
        <h2>Загрузка...</h2>
      ) : hasError ? (
        <h2>Ошибка</h2>
      ) : (
        <DndProvider backend={HTML5Backend}>
          <main>
            <BurgerIngredients />
            <BurgerConstructor />
          </main>
        </DndProvider>
      )}
    </>
  )
}

export default MainPage
