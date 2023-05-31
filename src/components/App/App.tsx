import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import data from '../../utils/data';

function App() {
  return (
    <>
      <AppHeader />
      <main>
        <BurgerIngredients burgersData={data}/>
        <BurgerConstructor burgersData={data}/>
      </main>
    </>
  );
}

export default App;
