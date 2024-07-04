import { Link } from "react-router-dom";

function PokemonList({pokemon}) {
    return (
        <div className="pokemon-layout">
            <h2>All My Pokemon:</h2>
            <div className="pokemon-tile-container">
                {pokemon.map((p) => (
                    <div key={p.id} className="pokemon-tile">
                        <Link to={`/pokemon/${p.id}`}>{p.name}</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PokemonList;