import {Link} from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Daco1 from '../assets/images/Daco2.png'



const Docs = (props) => {

    return <>

        {/* Header */}
        <Navbar />

         {/* Server */}

         <section class="docsy bg-secondary">
                <div class="container grid">
                    <div class="docsy-text">
                        <h1 class="text-white lg">Docs</h1>
                        <p class="text-white lead">Check out our awesome exciting Docs</p>
                    </div>

                

                    <img src={Daco1} alt="servo" />

                </div>
            </section>

        <section className="docs-list">
            <div className={"container grid"}>
                <div className="card document-lists ">
                    <h1>Essentials</h1>
                    <ul>
                        <li className={"text-info"}>Introduction</li>
                        <li>About Ogwugo</li>
                        <li>Installation</li>
                        

                    </ul>

                    <h1>Deployment</h1>
                    <ul>
                        <li>Setup the container</li>
                        <li>Using the CLI</li>
                        <li>Managing Resources</li>
                        <li>Upgrade</li>
                        <li>Downgrade</li>

                    </ul>
                </div>

                <div className="doc-details card">
                    <h1>Introduction</h1>
                    <p>Ogwugo CLoud platform is a platform that allows you to upload your
                        documents to the cloud manage it with friends and sell your photos
                        as NFT's it all makes sense that you could be in a plac e where things
                        could go so grate and so wrong at thesame time it becomes quite annoying.
                    </p>

                    <div className="alert alert-success "><i className="fas fa-info"></i>
                    Hello your name has been registered under those to win 1 million naira</div>

                    <h2> The Concepts</h2>

                    <p>deploy easier and faster today make everythin crazily easier and your world a motivating one
                        be the king in the shadows
                    </p>

                    <button className="btn">Install CLi</button>

                    <h2>Requirements</h2>
                    <p>Windows 10, Mac, Linux</p>
                    <p>React V6 and higher</p>

                    <h2>Install</h2>

                    <p>Mac (HomeBrew)</p>
                    <div className="alert alert-dark">$  Sudo -y install Ogwugo</div>

                    <p>NPM</p>
                    <div className="alert alert-dark">$  npm install Ogwugo</div>

                    <p>Yarn</p>
                    <div className="alert alert-dark">$  yarn install Ogwugo</div>



                </div>
            </div>
        </section>


        {/* Footer */}
        <Footer/>
    </>
}

export default Docs;