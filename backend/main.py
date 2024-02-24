from fastapi import FastAPI, HTTPException
from typing import Optional
from pydantic import BaseModel
import random
from fastapi.middleware.cors import CORSMiddleware
import joblib
import pandas as pd

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins (change as needed for production)
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods
    allow_headers=["*"],  # Allow all headers
)

model = joblib.load('model/model.pkl')
scaler = joblib.load('model/scaler.pkl')



class InputData(BaseModel):
    Product: str
    Temperature: float
    Humidity: float

@app.post("/predict")
async def predict(data: InputData):
    vegetable_order = {
        'Tomatoimg': 1,
        'Potatoimg': 2,
        'Carrotimg': 3,
        'Onionimg': 4,
        'Lettuceimg': 5,
        'Cucumberimg': 6,
        'BellPepperimg': 7,
        'Broccoliimg': 8,
        'Spinachimg': 9,
        'Mushroomimg': 10,
        'Zucchiniimg': 11,
        'Eggplantimg': 12,
        'Cabbageimg': 13,
        'Cauliflowerimg': 14,
        'Radishimg': 15,
        'Artichokeimg': 16,
        'Peasimg': 17,
        'Asparagusimg': 18,
        'Beetimg': 19,
        'GreenBeansimg': 20
    }
    

    new_data = pd.DataFrame({
    'Temperature': [data.Temperature],
    'Humidity': [data.Humidity],
    'Vegetable': vegetable_order[data.Product]
    })

    # Extract the columns to be standardized
    columns_to_standardize = ['Temperature', 'Humidity']

    # Extract the selected columns from the new data
    data_to_standardize = new_data[columns_to_standardize]

    # Transform the selected columns using the scaler
    data_standardized = scaler.transform(data_to_standardize)

    # Create a new DataFrame with the standardized columns
    data_standardized_df = pd.DataFrame(data_standardized, columns=columns_to_standardize)

    # Replace the original columns with the standardized values in the new data
    new_data[columns_to_standardize] = data_standardized_df
    # Make predictions using the model
    predictions = model.predict(new_data)

    return {"days": predictions[0, 1],"weight":predictions[0, 0]}