import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function max() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function min() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="weatherForecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={42} />
      <div className="weatherForecast-temp">
        <span className="weatherForecast-temp-max">{max()}</span>
        <span className="weatherForecast-temp-min">{min()}</span>
      </div>
    </div>
  );
}
