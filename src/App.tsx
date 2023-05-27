import AppHeader from './components/AppHeader/AppHeader';
import BurgerIngredients from './components/BurgerIngredients/BurgerIngredients';
import data from '../src/utils/data';

function App() {
  return (
    <>
      <AppHeader />
      <main>
        <BurgerIngredients burgersData={data}/>
      </main>
    </>
  );
}

export default App;
