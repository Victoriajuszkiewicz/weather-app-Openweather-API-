import React from "react";
import Home from "./home.js";

export default function result(props) {
  const { setLocation, setWeather, weather } = props;

  return (
    <div>
      <h1>Result</h1>
      <div>
        {weather && (
          <div>
            <h3>{weather.name}</h3>
            <p>{weather.main.temp}°C</p>
            <p>{weather.main.feels_like}</p>
          </div>
        )}
      </div>
    </div>
  );
}
