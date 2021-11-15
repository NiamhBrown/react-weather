import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
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
      date: new Date(response.data.dt*1000),
      humidity: Math.round(response.data.main.humidity),
      description: response.data.weather[0].description,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container p-3">
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Search..."
                className="form-control"
              />
            </div>
          </div>
          <p className="main-temp">{weatherData.temperature}°C</p>
          <div className="row">
            <div className="col-6 info-left">
              <ul>
                <li>{weatherData.city}</li>
                <li>{weatherData.day}</li>
                <li>{weatherData.time}</li>
                <FormattedDate date={weatherData.date} />
              </ul>
            </div>

            <div className="col-6 info-right">
              <ul>
                <li className="text-capitalize">{weatherData.description}</li>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind} mph</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "e4c991b27b566dc4b5b311b6f8d9ac5c";
  
    let apiUrl = ` http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
