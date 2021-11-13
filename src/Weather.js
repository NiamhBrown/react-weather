import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container p-3">
          <input type="search" placeholder="Search..."  className="form-control"/>
        <p>13°C</p>
        <div className="row">
          <div className="col-6">
            <ul>
              <li>Brighton</li>
              <li>Saturday</li>
              <li>11:11</li>
            </ul>
          </div>

          <div className="col-6">
            <ul>
              <li>Sunshine</li>
              <li>Humidity: 79%</li>
              <li>Wind: 2 mph</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
