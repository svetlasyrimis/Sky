import React from 'react';
import {dateMaker,timeConverter} from '../services/helper'
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
        <p>{timeConverter(props.item.time)}</p>
        <p>{props.item.temperature}<span>&#8457;</span></p>
        
        </div>   
    </div>
  )
} 

export default HourlyCard 

{/* Date: {dateMaker(item.time)}{' '} */}