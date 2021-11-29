import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <img
        src={props.data.iconUrl}
        alt={props.data.description}
        className="icon mt-3"
      />
      <WeatherTemperature celsius={props.data.temperature} />

      <div className="row">
        <div className="col-6 info-left">
          <ul>
            <li>{props.data.city}</li>

            <FormattedDate date={props.data.date} />
          </ul>
        </div>

        <div className="col-6 info-right">
          <ul>
            <li className="text-capitalize">{props.data.description}</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
