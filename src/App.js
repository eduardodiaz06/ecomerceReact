import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar.js'
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar>
      </NavBar>
      <ItemListContainer persona=" N° 1"/>
      <ItemListContainer persona=" N° 2"/>
      <ItemListContainer persona=" N° 3"/>
    </div>
  );
}

export default App;
