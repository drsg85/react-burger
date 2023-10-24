import React, { ReactElement } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

// Redux
import { useSelector } from 'redux/store'
import { authSelector } from 'redux/selectors'

export interface IProtectedRoute {
  element: ReactElement
  onlyUnAuth?: boolean
}

const ProtectedRoute: React.FC<IProtectedRoute> = ({
  element,
  onlyUnAuth = false,
}) => {
  const location = useLocation()

  const { user, isLoading } = useSelector(authSelector)

  if (isLoading) return <h1>Идет загрузка...</h1>

  if (onlyUnAuth && user)
    return <Navigate to={location.state?.target || '/'} replace />

  if (!onlyUnAuth && !user)
    return <Navigate to="/login" state={{ target: location }} replace />

  return element
}

export default ProtectedRoute
