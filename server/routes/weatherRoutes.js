const express = require("express");
const router = express.Router();
const {
  getWeather,
  getForecast,
  getAirPollution,
} = require("../actions/weatherActions");

// "/api/weather/"
router.post("/", getWeather);
router.get("/forecast", getForecast);
router.get("/airpollution", getAirPollution);

module.exports = router;
