import styles from '../Ingredient/ingredient.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import burgersDataPropTypes from '../../utils/burgersDataPropTypes';
import { useDispatch } from 'react-redux';
import { setBun, setIngredient } from '../../redux/actions/constructorActions';


const Ingredient = ({ burgersData, onClick }) => {
    const { image, price, name } = burgersData;
    const dispatch = useDispatch();

    const openClick = () => {
        // onClick(burgersData);
        if (burgersData.type === 'bun') {
            dispatch(setBun(burgersData))
        } else {
            dispatch(setIngredient(burgersData))
        }
    }

    return (
        <>
            <div className={`${styles.ingredient} mb-8`} onClick={openClick}>
                <img className={`${styles.image} mb-2`} src={`${image}`} alt={name} />
                <p className={`${styles.price} mb-2 text text_type_digits-default`}>{price}<span className={`${styles.currancy}`}><CurrencyIcon type='primary' /></span></p>
                <p className={`${styles.name} text text_type_main-default`}>{name}</p>
                <span className={styles.counter}><Counter count={1} size='default' extraclass='m-1' /></span>
            </div>
        </>
    )
}

Ingredient.propTypes = {
    burgersData: PropTypes.shape(burgersDataPropTypes.isRequired),
    onClick: PropTypes.func.isRequired,
};

export default Ingredient;