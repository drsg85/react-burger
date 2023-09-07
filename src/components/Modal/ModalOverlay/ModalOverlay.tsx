import React from 'react'

// Styles
import styles from './modalOverlay.module.css'

export interface IModalOverlayProps {
  onClick: (onClick: React.MouseEvent<HTMLDivElement>) => void
}

const ModalOverlay: React.FC<IModalOverlayProps> = ({ onClick }) => {
  return <div className={styles.overlay} onClick={onClick}></div>
}

export default ModalOverlay
