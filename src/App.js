import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Features from './pages/Features';
import Docs from './pages/Docs';
import "./animation.css"

function App() {
  return (
    
    <>
      <Routes>
      <Route exact path={"/"} element={<Home />} />
      <Route exact path={"/features"} element={<Features />} />
      <Route exact path={"/docs"} element={<Docs />} />

      </Routes>
    </>
  
  );
}

export default App;
