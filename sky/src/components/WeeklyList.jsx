import React from 'react'
import { uid } from 'react-uid'
import {Link,Route} from 'react-router-dom'
import App from '../App';
import WeeklyCard from './WeeklyCard'

const WeeklyList = (props) => {
  let weekly = JSON.parse(localStorage.getItem("weeklyWeather"));
  
  return (
    <div className="weekly-list">
      {weekly.length > 0 ? (weekly).map((item) => <div key={uid(item)}>
        <WeeklyCard item={item} />
      </div>
      ) : <Route
          path="/"
          exact render={App} />}
      <Link to="/hourly"><button width="50px" >Get Hourly Forecast</button></Link> 
      <Link to="/"><button width="50px" >Get Summary</button></Link> 
    </div>
  )

}

export default WeeklyList