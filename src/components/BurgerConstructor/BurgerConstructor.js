import { ConstructorElement,CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burgerConstructor.module.css';

const BurgerConstructor = ({burgersData}) => {
    const burgersIngredient = burgersData.map((burgersIngredient) => burgersIngredient);

    return(
        <section className={`${styles.burgerConstructor} pt-25`}>
            <div className={`${styles.content} mb-10`}>
                <div>
                    <ConstructorElement 
                        type="top"
                        isLocked={true}
                        text="Краторная булка N-200i (верх)"
                        price={200}
                        thumbnail={burgersIngredient[0].image}
                    />
                </div>
                <ul className={styles.constructorList}>
                    <li>
                    <ConstructorElement
                        text="Краторная булка N-200i (верх)"
                        price={50}
                        thumbnail={burgersIngredient[3].image}
                    />
                    </li>
                    <li>
                    <ConstructorElement
                        text="Краторная булка N-200i (верх)"
                        price={50}
                        thumbnail={burgersIngredient[4].image}
                    />
                    </li>
                    <li>
                    <ConstructorElement
                        text="Краторная булка N-200i (верх)"
                        price={50}
                        thumbnail={burgersIngredient[5].image}
                    />
                    </li>
                </ul>
                <div>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text="Краторная булка N-200i (низ)"
                        price={200}
                        thumbnail={burgersIngredient[1].image}
                    />
                </div>
            </div>
            <div className={styles.result}>
                <p className={`${styles.sum} text text_type_digits-medium pr-10`}>610<span className={`${styles.currencyIcon} ml-2`}><CurrencyIcon type='primary'/></span></p>
                <Button htmlType='button' type='primary' size='medium'>
                    Оформить заказ
                </Button>
            </div>
        </section>
    )
}

export default BurgerConstructor;