import {Link} from 'react-router-dom';


const Footer = ()=> {
    return <>
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

    </>
}

export default Footer