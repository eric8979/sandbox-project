const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const axios = require("axios").default;
const User = require("../models/userModel");
// handles "exception" inside of async express routes
const asyncHandler = require("express-async-handler");

// @desc Get current weather (API - Current Weather)
// @route Get /api/weather
// @access Public
const getWeather = asyncHandler(async (req, res) => {
  try {
    const geoData = await getUser_GeoData(req, res);
    const metaData = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${geoData.lat}&lon=${geoData.lon}&appid=${process.env.OPENWEATHER_API_KEY}`
    );
    const weatherData = metaData.data;

    res.json(weatherData);
  } catch (err) {
    res.status(400);
    throw new Error("openweathermap API error");
  }
});

// @desc Get weather forecast (3-hour Forecast 5 days)
// @route GET /api/weather/forecast
// @access Public
const getForecast = asyncHandler(async (req, res) => {
  try {
    const geoData = await getUser_GeoData(req, res);
    const metaData = await axios.get(
      `http://api.openweathermap.org/data/2.5/forecast?lat=${geoData.lat}&lon=${geoData.lon}&appid=${process.env.OPENWEATHER_API_KEY}`
    );
    const forecastData = metaData.data;

    res.json(forecastData);
  } catch (err) {
    res.status(400);
    throw new Error("openweathermap API error");
  }
});

// @desc Get air pollution (Air Pollution API)
// @route GET /api/weather/airpollution
// @access Public
const getAirPollution = asyncHandler(async (req, res) => {
  try {
    const geoData = await getUser_GeoData(req, res);
    const metaData = await axios.get(
      `http://api.openweathermap.org/data/2.5/air_pollution?lat=${geoData.lat}&lon=${geoData.lon}&appid=${process.env.OPENWEATHER_API_KEY}`
    );
    const airPollutionData = metaData.data;

    res.json({
      country: geoData.country,
      state: geoData.state,
      airPollutionData,
    });
  } catch (err) {
    res.status(400);
    throw new Error("openweathermap API error");
  }
});

// Get user & geodata
async function getUser_GeoData(req, res) {
  const token = req.body.token;
  const decoded = jwt.decode(token, { complete: true });
  const user = await User.findById(decoded.payload.id)
    .select("-password")
    .select("-email");

  const countryCode = user.country;
  const city = user.city;

  const limit = 5;
  try {
    const metaGeoData = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city},${countryCode}&limit=${limit}&appid=${process.env.OPENWEATHER_API_KEY}`
    );
    const data = metaGeoData.data[0];
    const geoData = {
      lat: data.lat,
      lon: data.lon,
      country: data.country,
      state: data.state,
    };
    return geoData;
  } catch (err) {
    res.status(400);
    throw new Error("openweathermap Geodata API error");
  }
}

module.exports = {
  getWeather,
  getForecast,
  getAirPollution,
};

// use geocoding
