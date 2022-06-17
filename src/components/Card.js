import React from 'react'
import "../styles/Card.css"

const Card = ({pokemonList, loadingPoke}) => {
  // console.log(pokemonList)
  return (
    <>
      {
        loadingPoke ? 
          <h1>Loading...</h1>
          
          :

          pokemonList.map((poke) => (

            <div className='card' >
              <h1 className='poke-name'>{poke.data.id}. {poke.data.name}</h1>
              <hr className='ruler' />
              <img src={poke.data.sprites.front_default} />
              <div style={{display:"flex"}} >
                {
                poke.data.abilities.map((ability) => (
                  <p className='ability'>{ability.ability.name}</p>
                ))
                }
              </div>

              <div className='stats'> 
                {
                  poke.data.stats.map((stat) => (
                    <p className='stat'>{stat.stat.name} : {stat.base_stat}</p>
                  ))
                }
              </div>
              
            </div>

          ))
      }
    </>
  )
}

export default Card