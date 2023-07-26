import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import '../css/Weather.css';

function Weather() {
  const { weatherData, loading, error } = useContext(WeatherContext);

  const getWeatherImage = (weatherCondition) => {
    switch (weatherCondition) {
      case 'Clear':
        return '/img/clear.png';
      case 'Rain':
        return '/img/rain.png';
      case 'Snow':
        return '/img/snow.png';
      case 'Clouds':
        return '/img/cloud.png';
      case 'Haze':
        return '/img/mist.png';
      }
  }

  return (
    <div className="weather-result">
      {loading && <span>Loading...</span>}

      {weatherData && (
        <>
          <div className='weather-result'>
            <img src={getWeatherImage(weatherData.weather[0].main)} alt="Weather Condition"/>
            <span className='cityName'>{weatherData.name}</span>
            <span className='temp'>{weatherData.main.temp}°</span>
          </div>
          <div className='weather-result-details'>
            <div className="humidity">
                <i className="fa-solid fa-water fa-2xl"></i>
                <div className="text">
                  <span>{weatherData.main.humidity}</span>
                  <p>Nem Oranı</p>
                </div>
            </div>
            <div className="wind">
                <i className="fa-solid fa-wind fa-2xl"></i>
                <div className="text">
                  <span>{weatherData.wind.speed}</span>
                  <p>Rüzgar hızı</p>
                </div>
            </div>
          </div>
        </>
      )}

      { weatherData && (
        console.log(JSON.stringify(weatherData))
      )}

    </div>
  )

};

export default Weather;
