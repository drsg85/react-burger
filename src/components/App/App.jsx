import { Routes, Route } from 'react-router-dom'

import AppHeader from '../AppHeader/AppHeader'
import ProfileInfo from '../ProfileInfo/ProfileInfo'
import MainPage from '../../pages/MainPage/MainPage'
import Login from '../../pages/Login/Login'
import Profile from '../../pages/Profile/Profile'
import Register from '../../pages/Register/Register'
import ForgotPassword from '../../pages/ForgotPassword/ForgotPassword'
import ResetPassword from '../../pages/ResetPassword/ResetPassword'

const App = () => {
  return (
    <>
      <AppHeader />
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="/feed" element={<h1>лента заказов</h1>} />

        <Route path="/profile" element={<Profile />}>
          <Route path="" element={<ProfileInfo />} />
          <Route path="orders" element={<h1>Страница заказов</h1>} />
        </Route>

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </>
  )
}

export default App
