// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {

  const [searchQuery, setSearchQuery] = useState("");

  const [pokemonList, setPokemonList] = useState([]);

  const handleInputChange = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  }

const fetchedData = () => {
  const req = axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => setPokemonList(response.data.results))
  console.log(pokemonList)
}

useEffect(() => {
  fetchedData()
}, [])




  return (
    <div className="App">
      <h1>pokemon</h1>

      {/* This will contain the input for filtering the pokemon cards */}
      <nav>
        <input type='text' id='search' placeholder='Search...' onChange={handleInputChange}/>
      </nav>
        {
          pokemonList.map((item) => 
          <div key={item.name} className='card'>
            <h1 className='name-header'>{item.name}</h1>
          </div>
          
          )
        }
    </div>
  );
}

export default App;
