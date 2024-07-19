import React, { useEffect, useState } from 'react';
import PokemonCard from '../components/pokemonCard/PokemonCard';
import classes from './Pokemon.module.css';
import Pagination from '../components/pagination/Pagination';

const PokemonPage = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const pokemonsPerPage = 12;

    useEffect(() => {
        const fetchPokemon = async () => {
            const offset = (currentPage - 1) * pokemonsPerPage;
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${pokemonsPerPage}&offset=${offset}`);
            const data = await response.json();
            setPokemonList(data.results);
            setTotalPages(Math.ceil(data.count / pokemonsPerPage));
        };
        fetchPokemon();
    }, [currentPage]);

    const goToPrevPage = () => {
        if (currentPage > 1) setCurrentPage(prev => prev - 1);
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
    };

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <h1>Pokemon</h1>
            </div>
            <div className={classes.pokemon_container}>
                {pokemonList.map(pokemon => (
                    <PokemonCard key={pokemon.name} pokemon={pokemon}/>
                ))}
            </div>
            <Pagination
                prev={goToPrevPage}
                next={goToNextPage}
                page={currentPage}
            />
        </div>
    );
};

export default PokemonPage;