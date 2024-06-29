import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelcius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          <span className="main_unit">°C </span>|{" "}
          <a href="/" onClick={showFahrenheit} className="unit_link">
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="unit">
          <a href="/" onClick={showCelcius} className="unit_link">
            °C{" "}
          </a>
          | <span className="main_unit">°F</span>
        </span>
      </div>
    );
  }
}
