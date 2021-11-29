import React from "react";

export default function WeatherTemperature(props){

    return (
        <div className="WeatherTemperature">
<p className="main-temp">{props.data.temperature}°C </p>
</div>
    );
}
