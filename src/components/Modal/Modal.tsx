import { useCallback, useEffect, PropsWithChildren } from 'react'
import ReactDOM from 'react-dom'
import { useLocation, useNavigate } from 'react-router-dom'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'

// Components
import ModalOverlay from './ModalOverlay/ModalOverlay'

// Styles
import styles from './modal.module.css'

const modalRoot = document.getElementById('react-modals') as HTMLElement

export interface IModalProps {
  title?: string
}

const Modal: React.FC<PropsWithChildren<IModalProps>> = ({
  title,
  children,
}) => {
  const navigate = useNavigate()
  const location = useLocation()

  const onClose = useCallback(() => {
    if (location.state?.background) navigate(location.state.background)
  }, [location.state?.background, navigate])

  useEffect(() => {
    const esc = (e: KeyboardEvent) => {
      e.key === 'Escape' && onClose()
    }

    document.addEventListener('keydown', esc)

    return () => {
      document.removeEventListener('keydown', esc)
    }
  }, [onClose])

  return ReactDOM.createPortal(
    <>
      <div className={`${styles.modal} pt-10 pr-10`}>
        <div className={styles.header}>
          <h3 className={'text text_type_main-medium pl-10'}>{title}</h3>
          <button className={styles.button}>
            <CloseIcon type="secondary" onClick={onClose} />
          </button>
        </div>
        <div>{children}</div>
      </div>
      <ModalOverlay onClick={onClose} />
    </>,
    modalRoot,
  )
}

export default Modal
