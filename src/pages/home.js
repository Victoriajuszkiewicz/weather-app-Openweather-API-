import React, { useState, useEffect } from "react";
import "./home.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import {
	solid,
	regular,
	brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

const Home = (props) => {
	const { handleChange, handleClick, handleSubmit, location } = props;
	const [Berlin, setBerlin] = useState({});
	const [Dublin, setDublin] = useState({});
	const [Boston, setBoston] = useState({});
	const [Barcelona, setBarcelona] = useState({});

	useEffect(() => {
		fetchBerlin();
		fetchDublin();
		fetchBoston();
		fetchBarcelona();
	}, []);

	const fetchBerlin = async () => {
		try {
			const { data } = await axios.get(
				`https://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=${process.env.REACT_APP_API_KEY}&units=metric`
			);

			setBerlin(data);
		} catch (error) {
			console.error(error);
		}
	};

	const fetchDublin = async () => {
		try {
			const { data } = await axios.get(
				`https://api.openweathermap.org/data/2.5/weather?q=Dublin&appid=${process.env.REACT_APP_API_KEY}&units=metric`
			);

			setDublin(data);
		} catch (error) {
			console.error(error);
		}
	};

	const fetchBoston = async () => {
		try {
			const { data } = await axios.get(
				`https://api.openweathermap.org/data/2.5/weather?q=Boston&appid=${process.env.REACT_APP_API_KEY}&units=metric`
			);

			setBoston(data);
		} catch (error) {
			console.error(error);
		}
	};
	const fetchBarcelona = async () => {
		try {
			const { data } = await axios.get(
				`https://api.openweathermap.org/data/2.5/weather?q=Barcelona&appid=${process.env.REACT_APP_API_KEY}&units=metric`
			);

			setBarcelona(data);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="mainbody">
			<h1>Choose a city</h1>
			<h2>Select a city or a country to see the weather</h2>

			<FontAwesomeIcon icon={solid("cloud")} />
			<FontAwesomeIcon icon={solid("umbrella")} />
			<FontAwesomeIcon icon={solid("sun")} />
			<FontAwesomeIcon icon={solid("wind")} />
			<FontAwesomeIcon icon={solid("cloud-rain")} />
			<FontAwesomeIcon icon={solid("cloud-showers-heavy")} />
			<FontAwesomeIcon icon={solid("cloud-sun")} />
			<form className="NewForm" onSubmit={handleSubmit}>
				<div className="container" id="searchbar">
					<div className="input-group">
						<input
							className="form-control"
							type="text"
							placeholder="Search for the city..."
							value={location}
							onChange={handleChange}
						></input>

						<div className="input-group-append">
							<button type="button" className="btn btn-outline-secondary">
								Search
							</button>

							{/* <button
                onClick={handleClick}
                type="button"
                className="btn btn-outline-secondary"
              >
                5-day weather
              </button> */}
						</div>
					</div>
				</div>
			</form>
			<div className="container" id="weatherdata">
				<div className="row gy-4">
					<div className="col-sm-6">
						<div className="card">
							<div className="card-body">
								{Berlin && (
									<div className="row">
										<div className="col-sm-6">
											<h3 className="card-title">{Berlin.name}</h3>
											<p className="card-text" id="temperature">
												{Math.round(Berlin.main?.temp)}°C
											</p>
										</div>

										<div className="col-sm-6">
											<p className="card-text">
												Feels like {Math.round(Berlin.main?.feels_like)}°C
											</p>
											<p className="card-text">
												Humidity {Berlin.main?.humidity}%
											</p>
											<p>
												{Berlin.weather &&
													Berlin.weather[0] &&
													Berlin.weather[0].description
														.charAt(0)
														.toUpperCase() +
														Berlin.weather[0].description.slice(1)}
											</p>
										</div>
									</div>
								)}
							</div>
						</div>
					</div>
					<div className="col-sm-6">
						<div className="card">
							<div className="card-body">
								{Dublin && (
									<div className="row">
										<div className="col-sm-6">
											<h3 className="card-title">{Dublin.name}</h3>
											<p className="card-text" id="temperature">
												{Math.round(Dublin.main?.temp)}°C
											</p>
										</div>
										<div className="col-sm-6">
											<p className="card-text">
												Feels like {Math.round(Dublin.main?.feels_like)}°C
											</p>
											<p className="card-text">
												Humidity {Dublin.main?.humidity}%
											</p>
											<p>
												{Dublin.weather &&
													Dublin.weather[0] &&
													Dublin.weather[0].description
														.charAt(0)
														.toUpperCase() +
														Dublin.weather[0].description.slice(1)}
											</p>
										</div>
									</div>
								)}
							</div>
						</div>
					</div>
					<div className="col-sm-6">
						<div className="card">
							<div className="card-body">
								{Barcelona && (
									<div className="row">
										<div className="col-sm-6">
											<h3 className="card-title">{Barcelona.name}</h3>
											<p className="card-text" id="temperature">
												{Math.round(Barcelona.main?.temp)}°C
											</p>
										</div>
										<div className="col-sm-6">
											<p className="card-text">
												Feels like {Math.round(Barcelona.main?.feels_like)}°C
											</p>
											<p className="card-text">
												Humidity {Barcelona.main?.humidity}%
											</p>
											<p>
												{Barcelona.weather &&
													Barcelona.weather[0] &&
													Barcelona.weather[0].description
														.charAt(0)
														.toUpperCase() +
														Barcelona.weather[0].description.slice(1)}
											</p>
										</div>
									</div>
								)}
							</div>
						</div>
					</div>
					<div className="col-sm-6">
						<div className="card">
							<div className="card-body">
								{Boston && (
									<div className="row">
										<div className="col-sm-6">
											<h3 className="card-title">{Boston.name}</h3>
											<p className="card-text" id="temperature">
												{Math.round(Boston.main?.temp)}°C
											</p>
										</div>
										<div className="col-sm-6">
											<p className="card-text">
												Feels like {Math.round(Boston.main?.feels_like)}°C
											</p>
											<p className="card-text">
												Humidity {Boston.main?.humidity}%
											</p>
											<p>
												{Boston.weather &&
													Boston.weather[0] &&
													Boston.weather[0].description
														.charAt(0)
														.toUpperCase() +
														Boston.weather[0].description.slice(1)}
											</p>
										</div>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
