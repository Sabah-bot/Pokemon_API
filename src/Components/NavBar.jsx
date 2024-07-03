import { Link } from "react-router-dom";
import '../App.css'

const NavBar = () => {
    return (
        <div>
            <nav className="nav-bar">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/pokemon" className="nav-link">Pokemon List</Link>
            </nav>
        </div>
    )
}

export default NavBar;