import React from 'react';
import { Route } from 'react-router-dom'

import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css';
import HourlyList from './components/HourlyList';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      hourlyWeather: [],
    }
  }


  updateHourly = (array) => {
    console.log("APP: ",array)
    this.setState({
      hourlyWeather: array
    })
  }

  render() {
    return (
      <div className="App">

        <Header />

        <Route
          path="/"
          exact render={() => <Home updateHourly={(array) => this.updateHourly} />} />

        <Route
          path="/hourly"
          exact render={() => <HourlyList hourlyWeather={this.state.hourlyWeather} />} />

        <Footer />
      </div>
    );
  }
}

export default App;
