import React from 'react'

const CurrentLocation = props => {
  return (
    <div className="flex-center-row">
      
      {props.address ?
        <>
          <div className='top-card'>
            <p>Your approximate location is {props.address}.You are in {props.suburb}.</p></div>
        </> : ''}
    </div>
  )
}

export default CurrentLocation