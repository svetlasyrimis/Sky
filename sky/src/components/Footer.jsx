import React from 'react';

const Footer = () => {
    return (
      <footer className='flex-center-row'>
        <p>Powered by</p>
          <a href="https://darksky.net/forecast/40.7127,-74.0059/us12/en" target='blank'><img className='logo'src="/images/darkskylogo-transparent.png" alt="darksky-logo" width="80px" height="60px"></img></a>
          <p id="symbol">&amp;</p>
        
          <a href="https://opencagedata.com/" target='blank'><img className='logo' src="https://assets.opencagedata.com/assets/opencage-cage.white-6d275f656f4efbe4fd38e394eb30a09ef0328aed3bf35209415c04d149e10f27.svg" alt="open-cage-logo" width="80px" height="60px"
          ></img></a>
        </footer>
    )
  
  
}

export default Footer