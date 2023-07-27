import React from 'react'
import Weather from './Weather';
import Search from './Search';
import '../css/Container.css';
import { WeatherProvider } from '../context/WeatherContext';
import { GeolocationProvider } from '../context/GeolocationContext';
 
function Container() {
  return (
    <div className='container'>
        <WeatherProvider>
            <Search/>
            <Weather/>
        </WeatherProvider>
    </div>
  )
}

export default Container
