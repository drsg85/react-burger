import styles from './modalOverlay.module.css';

const ModalOverlay = ({onClick}) => {
    return (
        <div className={styles.overlay} onClick={onClick}></div>
    )
}

export default ModalOverlay;