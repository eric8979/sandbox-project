const express = require("express");
const router = express.Router();
const {
  getWeather,
  getForecast,
  getAirPollution,
} = require("../actions/weatherActions");

// "/api/weather/"
router.post("/", getWeather);
router.post("/forecast", getForecast);
router.post("/airpollution", getAirPollution);

module.exports = router;
