import React from 'react'
import WeatherCard from './WeatherCard'

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
      <div className='weather-box flex-center-column'>
        <WeatherCard weatherData={current}
          location={location}
          flag={flag} />
      </div>
    )
  }
}

export default Summarry
