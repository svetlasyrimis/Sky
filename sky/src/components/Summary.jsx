import React from 'react'
import WeatherCard from './WeatherCard'
import { Link } from 'react-router-dom'

class Summarry extends React.Component {
  constructor(props) {
    super(props)
    
  }
  
  render() {
    let current = JSON.parse(localStorage.getItem("currentWeather"))
    let location = JSON.parse(localStorage.getItem("location"))
    let flag = JSON.parse(localStorage.getItem("flag"))

    return (
      
      <div className='weather-box'>
        <div>
            <WeatherCard weatherData={current}
            location={location}
              flag={flag} />
            <Link to="/hourly"><button className='search-btn' >Get Hourly Forecast</button></Link>
                    
            <Link to="/weekly"><button className='search-btn' >Get Weekly Forecast</button></Link> 
        </div>
      </div>
      
    )
   }
}

export default Summarry
