import { useEffect, useState } from 'react';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import {getIngredients} from '../../utils/getUrl';


function App() {
  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getIngredients()
      .then(setIngredients)
      .catch(() => alert('Произошла ошибка'))
      .finally(() => setIsLoading(false))
  }, []);

  return (
    <>
      <AppHeader />
      {isLoading ? (<h2>something wrong</h2> // временное решение
      ) : (
        <main>
          <BurgerIngredients burgersData={ingredients}/>
          <BurgerConstructor constructorBurgersData={ingredients}/>
        </main>)
      }
    </>
  );
}

export default App;
