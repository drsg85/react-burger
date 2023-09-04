import React from 'react'

// Components
import Modal from '../Modal/Modal'
import IngredientDetailsWrapper from '../IngredientDetailsWrapper/IngredientDetailsWrapper'

const IngredientDetailsModal = () => {
  return (
    <Modal title="Детали ингредиента">
      <IngredientDetailsWrapper />
    </Modal>
  )
}

export default IngredientDetailsModal
