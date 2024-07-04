// Import the Link component from react-router-dom
// This allows us to create clickable links that navigate to different routes
import { Link } from "react-router-dom";

// Define a functional component called PokemonList
// It takes a prop 'pokemon' which is expected to be an array of pokemon objects
function PokemonList({pokemon}) {
    return (
        // The main container for the Pokemon list
        <div className="pokemon-layout">
            {/* Header for the list */}
            <h2>All My Pokemon:</h2>
            
            {/* Container for the individual Pokemon tiles */}
            <div className="pokemon-tile-container">
                {/* Use the map function to iterate over each Pokemon in the array */}
                {pokemon.map((p) => (
                    // For each Pokemon, create a div that serves as a tile
                    // The 'key' prop is required by React for efficient list rendering
                    // We use the Pokemon's id as the key, assuming each Pokemon has a unique id
                    <div key={p.id} className="pokemon-tile">
                        {/* Create a Link for each Pokemon */}
                        {/* The 'to' prop specifies the URL path for this link */}
                        {/* It uses a template literal to create a dynamic path based on the Pokemon's id */}
                        <Link to={`/pokemon/${p.id}`}>
                            {/* The text of the link is the Pokemon's name */}
                            {p.name}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PokemonList;