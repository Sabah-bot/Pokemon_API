import { useState, useEffect, useCallback } from "react";
import PokemonList from '../Components/PokemonList';

function PokemonContainer() {
    // State variables
    const [pokemon, setPokemon] = useState([]); // Stores the list of fetched Pokemon
    const [nextUrl, setNextUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=20'); // URL for the next batch of Pokemon
    const [isLoading, setIsLoading] = useState(false); // Loading state
    const [searchTerm, setSearchTerm] = useState(''); // Search input value

    // Function to fetch Pokemon data
    const fetchPokemon = useCallback(() => {
        // Prevent fetching if already loading or no next URL
        if (isLoading || !nextUrl) return;
        
        setIsLoading(true); // Set loading state to true
        fetch(nextUrl) // Fetch data from the API
            .then(response => response.json()) // Parse the JSON response
            .then(data => {
                setPokemon(prevPokemon => {
                    const newPokemon = [...prevPokemon]; // Create a copy of the current Pokemon list
                    data.results.forEach(p => {
                        // Check if the Pokemon is not already in the list
                        if (!newPokemon.some(existing => existing.name === p.name)) {
                            // Extract the Pokemon ID from the URL
                            const id = p.url.split('/').filter(Boolean).pop();
                            newPokemon.push({...p, id}); // Add new Pokemon with its ID
                        }
                    });
                    return newPokemon; // Return the updated Pokemon list
                });
                setNextUrl(data.next); // Update the URL for the next batch
                setIsLoading(false); // Set loading state back to false
            });
    }, [nextUrl, isLoading]); // Dependencies for useCallback

    // Fetch initial Pokemon data on component mount
    useEffect(() => {
        fetchPokemon(); // Call fetchPokemon when the component mounts
    }, [fetchPokemon]);

    // Set up infinite scrolling
    useEffect(() => {
        const handleScroll = () => {
            // Check if user has scrolled to the bottom of the page
            if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
            fetchPokemon(); // Fetch more Pokemon when scrolled to bottom
        };

        window.addEventListener('scroll', handleScroll); // Add scroll event listener
        return () => window.removeEventListener('scroll', handleScroll); // Cleanup: remove event listener on unmount
    }, [fetchPokemon]);

    // Filter Pokemon based on search term
    const filteredPokemon = pokemon.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) // Case-insensitive search
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