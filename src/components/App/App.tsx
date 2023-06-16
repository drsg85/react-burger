import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import {getIngredients} from '../../utils/getUrl';

import {
  getIngredientsError,
  getIngredientsRequest,
  getIngredientsSuccess,
} from '../../redux/actions/ingredientsActions';
import { ingredientsSelector } from '../../redux/selectors/ingredientsSelectors';


function App() {
  const dispatch = useDispatch();
  const {isLoading, hasError, ingredients} = useSelector(ingredientsSelector);

  useEffect(() => {
    dispatch(getIngredientsRequest)

    getIngredients()
      .then((data) => {
        dispatch(getIngredientsSuccess(data))
      })
      .catch(() => dispatch(getIngredientsError))
  }, [dispatch]);

  return (
    <>
      <AppHeader />
      {isLoading || !ingredients ? (
        <h2>Загрузка...</h2>
      ) : hasError ? (
        <h2>Ошибка</h2> 
      ) : (
        <main>
          <BurgerIngredients burgersData={ingredients}/>
          <BurgerConstructor constructorBurgersData={ingredients}/>
        </main>
        )}
    </>
  );
}

export default App;
