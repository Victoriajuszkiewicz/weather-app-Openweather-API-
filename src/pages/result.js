import React from "react";
import { NavLink } from "react-router-dom";

export default function result(props) {
  const { setLocation, setWeather, weather } = props;

  return (
    <div>
      <h1>Result</h1>
      <NavLink to="/">
        <i class="bi bi-arrow-left-circle-fill"></i>
      </NavLink>
      <div>
        {weather && (
          <div>
            <i className="bi bi-geo-alt-fill"></i>
            <h3>{weather.name}</h3>
            <p>{weather.main.temp}°C</p>
            <p>Feels like {weather.main.feels_like}</p>
            <p>Humidity {weather.main.humidity}</p>
            <p>Pressure {weather.main.pressure}</p>
            <p>Wind speed {weather.wind.speed}</p>
          </div>
        )}
      </div>
    </div>
  );
}
