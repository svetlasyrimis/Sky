import React from 'react';
import { uid } from 'react-uid'
import HourlyCard from './HourlyCard'
import {Redirect} from 'react-router-dom'


const HourlyList = (props) => {
  let hourly = JSON.parse(localStorage.getItem("hourlyWeather"));
  return (
   
    <div className="flex-center-row">
      {(hourly && hourly.length) ? (hourly).map((item) => 
        <HourlyCard key={uid(item)} item={item} />
      ) : <Redirect to='/' />}
      </div>
  )
}

export default HourlyList