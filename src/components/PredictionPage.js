import React, { useState } from 'react';
import './PredictionPage.css';

function PredictionPage() {
  // State variables
  const [days, setDays] = useState(0);
  const [resultNotes, setResultNotes] = useState('This is the description for the result');
  const [loading, setLoading] = useState(true);
  const [circleColor, setCircleColor] = useState('#3498db');

  // Function to calculate circle color based on the number of days
  const calculateCircleColor = (days) => {
    if (days < 10) {
      return '#f7020b'; // red
    } else if (days < 20) {
      return '#f76002'; // Orange
    } else {
      return '#0cf049'; // green
    }
  };

  // Function to set result notes based on the number of days
  const calculateResultNotes = (days) => {
    if (days < 10) {
      return 'A warning, signifying that the product is considered bad for consumption due to its low nutritional value.';
    } else if (days < 20) {
      return 'The product is less nutritious and falls into the moderate category, suggesting a balanced nutritional profile.';
    } else {
      return 'The product is nutritious and healthy, making it a wholesome choice.';
    }
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    // Gather form data
    const formData = new FormData(e.target);
    const jsonData = {};

    formData.forEach((value, key) => {
      jsonData[key] = value;
    });
    console.log('Request Payload:', JSON.stringify({
      Product: jsonData.Product,
      Temperature: parseFloat(jsonData.Temperature),
      Humidity: parseFloat(jsonData.Humidity),
    }));
  
    // Send POST request to FastAPI endpoint
    try {
      const response = await fetch('http://localhost:8000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Product: jsonData.Product,
          Temperature: parseFloat(jsonData.Temperature),
          Humidity: parseFloat(jsonData.Humidity),
        }),
      });
  

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const predictionData = await response.json();
    console.log(predictionData);
    // Set days and circle color
    setDays(predictionData.days);
    setCircleColor(calculateCircleColor(predictionData.days));

    // Set result notes based on the number of days
    setResultNotes(calculateResultNotes(predictionData.days));

    setLoading(false);
  } catch (error) {
    console.error('Error:', error);
    setLoading(false);
  }
};



  return (
    <div>

      <div className='Prediction'>
        {/* Input Page */}
        <div className='InputPage'>
          <h1>Predict your vegetable quality</h1>
          <div className='InputBox'>
            <form onSubmit={handleSubmit}>
              {/* Product Selection */}
              <div className="fields">
                <label htmlFor='Product'>
                  Product
                  <select name='Product' id='Product'>
                  <option value="Tomatoimg">Tomato</option>
                      <option value="Potatoimg">Potato</option>
                      <option value="Carrotimg">Carrot</option>
                      <option value="Onionimg">Onion</option>
                      <option value="Lettuceimg">Lettuce</option>
                      <option value="Cucumberimg">Cucumber</option>
                      <option value="BellPepperimg">Bell Pepper</option>
                      <option value="Broccoliimg">Broccoli</option>
                      <option value="Spinachimg">Spinach</option>
                      <option value="Mushroomimg">Mushroom</option>
                      <option value="Zucchiniimg">Zucchini</option>
                      <option value="Eggplantimg">Eggplant</option>
                      <option value="Cabbageimg">Cabbage</option>
                      <option value="Cauliflowerimg">Cauliflower</option>
                      <option value="Radishimg">Radish</option>
                      <option value="Artichokeimg">Artichoke</option>
                      <option value="Peasimg">Peas</option>
                      <option value="Asparagusimg">Asparagus</option>
                      <option value="Beetrootimg">Beetroot</option>
                      <option value="GreenBeansimg">Green Beans</option>
                  </select>
                </label>
              </div>
              {/* Temperature Input */}
              <div className="fields">
                <label htmlFor='Temperature'>
                  Temperature
                  <input name='Temperature' id='Temperature' type='number' min='0' max='100' />
                </label>
              </div>
              {/* Humidity Input */}
              <div className="fields">
                <label htmlFor='Humidity' className='Humidity'>
                  Humidity 
                  <input id='Humidity' name='Humidity'  />
                </label>
              </div>
              {/* File Upload */}
              <div className="fields">
                <label>
                  Upload File
                  <input type="file" id="fileInput" name="file" required />
                </label>
              </div>
              {/* Submit Button */}
              <div className="fields">
                <label>
                  <input type='submit'id='submit' />
                </label>
              </div>
            </form>
          </div>
        </div>
        {/* Prediction Result Page */}
        <div className='PredictionPage'>
          {loading ? (
            <div className='BeforePrediction'>
              <h1>Please wait while we generate the prediction <div className='Loading'> 
                <span>..</span>
                <span>..</span>
                <span>.</span>
                <span>.</span>
                <span>.</span>
                <span>.</span>
                </div>
                </h1>
            </div>
          ) : (
            <div className='AfterPrediction'>
              <h1>RESULTS</h1>
              {/* Display Days with Color Circle */}
              <div className='colorcircle' style={{ backgroundColor: circleColor }}>
                <h1>{days} Days</h1>
              </div>
              {/* Result Notes */}
              <div className='ResultNotes'>
                <h1>NOTE:<h5>{resultNotes}</h5></h1>
                
              </div>
              {/* Refresh Button */}
              <div className='CloseBtn'>
                <button type="button" class="button" onClick={() => window.location.reload()}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-arrow-repeat"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
                          ></path>
                        </svg>
                        Refresh
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PredictionPage;
