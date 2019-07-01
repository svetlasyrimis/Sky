import React from 'react'

import {Link} from 'react-router-dom'

const LocationDetails = props => {

  // console.log(locationData.timezone['name'])

  let locationDet = JSON.parse(localStorage.getItem("locationDetails"))
  
    return (
      <div className="weather-box">
        <div>
        {
          Object.keys(locationDet).length > 0 && 
          <div className="weather-card">
          
            <p>Timezone {locationDet.timezone.name}</p>
            <p>Currency: {" "}
              "{locationDet.currency.name}"    {locationDet.currency.disambiguate_symbol}</p>
            <p> Subunit {locationDet.currency.subunit}</p>
            <p>Calling code {locationDet.callingcode}</p>
            <p>Drive on: {locationDet.roadinfo.drive_on}</p>
            <p>Speed measured: {locationDet.roadinfo.speed_in}</p>

          </div>
          
          }
          <Link to="/hourly"><button className='search-btn' >Get Hourly Forecast</button></Link>
                    
          <Link to="/weekly"><button className='search-btn' >Get Weekly Forecast</button></Link> 
        </div>
        
      
    </div>
    )
}

export default LocationDetails 