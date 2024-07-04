import { useState, useEffect, useCallback } from "react";
import PokemonList from '../Components/PokemonList';

function PokemonContainer() {
    const [pokemon, setPokemon] = useState([]);
    const [nextUrl, setNextUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchPokemon = useCallback(() => {
        if (isLoading || !nextUrl) return;
        
        setIsLoading(true);
        fetch(nextUrl)
            .then(response => response.json())
            .then(data => {
                setPokemon(prevPokemon => {
                    const newPokemon = [...prevPokemon];
                    data.results.forEach(p => {
                        if (!newPokemon.some(existing => existing.name === p.name)) {
                            // Extract the Pokemon ID from the URL
                            const id = p.url.split('/').filter(Boolean).pop();
                            newPokemon.push({...p, id});
                        }
                    });
                    return newPokemon;
                });
                setNextUrl(data.next);
                setIsLoading(false);
            });
    }, [nextUrl, isLoading]);

    useEffect(() => {
        fetchPokemon();
    }, [fetchPokemon]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
            fetchPokemon();
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [fetchPokemon]);

    const filteredPokemon = pokemon.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Search Pokémon"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <PokemonList pokemon={filteredPokemon} />
        </div>
    );
}


export default PokemonContainer;