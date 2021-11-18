import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setweatherData] = useState({ ready: false });

  function handleResponse(response) {
    setweatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      day: `Saturday`,
      time: `11:11`,
      date: new Date(response.data.dt * 1000),
      humidity: Math.round(response.data.main.humidity),
      description: response.data.weather[0].description,
    });
  }
  if (weatherData.ready) {
    return (
      <WeatherInfo data={weatherData}/>
    );
  } else {
    const apiKey = "e4c991b27b566dc4b5b311b6f8d9ac5c";

    let apiUrl = ` http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return (
      "Loading..."
    );
  }
}
