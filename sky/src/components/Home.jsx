import React from 'react';
import Input from './Input'
import { fetchWeather, getCoordinates, getDetails } from '../services/api-helper'
import WeatherCard from './WeatherCard';
import { Link } from 'react-router-dom'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentWeather: {},
      hourlyWeather: [],
      coordinates: '',
      city: '',
      flag: '',
      value: '',
      response: []
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

    let flag = location.data.results[0].annotations.flag
    let exactLocation = location.data.results[0].components

    let current = response.currently
    let hourly = response.hourly.data

    // console.log(hourly)

    this.setState({
      currentWeather: current,
      location: exactLocation,
      flag: flag,
      hourlyWeather: hourly
    })

    localStorage.setItem("hourlyWeather", JSON.stringify(hourly));

    this.props.updateHourly(hourly)

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

                <Link to="/hourly"><button width="50px" >Get Hourly Forecast</button></Link>

                <button width="50px" >Get Weekly Forecast</button>
              </div>
            </div>
          }
        </main>
      </div>

    )
  }
}

export default Home




