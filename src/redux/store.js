import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './reducers';
import thunk from 'redux-thunk';

const composeWithDevTools =
    window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
