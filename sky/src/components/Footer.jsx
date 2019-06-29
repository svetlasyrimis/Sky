import React from 'react';


export default class Footer extends React.Component {
  render() {
    return (
      
        <footer>
          <a href="https://darksky.net/forecast/40.7127,-74.0059/us12/en" target='blank'><img className='logo'src="./images/darksky.png" alt="darksky-logo" width="80px" height="60px"></img></a>
          <h3><span id="symbol">&amp;</span></h3>
        
          <a href="https://opencagedata.com/" target='blank'><img className='logo' src="./images/opencage2.png" alt="open-cage-logo" width="80px" height="60px"
          ></img></a>
        </footer>
    
    )
  }
  
}