const bcrypt = require("bcryptjs");
const axios = require("axios").default;
const User = require("../models/userModel");
// handles "exception" inside of async express routes
const asyncHandler = require("express-async-handler");

// @desc Get current weather (API - Current Weather)
// @route Get /api/weather
// @access Public
const getWeather = asyncHandler(async (req, res) => {
  const countryCode = "US";
  const cityName = "los angeles";
  const limit = 5;

  const metaGeoData = await axios.get(
    `http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${countryCode}&limit=${limit}&appid=${process.env.OPENWEATHER_API_KEY}`
  );
  const data = metaGeoData.data[0];
  const geoData = {
    lat: data.lat,
    lon: data.lon,
    country: data.country,
    state: data.state,
  };

  const metaData = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${geoData.lat}&lon=${geoData.lon}&appid=${process.env.OPENWEATHER_API_KEY}`
  );
  const weatherData = metaData.data;

  res.json(weatherData);
});

// @desc Get weather forecast (3-hour Forecast 5 days)
// @route GET /api/weather/forecast
// @access Public
const getForecast = asyncHandler(async (req, res) => {
  const lat = 35;
  const lon = 139;
  const data = await axios.get(
    `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lon}&appid=${process.env.OPENWEATHER_API_KEY2}`
  );
  console.log(data);
});

// @desc Get air pollution (Air Pollution API)
// @route GET /api/weather/airpollution
// @access Public
const getAirPollution = asyncHandler(async (req, res) => {
  res.json({});
});

module.exports = {
  getWeather,
  getForecast,
  getAirPollution,
};

// use geocoding
