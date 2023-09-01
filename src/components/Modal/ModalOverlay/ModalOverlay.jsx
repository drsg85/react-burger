import PropTypes from 'prop-types'

// Styles
import styles from './modalOverlay.module.css'

const ModalOverlay = ({ onClick }) => {
  return <div className={styles.overlay} onClick={onClick}></div>
}

export default ModalOverlay

ModalOverlay.propTypes = {
  onClick: PropTypes.func.isRequired,
}
