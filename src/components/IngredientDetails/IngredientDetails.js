import styles from './ingredientDetails.module.css';
import PropTypes from 'prop-types';
import burgersDataPropTypes from '../../utils/burgersDataPropTypes';

const IngredientDetails = (props) => {
    const {ingredient} = props;

    return (
        <div className={styles.ingredientDetails}>
            <img src={`${ingredient.image}`} alt={ingredient.name} className={`${styles.image} mb-4`}></img>
            <p className={`${styles.name} text text_type_main-medium mb-8`}>{ingredient.name}</p>
            <div className={`${styles.components} mb-15`}>
                <p className={`${styles.component} text text_type_main-small text_color_inactive mr-5`}>Калории,ккал<br/>{ingredient.calories}</p>
                <p className={`${styles.component} text text_type_main-small text_color_inactive mr-5`}>Белки, г<br/>{ingredient.proteins}</p>
                <p className={`${styles.component} text text_type_main-small text_color_inactive mr-5`}>Жиры, г<br/>{ingredient.fat}</p>
                <p className={`${styles.component} text text_type_main-small text_color_inactive`}>Углеводы, г<br/>{ingredient.carbohydrates}</p>
            </div>
        </div>
    )
}

IngredientDetails.propTypes = {
    ingredient: PropTypes.arrayOf(burgersDataPropTypes.isRequired),
};

export default IngredientDetails;