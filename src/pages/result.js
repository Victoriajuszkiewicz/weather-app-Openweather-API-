import React from "react";
import "./result.css";

export default function result(props) {
	const { weather, forecast } = props;
	// const { getIcon } = props;

	let ICON_URL = "https://openweathermap.org/img/wn/";
	// console.log(weather);

	return (
		<div>
			<div className="container" id="resultcontainer">
				{weather && (
					<div>
						<div id="containerforname">
							<h3>
								<i className="bi bi-geo-alt-fill" id="locationincon"></i>
								{weather.name}
							</h3>
						</div>
						<p id="temperature">{Math.round(weather.main.temp)}°C</p>
						{weather.weather && weather.weather[0] && (
							<img
								alt="weather icon from openweatherapi"
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
			<div className="container" id="forecastcontainer">
				<div className="row">
					<div className="col-12">
						<h3 id="forecasttext">5-day forecast</h3>
					</div>

					{forecast &&
						forecast.length > 0 &&
						forecast.map((data, index) => {
							const dateObj = new Date(data.dt_txt);
							const options = {
								weekday: "long",
								month: "long",
								day: "numeric",
							};
							const formattedDate = dateObj.toLocaleDateString(
								"en-US",
								options
							);
							return (
								<div className="col-12">
									<div className="row" id="allforecastcards" key={index}>
										<div className="col-4">
											<p id="tempforecast">{formattedDate}</p>
										</div>
										<div className="col-4">
											<img
												alt="weather icon from openweather"
												src={ICON_URL + data.weather[0].icon + ".png"}
											/>
											<p>{data.weather[0].description}</p>
										</div>
										<div className="col-4" id="tempforecast">
											<p>{Math.round(data.main.temp)}°C</p>
										</div>
									</div>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
}
