import React from 'react';
import { Link } from 'react-router-dom'


class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <Link to="/"><img id="logo" src="/images/logo.png" alt="" width="100px" height="100px" /></Link>
         
        </nav>
      </header>
    )
  }
}
export default Header