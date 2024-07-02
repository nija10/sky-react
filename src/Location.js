import React, { useState } from "react";
import axios from "axios";

export default function Location() {
  let [message, setMessage] = useState("");

  function searchLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  }

  function showPosition(position) {
    console.log(position);
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "2a6oe4748bb5fftba3d905acff9c17d3";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${lon}&lat=${lat}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setMessage(response.data.city);
  }

  return (
    <div className="col-3">
      <input
        value="Location"
        type="button"
        className="btn  w-100"
        onClick={searchLocation}
      />
      <p>{message}</p>
    </div>
  );
}
