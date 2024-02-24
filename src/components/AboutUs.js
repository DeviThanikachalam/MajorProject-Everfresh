import React from 'react';
import './AboutUs.css';
import {Link} from 'react-router-dom';
function AboutUs(props) {
  return (
    <div>
      <div className='Aboutus'>
        <div className='Aboutbox'>
          <div className='AboutContent'>
            <h1>About Us</h1>
            <div>
              <p>
                The EverFresh platform is a revolutionary and innovative solution designed to redefine the way we approach food freshness and waste reduction. This cutting-edge platform integrates advanced technologies with data analytics and machine learning algorithms to create a seamless and intelligent system for monitoring and managing perishable goods. The Everfresh platform ensures that food products remain at optimal freshness throughout their lifecycle, from production to consumption.
              </p>
              <p>
                By continuously collecting and analyzing real-time data on factors like temperature, humidity, and storage conditions, the platform empowers businesses and consumers to make informed decisions to prevent spoilage and minimize waste. This not only enhances the quality of products but also contributes significantly to sustainability goals by reducing the environmental impact associated with food waste. This platform represents a transformative step towards a more efficient, sustainable, healthiness and mindful approach to handling perishable goods in our interconnected world.
              </p>
              <div className='AboutButtons'>
              <Link to='/Product'>
              <button>
                Next <span>&rarr;</span>
              </button>
              </Link>
              </div>
            </div>
          </div>
          <div className='AboutUSimg'>
            <img src={props.img} alt='about'></img>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
