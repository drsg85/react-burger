import { createStore, applyMiddleware, compose } from 'redux'
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from 'react-redux'

// Reducer
import { rootReducer } from './reducers'

//TODO Create TAppActions
type TAppActions = any

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

export type TRootState = ReturnType<typeof rootReducer>

export type AppDispatch = ThunkDispatch<TRootState, never, TAppActions>

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  TRootState,
  never,
  TAppActions
>

export const useDispatch = () => dispatchHook<AppDispatch>()
export const useSelector: TypedUseSelectorHook<TRootState> = selectorHook
