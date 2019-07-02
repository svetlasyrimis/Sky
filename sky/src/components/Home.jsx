import React from 'react';
import Input from './Input'
import { fetchWeather, getCoordinates, getDetails } from '../services/api-helper'
import WeatherCard from './WeatherCard';

import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import Error from './Error'
import CurrentLocation from './CurrentLocation'




class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentWeather: {},
      hourlyWeather: [],
      weeklyWeather:[],
      location: '',
      flag: '',
      value: '',
      address: '',
      suburb: '',
      
    }
  }
     
  componentDidMount() {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(async position => {
          let lat = position.coords.latitude;
          let lon = position.coords.longitude;
          let coordinates = `${lat},${lon}`
        const response = await fetchWeather(coordinates)
        const location = await getDetails(coordinates)
        let details = location.data.results[0].annotations
        let exactLocation = location.data.results[0].components
        
        let address = location.data.results[0].formatted
        let suburb = exactLocation.suburb
        let flag = details.flag

        let hourly = response.hourly.data
        let weekly = response.daily.data


        this.setState({
          currentWeather: response.currently,
          location: exactLocation,
          flag: flag,
          hourlyWeather: hourly,
          weeklyWeather: weekly,
          locationDetails: details,
          address: address,
          suburb: suburb
        })
        localStorage.setItem("hourlyWeather", JSON.stringify(hourly));
        localStorage.setItem("weeklyWeather", JSON.stringify(weekly));
        localStorage.setItem("currentWeather", JSON.stringify(response.currently));
        localStorage.setItem("flag", JSON.stringify(flag));
        localStorage.setItem("location", JSON.stringify(exactLocation));
        localStorage.setItem("locationDetails", JSON.stringify(details));
        },
        error => {
          console.log("Error: ", error)
        },
        { enableHighAccuracy: true });
    } 

  }
  
  handleChange = (ev) => {
    this.setState({
      value: ev.target.value
    });
  }

  handleSubmit = async (ev) => {
    ev.preventDefault()
    try {
      const coordinates = await getCoordinates(this.state.value)
      const response = await fetchWeather(coordinates)
      const location = await getDetails(coordinates)
      
    
      let details = location.data.results[0].annotations
      let flag = details.flag
      
      
      let exactLocation = location.data.results[0].components
    
      let current = response.currently
      let hourly = response.hourly.data
      let weekly = response.daily.data
    
      this.setState({
        currentWeather: current,
        location: exactLocation,
        flag: flag,
        hourlyWeather: hourly,
        weeklyWeather: weekly,
        locationDetails: details,
        errorMessage: '',
        address: '',
        suburb: ''

      
      })
      localStorage.setItem("hourlyWeather", JSON.stringify(hourly));
      localStorage.setItem("weeklyWeather", JSON.stringify(weekly));
      localStorage.setItem("currentWeather", JSON.stringify(current));
      localStorage.setItem("flag", JSON.stringify(flag));
      localStorage.setItem("location", JSON.stringify(exactLocation));
      localStorage.setItem("locationDetails", JSON.stringify(details));
    } catch (e) {
      this.setState({
        errorMessage: "Not a valid input. Please enter a location,city or an address"

      })
    }
    
  }
  
  render() {
    
    return (
      <div className='main'>
        
        <Input
          name={this.state.name}
          value={this.state.value}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit} /> 
        <Error error={this.state.errorMessage} />
        <CurrentLocation address={this.state.address}
          suburb={this.state.suburb}/>
        <main className="weather-box flex-center-column">
        
          
          {Object.keys(this.state.currentWeather).length > 0 &&
            <div>
                <Link to="/hourly"><button className='search-btn' >Get Hourly Forecast</button></Link>
                
                <Link to="/weekly"><button className='search-btn' >Get Weekly Forecast</button></Link> 
                        
                <Link to="/location"><button className='search-btn' >Get Location Data</button></Link>
              <WeatherCard weatherData={this.state.currentWeather}
                location={this.state.location}
                flag={this.state.flag}
            />
            
              <div className="forecast">
              </div>
            </div> 
          
          }
        </main>
      </div>

    )
  }
}

export default withRouter(Home)




