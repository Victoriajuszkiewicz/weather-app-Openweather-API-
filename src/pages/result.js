import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import {
	solid,
	regular,
	brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";

export default function result(props) {
	const { setLocation, setWeather, weather } = props;
	const { getIcon } = props;

	console.log(weather);
	// const weatherIcon = getIcon(weather?.weather[0]?.description);
	const weatherIcon = getIcon(weather?.weather[0]?.description);
	return (
		<div>
			<h1>Result</h1>
			<div>
				{weather && (
					<div>
						<i className="bi bi-geo-alt-fill"></i>
						<h3>{weather.name}</h3>
						<p>{Math.round(weather.main.temp)}°C</p>
						<FontAwesomeIcon icon={weatherIcon} />

						{/* <img
							className="icon"
							src={getIcon(weather.weather[0].description)}
						></img> */}
						<p>
							{weather.weather &&
								weather.weather[0] &&
								weather.weather[0].description.charAt(0).toUpperCase() +
									weather.weather[0].description.slice(1)}
						</p>
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
