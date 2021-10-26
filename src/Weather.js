import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Brighton",
    date: "Sunday",
    time: "07:30",
    temp: "17",
    description: "Sunshine",
    humidity: "86",
    wind: "4",
  };
  let affirmationContent =
    "You have the ability to create and become everything you desire.";

  return (
    <div className="Weather">
      <div className="card">
        <form className="mb-3">
          <div className="row">
            <div className="col-7">
              <input
                type="search"
                placeholder="City"
                className="form-control"
                autoComplete="off"
              />
            </div>
          </div>
        </form>

        <div className="main-temp">
          <span className="main-temp-value">{weatherData.temp} </span>
          <span className="unit">°C </span>
        </div>

        <div className="row main-info">
          <div className="col-6">
            <ul className="main-info-left">
              <li className="city">{weatherData.city} </li>
              <li>{weatherData.date}</li>
              <li>{weatherData.time}</li>
            </ul>
          </div>
          <div className="col-6">
            <ul className="main-info-right">
              <li>{weatherData.description}</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} mph</li>
            </ul>
          </div>

          <div className="weather-forecast">
            <div className="row"></div>
          </div>
        </div>
        <em className="daily-affirmation">daily affirmation</em>
        <div className="daily-affirmation-content">{affirmationContent}</div>
      </div>
    </div>
  );
}
