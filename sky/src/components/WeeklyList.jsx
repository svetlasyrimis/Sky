import React from 'react'
import { uid } from 'react-uid'
import {Link,Route} from 'react-router-dom'
import App from '../App';
import WeeklyCard from './WeeklyCard'

const WeeklyList = (props) => {
  let weekly = JSON.parse(localStorage.getItem("weeklyWeather"));
  
  return (
    <div className="flex-center-column">
      <div>
              <Link to="/hourly"><button className="search-btn" >Get Hourly Forecast</button></Link> 
              <Link to="/summary"><button className="search-btn" >Right Now</button></Link> 
              <Link to="/location"><button className="search-btn" >Get Location Info</button></Link> 
      </div>
      <div className='flex-center-row weekly-list'>
        {weekly.length > 0 ? (weekly).map((item) => 
      
            <WeeklyCard item={item} key={uid(item)}/>
        
        ) : <Route
            path="/"
              exact render={App} />}
      </div>
    </div>
  )

}

export default WeeklyList