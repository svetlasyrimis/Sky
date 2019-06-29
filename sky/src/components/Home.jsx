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


  dateMaker = (timestamp) => {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let timeObject = new Date(timestamp * 1000);
    let date = timeObject.toLocaleDateString("en-US", options)
    // console.log(date)
    return date
  }

  timeConverter = (timestamp) => {
    let timeObject = new Date(timestamp * 1000);
    let time = Object.values(timeObject.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3"));
    return time
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
    console.log("HOME: ",hourly)

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
          <div>
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
          </div>

        </main>
      </div>

    )
  }
}

export default Home



{/* let response = await fetchWeather()
     let newResponse = Object.values(response)
     console.log(newResponse)
     let stats = newResponse.slice(0, 3)
    console.log(stats)
    let coordinates = await getCoordinates()
   let flag = await getDetails()
   let flag = await getDetails()
  this.setState(
     currentWeather: (newResponse[3]),
      hourlyWeather: newResponse[4].data,
      coordinates: coordinates,
      city: stats[2].split("/").reverse().join(", "),
      flag: flag
     })
      debugger
      console.log(this.state.currentWeather)
      console.log(this.state.hourlyWeather)
     console.log(this.state.flag) */}
