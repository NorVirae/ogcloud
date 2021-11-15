import {Link} from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// image import

import Daco from '../assets/images/Daco1.png'
import Daco1 from '../assets/images/Daco2.png'





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

                    <img src={Daco} alt="servo" />

                </div>
            </section>

            {/* Platform */}

    <section class="platform  bg-ash">
        <div class="container grid">
            <div class="server-text">
                <h1 class="">Ogwugo Platform</h1>
                <p class="">The Platform where all your cloudy dream comes to life to haunt you it makes you
                    a better person at whatever you are doing currently.
                </p>
            </div>

            <img src={Daco1} alt="servo" />

        </div>
    </section>


        {/*Footer  */}
        <Footer/>
    </>
}

export default Features;