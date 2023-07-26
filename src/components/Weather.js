import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import '../css/Weather.css';


function Weather() {
  const { weatherData, loading, error } = useContext(WeatherContext);

  console.log(weatherData);

  const getWeatherImage = (weatherCondition) => {
    switch (weatherCondition) {
      case 'Clear':
        return '../images/clear.png';
    }
  }

  return (
    <div className="weather-result">
      <img src={getWeatherImage("Clear")}></img>
      <h2></h2>
    </div>
  )

};

export default Weather;
