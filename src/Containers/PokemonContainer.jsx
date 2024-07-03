import { useState, UseEffect } from "react";

function PokemonContainer(){
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(response => response.json())
        .then(data => setPokemon(data.results));
    }, []);

    return <PokemonList pokemon={pokemon} />
}

export default PokemonContainer