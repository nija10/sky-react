import "./Weather.css";
import axios from "axios";

export default function Weather() {
  function handleResponse(response) {
    console.log(response.data);
  }

  let city = "London";
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Partly Cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6 detail">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="partly cloudy"
          />
          <span className="temperature">6</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation:15%</li>
            <li>Humidity:72%</li>
            <li>Wind:13 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
