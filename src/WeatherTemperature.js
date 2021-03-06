import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === `celsius`) {
    return (
      <div className="WeatherTemperature">
        <p className="main-temp">
          {props.celsius}
          <span className="units">
            °C |{" "}
            <a href="/" onClick={showFahrenheit}>
              °F
            </a>
          </span>{" "}
        </p>
      </div>
    );
  } else {
      let fahrenheit =Math.round((props.celsius *9/5) + 32)
    return (
      <div className="WeatherTemperature">
        <p className="main-temp">
          {fahrenheit}
          <span className="units">
            <a href="/" onClick={showCelsius}>
              °C{" "}
            </a>
            | °F
          </span>{" "}
        </p>
      </div>
    );
  }
}
