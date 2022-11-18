import React from 'react'
import Card from './Card'

export default function DisplayPokemon({pokemon}) {
  return (
    <div>
        {
            pokemon.map((value, index) => 
           <Card key={index} {...value}/>
            )
        }
    </div>
  )
}
