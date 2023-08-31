import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

const ProtectedRoute = ({ element, onlyUnAuth = false }) => {
  const location = useLocation()

  const { user, isLoading } = useSelector((store) => store.auth)

  if (isLoading) return <h1>Идет загрузка...</h1>

  if (onlyUnAuth && user)
    return <Navigate to={location.state?.target || '/'} replace />

  if (!onlyUnAuth && !user)
    return <Navigate to="/login" state={{ target: location }} replace />

  return element
}

export default ProtectedRoute

ProtectedRoute.propTypes = {
  element: PropTypes.element.isRequired,
  onlyUnAuth: PropTypes.bool,
}
