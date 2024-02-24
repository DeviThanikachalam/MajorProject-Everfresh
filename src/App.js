import './App.css';
import Product from './components/Product';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import Support from './components/Support'
import Aboutimg from './Assets/Aboutbg2.png'
import Tomatoimg from './Assets/Tomato.jpg';
import Potatoimg from './Assets/potato.jpg';
import Carrotimg from './Assets/carrot.jpg';
import Onionimg from './Assets/onion.jpg';
import Lettuceimg from './Assets/lettuce.jpg';
import Cucumberimg from './Assets/cucumber.jpg';
import BellPepperimg from './Assets/bell pepper.jpg';
import Broccoliimg from './Assets/broccoli.jpg';
import Spinachimg from './Assets/spinach.jpg';
import Mushroomimg from './Assets/mushrooms.jpg';
import Zucchiniimg from './Assets/zucchini.jpg';
import Eggplantimg from './Assets/eggplant.jpg';
import Cabbageimg from './Assets/cabbage.jpg';
import Cauliflowerimg from './Assets/cauliflower.jpg';
import Radishimg from './Assets/raddish.jpg';
import Artichokeimg from './Assets/artichoke.jpg';
import Peasimg from './Assets/peas.jpg';
import Asparagusimg from './Assets/asparagus.jpg';
import Beetrootimg from './Assets/beetroot.jpg';
import GreenBeansimg from './Assets/green beans.jpg';
import Navbar from './components/Navbar';
import { useState } from 'react';
import PredictionPage from './components/PredictionPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  const AboutImages={
    Tomatoimg,
    Potatoimg,
    Carrotimg,
    Onionimg,
    Lettuceimg,
    Cucumberimg,
    BellPepperimg,
    Broccoliimg,
    Spinachimg,
    Mushroomimg,
    Zucchiniimg,
    Eggplantimg,
    Cabbageimg,
    Cauliflowerimg,
    Radishimg,
    Artichokeimg,
    Peasimg,
    Asparagusimg,
    Beetrootimg,
    GreenBeansimg,
  }

  const[activeComponent,setActiveComponent]=useState('Home');

function handleButtonClick(component){
  setActiveComponent(component);
}

return (
  <div className="App">
  <Navbar onButtonClick={handleButtonClick} />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<AboutUs img={Aboutimg} Images={AboutImages} />} />
    <Route path="/product" element={<Product Images={AboutImages} />} />
    <Route path="/support" element={<Support />} />
    <Route path="/prediction" element={<PredictionPage />} />
  </Routes>
</div>
);
}

  



export default App;
