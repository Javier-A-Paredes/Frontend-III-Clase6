import React, { Fragment } from 'react'
import { style, styleImg } from './style'


export const ComponentTarjeta = ({data}) => {

  return (
    <Fragment>
        {data.map(pokemon =>(
        <div key={pokemon.pokemonName}
            style={{style, border:"1px solid red"}}>       
            <h1>{pokemon.pokemonName}</h1>
            <img style = {styleImg} src={pokemon.avatar} alt={pokemon.pokemonName} />
            <ul>
                {pokemon.skills.map(skill =>(
                    <li key = {skill}>{skill}</li>                
                ))}        
            </ul>
        </div>
        ))}        
    </Fragment>
  )
}
