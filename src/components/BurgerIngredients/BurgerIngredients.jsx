import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-scroll'
import { v4 as uuidv4 } from 'uuid'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'

// Redux
import { ingredientsSelector } from '../../redux/selectors/ingredientsSelectors'
import { setIngredientDetails } from '../../redux/actions/ingredientDetailsAction'

// Components
import Ingredient from '../Ingredient/Ingredient'

// Styles
import styles from './burgerIngredients.module.css'

const BurgerIngredients = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const { ingredients } = useSelector(ingredientsSelector)

  // Tab
  const inredientCategories = [
    {
      title: 'Булки',
      type: 'bun',
    },

    {
      title: 'Соусы',
      type: 'sauce',
    },

    {
      title: 'Начинки',
      type: 'main',
    },
  ]

  const [activeTab, setActiveTab] = useState(inredientCategories[0].type)

  //   Modal logic
  function onClickIngredient(ingredient) {
    dispatch(setIngredientDetails(ingredient))

    navigate(`/ingredients/${ingredient._id}`, {
      state: { background: location },
    })
  }

  const tabs = inredientCategories.map((tab) => (
    <li key={tab.type}>
      <Link
        key={tab.type}
        to={`category-${tab.type}`}
        spy={true}
        smooth={true}
        duration={700}
        offset={-20}
        containerId="ingredients"
        onSetActive={() => setActiveTab(tab.type)}
      >
        <Tab active={activeTab === tab.type} value={tab.type}>
          {tab.title}
        </Tab>
      </Link>
    </li>
  ))

  // Categories
  const categories = inredientCategories.map((category) => (
    <li key={category.type} id={`category-${category.type}`}>
      <h2>{category.title}</h2>
      <ul className={styles.listContainer}>
        {ingredients
          .filter((ingredient) => ingredient.type === category.type)
          .map((ingredient) => (
            <li key={uuidv4()}>
              <Ingredient
                burgersData={ingredient}
                onClick={() => onClickIngredient(ingredient)}
              />
            </li>
          ))}
      </ul>
    </li>
  ))

  return (
    <section className={`${styles.burgerIngredients} pt-10`}>
      <h1 className={`${styles.title} mb-5 text text_type_main-large`}>
        Соберите бургер
      </h1>
      <ul className={styles.ingredientTabs}>{tabs}</ul>
      <ul className={`${styles.content} custom-scroll`} id="ingredients">
        {categories}
      </ul>
    </section>
  )
}

export default BurgerIngredients
