import React, { useEffect, useState } from 'react';


const PokemonPage = () => {
    const [pokemonList, setPokemonList] = useState([])
    console.log(pokemonList);
    const getApi =async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`)
        const data= await response.json()
        return data.results
    }

    useEffect(()=> {
        getApi().then((data)=>setPokemonList(data))
    },[])
    return (
        <div>
            {
                pokemonList.map(pokemon=> <div>
                    {pokemon.name}
                </div>)
            }
        </div>
    );
};

export default PokemonPage;