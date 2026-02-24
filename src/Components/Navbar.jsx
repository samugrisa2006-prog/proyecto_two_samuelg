
import {Link} from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    MiApp
                </Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Inicio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/caracteristicas">
                                Características
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/historia">
                                Historia
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/samuel">
                                Samuel
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;