import React from 'react'

// Types
import { IIngredient } from 'types'

// Styles
import styles from './ingredientDetails.module.css'

export interface IIngredientDetailsProps {
  ingredient: IIngredient
}

const IngredientDetails: React.FC<IIngredientDetailsProps> = ({
  ingredient,
}) => {
  return (
    <div className={styles.ingredientDetails}>
      <img
        src={ingredient.image}
        alt={ingredient.name}
        className={`${styles.image} mb-4`}
      ></img>
      <p className={`${styles.name} text text_type_main-medium mb-8`}>
        {ingredient.name}
      </p>
      <div className={`${styles.components} mb-15`}>
        <p
          className={`${styles.component} text text_type_main-small text_color_inactive mr-5`}
        >
          Калории,ккал
          <br />
          <span className={styles.ingredientDetails__value}>
            {ingredient.calories}
          </span>
        </p>
        <p
          className={`${styles.component} text text_type_main-small text_color_inactive mr-5`}
        >
          Белки, г<br />
          <span className={styles.ingredientDetails__value}>
            {ingredient.proteins}
          </span>
        </p>
        <p
          className={`${styles.component} text text_type_main-small text_color_inactive mr-5`}
        >
          Жиры, г<br />
          <span className={styles.ingredientDetails__value}>
            {ingredient.fat}
          </span>
        </p>
        <p
          className={`${styles.component} text text_type_main-small text_color_inactive`}
        >
          Углеводы, г<br />
          <span className={styles.ingredientDetails__value}>
            {ingredient.carbohydrates}
          </span>
        </p>
      </div>
    </div>
  )
}

export default IngredientDetails
