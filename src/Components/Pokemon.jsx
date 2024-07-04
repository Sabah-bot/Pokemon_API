import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function PokemonDetails({ pokemon, onClose }) {
    return (
      <div className="pokemon-details-modal">
        <div className="pokemon-details-content">
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p>Height: {pokemon.height} ({(pokemon.height / 10).toFixed(1)} m)</p>
          <p>Weight: {pokemon.weight} ({(pokemon.weight / 10).toFixed(1)} kg)</p>
          <p><i>Note: In the Pokémon world, heights are typically measured in decimeters (dm) and weights in hectograms (hg).</i></p>
          <h3>Abilities:</h3>
          <ul>
            {pokemon.abilities.map((ability, index) => (
              <li key={index}>{ability.ability.name}</li>
            ))}
          </ul>
          <h3>Types:</h3>
          <ul>
            {pokemon.types.map((type, index) => (
              <li key={index}>{type.type.name}</li>
            ))}
          </ul>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  }

function Pokemon() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => response.json())
      .then(data => setPokemon(data));
  }, [id]);

  if (!pokemon) return <div>Loading...</div>;

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <button onClick={() => setShowDetails(true)}>Show Details</button>
      
      {showDetails && (
        <PokemonDetails 
          pokemon={pokemon} 
          onClose={() => setShowDetails(false)} 
        />
      )}
    </div>
  );
}

export default Pokemon;