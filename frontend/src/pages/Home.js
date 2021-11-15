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
import Footer from '../components/Footer';

const Home = (props) => {
    return (<>
    {/* the Navbar */}
        <Navbar />
        {/* the showcase */}
        <section class="show-case">
        <div class="container grid">
            <div class="show-case-para">
                <h1 className="fadeInFirst">THE BEST TOOL FOR DEVOPS!</h1>
                <p className="fadeInSecond">this is really the best tool for developers, it's providencial that developers
                    who have less number of years of experience and less project on their portfolio
                </p>
                <button class="btn btn-outline fadeInThird">
                    VISIT!
                </button>
            </div>

            <div class="showcase-form card">
                <form class="form-control">
                    <p><h1 className="fadeInFirst">Hey Sign Up!</h1></p>
                    <input className="fadeInSecond" placeholder="Name" name="name" type="text"/>
                    <input className="fadeInThird" placeholder="Email" name="email" type="email"/>
                    <input className="fadeInFourth" placeholder="Company" name="company" type="text"/>
                    <input  class="btn btn-secondary fadeInFifth" type="submit" />
                </form>
            </div>
        </div>
    </section>

{/* stats is here */}
    <section class="stats">
        <div class="container">
        <p class="stats-heading fadeInFirst">Welcome to the most appropriate tool for developing the skillset of able and cogent programmers!</p>
            <div class=" grid grid-3">
                <div className="fadeInFirst">
                    <i class="fas fa-server fadeInFirst"></i>
                    <h1 className="fadeInSecond">10,349,405</h1>
                    <p className="fadeInThird">Deployments</p>
                </div>

                <div className="fadeInSecond">
                    <i class="fas fa-upload fadeInFirst"></i>
                    <h1 className="fadeInSecond">987TB</h1>
                    <p className="fadeInSecond">published</p>
                </div>

                <div className="fadeInThird">
                    <i class="fas fa-project-diagram fadeInFirst"></i>
                    <h1 className="fadeInSecond">2,433,265</h1>
                    <p className="fadeInSecond">Projects</p>
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

        <Footer />
   
    </>)
}

export default Home