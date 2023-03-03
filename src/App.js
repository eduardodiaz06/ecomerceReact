import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar.js'
import ItemListContainer from './components/ItemListContainer';
import Home from './components/Home.js';
import ItemDetail from './components/ItemDetail.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/producto" element={<ItemListContainer />} />
          <Route exact path="/producto/item" element={<ItemDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
