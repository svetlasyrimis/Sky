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
      weeklyWeather: [],
      location: '',
      flag: '',
      value: '',
      address: '',
      suburb: '',
      isSearch: false,
      errorMessage: ""
    }
  }

  saveStateToLocalStorage = () => {
    for (let key in this.state) {
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  getDataFromCoordinates = async (coordinates, search) => {
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
      suburb: suburb,
      isSearch: search
    })
    this.saveStateToLocalStorage()
  }

  componentDidMount() {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(async position => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        let coordinates = `${lat},${lon}`
        this.getDataFromCoordinates(coordinates, false)
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
      this.getDataFromCoordinates(coordinates, true)
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

{this.state.errorMessage.length > 0 &&
          <Error error={this.state.errorMessage} />}

        {!this.state.isSearch &&
          <CurrentLocation address={this.state.address}
            suburb={this.state.suburb} />}
        
        <main className="weather-box flex-center-column">

          {Object.keys(this.state.currentWeather).length > 0 &&


              <WeatherCard weatherData={this.state.currentWeather}
                location={this.state.location}
                flag={this.state.flag}
              />


          }
        </main>
      </div>

    )
  }
}

export default withRouter(Home)




