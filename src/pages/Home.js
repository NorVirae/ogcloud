import {Link} from 'react-router-dom';
import Navbar from '../components/Navbar';
import cliImage from '../assets/images/cli.png'
import cloudImage from '../assets/images/cloud.jpg'

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


    </>)
}

export default Home