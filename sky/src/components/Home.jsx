import React from 'react';
import Input from './Input'
import { fetchWeather, getCoordinates, getDetails } from '../services/api-helper'
import WeatherCard from './WeatherCard';
import { Link } from 'react-router-dom';
import {withRouter}  from 'react-router-dom'

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
      details: []
    }
  }
  
  handleChange = (ev) => {
    this.setState({
      value: ev.target.value
    });
  }

  handleSubmit = async (ev) => {
    ev.preventDefault()
    const coordinates = await getCoordinates(this.state.value)
    const response = await fetchWeather(coordinates)
    const location = await getDetails(coordinates)
    
    console.log(location)
    let flag = location.data.results[0].annotations.flag
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
      
    })
    
    // console.log(this.state.weeklyWeather)
    localStorage.setItem("hourlyWeather", JSON.stringify(hourly));
    localStorage.setItem("weeklyWeather", JSON.stringify(weekly));
    localStorage.setItem("currentWeather", JSON.stringify(current));
    localStorage.setItem("flag", JSON.stringify(flag));
    localStorage.setItem("location", JSON.stringify(exactLocation));
    
    // this.props.updateHourly(hourly)
    // this.props.updateWeekly(weekly)
    // this.props.updateCurrently(current)
    
  }
  
  render() {
    
    return (
      <div className='main'>
        
        <Input
          name={this.state.name}
          value={this.state.value}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit} />
        <main className="weather-box">
          {Object.keys(this.state.currentWeather).length > 0 &&
            <div>
              <WeatherCard weatherData={this.state.currentWeather}
                location={this.state.location}
                flag={this.state.flag}
              />
              <div className="forecast">

                <Link to="/hourly"><button className='search-btn' >Get Hourly Forecast</button></Link>
                
                <Link to="/weekly"><button className='search-btn' >Get Weekly Forecast</button></Link> 
              </div>
            </div> 
          
          }
        </main>
      </div>

    )
  }
}

export default withRouter(Home)




