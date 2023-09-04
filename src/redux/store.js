import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

// Reducer
import { rootReducer } from './reducers'

const composeWithDevTools =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

// Store
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
)
