import React from 'react'


const Error = (props) => {
  
  return (
    <div className="flex-center-row">
      {props.error ? 
        <>
          <div className='top-card error-card'>
            
            <p>{props.error}</p></div>
        </> : ''}
    </div>
  )
}

export default Error 