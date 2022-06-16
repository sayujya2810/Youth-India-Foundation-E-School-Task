// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonGrid from './components/PokemonGrid';


function App() {

  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true)
  const [pokemonList, setPokemonList] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
  const [nextUrl, setNextUrl] = useState()
  const [prevUrl, setPrevUrl] = useState()
  

  const getPokemonArray = async (res) => {
    res.map(async(pokemon) => {
      const result = await axios.get(pokemon.url)
      // console.log(result.data)
      setPokemonList(currState => {
        currState = [...currState, result]
        return currState;
      })
    })
  }

  const fetchAllPokemon = async () => {
    setLoading(true)
    const res = await axios.get(url)
    // console.log(res.data.results)
    setNextUrl(res.data.next)
    setPrevUrl(res.data.previous)
    getPokemonArray(res.data.results)

    setLoading(false)
  } 


  useEffect(() => {
    fetchAllPokemon()
  }, [url])



  const handleInputChange = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
    // console.log(e.target.value);
  }






return (
  <div className="App">
    <h1>pokemon</h1>
    {/* This will contain the input for filtering the pokemon cards */}
    <nav>
      <input type='text' id='search' placeholder='Search...' onChange={handleInputChange}/>
    </nav>
  </div>
);

}

export default App;
