import React from 'react';
import { uid } from 'react-uid'
import HourlyCard from './HourlyCard'
import {Route} from 'react-router-dom'
import App from '../App';

const HourlyList = (props) => {
  let hourly = JSON.parse(localStorage.getItem("hourlyWeather"));
  return (
    <div className="flex-center-row">
      {hourly.length > 0 ? (hourly).map((item) => 
        <HourlyCard key={uid(item)} item={item} />
      ) : <Route
          path="/"
          exact render={App} />}
      </div>
  )
}

export default HourlyList