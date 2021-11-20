import Reacr from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      

          <p className="main-temp">{props.data.temperature}°C</p>
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
