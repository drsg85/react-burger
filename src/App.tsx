import AppHeader from './components/AppHeader/AppHeader';
import BurgerIngredients from './components/BurgerIngredients/BurgerIngredients';
import BurgerConstructor from './components/BurgerConstructor/BurgerConstructor';
import data from '../src/utils/data';

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
