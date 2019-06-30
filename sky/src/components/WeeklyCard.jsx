import React from 'react';

import ReactAnimatedWeather from 'react-animated-weather'
import {dateMaker} from '../services/helper'

const WeeklyCard = (props) => {
  
  let icon = props.item.icon
  icon = icon.toUpperCase().replace(/-/g, "_");
  
  return (
    <div className="weather-card">
      <ReactAnimatedWeather
        icon={icon}
        size={128}
        animate={true}
      />
      <p>{dateMaker(props.item.time)}</p>
      <p className="temp">{props.item.temperatureMax} / {props.item.temperatureMin} <span>&#8457;</span></p>
      <p>{props.item.summary}</p>
      <p>Humidity {Math.floor(props.item.humidity * 100)} %</p>
      <p>Chance of rain:{Math.floor(props.item.precipProbability * 100)} %</p>
      <p>Wind speed: {props.item.windSpeed} mph</p>

    </div>

  )

}

export default WeeklyCard