import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/home.js";
import Result from "./pages/result.js";

function App() {
  const [loading, setLoading] = useState(false); //1
  const [location, setLocation] = useState(""); //2
  const [weather, setWeather] = useState(null); //3
  const [error, setError] = useState(""); //4
  const [forecast, setForecast] = useState("");

  const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
