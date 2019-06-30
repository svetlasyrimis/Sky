import React from 'react';
import { uid } from 'react-uid'
import HourlyCard from './HourlyCard'
import {Link,Route} from 'react-router-dom'
import App from '../App';

const HourlyList = (props) => {
  let hourly = JSON.parse(localStorage.getItem("hourlyWeather"));
  
  return (
    <div className="hourly-list">
      {hourly.length > 0 ? (hourly).map((item) => <div key={uid(item)}>
        <HourlyCard item={item} />
      </div>
      ) : <Route
          path="/"
          exact render={App} />}
      <Link to="/weekly"><button width="50px" >Get Weekly Forecast</button></Link>
    </div>
  )
}

export default HourlyList