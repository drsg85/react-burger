import React from 'react'
import classNames from 'classnames'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

// Redux
import { IIngredient } from 'types'

// Utils
import { numFormat } from 'utils/numFormat'

// Styles
import styles from './PriceCard.module.scss'

interface IPriceCard {
  ingredients?: IIngredient[]
  price?: number
  size?: 'small' | 'medium'
  prefix?: number
}

export const countPrice = (ingredients: IIngredient[]) => {
  return ingredients.reduce((sum, el) => sum + el.price, 0)
}

const PriceCard: React.FC<IPriceCard> = ({
  ingredients,
  price,
  size = 'small',
  prefix,
}) => {
  let totalPrice = '0'

  if (price) totalPrice = numFormat(price)

  if (ingredients) totalPrice = numFormat(countPrice(ingredients))

  return (
    <div className={classNames(styles.price, styles[size])}>
      <span>
        {prefix && `${prefix} x `}
        {totalPrice}
      </span>
      <CurrencyIcon type="primary" />
    </div>
  )
}

export default React.memo(PriceCard)
