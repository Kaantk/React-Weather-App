import React, { createContext, useState, useEffect } from "react";

const GeolocationContext = createContext();

const GeolocationProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [hasLocationPermission, setHasLocationPermission] = useState(false);

  useEffect(() => {
    if ("geolocation" in navigator && !hasLocationPermission) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          setHasLocationPermission(true); // Konum izni verildiğini işaretle
        }
      )
    }
  }, [hasLocationPermission]);

  return (
    <GeolocationContext.Provider value={{ location, hasLocationPermission }}>
      {children}
    </GeolocationContext.Provider>
  )
}

export { GeolocationContext, GeolocationProvider };
