import { combineReducers } from 'redux';

//  Reducers
import { ingredientReducer } from './ingredientReducer';
import { constructorReducer } from './constructorReducer';
import { ingredientDetailsReducer } from './IngredientDetailsReducer';
import { orderReducer } from './orderReducer';

export const rootReducer = combineReducers({
    ingredients: ingredientReducer,
    burgerConstructor: constructorReducer,
    ingredientDetails: ingredientDetailsReducer,
    orderDetails: orderReducer,
})