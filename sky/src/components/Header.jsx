import React from 'react';
import {Link,Route} from 'react-router-dom'
import Home from './Home'

class Header extends React.Component  {
  render() {
    return (
      <div>
       <header>
        <nav>
        <Link to="/"><img id="logo" src="/images/logo.png" alt="" width="100px" height="100px"/></Link>
        </nav>
      </header>
      <Route
         path="/"
        exact render={() => <Home />} />
      </div>
    )
  }
}
export default Header