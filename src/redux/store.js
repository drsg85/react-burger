import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

// Reducer
import { rootReducer } from './reducers'

const composeWithDevTools = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose

// Store
export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)),
)