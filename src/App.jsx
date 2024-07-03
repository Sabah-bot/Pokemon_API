import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PokemonForm from './Components/PokemonForm';
import PokemonList from './Components/PokemonList';
import Pokemon from './Components/Pokemon';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import PokemonContainer from './Containers/PokemonContainer';

import './App.css'


function App() {

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path = "/" element={<Home/>} />
          <Route path = "/pokemon" element={<PokemonContainer/>} />
          <Route path = "/pokemon/:id" element={<Pokemon/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App
