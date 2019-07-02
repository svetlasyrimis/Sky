import React from 'react'

const CurrentLocation = props => {
  return (
    <div className="flex-center-row">
      
      {props.address ?
        <>
          <div className='error-card'>
            <p>Your approximate location is {props.address},{props.suburb}</p></div>
        </> : ''}
    </div>
  )
}

export default CurrentLocation