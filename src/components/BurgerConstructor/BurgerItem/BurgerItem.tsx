import React from 'react'
import { useDrop, useDrag } from 'react-dnd'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDispatch, useSelector } from 'react-redux'
import { Identifier, XYCoord } from 'dnd-core'

import { IConstructorIngredient } from 'types'

// Redux
import {
  removeIngredient,
  reorderIngredients,
} from '../../../redux/actions/constructorActions'
import { constructorSelector } from '../../../redux/selectors'

// Utils
import { sortFunc } from '../../../utils/sortFunc'

interface IConstructorItem {
  ingredient: IConstructorIngredient
  orderId: number
}

export interface IBurgerItemProps {
  ingredient: IConstructorIngredient
  orderId: number
}

const BurgerItem: React.FC<IBurgerItemProps> = ({ ingredient, orderId }) => {
  const dispatch = useDispatch()
  const { ingredients } = useSelector(constructorSelector)

  const handleRemoveIngredient = (id: string) => {
    dispatch(removeIngredient(id))
  }

  // DND
  const itemRef = React.useRef<HTMLLIElement>(null)

  const [{ isDragging }, dragSortRef] = useDrag({
    type: 'SORT_INGREDIENT',
    item: {
      ingredient,
      orderId,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const [{ handlerId }, dropSortRef] = useDrop<
    IConstructorItem,
    void,
    { handlerId: Identifier | null }
  >({
    accept: 'SORT_INGREDIENT',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item, monitor) {
      const dragIndex = item.orderId
      const hoverIndex = orderId

      if (!itemRef.current || dragIndex === hoverIndex) {
        return
      }

      const hoverBoundingRect = itemRef.current.getBoundingClientRect()

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

      const clientOffset = monitor.getClientOffset()

      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      dispatch(
        reorderIngredients(sortFunc(ingredients || [], dragIndex, hoverIndex)),
      )

      item.orderId = hoverIndex
    },
  })

  dragSortRef(dropSortRef(itemRef))
  return (
    <li key={ingredient.uuid} ref={itemRef}>
      <ConstructorElement
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image}
        handleClose={() => handleRemoveIngredient(ingredient.uuid)}
      />
    </li>
  )
}

export default BurgerItem
