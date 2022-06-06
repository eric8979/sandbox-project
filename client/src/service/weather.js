const axios = require("axios").default;

const getWeather = async (user) => {
  if (!user) {
    return;
  }
  try {
    const response = await axios.post("http://localhost:8080/api/weather");
    const data = response.data;
    const formattedData = {
      meta: {
        country: data.sys.country,
        city: data.name,
        timezone: data.timezone / 60 / 60,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
      },
      description: data.weather[0].description,
      temp: {
        realCelcius: (data.main.temp - 273.15).toFixed(2),
        feelCelcius: (data.main.feels_like - 273.15).toFixed(2),
        realFer: ((data.main.temp - 273.15) * 9) / 5 + 32,
        feelFer: ((data.main.feels_like - 273.15) * 9) / 5 + 32,
      },
      types: {
        wind: data.wind.speed,
        clouds: data.clouds.all,
        rain: data.rain ? data.rain : null,
        snow: data.snow ? data.snow : null,
      },
    };
    return formattedData;
  } catch (err) {
    console.log(err);
  }
};

const getForecaset = async () => {
  return;
};

const getAirPollution = async () => {
  return;
};

const weatherService = {
  getWeather,
  getForecaset,
  getAirPollution,
};

export default weatherService;
