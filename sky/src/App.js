import React from 'react';
import { Route } from 'react-router-dom'

import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css';

import HourlyList from './components/HourlyList';
import WeeklyList from './components/WeeklyList'
import Summary from './components/Summary'


class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <Header />

        <Route
          path="/"
          exact render={() => <Home
          />} />

        <Route
          path="/hourly"
          exact render={() => <HourlyList />} />
        
        <Route
          path="/weekly"
          exact render={() => <WeeklyList />} />

          <Route
          path="/summary"
          exact render={() => <Summary />} />
        <Footer />
      </div>
    );
  }
}

export default App;
