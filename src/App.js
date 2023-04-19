import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Home from "./pages/home.js";
import Result from "./pages/result.js";
import Footer from "./components/Footer.js";

function App() {
	const [loading, setLoading] = useState(false); //1
	const [location, setLocation] = useState(""); //2
	const [weather, setWeather] = useState(null); //3
	const [error, setError] = useState(""); //4
	const [forecast, setForecast] = useState(null);
	const navigate = useNavigate();

	const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;

	// const FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;

	const FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${process.env.REACT_APP_API_KEY}&units=metric&cnt=5`;

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
		getForecast(formLocation);
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
	// const getForecast = async (formLocation) => {
	// 	//console.log(formLocation);
	// 	// setLoading(true);
	// 	setForecast(null);
	// 	setError("");

	// 	// await pause(500);
	// 	// call Open Weather API
	// 	try {
	// 		//this line connects to one with url
	// 		let response = await fetch(FORECAST_URL);
	// 		//if server found then
	// 		if (response.ok) {
	// 			// Response was OK; wait for the JSON data and convert it
	// 			let forecastData = await response.json();
	// 			// Save it to state
	// 			setForecast(forecastData);
	// 		} else {
	// 			// Server responded, but can't fulfill my request
	// 			setError(`Server error: ${response.status} ${response.statusText}`);
	// 		}
	// 	} catch (err) {
	// 		// Network error: server wasn't reached
	// 		setError(`Network error: ${err.message}`);
	// 	}
	// 	// setLoading(false);
	// };

	const getForecast = async (formLocation) => {
		setForecast(null);
		setError("");

		const API_KEY = "b3e43794b735ae0eeda537605a79cc74";
		const city = formLocation;
		const targetTime = "12:00:00";
		const params = `?q=${city}&cnt=40&appid=${API_KEY}&units=metric`;

		try {
			const response = await fetch(
				`https://api.openweathermap.org/data/2.5/forecast${params}`
			);

			if (response.ok) {
				const data = await response.json();

				const filteredData = [];
				for (let i = 0; i < 5; i++) {
					const date = new Date();
					date.setDate(date.getDate() + i);
					const dateString = date.toISOString().slice(0, 10);
					const filteredDayData = data.list.filter(
						(x) =>
							x.dt_txt.includes(dateString) && x.dt_txt.includes(targetTime)
					);
					filteredData.push(filteredDayData[0]);
				}

				setForecast(filteredData);
			} else {
				setError(`Server error: ${response.status} ${response.statusText}`);
			}
		} catch (err) {
			setError(`Network error: ${err.message}`);
		}
	};

	console.log(weather);
	console.log(forecast);
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
								setForecast={setForecast}
								forecast={forecast}
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
