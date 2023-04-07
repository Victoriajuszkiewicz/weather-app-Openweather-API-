import React from "react";

const home = (props) => {
  const { handleChange, handleClick, handleSubmit, location } = props;

  return (
    <div>
      <h1>Choose a city</h1>
      <h2>Select a city or a country to see the weather</h2>
      <form className="NewForm" onSubmit={handleSubmit}>
        <div className="container">
          <label>
            <input
              type="text"
              placeholder="Search for the city..."
              value={location}
              onChange={handleChange}
            ></input>
          </label>
          <button type="submit" className="form-button">
            Search
          </button>

          <button onClick={handleClick} type="button" className="form-button">
            5-day weather
          </button>
        </div>
      </form>
    </div>
  );
};

export default home;
