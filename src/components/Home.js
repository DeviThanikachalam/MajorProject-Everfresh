import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


function Home() {
  return (
    <div>
      <div className='Home'>
        <div className='HomeContent'>
          <h1>EVERFRESH PLATFORM</h1>
          <p>An advanced software platform designed to maintain and ensure freshness. It provides a solution that refers to fruits and vegetables, consistently fresh over time. This platform could incorporate various features such as advanced storage techniques, real-time monitoring, and perhaps even predictive technologies to extend the freshness and quality of perishable goods.</p>
        </div>
        <div className='HomeButtons'>
          {/* Use Link to navigate to the PredictionPage */}
          <Link to="/prediction">
            <button>Predict Here</button>
          </Link>
          <Link to='/about'>
             <button>Learn More</button>
          </Link>
          
        </div>
      </div>
    </div>
  );
}

export default Home;
