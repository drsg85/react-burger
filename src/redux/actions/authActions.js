import { loginRequest } from '../actionCreators/authActionCreators'

export const handleLogin = () => (dispatch) => {
  dispatch(loginRequest)
}
