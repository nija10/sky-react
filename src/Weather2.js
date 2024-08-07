// import "./Weather.css";
// import axios from "axios";
// import React, { useState } from "react";
// import WeatherInfo from "./WeatherInfo";
// import WeatherForecast from "./WeatherForecast";

// export default function Weather(props) {
//   // const [ready, setReady] = useState(false);
//   const [weatherData, setWeatherData] = useState({ ready: false });
//   const [city, setCity] = useState(props.defaultCity);

//   function handleResponse(response) {
//     console.log(response);
//     setWeatherData({
//       ready: true,
//       temperature: response.data.main.temp,
//       date: new Date(response.data.dt * 1000),
//       wind: response.data.wind.speed,
//       city: response.data.name,
//       humidity: response.data.main.humidity,
//       description: response.data.weather[0].description,
//       icon: response.data.weather[0].icon,
//     });

//     // setReady(true);
//   }

//   function search() {
//     let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
//     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
//     axios.get(apiUrl).then(handleResponse);
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     search();
//   }

//   function handleCityChange(event) {
//     setCity(event.target.value);
//   }

//   function searchLocation() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(showPosition);
//     }
//   }

//   function showPosition(position) {
//     console.log(position);
//     let lat = position.coords.latitude;
//     let lon = position.coords.longitude;
//     let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
//     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
//     axios.get(apiUrl).then(handleResponse);
//   }

//   if (weatherData.ready) {
//     return (
//       <div className="Weather">
//         <form onSubmit={handleSubmit}>
//           <div className="row">
//             <div className="col-8 col">
//               <input
//                 type="search"
//                 placeholder="Enter a city.."
//                 className="form-control"
//                 autoFocus="on"
//                 onChange={handleCityChange}
//               />
//             </div>
//             <div className="col-3 search-btn col">
//               <input
//                 type="submit"
//                 value="Search"
//                 className="btn btn-primary w-100"
//               />
//             </div>
//             <div className="col-1 col">
//               <input
//                 value="📍"
//                 type="button"
//                 onClick={searchLocation}
//                 className="loc-btn"
//               />
//             </div>
//           </div>
//         </form>
//         <WeatherInfo data={weatherData} />
//         <WeatherForecast />
//       </div>
//     );
//   } else {
//     search();
//     return "Loading...";
//   }
// }
