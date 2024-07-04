// Import necessary hooks from react-router-dom and react
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// Define a component to display detailed Pokemon information
function PokemonDetails({ pokemon, onClose }) {
    return (
      <div className="pokemon-details-modal">
        <div className="pokemon-details-content">
          {/* Display the Pokemon's name */}
          <h2>{pokemon.name}</h2>
          
          {/* Show the Pokemon's image */}
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          
          {/* Display height in original units and meters */}
          <p>Height: {pokemon.height} ({(pokemon.height / 10).toFixed(1)} m)</p>
          
          {/* Display weight in original units and kilograms */}
          <p>Weight: {pokemon.weight} ({(pokemon.weight / 10).toFixed(1)} kg)</p>
          
          {/* Add a note about units in the Pokemon world */}
          <p><i>Note: In the Pokémon world, heights are typically measured in decimeters (dm) and weights in hectograms (hg).</i></p>
          
          {/* List the Pokemon's abilities */}
          <h3>Abilities:</h3>
          <ul>
            {pokemon.abilities.map((ability, index) => (
              <li key={index}>{ability.ability.name}</li>
            ))}
          </ul>
          
          {/* List the Pokemon's types */}
          <h3>Types:</h3>
          <ul>
            {pokemon.types.map((type, index) => (
              <li key={index}>{type.type.name}</li>
            ))}
          </ul>
          
          {/* Button to close the details modal */}
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  }

// Main Pokemon component
function Pokemon() {
  // Extract the 'id' parameter from the URL
  const { id } = useParams();
  
  // State to store the fetched Pokemon data
  const [pokemon, setPokemon] = useState(null);
  
  // State to control visibility of the details modal
  const [showDetails, setShowDetails] = useState(false);

  // Effect hook to fetch Pokemon data when the component mounts or 'id' changes
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => response.json())
      .then(data => setPokemon(data));
  }, [id]);

  // Show loading state if Pokemon data hasn't been fetched yet
  if (!pokemon) return <div>Loading...</div>;

  return (
    <div>
      {/* Display Pokemon name and image */}
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      
      {/* Button to show detailed information */}
      <button onClick={() => setShowDetails(true)}>Show Details</button>
      
      {/* Render PokemonDetails component if showDetails is true */}
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