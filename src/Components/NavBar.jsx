import { Link } from "react-router-dom";
import '../App.css'

const NavBar = () => {
    return (
        <div>
            <nav className="nav-bar">
                <Link to="/" className="nav-link"><span>Home</span></Link>
                <Link to="/pokemon" className="nav-link"><span>Pokemon List</span></Link>
            </nav>
        </div>
    )
}

export default NavBar;