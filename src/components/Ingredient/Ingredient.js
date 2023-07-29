import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag } from 'react-dnd';
import styles from '../Ingredient/ingredient.module.css';


const Ingredient = ({ burgersData, onClick }) => {
    const { image, price, name, _id } = burgersData;

    const openClick = () => {
        onClick(burgersData);
    }

    const [{ isDragging }, dragRef, dragPreviewRef] = useDrag(() => ({
        type: 'INGREDIENT',
        item: { id: _id },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    }))

    return (
        <>
            <div className={`${styles.ingredient} mb-8`}
                onClick={openClick}
                ref={dragRef}
            // isDragging 
            >
                <img className={`${styles.image} mb-2`}
                    src={`${image}`}
                    alt={name}
                    ref={dragPreviewRef} />
                <p className={`${styles.price} mb-2 text text_type_digits-default`}>{price}<span className={`${styles.currancy}`}><CurrencyIcon type='primary' /></span></p>
                <p className={`${styles.name} text text_type_main-default`}>{name}</p>
                <span className={styles.counter}><Counter count={1} size='default' extraclass='m-1' /></span>
            </div>
        </>
    )
}


export default Ingredient;