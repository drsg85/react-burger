import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

// Reducer
import { rootReducer } from './reducers'

// Redux DevTools
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const composeWithDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Store
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
)
