import { FC } from 'react'

// Components
import Modal from 'components/Modal/Modal'
import OrderDetails from 'components/OrderDetails/OrderDetails'

export const OrderDetailsModal: FC = () => {
  return (
    <Modal>
      <OrderDetails />
    </Modal>
  )
}

export default OrderDetailsModal
