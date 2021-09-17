import React from "react";

import "../../css/Weather/WeatherInfo.style.css"

const WeatherInfo = props => {

    const { capital, temp, humidity, wind } = props;

    const T = parseInt(temp - 273.1);
   

    return(
        <div className="weather-container">
            <div className="weather-box">
                <p className="weather-title">Weather to:</p>
                <p className="weather-var-title">{capital}</p>
            </div>
            <div className="weather-box">
                <p className="weather-title-p">Temperature:</p>
                <p className="weather-var">{T}°C</p>
            </div>
            <div className="weather-box">
                <p className="weather-title-p">Humidity:</p>
                <p className="weather-var">{humidity}%</p>
            </div>
            <div className="weather-box">
                <p className="weather-title-p">Wind Speed:</p>
                <p className="weather-var">{wind} m/s</p>
            </div>
        </div>
    )
};

export default WeatherInfo; 