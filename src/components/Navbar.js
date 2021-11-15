import { Link } from "react-router-dom";

// this is the Navabar
const Navbar = () => {

        return (<div className="navbar">
                    <div className="container flex">
                    <h1><Link to="/">Ogwugo!</Link></h1>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/docs">Docs</Link></li>
                            <li><Link to="/features">Features</Link></li>

                        </ul>
                    </nav>
                    </div>
                </div>
        )}
export default Navbar;
