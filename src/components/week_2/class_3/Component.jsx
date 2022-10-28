import React, { Fragment } from 'react'
import { ComponentTarjeta } from './ComponentTarjeta'
import { Pokemon } from '../class_1/pokemons'

export default function Component() {
    const pokemonTypesArray = Object.keys(Pokemon)
    
  return (
    
    <div style={{display: "flex", flexWrap: "wrap", gap: 50}}>       
    {pokemonTypesArray.map(pokemon => (        

    <ComponentTarjeta             
        key = {pokemon}
        data = {Pokemon[pokemon]}
        />
       
    ))}           
    </div>
    
  )
}
