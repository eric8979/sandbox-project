// Weather broadcasting page
import { useState } from "react";
import { Navigate } from "react-router-dom";
import weatherService from "./service/weather";
// components
import Bottombar from "./components/Bottombar";
import Topbar from "./components/Topbar";

function App() {
  const token = sessionStorage.getItem("user-token");
  const [visited, setVisited] = useState(0);
  const [weather, setWeather] = useState();
  const [forecast, setForecast] = useState();
  const [air, setAir] = useState();

  const handleData = async (e) => {
    setVisited(1);
    setWeather(null);
    setForecast(null);
    setAir(null);
    // TODO: settimeout for data fetch from openweather api?
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
      <div className="mainBox">
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

        <hr></hr>

        {!visited && !weather && !forecast && !air ? (
          <h2>Click a button for weather service!</h2>
        ) : null}

        {visited && !weather && !forecast && !air ? <h2>Loading...</h2> : null}

        {!weather ? (
          ""
        ) : (
          <div>
            <h2>
              {weather.meta.city} ({weather.meta.country}){" "}
              <small>UTC {weather.meta.timezone}</small>
            </h2>
            <h3>* {weather.description} *</h3>
            <p>
              🌡 : {weather.temp.realCelcius} ℃ / feels like{" "}
              {weather.temp.feelCelcius} C
            </p>
            <p>🌬 : {weather.types.wind} m/s</p>
            <p>☁️ : {weather.types.clouds} %</p>
            <p>{weather.rain ? "☔️ : Yes" : "☔️ : No"}</p>
            <p>{weather.snow ? "❄️ : Yes" : "❄️ : No"}</p>
          </div>
        )}

        {!forecast ? (
          ""
        ) : (
          <div>
            <h2>
              {forecast.meta.city} ({forecast.meta.country}){" "}
              <small>UTC {forecast.meta.timezone}</small>
            </h2>

            {forecast.forecast.map((item, index) => (
              <div key={index} className="forecastItemBox">
                <h3>
                  {item.description} <small>{item.dateTime}</small>
                </h3>
                <p>
                  Temperature : {item.temp.realCelcius} ℃ / feels like{" "}
                  {item.temp.feelCelcius} ℃
                </p>
                <p>Wind : {item.types.wind} m/s</p>
                <p>Cloud : {item.types.clouds} %</p>
              </div>
            ))}
          </div>
        )}

        {!air ? (
          ""
        ) : (
          <div>
            <h2>
              {air.meta.state ? air.meta.state : ""} {air.meta.country}
            </h2>
            <p>CO : {air.airData.co} μg/m3</p>
            <p>NH3 : {air.airData.nh3} μg/m3</p>
            <p>NO : {air.airData.no} μg/m3</p>
            <p>NO2 : {air.airData.no2} μg/m3</p>
            <p>O3 : {air.airData.o3} μg/m3</p>
            <p>SO2 : {air.airData.so2} μg/m3</p>
            <p>
              {"pm2.5"} : {air.airData.pm2_5} μg/m3
            </p>
            <p>pm10 : {air.airData.pm10} μg/m3</p>
          </div>
        )}
      </div>

      <Bottombar />
    </div>
  );
}

export default App;
