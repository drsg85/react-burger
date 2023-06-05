import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import styles from './modal.module.css'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('react-modals');

const Modal = ({title, children, onClose}) => {
    useEffect(() => {
        const esc = (e) => {
            e.key === 'Escape' && onClose();
        };

        document.addEventListener('keydown', esc);

        return () => {
            document.removeEventListener('keydown', esc);
        }
    }, [onClose]);

    return ReactDOM.createPortal(
        <>
            <div className={`${styles.modal} pt-10 pr-10`}>
                <div className={styles.header}>
                    <h3 className={'text text_type_main-medium pl-10'}>
                        {title}
                    </h3>
                    <button className={styles.button}><CloseIcon type="secondary" onClick={onClose}/></button>
                </div>
                <div>{children}</div>
            </div>
            <ModalOverlay onClick={onClose}/>
        </>,
        modalRoot
    );
};

Modal.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node).isRequired,
        PropTypes.node.isRequired
    ]),
    onClose: PropTypes.func.isRequired,
};

export default Modal;