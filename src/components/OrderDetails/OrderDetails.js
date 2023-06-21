import styles from './orderDetails.module.css';
import checkImage from '../../img/ok.png';

import { orderSelector } from '../../redux/selectors/orderSelectors';
import { useSelector } from 'react-redux';

const OrderDetails = () => {
    const orderInfo = useSelector(orderSelector);
    console.log(orderInfo);

    return (
        <div className={styles.orderDetails}>
            <p className={`${styles.orderNumber} text text_type_digits-large mb-8`}>{'test'}</p>
            <p className={'text text_type_main-medium mb-15'}>идентификатор заказа</p>
            <img className={'mb-15'} src={checkImage} alt='Check png'></img>
            <p className={'text text_type_main-small mb-2'}>Ваш заказ начали готовить</p>
            <p className={'text text_type_main-small text_color_inactive mb-30'}>Дождитесь готовности на орбитальной станции</p>
        </div>
    )
}

export default OrderDetails;