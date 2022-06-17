import React from 'react'
import "../styles/Card.css"

const SingleCard = ({pokemon}) => {
  return (
    <div className='card' style={{marginTop:"3rem"}} >
      <h1 className='poke-name'>{pokemon.id}. {pokemon.name}</h1>
      <hr className='ruler' />
      <img alt={pokemon.name} src={pokemon.sprites.front_default} />
      <div style={{display:"flex"}} >
        {
        pokemon.abilities.map((ability) => (
          <p className='ability'>{ability.ability.name}</p>
        ))
        }
      </div>
      <div className='stats'> 
        {
          pokemon.stats.map((stat) => (
            <p className='stat'>{stat.stat.name} : {stat.base_stat}</p>
          ))
        }
      </div>
      
    </div>
  )
}

export default SingleCard