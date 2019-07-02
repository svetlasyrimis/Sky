import React from 'react';
import { uid } from 'react-uid'
import HourlyCard from './HourlyCard'
import {Link,Route} from 'react-router-dom'
import App from '../App';

const HourlyList = (props) => {
  let hourly = JSON.parse(localStorage.getItem("hourlyWeather"));
  
  return (
    <div>
    <div className="buttons">
          <Link to="/weekly"><button className='search-btn' >Get Weekly Forecast</button></Link>
                      
          <Link to="/summary"><button className='search-btn' >Right now</button></Link> 

          <Link to="/location"><button className='search-btn' >Get Location Info</button></Link> 
    </div>
    <div className="flex-center-row">
     
      {hourly.length > 0 ? (hourly).map((item) => <div  key={uid(item)}>
        <HourlyCard item={item} />
      </div>
      ) : <Route
          path="/"
          exact render={App} />}
      </div>
    </div>
  )
}

export default HourlyList