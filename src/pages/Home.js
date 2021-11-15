import {Link} from 'react-router-dom';
import Navbar from '../components/Navbar';

const Home = (props) => {
    return (<>
        <Navbar />
        <section class="show-case">
        <div class="container grid">
            <div class="show-case-para">
                <h1>THE BEST TOOL FOR DEVOPS!</h1>
                <p>this is really the best tool for developers, it's providencial that developers
                    who have less number of years of experience and less project on their portfolio
                </p>
                <button class="btn btn-outline">
                    VISIT!
                </button>
            </div>

            <div class="showcase-form card">
                <form class="form-control">
                    <p><h1>Hey Sign Up!</h1></p>
                    <input placeholder="Name" name="name" type="text"/>
                    <input placeholder="Email" name="email" type="email"/>
                    <input placeholder="Company" name="company" type="text"/>
                    <input class="btn btn-secondary" type="submit" />
                </form>
            </div>
        </div>
    </section>

        


    </>)
}

export default Home