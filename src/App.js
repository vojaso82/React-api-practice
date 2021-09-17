import logo from './logo.svg';
import './App.css';
import AllDogs from './components/AllDogs'
import Beers from './components/Beers'
import AllBeers from './components/AllBeers'
import NewBeer from './components/NewBeer'

function App() {
  return (
    <div className="App">
      <AllDogs/>
      <Beers/>
      <AllBeers/>
      <NewBeer/>
    </div>
  );
}

export default App;
