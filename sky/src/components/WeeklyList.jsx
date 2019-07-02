import React from 'react'
import { uid } from 'react-uid'
import {Link,Route} from 'react-router-dom'
import App from '../App';
import WeeklyCard from './WeeklyCard'

const WeeklyList = (props) => {
  let weekly = JSON.parse(localStorage.getItem("weeklyWeather"));
  
  return (
    <div className="weekly-list">
      <div>
              <Link to="/hourly"><button className="search-btn" >Get Hourly Forecast</button></Link> 
              <Link to="/summary"><button className="search-btn" >Get Summary</button></Link> 
              <Link to="/location"><button className="search-btn" >Get Location Info</button></Link> 
        </div>
      {weekly.length > 0 ? (weekly).map((item) => <div className='weekday-wrap' key={uid(item)}>
    
          <WeeklyCard item={item} />
      </div>
      ) : <Route
          path="/"
          exact render={App} />}
    </div>
  )

}

export default WeeklyList