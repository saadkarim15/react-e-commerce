import React from "react";

const Weather = ({
  areaName,
  countryName,
  temperature,
  weather,
  icon,
  feelsLike,
  wind,
  pressure,
  minTemp,
  maxTemp,
  humidity,
}) => {
  return (
    <div className="weather-map-container">
      <div className="area-weather">
        <div className="location-container">
          <h1 className="country-name">
            {areaName}, {countryName}
          </h1>
          <p className="weather">{weather}</p>
        </div>
        <img src={icon} alt="" />
      </div>
      <div className="temperature-details">
        <div className="country-temperature">
          <h1>{Math.round(temperature)}°C</h1>
        </div>
        <div className="details-container">
          <h4 className="details-title">Details</h4>
          <p className="detail">
            <span>Feels Like</span> <span>{feelsLike}°C</span>
          </p>
          <p className="detail">
            <span>Wind</span> <span>{wind}m/s</span>
          </p>
          <p className="detail">
            <span>Pressure</span> <span>{pressure} hPa</span>
          </p>
          <p className="detail">
            <span>Min Temp</span> <span>{minTemp}°C</span>
          </p>
          <p className="detail">
            <span>Max Temp</span> <span>{maxTemp}°C</span>
          </p>
          <p className="detail">
            <span>Humidity</span> <span>{humidity}%</span>
          </p>
        </div>
      </div>
      <div className="description">
        <span>See The Weather</span>
      </div>
    </div>
  );
};

export default Weather;
