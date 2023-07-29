import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import {
  getIngredients,
} from '../../redux/actions/ingredientsActions';
import { ingredientsSelector } from '../../redux/selectors/ingredientsSelectors';


function App() {
  const dispatch = useDispatch();
  const { isLoading, hasError, ingredients } = useSelector(ingredientsSelector);

  useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch]);

  return (
    <>
      <AppHeader />
      {isLoading || !ingredients ? (
        <h2>Загрузка...</h2>
      ) : hasError ? (
        <h2>Ошибка</h2>
      ) : (
        <DndProvider backend={HTML5Backend}>
          <main>
            <BurgerIngredients />
            <BurgerConstructor />
          </main>
        </DndProvider>
      )}
    </>
  );
}

export default App;
