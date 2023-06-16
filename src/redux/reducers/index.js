import { combineReducers } from 'redux';

//  Reducers
import { ingredientReducer } from './ingredientReducer';
import { constructorReducer } from './constructorReducer';

export const rootReducer = combineReducers({
    ingredients: ingredientReducer,
    burgerConstructor: constructorReducer,
})