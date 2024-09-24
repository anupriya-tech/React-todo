import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import Weatherapp from 'Weatherapp.css';

function wApp() {
    const [location, setLocation] = useState(""); // Fixed camelCase
    const [weather, setWeather] = useState(null); 
    const [error, setError] = useState(null); 

    async function getWeather() {
        if (!location) return; // Check if location is not empty

        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=0498080e1a5197f270b0caf571365be5&units=metric`;

        try {
            const response = await axios.get(URL); // Use axios.get
            setWeather(response.data); // Update weather state with response data
            setError(null); // Clear previous errors
        } catch (error) {
            setError("Error fetching weather data"); // Error handling
            setWeather(null); // Clear weather data on error
        }
    }

    return (
        <div className="App">
            <div className="search-bar"> 
                <input
                    value={location}
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => setLocation(e.target.value)}
                />
            </div>
            <br />
            <div className='button-search'>
                <button onClick={getWeather}><b>Get Weather</b></button>
            </div>
            {weather && (
                <div className="des-wind">
                    <h3>Weather in {weather.name}</h3>
                    <p>Temperature: {weather.main.temp}°C</p>
                    <p>Weather: {weather.weather[0].description}</p>
                    <h2>
                        <img 
                            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
                            alt={weather.weather[0].description} 
                        />
                    </h2>
                </div>
            )}
            <div className='error-message'>{error && <p>{error}</p>}</div> 
        </div>
    );
}

export default wApp;
