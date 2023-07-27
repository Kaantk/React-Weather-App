import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { GeolocationContext } from '../context/GeolocationContext';

const WeatherContext = createContext();
const APIKey = '71006bab4fe57864ccebf1679aafb1fa';

const WeatherProvider = ({ children }) => {

  const { location } = useContext(GeolocationContext);
  const [city, setCity] = useState("İstanbul");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
    
  const updateCity = (searchCity) => {
    setCity(searchCity);
  }

  useEffect(() => {
    async function axiosData() {
        try {
            if (location == null) { // Kullanıcıdan konum bilgileri alınmayınca default "İstanbul" gösterilecek.
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`);
                setWeatherData(response.data);
                setLoading(false);
                setError(null);
            }
            else { // Konum bilgeri alınıyorsa konumun verileri gösterilecek.
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&units=metric&appid=${APIKey}`);
                setWeatherData(response.data);
                setLoading(false);
                setError(null);
            }
        }
        catch {
            setError("Hava durumu verileri alınamadı !");
            setLoading(false);
        }
    }

    axiosData();

}, [city, location])

return (
    <WeatherContext.Provider value={{ weatherData, loading, error, updateCity, location }}>
      {children}
    </WeatherContext.Provider>
  )
}

export { WeatherContext, WeatherProvider };