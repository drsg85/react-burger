import styles from '../Ingredient/ingredient.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

const Ingredient = (props) => {
    return(
        <>
            <div className={`${styles.ingredient} mb-8`}>
                <img className={`${styles.image} mb-2`} src={`${props.burgersData.image}`} alt={props.burgersData.name}/>
                <p className={`${styles.price} mb-2 text text_type_digits-default`}>{props.burgersData.price}<span className={`${styles.currancy}`}><CurrencyIcon type='primary'/></span></p>
                <p className={`${styles.name} text text_type_main-default`}>{props.burgersData.name}</p>
                <span className={styles.counter}><Counter count={1} size='default' extraclass='m-1'/></span>
            </div>
        </>
    )
}

export default Ingredient;