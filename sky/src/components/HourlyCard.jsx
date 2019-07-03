import React from 'react';
import { weekdayMaker, timeConverter } from '../services/helper'
import ReactAnimatedWeather from 'react-animated-weather'

const HourlyCard = (props) => {
  let icon = props.item.icon
  icon = icon.toUpperCase().replace(/-/g, "_");

  let weekday = weekdayMaker(props.item.time) + " " + timeConverter(props.item.time)
  
  return (
    <div className='hourly-card card'>
      <div>
        <ReactAnimatedWeather
          icon={icon}
          size={128}
          animate={true}
        />
        <p>{weekday}</p>
      </div>
      <p className="temperature">{props.item.temperature}<span>&#8457;</span></p>
    </div>
  )
}

export default HourlyCard 
