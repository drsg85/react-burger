import { combineReducers } from 'redux';
import { ingredientReducer } from './ingredientReducer';

export const rootReducer = combineReducers({
    ingredients: ingredientReducer,
})