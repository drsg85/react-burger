import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

// Redux
import { handleGetUser } from '../../redux/actions/authActions'
import { getIngredients } from '../../redux/actions/ingredientsActions'

// Pages
import MainPage from '../../pages/MainPage/MainPage'
import Login from '../../pages/Login/Login'
import Profile from '../../pages/Profile/Profile'
import Register from '../../pages/Register/Register'
import ForgotPassword from '../../pages/ForgotPassword/ForgotPassword'
import ResetPassword from '../../pages/ResetPassword/ResetPassword'

// Components
import AppHeader from '../AppHeader/AppHeader'
import ProfileInfo from '../ProfileInfo/ProfileInfo'

import { compose, createStore } from 'redux'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(handleGetUser())
    dispatch(getIngredients())
  }, [dispatch])

  return (
    <>
      <AppHeader />
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="/feed" element={<h1>лента заказов</h1>} />

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
      </Routes>
    </>
  )
}

export default App
