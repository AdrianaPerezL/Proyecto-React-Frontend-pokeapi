import './App.css';
import Card from './components/Card';
import ListPokemons from './components/ListPokemons';
import Navbar from './components/Navbar';
import Filter from './components/filter';

function App() {
  return (
    <div className="App">
 
      <header className="App-header">
        
      <Navbar />
      <Filter />
      <ListPokemons/>
      </header>
    </div>
  );
}

export default App;


