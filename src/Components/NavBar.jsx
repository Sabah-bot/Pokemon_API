import { Link } from "react-router-dom";

const NavBar = () => {

    return (

        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/pokemon">Pokemon List</Link>
            </nav>
        </div>

    )
}

export default NavBar;