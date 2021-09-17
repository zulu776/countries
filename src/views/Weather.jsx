import React, {useState,useEffect} from "react";
import { useParams } from "react-router-dom";

import Header from "../components/Header";
import WeatherInfo from "../components/Weather/WeatherInfo"

const Weather = () => {
    const {capital} = useParams();
    console.log(capital)
    const [weather, setWeather] = useState();
    const accessToken = `b48158e632e526b15afc9b58410f5825`;
    const url = 
    `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${accessToken}`;

    

    useEffect(() => {  
        const handleFetchAPI = async() => {
            try {
            
                const response = await fetch(url);
                const result = await response.json();
                setWeather(result);
            
            } catch (error) {
                console.log(error);
            };
        }; 
        handleFetchAPI();
    },[url])

    
    console.log(weather)

    return(
        <>
        <Header />           
        {weather && (
           <WeatherInfo
           capital={capital} 
           temp={weather.main.temp}
           humidity={weather.main.humidity}
           wind={weather.wind.speed}
           />
            )}

        </>
    );
};
export default Weather;

