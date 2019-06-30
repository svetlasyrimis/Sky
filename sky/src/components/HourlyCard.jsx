import React from 'react';
import {dateMaker,timeConverter} from '../services/helper'
import WeatherIcon from 'react-icons-weather'


const HourlyCard = (props) => {
  return (
    <div>
      <div className='hourly-card'>
        <WeatherIcon name="darksky"
          iconId={props.item.icon}
          flip="horizontal"
          rotate="90"
        />
        <p>{timeConverter(props.item.time)}</p>
        <p>{props.item.temperature}<span>&#8457;</span></p>
        
        </div>   
    </div>
  )
} 

export default HourlyCard 

{/* Date: {dateMaker(item.time)}{' '} */}