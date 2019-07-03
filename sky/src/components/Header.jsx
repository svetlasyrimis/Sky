import React from 'react';
import { Link } from 'react-router-dom'


class Header extends React.Component {
  render() {
    return (
      <header className="flex-center-row">

        <Link to="/"><img id="logo" src="/images/logo.png" alt="" width="100px" height="100px" /></Link>
        <Link to="/summary"><button className='search-btn' >Right now</button></Link>
        <Link to="/hourly"><button className='search-btn' >48h Forecast</button></Link>

        <Link to="/weekly"><button className='search-btn' >Weekly Forecast</button></Link>

        <Link to="/location"><button className='search-btn' >Location Info</button></Link>

      </header>
    )
  }
}
export default Header