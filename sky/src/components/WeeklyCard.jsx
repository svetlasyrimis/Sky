import React from 'react';

import ReactAnimatedWeather from 'react-animated-weather'
import {dateMaker,timeConverter} from '../services/helper'

const WeeklyCard = (props) => {
  console.log(props.item)
  let icon = props.item.icon
  icon = icon.toUpperCase().replace(/-/g, "_");
  
  return (
    <div className="daily-card">
      <ReactAnimatedWeather
        icon={icon}
        size={128}
        animate={true}
      />
      <p>{dateMaker(props.item.time)}</p>
      <img src="./images/high-temperature.png"  alt="high-temp"/> <img src="./images/low-temperature.png"  alt="low-temp"/><p className="temp">{props.item.temperatureMax} / {props.item.temperatureMin} <span>&#8457;</span></p><hr/>
      <p>{props.item.summary}</p>
      <p>Humidity {Math.floor(props.item.humidity * 100)} %</p>
      <p>Chance of rain:{Math.floor(props.item.precipProbability * 100)} %</p>
      <p>Wind speed: {props.item.windSpeed} mph</p>
      <div className="sun">
      <div>
        <img src='./images/sunrise.png' alt="sunrise" />
          <p>{timeConverter(props.item.sunriseTime)}</p>
        </div>
      <div>
          <img src='./images/sunset.png' alt="sunset" />
          <p> {timeConverter(props.item.sunsetTime)} </p>
      </div>
      </div>
    </div>

  )

}

export default WeeklyCard