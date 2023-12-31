import React from 'react'
import Weather from './Weather';
import Search from './Search';
import '../css/Container.css';
import { WeatherProvider } from '../context/WeatherContext';
import { GeolocationProvider } from '../context/GeolocationContext';
 
function Container() {
  return (
    <div className='container'>
      <GeolocationProvider>
        <WeatherProvider>
          <Search/>
          <Weather/>
        </WeatherProvider>
      </GeolocationProvider>
    </div>
  )
}

export default Container
