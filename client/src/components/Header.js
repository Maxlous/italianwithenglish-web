import { Link } from "react-router-dom";

const Header = () => {
    
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-danger">
                <div className="container-fluid">
                    <Link to="/">Simge Gelecek</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/exercises">Exercises</Link>
                            </li>
                            <li clasName="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
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