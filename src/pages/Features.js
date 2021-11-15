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

    { /*Features main*/}

    <section class="features-main">
        <div class="container grid grid-3">
            <div class="card flex">
                <i class="fas fa-server fa-3x"></i>
                <p class="">The Platform where all your cloudy dream comes to life to haunt you it makes you
                    a better person at whatever you are doing currently.
                </p>
            </div>

            <div class="card flex">
                <i class="fas fa-laptop fa-3x"></i>
                <p class="">You can reach the platform from any device anywhere around the world
                </p>
            </div>

            <div class="card flex">
                <i class="fas fa-upload fa-3x"></i>
                <p class="">Upload all your huge files,, and mine your cryptos with our super power quantum
                    computers
                </p>
            </div>

            <div class="card flex">
                <i class="fas fa-project-diagram fa-3x"></i>
                <p class="">Ride with all your projects with ease and complete even the most trying tasks
                </p>
            </div>

            <div class="card flex">
                <i class="fas fa-user fa-3x"></i>
                <p class="">Bring all your users in one place and manage them with just a click
                </p>
            </div>

            <div class="card flex">
                <i class="fas fa-hospital fa-3x"></i>
                <p class="">Get your patients data on the cloud as fast as possible and achieve 
                    maximum rennanise
                </p>
            </div>

          

        </div>
    </section>



        {/*Footer  */}
        <Footer/>
    </>
}

export default Features;