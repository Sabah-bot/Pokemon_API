import { Link } from "react-router-dom";

function PokemonList({pokemon}) {
    return (
        <div className="pokemon-layout">
            <h2>All My Pokemon:</h2>
            <div className="pokemon-card-container">
                {pokemon.map((p) => (
                    <div key={p.id} className="pokemon-card">
                        <h3>{p.name}</h3>
                        <img 
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`} 
                            alt={p.name} 
                        />
                        <Link to={`/pokemon/${p.id}`}>
                            <button>Show Details</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PokemonList;