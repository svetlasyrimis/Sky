import React from 'react';

import { uid } from 'react-uid'
import HourlyCard from './HourlyCard'
import Home from './Home'
import {Route} from 'react-router-dom'
import App from '../App';

const HourlyList = (props) => {
  console.log(props.hourlyWeather)
  return (
    <div className="hourly-list">
      {props.hourlyWeather.length > 0 ? (props.hourlyWeather).map((item) => <div key={uid(item)}>
        <HourlyCard item={item} />
      </div>
      ) : <Route
          path="/"
          exact render={App} />}
        
    </div>
  )
}

export default HourlyList