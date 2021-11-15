import {Link} from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";



const Features = (props) => {

    return <>
        {/* Navbar */}
        <Navbar/>

        {/* Server */}

            <section class="server bg-secondary">
                <div class="container grid">
                    <div class="server-text">
                        <h1 class="text-white lg">Features</h1>
                        <p class="text-white lead">Check out the features of Ogwugo Cloud that separates us from the rest.</p>
                    </div>

                    <img src="./Daco_415558.png" alt="servo" />

                </div>
            </section>


        {/*Footer  */}
        <Footer/>
    </>
}

export default Features;