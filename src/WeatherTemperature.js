import React, { useState } from "react";

export default function WeatherTemperature(props){
    const [unit, setUnit] = useState ("celsius")

    function showFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");

    }
    if (unit === `celsius`){
    return (
      <div className="WeatherTemperature">
        <p className="main-temp">
          {props.celsius}
          <sup className="units">
            °C | <a href="/" onClick={showFahrenheit}>°F</a>
          </sup>{" "}
        </p>
      </div>
      );}
    else {
    return(
        "F"
    );
    }
}
