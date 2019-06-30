import React from 'react';
import { Route } from 'react-router-dom'

import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css';

import HourlyList from './components/HourlyList';
import WeeklyList from './components/WeeklyList'
class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      hourlyWeather: [],
      weeklyWeather: [],
      currentWeather: {}
    }
  }
  // updateCurrently = (object) => {
  //   console.log("APP: ", object)
  //   this.setState({
  //     currentWeather: object
  //   })
  // }

  updateHourly = (array) => {
    console.log("APP: ", array)
    this.setState({
      hourlyWeather: array
    })
  }

  updateWeekly = (array) => {
    console.log("APP: ", array)
    this.setState({
      weeklyWeather: array
    })
  }
  render() {
    return (
      <div className="App">
        <Header />

        <Route
          path="/"
          exact render={() => <Home
            updateHourly={this.updateHourly}
            updateWeekly={this.updateWeekly}
            // updateCurrently={this.updateCurrently}
          />} />

        <Route
          path="/hourly"
          exact render={() => <HourlyList hourlyWeather={this.state.hourlyWeather} />} />
        
        <Route
          path="/weekly"
          exact render={() => <WeeklyList weeklyWeather={this.state.weeklyWeather} />} />
        {/* <Route
          path="/current"
          exact render={() => <Home currentWeather={this.state.currentWeather.history} />} /> */}

        <Footer />
      </div>
    );
  }
}

export default App;
