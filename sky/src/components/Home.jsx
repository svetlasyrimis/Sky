import React from 'react';
import Input from './Input'
import { fetchWeather, getCoordinates } from '../services/api-helper'
import { uid } from 'react-uid'
import WeatherCard from './WeatherCard';


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
    console.log(date)
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
    const currentWeather = Object.values(response)
    // console.log(currentWeather)
    let current = currentWeather[3]
    // console.log(current)
    this.setState({
      currentWeather: current
    })
    console.log(this.state.currentWeather)
  }


  render() {
    return (
      <div className='main'>
        <Input
          name={this.state.name}
          value={this.state.value}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit} />
        <main>
          <div>
            {Object.keys(this.state.currentWeather).length > 0 &&
              <WeatherCard weatherData={this.state.currentWeather} />
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
