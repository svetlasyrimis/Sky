import React from 'react'
import {Link} from 'react-router-dom'
import { capitalize } from '../services/helper'
const LocationDetails = props => {
  let locationDet = JSON.parse(localStorage.getItem("locationDetails"))
  
    return (
      <div className="weather-box">
        <div className="buttons">
          <Link to="/hourly"><button className='search-btn' >Get Hourly Forecast</button></Link>
                      
          <Link to="/weekly"><button className='search-btn' >Get Weekly Forecast</button></Link> 

          <Link to="/summary"><button className='search-btn' >Get Summary</button></Link> 
        </div>
        
        {
          Object.keys(locationDet).length > 0 && 
          <div className="weather-card">
              
            <p>Timezone {locationDet.timezone.name}</p>
            <p>Currency: {" "}
              "{locationDet.currency.name}"    {locationDet.currency.disambiguate_symbol}</p>
            <p> Subunit {locationDet.currency.subunit}</p>
            <p>Calling code: + {locationDet.callingcode}</p>
           <p>{capitalize(locationDet.roadinfo.drive_on)} <img src="./images/steering-wheel.png" width="30px" height='30px'alt="phone"/> </p>
            <p>Speed measured: {locationDet.roadinfo.speed_in}</p>

          </div>
          
          }
        
        
      
    </div>
    )
}

export default LocationDetails 