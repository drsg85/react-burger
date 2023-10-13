import { FC } from 'react'
import { IWSOrder } from 'redux/actions/webSocket'

export interface IOrderCardDetailsBodyProps {
  order: IWSOrder
}

export const OrderCardDetailsBody: FC<IOrderCardDetailsBodyProps> = ({
  order,
}) => {
  return <h1>{order.name}</h1>
}

export default OrderCardDetailsBody
