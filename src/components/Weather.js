import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import '../css/Weather.css';

function Weather() {
  const { weatherData, loading, error } = useContext(WeatherContext);

  const getWeatherImage = (weatherCondition) => {
    switch (weatherCondition) {
      case 'Clear':
        console.log(weatherData.weather[0].main)
        return '../images/clear.png';
    }
  }

  return (
    <div className="weather-result">
      <code>{}</code>
      {loading && <span>Loading...</span>}

      {weatherData && weatherData.weather && weatherData.weather.length > 0 &&
      <img src={getWeatherImage(weatherData.weather[0].main)} alt="Weather Condition" />}

    </div>
  )

};

export default Weather;
