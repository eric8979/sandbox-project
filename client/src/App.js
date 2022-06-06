// Weather broadcasting page
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import weatherService from "./service/weather";
// components
import Bottombar from "./components/Bottombar";
import Topbar from "./components/Topbar";

function App() {
  const token = sessionStorage.getItem("user-token");
  const [weather, setWeather] = useState();
  const [forecast, setForecast] = useState();
  const [air, setAir] = useState();

  const handleData = async (e) => {
    setWeather(null);
    setForecast(null);
    setAir(null);
    if (e.target.id === "weather") {
      const weatherData = await weatherService.getWeather(token);
      setWeather(weatherData);
    } else if (e.target.id === "forecast") {
      const forecasetData = await weatherService.getForecaset(token);
      setForecast(forecasetData);
    } else if (e.target.id === "air") {
      const airData = await weatherService.getAirPollution(token);
      setAir(airData);
    }
  };

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Topbar />
      <h1>Weather Page (home)</h1>
      <div className="weather-buttons">
        <button id="weather" onClick={(e) => handleData(e)}>
          Weather
        </button>
        <button id="forecast" onClick={(e) => handleData(e)}>
          Forecast
        </button>
        <button id="air" onClick={(e) => handleData(e)}>
          Air Pollution
        </button>
      </div>

      {!weather ? (
        ""
      ) : (
        <div>
          <h2>
            {weather.meta.city} ({weather.meta.country}) - {weather.description}
          </h2>
          <small>Time Zone : UTC {weather.meta.timezone}</small>
          <p>
            Temperature : {weather.temp.realCelcius} C / feels like{" "}
            {weather.temp.feelCelcius} C
          </p>
          <p>Wind : {weather.types.wind} m/s</p>
          <p>Cloud : {weather.types.clouds} %</p>
          <p>{weather.rain ? "rain : Yes" : "rain : No"}</p>
          <p>{weather.snow ? "snow : Yes" : "snow : No"}</p>
        </div>
      )}

      <Bottombar />
    </div>
  );
}

export default App;
