import { React, useContext, useState } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import '../css/Search.css';

function Search() {
  const [searchCity, setSearchCity] = useState("");
  const { updateCity } = useContext(WeatherContext);

  const handleSearch = () => {
    updateCity(searchCity);
    setSearchCity("");
  }

  return (
    <div className='search-box'>
      <i className="fa-solid fa-location-dot fa-2xl"></i>
      <input 
        id='search-box' 
        type='text' 
        value={searchCity} 
        onChange={(e) => setSearchCity(e.target.value)} 
        placeholder='Bir şehir arayın...'
      />
      <button className="search-btn" onClick={handleSearch}><i className="fa-solid fa-magnifying-glass fa-xl"></i></button>
    </div>
  )
}

export default Search
