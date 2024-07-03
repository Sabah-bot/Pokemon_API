import { Link } from "react-router-dom";

function PokemonList({pokemon}) {





    return (
        <div className="pokemon-layout">
            <h2>All My Pokemon:</h2>
            <div className="pokemon-tile-container">
                {pokemon.map((p, index) => (
                    <div key={index} className="pokemon-tile">
                        <Link to={`/pokemon/${index + 1}`}>{p.name}</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}