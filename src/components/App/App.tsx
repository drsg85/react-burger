import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

// Redux
import { useDispatch } from 'redux/store'
import { getIngredients, handleGetUser } from 'redux/actions'

// Pages
import MainPage from 'pages/MainPage/MainPage'
import Login from 'pages/Login/Login'
import Profile from 'pages/Profile/Profile'
import Register from 'pages/Register/Register'
import ForgotPassword from 'pages/ForgotPassword/ForgotPassword'
import ResetPassword from 'pages/ResetPassword/ResetPassword'
import FeedPage from 'pages/FeedPage/FeedPage'

// Components
import AppHeader from '../AppHeader/AppHeader'
import ProfileInfo from '../ProfileInfo/ProfileInfo'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import IngredientDetailsModal from '../IngredientDetailsModal/IngredientDetailsModal'
import IngredientPage from '../../pages/IngredientPage/IngredientPage'

const App = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const background = location.state && location.state.background

  useEffect(() => {
    dispatch(handleGetUser())
    dispatch(getIngredients())
  }, [dispatch])

  return (
    <>
      <AppHeader />
      <Routes location={background || location}>
        <Route path="/" element={<MainPage />} />

        <Route path="/feed" element={<FeedPage />} />

        <Route
          path="/profile"
          element={<ProtectedRoute element={<Profile />} />}
        >
          <Route path="" element={<ProfileInfo />} />
          <Route path="orders" element={<h1>Страница заказов</h1>} />
        </Route>

        <Route
          path="/login"
          element={<ProtectedRoute onlyUnAuth element={<Login />} />}
        />

        <Route
          path="/register"
          element={<ProtectedRoute onlyUnAuth element={<Register />} />}
        />

        <Route
          path="/forgot-password"
          element={<ProtectedRoute onlyUnAuth element={<ForgotPassword />} />}
        />

        <Route
          path="/reset-password"
          element={<ProtectedRoute onlyUnAuth element={<ResetPassword />} />}
        />

        <Route path="/ingredients/:id" element={<IngredientPage />} />
      </Routes>

      {background && (
        <Routes>
          <Route path="/ingredients/:id" element={<IngredientDetailsModal />} />
        </Routes>
      )}
    </>
  )
}

export default App
