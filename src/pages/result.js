import React from "react";

export default function result(props) {
	const { setLocation, setWeather, weather } = props;

	return (
		<div>
			<h1>Result</h1>
			<div>
				{weather && (
					<div>
						<i className="bi bi-geo-alt-fill"></i>
						<h3>{weather.name}</h3>
						<p>{Math.round(weather.main.temp)}°C</p>
						<p>Feels like {weather.main.feels_like}</p>
						<p>Humidity {weather.main.humidity}%</p>
						<p>Pressure {weather.main.pressure}°mb</p>
						<p>Wind speed {weather.wind.speed}mph</p>
					</div>
				)}
			</div>
		</div>
	);
}
