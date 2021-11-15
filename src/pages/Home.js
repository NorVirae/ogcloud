import {Link} from 'react-router-dom';

const Home = (props) => {
    return (<>
        <div className="navbar">
            <div className="container flex">
            <h1><Link to="/">Ogwugo!</Link></h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Docs</Link></li>
                    <li><Link to="/">Features</Link></li>

                </ul>
            </nav>
            </div>
        </div>



    </>)
}

export default Home