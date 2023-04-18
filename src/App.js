import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import {
	solid,
	regular,
	brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

import Home from "./pages/home.js";
import Result from "./pages/result.js";
import Footer from "./components/Footer.js";

function App() {
	const [loading, setLoading] = useState(false); //1
	const [location, setLocation] = useState(""); //2
	const [weather, setWeather] = useState(null); //3
	const [error, setError] = useState(""); //4
	const [forecast, setForecast] = useState("");
	const navigate = useNavigate();

	const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;



	// async function pause(ms) {
	//   return new Promise((resolve) => setTimeout(resolve, ms));
	// }

	const handleChange = (e) => {
		setLocation(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let formLocation = location;
		getWeather(formLocation);
		navigate("/result");
		setLocation("");
	};

	//function "handleSubmit" will call "getWeather" and take care of other tasks relating to state and the form.
	const getWeather = async (formLocation) => {
		//console.log(formLocation);
		// setLoading(true);
		setWeather(null);
		setError("");

		// await pause(500);
		// call Open Weather API
		try {
			//this line connects to one with url
			let response = await fetch(WEATHER_URL);
			//if server found then
			if (response.ok) {
				// Response was OK; wait for the JSON data and convert it
				let weatherData = await response.json();
				// Save it to state
				setWeather(weatherData);
				//if (weather) {
				// console.log(weather);
				//}
				// console.log(weatherData);
			} else {
				// Server responded, but can't fulfill my request
				setError(`Server error: ${response.status} ${response.statusText}`);
			}
		} catch (err) {
			// Network error: server wasn't reached
			setError(`Network error: ${err.message}`);
		}
		// setLoading(false);
	};
	const icon = [
		"cloud-sun",
		"cloud",
		"umbrella",
		"sun",
		"wind",
		"cloud-rain",
		"cloud-showers-heavy",
	];
	const getIcon = (weather) => {
		switch (weather) {
			case "Partly cloudy" ||
				"Few clouds" ||
				"Overcast clouds" ||
				"Broken clouds":
				return icon[0];
				break;
			case "Sunny" || "Clear sky":
				return icon[3];
				break;
			case "Light rain":
				return icon[2];
				break;
			case "Heavy rain":
				return icon[6];
				break;
			case "Moderate or heavy rain":
				return icon[5];
				break;
			default:
				return icon[0];
		}
	};
	console.log(weather);
	return (
		<div className="App">
			<div className="mainbody">
				<Routes>
					<Route
						path="/"
						element={
							<Home
								handleChange={handleChange}
								handleSubmit={handleSubmit}
								location={location}
							/>
						}
					/>
					<Route
						path="/result"
						element={
							<Result
								setLocation={setLocation}
								setWeather={setWeather}
								weather={weather}
								getIcon={getIcon}
							/>
						}
					/>
				</Routes>
			</div>
			<Footer />
		</div>
	);
}

export default App;
