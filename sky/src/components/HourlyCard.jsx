import React from 'react';
import {weekdayMaker,timeConverter} from '../services/helper'
import ReactAnimatedWeather from 'react-animated-weather'

const HourlyCard = (props) => {
  let icon = props.item.icon 
  icon = icon.toUpperCase().replace(/-/g,"_");
  return (
    <div>
      <div className='hourly-card'>
        <ReactAnimatedWeather 
          icon={icon}
      
          size={128}
          animate={true}
        />
        
        <p>{weekdayMaker(props.item.time)} {timeConverter(props.item.time)}</p>
        <p className="temp">{props.item.temperature}<span>&#8457;</span></p>
        
        
        </div>   
    </div>
  )
} 

export default HourlyCard 
