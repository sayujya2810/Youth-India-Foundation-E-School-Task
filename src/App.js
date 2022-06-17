// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonGrid from './components/PokemonGrid';
import SingleCard from './components/SingleCard';
import Footer from './components/Footer';


function App() {

  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true)
  const [pokemonList, setPokemonList] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextUrl, setNextUrl] = useState()
  const [prevUrl, setPrevUrl] = useState()
  const [filtered, setFiltered] = useState(false)
  const [pokemon, setPokemon] = useState({})
  const [fetchedSingle, setFetchedSingle] = useState(false)
  
  
  const filterResponse = () => {
    // axios.get(`${url}/${searchQuery}`)
    // .then((response) => console.log(response.data))

    axios.get(`${url}/${searchQuery}`)
    .then((respose) => {
      setPokemon(respose.data)
      setFetchedSingle(true)
      // console.log(respose.data)
      console.log(pokemon)
    })
  }

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
    setFetchedSingle(false)
    setLoading(true)
    setPokemonList([])
    const res = await axios.get(url)
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

    if(e.target.value === ""){
      setFiltered(false)
      setFetchedSingle(false)
    }
    else{
      setFetchedSingle(false)
      setFiltered(true)

    }
    console.log(e.target.value);
  }


return (
  <div className="App" onmousedown="return false" onselectstart="return false" >
    <h1>Pokémonpedia</h1>
    {/* This will contain the input for filtering the pokemon cards */}
    <nav>
      <button style={{marginRight:"10px"}} className='btn' onClick={filterResponse} >Go</button>
      <input type='text' id='search' placeholder='Search...' onChange={handleInputChange}/>

      {
        prevUrl && <button className='btn' onClick={() => {
        setPokemonList([])
        setUrl(prevUrl)
      }} >&lt; Previous</button>
      }

      {
        nextUrl && <button className='btn' onClick={() => {
        setPokemonList([])
        setUrl(nextUrl)
      }} >Next &gt;</button>
      }
    </nav>

    {
      filtered
      ?
      fetchedSingle ? <SingleCard pokemon={pokemon} /> : <p>Loading...</p>
      :
      <PokemonGrid loading={loading} pokemon={pokemonList} />

    }

    <Footer />


  </div>
);

}

export default App;
