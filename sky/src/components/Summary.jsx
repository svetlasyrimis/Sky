import React from 'react'
import WeatherCard from './WeatherCard'
import { Link } from 'react-router-dom'




class Summarry extends React.Component {
  constructor() {
    super();
    this.state = {
      current: null,
      location: null,
      flag: null
    }
  }
  componentDidMount() {
    let current = JSON.parse(localStorage.getItem("currentWeather"))
    let location = JSON.parse(localStorage.getItem("location"))
    let flag = JSON.parse(localStorage.getItem("flag"))
    this.setState({
      current,
      location,
      flag
    })
  }
  


  render() {
    const { current, location, flag } = this.state;

    return (
      
      <div className='weather-box'>
        <div>
            <WeatherCard weatherData={current}
            location={location}
              flag={flag} />
            <Link to="/hourly"><button className='search-btn' >Get Hourly Forecast</button></Link>
                    
          <Link to="/weekly"><button className='search-btn' >Get Weekly Forecast</button></Link> 
          {/* <Link to="/location"><button className='search-btn' >Location Details</button></Link>  */}
        </div>
      </div>
      
    )
   }
}

export default Summarry
