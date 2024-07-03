import { useState } from "react";

const PokemonForm = ({onSearch}) => {

    const [searchTerm, setSearchTerm] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm);

    }

    return(
        <form onSubmit={handleSubmit} >
            <input 
                type="text" 
                value={searchTerm}
                onChange={(event) => setSearchTerm (e.target.value)}
                placeholder = "Search Pokemon"
            />
            <button type="Submit">Search</button>
        </form>
    )
    

}

export default PokemonForm;