import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {

    return (
        <header className="mb-3">
            <nav>
                <Link className="navigation-item mx-5" to="/exercises">Exercises</Link>
                <Link className="navigation-item mx-5" to="/">Italian with English</Link>
                <Link className="navigation-item mx-5" to="/contact">Contact</Link>
            </nav>
        </header>
    )
}

export default Header


// {/* <nav>
// <Link to="/">
//     <h4>Home</h4>
// </Link>
// <Link to="/exercises">
//     <h4>Exercises</h4>
// </Link>
// <Link to="contact">
//     <h4>Contact</h4>
// </Link>
// </nav>  */}