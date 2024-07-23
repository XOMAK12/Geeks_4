import React, { useEffect, useState } from 'react';
import classes from "../../page/Pokemon.module.css";
import Button from "../button/Button";

const PokemonCard = ({ pokemon }) => {
    const [pokemonDetails, setPokemonDetails] = useState();

    useEffect(() => {
        const fetchPokemonDetails = async () => {
            const response = await fetch(pokemon.url);
            const data = await response.json();
            setPokemonDetails(data);
        };

        fetchPokemonDetails();
    }, []);

    if (!pokemonDetails) {
        return <p className={classes.pokemonCard}>Loading...</p>;
    }

    return (
        <div className={classes.pokemonCard}>
            <img src={pokemonDetails?.sprites?.other?.dream_world?.front_default} alt={pokemonDetails.name} />
            <p>{pokemonDetails?.name}</p>
            <Button name={'Подробнее'}/>
        </div>
    );
};

export default PokemonCard;