import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const WeatherContext = createContext();
const APIKey = '71006bab4fe57864ccebf1679aafb1fa';

const WeatherProvider = ({ children }) => {

  const [city, setCity] = useState("İstanbul");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
    
  const updateCity = (searchCity) => {
    setCity(searchCity);
  }

  useEffect(() => {
    async function fetchWeatherData() {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`);
            setWeatherData(response.data);
            setLoading(false);
            setError(null);
        }
        catch (error) {
            setError("Hava durumu verileri alınamadı !");
            setLoading(false);
        }
    }

    fetchWeatherData();
  }, [city]);
    
  return (
    <WeatherContext.Provider value={{ weatherData, loading, error, updateCity }}>
      {children}
    </WeatherContext.Provider>
  )
}

export { WeatherContext, WeatherProvider };
