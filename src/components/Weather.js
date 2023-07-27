import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import '../css/Weather.css';

const weatherImages = {
  'Clear': '/img/clear.png',
  'Rain': '/img/rain.png',
  'Snow': '/img/snow.png',
  'Clouds': '/img/cloud.png',
  'Haze': '/img/mist.png',
};

function Weather() {
  const { weatherData, loading, error } = useContext(WeatherContext);

  return (
    <div className="weather-result">
      {loading && <span>Loading...</span>}

      {!loading && error && (
        <div className='not-found'>
          <img src='/img/not-found.png' alt="Weather Condition" />
          <span>{error}</span>
        </div>
      )}

      {!loading && !error && weatherData && (
        <>
          <div className='weather-result'>
            <img src={weatherImages[weatherData.weather[0].main] || weatherImages['Default']} alt="Weather Condition" />
            <span className='cityName'>{weatherData.name}</span>
            <span className='temp'>{weatherData.main.temp}°</span>
          </div>
          <div className='weather-result-details'>
            <div className="humidity">
              <i className="fa-solid fa-water fa-2xl"></i>
              <div className="text">
                <span>{weatherData.main.humidity} %</span>
                <p>Nem Oranı</p>
              </div>
            </div>
            <div className="wind">
              <i className="fa-solid fa-wind fa-2xl"></i>
              <div className="text">
                <span>{weatherData.wind.speed} km/s</span>
                <p>Rüzgar hızı</p>
              </div>
            </div>
          </div>
        </>
      )}

    </div>
  );
}

export default Weather;
