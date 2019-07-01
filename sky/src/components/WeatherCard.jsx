import React from 'react';

import ReactAnimatedWeather from 'react-animated-weather'


const WeatherCard = (props) => {
  
  let icon = props.weatherData.icon 
  icon = icon.toUpperCase().replace(/-/g,"_");
  return (
    <div className="weather-card">
      <ReactAnimatedWeather 
        icon={icon}
        size={128}
        animate={true}
      />
      <p>{props.location.city ? props.location.city : props.location.county}, {props.location.state ? props.location.state : ""} {props.location.country} <span role="img" aria-label="flag" img="flag" id="flag"/>{props.flag}</p>
     
      <p className="temp">{props.weatherData.temperature}<span>&#8457;</span></p>
      <p>Feels like: {props.weatherData.apparentTemperature}<span>&#8457;</span></p>
      <p className="summary">{props.weatherData.summary}</p>
      <p>Humidity {Math.floor(props.weatherData.humidity * 100)} %</p>
      
      <p>Wind speed: {props.weatherData.windSpeed} mph</p>

    </div>

  )

}

export default WeatherCard