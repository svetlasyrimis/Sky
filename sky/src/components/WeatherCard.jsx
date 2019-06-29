import React from 'react';
import WeatherIcon from 'react-icons-weather'
import { uid } from 'react-uid';

const WeatherCard = (props) => {
  
  
  return (
    <div className="weather-card">
      <WeatherIcon name="darksky"
        iconId={props.weatherData.icon}
        flip="horizontal"
        rotate="90"
        />
      <h2>{props.weatherData.temperature} <span>&#8457;</span></h2>
      <h2>Feels like: {props.weatherData.apparentTemperature}</h2>
      <h2>{props.weatherData.summary}</h2>
      <h3>Humidity {Math.floor(props.weatherData.humidity * 100)} %</h3>
      <h3></h3>
    </div>

  )

}

export default WeatherCard