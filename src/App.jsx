import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'


function App() {

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path = "/" element={<Home/>} />
          <Route path = "/pokemon" element={<PokemonList/>} />
          <Route path = "/pokemon/:id" element={<Pokemon/>} />
        </Routes>
        <Footer/>
      </Router>

    </>
  );
}

export default App
