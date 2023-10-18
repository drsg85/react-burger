import React from 'react'

// Utils
import { numFormat } from 'utils/numFormat'

interface IOrderCount {
  title: string
  count: number
}

const OrderCount: React.FC<IOrderCount> = ({ title, count }) => {
  const modifiedCount = numFormat(count)

  return (
    <>
      <h3 className="text text_type_main-medium">{title}</h3>
      <p className="text text_type_digits-large">{modifiedCount}</p>
    </>
  )
}

export default React.memo(OrderCount)
