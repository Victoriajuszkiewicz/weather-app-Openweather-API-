import React from "react";
import "./result.css";

export default function result(props) {
	const { setLocation, setWeather, weather, forecast } = props;
	const { getIcon } = props;

	let ICON_URL = "https://openweathermap.org/img/wn/";

	return (
		<div>
			<div className="container" id="resultcontainer">
				{weather && (
					<div>
						<div>
							<h3>
								<i className="bi bi-geo-alt-fill" id="locationincon"></i>
								{weather.name}
							</h3>
						</div>
						<p id="temperature">{Math.round(weather.main.temp)}°C</p>
						{weather.weather && weather.weather[0] && (
							<img
								src={ICON_URL + weather.weather[0].icon + ".png"}
								className="iconimage"
							/>
						)}

						<p>
							{weather.weather &&
								weather.weather[0] &&
								weather.weather[0].description.charAt(0).toUpperCase() +
									weather.weather[0].description.slice(1)}
						</p>
						<h3>Todays Highlights</h3>

						<div className="row">
							<div className="col" id="highlights">
								<p>Feels like</p>
								<p id="tempfont"> {Math.round(weather.main.feels_like)}°C</p>
							</div>
							<div className="col" id="highlights">
								<p>Humidity</p>
								<p id="tempfont"> {weather.main.humidity}%</p>
							</div>
							<div className="col" id="highlights">
								<p>Pressure</p>
								<p id="tempfont"> {weather.main.pressure}°mb</p>
							</div>
							<div className="col" id="highlights">
								<p>Wind speed</p>
								<p id="tempfont"> {weather.wind.speed}mph</p>
							</div>
						</div>
					</div>
				)}
			</div>
			<div>
				<h3>5-day forecast</h3>
				{forecast &&
					forecast.map((data, index) => {
						const dateObj = new Date(data.dt_txt);
						const options = {
							weekday: "long",
							month: "long",
							day: "numeric",
						};
						const formattedDate = dateObj.toLocaleDateString("en-US", options);
						return (
							<div key={index}>
								<p>{formattedDate}</p>
								<p>{data.weather[0].description}</p>
								<p>{Math.round(data.main.temp)}°C</p>
							</div>
						);
					})}
			</div>
		</div>
	);
}
