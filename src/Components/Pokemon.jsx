import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


function Pokemon() {
    const {id} = useParams();
    const [pokemon, setPokemon] = useState(null);


    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => response.json())
        .then(data => setPokemon(data));
    }, [id]);

    if (!pokemon) return <div>Loading...</div>

    return (
        <div>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
        </div>

    )

}

export default Pokemon;