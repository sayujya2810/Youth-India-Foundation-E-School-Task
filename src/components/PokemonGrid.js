import React from 'react'
import Card from './Card'
import "../styles/PokemonGrid.css"

const PokemonGrid = ({pokemon, loading}) => {
  return (
    <div className='container'>
        <Card pokemonList={pokemon} loadingPoke={loading} />
    </div>
  )
}


export default PokemonGrid