import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import PokeCard from '../../components/PokeCard'
import PokemonContext from '../../utils/PokemonsContext'
import './Home.css'

const Home = () => {
    const [pokemons, setPokemons] = useState([])
    const globalPokemonState = useContext(PokemonContext)

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=200')
        .then(response => {
            setPokemons(response.data.results)    
            globalPokemonState.setState(response.data.results)
        })
    }, []) 



    return (
        <div className="container align-items-center justify-content-center">
            {pokemons.map(pokemon => <PokeCard key={pokemon.name} pokemon={pokemon}/>) }
        </div>
    )
}

export default Home