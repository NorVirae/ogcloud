import {Link} from 'react-router-dom';
import Navbar from '../components/Navbar';
import cliImage from '../assets/images/cli.png'
import cloudImage from '../assets/images/cloud.jpg'
import Python from '../assets/icons/python.svg'
import Nodes from '../assets/icons/node.svg'
import Scala from '../assets/icons/scala.svg'
import Clojure from '../assets/icons/clojure.svg'
import Ruby from '../assets/icons/ruby.svg'
import PHP from '../assets/icons/php.svg'
import CSharp from '../assets/icons/csharp.svg'

const Home = (props) => {
    return (<>
    {/* the Navbar */}
        <Navbar />
        {/* the showcase */}
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

{/* stats is here */}
    <section class="stats">
        <div class="container">
        <p class="stats-heading">Welcome to the most appropriate tool for developing the skillset of able and cogent programmers!</p>
            <div class=" grid grid-3">
                <div>
                    <i class="fas fa-server"></i>
                    <h1>10,349,405</h1>
                    <p>Deployments</p>
                </div>

                <div>
                    <i class="fas fa-upload"></i>
                    <h1>987TB</h1>
                    <p>published</p>
                </div>

                <div>
                    <i class="fas fa-project-diagram"></i>
                    <h1>2,433,265</h1>
                    <p>Projects</p>
                </div>
            </div>
        </div>
    </section>

{/* the cli part */}

<section class="cli">
        <div class="container grid">
            <div class="card padding-0"> <img src={cliImage} alt="cli" /></div>
            <div class="card">Easy to use cross platform cli</div>
            <div class="card">Deploy in seconds</div>

        </div>
    </section>

{/* Cloud starts here */}

<section class="cloud">
        <div class="container grid">
            <div class="cloud-talk text-center">
                <h3 class="lg text-white">Extreme Cloud Hosting</h3>
                <p class="lead text-white">Cloud hosting like you have never seen, Fafst, Efficient and Scalable.</p>
                <button class="btn btn-outline">Read more</button>
            </div>

            <img src={cloudImage} alt="cloud-image" />
        </div>
    </section>    
      {/*Languages section starts here  */}

      <section class="languages">
        <h3 class="cloud-lg">Supported Languages</h3>
                <div class="container flex">
                    <div class="card">
                        <h3>Python</h3>
                        <img src={Python} alt="python logo" />
                    </div>

                    <div class="card">
                        <h3>Node&nbsp;js</h3>
                        <img src={Nodes} alt="node logo" />
                    </div>

                    <div class="card">
                        <h3>Ruby</h3>
                        <img src={Ruby} alt="ruby logo" />
                    </div>

                    <div class="card">
                        <h3>clojure</h3>
                        <img src={Clojure} alt="clojure logo" />
                    </div>

                    <div class="card">
                        <h3>PHP</h3>
                        <img src={PHP} alt="php logo" />
                    </div>

                    <div class="card">
                        <h3>Scala</h3>
                        <img src={Scala} alt="scala logo" />
                    </div>

                    <div class="card">
                        <h3>C#</h3>
                        <img src={CSharp} alt="csharp logo" />
                    </div>
                </div>
    </section>
{/* The footer starts here */}
    <footer class="footer">
        <div class="container grid grid-3">
            <div>
                <h1>Ogwugo</h1>
                &copy; Copyright 2021
            </div>

            <div>
               <ul>
                   <li><a href="#">Home</a></li>
                   <li><a href="#">Documentation</a></li>
                   <li><a href="#">Features</a></li>


                </ul>

            </div>

            <div>
                <span class="fab fa-github fa-2x"></span>
                <span class="fab fa-facebook fa-2x"></span>
                <span class="fab fa-instagram fa-2x"></span>
                <span class="fab fa-twitter fa-2x"></span>

            </div>

        </div>
    </footer>

    </>)
}

export default Home