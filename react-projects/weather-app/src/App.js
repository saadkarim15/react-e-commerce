import React, { useState, useEffect } from "react";
import "./App.css";
import Weather from "./components/Weather";

function App() {
  const App_Key = "7702de49d07686561ac1e7236000e7c1";

  const [details, setDetails] = useState({});
  const [location, setLocation] = useState("");
  const [search, setSearch] = useState("");
  useEffect(() => {
    getWeather();
  }, [location]);

  const getWeather = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${App_Key}`
    );
    const data = await response.json();
    console.log(data);
    setDetails(data);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setLocation(search);
    setSearch("");
  };
  return (
    <div
      className={
        typeof details.main !== "undefined"
          ? details.main.temp > 16
            ? "app-warm"
            : "app-cold"
          : "default-app"
      }
    >
      <div className="weather-app">
        <form className="weather-location" onSubmit={getSearch}>
          <input
            type="text"
            className="search-location"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className="get-weather">
            <i className="fas fa-search"></i>
          </button>
        </form>
        <div>
          {typeof details.main !== "undefined" ? (
            <Weather
              areaName={details.name}
              countryName={details.sys.country}
              temperature={details.main.temp}
              weather={details.weather[0].description}
              icon={
                "http://openweathermap.org/img/w/" +
                details.weather[0].icon +
                ".png"
              }
              feelsLike={details.main.feels_like}
              wind={details.wind.speed}
              pressure={details.main.pressure}
              minTemp={details.main.temp_min}
              maxTemp={details.main.temp_max}
              humidity={details.main.humidity}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
