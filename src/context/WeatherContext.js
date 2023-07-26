import { createContext, useState, useEffect } from "react";
import axios from "axios";

const WeatherContext = createContext();

export const WeatherProvider = ({children}) => {
    const APIKey = '71006bab4fe57864ccebf1679aafb1fa';

    const [city, setCity] = useState("İstanbul");
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const updateCity = (searchCity) => {
        setCity(searchCity);
    }

    useEffect(() => {
        try {
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
            .then((response) => setWeatherData(response.data))
            setLoading(false)
            setError(null)
        } 
        catch {
            setError("Hava durumu verileri alınamadı." + error)
            setLoading(false)
        }
    }, [city]);
    
    return (
        <WeatherContext.Provider value={{ weatherData, loading, error, updateCity }}>
            {children}
        </WeatherContext.Provider>
    )
    
}

export { WeatherContext };
