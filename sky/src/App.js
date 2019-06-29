import React from 'react';
// import { Link, Route } from 'react-router-dom'

// import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
      
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
