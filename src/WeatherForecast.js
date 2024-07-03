import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response);
  }

  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&unites=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="weatherForecast-day">Thu</div>
          <WeatherIcon code="01d" size={42} />
          <div className="weatherForecast-temp">
            <span className="weatherForecast-temp-max">19°</span>
            <span className="weatherForecast-temp-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
