const axios = require("axios").default;

const getWeather = async (user) => {
  if (!user) {
    return;
  }
  try {
    const userToken = JSON.parse(sessionStorage.getItem("user-token"));
    const response = await axios.post("http://localhost:8080/api/weather", {
      token: userToken.token,
    });
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

const getForecaset = async (user) => {
  if (!user) {
    return;
  }
  try {
    const userToken = JSON.parse(sessionStorage.getItem("user-token"));
    const response = await axios.post(
      "http://localhost:8080/api/weather/forecast",
      { token: userToken.token }
    );
    const data = response.data;

    const forecast = [];
    for (let i = 0; i < data.list.length; i++) {
      const singleData = {};
      let singleItem = data.list[i];
      singleData["dateTime"] = singleItem.dt_txt;
      singleData["description"] = singleItem.weather[0].description;
      singleData["temp"] = {
        realCelcius: (singleItem.main.temp - 273.15).toFixed(2),
        feelCelcius: (singleItem.main.feels_like - 273.15).toFixed(2),
        realFer: ((singleItem.main.temp - 273.15) * 9) / 5 + 32,
        feelFer: ((singleItem.main.feels_like - 273.15) * 9) / 5 + 32,
      };
      singleData["types"] = {
        wind: singleItem.wind.speed,
        clouds: singleItem.clouds.all,
      };
      forecast.push(singleData);
    }

    const formattedData = {
      meta: {
        country: data.city.country,
        city: data.city.name,
        timezone: data.city.timezone / 60 / 60,
        sunrise: data.city.sunrise,
        sunset: data.city.sunset,
      },
      forecast,
    };
    return formattedData;
  } catch (err) {
    console.log(err);
  }
};

const getAirPollution = async (user) => {
  if (!user) {
    return;
  }
  try {
    const userToken = JSON.parse(sessionStorage.getItem("user-token"));
    const response = await axios.post(
      "http://localhost:8080/api/weather/airpollution",
      { token: userToken.token }
    );
    const dataObject = response.data;
    const airData = dataObject.airPollutionData.list[0].components;

    const formattedData = {
      meta: {
        country: dataObject.country,
        state: dataObject.state ? dataObject.state : null,
        coordinates: dataObject.airPollutionData.coord,
      },
      airData: {
        co: airData.co,
        nh3: airData.nh3,
        no: airData.no,
        no2: airData.no2,
        o3: airData.o3,
        pm2_5: airData.pm2_5,
        pm10: airData.pm10,
        so2: airData.so2,
      },
    };
    return formattedData;
  } catch (err) {
    console.log(err);
  }
};

const weatherService = {
  getWeather,
  getForecaset,
  getAirPollution,
};

export default weatherService;
