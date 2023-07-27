import { createContext } from "react";

const GeolocationContext = createContext();

const GeolocationProvider = ({children}) => {

    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            
        )
    }

    return (
        <GeolocationContext.Provider>
            {children}
        </GeolocationContext.Provider>
    )
}

export default { GeolocationContext }