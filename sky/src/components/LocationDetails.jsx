import React from 'react'
import { capitalize } from '../services/helper'

const LocationDetails = props => {
  let locationDet = JSON.parse(localStorage.getItem("locationDetails"))

  return (
    <div className="weather-box flex-center-column">
      {
        Object.keys(locationDet).length > 0 &&
        <div className="weather-card flex-center-column card">

          <h4>Timezone: {locationDet.timezone.name}</h4>
          <p>Currency: {" "}
            "{locationDet.currency.name}"    {locationDet.currency.disambiguate_symbol}</p>
          <p> Subunit {locationDet.currency.subunit}</p>
          <p> <img src="./images/phone-call.png" width="30px" height='30px' alt="phone" /> Calling code: + {locationDet.callingcode}</p>
          <p>{capitalize(locationDet.roadinfo.drive_on)} <img src="./images/steering-wheel.png" width="30px" height='30px' alt="wheel" /> </p>
          <p>Speed measured: {locationDet.roadinfo.speed_in}</p>

        </div>
      }
    </div>
  )
}

export default LocationDetails 